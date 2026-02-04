'use client'

import Image from 'next/image'
import Link from 'next/link'
import { handleAppStoreHeroClick } from './analytics'

interface AppPreviewProps {
  width: number
  height: number
  borderRadius: string
  contentLoaded: boolean
  showVideo: boolean
  fadeVideo: boolean
  videoLoaded: boolean
  videoRef: React.RefObject<HTMLVideoElement | null>
}

export default function AppPreview({
  width,
  height,
  borderRadius,
  contentLoaded,
  showVideo,
  fadeVideo,
  videoLoaded,
  videoRef,
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
        <div className="absolute inset-0 bg-ms-periwinkle/20 blur-3xl" />
        <Image
          src="/mockups/frame_new.png"
          alt="Home Screen"
          width={612}
          height={1248}
          priority
          quality={90}
          className={`absolute inset-0 drop-shadow-2xl w-full h-full ${borderRadius} border-4 border-black`}
          style={{ objectFit: 'contain' }}
        />
        {showVideo && (
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="metadata"
            poster="/mockups/frame_new.png"
            className={`absolute inset-0 drop-shadow-2xl w-full h-full ${borderRadius} border-4 border-black transition-opacity duration-500 ${
              !videoLoaded ? 'opacity-0' : fadeVideo ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ objectFit: 'contain' }}
          >
            <source src="/mockups/demo_new.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        )}
      </Link>
    </div>
  )
}
