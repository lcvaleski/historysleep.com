'use client'

import { sampleTitles } from '@/data/sampleTitles'

export default function MobileTickerCards({ visible }: { visible: boolean }) {
  const doubledMain = [...sampleTitles, ...sampleTitles]
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
              className="w-[220px] aspect-[2.8/1] rounded-lg relative flex-shrink-0 pointer-events-none"
            >
              <div
                className="absolute inset-0 rounded-lg opacity-35"
                style={{ background: title.bg }}
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="relative h-full p-3 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" className="ml-0.5">
                    <path d="M0 0L10 6L0 12V0Z" fill="white" fillOpacity="0.5" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">
                    {title.category}
                  </p>
                  <p className="text-white text-sm font-bold leading-snug truncate">
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
