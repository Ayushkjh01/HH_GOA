"use client";

import { useEffect, useRef, useState, use } from "react";
import Link from "next/link";
import { Download, Share2, ArrowLeft, Check, ShieldCheck, Sun } from "lucide-react";
import { XIcon } from "@/components/XIcon";
import confetti from "canvas-confetti";
import jsPDF from "jspdf";
import { decodePayload, BuilderPayload, getTwitterShareUrl, shareNative } from "@/lib/share-utils";
import { renderFormatA, renderFormatB, renderFormatC } from "@/lib/canvas-utils";
import { GoaBeachStamp } from "@/components/GoaMotifs";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function BuilderProfilePage({ params }: PageProps) {
  const { id } = use(params);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [payload, setPayload] = useState<BuilderPayload | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (id) {
      const decoded = decodePayload(id);
      setPayload(decoded);
    }
  }, [id]);

  useEffect(() => {
    if (!canvasRef.current || !payload) return;

    if (payload.f === "A") {
      renderFormatA(canvasRef.current, {
        image: undefined,
        skin: (payload.s as any) || "sunset",
        badgeText: payload.badge || payload.n || "BUILDER",
        panX: 0,
        panY: 0,
        zoom: 1,
      });
    } else if (payload.f === "B") {
      renderFormatB(canvasRef.current, {
        image: undefined,
        name: payload.n || "GOA BUILDER",
        role: payload.r || "FULL-STACK DEV",
        title: payload.t || "GOA SUNSET CODER",
        skin: (payload.s as any) || "sunset",
        panX: 0,
        panY: 0,
        zoom: 1,
      });
    } else if (payload.f === "C") {
      renderFormatC(canvasRef.current, {
        teamName: payload.tn || payload.n || "TEAM HACKWAVE",
        members: [
          { name: "BUILDER 1", role: "DEVELOPER" },
          { name: "BUILDER 2", role: "DESIGNER" },
          { name: "BUILDER 3", role: "ARCHITECT" },
        ],
        skin: "sunset",
      });
    }
  }, [payload]);

  const handleDownloadPNG = () => {
    if (!canvasRef.current) return;
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });

    canvasRef.current.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `HH_GOA_CREDENTIAL_${payload?.n || "BUILDER"}.png`;
      a.click();
      URL.revokeObjectURL(url);
    }, "image/png");
  };

  const handleDownloadPDF = () => {
    if (!canvasRef.current) return;
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });

    const imgData = canvasRef.current.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: [200, 105],
    });
    pdf.addImage(imgData, "PNG", 0, 0, 200, 105);
    pdf.save(`HH_GOA_CREDENTIAL_${payload?.n || "BUILDER"}.pdf`);
  };

  const handleShareX = () => {
    const twitterUrl = getTwitterShareUrl(id, payload?.n);
    window.open(twitterUrl, "_blank");
  };

  const handleCopyLink = async () => {
    const shareUrl = window.location.href;
    const shared = await shareNative({
      title: "Hacker House Goa 2026 Credential",
      text: `Check out ${payload?.n || "this builder"}'s official credential for Hacker House Goa 2026! #FrameInGoa`,
      url: shareUrl,
    });

    if (!shared) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF4E8] bg-mesh-goa bg-grain py-12 px-4 sm:px-6 lg:px-8 text-[#1F2421]">
      <div className="mx-auto max-w-4xl space-y-8">
        
        {/* Navigation back */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono-code font-bold text-[#0F4C5C] hover:text-[#D9532F] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>BACK TO HOME</span>
          </Link>
        </div>

        {/* Profile Header */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <GoaBeachStamp />
          </div>

          <h1 className="font-display text-3xl font-extrabold text-[#1F2421] sm:text-5xl">
            {payload?.n || "Verified Goa Builder"}
          </h1>

          <p className="text-sm font-mono-code text-[#0F4C5C] font-bold">
            {payload?.t || payload?.r || "Hacker House Goa 2026 Delegation Pass"}
          </p>
        </div>

        {/* Large Rendered Credential Card */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-2xl aspect-[1200/630] rounded-3xl p-3 goa-panel overflow-hidden">
            <canvas
              ref={canvasRef}
              className="w-full h-full rounded-2xl object-contain bg-[#fff8ee]"
            />
          </div>
        </div>

        {/* Actions Sheet */}
        <div className="goa-panel rounded-3xl p-6 max-w-xl mx-auto space-y-4 text-center">
          <h3 className="font-display text-lg font-bold text-[#1F2421]">
            Credential Actions
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono-code text-xs font-bold">
            <button onClick={handleDownloadPNG} className="goa-btn-primary w-full">
              <Download className="h-4 w-4" />
              <span>DOWNLOAD PNG</span>
            </button>

            {payload?.f === "B" && (
              <button onClick={handleDownloadPDF} className="goa-btn-secondary w-full">
                <Download className="h-4 w-4" />
                <span>EXPORT PDF PASS</span>
              </button>
            )}

            <button onClick={handleShareX} className="goa-btn-secondary w-full">
              <XIcon className="h-4 w-4" />
              <span>SHARE ON X</span>
            </button>

            <button onClick={handleCopyLink} className="goa-btn-secondary w-full">
              {copied ? <Check className="h-4 w-4 text-[#D9532F]" /> : <Share2 className="h-4 w-4" />}
              <span>{copied ? "LINK COPIED!" : "COPY PUBLIC LINK"}</span>
            </button>
          </div>

          {/* Prominent CTA */}
          <div className="pt-4 border-t border-[#D9532F]/20">
            <Link href="/" className="goa-btn-primary px-8 py-3.5 text-xs">
              <Sun className="h-4 w-4" />
              <span>MAKE YOUR OWN FRAME / PASS →</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
