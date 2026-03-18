'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useVideoPlayer } from './hooks/useVideoPlayer'
import { useAudioPlayer } from './hooks/useAudioPlayer'
import { handleAppStoreCTAClick } from './analytics'
import AppPreview from './AppPreview'
import AudioPlayer from './AudioPlayer'
import ReviewCards from './ReviewCards'
import MobileTickerCards from './MobileTickerCards'
import Footer from './Footer'
import Stars from './Stars'

export default function DesktopPage() {
  const { showVideo, fadeVideo, videoLoaded, contentLoaded, videoRef } = useVideoPlayer()
  const { isPlaying, currentTime, audioRef, togglePlayPause } = useAudioPlayer()

  return (
    <div className="min-h-screen bg-ms-nocturne relative">
      <Stars />
      {/* Logo */}
      <div className={`absolute top-6 left-6 z-10 transition-opacity duration-700 ${contentLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Image
          src="/newmoonicon.png"
          alt="Bore"
          width={40}
          height={40}
          className="object-contain w-10 h-10"
        />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-ms-nocturne to-[#0F1A2E] flex flex-col items-center justify-center">
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className={`hero-title font-inter-tight text-4xl md:text-5xl font-black uppercase text-center text-ms-white transition-opacity duration-700 ${
              contentLoaded ? 'opacity-100' : 'opacity-0'
            }`}>
              <span className="opacity-20">Bore</span><br />helps you<br />fall asleep
            </h1>
          </div>

          <MobileTickerCards visible={contentLoaded} />

          <AppPreview
            width={300}
            height={638}
            borderRadius="rounded-[20px]"
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
            className="mt-8 mb-12"
          />
        </div>
      </section>

      {/* QR Code Download Section */}
      <section className="pt-8 pb-16 px-4 bg-[#0F1A2E]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <p className="text-xl font-semibold text-white mb-10 text-center max-w-[300px]">
            Fall asleep to boring history, lectures, and radio archives.
          </p>
          <div className="flex justify-center">
            <Link
              href="https://apps.apple.com/us/app/history-sleep/id6749167616"
              onClick={handleAppStoreCTAClick}
              className="inline-block"
            >
              <div className="bg-[#2A3A50]/90 rounded-[20px] p-[20px] pb-[10px] shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex flex-col items-center cursor-pointer border border-white/10">
                <div className="bg-white/95 p-3 rounded-[16px]">
                  <Image
                    src="/qr-code.png"
                    alt="QR code"
                    width={130}
                    height={130}
                    className="rounded-[12px]"
                  />
                </div>
                <p className="text-white/80 font-medium mt-[10px] mb-[10px] text-[14px] max-w-[150px] text-center">
                  Scan to get iOS app
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="pb-20 px-4 bg-[#0F1A2E]">
        <div className="max-w-6xl mx-auto">
          <ReviewCards cardClassName="min-w-[300px] max-w-[320px] p-10" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
