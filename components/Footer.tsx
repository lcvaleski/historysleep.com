'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="py-20 px-4 bg-ms-nocturne flex flex-col items-center">
      <div className="flex items-center gap-2 mb-4">
        <Image src="/full_logo.png" alt="History Sleep" width={20} height={20} className="object-contain" />
        <span className="text-ms-buttercream font-semibold text-xl">History Sleep</span>
      </div>
      <div className="flex gap-6 text-sm text-ms-lavendar/60">
        <a href="mailto:support@coventrylabs.net" className="hover:text-ms-lavendar transition-colors">
          Contact
        </a>
        <a href="https://coventrylabs.net/privacy.html" className="hover:text-ms-lavendar transition-colors">
          Privacy
        </a>
      </div>
    </footer>
  )
}
