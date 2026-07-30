"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HoverRoll from "./HoverRoll";

const PROJECTS = [
  {
    slug: "yarana-nal-baharan-pigeon-club",
    title: "Yarana Nal Baharan Pigeon Club",
    category: "INTERNATIONAL CLIENT — GREECE 🇬🇷",
    description:
      "Real-time pigeon race tracking & club management system with live leaderboards, viewer counters, and weather integration.",
    tags: ["PHP", "MySQL", "Real-time", "Greece 🇬🇷"],
    image: "/projects/yarana.jpg",
    url: "https://yarannalbaharan.com",
  },
  {
    slug: "abs24-news-portal",
    title: "ABS24 News Network",
    category: "WORDPRESS NEWS PORTAL",
    description:
      "Custom PHP theme built from scratch for a full Urdu news network with live breaking news ticker and RTL font optimization.",
    tags: ["WordPress", "Custom PHP", "Urdu CMS"],
    image: "/projects/abs24.jpg",
    url: "https://abs24news.com",
  },
  {
    slug: "axiom-research-group",
    title: "Axiom Research Group",
    category: "CORPORATE WEBSITE",
    description:
      "Professional corporate website for a global market research & consulting firm with survey portals and case studies.",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP"],
    image: "/projects/axiom.jpg",
    url: "https://www.axiomresearchgroup.site",
  },
  {
    slug: "shoq-ki-baat-live-tracking",
    title: "Shoq Ki Baat Live Tracking",
    category: "LIVE TRACKING SYSTEM",
    description:
      "Live pigeon race tracking & tournament management system with real-time leaderboard rankings and automated score calculation.",
    tags: ["PHP", "MySQL", "Live Data", "Urdu CMS"],
    image: "/projects/shoq.jpg",
    url: "https://shoqkibat.com",
  },
  {
    slug: "autonomous-ai-assistant-openclaw",
    title: "Autonomous AI Assistant (OpenClaw)",
    category: "AI & AUTOMATION",
    description:
      "Localized automated WhatsApp chat agent utilizing OpenClaw framework with zero-latency model endpoints and persona rules.",
    tags: ["OpenClaw", "WhatsApp AI", "Node.js"],
    image: "/projects/openclaw.jpg",
  },
  {
    slug: "bh-tech-hub-saas-migration",
    title: "BH Tech Hub Platform",
    category: "WEB DEVELOPMENT & SEO",
    description:
      "Tech blog & custom SaaS migration from WordPress to Next.js App Router with server-side logic and technical SEO.",
    tags: ["Next.js", "WordPress Migration", "SEO"],
    image: "/projects/bhtechhub.jpg",
    url: "https://bhtechhub.com",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0] as const,
    },
  },
};

export default function Work() {
  return (
    <section id="work" className="px-4 sm:px-6 py-12 sm:py-20 border-t border-border">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-widest text-muted uppercase mb-2"
            >
              SELECTED WORK & PROJECTS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-2xl sm:text-4xl font-bold tracking-tight text-fg"
            >
              A few things I&apos;ve built
            </motion.h2>
          </div>
          <motion.a
            href="/work"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden sm:inline-flex items-center text-xs font-semibold text-muted hover:text-fg transition-colors"
          >
            <HoverRoll>View all projects →</HoverRoll>
          </motion.a>
        </div>

        {/* 3-Column Grid with Project Image Cards & Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {PROJECTS.map((project) => (
            <motion.a
              key={project.slug}
              href={`/work/${project.slug}`}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="group flex flex-col justify-between rounded-3xl border border-border bg-bg-soft overflow-hidden shadow-sm hover:shadow-2xl hover:border-fg/30 transition-all duration-300 relative"
            >
              <div>
                {/* Project Image Box */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-border/40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Category Pill Over Image */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[9px] font-mono font-bold tracking-wider text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 uppercase">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white text-xs group-hover:bg-accent group-hover:text-black transition-colors">
                    ↗
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5">
                  <h3 className="text-base sm:text-lg font-bold text-fg mb-2 leading-snug group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags Footer */}
              <div className="px-5 pb-5 pt-2 flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium rounded-lg border border-border bg-bg px-2.5 py-1 text-muted/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile View All CTA */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href="/work"
            className="inline-flex items-center gap-2 rounded-full bg-fg text-bg px-6 py-3 text-xs font-semibold"
          >
            <HoverRoll>View all projects →</HoverRoll>
          </a>
        </div>
      </div>
    </section>
  );
}
