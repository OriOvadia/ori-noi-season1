import Link from "next/link";

const videoCollections = [
  {
    title: "Vacation Arc",
    subtitle: "Six video memories from our first adventure together.",
    slug: "vacation",
    videos: [
      "/videos/vacation/1.mp4",
      "/videos/vacation/2.mp4",
      "/videos/vacation/3.mp4",
      "/videos/vacation/4.mp4",
      "/videos/vacation/5.mp4",
      "/videos/vacation/6.mp4",
    ],
  },
  {
    title: "Season Finale",
    subtitle: "Four videos from the finale of Season 1.",
    slug: "finale",
    videos: [
      "/videos/finale/1.mp4",
      "/videos/finale/2.mp4",
      "/videos/finale/3.mp4",
      "/videos/finale/4.mp4",
    ],
  },
];

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 pt-28 pb-16">
      <section className="max-w-7xl mx-auto">
        <Link href="/" className="text-red-500 hover:underline">
          ← Back Home
        </Link>

        <p className="text-red-600 font-black tracking-[0.35em] mt-10 mb-4">
          VIDEO COLLECTIONS
        </p>

        <h1 className="text-5xl md:text-7xl font-black mb-6">
          Our Videos
        </h1>

        <p className="text-gray-300 text-lg max-w-3xl mb-12">
          Video memories from Season 1 — the moments that move, laugh, and feel
          like real scenes from our story.
        </p>

        <div className="space-y-16">
          {videoCollections.map((collection) => (
            <section key={collection.slug}>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-red-600 font-bold mb-2">
                    COLLECTION
                  </p>

                  <h2 className="text-3xl md:text-5xl font-black">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {collection.videos.map((video, index) => (
                  <div
                    key={video}
                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 hover:border-red-800 transition"
                  >
                    <video
                      controls
                      className="w-full rounded-xl bg-black shadow-2xl"
                    >
                      <source src={video} type="video/mp4" />
                    </video>

                    <div className="pt-4">
                      <p className="text-red-500 text-sm font-bold">
                        VIDEO SCENE {index + 1}
                      </p>

                      <h3 className="text-xl font-bold mt-1">
                        {collection.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}