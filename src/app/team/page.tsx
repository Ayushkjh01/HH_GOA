"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { Upload, Download, Share2, Plus, Trash2, Users, Sun } from "lucide-react";
import { XIcon } from "@/components/XIcon";
import confetti from "canvas-confetti";
import { renderFormatC } from "@/lib/canvas-utils";
import { savePassToVault } from "@/lib/storage";
import { encodePayload, getTwitterShareUrl, shareNative } from "@/lib/share-utils";
import { GoaBeachStamp } from "@/components/GoaMotifs";

interface LocalMember {
  id: string;
  name: string;
  role: string;
  imageObj?: HTMLImageElement;
}

export default function TeamPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [teamName, setTeamName] = useState<string>("");
  const [members, setMembers] = useState<LocalMember[]>([
    { id: "1", name: "", role: "FULL-STACK DEV" },
    { id: "2", name: "", role: "SMART CONTRACT DEV" },
    { id: "3", name: "", role: "AI RESEARCHER" },
  ]);
  const [copiedLink, setCopiedLink] = useState(false);
  const [lastSavedId, setLastSavedId] = useState<string>("");

  // Pre-load default sample teammate photos
  useEffect(() => {
    const img1 = new Image();
    img1.src = "/sample_builder.jpg";
    img1.onload = () => {
      setMembers((prev) =>
        prev.map((m, idx) => (idx === 0 ? { ...m, imageObj: img1 } : m))
      );
    };

    const img2 = new Image();
    img2.src = "/sample_builder_2.jpg";
    img2.onload = () => {
      setMembers((prev) =>
        prev.map((m, idx) => (idx === 1 ? { ...m, imageObj: img2 } : m))
      );
    };
  }, []);

  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const handleMemberFile = async (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

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
          setMembers((prev) =>
            prev.map((m) => (m.id === id ? { ...m, imageObj: img } : m))
          );
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(imageBlob);
    } catch (err) {
      console.error("Member image upload error:", err);
    }
  };

  const handleAddMember = () => {
    if (members.length >= 3) return;
    setMembers((prev) => [
      ...prev,
      { id: String(Date.now()), name: `BUILDER ${prev.length + 1}`, role: "BUILDER" },
    ]);
  };

  const handleRemoveMember = (id: string) => {
    if (members.length <= 2) return;
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const handleUpdateMember = (id: string, field: "name" | "role", value: string) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, [field]: value.toUpperCase() } : m))
    );
  };

  const drawCanvas = useCallback(() => {
    if (!canvasRef.current) return;
    renderFormatC(canvasRef.current, {
      teamName,
      members: members.map((m) => ({
        image: m.imageObj,
        name: m.name,
        role: m.role,
      })),
      skin: "sunset",
    });
  }, [teamName, members]);

  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  const saveCurrentPass = () => {
    if (!canvasRef.current) return "";
    const builderId = encodePayload({
      f: "C",
      n: teamName,
      tn: teamName,
      r: `${members.length} MEMBERS`,
    });

    const dataUrl = canvasRef.current.toDataURL("image/png");
    savePassToVault({
      id: builderId,
      format: "team",
      name: teamName || "Team Pass",
      role: `${members.length} Members`,
      dataUrl,
    });
    setLastSavedId(builderId);
    return builderId;
  };

  const handleDownload = () => {
    if (!canvasRef.current) return;
    confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });

    canvasRef.current.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `HH_GOA_TEAM_${(teamName || "PASS").replace(/\s+/g, "_")}.png`;
      a.click();
      URL.revokeObjectURL(url);
    }, "image/png");

    saveCurrentPass();
  };

  const handleShareX = () => {
    const builderId = lastSavedId || saveCurrentPass();
    const twitterUrl = getTwitterShareUrl(builderId, teamName);
    window.open(twitterUrl, "_blank");
  };

  const handleNativeShare = async () => {
    const builderId = lastSavedId || saveCurrentPass();
    const shareUrl = `${window.location.origin}/builder/${builderId}`;

    if (canvasRef.current) {
      canvasRef.current.toBlob(async (blob) => {
        if (!blob) return;
        const file = new File([blob], "team_pass.png", { type: "image/png" });
        const shared = await shareNative({
          title: `Hacker House Goa 2026 — ${teamName}`,
          text: `Check out our official team delegation pass for Hacker House Goa 2026! #FrameInGoa`,
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
            Teammate Combined Frame
          </h1>
          <p className="text-xs sm:text-sm font-mono-code text-[#0F4C5C] font-semibold">
            Combine 2 or 3 teammates into one unified Hacker House Goa 2026 graphic.
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
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-5 space-y-5 goa-panel p-6">
            
            {/* Team Name */}
            <div>
              <label className="block text-xs font-mono-code font-bold uppercase text-[#D9532F] mb-1">
                Team Name
              </label>
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value.toUpperCase())}
                placeholder="e.g. TEAM HACKWAVE"
                maxLength={24}
                className="w-full rounded-xl border border-[#D9532F]/30 bg-white px-3.5 py-2.5 text-sm font-bold text-[#1F2421] focus:border-[#D9532F] focus:outline-none shadow-xs"
              />
            </div>

            {/* Teammates List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-mono-code font-bold uppercase text-[#1F2421]">
                  Teammates ({members.length} / 3)
                </label>

                {members.length < 3 && (
                  <button
                    onClick={handleAddMember}
                    className="flex items-center gap-1 text-[11px] font-mono-code text-[#A63A2B] hover:underline font-bold"
                  >
                    <Plus className="h-3 w-3" />
                    <span>ADD MEMBER</span>
                  </button>
                )}
              </div>

              {members.map((m, idx) => (
                <div key={m.id} className="goa-card p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono-code font-bold text-[#A63A2B]">
                      MEMBER #{idx + 1}
                    </span>

                    {members.length > 2 && (
                      <button
                        onClick={() => handleRemoveMember(m.id)}
                        className="text-red-500 hover:text-red-600 p-1"
                        title="Remove member"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={m.name}
                      onChange={(e) => handleUpdateMember(m.id, "name", e.target.value)}
                      placeholder="Name"
                      maxLength={18}
                      className="rounded-lg border border-[#A63A2B]/20 bg-[#FDFBF7] px-2.5 py-1.5 text-xs font-bold text-[#121B2D] focus:border-[#A63A2B] focus:outline-none"
                    />

                    <input
                      type="text"
                      value={m.role}
                      onChange={(e) => handleUpdateMember(m.id, "role", e.target.value)}
                      placeholder="Role / Title"
                      maxLength={18}
                      className="rounded-lg border border-[#A63A2B]/20 bg-[#FDFBF7] px-2.5 py-1.5 text-xs font-mono-code font-bold text-[#2B4C7E] focus:border-[#A63A2B] focus:outline-none"
                    />
                  </div>

                  <button
                    onClick={() => fileInputRefs.current[m.id]?.click()}
                    className="w-full flex items-center justify-center gap-1.5 rounded-lg border border-[#A63A2B]/30 bg-[#FDFBF7] py-1.5 text-[11px] font-mono-code font-bold text-[#A63A2B] hover:bg-[#A63A2B] hover:text-white transition-colors"
                  >
                    <Upload className="h-3 w-3" />
                    <span>{m.imageObj ? "Change Photo" : "Upload Photo"}</span>
                  </button>

                  <input
                    type="file"
                    ref={(el) => { fileInputRefs.current[m.id] = el; }}
                    onChange={(e) => handleMemberFile(m.id, e)}
                    accept="image/*,.heic,.heif"
                    className="hidden"
                  />
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#D9532F]/20 space-y-2.5">
              <button onClick={handleDownload} className="goa-btn-primary w-full">
                <Download className="h-4 w-4" />
                <span>EXPORT COMBINED PNG</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button onClick={handleShareX} className="goa-btn-secondary w-full">
                  <XIcon className="h-4 w-4" />
                  <span>SHARE ON X</span>
                </button>

                <button onClick={handleNativeShare} className="goa-btn-secondary w-full">
                  <Share2 className="h-4 w-4" />
                  <span>{copiedLink ? "COPIED!" : "SHARE LINK"}</span>
                </button>
              </div>

              {lastSavedId && (
                <div className="text-center pt-1">
                  <Link
                    href={`/builder/${lastSavedId}`}
                    className="text-xs font-mono-code text-[#D9532F] hover:underline font-bold"
                  >
                    View Public Team Pass Page →
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
