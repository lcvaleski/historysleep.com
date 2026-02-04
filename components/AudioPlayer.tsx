'use client'

interface AudioPlayerProps {
  isPlaying: boolean
  currentTime: number
  togglePlayPause: () => void
  audioRef: React.RefObject<HTMLAudioElement | null>
  contentLoaded: boolean
  className?: string
}

export default function AudioPlayer({
  isPlaying,
  currentTime,
  togglePlayPause,
  audioRef,
  contentLoaded,
  className = '',
}: AudioPlayerProps) {
  return (
    <div className={`flex flex-col items-center transition-opacity duration-700 delay-300 ${
      contentLoaded ? 'opacity-100' : 'opacity-0'
    } ${className}`}>
      <div className="bg-ms-nocturne/60 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-4 border border-ms-lavendar/20">
        <button
          onClick={togglePlayPause}
          className="w-10 h-10 rounded-full bg-ms-orchid hover:bg-ms-fuschia transition-colors flex items-center justify-center"
        >
          {isPlaying ? (
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <div className="flex items-center gap-3">
          <div className="relative w-40 h-1 bg-ms-eclipse rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-ms-orchid rounded-full transition-all duration-100"
              style={{ width: `${(currentTime / 10) * 100}%` }}
            />
          </div>
          <span className="text-ms-buttercream/60 text-xs font-mono min-w-[45px]">
            {Math.floor(currentTime)}s / 10s
          </span>
        </div>
      </div>
      <audio
        ref={audioRef}
        src="https://storage.googleapis.com/active-audio/boringhistory/HIST002.mp3"
        preload="metadata"
      />
    </div>
  )
}
