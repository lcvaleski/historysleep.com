'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useVideoPlayer } from './hooks/useVideoPlayer'
import { useAudioPlayer } from './hooks/useAudioPlayer'
import { handleAppStoreCTAClick } from './analytics'
import AppPreview from './AppPreview'
import AudioPlayer from './AudioPlayer'
import ReviewCards from './ReviewCards'
import Footer from './Footer'
import Stars from './Stars'
import MobileTickerCards from './MobileTickerCards'

export default function MobilePage() {
  const { showVideo, fadeVideo, videoLoaded, contentLoaded, videoRef } = useVideoPlayer()
  const { isPlaying, currentTime, audioRef, togglePlayPause } = useAudioPlayer()

  return (
    <div className="min-h-screen bg-ms-nocturne relative">
      <Stars />
      {/* Logo */}
      <div className="absolute top-4 left-4 z-10">
        <Image
          src="/full_logo.png"
          alt="Bore"
          width={40}
          height={40}
          className="object-contain w-6 h-6"
        />
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 bg-gradient-to-b from-ms-nocturne to-[#0F1A2E] flex flex-col items-center">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h1 className={`hero-title font-inter-tight text-3xl font-black uppercase text-center text-ms-white transition-opacity duration-700 ${
              contentLoaded ? 'opacity-100' : 'opacity-0'
            }`}>
              <span className="opacity-50">Bore</span><br />helps you<br />fall asleep
            </h1>
          </div>

          <MobileTickerCards visible={contentLoaded} />

          <AppPreview
            width={276}
            height={588}
            borderRadius="rounded-[16px]"
            contentLoaded={contentLoaded}
            showVideo={showVideo}
            fadeVideo={fadeVideo}
            videoLoaded={videoLoaded}
            videoRef={videoRef}
          />

          <AudioPlayer
            isPlaying={isPlaying}
            currentTime={currentTime}
            togglePlayPause={togglePlayPause}
            audioRef={audioRef}
            contentLoaded={contentLoaded}
            className="mt-8"
          />
        </div>
      </section>

      {/* Download Section - iOS Button */}
      <section className="pt-8 pb-20 px-4 bg-[#0F1A2E]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <p className="text-xl font-semibold text-white mb-6 text-center max-w-[300px]">
            Fall asleep to boring history, lectures, and radio archives.
          </p>
          <div className="flex justify-center">
            <Link
              href="https://apps.apple.com/us/app/history-sleep/id6749167616"
              onClick={handleAppStoreCTAClick}
              className="inline-block transform hover:scale-105 transition-transform"
            >
              <div className="bg-ms-eclipse/90 rounded-[20px] p-5 shadow-[0px_4px_20px_rgba(0,0,0,0.25)] border border-white/10">
                <div className="bg-black text-white rounded-2xl px-7 py-3.5 font-semibold text-base flex items-center gap-2.5">
                  <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>Download on iOS</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="pb-16 px-4 bg-[#0F1A2E]">
        <div className="max-w-6xl mx-auto">
          <ReviewCards cardClassName="w-full max-w-[280px]" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
