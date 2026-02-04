'use client'

import { useState, useEffect, useRef } from 'react'

export function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime)
        if (audio.currentTime >= 10) {
          audio.pause()
          audio.currentTime = 0
          setIsPlaying(false)
          setCurrentTime(0)
        }
      }

      const handleEnded = () => {
        setIsPlaying(false)
        setCurrentTime(0)
      }

      audio.addEventListener('timeupdate', handleTimeUpdate)
      audio.addEventListener('ended', handleEnded)

      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate)
        audio.removeEventListener('ended', handleEnded)
      }
    }
  }, [])

  const togglePlayPause = async () => {
    const audio = audioRef.current
    if (audio) {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        if (audio.currentTime >= 10) {
          audio.currentTime = 0
        }
        try {
          await audio.play()
          setIsPlaying(true)
        } catch {
          setIsPlaying(false)
        }
      }
    }
  }

  return { isPlaying, currentTime, audioRef, togglePlayPause }
}
