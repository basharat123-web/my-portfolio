"use client";

import { motion } from "framer-motion";
import HoverRoll from "./HoverRoll";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/work" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none"
    >
      {/* Same horizontal floating pill on both PC and Mobile */}
      <div className="pointer-events-auto flex items-center gap-1 sm:gap-2 rounded-full bg-fg text-bg pl-4 sm:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2 shadow-2xl max-w-[98vw] overflow-x-auto scrollbar-none">
        <a
          href="/#top"
          className="text-xs sm:text-sm font-bold whitespace-nowrap pr-2 sm:pr-4 shrink-0 hover:opacity-85 transition-opacity"
        >
          Basharat Hussain
        </a>

        <nav className="flex items-center gap-0.5 sm:gap-1 shrink-0">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm hover:bg-bg/20 transition-colors whitespace-nowrap"
            >
              <HoverRoll>{link.label}</HoverRoll>
            </a>
          ))}
        </nav>

        <a
          href="/#contact"
          className="ml-1 sm:ml-2 rounded-full bg-bg text-fg px-3 sm:px-5 py-1.5 sm:py-2.5 text-xs sm:text-sm font-medium hover:opacity-85 transition-opacity whitespace-nowrap shrink-0"
        >
          <HoverRoll>Contact Me</HoverRoll>
        </a>
      </div>
    </motion.header>
  );
}
