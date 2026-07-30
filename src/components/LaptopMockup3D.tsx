"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface LaptopMockup3DProps {
  url?: string;
  title?: string;
  fallbackImage?: string;
}

export default function LaptopMockup3D({
  url = "https://yarannalbaharan.com",
  title = "Yarana Nal Baharan Pigeon Club",
  fallbackImage = "/projects/yarana.jpg",
}: LaptopMockup3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  // Mouse 3D Tilt Motion Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth Spring Physics
  const mouseX = useSpring(x, { stiffness: 220, damping: 22 });
  const mouseY = useSpring(y, { stiffness: 220, damping: 22 });

  // 3D Rotations
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [14, -14]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-18, 18]);
  const sheenOpacity = useTransform(mouseY, [-0.5, 0.5], [0.15, 0.35]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isInteractive) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseXPos = (e.clientX - rect.left) / width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / height - 0.5;

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
      className="relative w-full max-w-4xl mx-auto py-10 sm:py-14 px-2 select-none"
      style={{ perspective: "1200px" }}
    >
      {/* Interactive Mode Badge */}
      <div className="flex items-center justify-between gap-3 mb-6 px-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider text-accent uppercase bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
            3D INTERACTIVE LIVE PREVIEW
          </span>
        </div>

        <button
          onClick={() => setIsInteractive(!isInteractive)}
          className="text-xs font-mono font-bold tracking-wider uppercase bg-bg-soft hover:bg-fg hover:text-bg text-fg px-3.5 py-1.5 rounded-full border border-border transition-all shadow-sm cursor-pointer"
        >
          {isInteractive ? "🔒 Lock 3D Tilt" : "🎮 Enable Touch / Mouse Scroll"}
        </button>
      </div>

      {/* 3D Laptop Container */}
      <motion.div
        style={{
          rotateX: isInteractive ? 0 : rotateX,
          rotateY: isInteractive ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="relative w-full flex flex-col items-center justify-center"
      >
        {/* 1. LAPTOP SCREEN LID (TOP DISPLAY) */}
        <div
          className="relative w-full aspect-[16/10] rounded-[24px] sm:rounded-[32px] bg-[#1a1a1c] p-[10px] sm:p-[14px] shadow-2xl border border-white/20"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Glass Sheen Glare Overlay */}
          <motion.div
            style={{ opacity: sheenOpacity }}
            className="absolute inset-0 z-30 pointer-events-none rounded-[24px] sm:rounded-[32px] bg-gradient-to-tr from-transparent via-white/10 to-white/30"
          />

          {/* Webcam & Notch */}
          <div className="absolute top-[5px] left-1/2 -translate-x-1/2 z-40 flex items-center justify-center gap-1.5 bg-[#0a0a0c] px-3 py-0.5 rounded-b-md border-b border-white/10">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1e293b]" />
            <div className="w-1 h-1 rounded-full bg-emerald-500/80 animate-pulse" />
          </div>

          {/* Screen Inner Display Frame */}
          <div className="relative w-full h-full rounded-[16px] sm:rounded-[22px] bg-black overflow-hidden flex flex-col border border-white/10 shadow-inner">
            {/* Browser Header Bar */}
            <div className="h-8 sm:h-9 bg-[#18181b] border-b border-white/10 px-3 flex items-center justify-between text-white/70 text-[11px] font-mono z-20 shrink-0">
              {/* Traffic Light Window Buttons */}
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>

              {/* URL Address Bar */}
              <div className="flex-1 max-w-sm sm:max-w-md mx-3 bg-[#09090b] rounded-md px-3 py-1 flex items-center gap-2 border border-white/10 overflow-hidden text-[10px] sm:text-xs">
                <span className="text-emerald-400">🔒</span>
                <span className="truncate text-white/90 font-mono">{url}</span>
              </div>

              {/* External Link Button */}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 text-[10px] uppercase tracking-wider"
              >
                <span>Live</span> ↗
              </a>
            </div>

            {/* Live Website iframe & Fallback Screenshot Display */}
            <div className="relative flex-1 w-full h-full bg-[#0d0d0e] overflow-hidden">
              {url ? (
                <iframe
                  src={url}
                  title={title}
                  onLoad={() => setIframeLoaded(true)}
                  className={`w-full h-full border-0 transition-opacity duration-500 ${
                    isInteractive ? "pointer-events-auto" : "pointer-events-none"
                  }`}
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              ) : null}

              {/* Fallback Screenshot if iframe is loading or blocked */}
              {(!iframeLoaded || !url) && (
                <div className="absolute inset-0 z-10 w-full h-full bg-black">
                  <Image
                    src={fallbackImage}
                    alt={title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1000px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              )}

              {/* Hint Overlay when non-interactive */}
              {!isInteractive && (
                <div className="absolute bottom-3 right-3 z-20 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] font-mono text-white/90 shadow-lg pointer-events-none">
                  🖱️ Move Mouse to Tilt 3D
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 2. LAPTOP HINGE */}
        <div className="w-[35%] h-[8px] bg-gradient-to-b from-[#111113] to-[#27272a] rounded-b-md shadow-md z-10 border-t border-white/10" />

        {/* 3. LAPTOP BASE (KEYBOARD CHASSIS) */}
        <div
          className="relative w-[105%] h-[24px] sm:h-[30px] rounded-b-[20px] sm:rounded-b-[28px] bg-gradient-to-b from-[#27272a] via-[#18181b] to-[#09090b] shadow-2xl border-t border-white/20 flex flex-col items-center justify-between px-6 pb-1"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Thumb Notch Opening */}
          <div className="w-[18%] h-[5px] bg-[#09090b] rounded-b-md border-x border-b border-white/10" />

          {/* Bottom Aluminum Base Shadow & Glow */}
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* Ambient Under-Laptop Shadow */}
        <div className="w-[90%] h-[30px] bg-black/60 blur-xl rounded-full -mt-2 pointer-events-none" />
      </motion.div>
    </div>
  );
}
