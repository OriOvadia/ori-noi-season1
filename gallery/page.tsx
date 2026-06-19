export default function GalleryPage() {
  const photos = [
    "/photos/pilot/1.jpg",
    "/photos/first-date/1.jpg",
    "/photos/becoming-us/1.jpg",
    "/photos/vacation/1.jpg",
    "/photos/birthday/1.jpg",
    "/photos/six-months/1.jpg",
    "/photos/valentines/1.jpg",
    "/photos/finale/1.jpg",
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <a href="/" className="text-red-500 hover:underline">
        ← Back Home
      </a>

      <h1 className="text-5xl font-bold mt-8 mb-2">
        Our Memories
      </h1>

      <p className="text-gray-400 mb-10">
        A collection of our favorite Season 1 moments.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div
            key={photo}
            className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition"
          >
            <img
              src={photo}
              alt={`Memory ${index + 1}`}
              className="w-full h-48 object-cover"
            />

            <div className="p-3">
              <p className="text-sm text-gray-300">
                Memory #{index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}