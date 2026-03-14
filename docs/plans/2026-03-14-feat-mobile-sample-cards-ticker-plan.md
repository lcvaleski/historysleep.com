---
title: "feat: Mobile auto-scrolling sample cards ticker"
type: feat
status: completed
date: 2026-03-14
---

# Mobile Auto-Scrolling Sample Cards Ticker

## Overview

On desktop, floating sample audio cards pop in/out flanking the iPhone mockup (`SampleTitles.tsx`). On mobile, these cards are completely hidden. This feature adds a horizontal auto-scrolling ticker/marquee of sample cards **above** the iPhone mockup on mobile, giving mobile visitors the same sense of content richness.

## Problem Statement

Mobile visitors see no indication of what content the app offers until they download it. The desktop experience communicates "rich catalog of boring audio" through the animated floating cards — mobile needs an equivalent that works within a narrow viewport.

## Proposed Solution

A continuously scrolling horizontal ticker row positioned between the hero headline and the iPhone mockup in `MobilePage.tsx`. Cards slide left in an infinite loop using CSS `@keyframes` animation (no JS animation libraries). The same 12 sample titles from the desktop component are reused.

### Layout (ASCII)

```
┌─────────────────────┐
│    BORE HELPS YOU    │
│     FALL ASLEEP      │
│                      │
│ ←┌────┐┌────┐┌────┐← │
│  │card││card││card│   │
│  └────┘└────┘└────┘   │
│  continuously slides  │
│     ┌─────────┐       │
│     │ iPhone  │       │
│     │ mockup  │       │
│     └─────────┘       │
└───────────────────────┘
```

## Technical Approach

### 1. Extract shared data — `data/sampleTitles.ts`

Move the `titles` array out of `SampleTitles.tsx` into a shared module so both desktop and mobile components import from the same source.

```typescript
// data/sampleTitles.ts
export const sampleTitles = [
  { category: 'C-SPAN', title: 'Watergate Hearings, 1973', bg: '...' },
  // ... all 12 entries
]
```

Update `components/SampleTitles.tsx` to `import { sampleTitles } from '@/data/sampleTitles'`.

### 2. New component — `components/MobileTickerCards.tsx`

A pure CSS marquee using `@keyframes translateX`:

- **Card sizing:** ~180px wide, `aspect-[3/1]` (~60px tall). At 375px screen width this shows ~2 cards at once — enough to read as a continuous stream.
- **Seamless loop:** Render the 12-card array twice (24 DOM nodes) in a flex row. Animate `translateX(0)` → `translateX(-50%)` so the second copy replaces the first seamlessly.
- **Speed:** ~25px/sec (full cycle ~90 seconds). Leisurely pace fitting a sleep app.
- **Edge fades:** CSS `mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent)` on the container for smooth visual clipping.
- **Overflow:** `overflow-hidden` on the ticker wrapper only (not parent section).
- **Non-interactive:** `pointer-events: none` — matches desktop behavior, prevents scroll-hijacking.
- **No play icon:** Omit the small triangle from mobile cards to save space at the smaller size.

```css
@keyframes ticker-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

```tsx
// components/MobileTickerCards.tsx
'use client'
import { sampleTitles } from '@/data/sampleTitles'

export default function MobileTickerCards({ visible }: { visible: boolean }) {
  const doubled = [...sampleTitles, ...sampleTitles]

  return (
    <div
      className={`w-full overflow-hidden transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
      aria-hidden="true"
    >
      <div
        className="flex gap-3 w-max motion-safe:animate-ticker-scroll"
        style={{ animationDuration: '90s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}
      >
        {doubled.map((title, i) => (
          <div key={i} className="w-[180px] aspect-[3/1] rounded-lg relative flex-shrink-0 pointer-events-none">
            <div className="absolute inset-0 rounded-lg opacity-40" style={{ background: title.bg }} />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="relative h-full flex flex-col justify-between p-3">
              <p className="text-white/70 text-[10px] font-bold tracking-[0.2em] uppercase">{title.category}</p>
              <p className="text-white text-xs font-bold leading-snug">{title.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

### 3. Tailwind config — add `ticker-scroll` animation

```js
// tailwind.config.js — extend.animation + extend.keyframes
keyframes: {
  'ticker-scroll': {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-50%)' },
  },
},
animation: {
  'ticker-scroll': 'ticker-scroll 90s linear infinite',
},
```

### 4. Integrate into `MobilePage.tsx`

Insert `<MobileTickerCards>` between the headline `<div>` (line 33) and `<AppPreview>` (line 41):

```tsx
// After the h1 closing div (line 39), before AppPreview:
<MobileTickerCards visible={contentLoaded} />
```

Adjust spacing: reduce `mb-8` on the headline div to `mb-4` to compensate for the added ticker height (~60px + margins). The ticker itself gets `my-4` for vertical breathing room.

### 5. Accessibility

- **`prefers-reduced-motion: reduce`**: Use Tailwind's `motion-safe:` prefix so the animation only runs when the user hasn't requested reduced motion. Without the animation, the cards render as a static row (first ~2 visible).
- **`aria-hidden="true"`**: The ticker is decorative — same content is accessible in-app. Prevents screen readers from announcing every card.
- **No horizontal scroll capture**: `pointer-events: none` ensures the ticker never interferes with vertical page scrolling.

### 6. Content loading sequence

The ticker participates in the existing `contentLoaded` fade-in, with a `delay-150` class so it appears slightly after the headline but before the phone mockup — coordinated visual flow.

## Acceptance Criteria

- [x] Sample cards ticker renders above iPhone mockup on mobile only
- [x] Cards scroll left continuously in an infinite loop with no visible seam
- [x] Cards use the same 12 titles as desktop (shared data source)
- [x] Ticker is full-bleed with gradient edge masks (no hard clip)
- [x] Animation pauses when `prefers-reduced-motion: reduce` is set (shows static row)
- [x] Ticker has `aria-hidden="true"` and `pointer-events: none`
- [x] Ticker fades in with `contentLoaded` (matches page load sequence)
- [ ] Audio player remains visible without scrolling on iPhone SE (667px viewport)
- [x] No visible jank — CSS `@keyframes` + `translateX` for GPU compositing
- [x] Desktop layout (`DesktopPage.tsx`) is unaffected
- [x] `SampleTitles.tsx` refactored to import from shared `data/sampleTitles.ts`

## Files to Change

| File | Change |
|------|--------|
| `data/sampleTitles.ts` | **New** — extracted shared titles array |
| `components/MobileTickerCards.tsx` | **New** — mobile ticker component |
| `components/MobilePage.tsx` | Add ticker between headline and AppPreview, adjust spacing |
| `components/SampleTitles.tsx` | Import titles from shared module instead of inline |
| `tailwind.config.js` | Add `ticker-scroll` keyframes and animation |

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Ticker pushes audio player below fold on small phones | Keep ticker height compact (~60px), reduce headline margin from `mb-8` to `mb-4` |
| Battery drain from continuous animation | CSS `@keyframes` is GPU-composited; browsers auto-throttle when tab is backgrounded |
| Horizontal scroll interference | `pointer-events: none` on entire ticker |
| 24 gradient DOM nodes on old phones | Gradients are GPU-composited; 24 nodes is negligible |

## Sources

- Existing desktop implementation: `components/SampleTitles.tsx`
- Mobile layout: `components/MobilePage.tsx`
- Prior mobile/desktop split plan: `docs/plans/2026-02-04-fix-layout-overlap-split-mobile-desktop-plan.md`
