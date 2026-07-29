"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HoverRoll, { HoverRollIcon } from "./HoverRoll";

interface PageData {
  title: string;
  category: string;
  tool: string;
  description: string;
  accentColor: string;
  bgGradient: string;
  previewType: "print" | "vector" | "brand" | "poster" | "media";
  details: string[];
}

const PAGES: PageData[] = [
  {
    title: "Commercial Print Layouts",
    category: "PRINT & PUBLISHING",
    tool: "CorelDRAW X8 / 2024",
    description:
      "High-precision commercial print formatting, custom canvas setups, font corruption resolutions, and pre-press prep for large-scale printing.",
    accentColor: "#7c5cfc",
    bgGradient: "from-[#f4f1ea] to-[#e6e1d5]",
    previewType: "print",
    details: ["CMYK Color Profiling", "Vector Canvas Setup", "Pre-press Diagnostics"],
  },
  {
    title: "Vector Logo & Brand Identity",
    category: "BRANDING & ILLUSTRATION",
    tool: "CorelDRAW & Photoshop",
    description:
      "Custom vector logo illustrations, brand geometry, typography alignment, and scalable SVG/EPS asset generation for corporate identities.",
    accentColor: "#2563eb",
    bgGradient: "from-[#f1f5f9] to-[#e2e8f0]",
    previewType: "vector",
    details: ["Scalable Vector Tracing", "Grid-based Geometry", "Color Palette Rules"],
  },
  {
    title: "Marketing Flyers & Brochures",
    category: "PROMOTIONAL DESIGN",
    tool: "CorelDRAW Suite",
    description:
      "Multi-page brochure layouts, tri-fold flyers, promotional banners, and high-impact marketing materials engineered for maximum conversion.",
    accentColor: "#059669",
    bgGradient: "from-[#ecfdf5] to-[#d1fae5]",
    previewType: "poster",
    details: ["Tri-fold & Bi-fold Formats", "Typography Hierarchy", "Bleed & Margin Precision"],
  },
  {
    title: "Digital Media & Stream Branding",
    category: "YOUTUBE & SOCIAL ASSETS",
    tool: "Adobe Photoshop & Illustrator",
    description:
      "Streaming metadata asset configurations, title templates, video thumbnail templates, and specialized gaming channel overlays for XD INVOKER.",
    accentColor: "#dc2626",
    bgGradient: "from-[#fef2f2] to-[#fee2e2]",
    previewType: "media",
    details: ["Thumbnail Templates", "Stream Overlays", "Social Media Kits"],
  },
];

export default function FlipBook3D() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const totalPages = PAGES.length;

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setDirection("next");
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setDirection("prev");
      setCurrentPage((prev) => prev - 1);
    }
  };

  const page = PAGES[currentPage];

  return (
    <div className="w-full my-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-xs font-bold tracking-widest text-muted uppercase mb-2">
            3D FLIPBOOK SHOWCASE • COREL DRAW & GRAPHICS
          </p>
          <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-fg">
            Graphic Design Showcase
          </h3>
        </div>
        <p className="text-xs text-muted max-w-xs">
          Interactive 3D Flipbook displaying commercial print layouts, vector illustration, and promotional posters.
        </p>
      </div>

      {/* Main 3D Book Container Frame */}
      <div className="relative w-full rounded-[32px] bg-[#e4dfd3] border border-border p-4 sm:p-8 md:p-12 shadow-2xl overflow-hidden">
        {/* Book Viewport with 3D Perspective */}
        <div
          className="relative max-w-4xl mx-auto min-h-[420px] sm:min-h-[460px] rounded-2xl bg-white shadow-2xl border border-black/10 flex flex-col md:flex-row overflow-hidden"
          style={{ perspective: "1500px" }}
        >
          {/* LEFT PAGE (Static / Overview) */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 bg-[#fdfbf7] border-b md:border-b-0 md:border-r border-black/10 flex flex-col justify-between relative">
            {/* Center Spine Shadow Effect */}
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/10 to-transparent pointer-events-none z-10" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-fg/80 bg-black/5 px-3 py-1 rounded-full border border-black/10">
                  {page.category}
                </span>
                <span className="text-xs font-mono text-muted">
                  PAGE {currentPage + 1} OF {totalPages}
                </span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-bold text-fg leading-tight mb-3">
                {page.title}
              </h4>

              <div className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-md mb-4 border border-accent/20">
                Tool: {page.tool}
              </div>

              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                {page.description}
              </p>
            </div>

            {/* Key Features List */}
            <div className="pt-4 border-t border-black/10">
              <p className="text-[11px] font-bold tracking-wider text-fg uppercase mb-2">
                Technical Highlights:
              </p>
              <ul className="space-y-1.5 text-xs text-muted">
                {page.details.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT PAGE (Flipping 3D Graphic Poster Card) */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 bg-[#f8f6f0] flex flex-col justify-between relative overflow-hidden">
            {/* Spine Fold Shadow */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/10 to-transparent pointer-events-none z-10" />

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentPage}
                initial={{
                  rotateY: direction === "next" ? 90 : -90,
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  rotateY: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  rotateY: direction === "next" ? -90 : 90,
                  opacity: 0,
                  scale: 0.95,
                }}
                transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}
                className="w-full h-full flex flex-col justify-between"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Visual Graphic Representation Frame */}
                <div
                  className={`w-full h-56 sm:h-64 rounded-2xl bg-gradient-to-br ${page.bgGradient} border border-black/10 p-6 flex flex-col justify-between shadow-inner relative overflow-hidden group`}
                >
                  {/* Decorative Design Grid & Elements */}
                  <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

                  <div className="relative z-10 flex justify-between items-start">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-md"
                      style={{ backgroundColor: page.accentColor }}
                    >
                      CDR
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-fg/60 uppercase border border-black/10 bg-white/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
                      3D VECTOR ARTWORK
                    </span>
                  </div>

                  <div className="relative z-10 text-center my-auto py-4">
                    <h5
                      className="text-xl sm:text-2xl font-black uppercase tracking-tight"
                      style={{ color: page.accentColor }}
                    >
                      {page.title}
                    </h5>
                    <p className="text-xs text-fg/70 mt-1 font-mono">
                      // CorelDRAW Vector Format .CDR
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between pt-2 border-t border-black/10 text-[10px] font-mono text-muted">
                    <span>CMYK READY</span>
                    <span>300 DPI PRINT</span>
                  </div>
                </div>

                {/* Bottom Page Tag */}
                <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between text-xs text-muted">
                  <span>Design by Basharat Hussain</span>
                  <span className="font-semibold text-fg">Vector Proof Verified ✓</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Controls: Previous / Next & Counter */}
        <div className="flex items-center justify-between max-w-4xl mx-auto mt-6">
          {/* Previous Arrow Button */}
          <motion.button
            onClick={handlePrev}
            disabled={currentPage === 0}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#d8d3c5] hover:bg-[#ccc6b6] text-fg disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center shadow-md transition-colors cursor-pointer"
            aria-label="Previous Page"
          >
            <HoverRollIcon>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </HoverRollIcon>
          </motion.button>

          {/* Page Counter Pill */}
          <div className="bg-[#d8d3c5] border border-black/10 rounded-full px-5 py-2 text-xs font-mono font-bold tracking-wider text-fg shadow-inner">
            {currentPage + 1} / {totalPages} PAGES
          </div>

          {/* Next Arrow Button */}
          <motion.button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#d8d3c5] hover:bg-[#ccc6b6] text-fg disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center shadow-md transition-colors cursor-pointer"
            aria-label="Next Page"
          >
            <HoverRollIcon>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </HoverRollIcon>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
