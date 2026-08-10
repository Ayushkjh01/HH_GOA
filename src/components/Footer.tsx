import Link from "next/link";
import { Globe, MapPin, Calendar, Heart } from "lucide-react";
import { XIcon } from "@/components/XIcon";
import { GithubIcon } from "@/components/GithubIcon";
import { GoaWaveRipples, HHGoaLogomark } from "@/components/GoaMotifs";

export function Footer() {
  return (
    <footer className="relative bg-[#FAF4E8] text-[#0F4C5C]">
      {/* Organic Wave Divider */}
      <GoaWaveRipples />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D9532F] text-white shadow-md shadow-[#D9532F]/20">
                <HHGoaLogomark className="h-5 w-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-[#1F2421]">
                HackerHouse <span className="font-devanagari text-[#D9532F]">गोवा</span>
              </span>
            </div>

            <p className="text-xs text-[#1F2421]/80 max-w-sm leading-relaxed font-medium">
              Official PFP frame & builder credential generator for Hacker House Goa 2026. Create custom digital event badges, profile frames, and team credentials in seconds.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono-code">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D9532F]/15 px-3 py-1 border border-[#D9532F]/30 text-[#D9532F] font-bold">
                <Calendar className="h-3.5 w-3.5" />
                <span>28–31 OCT 2026</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0F4C5C]/15 px-3 py-1 border border-[#0F4C5C]/30 text-[#0F4C5C] font-bold">
                <MapPin className="h-3.5 w-3.5" />
                <span>GOA, INDIA</span>
              </span>
            </div>
          </div>

          {/* Quick Routes */}
          <div>
            <h4 className="font-mono-code text-xs font-bold text-[#1F2421] uppercase tracking-wider mb-4">
              // Generators
            </h4>
            <ul className="space-y-2.5 text-xs font-mono-code font-bold">
              <li>
                <Link href="/frame" className="hover:text-[#D9532F] transition-colors flex items-center gap-2">
                  <span>→ Format A: PFP Overlay</span>
                </Link>
              </li>
              <li>
                <Link href="/pass" className="hover:text-[#D9532F] transition-colors flex items-center gap-2">
                  <span>→ Format B: Builder ID Card</span>
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#D9532F] transition-colors flex items-center gap-2">
                  <span>→ Group / Team Pass</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-[#D9532F] transition-colors flex items-center gap-2">
                  <span>→ My Pass Vault</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="font-mono-code text-xs font-bold text-[#1F2421] uppercase tracking-wider mb-4">
              // Event Vibe
            </h4>
            <div className="space-y-2 text-xs font-mono-code">
              <p className="font-bold text-[#1F2421]">"Less Noise. More Signal."</p>
              <p className="italic text-[#D9532F] font-bold">"Build · Beach · Belong"</p>
              <div className="pt-2">
                <span className="font-mono-code text-xs text-[#D9532F] font-bold bg-[#D9532F]/15 px-2.5 py-1 rounded-md border border-[#D9532F]/30">
                  #FrameInGoa
                </span>
              </div>
            </div>
          </div>

          {/* Studio Watermark & Socials */}
          <div>
            <h4 className="font-mono-code text-xs font-bold text-[#1F2421] uppercase tracking-wider mb-4">
              // Studio Credit
            </h4>
            <div className="space-y-3 text-xs">
              <div className="rounded-xl border border-[#D9532F]/25 bg-white p-3 text-[#1F2421] shadow-xs">
                <div className="text-[10px] font-mono-code uppercase text-[#0F4C5C] font-bold">Crafted & Designed by</div>
                <div className="font-bold text-base text-[#D9532F] tracking-wide mt-0.5">
                  2:47 PM Studio
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://twitter.com/intent/tweet?text=Building%20at%20Hacker%20House%20Goa%202026!%20%F0%9F%8F%9D%EF%B8%8F%20%23FrameInGoa&url=https://frameingoa.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#D9532F]/30 bg-white text-[#1F2421] hover:border-[#D9532F] hover:text-[#D9532F] transition-all shadow-xs"
                  aria-label="X Twitter"
                >
                  <XIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#D9532F]/30 bg-white text-[#1F2421] hover:border-[#D9532F] hover:text-[#D9532F] transition-all shadow-xs"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://hhgoa2026.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#D9532F]/30 bg-white text-[#1F2421] hover:border-[#D9532F] hover:text-[#D9532F] transition-all shadow-xs"
                  aria-label="Official Website"
                >
                  <Globe className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-[#D9532F]/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-[#0F4C5C] font-bold">
          <div>
            <span>© 2026 Hacker House Goa. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="h-3.5 w-3.5 text-[#D9532F] fill-current animate-pulse" />
            <span>by 2:47 PM Studio for #FrameInGoa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
