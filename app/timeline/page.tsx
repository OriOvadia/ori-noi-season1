import Link from "next/link";
export default function TimelinePage() {
  const milestones = [
    {
      date: "24.06.2025",
      title: "The Pilot",
      text: "The day Ori and Noi's story began.",
      emoji: "❤️",
    },
    {
      date: "First Date",
      title: "The First Date",
      text: "The beginning of everything — the first real episode of us.",
      emoji: "🎬",
    },
    {
      date: "First Vacation",
      title: "Vacation Arc",
      text: "Our first adventure together, full of memories, photos, and stories.",
      emoji: "✈️",
    },
    {
      date: "Noi's Birthday",
      title: "Birthday Special",
      text: "A special chapter for the most special girl.",
      emoji: "🎂",
    },
    {
      date: "Valentine's Day",
      title: "Valentine Special",
      text: "A romantic bonus episode in Season 1.",
      emoji: "🌹",
    },
    {
      date: "6 Months Together",
      title: "Halfway Through Season 1",
      text: "Six months of laughs, memories, and becoming even closer.",
      emoji: "⭐",
    },
    {
      date: "24.06.2026",
      title: "Season Finale",
      text: "One full year together. Season 1 complete — renewed for Season 2.",
      emoji: "🍿",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 pt-28 pb-10">
<Link href="/" className="text-red-500 hover:underline">
  ← Back Home
</Link>

      <section className="max-w-4xl mx-auto mt-10">
        <p className="text-red-600 font-bold mb-3">
          ORI & NOI ORIGINAL
        </p>

        <h1 className="text-5xl md:text-6xl font-black mb-4">
          Our Timeline
        </h1>

        <p className="text-gray-400 text-lg mb-12">
          The story of Season 1, from the pilot episode to the finale.
        </p>

        <div className="relative border-l border-red-700 pl-8">
          {milestones.map((item, index) => (
            <div key={index} className="mb-12 relative">
              <div className="absolute -left-[52px] top-0 h-10 w-10 rounded-full bg-red-600 flex items-center justify-center text-xl shadow-lg">
                {item.emoji}
              </div>

              <p className="text-sm text-red-500 font-bold mb-1">
                {item.date}
              </p>

              <h2 className="text-2xl font-bold mb-2">
                {item.title}
              </h2>

              <p className="text-gray-300 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}