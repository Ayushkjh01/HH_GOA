"use client";

import Link from "next/link";
import { useState } from "react";
import { Frame, IdCard, Users, ArrowRight, Download, Zap, Share2, Copy, Check, Sun } from "lucide-react";
import { XIcon } from "@/components/XIcon";
import { GoaCoastalLandscape, GoaPalmFrond, GoaWaveRipples, GoaBeachStamp } from "@/components/GoaMotifs";

export default function LandingPage() {
  const [copiedHashtag, setCopiedHashtag] = useState(false);

  const copyHashtagText = () => {
    navigator.clipboard.writeText("Building at Hacker House Goa 2026! 🌴 Check out my builder pass: #FrameInGoa @HackerHouseGoa");
    setCopiedHashtag(true);
    setTimeout(() => setCopiedHashtag(false), 2500);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF4E8] bg-mesh-goa bg-grain overflow-hidden text-[#1F2421]">
      
      {/* Background Illustrated Motifs */}
      <GoaCoastalLandscape className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-auto pointer-events-none" />
      <GoaPalmFrond className="absolute top-12 left-4 w-32 h-32 opacity-15 pointer-events-none hidden lg:block" />
      <GoaPalmFrond className="absolute top-12 right-4 w-32 h-32 opacity-15 pointer-events-none hidden lg:block -scale-x-100" />

      {/* HERO SECTION */}
      <section className="relative mx-auto max-w-7xl px-4 pt-14 pb-20 sm:px-6 lg:px-8 lg:pt-20 lg:pb-28">
        
        {/* Event Seal Badge */}
        <div className="flex justify-center">
          <GoaBeachStamp />
        </div>

        {/* Hero Title & Taglines */}
        <div className="mt-8 text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-[#1F2421] sm:text-6xl lg:text-7xl leading-[1.1]">
            <span className="block text-[#1F2421]">Frame in Goa</span>
            <span className="block mt-2 text-[#D9532F]">
              HackerHouse <span className="font-devanagari text-[#D9532F]">गोवा</span>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-mono-code text-[#0F4C5C] font-bold">
            "Less Noise. More Signal."
          </p>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#1F2421] leading-relaxed font-semibold">
            Drop a photo. Generate your official event profile overlay, high-res builder ID pass, or team delegation graphic in seconds. Instant client-side render with dynamic shareable profile URLs.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pass" className="goa-btn-primary w-full sm:w-auto text-base py-3.5 px-7">
              <IdCard className="h-5 w-5 text-white" />
              <span>Build ID Card (Format B)</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link href="/frame" className="goa-btn-secondary w-full sm:w-auto text-base py-3.5 px-7">
              <Frame className="h-5 w-5 text-[#D9532F]" />
              <span>PFP Overlay (Format A)</span>
            </Link>

            <Link href="/team" className="goa-btn-secondary w-full sm:w-auto text-base py-3.5 px-6">
              <Users className="h-5 w-5 text-[#0F4C5C]" />
              <span>Team Pass</span>
            </Link>
          </div>

          {/* Studio Credit Watermark */}
          <div className="pt-2 text-xs font-mono-code text-[#0F4C5C] font-bold">
            Crafted by <span className="text-[#D9532F]">2:47 PM Studio</span> • Build · Beach · Belong
          </div>
        </div>

        {/* HERO LIVE SHOWCASE CARDS */}
        <div className="mt-16 relative mx-auto max-w-5xl">
          <div className="relative rounded-3xl goa-panel p-6 sm:p-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Format A */}
              <div className="goa-card p-6 text-center flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#D9532F]/15 text-[#D9532F] border border-[#D9532F]/30">
                    <Frame className="h-6 w-6" />
                  </div>
                  <div className="inline-block rounded-full bg-[#D9532F]/15 px-3 py-1 text-[11px] font-mono-code text-[#D9532F] font-bold">
                    FORMAT A
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#1F2421]">PFP Frame Overlay</h3>
                  <p className="text-xs text-[#1F2421]/80 leading-relaxed font-medium">
                    Square profile picture frame with "HackerHouse goa" border, palm canopy art & dates.
                  </p>
                </div>

                <div className="pt-4">
                  <Link href="/frame" className="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold text-[#D9532F] hover:underline">
                    <span>Create PFP Frame</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Format B */}
              <div className="goa-card p-6 text-center flex flex-col justify-between border-[#D9532F]/40 shadow-md">
                <div className="space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#D9532F] text-white">
                    <IdCard className="h-6 w-6" />
                  </div>
                  <div className="inline-block rounded-full bg-[#D9532F] px-3 py-1 text-[11px] font-mono-code text-white font-bold">
                    FORMAT B
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#1F2421]">Builder ID Card</h3>
                  <p className="text-xs text-[#1F2421]/80 leading-relaxed font-medium">
                    Official badge pass with photo, stack/role, fun title generator, QR code & PDF option.
                  </p>
                </div>

                <div className="pt-4">
                  <Link href="/pass" className="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold text-[#D9532F] hover:underline">
                    <span>Generate ID Pass</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 3: Team Pass */}
              <div className="goa-card p-6 text-center flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F4C5C]/15 text-[#0F4C5C] border border-[#0F4C5C]/30">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="inline-block rounded-full bg-[#0F4C5C]/15 px-3 py-1 text-[11px] font-mono-code text-[#0F4C5C] font-bold">
                    GROUP / TEAM
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#1F2421]">Teammate Pass</h3>
                  <p className="text-xs text-[#1F2421]/80 leading-relaxed font-medium">
                    Combine 2 or 3 teammates into one shared group graphic for team posts.
                  </p>
                </div>

                <div className="pt-4">
                  <Link href="/team" className="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold text-[#0F4C5C] hover:underline">
                    <span>Build Team Graphic</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* HASHTAG BANNER SECTION WITH WAVE DIVIDER */}
      <GoaWaveRipples />
      
      <section className="relative bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#D9532F]/15 px-3.5 py-1 text-xs font-mono-code text-[#D9532F] border border-[#D9532F]/30 font-bold">
                <XIcon className="h-3.5 w-3.5" />
                <span>OFFICIAL HASHTAG</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-[#1F2421] sm:text-4xl">
                #FrameInGoa
              </h2>
              <p className="text-sm font-mono-code text-[#0F4C5C] max-w-xl font-semibold">
                Share your generated card on X with <span className="text-[#D9532F] font-bold">#FrameInGoa</span> to join the official builder directory and get featured on the Hacker House Goa live wall.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button onClick={copyHashtagText} className="goa-btn-secondary">
                {copiedHashtag ? <Check className="h-4 w-4 text-[#D9532F]" /> : <Copy className="h-4 w-4" />}
                <span>{copiedHashtag ? "COPIED TO CLIPBOARD!" : "COPY SHARE CAPTION"}</span>
              </button>

              <a
                href="https://twitter.com/intent/tweet?text=Building%20at%20Hacker%20House%20Goa%202026!%20%F0%9F%8F%9D%EF%B8%8F%20%23FrameInGoa&url=https://frameingoa.com"
                target="_blank"
                rel="noreferrer"
                className="goa-btn-primary"
              >
                <XIcon className="h-4 w-4" />
                <span>TWEET #FRAMEINGOA</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BUILD WITH US */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-display text-3xl font-extrabold text-[#1F2421] sm:text-4xl">
            Built for Builders, Near-Instant Render
          </h2>
          <p className="text-sm font-mono-code text-[#0F4C5C] font-bold">
            No signup required • 100% Client-Side • Retina Canvas Export
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="goa-card p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D9532F]/15 text-[#D9532F]">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#1F2421]">Near-Instant Canvas Engine</h3>
            <p className="text-xs text-[#1F2421]/80 leading-relaxed font-medium">
              No cloud rendering wait times. Your graphics compositing happens directly on high-DPR HTML5 &lt;canvas&gt; in 1–2 seconds.
            </p>
          </div>

          <div className="goa-card p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F2C063]/25 text-[#D9532F]">
              <Share2 className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#1F2421]">Dynamic Shareable Profile</h3>
            <p className="text-xs text-[#1F2421]/80 leading-relaxed font-medium">
              Every generation gives you a public `/builder/[id]` link with server-rendered OG image previews for X/Twitter sharing.
            </p>
          </div>

          <div className="goa-card p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F4C5C]/15 text-[#0F4C5C]">
              <Download className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#1F2421]">PNG & PDF Event Passes</h3>
            <p className="text-xs text-[#1F2421]/80 leading-relaxed font-medium">
              Export pixel-perfect square PNGs for PFP frames or 1200x630 event badge cards with print-ready PDF options.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
