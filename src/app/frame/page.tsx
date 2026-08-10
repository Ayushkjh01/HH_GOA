"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { Upload, Download, Share2, RefreshCw, Move, Check, Sun } from "lucide-react";
import { XIcon } from "@/components/XIcon";
import confetti from "canvas-confetti";
import { renderFormatA, RenderOptionsFormatA } from "@/lib/canvas-utils";
import { savePassToVault } from "@/lib/storage";
import { encodePayload, getTwitterShareUrl, shareNative } from "@/lib/share-utils";
import { GoaBeachStamp } from "@/components/GoaMotifs";

export default function FramePage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageObj, setImageObj] = useState<HTMLImageElement | null>(null);
  const [loading, setLoading] = useState(false);

  // Form Controls
  const [skin, setSkin] = useState<RenderOptionsFormatA["skin"]>("sunset");
  const [badgeText, setBadgeText] = useState<string>("BUILDER");
  const [panX, setPanX] = useState<number>(0);
  const [panY, setPanY] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(1);
  const [copiedLink, setCopiedLink] = useState(false);
  const [lastSavedId, setLastSavedId] = useState<string>("");

  // Handle Image Upload & HEIC Conversion
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    try {
      let imageBlob: Blob = file;

      if (file.name.toLowerCase().endsWith(".heic") || file.type.includes("heic")) {
        const heic2any = (await import("heic2any")).default;
        const converted = await heic2any({ blob: file, toType: "image/png" });
        imageBlob = Array.isArray(converted) ? converted[0] : converted;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          setImageObj(img);
          setLoading(false);
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(imageBlob);
    } catch (err) {
      console.error("Error loading image:", err);
      setLoading(false);
    }
  };

  // Canvas redraw
  const drawCanvas = useCallback(() => {
    if (!canvasRef.current) return;
    renderFormatA(canvasRef.current, {
      image: imageObj || undefined,
      skin,
      badgeText,
      panX,
      panY,
      zoom,
    });
  }, [imageObj, skin, badgeText, panX, panY, zoom]);

  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  // Save current frame state & get payload ID
  const saveCurrentPass = () => {
    if (!canvasRef.current) return "";
    const builderId = encodePayload({
      f: "A",
      n: badgeText || "Hacker",
      s: skin,
      badge: badgeText,
    });

    const dataUrl = canvasRef.current.toDataURL("image/png");
    savePassToVault({
      id: builderId,
      format: "frame",
      name: badgeText || "PFP Frame",
      skin,
      dataUrl,
    });
    setLastSavedId(builderId);
    return builderId;
  };

  // Download PNG
  const handleDownload = () => {
    if (!canvasRef.current) return;
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });

    canvasRef.current.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `HH_GOA_PFP_FRAME_${Date.now()}.png`;
      a.click();
      URL.revokeObjectURL(url);
    }, "image/png");

    saveCurrentPass();
  };

  // Share to X
  const handleShareX = () => {
    const builderId = lastSavedId || saveCurrentPass();
    const twitterUrl = getTwitterShareUrl(builderId, badgeText);
    window.open(twitterUrl, "_blank");
  };

  // Native Share
  const handleNativeShare = async () => {
    const builderId = lastSavedId || saveCurrentPass();
    const shareUrl = `${window.location.origin}/builder/${builderId}`;
    
    if (canvasRef.current) {
      canvasRef.current.toBlob(async (blob) => {
        if (!blob) return;
        const file = new File([blob], "frame_goa.png", { type: "image/png" });
        const shared = await shareNative({
          title: "Frame in Goa — PFP Frame",
          text: "My official Hacker House Goa 2026 PFP Frame! #FrameInGoa",
          url: shareUrl,
          file,
        });

        if (!shared) {
          navigator.clipboard.writeText(shareUrl);
          setCopiedLink(true);
          setTimeout(() => setCopiedLink(false), 2000);
        }
      }, "image/png");
    }
  };

  return (
    <div className="min-h-screen bg-transparent py-10 px-4 sm:px-6 lg:px-8 text-[#121B2D]">
      <div className="mx-auto max-w-6xl space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <GoaBeachStamp />
          </div>
          <h1 className="font-display text-3xl font-extrabold text-[#1F2421] sm:text-5xl">
            PFP Frame Generator
          </h1>
          <p className="text-xs sm:text-sm font-mono-code text-[#0F4C5C] font-semibold">
            Upload your photo, align frame art, and download your high-res 1000x1000 PFP.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Canvas Live Preview Column */}
          <div className="lg:col-span-7 flex flex-col items-center space-y-4">
            <div className="relative w-full max-w-[520px] aspect-square rounded-3xl p-3 goa-panel overflow-hidden">
              <canvas
                ref={canvasRef}
                className="w-full h-full rounded-2xl object-contain bg-[#fff8ee]"
              />

              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/85 backdrop-blur-sm rounded-2xl text-[#D9532F]">
                  <RefreshCw className="h-8 w-8 animate-spin" />
                </div>
              )}
            </div>

            {/* Quick Canvas Controls */}
            {imageObj && (
              <div className="w-full max-w-[520px] goa-card p-4 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono-code text-[#1F2421]">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Move className="h-4 w-4 text-[#D9532F]" /> Pan & Zoom Photo
                  </span>
                  <button
                    onClick={() => { setPanX(0); setPanY(0); setZoom(1); }}
                    className="text-[11px] text-[#D9532F] hover:underline font-bold"
                  >
                    Reset Alignment
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs font-mono-code font-bold">
                  <div>
                    <label className="text-[#0F4C5C] block mb-1">Zoom ({zoom.toFixed(1)}x)</label>
                    <input
                      type="range"
                      min="0.5"
                      max="2.5"
                      step="0.05"
                      value={zoom}
                      onChange={(e) => setZoom(parseFloat(e.target.value))}
                      className="w-full accent-[#A63A2B]"
                    />
                  </div>

                  <div>
                    <label className="text-[#2B4C7E] block mb-1">Horizontal Pan ({panX}%)</label>
                    <input
                      type="range"
                      min="-50"
                      max="50"
                      value={panX}
                      onChange={(e) => setPanX(parseInt(e.target.value))}
                      className="w-full accent-[#A63A2B]"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="text-[#2B4C7E] block mb-1">Vertical Pan ({panY}%)</label>
                    <input
                      type="range"
                      min="-50"
                      max="50"
                      value={panY}
                      onChange={(e) => setPanY(parseInt(e.target.value))}
                      className="w-full accent-[#A63A2B]"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Settings & Actions Form */}
          <div className="lg:col-span-5 space-y-6 goa-panel p-6">
            
            {/* 1. Upload Button */}
            <div className="space-y-2">
              <label className="block text-xs font-mono-code font-bold uppercase text-[#A63A2B]">
                Step 1: Upload Photo
              </label>

              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full flex items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-[#A63A2B]/40 bg-white p-5 text-sm font-mono-code font-bold text-[#1F2421] transition-all hover:bg-[#FAF4E8] hover:border-[#A63A2B] shadow-xs"
              >
                <Upload className="h-5 w-5 text-[#A63A2B]" />
                <span>{imageObj ? "Change Uploaded Photo" : "Upload Photo (JPG, PNG, HEIC)"}</span>
              </button>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*,.heic,.heif"
                className="hidden"
              />
              <p className="text-[11px] font-mono-code text-[#2B4C7E] text-center font-semibold">
                Supports Photo Library, camera capture & automatic HEIC conversion.
              </p>
            </div>

            {/* 2. Badge Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-mono-code font-bold uppercase text-[#A63A2B]">
                Step 2: Badge Overlay Text
              </label>

              <div className="flex flex-wrap gap-2 text-xs font-mono-code font-bold">
                {["BUILDER", "HACKER", "CREATOR", "DEV", "VIP", ""].map((b) => (
                  <button
                    key={b || "none"}
                    onClick={() => setBadgeText(b)}
                    className={`rounded-lg px-3 py-1.5 border transition-all ${
                      badgeText === b
                        ? "bg-[#A63A2B] text-white border-[#A63A2B] shadow-xs"
                        : "bg-white text-[#1F2421] border-[#A63A2B]/20 hover:border-[#A63A2B]"
                    }`}
                  >
                    {b ? b : "No Badge"}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Action Buttons */}
            <div className="pt-4 border-t border-[#A63A2B]/20 space-y-3">
              <button
                onClick={handleDownload}
                className="goa-btn-primary w-full text-sm py-3.5"
              >
                <Download className="h-4 w-4" />
                <span>DOWNLOAD HIGH-RES PNG</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button onClick={handleShareX} className="goa-btn-secondary w-full">
                  <XIcon className="h-4 w-4" />
                  <span>SHARE ON X</span>
                </button>

                <button onClick={handleNativeShare} className="goa-btn-secondary w-full">
                  {copiedLink ? <Check className="h-4 w-4 text-[#D9532F]" /> : <Share2 className="h-4 w-4" />}
                  <span>{copiedLink ? "COPIED LINK!" : "SHARE LINK"}</span>
                </button>
              </div>

              {lastSavedId && (
                <div className="text-center pt-1">
                  <Link
                    href={`/builder/${lastSavedId}`}
                    className="text-xs font-mono-code text-[#D9532F] hover:underline font-bold"
                  >
                    View Public Profile Page →
                  </Link>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
