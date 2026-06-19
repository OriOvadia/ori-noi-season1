"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    function startMusic() {
      if (!audioRef.current) return;

      audioRef.current.volume = 0.35;

      audioRef.current
        .play()
        .then(() => {
          setMusicPlaying(true);
        })
        .catch((error) => {
          console.log("Music autoplay blocked:", error);
        });
    }

    window.addEventListener("startMusic", startMusic);

    return () => {
      window.removeEventListener("startMusic", startMusic);
    };
  }, []);

  function toggleMusic() {
    if (!audioRef.current) return;

    if (musicPlaying) {
      audioRef.current.pause();
      setMusicPlaying(false);
    } else {
      audioRef.current.volume = 0.35;

      audioRef.current.play().then(() => {
        setMusicPlaying(true);
      });
    }
  }

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/our-song.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 px-5 py-3 rounded-full font-bold shadow-xl text-white"
      >
        {musicPlaying ? "🔇 Music Off" : "🎵 Music On"}
      </button>
    </>
  );
}