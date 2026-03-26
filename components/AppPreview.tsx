'use client'

import Image from 'next/image'
import Link from 'next/link'
import { handleAppStoreHeroClick } from './analytics'

interface AppPreviewProps {
  width: number
  height: number
  borderRadius: string
  contentLoaded: boolean
  showVideo?: boolean
  fadeVideo?: boolean
  videoLoaded?: boolean
  videoRef?: React.RefObject<HTMLVideoElement | null>
}

export default function AppPreview({
  width,
  height,
  borderRadius,
  contentLoaded,
}: AppPreviewProps) {
  return (
    <div className="relative flex justify-center">
      <Link
        href="https://apps.apple.com/us/app/history-sleep/id6749167616"
        onClick={handleAppStoreHeroClick}
        className={`relative cursor-pointer transition-opacity duration-700 ${
          contentLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ width, height }}
      >
        <div className="absolute inset-0 bg-white/10 blur-3xl" />
        <Image
          src="/mockups/app_screenshot.png"
          alt="Bore app screenshot"
          width={612}
          height={1248}
          priority
          quality={90}
          className={`absolute inset-0 drop-shadow-2xl w-full h-full ${borderRadius} `}
          style={{ objectFit: 'contain' }}
        />
      </Link>
    </div>
  )
}
