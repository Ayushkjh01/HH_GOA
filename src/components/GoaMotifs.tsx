import React from "react";

// Goan Portuguese-Heritage & Coastal Illustrated SVG Motifs

// 1. Azulejo Ceramic Tile Brand Logomark
export function HHGoaLogomark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="40" height="40" rx="8" fill="#1B2A4A" />
      <rect x="3" y="3" width="34" height="34" rx="5" stroke="#2B4C7E" strokeWidth="1.5" />
      <rect x="6" y="6" width="28" height="28" rx="3" stroke="#FDFBF7" strokeOpacity="0.4" strokeWidth="1" />
      <path
        d="M20 8L22.5 16H29.5L24 20.5L26 28.5L20 23.5L14 28.5L16 20.5L10.5 16H17.5L20 8Z"
        fill="#A63A2B"
      />
      <circle cx="20" cy="20" r="4" fill="#FDFBF7" />
      <circle cx="20" cy="20" r="2" fill="#1B2A4A" />
    </svg>
  );
}

// 2. Azulejo Ceramic Tile Border Pattern (Portuguese Blue Ceramic Motif)
export function AzulejoTilePattern({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="relative block w-full h-8 text-[#1B2A4A]"
      >
        <pattern id="azulejoTile" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <rect width="60" height="60" fill="#1B2A4A" fillOpacity="0.04" />
          <path d="M0 0 L60 60 M60 0 L0 60" stroke="#2B4C7E" strokeOpacity="0.25" strokeWidth="1.2" />
          <circle cx="30" cy="30" r="16" stroke="#1B2A4A" strokeOpacity="0.3" strokeWidth="1.5" fill="none" />
          <path d="M30 10 L30 50 M10 30 L50 30" stroke="#A63A2B" strokeOpacity="0.35" strokeWidth="1.5" />
          <rect x="25" y="25" width="10" height="10" fill="#1B2A4A" fillOpacity="0.2" transform="rotate(45 30 30)" />
        </pattern>
        <rect width="1200" height="60" fill="url(#azulejoTile)" />
      </svg>
    </div>
  );
}

// 3. Fine Line-Art Coconut Palm Tree Vector (Brand Palette Linework)
export function GoanHeritagePalm({ className = "h-8 w-8 text-[#1B2A4A]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Curved Trunk */}
      <path
        d="M45 115 C40 85, 30 55, 50 30 C58 20, 52 25, 48 30"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Trunk Ring Segments */}
      <path d="M41 95 L49 98 M37 80 L45 83 M35 65 L43 68 M38 50 L46 53" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Coconuts */}
      <circle cx="45" cy="32" r="4" fill="#A63A2B" />
      <circle cx="52" cy="34" r="4.5" fill="#A63A2B" />
      <circle cx="48" cy="38" r="3.5" fill="#A63A2B" />

      {/* Fronds / Leaves */}
      <path d="M50 30 Q75 10 90 25 M50 30 Q65 -5 45 -10 M50 30 Q25 5 10 20 M50 30 Q15 25 15 45 M50 30 Q75 35 85 55 M50 30 Q60 50 45 65" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Leaf Ribs */}
      <path d="M70 20 L75 25 M60 12 L63 18 M35 15 L32 20 M25 28 L20 32 M70 40 L76 46 M62 45 L64 52" stroke="#A63A2B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 4. Fine Line-Art Straw Sun Hat Accent Icon
export function GoanSunHat({ className = "h-6 w-6 text-[#A63A2B]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Brim */}
      <path d="M5 32 Q30 20 55 32 Q30 38 5 32 Z" fill="#FDFBF7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      {/* Crown */}
      <path d="M18 30 C18 15 24 10 30 10 C36 10 42 15 42 30" fill="#FDFBF7" stroke="currentColor" strokeWidth="2" />
      {/* Hat Ribbon */}
      <path d="M18 28 Q30 25 42 28" stroke="#1B2A4A" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// 5. Fine Line-Art Beach Umbrella Icon
export function GoanBeachUmbrella({ className = "h-6 w-6 text-[#1B2A4A]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Pole */}
      <path d="M30 30 L30 65" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 65 L24 62" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Umbrella Canopy */}
      <path d="M5 30 Q30 5 55 30 Z" fill="#FDFBF7" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Canopy Stripes */}
      <path d="M30 7 L30 30 M18 15 Q22 25 20 30 M42 15 Q38 25 40 30" stroke="#A63A2B" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// 6. Shoreline Wave Contour Linework
export function GoanShorelineWaves({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1200 30"
        preserveAspectRatio="none"
        className="relative block w-full h-5 text-[#1B2A4A]"
      >
        <path d="M0 15 Q150 0 300 15 T600 15 T900 15 T1200 15" stroke="#1B2A4A" strokeWidth="2" fill="none" strokeOpacity="0.4" />
        <path d="M0 22 Q150 10 300 22 T600 22 T900 22 T1200 22" stroke="#A63A2B" strokeWidth="1.5" fill="none" strokeOpacity="0.3" />
      </svg>
    </div>
  );
}

// 7. Goan Carved Balcão Wooden Window & Church Arch Silhouette Vector
export function GoanWindowBalcao({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="balcaoGrad" x1="0" y1="0" x2="0" y2="300">
          <stop offset="0%" stopColor="#1B2A4A" stopOpacity="0.12" />
          <stop offset="60%" stopColor="#2B4C7E" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#FDFBF7" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="400" height="300" fill="url(#balcaoGrad)" />

      {/* Whitewashed Church Arch Outline */}
      <path
        d="M50 300 V120 C50 60, 120 20, 200 20 C280 20, 350 60, 350 120 V300"
        stroke="#1B2A4A"
        strokeWidth="2"
        strokeOpacity="0.15"
        fill="none"
      />
      <path
        d="M70 300 V130 C70 80, 130 40, 200 40 C270 40, 330 80, 330 130 V300"
        stroke="#A63A2B"
        strokeWidth="1.5"
        strokeOpacity="0.12"
        fill="none"
      />

      {/* Balcão Carved Wooden Railings */}
      <g stroke="#1B2A4A" strokeWidth="1.5" strokeOpacity="0.18">
        <line x1="80" y1="240" x2="320" y2="240" />
        <line x1="80" y1="280" x2="320" y2="280" />
        <line x1="110" y1="240" x2="110" y2="280" />
        <line x1="140" y1="240" x2="140" y2="280" />
        <line x1="170" y1="240" x2="170" y2="280" />
        <line x1="200" y1="240" x2="200" y2="280" />
        <line x1="230" y1="240" x2="230" y2="280" />
        <line x1="260" y1="240" x2="260" y2="280" />
        <line x1="290" y1="240" x2="290" y2="280" />
      </g>
    </svg>
  );
}

// 8. Official Goan Portuguese-Heritage Event Seal Stamp
export function GoaBeachStamp({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-[#1B2A4A]/25 bg-[#FDFBF7] px-4 py-1.5 shadow-xs ${className}`}>
      <GoanHeritagePalm className="h-4 w-4 text-[#A63A2B]" />
      <span className="font-mono-code text-[11px] font-bold text-[#1B2A4A] tracking-wider uppercase">
        HackerHouse <span className="font-devanagari text-[#A63A2B]">गोवा</span> 2026
      </span>
    </div>
  );
}
