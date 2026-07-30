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

  const activeState = isOpen ? "open" : isHovered ? "hover" : "rest";

  return (
    <div
      className="relative w-full max-w-[320px] sm:max-w-none mx-auto h-[280px] sm:h-[360px] cursor-pointer select-none group"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* 1. BACK FOLDER BASE */}
      <div
        className={`absolute inset-0 rounded-[20px] sm:rounded-[24px] ${accentColor} shadow-lg border border-white/10`}
      />

      {/* 2. INNER DOCUMENT / TESTIMONIAL PAPER CARD */}
      <motion.div
        className="absolute inset-[8px] sm:inset-[12px] bg-white text-gray-900 rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 shadow-xl flex flex-col justify-between overflow-hidden border border-gray-200/80 z-10"
        initial="rest"
        animate={activeState}
        variants={{
          rest: {
            rotate: 0,
            x: 0,
            y: 0,
            scale: 0.96,
            boxShadow: "0px 6px 14px rgba(0,0,0,0.08)",
          },
          hover: {
            rotate: 4,
            x: 12,
            y: -10,
            scale: 1.01,
            boxShadow: "0px 14px 28px rgba(0,0,0,0.2)",
          },
          open: {
            rotate: -3,
            x: 24,
            y: -16,
            scale: 1.03,
            boxShadow: "0px 20px 40px rgba(0,0,0,0.3)",
            zIndex: 30,
          },
        }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
      >
        {/* Document Header */}
        <div>
          <div className="flex items-center justify-between border-b border-gray-200 pb-2 sm:pb-3 mb-3 sm:mb-4">
            <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-2 py-0.5 sm:py-1 rounded-md border border-blue-100">
              VERIFIED TESTIMONIAL
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-gray-400">{date}</span>
          </div>

          {/* Quote */}
          <p className="text-gray-800 text-xs sm:text-base font-medium leading-relaxed italic line-clamp-4 sm:line-clamp-none">
            &ldquo;{quote}&rdquo;
          </p>
        </div>

        {/* Document Footer: Client Info & Stamp */}
        <div className="pt-3 border-t border-gray-100 flex items-end justify-between">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-gray-900">{name}</h4>
            <p className="text-[10px] sm:text-xs font-medium text-blue-600">{role}</p>
          </div>

          {/* Verified Stamp Badge */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-dashed border-blue-500/40 flex items-center justify-center text-[8px] sm:text-[9px] font-mono font-bold text-blue-600 rotate-[-12deg] bg-blue-50/50">
            PASSED
          </div>
        </div>
      </motion.div>

      {/* 3. FRONT FOLDER COVER (REALISTIC TWO-SIDED 3D HINGE FLAP) */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
        initial="rest"
        animate={activeState}
        variants={{
          rest: { rotateY: 0 },
          hover: { rotateY: -35 },
          open: { rotateY: -110 },
        }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
      >
        {/* FRONT FACE (Visible when folder is closed) */}
        <div
          className={`absolute inset-0 rounded-[20px] sm:rounded-[24px] bg-gradient-to-br ${folderColor} p-4 sm:p-6 text-white shadow-xl flex flex-col justify-between border border-white/20`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Cover Header */}
          <div>
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="text-[9px] sm:text-[11px] font-mono font-bold tracking-wider text-white/90 uppercase bg-white/10 px-2.5 py-0.5 sm:py-1 rounded-full border border-white/20">
                CONFIDENTIAL FILES
              </span>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/30 animate-pulse" />
            </div>

            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-1">
              Client Feedback
            </h3>
            <p className="text-[10px] sm:text-xs text-white/70">
              Click to inspect detailed report
            </p>
          </div>

          {/* Cover Footer */}
          <div className="flex items-end justify-between pt-3 border-t border-white/15">
            <div className="text-[9px] sm:text-[10px] text-white/60 uppercase tracking-wider font-mono">
              {isOpen ? "STATUS: OPENED" : isHovered ? "STATUS: UNLOCKED" : "STATUS: SEALED"}
            </div>

            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* BACK FACE (Inside Flap Surface) */}
        <div
          className={`absolute inset-0 rounded-[20px] sm:rounded-[24px] bg-gradient-to-br ${folderColor} p-4 sm:p-6 text-white shadow-xl flex flex-col justify-between border border-white/20`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="flex items-center justify-between border-b border-white/15 pb-2 sm:pb-3">
            <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider text-white/70 uppercase">
              INSIDE COVER
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-white/50">OFFICIAL REPORT</span>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-2 text-center">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl border border-white/20 bg-white/10 flex items-center justify-center mb-2 shadow-inner">
              <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white/80 fill-current" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
            </div>
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-white/90 uppercase">
              VERIFIED CLIENT DOSSIER
            </span>
          </div>

          <div className="text-[8px] sm:text-[9px] font-mono text-white/50 text-center uppercase tracking-wider border-t border-white/15 pt-2">
            BASHARAT HUSSAIN • FULL-STACK PORTFOLIO
          </div>
        </div>
      </motion.div>
    </div>
  );
}
