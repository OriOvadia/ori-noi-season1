"use client";

import Link from "next/link";
import { useState } from "react";

export default function KeepDatingPage() {
  const [noPosition, setNoPosition] = useState({
    top: 65,
    left: 55,
  });

  const [saidYes, setSaidYes] = useState(false);

  function moveNoButton() {
    const newTop = Math.floor(Math.random() * 65) + 15;
    const newLeft = Math.floor(Math.random() * 70) + 10;

    setNoPosition({
      top: newTop,
      left: newLeft,
    });
  }

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center px-6 pt-28 pb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black" />

      <section className="relative z-10 max-w-3xl w-full text-center bg-zinc-950/90 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl">
        {!saidYes ? (
          <>
            <p className="text-red-600 font-bold mb-3">
              FINAL QUESTION
            </p>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Would you like to keep dating me?
            </h1>

            <p className="text-gray-300 text-lg mb-10">
              Choose carefully. One answer is obviously correct ❤️
            </p>

            <div className="flex items-center justify-center gap-5">
              <button
                onClick={() => setSaidYes(true)}
                className="bg-red-600 hover:bg-red-700 px-10 py-4 rounded font-black text-xl transition"
              >
                Yes ❤️
              </button>
            </div>

            <button
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              className="absolute bg-zinc-800 hover:bg-zinc-700 px-8 py-3 rounded font-bold transition"
              style={{
                top: `${noPosition.top}%`,
                left: `${noPosition.left}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              No
            </button>
          </>
        ) : (
          <>
            <p className="text-red-600 font-bold mb-3">
              CORRECT ANSWER
            </p>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              I knew you would say yes ❤️
            </h1>

            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
              Then it is official: Season 2 is confirmed, renewed, and already
              my favorite season.
              Correct answer ❤️ But before the surprise gift, there is one final bonus quiz.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
          <Link
  href="/quiz"
  className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded font-black transition"
>
  Continue to Bonus Quiz 🎁
</Link>

              <Link
                href="/"
                className="bg-zinc-800 hover:bg-zinc-700 px-8 py-3 rounded font-bold transition"
              >
                Back Home
              </Link>
            </div>
          </>
        )}
      </section>
    </main>
  );
}