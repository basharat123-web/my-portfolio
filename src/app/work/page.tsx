"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HoverRoll from "@/components/HoverRoll";

const ALL_PROJECTS = [
  {
    slug: "yarana-nal-baharan-pigeon-club",
    title: "Yarana Nal Baharan",
    subtitle: "Real-Time Pigeon Race Tracking • Greece 🇬🇷",
    date: "2025",
    image: "/projects/yarana/screenshot-1.jpg",
    bgGradient: "from-[#1a365d] via-[#2a4365] to-[#1a202c]",
    description:
      "Built for an international client based in Greece — live pigeon race tracking & club management system with real-time leaderboards, viewer counters, Facebook integration, and weather widgets.",
    url: "https://yarannalbaharan.com",
  },
  {
    slug: "abs24-news-portal",
    title: "ABS24 News Network",
    subtitle: "Custom PHP Urdu News Portal & Live Ticker",
    date: "2025",
    image: "/projects/abs24-news-portal/screenshot-1.jpg",
    bgGradient: "from-[#742a2a] via-[#9b2c2c] to-[#1a202c]",
    description:
      "Custom PHP theme built from scratch for a full Urdu news network. Handles breaking news tickers, category management, and native RTL typography.",
    url: "https://abs24news.com",
  },
  {
    slug: "axiom-research-group",
    title: "Axiom Research Group",
    subtitle: "Corporate Market Analytics & Survey Portal",
    date: "2025",
    image: "/projects/yarana/screenshot-3.jpg",
    bgGradient: "from-[#2b6cb0] via-[#2c5282] to-[#1a202c]",
    description:
      "Professional corporate website for a global market research & consulting firm. Features interactive survey portals and case study showcases.",
    url: "https://www.axiomresearchgroup.site",
  },
  {
    slug: "shoq-ki-baat-live-tracking",
    title: "Shoq Ki Baat",
    subtitle: "Live Tournament Leaderboard System",
    date: "2025",
    image: "/projects/yarana/screenshot-4.jpg",
    bgGradient: "from-[#975a16] via-[#744210] to-[#1a202c]",
    description:
      "Live pigeon race tracking & tournament management system with automated score calculation and real-time leaderboards.",
    url: "https://shoqkibat.com",
  },
  {
    slug: "autonomous-ai-assistant-openclaw",
    title: "Autonomous AI Assistant",
    subtitle: "WhatsApp Automation & Localized LLM Agent",
    date: "May 2026",
    image: "/projects/yarana/screenshot-5.jpg",
    bgGradient: "from-[#22543d] via-[#1c4532] to-[#1a202c]",
    description:
      "Engineered a localized automated WhatsApp chat agent using the OpenClaw framework with zero-latency model endpoints and persona rules.",
  },
  {
    slug: "bh-tech-hub-saas-migration",
    title: "BH Tech Hub Platform",
    subtitle: "Next.js SaaS Migration & Technical SEO",
    date: "2025 – Present",
    image: "/projects/yarana/screenshot-6.jpg",
    bgGradient: "from-[#44337a] via-[#322659] to-[#1a202c]",
    description:
      "Executing a full technical migration from WordPress to a custom-programmed Next.js SaaS architecture with technical SEO optimization.",
    url: "https://bhtechhub.com",
  },
];

export default function WorkPage() {
  return (
    <main className="pt-32 pb-28 px-4 sm:px-6 max-w-6xl mx-auto min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-14 sm:mb-16 border-b border-border pb-10"
      >
        <h1 className="text-4xl sm:text-7xl font-bold tracking-tight text-fg mb-4">
          All Projects
        </h1>
        <p className="text-muted text-base sm:text-xl max-w-2xl leading-relaxed">
          Full-stack web applications, custom SaaS architectures, AI automation tools, and client platforms built by Basharat Hussain.
        </p>
      </motion.div>

      {/* Projects Grid matching Majd Reference Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 mb-16">
        {ALL_PROJECTS.map((project, index) => (
          <motion.a
            key={project.title}
            href={`/work/${project.slug}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group block cursor-pointer"
          >
            {/* Image Container with Gradient Backdrop */}
            <div
              className={`relative aspect-[16/10] w-full rounded-[28px] sm:rounded-[36px] bg-gradient-to-br ${project.bgGradient} p-4 sm:p-7 overflow-hidden shadow-lg border border-border/40 transition-all duration-500 group-hover:shadow-2xl`}
            >
              <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/15">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              </div>
            </div>

            {/* Title & Subtitle Below Card */}
            <div className="mt-4 px-1">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h2 className="text-2xl font-bold text-fg group-hover:text-accent transition-colors leading-tight">
                  {project.title}
                </h2>
                <span className="text-xs font-mono text-muted">{project.date}</span>
              </div>
              <p className="text-muted text-xs sm:text-sm font-medium">
                {project.subtitle}
              </p>
              <p className="text-muted/80 text-xs sm:text-sm leading-relaxed mt-2 line-clamp-2">
                {project.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Back CTA */}
      <div className="mt-16 text-center">
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-full bg-fg text-bg px-8 py-4 text-sm font-semibold hover:opacity-90 transition-opacity shadow-md"
        >
          <HoverRoll>Have a project in mind? Let’s Talk</HoverRoll>
        </a>
      </div>
    </main>
  );
}
