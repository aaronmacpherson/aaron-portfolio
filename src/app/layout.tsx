import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "aaron-portfolio",
  description: "The boilerplate starting project folder for PROG3017",
};

export default function RootLayout({ children }:Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
