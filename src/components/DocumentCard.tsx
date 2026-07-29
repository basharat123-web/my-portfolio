"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface DocumentCardProps {
  quote: string;
  name: string;
  role: string;
  date?: string;
  folderColor?: string;
  accentColor?: string;
  stickerUrl?: string;
}

export default function DocumentCard({
  quote,
  name,
  role,
  date = "2026",
  folderColor = "from-[#336cdc] to-[#2250ad]",
  accentColor = "bg-[#27458e]",
}: DocumentCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Determine active state for 3D folder flap & document sheet
  const activeState = isOpen ? "open" : isHovered ? "hover" : "rest";

  return (
    <div
      className="relative w-full h-[380px] sm:h-[400px] cursor-pointer select-none group"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* 1. BACK FOLDER BASE */}
      <div
        className={`absolute inset-0 rounded-[24px] ${accentColor} shadow-xl border border-white/10`}
      />

      {/* 2. INNER DOCUMENT / TESTIMONIAL PAPER CARD */}
      <motion.div
        className="absolute inset-[12px] bg-white text-gray-900 rounded-[20px] p-6 shadow-2xl flex flex-col justify-between overflow-hidden border border-gray-200/80 z-10"
        initial="rest"
        animate={activeState}
        variants={{
          rest: {
            rotate: 0,
            x: 0,
            y: 0,
            scale: 0.96,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
          },
          hover: {
            rotate: 6,
            x: 20,
            y: -15,
            scale: 1.02,
            boxShadow: "0px 20px 40px rgba(0,0,0,0.25)",
          },
          open: {
            rotate: -4,
            x: 40,
            y: -25,
            scale: 1.05,
            boxShadow: "0px 25px 50px rgba(0,0,0,0.35)",
            zIndex: 30,
          },
        }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
      >
        {/* Document Header */}
        <div>
          <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
              VERIFIED TESTIMONIAL
            </span>
            <span className="text-xs font-mono text-gray-400">{date}</span>
          </div>

          {/* Quote */}
          <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed italic">
            &ldquo;{quote}&rdquo;
          </p>
        </div>

        {/* Document Footer: Client Info & Stamp */}
        <div className="pt-4 border-t border-gray-100 flex items-end justify-between">
          <div>
            <h4 className="text-sm font-bold text-gray-900">{name}</h4>
            <p className="text-xs font-medium text-blue-600">{role}</p>
          </div>

          {/* Verified Stamp Badge */}
          <div className="w-10 h-10 rounded-full border-2 border-dashed border-blue-500/40 flex items-center justify-center text-[9px] font-mono font-bold text-blue-600 rotate-[-12deg] bg-blue-50/50">
            PASSED
          </div>
        </div>
      </motion.div>

      {/* 3. FRONT FOLDER COVER (3D HINGE FLAP) */}
      <motion.div
        className={`absolute inset-0 rounded-[24px] bg-gradient-to-br ${folderColor} p-6 text-white shadow-2xl flex flex-col justify-between border border-white/20 z-20 pointer-events-none`}
        style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
        initial="rest"
        animate={activeState}
        variants={{
          rest: { rotateY: 0 },
          hover: { rotateY: -45 },
          open: { rotateY: -115 },
        }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
      >
        {/* Cover Header */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-mono font-bold tracking-widest text-white/90 uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20">
              CONFIDENTIAL FILES
            </span>
            <div className="w-3 h-3 rounded-full bg-white/30 animate-pulse" />
          </div>

          <h3 className="text-xl font-bold tracking-tight text-white mb-1">
            Client Feedback
          </h3>
          <p className="text-xs text-white/70">
            Click to inspect detailed report
          </p>
        </div>

        {/* Cover Footer & Watermark Logo */}
        <div className="flex items-end justify-between pt-4 border-t border-white/15">
          <div className="text-[10px] text-white/60 uppercase tracking-widest font-mono">
            {isOpen ? "STATUS: OPENED" : isHovered ? "STATUS: UNLOCKED" : "STATUS: SEALED"}
          </div>

          {/* Folder Seal SVG */}
          <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
