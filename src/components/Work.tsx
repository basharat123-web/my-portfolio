"use client";

import { motion } from "framer-motion";
import HoverRoll from "./HoverRoll";

const PROJECTS = [
  {
    slug: "autonomous-ai-assistant-openclaw",
    title: "Autonomous AI Assistant (OpenClaw)",
    description: "Engineered and deployed a localized automated WhatsApp chat agent utilizing OpenClaw framework with custom persona parameters.",
    tags: ["OpenClaw", "WhatsApp AI", "Model Endpoints"],
  },
  {
    slug: "windows-video-downloader-utility",
    title: "Windows Video Downloader Utility",
    description: "Built and compiled a fully functional Windows desktop utility application designed for single-click video downloads.",
    tags: ["Windows Utility", "Desktop App", "Independent Pipeline"],
  },
  {
    slug: "mern-stack-nextjs-architecture",
    title: "MERN Stack & Next.js Architecture",
    description: "90-day intensive build curriculum focused on advanced MERN stack, TypeScript type systems, Next.js App Router, and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "MERN Stack", "App Router"],
  },
  {
    slug: "bh-tech-hub-saas-migration",
    title: "BH Tech Hub & B&S Solution Network",
    description: "Executing full technical migration from WordPress to a custom component-based SaaS architecture with advanced SEO logic.",
    tags: ["SaaS Architecture", "Next.js", "WordPress Migration", "SEO"],
  },
];

export default function Work() {
  return (
    <section id="work" className="px-6 py-14 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-10 sm:mb-14">
          <div>
            <p className="text-xs sm:text-sm tracking-widest text-muted uppercase mb-3">
              Selected Work
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-xl">
              A few things I&apos;ve built
            </h2>
          </div>
          <a
            href="/work"
            className="hidden sm:inline text-sm text-muted hover:text-accent transition-colors"
          >
            <HoverRoll>View all work →</HoverRoll>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={project.title}
              href={`/work/${project.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group block rounded-2xl border border-border overflow-hidden bg-bg-soft"
            >
              <div className="aspect-video bg-gradient-to-br from-bg-soft to-border flex items-center justify-center p-6 text-center">
                <span className="text-sm font-bold text-fg/80 uppercase tracking-widest group-hover:text-accent transition-colors">
                  {project.title} ↗
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs rounded-full border border-border px-3 py-1 text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}


