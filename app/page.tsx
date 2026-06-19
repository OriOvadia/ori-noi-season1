"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";


export default function Home() {
  const [myList, setMyList] = useState<string[]>([]);
  const [reviewName, setReviewName] = useState("");
const [reviewText, setReviewText] = useState("");
const [reviews, setReviews] = useState<
  { id?: string; name: string; text: string }[]
>([]);
const [password, setPassword] = useState("");
const [unlocked, setUnlocked] = useState(false);
const [showIntro, setShowIntro] = useState(false);
const [checkingSession, setCheckingSession] = useState(true);


useEffect(() => {
  async function loadReviews() {
    const { data, error } = await supabase
      .from("reviews")
      .select("id, name, text")
      .order("created_at", { ascending: false });

    if (error) {
      console.log("Error loading reviews:", error.message);
      return;
    }

    setReviews(data || []);
  }

  loadReviews();
}, []);
useEffect(() => {
  const savedMyList = localStorage.getItem("ori-noi-my-list");

  if (savedMyList) {
    setMyList(JSON.parse(savedMyList));
  }
}, []);

useEffect(() => {
  const savedLogin = sessionStorage.getItem("ori-noi-unlocked");

  if (savedLogin === "true") {
    setUnlocked(true);
  }

  setCheckingSession(false);
}, []);

const episodes = [
  {
    slug: "pilot",
    title: "The Pilot",
    description: "How Ori met Noi.",
    image: "/photos/pilot/1.jpg",
  },
  {
    slug: "first-date",
    title: "First Date",
    description: "The beginning of everything.",
    image: "/photos/first-date/1.jpg",
  },
  {
    slug: "becoming-us",
    title: "Becoming Us",
    description: "The little moments that made us closer.",
    image: "/photos/becoming-us/1.jpg",
  },
  {
    slug: "vacation",
    title: "Vacation Arc",
    description: "Our first adventure together.",
    image: "/photos/vacation/1.jpg",
  },
  {
    slug: "birthday",
    title: "Noi's Birthday",
    description: "A special episode for a special person.",
    image: "/photos/birthday/1.jpg",
  },
  {
    slug: "six-months",
    title: "Six Months Later",
    description: "Half a year of us.",
    image: "/photos/six-months/1.jpg",
  },
  {
    slug: "valentines",
    title: "Valentine Special",
    description: "A romantic chapter.",
    image: "/photos/valentines/1.jpg",
  },
  {
    slug: "finale",
    title: "Season Finale",
    description: "One year together.",
    image: "/photos/finale/1.jpg",
  },
];

function checkPassword() {
  if (password === "24062026") {
    sessionStorage.setItem("ori-noi-unlocked", "true");

    // Start music immediately from the user's click
    window.dispatchEvent(new Event("startMusic"));

    setUnlocked(true);
    setShowIntro(true);

    setTimeout(() => {
      setShowIntro(false);
    }, 3000);
  } else {
    alert("Wrong code ❤️ Try our special date.");
  }
}
async function submitReview() {
  if (!reviewName.trim() || !reviewText.trim()) {
    alert("Write your name and review first ❤️");
    return;
  }

  const { data, error } = await supabase
    .from("reviews")
    .insert([
      {
        name: reviewName,
        text: reviewText,
      },
    ])
    .select();

  if (error) {
    alert("Could not save review. Check Supabase setup.");
    console.log(error.message);
    return;
  }

  if (data && data[0]) {
    setReviews([data[0], ...reviews]);
  }

  setReviewName("");
  setReviewText("");

  alert("Review submitted ❤️");
}
function toggleMyList(slug: string) {
  let updatedList: string[];

  if (myList.includes(slug)) {
    updatedList = myList.filter((item) => item !== slug);
  } else {
    updatedList = [...myList, slug];
  }

  setMyList(updatedList);
  localStorage.setItem("ori-noi-my-list", JSON.stringify(updatedList));
}
function surpriseMe() {
  const randomEpisode = episodes[Math.floor(Math.random() * episodes.length)];
  window.location.href = `/episodes/${randomEpisode.slug}`;
}
if (checkingSession) {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <p className="text-gray-400">Loading...</p>
    </main>
  );
}
  if (!unlocked) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center bg-zinc-950 border border-zinc-800 rounded-2xl p-8 shadow-2xl">
          <p className="text-red-600 text-5xl font-black mb-4">
          </p>

          <h1 className="text-3xl font-bold mb-2">
            ORI & NOI
          </h1>

          <p className="text-gray-400 mb-8">
            Enter the secret code to start Season 1.
          </p>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") checkPassword();
            }}
            placeholder="Enter code"
            className="w-full px-4 py-3 rounded bg-zinc-900 border border-zinc-700 text-white outline-none focus:border-red-600 mb-4"
          />

          <button
            onClick={checkPassword}
            className="w-full bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded font-bold"
          >
            Start Watching
          </button>

          <p className="text-xs text-gray-600 mt-5">
            Hint: our anniversary date
          </p>
        </div>
      </main>
    );
  }
if (showIntro) {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      <div className="text-center animate-pulse">
        <div className="text-red-600 text-[140px] md:text-[220px] font-black tracking-tighter netflix-n">
          N
        </div>

        <p className="text-xl md:text-3xl font-bold tracking-[0.4em] mt-6">
          ORI & NOI
        </p>

        <p className="text-gray-400 mt-3">
          Our First Season is starting...
        </p>
      </div>
    </main>
  );
}

  return (
    <main className="min-h-screen bg-black text-white">
        <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/photos/hero/hero.jpg"
            alt="Ori and Noi"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <p className="text-red-600 font-black tracking-[0.35em] mb-4">
            ORI & NOI ORIGINAL
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-none mb-6">
            Our First Season
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm md:text-base mb-6">
            <span className="text-green-500 font-bold">
              99% Match
            </span>

            <span className="border border-gray-500 px-2 py-0.5 text-gray-300">
              2025
            </span>

            <span className="text-gray-300">
              1 Season
            </span>

            <span className="text-gray-300">
              Romance
            </span>

            <span className="text-gray-300">
              Real Life
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mb-8">
            A story about us — the first date, the laughs, the trips, the little moments,
            and every memory that made this season unforgettable.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#episodes"
              className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded font-black text-lg transition"
            >
              ▶ Play
            </Link>
            <button
  onClick={surpriseMe}
  className="bg-zinc-700/80 hover:bg-zinc-600 px-8 py-3 rounded font-bold text-lg transition"
>
  Surprise Me
</button>

            <Link
              href="/gallery"
              className="bg-zinc-700/80 hover:bg-zinc-600 px-8 py-3 rounded font-bold text-lg transition"
            >
              Our Memories
            </Link>

            <Link
              href="/timeline"
              className="bg-zinc-700/80 hover:bg-zinc-600 px-8 py-3 rounded font-bold text-lg transition"
            >
              Timeline
            </Link>

            <Link
              href="/videos"
              className="bg-zinc-700/80 hover:bg-zinc-600 px-8 py-3 rounded font-bold text-lg transition"
            >
              Videos
            </Link>

            <Link
              href="/finale"
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded font-bold text-lg transition"
            >
              Finale
            </Link>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-12 py-10 bg-black">
        <h2 className="text-3xl font-bold mb-6">
          Continue Watching
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/episodes/first-date"
            className="group bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition block"
          >
            <div className="relative">
              <img
                src="/photos/first-date/1.jpg"
                alt="First Date"
                className="w-full h-56 object-cover"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition" />

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-700">
                <div className="h-full w-3/4 bg-red-600" />
              </div>
            </div>
              
            <div className="p-4">
              <p className="text-red-500 text-sm font-bold mb-1">
                Episode 2
              </p>

              <h3 className="text-xl font-bold">
                First Date
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                The episode where everything started to feel real.
              </p>
            </div>
          </Link>

          <Link
            href="/episodes/vacation"
            className="group bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition block"
          >
            <div className="relative">
              <img
                src="/photos/vacation/1.jpg"
                alt="First Vacation"
                className="w-full h-56 object-cover"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition" />

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-700">
                <div className="h-full w-1/2 bg-red-600" />
              </div>
            </div>

            <div className="p-4">
              <p className="text-red-500 text-sm font-bold mb-1">
                Episode 4
              </p>

              <h3 className="text-xl font-bold">
                First Vacation
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                A special trip, a lot of memories, and one of the best episodes.
              </p>
            </div>
          </Link>

          <Link
            href="/episodes/finale"
            className="group bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition block"
          >
            <div className="relative">
              <img
                src="/photos/finale/1.jpg"
                alt="Season Finale"
                className="w-full h-56 object-cover"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition" />

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-700">
                <div className="h-full w-11/12 bg-red-600" />
              </div>
            </div>

            <div className="p-4">
              <p className="text-red-500 text-sm font-bold mb-1">
                Finale
              </p>

              <h3 className="text-xl font-bold">
                Season Finale
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                The ending of Season 1, and the beginning of everything after.
              </p>
            </div>
          </Link>
        </div>
      </section>
            <section className="px-6 md:px-12 py-16 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto">
          <p className="text-red-600 font-bold mb-3">
            STARRING
          </p>

          <h2 className="text-3xl md:text-5xl font-black mb-8">
            Meet the Cast
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-800 transition">
              <div className="text-6xl mb-6">
                👑
              </div>

              <p className="text-red-500 font-bold mb-2">
                MAIN CHARACTER
              </p>

              <h3 className="text-3xl font-black mb-4">
                Noi
              </h3>

              <p className="text-gray-300 leading-relaxed">
                The heart of the story, the reason this season became special,
                and the person who makes every episode worth watching.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-800 transition">
              <div className="text-6xl mb-6">
                ❤️
              </div>

              <p className="text-red-500 font-bold mb-2">
                CO-STAR
              </p>

              <h3 className="text-3xl font-black mb-4">
                Ori
              </h3>

              <p className="text-gray-300 leading-relaxed">
                The boyfriend, the biggest fan, and the one who would happily
                rewatch every moment with Noi again and again.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-800 transition">
              <div className="text-6xl mb-6">
                🎬
              </div>

              <p className="text-red-500 font-bold mb-2">
                SUPPORTING CAST
              </p>

              <h3 className="text-3xl font-black mb-4">
                Our Memories
              </h3>

              <p className="text-gray-300 leading-relaxed">
                The dates, photos, laughs, trips, hugs, small moments, and
                everything that turned this year into Season 1.
              </p>
            </div>
          </div>
        </div>
      </section>
             <section id="episodes" className="px-6 md:px-12 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-red-600 font-bold mb-2">
              FULL SEASON
            </p>

            <h2 className="text-3xl md:text-4xl font-black">
              Season 1 Episodes
            </h2>
          </div>

          <p className="hidden md:block text-gray-500 text-sm">
            8 episodes • Based on a true love story
          </p>
        </div>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
         {episodes.map((episode, index) => {
  const isAdded = myList.includes(episode.slug);
  return (
    <div
      key={episode.title}
      className="group bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition border border-zinc-800 hover:border-red-700"
    >
      <Link href={`/episodes/${episode.slug}`} className="block">
        <div className="relative">
          <img
            src={episode.image}
            alt={episode.title}
            className="w-full h-48 object-cover group-hover:brightness-110 transition"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          <div className="absolute top-3 left-3 bg-black/80 text-white text-xs font-bold px-3 py-1 rounded-full">
            EP {index + 1}
          </div>

          <div className="absolute bottom-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
            98% Match
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-black text-lg mb-2">
            {episode.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed min-h-10">
            {episode.description}
          </p>

          <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
            <span className="border border-gray-600 px-2 py-0.5">
              HD
            </span>

            <span>
              Romance
            </span>

            <span>
              •
            </span>

            <span>
              Memory
            </span>
          </div>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <button
          onClick={() => toggleMyList(episode.slug)}
          
          className={`w-full px-4 py-2 rounded font-bold text-sm transition ${
            isAdded
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-zinc-800 hover:bg-zinc-700 text-white"
          }`}
        >
          {isAdded ? "✓ Added" : "+ My List"}
        </button>
        
      </div>
    </div>
    
  );
})}

        </div>
      </section>

            <section className="px-6 md:px-12 py-16 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-red-600 font-bold mb-2">
                AUDIENCE REVIEWS
              </p>

              <h2 className="text-3xl md:text-5xl font-black">
                What Viewers Are Saying
              </h2>

              <p className="text-gray-400 mt-3 max-w-2xl">
                Real reviews from the most important audience — us, the memories,
                and everyone who knows this story deserves five stars.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-center">
              <p className="text-yellow-400 text-2xl">
                ⭐⭐⭐⭐⭐
              </p>

              <p className="text-gray-400 text-sm mt-1">
                5.0 average rating
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-red-800 transition">
              <p className="text-yellow-400 text-xl mb-5">
                ⭐⭐⭐⭐⭐
              </p>

              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                “10/10, would fall in love again.”
              </p>

              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">
                  Ori
                </h3>

                <span className="text-xs text-red-500 font-bold">
                  VERIFIED VIEWER
                </span>
              </div>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-red-800 transition">
              <p className="text-yellow-400 text-xl mb-5">
                ⭐⭐⭐⭐⭐
              </p>

              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                “Noi is the most beautiful girl ever.”
              </p>

              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">
                  Critics
                </h3>

                <span className="text-xs text-red-500 font-bold">
                  TOP CRITIC
                </span>
              </div>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-red-800 transition">
              <p className="text-yellow-400 text-xl mb-5">
                ⭐⭐⭐⭐⭐
              </p>

              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                “Funny, romantic, emotional, and impossible to stop watching.”
              </p>

              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">
                  Season 1
                </h3>

                <span className="text-xs text-red-500 font-bold">
                  RENEWED
                </span>
              </div>
            </div>

            {reviews.map((review) => (
              <div
                key={review.id || review.name}
                className="bg-zinc-900/80 border border-red-900/40 rounded-2xl p-6 hover:border-red-700 transition"
              >
                <p className="text-yellow-400 text-xl mb-5">
                  ⭐⭐⭐⭐⭐
                </p>

                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  “{review.text}”
                </p>

                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">
                    {review.name}
                  </h3>

                  <span className="text-xs text-red-500 font-bold">
                    FAN REVIEW
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl bg-black/70 border border-zinc-800 rounded-3xl p-6 md:p-8 shadow-2xl">
            <p className="text-red-600 font-bold mb-2">
              LEAVE YOUR REVIEW
            </p>

            <h3 className="text-2xl md:text-3xl font-black mb-6">
              Rate Season 1 ❤️
            </h3>

            <input
              value={reviewName}
              onChange={(e) => setReviewName(e.target.value)}
              placeholder="Your name"
              className="w-full mb-4 px-4 py-3 rounded bg-zinc-900 border border-zinc-700 text-white outline-none focus:border-red-600"
            />

            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review..."
              rows={4}
              className="w-full mb-4 px-4 py-3 rounded bg-zinc-900 border border-zinc-700 text-white outline-none focus:border-red-600"
            />

            <button
              onClick={submitReview}
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded font-black transition"
            >
              Submit Review
            </button>

            <p className="text-gray-500 text-sm mt-4">
              Your review will be saved online and shown on the homepage.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}