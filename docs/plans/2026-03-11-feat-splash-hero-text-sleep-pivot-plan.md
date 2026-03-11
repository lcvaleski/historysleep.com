---
title: Update Splash Hero Text for Sleep Pivot
type: feat
status: completed
date: 2026-03-11
---

# Update Splash Hero Text for Sleep Pivot

Begin pivoting the site from "history-focused" to "sleep-focused" by updating the splash page hero headline to **"THIS APP HELPS YOU FALL ASLEEP"** — bold, centered, uppercase, matching the reference screenshot style.

This is a text-only change. Layout, colors, phone mockup, audio player, reviews, CTAs, and meta tags remain unchanged.

## Acceptance Criteria

- [x] Hero headline in `components/DesktopPage.tsx` changed from "Fall asleep to boring history." to "THIS APP HELPS YOU FALL ASLEEP"
- [x] Hero headline in `components/MobilePage.tsx` changed to match
- [x] Text is bold, uppercase, and centered (matching reference style)
- [x] Sub-copy "Hit play. Fall asleep." remains unchanged
- [x] No layout, color, or structural changes
- [x] Works on both mobile and desktop viewports

## Context

**Files to modify:**
- `components/DesktopPage.tsx` — desktop hero headline
- `components/MobilePage.tsx` — mobile hero headline

**Current headline:** `"Fall asleep to boring history."`
**New headline:** `"THIS APP HELPS YOU FALL ASLEEP"`

The reference image shows the text in a heavy/black weight, all-caps, centered — the current Manrope font supports this via `font-black` or `font-extrabold` + `uppercase` Tailwind classes.

## MVP

### components/DesktopPage.tsx (hero section change)

```tsx
{/* Replace existing headline with: */}
<h1 className="text-5xl md:text-6xl font-black uppercase text-center leading-tight">
  THIS APP HELPS YOU FALL ASLEEP
</h1>
```

### components/MobilePage.tsx (hero section change)

```tsx
{/* Same change, mobile-appropriate sizing: */}
<h1 className="text-4xl font-black uppercase text-center leading-tight">
  THIS APP HELPS YOU FALL ASLEEP
</h1>
```

## Sources

- Reference screenshot provided by user (bold centered text above phone mockup)
