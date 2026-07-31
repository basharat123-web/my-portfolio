"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HoverRoll from "./HoverRoll";

interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  slug: string;
  image: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "01",
    number: "01",
    title: "Yarana",
    subtitle: "Real-Time Pigeon Race Tracking",
    slug: "yarana-nal-baharan-pigeon-club",
    image: "/projects/yarana/screenshot-1.jpg",
  },
  {
    id: "02",
    number: "02",
    title: "ABS24 News",
    subtitle: "Custom PHP Urdu News Portal",
    slug: "abs24-news-portal",
    image: "/projects/abs24-news-portal/screenshot-1.jpg",
  },
  {
    id: "03",
    number: "03",
    title: "Axiom",
    subtitle: "Market Analytics & Survey Portal",
    slug: "axiom-research-group",
    image: "/projects/axiom-research-group/screenshot-1.png",
  },
  {
    id: "04",
    number: "04",
    title: "Shoq Ki Baat",
    subtitle: "Live Tournament Leaderboard",
    slug: "shoq-ki-baat-live-tracking",
    image: "/projects/shoq-ki-baat-live-tracking/screenshot-1.png",
  },
];

// Sound Effect Utility using Web Audio API
const playHoverSound = () => {
  if (typeof window === "undefined") return;
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    // Soft elegant UI tick sound
    osc.type = "sine";
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);
    
    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch(e) {
    // Ignore audio context errors (e.g. if browser blocks before interaction)
  }
};

export default function FramerProjectHover() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeProject = PROJECTS[activeIndex];

  const handleHover = (index: number) => {
    if (activeIndex !== index) {
      playHoverSound();
      setActiveIndex(index);
    }
  };

  return (
    <div className="relative w-full py-4 sm:py-8 lg:py-12">
      {/* Forced Side-by-Side Grid Layout for ALL screen sizes */}
      <div className="relative z-10 grid h-full grid-cols-[40%_60%] sm:grid-cols-[38%_62%] lg:grid-cols-[35%_65%] gap-2 sm:gap-6 lg:gap-12 items-center w-full">
        
        {/* Left Side: Tabs */}
        <div className="flex flex-col justify-center py-2 sm:py-8 pl-1 pr-0 sm:pl-4 sm:pr-2 lg:pl-10">
          <div className="space-y-1 sm:space-y-2">
            {PROJECTS.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.div
                  layout
                  key={project.id}
                  onMouseEnter={() => handleHover(index)}
                  onClick={() => handleHover(index)}
                  initial={false}
                  animate={{ 
                    x: isActive ? (typeof window !== 'undefined' && window.innerWidth < 640 ? 4 : 10) : 0,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className={`group cursor-pointer flex flex-col px-3 py-3 sm:px-6 sm:py-4 transition-colors duration-300 ${
                    isActive
                      ? "bg-slate-200/70 backdrop-blur-md text-slate-900 rounded-l-xl sm:rounded-l-2xl rounded-r-none -mr-4 sm:-mr-8 lg:-mr-12 relative z-20 shadow-[-5px_0_15px_rgba(0,0,0,0.03)] lg:shadow-[-10px_0_20px_rgba(0,0,0,0.03)]"
                      : "bg-transparent text-slate-900 hover:bg-slate-200/40 rounded-xl sm:rounded-2xl"
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <span className={`text-[11px] min-[400px]:text-xs sm:text-lg lg:text-2xl font-bold tracking-tight transition-colors`}>
                      {project.title}
                    </span>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 4 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-[9px] sm:text-xs lg:text-sm font-medium leading-relaxed text-slate-600 max-w-[95%]">
                          {project.subtitle}
                        </p>
                        <Link
                          href={`/work/${project.slug}`}
                          className="mt-2 sm:mt-4 inline-flex items-center gap-1 text-[8px] sm:text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-black transition-colors"
                        >
                          <span className="border-b border-slate-900 pb-0.5"><HoverRoll>View Case Study</HoverRoll></span>
                          <span className="text-[10px] sm:text-sm">↗</span>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-xl sm:rounded-[24px] overflow-hidden bg-transparent shadow-sm border border-slate-200/50 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-contain object-center"
              />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}