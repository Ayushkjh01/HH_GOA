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
    <header className="sticky top-0 z-50 w-full border-b border-[#1B2A4A]/15 bg-[#FDFBF7]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo & Wordmark */}
        <Link href="/" className="group flex items-center gap-3 transition-transform hover:scale-[1.02]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1B2A4A] text-white shadow-md shadow-[#1B2A4A]/25">
            <HHGoaLogomark className="h-6 w-6 text-white transition-transform duration-300 group-hover:rotate-12" />
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-[#121B2D] sm:text-xl">
              <span>HackerHouse</span>
              <span className="rounded-md bg-[#A63A2B] px-2 py-0.5 text-xs font-black text-white shadow-xs font-devanagari">
                गोवा
              </span>
            </div>
            <div className="hidden xs:flex items-center gap-2 text-[10px] font-mono-code tracking-widest text-[#2B4C7E] uppercase font-bold">
              <span>28–31 OCT 2026</span>
              <span className="text-[#A63A2B]">•</span>
              <span className="text-[#A63A2B]">2:47 PM Studio</span>
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
                    ? "bg-[#1B2A4A] text-white shadow-md shadow-[#1B2A4A]/25"
                    : "text-[#2B4C7E] hover:bg-[#1B2A4A]/10 hover:text-[#1B2A4A]"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-[#2B4C7E]"}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}

          <Link
            href="/pass"
            className="ml-3 goa-btn-primary text-xs py-2 px-4"
          >
            <span>GET PASSPORT</span>
            <span className="text-white">→</span>
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-xl p-2 text-[#1B2A4A] hover:bg-[#1B2A4A]/10 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-[#1B2A4A]/15 bg-[#FDFBF7] px-4 pt-2 pb-6 md:hidden space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-mono-code font-bold transition-colors ${
                  isActive
                    ? "bg-[#1B2A4A] text-white"
                    : "text-[#2B4C7E] hover:bg-[#1B2A4A]/10"
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? "text-white" : "text-[#2B4C7E]"}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}

          <div className="pt-2">
            <Link
              href="/pass"
              onClick={() => setMobileMenuOpen(false)}
              className="goa-btn-primary w-full text-center"
            >
              <HHGoaLogomark className="h-4 w-4 text-white" />
              <span>Create Passport Now</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
