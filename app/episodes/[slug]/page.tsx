"use client";

import Link from "next/link";
import { use, useState } from "react";

const episodes = [
  {
    slug: "pilot",
    title: "The Pilot",
    subtitle: "How Ori met Noi.",
    date: "24.06.2025",
    image: "/photos/pilot/1.jpg",
    photos: [
      "/photos/pilot/1.jpg",
      "/photos/pilot/2.jpg",
      "/photos/pilot/3.jpg",
      "/photos/pilot/4.jpg",
      "/photos/pilot/5.jpg",
      "/photos/pilot/6.jpg",
    ],
    videos: [],
    story:
      "Every great story has a beginning. This was ours — the first chapter, the first spark, and the start of Season 1.",
  },
  {
    slug: "first-date",
    title: "First Date",
    subtitle: "The beginning of everything.",
    date: "Season 1 • Episode 2",
    image: "/photos/first-date/1.jpg",
    photos: ["/photos/first-date/1.jpg"],
    videos: [],
    story:
      "The episode where things started to feel real. A simple date became a memory we would keep forever.",
  },
  {
    slug: "becoming-us",
    title: "Becoming Us",
    subtitle: "The little moments that made us closer.",
    date: "Season 1 • Episode 3",
    image: "/photos/becoming-us/1.jpg",
    photos: [
      "/photos/becoming-us/1.jpg",
      "/photos/becoming-us/2.jpg",
      "/photos/becoming-us/3.jpg",
      "/photos/becoming-us/4.jpg",
      "/photos/becoming-us/5.jpg",
      "/photos/becoming-us/6.jpg",
      "/photos/becoming-us/7.jpg",
      "/photos/becoming-us/8.jpg",
      "/photos/becoming-us/9.jpg",
    ],
    videos: [],
    story:
      "Not every important moment is loud. Some are quiet, simple, and beautiful — the moments where two people slowly become us.",
  },
  {
    slug: "vacation",
    title: "Vacation Arc",
    subtitle: "Our first adventure together.",
    date: "Season 1 • Episode 4",
    image: "/photos/vacation/1.jpg",
    photos: [
      "/photos/vacation/1.jpg",
      "/photos/vacation/2.jpg",
      "/photos/vacation/3.jpg",
      "/photos/vacation/4.jpg",
      "/photos/vacation/5.jpg",
      "/photos/vacation/6.jpg",
      "/photos/vacation/7.jpg",
      "/photos/vacation/8.jpg",
      "/photos/vacation/9.jpg",
      "/photos/vacation/10.jpg",
    ],
    videos: [
      "/videos/vacation/1.mp4",
      "/videos/vacation/2.mp4",
      "/videos/vacation/3.mp4",
      "/videos/vacation/4.mp4",
      "/videos/vacation/5.mp4",
      "/videos/vacation/6.mp4",
    ],
    story:
      "A trip full of memories, laughs, pictures, and moments that felt like scenes from our favorite show.",
  },
  {
    slug: "birthday",
    title: "Noi's Birthday",
    subtitle: "A special episode for a special person.",
    date: "Season 1 • Birthday Special",
    image: "/photos/birthday/1.jpg",
    photos: ["/photos/birthday/1.jpg"],
    videos: [],
    story:
      "A birthday episode for the girl who makes every normal day feel special.",
  },
  {
    slug: "six-months",
    title: "Six Months Later",
    subtitle: "Half a year of us.",
    date: "Season 1 • Midseason Special",
    image: "/photos/six-months/1.jpg",
    photos: [
      "/photos/six-months/1.jpg",
      "/photos/six-months/2.jpg",
      "/photos/six-months/3.jpg",
    ],
    videos: [],
    story:
      "Six months of memories, jokes, hugs, dates, and little moments that became a huge part of our story.",
  },
  {
    slug: "valentines",
    title: "Valentine Special",
    subtitle: "A romantic chapter.",
    date: "Season 1 • Valentine Special",
    image: "/photos/valentines/1.jpg",
    photos: [
      "/photos/valentines/1.jpg",
      "/photos/valentines/2.jpg",
      "/photos/valentines/3.jpg",
      "/photos/valentines/4.jpg",
      "/photos/valentines/5.jpg",
    ],
    videos: [],
    story:
      "A special romantic episode, made of love, small details, and the kind of memories that stay in your heart.",
  },
  {
    slug: "finale",
    title: "Season Finale",
    subtitle: "One year together.",
    date: "24.06.2026",
    image: "/photos/finale/1.jpg",
    photos: [
      "/photos/finale/1.jpg",
      "/photos/finale/2.jpg",
    ],
    videos: [
      "/videos/finale/1.mp4",
      "/videos/finale/2.mp4",
      "/videos/finale/3.mp4",
      "/videos/finale/4.mp4",
    ],
    story:
      "The finale of Season 1 — but not the end of the story. Just the beginning of everything that comes next.",
  },
];

export default function EpisodePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const episode = episodes.find((item) => item.slug === slug);

  if (!episode) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-5xl font-black mb-4">
            Episode Not Found
          </h1>

          <Link
            href="/"
            className="bg-red-600 hover:bg-red-700 px-7 py-3 rounded font-bold"
          >
            Back Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen flex items-end px-6 md:px-12 pb-16 pt-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={episode.image}
            alt={episode.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <p className="text-red-600 font-black tracking-[0.3em] mb-4">
            ORI & NOI ORIGINAL
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-none mb-5">
            {episode.title}
          </h1>

          <p className="text-2xl text-gray-200 font-semibold mb-5">
            {episode.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-sm md:text-base mb-7">
            <span className="text-green-500 font-bold">
              98% Match
            </span>

            <span className="border border-gray-500 px-2 py-0.5 text-gray-300">
              HD
            </span>

            <span className="text-gray-300">
              {episode.date}
            </span>

            <span className="text-gray-300">
              Romance
            </span>

            <span className="text-gray-300">
              Memory
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mb-8">
            {episode.story}
          </p>

          <div className="flex flex-wrap gap-4">
            {episode.videos?.length > 0 && (
              <a
                href="#videos"
                className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded font-black text-lg transition"
              >
                ▶ Play Video
              </a>
            )}

            <a
              href="#photos"
              className="bg-zinc-700/80 hover:bg-zinc-600 px-8 py-3 rounded font-bold text-lg transition"
            >
              View Photos
            </a>

            <Link
              href="/"
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded font-bold text-lg transition"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>

      <section id="photos" className="px-6 md:px-12 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-red-600 font-bold mb-2">
              PHOTO GALLERY
            </p>

            <h2 className="text-3xl md:text-5xl font-black">
              Scenes From This Episode
            </h2>
          </div>

          <p className="hidden md:block text-gray-500 text-sm">
            {episode.photos.length} photos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {episode.photos.map((photo, index) => (
            <button
              key={photo}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-red-700 transition text-left"
            >
              <img
                src={photo}
                alt={`${episode.title} photo ${index + 1}`}
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4">
                <p className="text-red-500 text-sm font-bold">
                  SCENE {index + 1}
                </p>

                <p className="font-bold">
                  Click to view
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {episode.videos?.length > 0 && (
        <section id="videos" className="px-6 md:px-12 pb-16">
          <div className="mb-8">
            <p className="text-red-600 font-bold mb-2">
              EPISODE VIDEOS
            </p>

            <h2 className="text-3xl md:text-5xl font-black">
              Video Memories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {episode.videos.map((video, index) => (
              <div
                key={video}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4"
              >
                <video
                  controls
                  className="w-full rounded-xl bg-black shadow-2xl"
                >
                  <source src={video} type="video/mp4" />
                </video>

                <p className="text-gray-400 text-sm mt-3 text-center">
                  Video Scene {index + 1}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="px-6 md:px-12 pb-20">
        <div className="bg-gradient-to-r from-red-950/40 to-zinc-900 border border-red-900/40 rounded-3xl p-8 md:p-12">
          <p className="text-red-500 font-bold mb-3">
            EPISODE NOTE
          </p>

          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Why This Episode Matters
          </h2>

          <p className="text-gray-200 text-lg leading-relaxed max-w-4xl">
            This episode is part of the story that made Season 1 unforgettable.
            It is not just a memory — it is one more reason this year became so special.
          </p>
        </div>
      </section>

      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center px-6">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 bg-red-600 hover:bg-red-700 rounded-full w-12 h-12 font-black text-xl"
          >
            ×
          </button>

          <img
            src={selectedPhoto}
            alt="Selected memory"
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </main>
  );
}