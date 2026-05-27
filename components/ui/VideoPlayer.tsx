"use client";

import { useRef, useState } from "react";

export default function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.muted = false;
    video.loop = false;
    video.play();
    setHasStarted(true);
  }

  return (
    <div className="relative w-full h-full">
      {/* Background autoplay video — muted & looping */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Play button overlay — hidden once user starts playback */}
      {!hasStarted && (
        <button
          onClick={handlePlay}
          aria-label="Lire la vidéo"
          className="absolute inset-0 flex items-center justify-center group"
        >
          {/* Semi-transparent scrim so the button is always visible */}
          <span className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

          {/* Circle play button */}
          <span className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#05ffe0] bg-black/40 backdrop-blur-sm group-hover:bg-black/60 group-hover:border-white transition-all duration-300">
            {/* Play triangle */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#05ffe0"
              aria-hidden="true"
              className="ml-1 "
            >
              <path d="M8 5.14v14l11-7-11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
