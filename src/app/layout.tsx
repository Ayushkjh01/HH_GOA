import type { Metadata, Viewport } from "next";
import { Playfair_Display, Space_Grotesk, JetBrains_Mono, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
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
  keywords: ["Hacker House Goa", "HH Goa 2026", "Frame in Goa", "Azulejo", "PFP Frame Generator", "Builder Pass", "2:47 PM Studio"],
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
  themeColor: "#FDFBF7",
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
      className={`${playfair.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${devanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FDFBF7] text-[#121B2D] selection:bg-[#A63A2B] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
