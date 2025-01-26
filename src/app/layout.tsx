import type { Metadata } from "next";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import "./globals.css";

import Navigation from "@/components/Navigation";

import { Quicksand } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
const quicksand:NextFont = Quicksand({subsets:['latin']});

export const metadata: Metadata = {
  title: "Aaron | Web Developer",
  description: "Aaron MacPherson's portfolio",
};

export default function RootLayout({ children }:Readonly<{ children: React.ReactNode }>) {

  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${quicksand.className} bg-mainBackground`}>
        <header className="relative z-[999]">
          <Navigation />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
