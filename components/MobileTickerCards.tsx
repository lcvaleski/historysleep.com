'use client'

import { sampleTitles, breathworkTitles } from '@/data/sampleTitles'

export default function MobileTickerCards({ visible }: { visible: boolean }) {
  const doubledMain = [...sampleTitles, ...sampleTitles]
  const doubledBreath = [...breathworkTitles, ...breathworkTitles, ...breathworkTitles]

  const maskStyle = {
    maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
    WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
  }

  return (
    <div
      className={`w-full max-w-[600px] mx-auto transition-opacity duration-700 delay-150 my-4 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Main content row — on top */}
      <div className="overflow-hidden relative z-10" style={maskStyle}>
        <div className="flex gap-3 w-max animate-ticker-scroll">
          {doubledMain.map((title, i) => (
            <div
              key={i}
              className="w-[220px] aspect-[2.2/1] rounded-lg relative flex-shrink-0 pointer-events-none"
            >
              <div
                className="absolute inset-0 rounded-lg opacity-55"
                style={{ background: title.bg }}
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="relative h-full p-3">
                <p className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">
                  {title.category}
                </p>
                <div className="absolute inset-0 flex items-center p-3">
                  <p className="text-white text-sm font-bold leading-snug">
                    {title.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Breathwork row — behind, overlaps upward, lower opacity, slower */}
      <div className="overflow-hidden -mt-3 opacity-50 relative z-0" style={maskStyle}>
        <div className="flex gap-3 w-max animate-ticker-scroll-slow">
          {doubledBreath.map((title, i) => (
            <div
              key={i}
              className="w-[200px] aspect-[2.2/1] rounded-lg relative flex-shrink-0 pointer-events-none"
            >
              <div
                className="absolute inset-0 rounded-lg opacity-40"
                style={{ background: title.bg }}
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="relative h-full p-2.5">
                <p className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">
                  {title.category}
                </p>
                <div className="absolute inset-0 flex items-center p-2.5">
                  <p className="text-white text-sm font-bold leading-snug">
                    {title.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
