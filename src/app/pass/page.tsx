"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { Upload, Download, Share2, RefreshCw, Move, Check, FileText, Shuffle, Sun } from "lucide-react";
import { XIcon } from "@/components/XIcon";
import confetti from "canvas-confetti";
import QRCode from "qrcode";
import jsPDF from "jspdf";
import { renderFormatB, RenderOptionsFormatB } from "@/lib/canvas-utils";
import { generateRandomTitle, getDefaultRoles } from "@/lib/title-generator";
import { savePassToVault } from "@/lib/storage";
import { encodePayload, getTwitterShareUrl, shareNative } from "@/lib/share-utils";
import { GoaBeachStamp } from "@/components/GoaMotifs";

export default function PassPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageObj, setImageObj] = useState<HTMLImageElement | null>(null);
  const [loading, setLoading] = useState(false);

  // Form Fields
  const [name, setName] = useState<string>("AYUSH GUPTA");
  const [role, setRole] = useState<string>("FULL-STACK ENGINEER");
  const [title, setTitle] = useState<string>(generateRandomTitle("FULL-STACK ENGINEER"));
  const [skin, setSkin] = useState<RenderOptionsFormatB["skin"]>("sunset");
  const [panX, setPanX] = useState<number>(0);
  const [panY, setPanY] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(1);
  
  const [qrCanvas, setQrCanvas] = useState<HTMLCanvasElement | undefined>(undefined);
  const [copiedLink, setCopiedLink] = useState(false);
  const [lastSavedId, setLastSavedId] = useState<string>("");

  // Shuffle Title
  const handleShuffleTitle = () => {
    setTitle(generateRandomTitle(role));
  };

  // Generate QR Code Canvas for profile URL
  const updateQRCode = useCallback(async (builderId: string) => {
    try {
      const origin = typeof window !== "undefined" ? window.location.origin : "https://frameingoa.com";
      const profileUrl = `${origin}/builder/${builderId}`;
      
      const qCanvas = document.createElement("canvas");
      await QRCode.toCanvas(qCanvas, profileUrl, {
        width: 130,
        margin: 1,
        color: {
          dark: "#D9532F",
          light: "#ffffff",
        },
      });
      setQrCanvas(qCanvas);
    } catch (e) {
      console.error("QR error:", e);
    }
  }, []);

  // Update QR Code on field changes
  useEffect(() => {
    const currentId = encodePayload({
      f: "B",
      n: name,
      r: role,
      t: title,
      s: skin,
    });
    updateQRCode(currentId);
  }, [name, role, title, skin, updateQRCode]);

  // Handle Photo Upload
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

  // Draw Canvas
  const drawCanvas = useCallback(() => {
    if (!canvasRef.current) return;
    renderFormatB(canvasRef.current, {
      image: imageObj || undefined,
      name,
      role,
      title,
      skin,
      qrCanvas,
      panX,
      panY,
      zoom,
    });
  }, [imageObj, name, role, title, skin, qrCanvas, panX, panY, zoom]);

  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  // Save current pass to local vault & get payload ID
  const saveCurrentPass = () => {
    if (!canvasRef.current) return "";
    const builderId = encodePayload({
      f: "B",
      n: name,
      r: role,
      t: title,
      s: skin,
    });

    const dataUrl = canvasRef.current.toDataURL("image/png");
    savePassToVault({
      id: builderId,
      format: "pass",
      name: name || "Builder Pass",
      role,
      title,
      skin,
      dataUrl,
    });
    setLastSavedId(builderId);
    return builderId;
  };

  // Download PNG
  const handleDownloadPNG = () => {
    if (!canvasRef.current) return;
    confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });

    canvasRef.current.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `HH_GOA_BUILDER_PASS_${(name || "BUILDER").replace(/\s+/g, "_")}.png`;
      a.click();
      URL.revokeObjectURL(url);
    }, "image/png");

    saveCurrentPass();
  };

  // Export PDF Pass
  const handleDownloadPDF = () => {
    if (!canvasRef.current) return;
    confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });

    const imgData = canvasRef.current.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: [200, 105],
    });

    pdf.addImage(imgData, "PNG", 0, 0, 200, 105);
    pdf.save(`HH_GOA_BUILDER_PASS_${(name || "BUILDER").replace(/\s+/g, "_")}.pdf`);

    saveCurrentPass();
  };

  // Share to X
  const handleShareX = () => {
    const builderId = lastSavedId || saveCurrentPass();
    const twitterUrl = getTwitterShareUrl(builderId, name);
    window.open(twitterUrl, "_blank");
  };

  // Native Share
  const handleNativeShare = async () => {
    const builderId = lastSavedId || saveCurrentPass();
    const shareUrl = `${window.location.origin}/builder/${builderId}`;

    if (canvasRef.current) {
      canvasRef.current.toBlob(async (blob) => {
        if (!blob) return;
        const file = new File([blob], "builder_pass.png", { type: "image/png" });
        const shared = await shareNative({
          title: "Hacker House Goa 2026 — Builder ID Pass",
          text: `My official Hacker House Goa 2026 Builder Pass (${name})! #FrameInGoa`,
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
    <div className="min-h-screen bg-[#FAF4E8] bg-mesh-goa bg-grain py-10 px-4 sm:px-6 lg:px-8 text-[#1F2421]">
      <div className="mx-auto max-w-6xl space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <GoaBeachStamp />
          </div>
          <h1 className="font-display text-3xl font-extrabold text-[#1F2421] sm:text-5xl">
            Builder ID Pass Generator
          </h1>
          <p className="text-xs sm:text-sm font-mono-code text-[#0F4C5C] font-semibold">
            Customize your official event credential with stack details, randomized title, QR code & PDF export.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Canvas Preview Column */}
          <div className="lg:col-span-7 flex flex-col items-center space-y-4">
            <div className="relative w-full aspect-[1200/630] rounded-3xl p-3 goa-panel overflow-hidden">
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

            {/* Quick Photo Pan/Zoom Controls */}
            {imageObj && (
              <div className="w-full goa-card p-4 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono-code text-[#1F2421]">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Move className="h-4 w-4 text-[#D9532F]" /> Pan & Zoom Badge Photo
                  </span>
                  <button
                    onClick={() => { setPanX(0); setPanY(0); setZoom(1); }}
                    className="text-[11px] text-[#D9532F] hover:underline font-bold"
                  >
                    Reset Alignment
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs font-mono-code font-bold">
                  <div>
                    <label className="text-[#0F4C5C] block mb-1">Zoom ({zoom.toFixed(1)}x)</label>
                    <input
                      type="range"
                      min="0.5"
                      max="2.5"
                      step="0.05"
                      value={zoom}
                      onChange={(e) => setZoom(parseFloat(e.target.value))}
                      className="w-full accent-[#D9532F]"
                    />
                  </div>

                  <div>
                    <label className="text-[#0F4C5C] block mb-1">Horiz. Pan ({panX}%)</label>
                    <input
                      type="range"
                      min="-50"
                      max="50"
                      value={panX}
                      onChange={(e) => setPanX(parseInt(e.target.value))}
                      className="w-full accent-[#D9532F]"
                    />
                  </div>

                  <div>
                    <label className="text-[#0F4C5C] block mb-1">Vert. Pan ({panY}%)</label>
                    <input
                      type="range"
                      min="-50"
                      max="50"
                      value={panY}
                      onChange={(e) => setPanY(parseInt(e.target.value))}
                      className="w-full accent-[#D9532F]"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Settings & Inputs Form */}
          <div className="lg:col-span-5 space-y-5 goa-panel p-6">
            
            {/* 1. Upload Button */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono-code font-bold uppercase text-[#D9532F]">
                Step 1: Badge Photo
              </label>

              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-dashed border-[#D9532F]/40 bg-white p-3.5 text-xs font-mono-code font-bold text-[#1F2421] transition-all hover:bg-[#FAF4E8] shadow-xs"
              >
                <Upload className="h-4 w-4 text-[#D9532F]" />
                <span>{imageObj ? "Change Photo" : "Upload Badge Photo"}</span>
              </button>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*,.heic,.heif"
                className="hidden"
              />
            </div>

            {/* 2. Name & Role */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-mono-code font-bold uppercase text-[#D9532F] mb-1">
                  Step 2: Builder Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value.toUpperCase())}
                  placeholder="Enter your name"
                  maxLength={24}
                  className="w-full rounded-xl border border-[#D9532F]/30 bg-white px-3.5 py-2.5 text-sm font-bold text-[#1F2421] focus:border-[#D9532F] focus:outline-none shadow-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code font-bold uppercase text-[#D9532F] mb-1">
                  Stack / Primary Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full rounded-xl border border-[#D9532F]/30 bg-white px-3.5 py-2.5 text-xs font-mono-code font-bold text-[#1F2421] focus:border-[#D9532F] focus:outline-none shadow-xs"
                >
                  {getDefaultRoles().map((r) => (
                    <option key={r} value={r.toUpperCase()}>
                      {r.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 3. Fun Title Generator */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-mono-code font-bold uppercase text-[#D9532F]">
                  Step 3: Fun Builder Title
                </label>

                <button
                  type="button"
                  onClick={handleShuffleTitle}
                  className="flex items-center gap-1 text-[11px] font-mono-code text-[#D9532F] hover:underline font-bold"
                >
                  <Shuffle className="h-3 w-3" />
                  <span>SHUFFLE TITLE</span>
                </button>
              </div>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Goa Sunset Coder"
                maxLength={30}
                className="w-full rounded-xl border border-[#D9532F]/30 bg-white px-3.5 py-2.5 text-xs font-bold text-[#D9532F] focus:border-[#D9532F] focus:outline-none shadow-xs"
              />
            </div>

            {/* 4. Action Buttons */}
            <div className="pt-4 border-t border-[#D9532F]/20 space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <button onClick={handleDownloadPNG} className="goa-btn-primary w-full">
                  <Download className="h-4 w-4" />
                  <span>EXPORT PNG</span>
                </button>

                <button onClick={handleDownloadPDF} className="goa-btn-secondary w-full">
                  <FileText className="h-4 w-4" />
                  <span>EXPORT PDF</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button onClick={handleShareX} className="goa-btn-secondary w-full">
                  <XIcon className="h-4 w-4" />
                  <span>SHARE ON X</span>
                </button>

                <button onClick={handleNativeShare} className="goa-btn-secondary w-full">
                  {copiedLink ? <Check className="h-4 w-4 text-[#D9532F]" /> : <Share2 className="h-4 w-4" />}
                  <span>{copiedLink ? "COPIED!" : "SHARE LINK"}</span>
                </button>
              </div>

              {lastSavedId && (
                <div className="text-center pt-1">
                  <Link
                    href={`/builder/${lastSavedId}`}
                    className="text-xs font-mono-code text-[#D9532F] hover:underline font-bold"
                  >
                    View Public Pass Page →
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
