"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-background/90 backdrop-blur-md w-full top-0 sticky z-50 shadow-[0_10px_30px_-10px_rgba(155,63,37,0.08)]">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
        {/* Brand Logo */}
        <span className="font-noto-serif text-headline-md md:text-display-lg text-primary italic leading-none select-none">
          Roti Bahagia
        </span>

        {/* Desktop: WhatsApp CTA */}
        <a
          href="https://wa.me/6281234567890"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-be-vietnam-pro text-label-lg hover:bg-surface-tint transition-colors min-h-[48px]"
        >
          <Icon name="chat" className="w-5 h-5" />
          Pesan via WhatsApp
        </a>

        {/* Mobile: Hamburger Icon (SVG) */}
        <button
          className="md:hidden text-primary p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-outline-variant/30">
          <div className="px-margin-mobile py-6 space-y-4">
            <a
              href="https://wa.me/6281234567890"
              className="flex items-center gap-3 bg-primary text-on-primary px-6 py-4 rounded-full font-be-vietnam-pro text-label-lg w-full justify-center"
              onClick={() => setMenuOpen(false)}
            >
              <Icon name="chat" className="w-5 h-5" />
              Chat WhatsApp Sekarang
            </a>
            <a
              href="#menu"
              className="flex items-center gap-2 text-on-surface-variant font-be-vietnam-pro text-body-md justify-center py-2"
              onClick={() => setMenuOpen(false)}
            >
              Lihat Menu
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
