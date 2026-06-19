"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-zinc-900">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        <Link href="/" className="text-red-600 font-black text-xl tracking-wide">
          ORI & NOI
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-300">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          <Link href="/gallery" className="hover:text-white transition">
            Gallery
          </Link>

          <Link href="/timeline" className="hover:text-white transition">
            Timeline
          </Link>

          <Link href="/videos" className="hover:text-white transition">
            Videos
          </Link>

          <Link href="/finale" className="hover:text-white transition">
            Finale
          </Link>
        </div>

        <div className="md:hidden text-xs text-gray-400">
          Our First Season
        </div>
      </div>

      <div className="md:hidden flex overflow-x-auto gap-5 px-6 pb-3 text-sm font-semibold text-gray-300">
        <Link href="/" className="hover:text-white whitespace-nowrap">
          Home
        </Link>

        <Link href="/gallery" className="hover:text-white whitespace-nowrap">
          Gallery
        </Link>

        <Link href="/timeline" className="hover:text-white whitespace-nowrap">
          Timeline
        </Link>

        <Link href="/videos" className="hover:text-white whitespace-nowrap">
          Videos
        </Link>

        <Link href="/finale" className="hover:text-white whitespace-nowrap">
          Finale
        </Link>
      </div>
    </nav>
  );
}