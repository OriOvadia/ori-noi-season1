"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FinalePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    function updateCountdown() {
      const targetDate = new Date("2027-06-24T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen flex items-end px-6 md:px-12 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/photos/finale/1.jpg"
            alt="Season Finale"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <p className="text-red-600 font-black tracking-[0.35em] mb-4">
            SEASON FINALE
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-none mb-6">
            One Year Together
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm md:text-base mb-7">
            <span className="text-green-500 font-bold">
              100% Match
            </span>

            <span className="border border-gray-500 px-2 py-0.5 text-gray-300">
              24.06.2026
            </span>

            <span className="text-gray-300">
              Finale
            </span>

            <span className="text-gray-300">
              Romance
            </span>

            <span className="text-gray-300">
              Renewed
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mb-8">
            The final episode of Season 1 — one full year of memories, laughs,
            love, small moments, big feelings, and a story I would choose again
            every single time.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#countdown"
              className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded font-black text-lg transition"
            >
              ▶ Watch Finale
            </a>

            <Link
              href="/season-2"
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded font-bold text-lg transition"
            >
              Season 2 Trailer
            </Link>

            <Link
              href="/"
              className="bg-zinc-700/80 hover:bg-zinc-600 px-8 py-3 rounded font-bold text-lg transition"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>

      <section id="countdown" className="px-6 md:px-12 py-16 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-red-600 font-bold mb-3">
            NEXT SEASON COUNTDOWN
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-5">
            Countdown to Season 2
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Season 1 may have a finale, but our story keeps going.
            This is the countdown to the next chapter.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <p className="text-5xl md:text-7xl font-black text-red-600">
                {timeLeft.days}
              </p>

              <p className="text-gray-400 mt-2">
                Days
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <p className="text-5xl md:text-7xl font-black text-red-600">
                {timeLeft.hours}
              </p>

              <p className="text-gray-400 mt-2">
                Hours
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <p className="text-5xl md:text-7xl font-black text-red-600">
                {timeLeft.minutes}
              </p>

              <p className="text-gray-400 mt-2">
                Minutes
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <p className="text-5xl md:text-7xl font-black text-red-600">
                {timeLeft.seconds}
              </p>

              <p className="text-gray-400 mt-2">
                Seconds
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-5xl mx-auto bg-zinc-900/80 border border-red-900/40 rounded-3xl p-8 md:p-12 text-center">
          <p className="text-red-600 font-bold mb-3">
            FINAL MESSAGE
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-8">
            To Noi
          </h2>

          <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Noi, this first season with you was better than anything I could
            have imagined. Thank you for every laugh, every hug, every trip,
            every photo, every small moment, and every memory that made this
            year feel so special. If Season 1 was this beautiful, I cannot wait
            for every season after it.
          </p>

  <div className="mt-10 flex flex-col items-center gap-5">
  <Link
    href="/season-2"
    className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded font-black transition"
  >
    Continue to Season 2
  </Link>

  <Link
    href="/secret"
    className="text-sm text-zinc-500 hover:text-red-500 transition underline underline-offset-4"
  >
    Secret Ending
  </Link>
</div>
        </div>
      </section>
    </main>
  );
}