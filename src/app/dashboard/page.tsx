"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LayoutDashboard, Download, Share2, Trash2, Plus, Check, IdCard, Frame, Users, Sun } from "lucide-react";
import { getSavedPasses, deletePassFromVault, SavedPass } from "@/lib/storage";
import { GoaBeachStamp } from "@/components/GoaMotifs";

export default function DashboardPage() {
  const [passes, setPasses] = useState<SavedPass[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    setPasses(getSavedPasses());
  }, []);

  const handleDelete = (id: string) => {
    const updated = deletePassFromVault(id);
    setPasses(updated);
  };

  const handleCopyLink = (passId: string) => {
    const url = `${window.location.origin}/builder/${passId}`;
    navigator.clipboard.writeText(url);
    setCopiedId(passId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownloadImage = (dataUrl: string, name: string) => {
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `HH_GOA_${name.replace(/\s+/g, "_")}.png`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-[#FAF4E8] bg-mesh-goa bg-grain py-12 px-4 sm:px-6 lg:px-8 text-[#1F2421]">
      <div className="mx-auto max-w-6xl space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <GoaBeachStamp />
            <h1 className="font-display text-3xl font-extrabold text-[#1F2421] sm:text-4xl pt-1">
              My Saved Passes & Frames
            </h1>
            <p className="text-xs font-mono-code text-[#0F4C5C] font-semibold">
              Passes generated on this device are automatically saved locally for quick access.
            </p>
          </div>

          <Link href="/pass" className="goa-btn-primary">
            <Plus className="h-4 w-4" />
            <span>CREATE NEW PASS</span>
          </Link>
        </div>

        {/* Vault Grid */}
        {passes.length === 0 ? (
          <div className="goa-panel rounded-3xl p-12 text-center space-y-4 max-w-lg mx-auto">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D9532F]/15 text-[#D9532F] border border-[#D9532F]/30">
              <Sun className="h-8 w-8" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#1F2421]">Your Vault is Empty</h3>
            <p className="text-xs font-mono-code text-[#0F4C5C] font-semibold">
              You haven't generated any profile frames or builder cards yet. Create one now and it will appear here automatically!
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <Link href="/pass" className="goa-btn-primary">
                Builder Pass →
              </Link>
              <Link href="/frame" className="goa-btn-secondary">
                PFP Frame →
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {passes.map((p) => (
              <div key={p.id} className="goa-card p-4 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Card Preview Image */}
                  <div className="relative aspect-[1200/630] rounded-xl bg-[#fff8ee] overflow-hidden border border-[#D9532F]/30">
                    <img
                      src={p.dataUrl}
                      alt={p.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#D9532F]/15 px-2.5 py-0.5 text-[10px] font-mono-code font-bold text-[#D9532F] border border-[#D9532F]/30 uppercase">
                      {p.format === "frame" ? (
                        <>
                          <Frame className="h-3 w-3" /> PFP Frame
                        </>
                      ) : p.format === "pass" ? (
                        <>
                          <IdCard className="h-3 w-3" /> Builder ID
                        </>
                      ) : (
                        <>
                          <Users className="h-3 w-3" /> Team Pass
                        </>
                      )}
                    </span>

                    <span className="text-[10px] font-mono-code text-[#0F4C5C] font-bold">
                      {new Date(p.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-display text-base font-bold text-[#1F2421] uppercase">
                      {p.name}
                    </h4>
                    {p.role && (
                      <p className="text-xs font-mono-code text-[#D9532F] font-bold">
                        {p.role}
                      </p>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-[#D9532F]/15 flex items-center justify-between gap-2 text-xs font-mono-code font-bold">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDownloadImage(p.dataUrl, p.name)}
                      className="flex items-center gap-1 rounded-lg border border-[#D9532F]/30 bg-white px-2.5 py-1.5 text-[#D9532F] hover:bg-[#FAF4E8] shadow-xs"
                      title="Download image"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>PNG</span>
                    </button>

                    <button
                      onClick={() => handleCopyLink(p.id)}
                      className="flex items-center gap-1 rounded-lg border border-[#D9532F]/30 bg-white px-2.5 py-1.5 text-[#1F2421] hover:bg-[#FAF4E8] shadow-xs"
                      title="Copy public link"
                    >
                      {copiedId === p.id ? <Check className="h-3.5 w-3.5 text-[#D9532F]" /> : <Share2 className="h-3.5 w-3.5" />}
                      <span>{copiedId === p.id ? "COPIED" : "LINK"}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => handleDelete(p.id)}
                    className="p-1.5 text-red-500 hover:text-red-600 rounded-lg hover:bg-red-50"
                    title="Delete saved pass"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
