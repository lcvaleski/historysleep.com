'use client'

import { useEffect, useRef, useState } from 'react'
import { sampleTitles } from '@/data/sampleTitles'

const titles = sampleTitles

// Fixed slots: 3 on the left, 3 on the right
const slots = [
  { side: 'left' as const, top: '12%', indent: '3%' },
  { side: 'right' as const, top: '40%', indent: '2%' },
  { side: 'left' as const, top: '68%', indent: '5%' },
  { side: 'right' as const, top: '10%', indent: '6%' },
  { side: 'left' as const, top: '42%', indent: '1%' },
  { side: 'right' as const, top: '72%', indent: '4%' },
]

export default function SampleTitles() {
  const [slotContent, setSlotContent] = useState<number[]>(slots.map(() => -1))
  const [slotVisible, setSlotVisible] = useState<boolean[]>(slots.map(() => false))
  const activeRef = useRef<Set<number>>(new Set())
  const titleCursorRef = useRef(0)

  useEffect(() => {
    const pickTitle = () => {
      const t = titleCursorRef.current % titles.length
      titleCursorRef.current++
      return t
    }

    const showSlot = (slotIdx: number) => {
      const t = pickTitle()
      activeRef.current.add(slotIdx)
      setSlotContent(prev => { const n = [...prev]; n[slotIdx] = t; return n })
      setTimeout(() => {
        setSlotVisible(prev => { const n = [...prev]; n[slotIdx] = true; return n })
      }, 50)
    }

    const hideSlot = (slotIdx: number) => {
      activeRef.current.delete(slotIdx)
      setSlotVisible(prev => { const n = [...prev]; n[slotIdx] = false; return n })
    }

    // Show first 3 in random slots, staggered
    const allSlots = [...Array(slots.length).keys()]
    const shuffled = allSlots.sort(() => Math.random() - 0.5)
    const initial = shuffled.slice(0, 3)

    const initTimers = initial.map((slotIdx, i) =>
      setTimeout(() => showSlot(slotIdx), 400 + i * 500)
    )

    // Cycle: every 1.5s swap one card to a new random position
    const cycleStart = setTimeout(() => {
      const interval = setInterval(() => {
        const active = Array.from(activeRef.current)
        if (active.length === 0) return

        // Pick random active slot to remove
        const oldSlot = active[Math.floor(Math.random() * active.length)]

        // Pick random inactive slot to show
        const inactive = slots.map((_, i) => i).filter(i => !activeRef.current.has(i))
        if (inactive.length === 0) return
        const newSlot = inactive[Math.floor(Math.random() * inactive.length)]

        hideSlot(oldSlot)

        setTimeout(() => {
          showSlot(newSlot)
        }, 500)
      }, 3000)

      return () => clearInterval(interval)
    }, 400 + 3 * 500 + 1000)

    return () => {
      initTimers.forEach(clearTimeout)
      clearTimeout(cycleStart)
    }
  }, [])

  return (
    <>
      {slots.map((slot, i) => {
        const titleIdx = slotContent[i]
        const visible = slotVisible[i]
        const title = titleIdx >= 0 ? titles[titleIdx] : null

        const posStyle: React.CSSProperties = {
          position: 'absolute',
          top: slot.top,
          width: '320px',
          pointerEvents: 'none',
          ...(slot.side === 'left'
            ? { left: slot.indent }
            : { right: slot.indent }),
        }

        return (
          <div
            key={i}
            className={`hidden lg:block rounded-xl aspect-[3.5/1] transition-opacity duration-700 ease-in-out ${
              visible && title ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={posStyle}
          >
            {/* Semi-transparent background */}
            <div
              className="absolute inset-0 rounded-xl opacity-25"
              style={{ background: title?.bg ?? 'transparent' }}
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            {/* Fully opaque text */}
            <div className="relative h-full p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" className="ml-0.5">
                  <path d="M0 0L10 6L0 12V0Z" fill="white" fillOpacity="0.5" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-white/30 text-xs font-bold tracking-[0.2em] uppercase">
                  {title?.category ?? ''}
                </p>
                <p className="text-white text-lg font-bold leading-snug truncate">
                  {title?.title ?? ''}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
