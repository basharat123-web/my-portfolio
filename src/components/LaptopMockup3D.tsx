"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LaptopMockup3DProps {
  url?: string;
  title?: string;
  fallbackImage?: string;
}

export default function LaptopMockup3D({
  url = "https://yarannalbaharan.com",
  title = "Yarana Nal Baharan Pigeon Club",
  fallbackImage = "/projects/yarana/screenshot-1.jpg",
}: LaptopMockup3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Mouse 3D Tilt Motion Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth Spring Physics
  const mouseX = useSpring(x, { stiffness: 240, damping: 24 });
  const mouseY = useSpring(y, { stiffness: 240, damping: 24 });

  // 3D Rotations
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-16, 16]);
  const sheenOpacity = useTransform(mouseY, [-0.5, 0.5], [0.08, 0.3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isFullscreen) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseXPos = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(mouseXPos);
    y.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-4xl mx-auto py-6 sm:py-10 px-2 select-none"
      style={{ perspective: "1200px" }}
    >
      {/* Action Header Controls */}
      <div className="flex items-center justify-between gap-3 mb-6 px-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider text-accent uppercase bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
            3D LAPTOP INTERACTIVE SHOWCASE
          </span>
        </div>

        <div className="flex items-center gap-2">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold tracking-wider uppercase bg-accent text-black hover:opacity-90 px-3.5 py-1.5 rounded-full shadow-sm transition-all inline-flex items-center gap-1"
            >
              <span>🌐 Open Live Site</span> ↗
            </a>
          )}
          <button
            onClick={() => setIsFullscreen(true)}
            className="text-xs font-mono font-bold tracking-wider uppercase bg-bg-soft hover:bg-fg hover:text-bg text-fg px-3.5 py-1.5 rounded-full border border-border transition-all shadow-sm cursor-pointer"
          >
            🔍 Fullscreen
          </button>
        </div>
      </div>

      {/* 3D Laptop Container (100% Transparent Background - Zero Outer Boxes!) */}
      <motion.div
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="relative w-full flex flex-col items-center justify-center bg-transparent"
      >
        {/* 1. MACBOOK PRO SCREEN FRAME */}
        <div
          className="relative w-full aspect-[16/10] rounded-[22px] sm:rounded-[30px] bg-[#0c0c0e] p-[10px] sm:p-[14px] shadow-2xl border-[3px] border-[#2d2d32] ring-1 ring-white/10 flex flex-col justify-between"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Glass Sheen Glare Overlay */}
          <motion.div
            style={{ opacity: sheenOpacity }}
            className="absolute inset-0 z-30 pointer-events-none rounded-[20px] sm:rounded-[28px] bg-gradient-to-tr from-transparent via-white/10 to-white/30"
          />

          {/* Top Webcam Notch */}
          <div className="absolute top-[4px] left-1/2 -translate-x-1/2 z-40 flex items-center justify-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#111] border border-white/20 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#001133]" />
            </div>
            <div className="w-1 h-1 rounded-full bg-emerald-400/90 animate-pulse" />
          </div>

          {/* Screen Display Viewport (Renders High-Res Project Screenshot Crisp & Clear!) */}
          <div className="relative w-full flex-1 rounded-[14px] sm:rounded-[20px] bg-black overflow-hidden flex flex-col border border-white/10 shadow-inner">
            {/* Browser Header Bar */}
            <div className="h-7 sm:h-8 bg-[#141416] border-b border-white/10 px-3 flex items-center justify-between text-white/70 text-[10px] sm:text-[11px] font-mono z-20 shrink-0">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>

              {/* URL Address Bar */}
              <div className="flex-1 max-w-xs sm:max-w-md mx-2 sm:mx-3 bg-[#09090b] rounded-md px-3 py-0.5 sm:py-1 flex items-center gap-2 border border-white/10 overflow-hidden text-[10px]">
                <span className="text-emerald-400">🔒</span>
                <span className="truncate text-white/90 font-mono">{url}</span>
              </div>

              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1 text-[10px] uppercase font-bold text-emerald-400"
                >
                  <span>LIVE</span> ↗
                </a>
              )}
            </div>

            {/* High-Res Live Project Screenshot Display */}
            <div
              className="relative flex-1 w-full h-full bg-[#08080a] overflow-hidden cursor-pointer group"
              onClick={() => setIsFullscreen(true)}
            >
              <Image
                src={fallbackImage}
                alt={title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono font-bold">
                🔍 Click to Expand Fullscreen
              </div>
              <div className="absolute bottom-3 right-3 z-20 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] font-mono text-white/90 shadow-xl pointer-events-none">
                🖱️ Move Mouse for 3D Tilt
              </div>
            </div>
          </div>

          {/* Bottom Bezel with Centered "MacBook Pro" Text */}
          <div className="w-full pt-1 sm:pt-1.5 pb-0.5 flex items-center justify-center z-20">
            <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-white/40 font-sans">
              MacBook Pro
            </span>
          </div>
        </div>

        {/* 2. METALLIC HINGE & THUMB NOTCH */}
        <div className="w-[32%] h-[7px] bg-gradient-to-b from-[#18181b] via-[#27272a] to-[#09090b] rounded-b-md shadow-md z-10 border-t border-white/20" />

        {/* 3. MACBOOK BASE DECK (SPACE GRAY METALLIC LIP) */}
        <div
          className="relative w-[104%] h-[26px] sm:h-[32px] rounded-b-[22px] sm:rounded-b-[30px] bg-gradient-to-b from-[#2e2e33] via-[#1c1c1f] to-[#0a0a0c] shadow-2xl border-t border-white/25 flex flex-col items-center justify-between px-6 pb-1"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Thumb Notch */}
          <div className="w-[16%] h-[5px] bg-[#0a0a0c] rounded-b-md border-x border-b border-white/15" />

          {/* Aluminum Chamfer Edge */}
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>

        {/* Floor Shadow */}
        <div className="w-[92%] h-[32px] bg-black/70 blur-2xl rounded-full -mt-3 pointer-events-none" />
      </motion.div>

      {/* Lightbox Expand Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullscreen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full aspect-16/10 rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={fallbackImage}
                alt="Expanded Laptop View"
                fill
                sizes="100vw"
                className="object-contain"
              />
              <button
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border border-white/20 hover:bg-white hover:text-black transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
