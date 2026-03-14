'use client'

import { sampleTitles } from '@/data/sampleTitles'

export default function MobileTickerCards({ visible }: { visible: boolean }) {
  const doubled = [...sampleTitles, ...sampleTitles]

  return (
    <div
      className={`w-full max-w-[600px] mx-auto overflow-hidden transition-opacity duration-700 delay-150 my-4 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
      aria-hidden="true"
    >
      <div className="flex gap-3 w-max animate-ticker-scroll">
        {doubled.map((title, i) => (
          <div
            key={i}
            className="w-[180px] aspect-[3/1] rounded-lg relative flex-shrink-0 pointer-events-none"
          >
            <div
              className="absolute inset-0 rounded-lg opacity-40"
              style={{ background: title.bg }}
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="relative h-full flex flex-col justify-between p-3">
              <p className="text-white/70 text-[10px] font-bold tracking-[0.2em] uppercase">
                {title.category}
              </p>
              <p className="text-white text-xs font-bold leading-snug">
                {title.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
