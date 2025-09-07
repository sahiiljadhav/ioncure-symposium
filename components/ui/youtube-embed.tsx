"use client"

import { useState } from "react"
import { Play, VolumeX, Volume2 } from "lucide-react"

interface YouTubeEmbedProps {
  videoId: string
  title?: string
  className?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  showMuteButton?: boolean
  aspectRatio?: "16:9" | "9:16" | "4:3" | "1:1"
}

export function YouTubeEmbed({
  videoId,
  title = "YouTube Video",
  className = "",
  autoplay = false,
  muted = false,
  loop = false,
  controls = true,
  showMuteButton = false,
  aspectRatio = "16:9"
}: YouTubeEmbedProps) {
  const [isMuted, setIsMuted] = useState(muted)
  const [isPlaying, setIsPlaying] = useState(false)

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case "9:16":
        return "aspect-[9/16]"
      case "4:3":
        return "aspect-[4/3]"
      case "1:1":
        return "aspect-square"
      default:
        return "aspect-video"
    }
  }

  const buildYouTubeUrl = () => {
    const baseUrl = `https://www.youtube.com/embed/${videoId}`
    const params = new URLSearchParams()
    
    if (autoplay) params.append('autoplay', '1')
    if (isMuted) params.append('mute', '1')
    if (loop) params.append('loop', '1')
    if (!controls) params.append('controls', '0')
    if (loop) params.append('playlist', videoId) // Required for loop to work
    
    return `${baseUrl}?${params.toString()}`
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className={`relative ${className}`}>
      <div className={`${getAspectRatioClass()} bg-muted rounded-lg overflow-hidden`}>
        <iframe
          src={buildYouTubeUrl()}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={() => setIsPlaying(true)}
        />
      </div>
      
      {showMuteButton && (
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-10"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 text-white" />
          )}
        </button>
      )}
    </div>
  )
}
