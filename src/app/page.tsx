import Link from "next/link";
import { IdCard, Frame, Users, ArrowRight, Share2, Sparkles, ShieldCheck, Download, Award } from "lucide-react";
import { GoaBeachStamp, AzulejoTilePattern, GoanWindowBalcao } from "@/components/GoaMotifs";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#FDFBF7] text-[#121B2D]">
      
      {/* Top Azulejo Decorative Tile Border */}
      <AzulejoTilePattern className="w-full" />

      {/* Hero Section */}
      <section className="relative px-4 pt-10 pb-20 sm:px-6 sm:pt-16 sm:pb-24 lg:px-8">
        
        {/* Background Balcão Arch Linework */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
          <GoanWindowBalcao className="w-full max-w-4xl h-auto text-[#1B2A4A]" />
        </div>

        {/* Goa Heritage Event Badge */}
        <div className="flex justify-center">
          <GoaBeachStamp />
        </div>

        {/* Hero Title & Taglines */}
        <div className="mt-8 text-center space-y-6 max-w-4xl mx-auto px-2 relative z-10">
          <h1 className="font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#121B2D] leading-[1.15] text-center w-full max-w-full overflow-hidden">
            <span className="block text-[#121B2D]">Frame in Goa</span>
            <span className="block mt-1.5 sm:mt-2 text-[#A63A2B] break-words">
              HackerHouse <span className="font-devanagari text-[#A63A2B] inline-block">गोवा</span>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-mono-code text-[#2B4C7E] font-bold">
            "Less Noise. More Signal."
          </p>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#121B2D] leading-relaxed font-semibold">
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
              <Frame className="h-5 w-5 text-[#A63A2B]" />
              <span>PFP Overlay (Format A)</span>
            </Link>

            <Link href="/team" className="goa-btn-secondary w-full sm:w-auto text-base py-3.5 px-6">
              <Users className="h-5 w-5 text-[#1B2A4A]" />
              <span>Team Pass</span>
            </Link>
          </div>

          {/* Studio Credit Watermark */}
          <div className="pt-2 text-xs font-mono-code text-[#2B4C7E] font-bold">
            Crafted by <span className="text-[#A63A2B]">2:47 PM Studio</span> • Build · Beach · Belong
          </div>
        </div>
      </section>

      {/* Format Showcase Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#A63A2B]">
            // THREE DISTINCT BADGE FORMATS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#121B2D]">
            Craft Your Hacker House Credential
          </h2>
          <p className="text-sm font-mono-code text-[#2B4C7E] font-medium max-w-xl mx-auto">
            Choose your format. All graphics are generated client-side with 100% privacy and zero server lag.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Format A Card */}
          <div className="goa-card p-6 flex flex-col justify-between hover:scale-[1.01] transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-[#A63A2B]/10 border border-[#A63A2B]/20 px-3 py-1 text-xs font-mono-code font-bold text-[#A63A2B]">
                  FORMAT A
                </span>
                <span className="text-xs font-mono-code text-[#2B4C7E] font-bold">1000 × 1000 px</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#121B2D]">PFP Profile Overlay</h3>
              <p className="text-xs text-[#2B4C7E] leading-relaxed font-medium">
                Square profile picture frame featuring Azulejo ceramic tile rosettes, carved balcão arch linework, and custom badge overlay text.
              </p>
            </div>
            <div className="pt-6">
              <Link href="/frame" className="goa-btn-primary w-full text-center text-xs py-2.5">
                <span>Generate PFP Overlay</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Format B Card */}
          <div className="goa-panel p-6 flex flex-col justify-between hover:scale-[1.01] transition-all relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-[#1B2A4A] text-white px-3 py-1 text-xs font-mono-code font-bold">
                  FORMAT B • MOST POPULAR
                </span>
                <span className="text-xs font-mono-code text-[#2B4C7E] font-bold">1200 × 630 px</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#121B2D]">Builder ID Event Badge</h3>
              <p className="text-xs text-[#2B4C7E] leading-relaxed font-medium">
                Official horizontal event credential pass with photo upload, tech stack role selector, fun title generator, and dynamic QR code verification.
              </p>
            </div>
            <div className="pt-6">
              <Link href="/pass" className="goa-btn-primary w-full text-center text-xs py-2.5">
                <span>Create Builder ID Card</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Format C Card */}
          <div className="goa-card p-6 flex flex-col justify-between hover:scale-[1.01] transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-[#A63A2B]/10 border border-[#A63A2B]/20 px-3 py-1 text-xs font-mono-code font-bold text-[#A63A2B]">
                  FORMAT C
                </span>
                <span className="text-xs font-mono-code text-[#2B4C7E] font-bold">1200 × 630 px</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#121B2D]">Team / Group Pass</h3>
              <p className="text-xs text-[#2B4C7E] leading-relaxed font-medium">
                Combined delegation graphic for 2 or 3 teammates with Azulejo rosette corner points, team name, and individual stack roles.
              </p>
            </div>
            <div className="pt-6">
              <Link href="/team" className="goa-btn-secondary w-full text-center text-xs py-2.5">
                <span>Create Team Pass</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1B2A4A]/15">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="goa-card p-5 space-y-2">
            <Sparkles className="h-6 w-6 text-[#A63A2B]" />
            <h4 className="font-display text-base font-bold text-[#121B2D]">Client-Side Instant</h4>
            <p className="text-xs text-[#2B4C7E]">No upload waits. Canvas renders directly in browser.</p>
          </div>
          <div className="goa-card p-5 space-y-2">
            <ShieldCheck className="h-6 w-6 text-[#1B2A4A]" />
            <h4 className="font-display text-base font-bold text-[#121B2D]">100% Private</h4>
            <p className="text-xs text-[#2B4C7E]">Your photos stay in your browser. No server storage required.</p>
          </div>
          <div className="goa-card p-5 space-y-2">
            <Share2 className="h-6 w-6 text-[#A63A2B]" />
            <h4 className="font-display text-base font-bold text-[#121B2D]">Shareable Profile URLs</h4>
            <p className="text-xs text-[#2B4C7E]">Stateless base64 profile links with dynamic OpenGraph cards.</p>
          </div>
          <div className="goa-card p-5 space-y-2">
            <Award className="h-6 w-6 text-[#1B2A4A]" />
            <h4 className="font-display text-base font-bold text-[#121B2D]">Print & Export</h4>
            <p className="text-xs text-[#2B4C7E]">Download high-res PNG & print-ready PDF credentials.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
