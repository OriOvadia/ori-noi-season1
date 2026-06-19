"use client";

import Link from "next/link";
import { useState } from "react";

export default function SeasonTwoPage() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen flex items-end px-6 md:px-12 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/photos/finale/1.jpg"
            alt="Season 2 Trailer"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <p className="text-red-600 font-black tracking-[0.35em] mb-4">
            OFFICIAL TRAILER
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-none mb-6">
            Season 2
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm md:text-base mb-7">
            <span className="text-green-500 font-bold">
              Renewed
            </span>

            <span className="border border-gray-500 px-2 py-0.5 text-gray-300">
              Coming Soon
            </span>

            <span className="text-gray-300">
              Romance
            </span>

            <span className="text-gray-300">
              Adventure
            </span>

            <span className="text-gray-300">
              More Us
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mb-8">
            Season 1 was only the beginning. Season 2 is about more memories,
            more adventures, more laughs, more love, and every new episode we
            have not lived yet.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#trailer"
              className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded font-black text-lg transition"
            >
              ▶ Watch Trailer
            </a>
            <button
  onClick={() => setSubscribed(true)}
  className={`px-8 py-3 rounded font-black text-lg transition ${
    subscribed
      ? "bg-green-600 hover:bg-green-700 text-white"
      : "bg-red-600 hover:bg-red-700 text-white"
  }`}
>
  {subscribed ? "Subscribed ❤️" : "Subscribe for Season 2"}
</button>


            <Link
              href="/finale"
              className="bg-zinc-700/80 hover:bg-zinc-600 px-8 py-3 rounded font-bold text-lg transition"
            >
              Back to Finale
            </Link>

            <Link
              href="/"
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded font-bold text-lg transition"
            >
              Home
            </Link>
          </div>
          {subscribed && (
  <p className="text-green-400 font-bold mt-5">
    You are now subscribed to every future episode with Noi ❤️
  </p>
)}
        </div>
      </section>

      <section id="trailer" className="px-6 md:px-12 py-16 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-red-600 font-bold mb-3">
            TEASER MESSAGE
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Coming Next Season
          </h2>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            More date nights. More random photos. More deep talks. More silly
            laughs. More hugs. More trips. More memories. More of the story
            that started with us.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-6xl mx-auto">
          <p className="text-red-600 font-bold mb-3">
            SEASON 2 EPISODES
          </p>

          <h2 className="text-3xl md:text-5xl font-black mb-8">
            Future Episodes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-red-800 transition">
              <p className="text-5xl mb-5">
                ❤️
              </p>

              <h3 className="text-xl font-bold mb-3">
                More Date Nights
              </h3>

              <p className="text-gray-400">
                New places, old jokes, good food, and more nights that become memories.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-red-800 transition">
              <p className="text-5xl mb-5">
                ✈️
              </p>

              <h3 className="text-xl font-bold mb-3">
                Future Vacation
              </h3>

              <p className="text-gray-400">
                Another trip, another adventure, and another episode we will never forget.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-red-800 transition">
              <p className="text-5xl mb-5">
                😂
              </p>

              <h3 className="text-xl font-bold mb-3">
                More Laughs
              </h3>

              <p className="text-gray-400">
                More silly moments, more inside jokes, and more reasons to smile.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-red-800 transition">
              <p className="text-5xl mb-5">
                🎬
              </p>

              <h3 className="text-xl font-bold mb-3">
                More Episodes
              </h3>

              <p className="text-gray-400">
                Because the best stories do not end. They keep getting better.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 bg-zinc-950">
        <div className="max-w-5xl mx-auto bg-black border border-red-900/40 rounded-3xl p-8 md:p-12 text-center">
          <p className="text-red-600 font-bold mb-3">
            RENEWAL ANNOUNCEMENT
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Renewed for Another Season
          </h2>

          <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            I do not know every scene that Season 2 will have yet, but I know
            who I want to watch it with. You.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link
              href="/finale"
              className="bg-zinc-800 hover:bg-zinc-700 px-8 py-3 rounded font-bold transition"
            >
              Back to Finale
            </Link>

            <Link
              href="/"
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded font-black transition"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}