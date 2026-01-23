'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export default function Home() {
  const [showVideo, setShowVideo] = useState(true)
  const [fadeVideo, setFadeVideo] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Always show static image for 1 second first
    const timer = setTimeout(() => {
      const video = videoRef.current
      if (video && video.readyState >= 3) {
        setVideoLoaded(true)
      }
    }, 1000)

    const video = videoRef.current
    if (video) {
      const handleCanPlay = () => {
        // Video is ready, but only fade in after 1 second
        setTimeout(() => {
          setVideoLoaded(true)
        }, Math.max(0, 1000 - video.currentTime * 1000))
      }

      const handleTimeUpdate = () => {
        // Start fading 0.5 seconds before the video ends
        if (video.duration && video.currentTime >= video.duration - 0.5) {
          setFadeVideo(true)
        }
      }

      const handleEnded = () => {
        // After video ends, show the static image
        setTimeout(() => {
          setShowVideo(false)
          setVideoLoaded(false) // Reset for clean state
        }, 500) // Wait for fade transition to complete
      }

      video.addEventListener('canplaythrough', handleCanPlay)
      video.addEventListener('timeupdate', handleTimeUpdate)
      video.addEventListener('ended', handleEnded)

      return () => {
        clearTimeout(timer)
        video.removeEventListener('canplaythrough', handleCanPlay)
        video.removeEventListener('timeupdate', handleTimeUpdate)
        video.removeEventListener('ended', handleEnded)
      }
    }

    return () => clearTimeout(timer)
  }, [])

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters)
    }
  }

  const handleAppStoreHeroClick = () => {
    trackEvent('click', {
      event_category: 'download',
      event_label: 'ios_app_store',
      button_location: 'hero'
    })
  }

  const handleAppStoreCTAClick = () => {
    trackEvent('click', {
      event_category: 'download',
      event_label: 'ios_app_store',
      button_location: 'final_cta'
    })
  }

  return (
    <div className="min-h-screen bg-ms-nocturne">
      {/* Logo in top left */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
        <Image
          src="/full_logo.png"
          alt="History Sleep"
          width={40}
          height={40}
          className="object-contain w-6 h-6 sm:w-10 sm:h-10"
        />
      </div>

      {/* Hero Section - Clean gradient that ends mid-viewport like Mist */}
      <section className="min-h-[75vh] sm:h-[80vh] px-4 pb-20 sm:pb-0 bg-gradient-to-b from-ms-nocturne/95 to-[#1f1410] flex flex-col sm:items-center sm:justify-center">
        <div className="w-full max-w-6xl mx-auto mt-20 sm:mt-0">
          <div className="text-center mb-8">
            <h1 className="text-xl sm:text-2xl font-bold text-ms-white mb-8 px-4 sm:px-0">
              Fall asleep to boring history.
            </h1>
          </div>

          {/* App Preview - Video Demo with Transition */}
          <div className="relative flex justify-center mb-12 sm:mb-0">
            <Link 
              href="https://apps.apple.com/us/app/history-sleep/id6749167616"
              onClick={handleAppStoreHeroClick}
              className="relative w-[280px] h-[572px] sm:w-[300px] sm:h-[612px] cursor-pointer"
            >
              <div className="absolute inset-0 bg-ms-periwinkle/20 blur-3xl" />
              {/* Static image - always visible underneath */}
              <Image
                src="/mockups/frame1.png"
                alt="Home Screen"
                width={612}
                height={1248}
                priority
                quality={90}
                className="absolute inset-0 drop-shadow-2xl w-full h-full rounded-[16px] sm:rounded-[20px] border-4 border-black"
                style={{ objectFit: 'cover' }}
              />
              {/* Video overlay - fades in when loaded, fades out when ending */}
              {showVideo && (
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  poster="/mockups/frame1.png"
                  className={`absolute inset-0 drop-shadow-2xl w-full h-full rounded-[16px] sm:rounded-[20px] border-4 border-black transition-opacity duration-500 ${
                    !videoLoaded ? 'opacity-0' : fadeVideo ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{ objectFit: 'cover' }}
                >
                  <source src="/mockups/demo.mp4" type="video/mp4" />
                  <source src="/mockups/demo.mov" type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
              )}
            </Link>
          </div>
        </div>
      </section>

      {/* QR Code Download Section - Darker background */}
      <section className="pt-16 pb-20 sm:py-16 px-4 bg-[#1f1410]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <p className="text-xl font-semibold text-ms-buttercream mb-6 sm:mb-10 text-center max-w-[300px]">
            Hit play. Fall asleep.
          </p>
          <div className="flex justify-center">
            <Link
              href="https://apps.apple.com/us/app/history-sleep/id6749167616"
              onClick={handleAppStoreHeroClick}
              className="inline-block transform hover:scale-105 transition-transform"
            >
              {/* Mobile: iOS button with container matching QR style */}
              <div className="sm:hidden bg-ms-eclipse/90 rounded-[20px] p-5 shadow-[0px_4px_20px_rgba(0,0,0,0.25)] border border-ms-lavendar/10">
                <div className="bg-black text-white rounded-2xl px-7 py-3.5 font-semibold text-base flex items-center gap-2.5">
                  <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>Download on iOS</span>
                </div>
              </div>
              {/* Desktop: QR Code */}
              <div className="hidden sm:flex bg-ms-eclipse/90 rounded-[20px] p-[20px] pb-[10px] shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex-col items-center cursor-pointer border border-ms-lavendar/10">
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

      {/* Social Proof - Cards with our color palette */}
      <section className="pb-16 sm:pb-20 px-4 bg-[#1f1410]">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 justify-center flex-wrap px-6 sm:px-0">
            {/* Review Card 1 */}
            <div className="bg-ms-nocturne/95 rounded-[18px] p-8 sm:p-10 pb-8 shadow-lg w-full max-w-[280px] sm:min-w-[300px] sm:max-w-[320px] border border-ms-lavendar/10">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 fill-ms-orchid" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-ms-buttercream font-semibold text-lg mb-4">
                "Unhooks my brain."
              </p>
              <p className="text-sm text-ms-lavendar/60 font-medium">Drew P.</p>
            </div>

            {/* Review Card 2 */}
            <div className="bg-ms-nocturne/95 rounded-[18px] p-8 sm:p-10 pb-8 shadow-lg w-full max-w-[280px] sm:min-w-[300px] sm:max-w-[320px] border border-ms-lavendar/10">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 fill-ms-orchid" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-ms-buttercream font-semibold text-lg mb-4">
                "Finally stopped YouTube scrolling."
              </p>
              <p className="text-sm text-ms-lavendar/60 font-medium">pequickster</p>
            </div>

            {/* Review Card 3 */}
            <div className="bg-ms-nocturne/95 rounded-[18px] p-8 sm:p-10 pb-8 shadow-lg w-full max-w-[280px] sm:min-w-[300px] sm:max-w-[320px] border border-ms-lavendar/10">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 fill-ms-orchid" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-ms-buttercream font-semibold text-lg mb-4">
                "Nothing gets me to sleep like this."
              </p>
              <p className="text-sm text-ms-lavendar/60 font-medium">Blank_Pages</p>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section - Commented out for now
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-ms-eclipse">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-ms-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-ms-blueberry/50 backdrop-blur rounded-xl p-6 shadow-md border border-ms-lavendar/20">
              <h3 className="text-h3 font-semibold text-ms-white mb-2">
                How is this different from other sleep apps?
              </h3>
              <p className="text-body-lg text-ms-buttercream/90">
                Unlike meditation apps or white noise, History Sleep gives your busy mind something to follow - 
                but makes it so boring you can't help but drift off. Our system ensures you never hear the same history lecture twice.
              </p>
            </div>
            
            <div className="bg-ms-blueberry/50 backdrop-blur rounded-xl p-6 shadow-md border border-ms-lavendar/20">
              <h3 className="text-h3 font-semibold text-ms-white mb-2">
                Can I try it for free?
              </h3>
              <p className="text-body-lg text-ms-buttercream/90">
                Absolutely! The app is free to download and includes daily free history lectures. 
                Premium unlocks unlimited historical content and custom voice features.
              </p>
            </div>
            
            <div className="bg-ms-blueberry/50 backdrop-blur rounded-xl p-6 shadow-md border border-ms-lavendar/20">
              <h3 className="text-h3 font-semibold text-ms-white mb-2">
                What if I fall asleep with it playing?
              </h3>
              <p className="text-body-lg text-ms-buttercream/90">
                The history lectures are designed to be gentle and quiet. Most users report naturally waking less 
                as the monotonous historical content helps maintain deeper sleep cycles.
              </p>
            </div>
            
            <div className="bg-ms-blueberry/50 backdrop-blur rounded-xl p-6 shadow-md border border-ms-lavendar/20">
              <h3 className="text-h3 font-semibold text-ms-white mb-2">
                Want to learn more about sleep history?
              </h3>
              <p className="text-body-lg text-ms-buttercream/90">
                Check out our articles:{" "}
                <Link href="/articles/free-sleep-story-apps-history-podcasts" className="text-ms-orchid hover:text-ms-fuschia underline">
                  Best Free Sleep Story Apps
                </Link>
                {" "}and{" "}
                <Link href="/articles/33-history-facts-to-fall-asleep-to" className="text-ms-orchid hover:text-ms-fuschia underline">
                  33 History Facts to Fall Asleep To
                </Link>
                {" "}for fascinating bedtime reading about how humans have approached sleep throughout history.
              </p>
            </div>
          </div>
        </div>
      </section> */}


      {/* Footer - Minimal with our color palette */}
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
    </div>
  )
}