'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="py-20 px-4 bg-gradient-to-b from-[#0F1A2E] to-ms-nocturne flex flex-col items-center">
      <div className="flex items-center gap-2 mb-4">
        <Image src="/newmoonicon.png" alt="Bore" width={20} height={20} className="object-contain" />
        <span className="text-white font-semibold text-xl">Bore</span>
      </div>
      <div className="flex gap-6 text-sm text-white/50">
        <a href="mailto:support@coventrylabs.net" className="hover:text-white/80 transition-colors">
          Contact
        </a>
        <a href="https://coventrylabs.net/privacy.html" className="hover:text-white/80 transition-colors">
          Privacy
        </a>
      </div>
    </footer>
  )
}
