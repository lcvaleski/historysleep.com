---
title: "Fix Layout Overlap and Split Mobile/Desktop Rendering"
type: fix
date: 2026-02-04
---

# Fix Layout Overlap and Split Mobile/Desktop Rendering

## Overview

The landing page has layout overlap issues on desktop caused by a fixed `sm:h-[80vh]` height constraint on the hero section. When the iPhone mockup (638px) + heading + audio player + padding exceeds 80% of the viewport height, content overflows into the QR code section below.

Beyond the immediate bug, the responsive approach (single component with `sm:` Tailwind breakpoints) has been a recurring source of layout issues. This plan fixes the overlap and splits the page into separate `MobilePage` and `DesktopPage` components for independent control, with shared logic extracted into reusable hooks and components.

## Problem Statement

1. **Overlap bug**: The hero section uses `sm:h-[80vh]` (fixed height on desktop) at `app/page.tsx:156`. Content taller than 80vh overflows, causing the audio player to overlap the "Hit play. Fall asleep." text above the QR code.
2. **Responsive fragility**: Mobile and desktop layouts are coupled through `sm:hidden` / `hidden sm:flex` toggles and `sm:` prefix overrides on the same elements. Changes to one breakpoint risk breaking the other.
3. **No independent control**: Cannot tune mobile spacing without worrying about desktop side effects, and vice versa.

## Proposed Solution

### Architecture

Convert `app/page.tsx` from a monolithic `'use client'` component into a **server component** that reads the user-agent header and conditionally renders either `<MobilePage />` or `<DesktopPage />`. Extract shared logic into a `components/` directory.

```
app/
  page.tsx              → Server component (device detection + routing)
  layout.tsx            → Unchanged
components/
  MobilePage.tsx        → 'use client' — mobile layout
  DesktopPage.tsx       → 'use client' — desktop layout
  AudioPlayer.tsx       → Shared audio player UI
  ReviewCards.tsx       → Shared review cards
  Footer.tsx            → Shared footer
  AppPreview.tsx        → Shared iPhone mockup with video overlay
  hooks/
    useVideoPlayer.ts   → Video playback state machine
    useAudioPlayer.ts   → Audio playback logic + 10s cap
  analytics.ts          → trackEvent + click handlers
```

### Detection Strategy

`app/page.tsx` becomes a server component that reads `headers()` from `next/headers`:

```tsx
// app/page.tsx (server component — no 'use client')
import { headers } from 'next/headers'
import MobilePage from '@/components/MobilePage'
import DesktopPage from '@/components/DesktopPage'

export default async function Home() {
  const headersList = await headers()
  const userAgent = headersList.get('user-agent') || ''
  const isMobile = /iPhone|Android|webOS|BlackBerry|Opera Mini/i.test(userAgent)

  return isMobile ? <MobilePage /> : <DesktopPage />
}
```

**Fallback**: Unknown or missing user-agents (bots, curl, etc.) get the desktop version. iPads with desktop Safari UA get the desktop version (their viewport is wide enough).

**Caching note**: Calling `headers()` makes this route dynamic in Next.js 15 — every request hits the server. For a simple landing page this is acceptable; server render time is minimal.

## Technical Considerations

### Background Gradient Continuity

The current gradient flows across sections:
- Hero: `bg-gradient-to-b from-ms-nocturne/95 to-[#1f1410]`
- QR + Reviews: `bg-[#1f1410]` (matches gradient end)
- Footer: `bg-ms-nocturne`

Both `MobilePage` and `DesktopPage` must preserve this exact gradient structure. The hero section height changes from fixed to auto, so the gradient endpoint shifts with content height — but since it transitions into a matching solid color (`#1f1410`), this remains seamless.

### Section Height Fix

Remove fixed viewport heights entirely. Both components use auto-height sections with padding for spacing:

- **Hero**: Remove `sm:h-[80vh]` and `min-h-[75vh]`. Use padding (`pt-24 pb-16` on mobile, `pt-32 pb-20` on desktop) to control vertical spacing.
- **QR/Download**: Keep explicit padding, no height constraints.
- **Reviews**: Keep explicit padding, no height constraints.

### SEO

Both versions have the same content, same heading hierarchy, same links. Google crawling with a desktop UA gets the desktop version with identical text content. No cloaking risk since the difference is only spacing/layout.

### Video Format

The `.mov` video only plays on Safari. This is a pre-existing issue, not introduced by this change. Flagged for a separate fix (add MP4 fallback `<source>`).

## Acceptance Criteria

- [ ] Desktop: No overlap between audio player and QR code section at any common viewport (1024px, 1280px, 1440px, 1920px)
- [ ] Mobile: No overlap between any sections at common viewports (375px, 390px, 414px, 430px)
- [ ] Background gradient transitions smoothly across all sections on both versions
- [ ] Audio player works identically on both versions (play, pause, progress, 10s cap)
- [ ] Video demo plays and transitions identically on both versions
- [ ] App Store links track correct analytics events (`hero` vs `final_cta` location)
- [ ] Mobile version shows iOS download button, desktop version shows QR code
- [ ] Review cards render correctly on both versions
- [ ] Footer links (Contact, Privacy) work on both versions
- [ ] Bots/crawlers receive the desktop version with full content
- [ ] No visual regression: both versions match the current design (just with fixed spacing)

## Implementation Steps

### Step 1: Create shared components and hooks

Extract from `app/page.tsx` into reusable pieces:

**`components/hooks/useVideoPlayer.ts`**
- Extract lines 14-17 (state), lines 23-73 (effects) from `app/page.tsx`
- Returns: `{ showVideo, fadeVideo, videoLoaded, contentLoaded, videoRef }`

**`components/hooks/useAudioPlayer.ts`**
- Extract lines 18-19 (state), lines 76-118 (effects + togglePlayPause) from `app/page.tsx`
- Returns: `{ isPlaying, currentTime, audioRef, togglePlayPause }`
- Fix: wrap `audio.play()` in try/catch to handle autoplay rejection

**`components/analytics.ts`**
- Extract `trackEvent`, `handleAppStoreHeroClick`, `handleAppStoreCTAClick` (lines 120-140)
- Fix: QR/Download section should use `handleAppStoreCTAClick` (currently incorrectly uses `handleAppStoreHeroClick` at line 258)

**`components/AppPreview.tsx`**
- iPhone mockup frame + video overlay + glow effect (lines 167-206)
- Props: dimensions (`width`, `height`), border radius, video/image refs from hooks

**`components/AudioPlayer.tsx`**
- The pill-shaped player (lines 208-245)
- Props: `isPlaying`, `currentTime`, `togglePlayPause`, `audioRef`

**`components/ReviewCards.tsx`**
- The three review cards (lines 291-339)
- Self-contained, no props needed (or pass card size classes as props for mobile/desktop tuning)

**`components/Footer.tsx`**
- Footer content (lines 401-415)
- Self-contained, no props needed

### Step 2: Create MobilePage and DesktopPage

**`components/MobilePage.tsx`** (`'use client'`)
- Composes shared components with mobile-specific spacing
- Hero section: `pt-20 pb-12` padding, no height constraints
- iPhone mockup: `w-[276px] h-[588px]`, `rounded-[16px]`
- Shows iOS download button (no QR code)
- Audio player: `mt-8 mb-0`
- Review cards: `max-w-[280px]`, stacked

**`components/DesktopPage.tsx`** (`'use client'`)
- Composes shared components with desktop-specific spacing
- Hero section: `pt-32 pb-20` padding, no height constraints
- iPhone mockup: `w-[300px] h-[638px]`, `rounded-[20px]`
- Shows QR code (no iOS download button)
- Audio player: `mt-8 mb-12`
- Review cards: `min-w-[300px] max-w-[320px]`, side-by-side

### Step 3: Convert page.tsx to server component

- Remove `'use client'` directive
- Remove all React hooks and state
- Import `headers` from `next/headers`
- Detect mobile via user-agent regex
- Render `<MobilePage />` or `<DesktopPage />`

### Step 4: Bug fixes included in this work

- [x] Fix analytics: QR/Download section Link should use `handleAppStoreCTAClick` instead of `handleAppStoreHeroClick` (`app/page.tsx:258`)
- [x] Fix audio play rejection: wrap `audio.play()` in try/catch, revert `isPlaying` on failure
- [x] Remove dead `_redirects` file (`public/_redirects`)

## Dependencies & Risks

**Risk: User-agent misclassification**
- iPads send desktop UA — they get the desktop page. This is acceptable since iPads have wide viewports.
- If a mobile user somehow gets the desktop page, the layout is still functional (just with desktop spacing). No broken state.

**Risk: Dynamic rendering performance**
- Calling `headers()` makes the page dynamic (no static CDN cache). For this small landing page, server render time is negligible. Monitor TTFB after deployment.

**Risk: Code duplication in layout sections**
- Mitigated by shared components. Only the section-level layout wrappers (padding, ordering) differ between `MobilePage` and `DesktopPage`. Shared components handle all interactive logic and content.

## References

- Root cause: `app/page.tsx:156` — `sm:h-[80vh]` fixed height overflow
- Audio player: `app/page.tsx:208-245`
- QR/Download section: `app/page.tsx:249-288`
- Analytics bug: `app/page.tsx:258` — wrong click handler
- Tailwind config: `tailwind.config.js` — breakpoints (default `sm: 640px`), custom colors
- Recent padding fixes: commits `04a3f82`, `44eda95`, `3b5bbcf` (Jan 29, 2026)
