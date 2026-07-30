"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tags: string[];
  slug: string;
  image: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "01",
    number: "01",
    title: "Yarana Nal Baharan",
    category: "Real-Time Pigeon Race Tracking System • Greece 🇬🇷",
    tags: ["PHP", "MySQL", "Real-time", "Greece 🇬🇷"],
    slug: "yarana-nal-baharan-pigeon-club",
    image: "/projects/yarana/screenshot-1.jpg",
  },
  {
    id: "02",
    number: "02",
    title: "ABS24 News Network",
    category: "Custom PHP Urdu News Portal & Live Ticker",
    tags: ["WordPress", "Custom PHP", "Urdu CMS"],
    slug: "abs24-news-portal",
    image: "/projects/abs24-news-portal/screenshot-1.jpg",
  },
  {
    id: "03",
    number: "03",
    title: "Axiom Research Group",
    category: "Corporate Market Analytics & Survey Portal",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP"],
    slug: "axiom-research-group",
    image: "/projects/yarana/screenshot-3.jpg",
  },
  {
    id: "04",
    number: "04",
    title: "Shoq Ki Baat",
    category: "Live Tournament Leaderboard System",
    tags: ["PHP", "MySQL", "Live Data", "Urdu CMS"],
    slug: "shoq-ki-baat-live-tracking",
    image: "/projects/yarana/screenshot-4.jpg",
  },
  {
    id: "05",
    number: "05",
    title: "Autonomous AI Assistant",
    category: "WhatsApp Automation & Localized LLM Agent",
    tags: ["OpenClaw", "WhatsApp AI", "Node.js"],
    slug: "autonomous-ai-assistant-openclaw",
    image: "/projects/yarana/screenshot-5.jpg",
  },
  {
    id: "06",
    number: "06",
    title: "BH Tech Hub Platform",
    category: "Next.js SaaS Migration & Technical SEO",
    tags: ["Next.js", "WordPress Migration", "SEO"],
    slug: "bh-tech-hub-saas-migration",
    image: "/projects/yarana/screenshot-6.jpg",
  },
];

export default function FramerProjectHover() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeProject = PROJECTS[activeIndex];

  return (
    <div className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#09090b] border border-white/10 shadow-2xl min-h-[580px] sm:min-h-[640px] flex flex-col justify-between p-6 sm:p-12">
      {/* Dynamic Background Image Swap Layer with AnimatePresence */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-top filter brightness-[0.7] contrast-[1.1]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Ambient Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 z-10" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 w-full flex flex-col justify-between h-full space-y-8">
        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b border-white/15 pb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
              FEATURED WORKS ({PROJECTS.length})
            </span>
          </div>
          <span className="text-xs font-mono text-white/50 hidden sm:inline-block">
            HOVER OR TAP TO PREVIEW
          </span>
        </div>

        {/* Project Interactive List Accordion */}
        <div className="flex-1 flex flex-col justify-center space-y-2 sm:space-y-3">
          {PROJECTS.map((project, idx) => {
            const isActive = activeIndex === idx;

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`group relative rounded-2xl px-4 sm:px-6 py-4 transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? "bg-white/10 border-white/25 backdrop-blur-md shadow-lg"
                    : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  {/* Left: Number & Title */}
                  <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                    <span
                      className={`text-xs sm:text-sm font-mono font-bold transition-colors ${
                        isActive ? "text-accent" : "text-white/40 group-hover:text-white/70"
                      }`}
                    >
                      {project.number}
                    </span>

                    <h3
                      className={`text-lg sm:text-2xl font-bold truncate transition-colors ${
                        isActive ? "text-white" : "text-white/70 group-hover:text-white"
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Right: Subtitle & Arrow */}
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="hidden md:inline-block text-xs font-mono text-white/60 truncate max-w-xs">
                      {project.category}
                    </span>

                    <Link
                      href={`/work/${project.slug}`}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                        isActive
                          ? "bg-accent text-black scale-105 shadow-md"
                          : "bg-white/10 text-white/70 group-hover:bg-white group-hover:text-black"
                      }`}
                    >
                      ↗
                    </Link>
                  </div>
                </div>

                {/* Mobile Preview Detail Row when active */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden mt-3 pt-3 border-t border-white/10 text-xs font-mono text-white/80 flex items-center justify-between"
                  >
                    <span className="truncate">{project.category}</span>
                    <Link
                      href={`/work/${project.slug}`}
                      className="text-accent font-bold underline ml-2 shrink-0"
                    >
                      View Case Study →
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Active Project Info & CTA Bar */}
        <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-white/40 uppercase">Active:</span>
            <span className="text-sm font-bold text-white">{activeProject.title}</span>
            <span className="text-xs font-mono text-accent bg-accent/10 px-2.5 py-0.5 rounded border border-accent/20">
              {activeProject.tags[0]}
            </span>
          </div>

          <Link
            href={`/work/${activeProject.slug}`}
            className="w-full sm:w-auto text-center rounded-full bg-white text-black font-semibold px-6 py-2.5 text-xs hover:bg-accent transition-all shadow-md"
          >
            Explore {activeProject.title} Case Study →
          </Link>
        </div>
      </div>
    </div>
  );
}
