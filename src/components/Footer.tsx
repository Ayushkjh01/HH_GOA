import Link from "next/link";
import { Globe, MapPin, Calendar, Heart } from "lucide-react";
import { XIcon } from "@/components/XIcon";
import { GithubIcon } from "@/components/GithubIcon";
import { AzulejoTilePattern, HHGoaLogomark } from "@/components/GoaMotifs";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-[#1B2A4A]/15 bg-[#FDFBF7] text-[#121B2D]">
      
      {/* Top Azulejo Ceramic Tile Divider */}
      <AzulejoTilePattern className="absolute -top-4 left-0 w-full" />

      <div className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1B2A4A] text-white shadow-md shadow-[#1B2A4A]/20">
                <HHGoaLogomark className="h-5 w-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-[#121B2D]">
                HackerHouse <span className="font-devanagari text-[#A63A2B]">गोवा</span>
              </span>
            </div>

            <p className="text-xs text-[#2B4C7E] leading-relaxed max-w-md font-medium">
              Official PFP frame & builder credential generator for Hacker House Goa 2026. Create custom digital event badges, profile overlays, and team credentials in seconds.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono-code font-semibold text-[#1B2A4A]">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#1B2A4A]/20 bg-white px-3 py-1 text-[#A63A2B]">
                <Calendar className="h-3.5 w-3.5 text-[#A63A2B]" />
                <span>28–31 OCT 2026</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#1B2A4A]/20 bg-white px-3 py-1 text-[#2B4C7E]">
                <MapPin className="h-3.5 w-3.5 text-[#2B4C7E]" />
                <span>GOA, INDIA</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#A63A2B]">
              // GENERATORS
            </h4>
            <ul className="space-y-2 text-xs font-mono-code font-bold text-[#2B4C7E]">
              <li>
                <Link href="/frame" className="hover:text-[#1B2A4A] transition-colors">
                  → Format A: PFP Overlay
                </Link>
              </li>
              <li>
                <Link href="/pass" className="hover:text-[#1B2A4A] transition-colors">
                  → Format B: Builder ID Card
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#1B2A4A] transition-colors">
                  → Group / Team Pass
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-[#1B2A4A] transition-colors">
                  → My Pass Vault
                </Link>
              </li>
            </ul>
          </div>

          {/* Event Vibe & Credit */}
          <div className="space-y-3">
            <h4 className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#A63A2B]">
              // EVENT VIBE
            </h4>
            <p className="text-xs font-mono-code font-bold text-[#121B2D]">
              "Less Noise. More Signal."
            </p>
            <p className="text-xs font-serif italic text-[#A63A2B]">
              "Build · Beach · Belong"
            </p>

            <div className="pt-2">
              <span className="inline-block rounded-lg bg-[#A63A2B]/10 border border-[#A63A2B]/20 px-2.5 py-1 text-xs font-mono-code font-bold text-[#A63A2B]">
                #FrameInGoa
              </span>
            </div>
          </div>
        </div>

        {/* Studio Credit Section */}
        <div className="mt-10 pt-6 border-t border-[#1B2A4A]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="goa-card px-4 py-2 flex items-center gap-2">
              <span className="text-xs font-mono-code text-[#2B4C7E] font-bold">CRAFTED & DESIGNED BY</span>
              <span className="font-display font-bold text-sm text-[#A63A2B]">2:47 PM Studio</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono-code text-[#2B4C7E]">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-[#1B2A4A]/15 bg-white text-[#121B2D] hover:text-[#A63A2B] transition-colors"
              aria-label="X (Twitter)"
            >
              <XIcon className="h-4 w-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-[#1B2A4A]/15 bg-white text-[#121B2D] hover:text-[#A63A2B] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href="https://frameingoa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-[#1B2A4A]/15 bg-white text-[#121B2D] hover:text-[#A63A2B] transition-colors"
              aria-label="Website"
            >
              <Globe className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 text-center text-[11px] font-mono-code text-[#2B4C7E] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 Hacker House Goa. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Crafted with <Heart className="h-3 w-3 fill-[#A63A2B] text-[#A63A2B]" /> by 2:47 PM Studio for #FrameInGoa
          </p>
        </div>
      </div>
    </footer>
  );
}
