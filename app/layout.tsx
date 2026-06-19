import type { Metadata } from "next";
import MusicPlayer from "@/components/MusicPlayer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ori & Noi - Our First Season",
  description: "A Netflix-inspired anniversary site for Ori and Noi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <MusicPlayer />
        {children}
      </body>
    </html>
  );
}