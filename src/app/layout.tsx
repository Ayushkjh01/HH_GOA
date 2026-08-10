import type { Metadata, Viewport } from "next";
import { Syne, Space_Grotesk, JetBrains_Mono, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Frame in Goa | HH Goa 2026",
  description:
    "Official PFP frame & Builder ID Pass generator for Hacker House Goa 2026 (28–31 Oct 2026, Goa, India). Drop a photo, craft your credential, and share #FrameInGoa.",
  keywords: ["Hacker House Goa", "HH Goa 2026", "Frame in Goa", "PFP Frame Generator", "Builder Pass", "2:47 PM Studio"],
  authors: [{ name: "2:47 PM Studio" }],
  openGraph: {
    title: "Frame in Goa — Hacker House Goa 2026",
    description: "Build · Beach · Belong. Generate your official HH Goa 2026 PFP Frame and Builder Badge.",
    siteName: "Frame in Goa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frame in Goa — Hacker House Goa 2026",
    description: "Build · Beach · Belong. Generate your official HH Goa 2026 PFP Frame and Builder Badge.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF4E8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${devanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF4E8] text-[#1F2421] selection:bg-[#D9532F] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
