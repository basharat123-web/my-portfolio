"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Full-Stack Web Dev",
    description: "Building modern SaaS platforms and web apps with Next.js, MERN stack, TypeScript, and server-side logic.",
    tags: ["Next.js", "MERN Stack", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Graphic Design",
    description: "Professional marketing materials, vector illustration, UI/UX layouts, and commercial print formatting.",
    tags: ["Photoshop", "CorelDRAW", "UI/UX Layouts", "Print Format"],
  },
  {
    title: "SEO & Analytics",
    description: "Technical SEO management using Google Search Console, Rank Math, and Ahrefs for indexation and authority.",
    tags: ["Google Console", "Rank Math", "Ahrefs", "Site Authority"],
  },
  {
    title: "Hardware & Systems",
    description: "System diagnostics, drive formatting, local environment setup, and industrial power & solar inverter configuration.",
    tags: ["Diagnostics", "Environment Setup", "File Recovery", "Solar Inverters"],
  },
];

const COUNT = SERVICES.length;
const AUTOPLAY_MS = 4000;
const SPACING = 240;
const ROTATE_DEG = 40;
const DEPTH_STEP = 140;
const SCALE_STEP = 0.14;

function getOffset(i: number, activeIndex: number) {
  let offset = i - activeIndex;
  if (offset > COUNT / 2) offset -= COUNT;
  if (offset < -COUNT / 2) offset += COUNT;
  return offset;
}

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

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Desktop: 3D coverflow */}
      <div className="hidden md:flex perspective-distant h-115 items-center justify-center">
        <div className="relative w-70 h-95" style={{ transformStyle: "preserve-3d" }}>
          {SERVICES.map((service, i) => {
            const offset = getOffset(i, activeIndex);
            const isActive = offset === 0;
            const visible = Math.abs(offset) <= 2;

            return (
              <motion.div
                key={service.title}
                className="absolute inset-0"
                animate={{
                  x: offset * SPACING,
                  z: -Math.abs(offset) * DEPTH_STEP,
                  rotateY: -offset * ROTATE_DEG,
                  scale: 1 - Math.abs(offset) * SCALE_STEP,
                  opacity: visible ? 1 - Math.abs(offset) * 0.3 : 0,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                style={{
                  zIndex: COUNT - Math.abs(offset),
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <motion.div
                  whileHover={isActive ? { y: -12, scale: 1.03 } : {}}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`w-full h-full rounded-2xl border p-6 flex flex-col bg-bg-soft transition-colors ${
                    isActive ? "border-accent shadow-2xl" : "border-border"
                  }`}
                >
                  <div className="aspect-video rounded-xl bg-linear-to-br from-bg-soft to-border mb-4" />
                  <h3 className="text-lg font-medium mb-2">{service.title}</h3>
                  <p className="text-muted text-sm mb-4">{service.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs rounded-full border border-border px-3 py-1 text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Desktop nav controls */}
      <div className="hidden md:flex items-center justify-center gap-4 mt-10">
        <button
          onClick={prev}
          aria-label="Previous service"
          className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:border-fg transition-colors"
        >
          &#8249;
        </button>
        <div className="flex items-center gap-2">
          {SERVICES.map((service, i) => (
            <button
              key={service.title}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to ${service.title}`}
              className={`h-2 rounded-full transition-all ${
                i === activeIndex ? "w-6 bg-fg" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next service"
          className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:border-fg transition-colors"
        >
          &#8250;
        </button>
      </div>

      {/* Mobile: simple stacked cards */}
      <div className="md:hidden grid gap-5">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-border bg-bg-soft p-6"
          >
            <div className="aspect-video rounded-xl bg-linear-to-br from-bg-soft to-border mb-4" />
            <h3 className="text-lg font-medium mb-2">{service.title}</h3>
            <p className="text-muted text-sm mb-4">{service.description}</p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs rounded-full border border-border px-3 py-1 text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
