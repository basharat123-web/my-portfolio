"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HoverRoll from "@/components/HoverRoll";

const ALL_PROJECTS = [
  {
    slug: "yarana-nal-baharan-pigeon-club",
    title: "Yarana Nal Baharan Pigeon Club",
    subtitle: "International Client — Greece 🇬🇷",
    date: "2025",
    image: "/projects/yarana.jpg",
    description:
      "Built for a client based in Greece — live pigeon race tracking & club management system with real-time leaderboard, pigeon count stats, live viewer counter, Facebook integration, and weather widget. Delivered remotely for an international client.",
    details: [
      "Real-time leaderboard & live pigeon status updates",
      "Live viewer counter and active participant stats",
      "Integrated Facebook social widget & weather API",
    ],
    tags: ["PHP", "MySQL", "Real-time", "International Client"],
  },
  {
    slug: "abs24-news-portal",
    title: "ABS24 News Network",
    subtitle: "WordPress News Portal",
    date: "2025",
    image: "/projects/abs24.jpg",
    description:
      "Custom PHP theme built from scratch for a full Urdu news network. Handles breaking news, live ticker, categories, and social media integration for daily readers.",
    details: [
      "Custom PHP WordPress theme engineered from scratch",
      "High-speed breaking news ticker & category managers",
      "Native Urdu font typography & RTL layout optimization",
    ],
    tags: ["WordPress", "Custom PHP Theme", "Urdu CMS", "MySQL"],
  },
  {
    slug: "axiom-research-group",
    title: "Axiom Research Group",
    subtitle: "Corporate Website",
    date: "2025",
    image: "/projects/axiom.jpg",
    description:
      "Professional corporate website for a global market research & consulting firm. Serves clients across multiple countries with a survey portal, case studies, and client showcase.",
    details: [
      "Responsive multi-page corporate architecture",
      "Interactive survey portal & client case study showcases",
      "Secure PHP contact form & lead capture handlers",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "Corporate"],
  },
  {
    slug: "shoq-ki-baat-live-tracking",
    title: "Shoq Ki Baat Live Tracking",
    subtitle: "Live Tracking System",
    date: "2025",
    image: "/projects/shoq.jpg",
    description:
      "Live pigeon race tracking & tournament management system with real-time leaderboard, pigeon stats, weather integration, and admin panel. Powers active tournaments for hundreds of participants.",
    details: [
      "Automated timing calculations & instant leaderboard rankings",
      "Admin CMS for tournament registration & judge scoring",
      "Integrated weather widgets for active flying days",
    ],
    tags: ["PHP", "MySQL", "Live Data", "Urdu CMS"],
  },
  {
    slug: "autonomous-ai-assistant-openclaw",
    title: "Autonomous AI Assistant (OpenClaw)",
    subtitle: "WhatsApp Automated AI Agent",
    date: "May 2026",
    image: "/projects/openclaw.jpg",
    description:
      "Engineered and deployed a localized automated WhatsApp chat agent utilizing the open-source OpenClaw framework. Configured environment files, localized model endpoints, and specific persona parameters to activate the virtual assistant.",
    details: [
      "Integrated localized model endpoints for zero-latency responses",
      "Configured custom persona parameters & prompt engineering rules",
      "Automated chat workflows and webhook dispatchers",
    ],
    tags: ["AI Integration", "OpenClaw", "WhatsApp Automation", "Model Endpoints"],
  },
  {
    slug: "bh-tech-hub-saas-migration",
    title: "BH Tech Hub & B&S Solution Network",
    subtitle: "Custom SaaS Platform Migration",
    date: "2025 – Present",
    image: "/projects/bhtechhub.jpg",
    description:
      "Managing comprehensive operations, content strategy, and technical infrastructure. Executing a full technical migration from WordPress to a fully custom-programmed SaaS architecture utilizing advanced server-side logic and database schemas.",
    details: [
      "WordPress to Next.js custom SaaS database migration",
      "Technical SEO management with Google Search Console & Ahrefs",
      "Advanced server-side logic and database schema design",
    ],
    tags: ["SaaS Migration", "WordPress", "SEO Management", "Rank Math", "Ahrefs"],
  },
];

export default function WorkPage() {
  return (
    <main className="pt-32 pb-28 px-6 max-w-6xl mx-auto min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 border-b border-border pb-10"
      >
        <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
          PORTFOLIO & PROJECTS
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-fg mb-4">
          Featured Work
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
          A showcase of full-stack web applications, AI automation tools, desktop utilities, and SaaS platform migrations built by Basharat Hussain.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {ALL_PROJECTS.map((project, index) => (
          <motion.a
            key={project.title}
            href={`/work/${project.slug}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col justify-between rounded-3xl border border-border bg-bg-soft overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block"
          >
            <div>
              {/* Project Image Box */}
              <div className="relative aspect-16/9 w-full overflow-hidden bg-border/40 mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 uppercase">
                    {project.subtitle}
                  </span>
                </div>
              </div>

              <div className="px-8">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">
                    {project.date}
                  </span>
                  <span className="text-xs text-muted group-hover:text-accent transition-colors font-bold">
                    Read Details ↗
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-fg mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h2>

                <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Bullet details */}
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-fg/80">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tags */}
            <div className="p-8 pt-4 border-t border-border/60 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium rounded-full border border-border px-3 py-1 text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      {/* Back CTA */}
      <div className="mt-16 text-center">
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-full bg-fg text-bg px-8 py-4 text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <HoverRoll>Have a project in mind? Let’s Talk</HoverRoll>
        </a>
      </div>
    </main>
  );
}

