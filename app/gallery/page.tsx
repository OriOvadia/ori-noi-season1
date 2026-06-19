"use client";

import { useState } from "react";
import Link from "next/link";

const collections = [
  {
    title: "The Pilot",
    subtitle: "Where the story began.",
    slug: "pilot",
    photos: [
      "/photos/pilot/1.jpg",
      "/photos/pilot/2.jpg",
      "/photos/pilot/3.jpg",
      "/photos/pilot/4.jpg",
      "/photos/pilot/5.jpg",
      "/photos/pilot/6.jpg",
    ],
  },
  {
    title: "First Date",
    subtitle: "The beginning of everything.",
    slug: "first-date",
    photos: ["/photos/first-date/1.jpg"],
  },
  {
    title: "Becoming Us",
    subtitle: "The small moments that made us closer.",
    slug: "becoming-us",
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
  },
  {
    title: "Vacation Arc",
    subtitle: "Our first adventure together.",
    slug: "vacation",
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
    ],
  },
  {
    title: "Noi's Birthday",
    subtitle: "A special episode for a special person.",
    slug: "birthday",
    photos: ["/photos/birthday/1.jpg"],
  },
  {
    title: "Six Months Later",
    subtitle: "Half a year of us.",
    slug: "six-months",
    photos: [
      "/photos/six-months/1.jpg",
      "/photos/six-months/2.jpg",
      "/photos/six-months/3.jpg",
    ],
  },
  {
    title: "Valentine Special",
    subtitle: "A romantic chapter.",
    slug: "valentines",
    photos: [
      "/photos/valentines/1.jpg",
      "/photos/valentines/2.jpg",
      "/photos/valentines/3.jpg",
      "/photos/valentines/4.jpg",
      "/photos/valentines/5.jpg",
    ],
  },
  {
    title: "Season Finale",
    subtitle: "One year together.",
    slug: "finale",
    photos: [
      "/photos/finale/1.jpg",
      "/photos/finale/2.jpg",
    ],
  },
];

export default function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 pt-28 pb-16">
      <section className="max-w-7xl mx-auto">
        <Link href="/" className="text-red-500 hover:underline">
          ← Back Home
        </Link>

        <p className="text-red-600 font-black tracking-[0.35em] mt-10 mb-4">
          PHOTO COLLECTIONS
        </p>

        <h1 className="text-5xl md:text-7xl font-black mb-6">
          Our Memories
        </h1>

        <p className="text-gray-300 text-lg max-w-3xl mb-12">
          Every photo is a scene from Season 1 — dates, trips, laughs, little
          moments, and memories that became part of our story.
        </p>

        <div className="space-y-14">
          {collections.map((collection) => (
            <section key={collection.slug}>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-5">
                <div>
                  <p className="text-red-600 font-bold mb-2">
                    COLLECTION
                  </p>

                  <h2 className="text-3xl md:text-4xl font-black">
                    {collection.title}
                  </h2>

                  <p className="text-gray-400 mt-2">
                    {collection.subtitle}
                  </p>
                </div>

                <Link
                  href={`/episodes/${collection.slug}`}
                  className="text-sm text-gray-400 hover:text-red-500 underline underline-offset-4"
                >
                  Open Episode
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {collection.photos.map((photo, index) => (
                  <button
                    key={photo}
                    onClick={() => setSelectedPhoto(photo)}
                    className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-red-700 transition text-left"
                  >
                    <img
                      src={photo}
                      alt={`${collection.title} photo ${index + 1}`}
                      className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />

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
          ))}
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