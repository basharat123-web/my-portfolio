"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HoverRoll from "./HoverRoll";
import { toggleSound, isSoundEnabled } from "@/utils/sound";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/work" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4"
    >
      {/* 1. DESKTOP NAVBAR: Full Horizontal Pill */}
      <div className="hidden md:flex items-center gap-1 rounded-full bg-fg text-bg pl-3 pr-2 py-2 shadow-2xl">
        <a
          href="/#top"
          className="flex items-center gap-2.5 text-sm font-bold whitespace-nowrap pr-4 hover:opacity-85 transition-opacity"
        >
          <img src="/logo.png" alt="BH Logo" className="w-7 h-7 rounded-full bg-white p-0.5 object-contain shadow-sm" />
          <span>Basharat Hussain</span>
        </a>

        <nav className="flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm hover:bg-bg/20 transition-colors whitespace-nowrap"
            >
              <HoverRoll>{link.label}</HoverRoll>
            </a>
          ))}
        </nav>

        {/* Sound Toggle Button */}
        <button
          onClick={handleSoundToggle}
          className="rounded-full px-3 py-2 text-xs font-mono bg-bg/20 hover:bg-bg/30 text-bg transition-colors flex items-center gap-1.5 cursor-pointer ml-1"
          title={soundOn ? "Mute Sound Effects" : "Enable Sound Effects"}
        >
          <span>{soundOn ? "🔊" : "🔇"}</span>
          <span className="text-[10px] uppercase font-bold">{soundOn ? "SOUND ON" : "MUTED"}</span>
        </button>

        <a
          href="/#contact"
          className="ml-2 rounded-full bg-bg text-fg px-5 py-2.5 text-sm font-medium hover:opacity-85 transition-opacity whitespace-nowrap"
        >
          <HoverRoll>Contact Me</HoverRoll>
        </a>
      </div>

      {/* 2. MOBILE NAVBAR: Sleek Compact Pill with Floating Dropdown Box */}
      <div className="md:hidden flex flex-col items-center w-full max-w-[340px]">
        {/* Main Floating Mobile Pill */}
        <div className="w-full flex items-center justify-between gap-3 rounded-full bg-fg text-bg px-4 py-2 shadow-2xl border border-white/10">
          <a
            href="/#top"
            className="flex items-center gap-2 text-sm font-bold tracking-tight whitespace-nowrap"
          >
            <img src="/logo.png" alt="BH Logo" className="w-6 h-6 rounded-full bg-white p-0.5 object-contain shadow-sm" />
            <span>Basharat Hussain</span>
          </a>

          {/* Toggle Button for Dropdown */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-8 h-8 rounded-full bg-bg/20 text-bg flex items-center justify-center hover:bg-bg/30 transition-colors cursor-pointer"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-1 items-center justify-center"
            >
              {isOpen ? (
                <span className="text-lg leading-none font-bold">&times;</span>
              ) : (
                <>
                  <span className="w-4 h-0.5 bg-bg rounded-full" />
                  <span className="w-4 h-0.5 bg-bg rounded-full" />
                </>
              )}
            </motion.div>
          </button>
        </div>

        {/* Compact Dropdown Box */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 6, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-full rounded-2xl bg-fg text-bg border border-white/10 p-2.5 shadow-2xl flex flex-col gap-1 overflow-hidden backdrop-blur-md"
            >
              {[...NAV_LINKS, { label: "Contact Me", href: "/#contact" }].map(
                (link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="w-full rounded-xl px-4 py-2.5 text-xs font-semibold hover:bg-bg/20 transition-colors flex items-center justify-between text-left"
                  >
                    <HoverRoll>{link.label}</HoverRoll>
                    <span className="text-muted/60 text-[10px]">→</span>
                  </a>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
