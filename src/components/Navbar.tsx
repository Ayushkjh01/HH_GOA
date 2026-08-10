"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Frame, IdCard, Users, LayoutDashboard, Menu, X } from "lucide-react";
import { HHGoaLogomark } from "@/components/GoaMotifs";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "PFP Frame", path: "/frame", icon: Frame },
    { name: "Builder ID", path: "/pass", icon: IdCard },
    { name: "Team Frame", path: "/team", icon: Users },
    { name: "My Vault", path: "/dashboard", icon: LayoutDashboard },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#D9532F]/20 bg-[#FAF4E8]/95 backdrop-blur-xl shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        
        {/* Brand Logo & Wordmark */}
        <Link href="/" className="group flex items-center gap-3 transition-transform hover:scale-[1.02]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D9532F] text-white shadow-md shadow-[#D9532F]/25">
            <HHGoaLogomark className="h-6 w-6 text-white transition-transform duration-300 group-hover:rotate-12" />
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-[#1F2421] sm:text-xl">
              <span>HackerHouse</span>
              <span className="rounded-md bg-[#D9532F] px-2 py-0.5 text-xs font-black text-white shadow-xs font-devanagari">
                गोवा
              </span>
            </div>
            <div className="hidden xs:flex items-center gap-2 text-[10px] font-mono-code tracking-widest text-[#0F4C5C] uppercase font-bold">
              <span>28–31 OCT 2026</span>
              <span className="text-[#D9532F]">•</span>
              <span className="text-[#D9532F]">2:47 PM Studio</span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1.5 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-mono-code font-bold transition-all ${
                  isActive
                    ? "bg-[#D9532F] text-white shadow-md shadow-[#D9532F]/25"
                    : "text-[#0F4C5C] hover:bg-[#D9532F]/10 hover:text-[#D9532F]"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-[#0F4C5C]"}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/pass"
            className="goa-btn-primary"
          >
            <span>GET PASSPORT</span>
            <span>→</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D9532F]/30 bg-white text-[#1F2421] md:hidden shadow-xs"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5 text-[#D9532F]" /> : <Menu className="h-5 w-5 text-[#0F4C5C]" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#D9532F]/20 bg-[#FAF4E8]/98 p-4 backdrop-blur-2xl md:hidden shadow-xl">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-mono-code font-bold transition-all ${
                    isActive
                      ? "bg-[#D9532F] text-white shadow-md"
                      : "text-[#0F4C5C] hover:bg-[#D9532F]/10"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            <div className="mt-3 border-t border-[#D9532F]/20 pt-3">
              <Link
                href="/frame"
                onClick={() => setMobileMenuOpen(false)}
                className="goa-btn-primary w-full text-center"
              >
                <HHGoaLogomark className="h-4 w-4 text-white" />
                <span>Create Frame Now</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
