import React from "react";

// Custom Goa Illustrated SVG Motifs & Wave Dividers

// 1. Custom Minimal Sun-Setting-Over-Wave Brand Logomark
export function HHGoaLogomark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Setting Sun Half-Circle */}
      <path
        d="M8 20C8 13.3726 13.3726 8 20 8C26.6274 8 32 13.3726 32 20H8Z"
        fill="currentColor"
      />
      {/* Inner Sun Beam Accent */}
      <path
        d="M20 12V14M14.34 14.34L15.76 15.76M25.66 14.34L24.24 15.76"
        stroke="#FAF4E8"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Primary Ocean Wave Curve */}
      <path
        d="M4 22C10 26 16 18 22 22C28 26 32 20 36 22"
        stroke="#0F4C5C"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Secondary Wave Ripple Base */}
      <path
        d="M4 27C11 31 17 23 23 27C29 31 32 26 36 27"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 2. Organic Multi-Layered Ocean Wave SVG Divider
export function GoaWaveRipples({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-12 text-[#D9532F]/15"
      >
        <path
          d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z"
          fill="currentColor"
        />
        <path
          d="M0,20 C200,80 450,-10 700,50 C950,110 1100,30 1200,60 L1200,120 L0,120 Z"
          fill="#0F4C5C"
          fillOpacity="0.08"
        />
      </svg>
    </div>
  );
}

// 3. Custom Illustrated Palm Leaf Frond Vector Motif
export function GoaPalmFrond({ className = "", color = "#0F4C5C" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 110C35 85 45 60 50 30"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M50 30C35 15 15 12 5 20C20 30 35 32 50 30Z"
        fill={color}
        fillOpacity="0.8"
      />
      <path
        d="M50 30C65 12 85 10 95 18C80 28 65 30 50 30Z"
        fill={color}
        fillOpacity="0.8"
      />
      <path
        d="M50 30C30 35 12 45 8 60C22 55 38 48 50 30Z"
        fill={color}
        fillOpacity="0.85"
      />
      <path
        d="M50 30C70 38 88 48 92 62C78 55 62 46 50 30Z"
        fill={color}
        fillOpacity="0.85"
      />
      <path
        d="M50 30C45 50 40 70 38 88C48 72 50 52 50 30Z"
        fill={color}
        fillOpacity="0.9"
      />
      <circle cx="44" cy="34" r="5" fill="#D9532F" />
      <circle cx="54" cy="36" r="4.5" fill="#D9532F" />
    </svg>
  );
}

// 4. Custom Refined Goa Coastal Landscape Vector Graphic
export function GoaCoastalLandscape({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="skyShoreGrad" x1="0" y1="0" x2="0" y2="400">
          <stop offset="0%" stopColor="#FAF4E8" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#E6F4F1" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FAF4E8" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      <rect width="1200" height="400" fill="url(#skyShoreGrad)" />

      <g stroke="#0F4C5C" strokeOpacity="0.12" strokeWidth="1.5" fill="none">
        <path d="M-100 120 C 200 180, 500 80, 800 150 C 1000 200, 1200 140, 1300 160" />
        <path d="M-100 160 C 250 220, 550 120, 850 190 C 1050 240, 1200 180, 1300 200" />
        <path d="M-100 200 C 300 260, 600 160, 900 230 C 1100 280, 1200 220, 1300 240" stroke="#D9532F" strokeOpacity="0.1" />
      </g>

      <path
        d="M0 350 C 400 320, 800 380, 1200 340 L 1200 400 L 0 400 Z"
        fill="#D9532F"
        fillOpacity="0.04"
      />
    </svg>
  );
}

// 5. Custom Goa Event Seal Stamp
export function GoaBeachStamp({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-[#D9532F]/30 bg-white/90 px-3.5 py-1.5 shadow-xs ${className}`}>
      <span className="flex h-2 w-2 rounded-full bg-[#D9532F] animate-pulse" />
      <span className="font-mono-code text-[11px] font-bold text-[#0F4C5C] tracking-wide uppercase">
        HackerHouse <span className="font-devanagari text-[#D9532F]">गोवा</span> 2026
      </span>
    </div>
  );
}
