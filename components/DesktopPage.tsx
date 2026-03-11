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

export default function DesktopPage() {
  const { showVideo, fadeVideo, videoLoaded, contentLoaded, videoRef } = useVideoPlayer()
  const { isPlaying, currentTime, audioRef, togglePlayPause } = useAudioPlayer()

  return (
    <div className="min-h-screen bg-ms-nocturne">
      {/* Logo */}
      <div className="absolute top-6 left-6 z-10">
        <Image
          src="/full_logo.png"
          alt="History Sleep"
          width={40}
          height={40}
          className="object-contain w-10 h-10"
        />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-ms-nocturne/95 to-[#1f1410] flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className={`font-inter-tight text-5xl md:text-6xl font-black uppercase text-ms-white mb-8 text-center leading-loose tracking-wide transition-opacity duration-700 ${
              contentLoaded ? 'opacity-100' : 'opacity-0'
            }`}>
              This app<br />helps you<br />fall<br />asleep
            </h1>
          </div>

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
      <section className="pt-8 pb-16 px-4 bg-[#1f1410]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <p className="text-xl font-semibold text-ms-buttercream mb-10 text-center max-w-[300px]">
            Hit play. Fall asleep.
          </p>
          <div className="flex justify-center">
            <Link
              href="https://apps.apple.com/us/app/history-sleep/id6749167616"
              onClick={handleAppStoreCTAClick}
              className="inline-block transform hover:scale-105 transition-transform"
            >
              <div className="bg-ms-eclipse/90 rounded-[20px] p-[20px] pb-[10px] shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex flex-col items-center cursor-pointer border border-ms-lavendar/10">
                <div className="bg-white/95 p-3 rounded-[16px]">
                  <Image
                    src="/qr-code.png"
                    alt="QR code"
                    width={130}
                    height={130}
                    className="rounded-[12px]"
                  />
                </div>
                <p className="text-ms-buttercream/80 font-medium mt-[10px] mb-[10px] text-[14px] max-w-[150px] text-center">
                  Scan to get iOS app
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="pb-20 px-4 bg-[#1f1410]">
        <div className="max-w-6xl mx-auto">
          <ReviewCards cardClassName="min-w-[300px] max-w-[320px] p-10" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
