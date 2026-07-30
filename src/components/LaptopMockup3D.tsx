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
  fallbackImage = "/projects/yarana/screenshot-1.jpg",
}: LaptopMockup3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  // Mouse 3D Tilt Motion Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth Spring Physics
  const mouseX = useSpring(x, { stiffness: 240, damping: 24 });
  const mouseY = useSpring(y, { stiffness: 240, damping: 24 });

  // 3D Rotations
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-14, 14]);
  const sheenOpacity = useTransform(mouseY, [-0.5, 0.5], [0.08, 0.25]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isInteractive) return;
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
      {/* Control Badge */}
      <div className="flex items-center justify-between gap-3 mb-6 px-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider text-accent uppercase bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
            3D LAPTOP LIVE SHOWCASE
          </span>
        </div>

        <button
          onClick={() => setIsInteractive(!isInteractive)}
          className="text-xs font-mono font-bold tracking-wider uppercase bg-bg-soft hover:bg-fg hover:text-bg text-fg px-3.5 py-1.5 rounded-full border border-border transition-all shadow-sm cursor-pointer"
        >
          {isInteractive ? "🔒 Lock 3D Tilt" : "🎮 Enable Scroll / Click"}
        </button>
      </div>

      {/* 3D Laptop Assembly with User's MacBook Pro Frame */}
      <motion.div
        style={{
          rotateX: isInteractive ? 0 : rotateX,
          rotateY: isInteractive ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="relative w-full aspect-[16/10] flex items-center justify-center"
      >
        {/* User's Uploaded MacBook Pro Laptop Frame */}
        <div className="relative w-full h-full">
          <Image
            src="/macbook-pro-user.png"
            alt="MacBook Pro 3D Laptop Frame"
            fill
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-contain pointer-events-none z-20"
            priority
          />

          {/* Glass Sheen Glare Reflection Overlay */}
          <motion.div
            style={{ opacity: sheenOpacity }}
            className="absolute inset-[6%_11%_11%_11%] z-30 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-white/20 rounded-t-lg"
          />

          {/* Screen Content Viewport Area (Positioned perfectly inside the Laptop Screen) */}
          <div className="absolute inset-[5.8%_11.8%_11.5%_11.8%] z-10 bg-black overflow-hidden flex flex-col rounded-t-sm shadow-inner">
            {/* Browser Address Bar */}
            <div className="h-6 sm:h-7 bg-[#141416] border-b border-white/10 px-2.5 flex items-center justify-between text-white/70 text-[9px] sm:text-[10px] font-mono shrink-0 z-20">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
              </div>

              <div className="flex-1 max-w-[200px] sm:max-w-md mx-2 bg-[#09090b] rounded px-2 py-0.5 flex items-center gap-1.5 border border-white/10 overflow-hidden text-[9px]">
                <span className="text-emerald-400">🔒</span>
                <span className="truncate text-white/90 font-mono">{url}</span>
              </div>

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 text-[9px] uppercase font-bold"
              >
                <span>Live</span> ↗
              </a>
            </div>

            {/* Live iframe & Screenshot Display */}
            <div className="relative flex-1 w-full h-full bg-[#08080a] overflow-hidden">
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

              {(!iframeLoaded || !url) && (
                <div className="absolute inset-0 z-10 w-full h-full bg-black">
                  <Image
                    src={fallbackImage}
                    alt={title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1000px"
                    className="object-cover object-top"
                  />
                </div>
              )}

              {!isInteractive && (
                <div className="absolute bottom-2 right-2 z-20 bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20 text-[9px] font-mono text-white/90 shadow-xl pointer-events-none">
                  🖱️ Move Mouse for 3D Tilt
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Ambient Under-Laptop Floor Shadow */}
        <div className="absolute -bottom-4 w-[85%] h-[20px] bg-black/60 blur-xl rounded-full pointer-events-none -z-10" />
      </motion.div>
    </div>
  );
}
