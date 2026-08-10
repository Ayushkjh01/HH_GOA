import React from "react";

// Goan Portuguese-Heritage Illustrated SVG Motifs & Azulejo Ceramic Tile Artworks

// 1. Azulejo Ceramic Tile Brand Logomark
export function HHGoaLogomark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Azulejo Square Frame */}
      <rect width="40" height="40" rx="8" fill="#1B2A4A" />
      <rect x="3" y="3" width="34" height="34" rx="5" stroke="#2B4C7E" strokeWidth="1.5" />
      <rect x="6" y="6" width="28" height="28" rx="3" stroke="#FDFBF7" strokeOpacity="0.4" strokeWidth="1" />
      
      {/* Central Portuguese Rosette Star */}
      <path
        d="M20 8L22.5 16H29.5L24 20.5L26 28.5L20 23.5L14 28.5L16 20.5L10.5 16H17.5L20 8Z"
        fill="#A63A2B"
      />
      {/* Inner Petals */}
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

// 3. Goan Carved Balcão Wooden Window & Church Arch Silhouette Vector
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

// 4. Azulejo Ceramic Corner Rosette Accent
export function AzulejoCornerAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="80" height="80" fill="#1B2A4A" fillOpacity="0.05" />
      <path d="M0 0 L80 80 M80 0 L0 80" stroke="#2B4C7E" strokeOpacity="0.3" strokeWidth="1.5" />
      <circle cx="40" cy="40" r="24" stroke="#1B2A4A" strokeWidth="2" strokeOpacity="0.4" fill="none" />
      <path d="M40 10 L40 70 M10 40 L70 40" stroke="#A63A2B" strokeWidth="2" strokeOpacity="0.5" />
      <circle cx="40" cy="40" r="6" fill="#1B2A4A" />
    </svg>
  );
}

// 5. Official Goan Portuguese-Heritage Event Seal Stamp
export function GoaBeachStamp({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2.5 rounded-full border border-[#1B2A4A]/25 bg-[#FDFBF7] px-4 py-1.5 shadow-xs ${className}`}>
      <span className="flex h-2.5 w-2.5 rounded-full bg-[#A63A2B] animate-pulse" />
      <span className="font-mono-code text-[11px] font-bold text-[#1B2A4A] tracking-wider uppercase">
        HackerHouse <span className="font-devanagari text-[#A63A2B]">गोवा</span> 2026
      </span>
    </div>
  );
}
