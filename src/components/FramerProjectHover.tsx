"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { playHoverSound, playClickSound } from "@/utils/sound";

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
    subtitle: "Real-Time Pigeon Race Tracking • Greece 🇬🇷",
    slug: "yarana-nal-baharan-pigeon-club",
    image: "/projects/yarana/screenshot-1.jpg",
  },
  {
    id: "02",
    number: "02",
    title: "ABS24 News",
    subtitle: "Custom PHP Urdu News Portal & Live Ticker",
    slug: "abs24-news-portal",
    image: "/projects/abs24-news-portal/screenshot-1.jpg",
  },
  {
    id: "03",
    number: "03",
    title: "Axiom",
    subtitle: "Corporate Market Analytics & Survey Portal",
    slug: "axiom-research-group",
    image: "/projects/yarana/screenshot-3.jpg",
  },
  {
    id: "04",
    number: "04",
    title: "Shoq Ki Baat",
    subtitle: "Live Tournament Leaderboard System",
    slug: "shoq-ki-baat-live-tracking",
    image: "/projects/yarana/screenshot-4.jpg",
  },
  {
    id: "05",
    number: "05",
    title: "BH Tech Hub",
    subtitle: "Next.js SaaS Migration & Technical SEO",
    slug: "bh-tech-hub-saas-migration",
    image: "/projects/yarana/screenshot-6.jpg",
  },
];

export default function FramerProjectHover() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeProject = PROJECTS[activeIndex];

  return (
    <div className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-black border border-border shadow-2xl min-h-[540px] sm:min-h-[600px] flex flex-col justify-between select-none">
      {/* Full-Bleed Dynamic Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Top-Right Expand Icon Button */}
        <div className="absolute top-6 right-6 z-20 flex items-center justify-end">
          <Link
            href={`/work/${activeProject.slug}`}
            onClick={playClickSound}
            onMouseEnter={playHoverSound}
            className="w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shadow-lg"
          >
            ↗
          </Link>
        </div>

        {/* Bottom Project Title Banner */}
        <div className="absolute bottom-6 right-6 left-6 md:left-[42%] z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase block mb-1">
              CASE STUDY ({activeProject.number})
            </span>
            <h4 className="text-xl sm:text-3xl font-bold text-white leading-tight">
              {activeProject.title}
            </h4>
            <p className="text-xs text-white/80 font-medium mt-1">
              {activeProject.subtitle}
            </p>
          </div>

          <Link
            href={`/work/${activeProject.slug}`}
            onClick={playClickSound}
            onMouseEnter={playHoverSound}
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-2.5 text-xs font-semibold hover:bg-accent transition-colors shadow-md shrink-0"
          >
            View Project Details →
          </Link>
        </div>
      </div>

      {/* LEFT NAVIGATION MENU STACK WITH HORIZONTAL EXPAND/SLIDE MOTION */}
      <div className="relative z-20 w-full md:w-[44%] lg:w-[38%] flex flex-col h-full items-start divide-y divide-black/10">
        {PROJECTS.map((project, idx) => {
          const isActive = activeIndex === idx;

          return (
            <motion.div
              key={project.id}
              onMouseEnter={() => {
                setActiveIndex(idx);
                playHoverSound();
              }}
              onClick={() => {
                setActiveIndex(idx);
                playClickSound();
              }}
              animate={{
                width: isActive ? "100%" : "62%",
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 26,
              }}
              className={`relative p-5 sm:p-6 cursor-pointer flex flex-col justify-between rounded-r-2xl transition-colors duration-300 shadow-md ${
                isActive
                  ? "bg-white text-black z-30 font-semibold"
                  : "bg-white/90 text-black/60 hover:bg-white hover:text-black z-10"
              }`}
            >
              <div>
                <span className="text-[11px] font-mono text-black/40 block mb-1">
                  {project.number}
                </span>

                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl sm:text-2xl font-serif tracking-tight text-black font-semibold truncate">
                    {project.title}
                  </h3>

                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-base text-black/60 font-sans shrink-0"
                    >
                      →
                    </motion.span>
                  )}
                </div>
              </div>

              {isActive && (
                <p className="text-[11px] font-sans text-black/60 mt-2 line-clamp-1">
                  {project.subtitle}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
