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
              className="w-[180px] aspect-[2.5/1] rounded-lg relative flex-shrink-0 pointer-events-none"
            >
              <div
                className="absolute inset-0 rounded-lg opacity-55"
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

      {/* Breathwork row — behind, overlaps upward, lower opacity, slower */}
      <div className="overflow-hidden -mt-3 opacity-50 relative z-0" style={maskStyle}>
        <div className="flex gap-3 w-max animate-ticker-scroll-slow">
          {doubledBreath.map((title, i) => (
            <div
              key={i}
              className="w-[160px] aspect-[2.5/1] rounded-lg relative flex-shrink-0 pointer-events-none"
            >
              <div
                className="absolute inset-0 rounded-lg opacity-40"
                style={{ background: title.bg }}
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="relative h-full flex flex-col justify-between p-2.5">
                <div className="flex items-center gap-1.5">
                  {title.icon === 'breathwork' && (
                    <svg className="w-3 h-3 text-white/70 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
                      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
                      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
                    </svg>
                  )}
                  {title.icon === 'tips' && (
                    <svg className="w-3 h-3 text-white/70 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                    </svg>
                  )}
                  <p className="text-white/70 text-[10px] font-bold tracking-[0.2em] uppercase">
                    {title.category}
                  </p>
                </div>
                <p className="text-white text-xs font-bold leading-snug">
                  {title.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
