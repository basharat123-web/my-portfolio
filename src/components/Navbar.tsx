"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HoverRoll from "./HoverRoll";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/work" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 inset-x-0 z-50 flex justify-center px-6"
    >
      {/* Desktop: full horizontal pill, links always visible */}
      <div className="hidden md:flex items-center gap-1 rounded-full bg-fg text-bg pl-6 pr-2 py-2 shadow-lg">
        <a href="#top" className="text-sm font-semibold whitespace-nowrap pr-6">
          Basharat Hussain
        </a>

        <nav className="flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm hover:bg-bg/20 transition-colors"
            >
              <HoverRoll>{link.label}</HoverRoll>
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="ml-2 rounded-full bg-bg text-fg px-5 py-2.5 text-sm font-medium hover:opacity-85 transition-opacity"
        >
          <HoverRoll>Contact Me</HoverRoll>
        </a>
      </div>

      {/* Mobile: compact pill that expands into a stacked menu */}
      <motion.div
        layout
        transition={{ layout: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
        className="md:hidden w-64 max-w-full rounded-[28px] bg-fg text-bg shadow-lg overflow-hidden"
      >
        <div className="flex items-center justify-between gap-3 pl-5 pr-2 py-2">
          <a href="#top" className="text-sm font-semibold whitespace-nowrap">
            Basharat Hussain
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-bg text-fg hover:opacity-80 transition-opacity"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute text-lg leading-none"
                >
                  &times;
                </motion.span>
              ) : (
                <motion.span
                  key="dots"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute text-lg leading-none"
                >
                  &#8942;
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, delay: open ? 0.15 : 0 }}
              className="flex flex-col gap-2 px-3 pb-3"
            >
              {[...NAV_LINKS, { label: "Contact", href: "#contact" }].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-full bg-bg text-fg text-sm font-medium px-4 py-2.5 text-center hover:opacity-80 transition-opacity"
                >
                  <HoverRoll>{link.label}</HoverRoll>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}
