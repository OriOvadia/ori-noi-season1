import Link from "next/link";

export default function SecretPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-28 pb-16">
      <section className="max-w-4xl mx-auto text-center">
        <p className="text-red-600 font-bold mb-3">
          SECRET EPISODE
        </p>

        <h1 className="text-5xl md:text-7xl font-black mb-6">
          Things I Love About Noi
        </h1>

        <p className="text-gray-300 text-lg mb-12">
          A hidden episode, made only for you.
        </p>

        <div className="grid gap-5 text-left">
          {[
            "The way you make normal days feel special.",
            "Your smile, even when you do not realize how much it means.",
            "The way you care.(exept remembering things)",
            "The little moments with you that become my favorite memories.",
            "How being with you feels like home.",
            "The way you make me laugh.",
            "Its never boting with you",
            "You make me wanna be with you every time of the day",
            "The most smartest person i have ever known",
            "You make everyone who talk with you to fall in love in you",
            "You have been with me while time was difficult",
            "You didnt give up",
            "Funny as hell",
            "Honest",
            "Loyal as fuck",
            "I just love you so much",
            "Because this first season with you was better than anything I could have imagined.",
          ].map((reason, index) => (
            <div
              key={reason}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >
              <p className="text-red-500 font-bold mb-2">
                Reason #{index + 1}
              </p>

              <p className="text-gray-200 text-lg">
                {reason}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-red-950/30 border border-red-900 rounded-2xl p-8 mt-12">
          <h2 className="text-3xl font-bold mb-4">
            My Favorite Part
          </h2>

          <p className="text-gray-200 leading-relaxed text-lg">
            Noi, if this year was Season 1, then I already know this is my favorite show.
            Thank you for every memory, every laugh, every hug, and every moment that made
            this year feel so special. I would choose you again in every episode.
          </p>
        </div>
         <div className="mt-10 flex flex-wrap justify-center gap-4">
<Link
  href="/keep-dating"
  className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded font-black transition"
>
  One More Question ❤️
</Link>
  </div>
        <Link
          href="/finale"
          className="inline-block mt-10 bg-red-600 hover:bg-red-700 px-8 py-3 rounded font-bold"
        >
          Back to Finale
        </Link>
      </section>
    </main>
  );
}