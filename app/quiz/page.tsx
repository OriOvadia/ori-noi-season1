"use client";

import Link from "next/link";
import { useState } from "react";

const questions = [
  {
    question: "Who loves Noi the most?",
    correctAnswers: ["ori", "אורי", "my boyfriend", "boyfriend", "you"],
  },
  {
    question: "מה אורי הכי שונא שאת עושה?",
    correctAnswers: ["לא עונה", "עצבנית", "על שקט", "מאחרת"],
  },
  {
    question: "What season are we celebrating?",
    correctAnswers: ["season 1", "1", "first season", "our first season"],
  },
  {
  question: "מה אורי הכי אוהב?",
  correctAnswers: ["צארלי", "מחשב", "answer 3"],
},
{
  question: "מה רכב החלומות של אורי?",
  correctAnswers: ["BMW", "BMW", "bmw", "במוו"],
},
{
  question: "איזה קבוצה אורי אוהד?",
  correctAnswers: ["בארסה", "ברצלונה", "barca"],
},
{
  question: "מה אורי לומד?",
  correctAnswers: ["ביפ בופ", "ביפ בופ ביפ בופ", "מחשבים"],
},
{
  question: "מ1-10 כמה את חושבת שאורי אוהב אותך??",
  correctAnswers: [],
},
];

export default function QuizPage() {
  const [answer, setAnswer] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [won, setWon] = useState(false);

 function checkAnswer() {
  const userAnswer = answer.trim().toLowerCase();
  const current = questions[currentQuestion];

  const isLastQuestion = currentQuestion === questions.length - 1;
  const userNumber = Number(userAnswer);

  const isCorrect =
    isLastQuestion
      ? !Number.isNaN(userNumber) && userNumber > 10
      : current.correctAnswers.includes(userAnswer);

  if (isCorrect) {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion === questions.length) {
      setWon(true);
    } else {
      setCurrentQuestion(nextQuestion);
      setAnswer("");
    }
  } else {
    alert("Wrong answer ❤️ Try again.");
  }
}

  return (
    <main className="min-h-screen bg-black text-white px-6 pt-28 pb-16 flex items-center justify-center">
      <section className="max-w-2xl w-full text-center bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12">
        {!won ? (
          <>
            <p className="text-red-600 font-bold mb-3">
              BONUS QUIZ
            </p>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Question {currentQuestion + 1} / {questions.length}
            </h1>

            <p className="text-gray-300 text-lg mb-8">
              Answer all questions correctly and you win a surprise gift ❤️
            </p>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6">
              <p className="text-xl font-bold mb-5">
                {questions[currentQuestion].question}
              </p>

              <input
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") checkAnswer();
                }}
                placeholder="Write your answer..."
                className="w-full px-4 py-3 rounded bg-black border border-zinc-700 text-white outline-none focus:border-red-600 text-center"
              />
            </div>

            <button
              onClick={checkAnswer}
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded font-black transition"
            >
              Submit Answer
            </button>
          </>
        ) : (
          <>
            <p className="text-red-600 font-bold mb-3">
              YOU WON
            </p>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Surprise Gift Unlocked 🎁
            </h1>

            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
              Congratulations Noi ❤️ You won a surprise gift from Ori.
              Claim it now!!.
            </p>

            <div className="bg-red-950/40 border border-red-900 rounded-3xl p-8 mb-8">
              <p className="text-6xl mb-4">
                🎁
              </p>

              <h2 className="text-3xl font-black mb-3">
                Your Gift
              </h2>

              <p className="text-gray-300">
             תסתכלי על אורי
              </p>
            </div>

            <Link
              href="/keep-dating"
              className="inline-block bg-red-600 hover:bg-red-700 px-8 py-3 rounded font-black transition"
            >
              Continue
            </Link>
          </>
        )}
      </section>
    </main>
  );
}