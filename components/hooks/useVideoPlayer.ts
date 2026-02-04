'use client'

import { useState, useEffect, useRef } from 'react'

export function useVideoPlayer() {
  const [showVideo, setShowVideo] = useState(true)
  const [fadeVideo, setFadeVideo] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [contentLoaded, setContentLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true)
    }, 100)

    const timer = setTimeout(() => {
      const video = videoRef.current
      if (video && video.readyState >= 3) {
        setVideoLoaded(true)
      }
    }, 500)

    const video = videoRef.current
    if (video) {
      const handleCanPlay = () => {
        setTimeout(() => {
          setVideoLoaded(true)
        }, Math.max(0, 500 - video.currentTime * 1000))
      }

      const handleTimeUpdate = () => {
        if (video.duration && video.currentTime >= video.duration - 0.5) {
          setFadeVideo(true)
        }
      }

      const handleEnded = () => {
        setTimeout(() => {
          setShowVideo(false)
          setVideoLoaded(false)
        }, 500)
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

  return { showVideo, fadeVideo, videoLoaded, contentLoaded, videoRef }
}
