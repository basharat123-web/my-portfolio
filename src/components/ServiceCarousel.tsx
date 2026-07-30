"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HoverRoll from "./HoverRoll";

const SERVICES = [
  {
    title: "Full-Stack Web Dev",
    category: "NEXT.JS & REACT",
    description:
      "Building high-performance SaaS platforms and web applications with Next.js App Router, TypeScript, React, and server-side rendering.",
    tags: ["Next.js", "TypeScript", "React", "Server Components"],
  },
  {
    title: "AI & Automation Agents",
    category: "OPENCLAW & LLMs",
    description:
      "Engineering localized automated WhatsApp chat agents, system prompt persona rules, and zero-latency localized model endpoints.",
    tags: ["OpenClaw", "WhatsApp API", "Node.js", "Localized LLMs"],
  },
  {
    title: "Custom SaaS Architecture",
    category: "MERN STACK & APIS",
    description:
      "Migrating legacy CMS platforms to custom MERN stack architectures with Express REST APIs, MongoDB schemas, and type safety.",
    tags: ["MERN Stack", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    title: "Technical SEO & Speed",
    category: "PERFORMANCE & INDEXING",
    description:
      "Technical SEO management with Google Search Console, Ahrefs, sitemap indexing, and Core Web Vitals optimization.",
    tags: ["Search Console", "Ahrefs", "Rank Math", "PageSpeed 95+"],
  },
];

const COUNT = SERVICES.length;
const AUTOPLAY_MS = 4000;

export default function ServiceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % COUNT);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  const next = () => setActiveIndex((i) => (i + 1) % COUNT);
  const prev = () => setActiveIndex((i) => (i - 1 + COUNT) % COUNT);

  // Swipe / Drag Handler
  const handleDragEnd = (event: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -40) {
      next();
    } else if (info.offset.x > 40) {
      prev();
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden py-4 select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 3D Coverflow Container - Works on both PC & Mobile with Touch Swipe */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        className="relative h-[360px] sm:h-[400px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y"
        style={{ perspective: "1000px" }}
      >
        <AnimatePresence initial={false}>
          {SERVICES.map((service, i) => {
            let offset = i - activeIndex;
            if (offset > COUNT / 2) offset -= COUNT;
            if (offset < -COUNT / 2) offset += COUNT;

            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 1;

            if (!isVisible) return null;

            return (
              <motion.div
                key={service.title}
                initial={false}
                animate={{
                  x: offset * (typeof window !== "undefined" && window.innerWidth < 640 ? 170 : 260),
                  z: isActive ? 0 : -140,
                  rotateY: offset * -28,
                  scale: isActive ? 1 : 0.86,
                  opacity: isActive ? 1 : 0.45,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                className="absolute w-[270px] sm:w-[320px] h-[330px] sm:h-[360px] rounded-3xl border border-border bg-bg-soft p-6 flex flex-col justify-between shadow-2xl overflow-hidden backdrop-blur-md"
                style={{
                  zIndex: COUNT - Math.abs(offset),
                  pointerEvents: isActive ? "auto" : "none",
                }}
                onClick={() => setActiveIndex(i)}
              >
                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-md border border-accent/15 uppercase">
                      {service.category}
                    </span>
                    <span className="text-xs font-mono text-muted">0{i + 1} / 0{COUNT}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-fg mb-3 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Tags Footer */}
                <div className="pt-4 border-t border-border/60 flex flex-wrap gap-1.5 mt-auto">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium rounded-lg border border-border bg-bg px-2.5 py-1 text-muted/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Swipe Hint for Mobile & Touch Devices */}
      <div className="text-center mt-2 mb-4 text-[10px] font-mono text-muted/60 uppercase tracking-widest sm:hidden">
        ← Swipe left / right to move cards →
      </div>

      {/* Navigation Controls & Progress Dots */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={prev}
          aria-label="Previous Service"
          className="h-10 w-10 rounded-full border border-border bg-bg-soft text-fg flex items-center justify-center hover:border-fg hover:bg-fg hover:text-bg transition-all shadow-sm cursor-pointer"
        >
          ‹
        </button>

        <div className="flex items-center gap-2">
          {SERVICES.map((service, i) => (
            <button
              key={service.title}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to ${service.title}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                i === activeIndex ? "w-7 bg-accent" : "w-2.5 bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next Service"
          className="h-10 w-10 rounded-full border border-border bg-bg-soft text-fg flex items-center justify-center hover:border-fg hover:bg-fg hover:text-bg transition-all shadow-sm cursor-pointer"
        >
          ›
        </button>
      </div>
    </div>
  );
}
