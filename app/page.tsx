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
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
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
        }, 500) // Wait for fade transition to complete
      }

      video.addEventListener('timeupdate', handleTimeUpdate)
      video.addEventListener('ended', handleEnded)

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate)
        video.removeEventListener('ended', handleEnded)
      }
    }
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
          width={48}
          height={48}
          className="object-contain w-8 h-8 sm:w-12 sm:h-12"
        />
      </div>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ms-nocturne to-ms-eclipse">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ms-white mb-16 sm:mb-20 px-4 sm:px-0">
              Fall asleep to boring history.
            </h1>
          </div>

          {/* App Preview - Video Demo with Transition */}
          <div className="relative mb-12 sm:mb-16">
            <div className="flex justify-center">
              <div className="relative max-w-[240px] sm:max-w-none" style={{ width: '260px', height: '531px' }}>
                <div className="absolute inset-0 bg-ms-periwinkle/20 blur-3xl" />
                {showVideo ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    className={`absolute inset-0 drop-shadow-2xl w-full h-full rounded-lg border-4 border-black transition-opacity duration-500 ${
                      fadeVideo ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{ objectFit: 'cover' }}
                  >
                    <source src="/mockups/demo.mov" type="video/quicktime" />
                    <source src="/mockups/demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src="/mockups/frame1.png"
                    alt="Home Screen"
                    width={260}
                    height={531}
                    priority
                    className="absolute inset-0 drop-shadow-2xl w-full h-full rounded-lg border-4 border-black"
                    style={{ objectFit: 'cover' }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* QR Code Download Section */}
          <div className="flex justify-center mt-16 sm:mt-20 px-4 sm:px-0">
            <Link
              href="https://apps.apple.com/us/app/history-sleep/id6749167616"
              onClick={handleAppStoreHeroClick}
              className="inline-block transform hover:scale-105 transition-transform"
            >
              {/* Mobile: Black button */}
              <div className="sm:hidden bg-black text-white rounded-xl px-8 py-4 font-bold text-lg flex items-center gap-2">
                <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span>Download<br className="sm:hidden" />on App Store</span>
              </div>
              {/* Desktop: QR Code */}
              <div className="hidden sm:flex bg-white rounded-[20px] p-[20px] pb-[10px] shadow-[0px_10px_50px_5px_rgba(0,0,0,0.1)] flex-col items-center cursor-pointer">
                <Image
                  src="/qr-code.png"
                  alt="QR code"
                  width={150}
                  height={150}
                  className="bg-white rounded-[20px]"
                />
                <p className="text-black font-medium mt-[10px] mb-[10px] text-[14px] max-w-[150px] text-center">
                  Scan to get iOS app
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ms-eclipse to-ms-blueberry">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 max-w-sm sm:max-w-none mx-auto">
            <div className="bg-ms-blueberry/50 backdrop-blur rounded-2xl p-8 shadow-lg border border-ms-lavendar/20">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-ms-orchid fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-lg text-ms-buttercream mb-4">
                "Unhooks my brain."
              </p>
              <p className="text-sm text-ms-lavendar">— Drew P.</p>
            </div>
            <div className="bg-ms-blueberry/50 backdrop-blur rounded-2xl p-8 shadow-lg border border-ms-lavendar/20">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-ms-orchid fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-lg text-ms-buttercream mb-4">
                "Watched random Youtube videos to fall asleep before this."
              </p>
              <p className="text-sm text-ms-lavendar">— pequickster</p>
            </div>
            <div className="bg-ms-blueberry/50 backdrop-blur rounded-2xl p-8 shadow-lg border border-ms-lavendar/20">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-ms-orchid fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-lg text-ms-buttercream mb-4">
                "Nothing gets me to sleep like this."
              </p>
              <p className="text-sm text-ms-lavendar">— Blank_Pages</p>
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


      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-ms-nocturne">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image src="/full_logo.png" alt="History Sleep" width={16} height={16} className="object-contain" />
              <span className="text-white font-medium">History Sleep</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="mailto:support@coventrylabs.net" className="text-ms-lavendar hover:text-white transition-colors">
                support@coventrylabs.net
              </a>
              <a href="https://coventrylabs.net/privacy.html" className="text-ms-lavendar hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="https://coventrylabs.net/eula.html" className="text-ms-lavendar hover:text-white transition-colors">
                EULA
              </a>
            </div>
            <p className="text-ms-lavendar text-sm">
              © 2024 Coventry Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}