"use client";

import { use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HoverRoll from "@/components/HoverRoll";
import { notFound } from "next/navigation";

interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  githubUrl?: string;
  liveUrl?: string;
  mainImage: string;
  gallery: string[];
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  features: string[];
}

const PROJECTS_DATA: Record<string, ProjectDetail> = {
  "yarana-nal-baharan-pigeon-club": {
    slug: "yarana-nal-baharan-pigeon-club",
    title: "Yarana Nal Baharan Pigeon Club",
    subtitle: "Real-time Pigeon Race Tracking & Club Management System",
    category: "INTERNATIONAL CLIENT — GREECE 🇬🇷",
    date: "2025",
    liveUrl: "https://yarannalbaharan.com",
    mainImage: "/projects/yarana.jpg",
    gallery: [
      "/projects/yarana/screenshot-1.jpg",
      "/projects/yarana/screenshot-2.jpg",
      "/projects/yarana/screenshot-3.jpg",
      "/projects/yarana/screenshot-4.jpg",
      "/projects/yarana/screenshot-5.jpg",
      "/projects/yarana/screenshot-6.jpg",
    ],
    description:
      "Built remotely for an international client based in Greece. Features a live pigeon race tracking & club management system with real-time leaderboards, pigeon count statistics, live viewer counters, Facebook integration, and live weather widgets.",
    problem:
      "The pigeon racing club needed an online platform to track live race results across multiple international participants in real-time without server delays or leaderboard sync issues.",
    solution:
      "Developed a custom PHP and MySQL web application with automated database polling and real-time frontend updates to display live tournament leaderboards, pigeon status, and weather forecasts.",
    stack: ["PHP", "MySQL", "JavaScript", "Real-time Polling", "Facebook API", "Weather API"],
    features: [
      "Real-time leaderboard & live pigeon status updates",
      "Live viewer counter and active participant stats",
      "Integrated Facebook social widget & weather API",
      "Custom admin dashboard for race score entry",
    ],
  },
  "abs24-news-portal": {
    slug: "abs24-news-portal",
    title: "ABS24 News Network",
    subtitle: "Custom PHP Urdu News Portal & Live Ticker",
    category: "WORDPRESS NEWS PORTAL",
    date: "2025",
    liveUrl: "https://abs24news.com",
    mainImage: "/projects/abs24.jpg",
    gallery: [
      "/projects/abs24-news-portal/screenshot-1.jpg",
      "/projects/abs24-news-portal/screenshot-2.jpg",
      "/projects/abs24-news-portal/screenshot-3.jpg",
      "/projects/abs24-news-portal/screenshot-4.jpg",
      "/projects/abs24-news-portal/screenshot-5.jpg",
      "/projects/abs24-news-portal/screenshot-6.jpg",
    ],
    description:
      "Custom PHP theme built from scratch for a full Urdu news network. Handles breaking news, live breaking news ticker, categories, and social media integration for daily readers in Pakistan and abroad.",
    problem:
      "Off-the-shelf WordPress news themes were slow, bloated with unused code, and failed to support proper right-to-left (RTL) Urdu font rendering and breaking news tickers.",
    solution:
      "Engineered a lightweight custom WordPress PHP theme with optimized database queries, custom Gutenberg blocks, and native Urdu font typography.",
    stack: ["WordPress", "Custom PHP Theme", "MySQL", "JavaScript", "Urdu RTL"],
    features: [
      "Custom PHP WordPress theme engineered from scratch",
      "High-speed breaking news ticker & category managers",
      "Native Urdu font typography & RTL layout optimization",
      "Social media auto-sharing and mobile responsive layout",
    ],
  },
  "axiom-research-group": {
    slug: "axiom-research-group",
    title: "Axiom Research Group",
    subtitle: "Global Market Research & Consulting Platform",
    category: "CORPORATE WEBSITE",
    date: "2025",
    liveUrl: "https://www.axiomresearchgroup.site",
    mainImage: "/projects/axiom.jpg",
    gallery: [
      "/projects/axiom-research-group/screenshot-1.jpg",
      "/projects/axiom-research-group/screenshot-2.jpg",
      "/projects/axiom-research-group/screenshot-3.jpg",
      "/projects/axiom-research-group/screenshot-4.jpg",
      "/projects/axiom-research-group/screenshot-5.jpg",
      "/projects/axiom-research-group/screenshot-6.jpg",
    ],
    description:
      "Professional corporate website for a global market research & consulting firm. Serves clients across multiple countries with a survey portal, case studies, and client showcase.",
    problem:
      "The market research firm required a professional, high-trust corporate portal to present research case studies, client testimonials, and capture business survey leads.",
    solution:
      "Designed and coded a fast, responsive corporate website using clean HTML5, CSS3, JavaScript, and a secure PHP contact & survey inquiry handler.",
    stack: ["HTML5", "CSS3", "JavaScript", "PHP", "Corporate Architecture"],
    features: [
      "Responsive multi-page corporate architecture",
      "Interactive survey portal & client case study showcases",
      "Secure PHP contact form & lead capture handlers",
      "Cross-browser compatibility & fast asset delivery",
    ],
  },
  "shoq-ki-baat-live-tracking": {
    slug: "shoq-ki-baat-live-tracking",
    title: "Shoq Ki Baat Live Tracking",
    subtitle: "Tournament Management & Real-time Leaderboard",
    category: "LIVE TRACKING SYSTEM",
    date: "2025",
    liveUrl: "https://shoqkibat.com",
    mainImage: "/projects/shoq.jpg",
    gallery: [
      "/projects/shoq-ki-baat-live-tracking/screenshot-1.jpg",
      "/projects/shoq-ki-baat-live-tracking/screenshot-2.jpg",
      "/projects/shoq-ki-baat-live-tracking/screenshot-3.jpg",
      "/projects/shoq-ki-baat-live-tracking/screenshot-4.jpg",
      "/projects/shoq-ki-baat-live-tracking/screenshot-5.jpg",
      "/projects/shoq-ki-baat-live-tracking/screenshot-6.jpg",
    ],
    description:
      "Live pigeon race tracking & tournament management system with real-time leaderboard, pigeon stats, weather integration, and admin panel. Powers active tournaments for hundreds of participants.",
    problem:
      "Managing large-scale bird flying tournaments manually on paper led to calculation errors and delayed result publishing for tournament participants.",
    solution:
      "Automated tournament management by creating a custom PHP/MySQL database system that automatically computes race timings, rankings, and publishes real-time leaderboards online.",
    stack: ["PHP", "MySQL", "JavaScript", "Urdu CMS", "Weather API"],
    features: [
      "Automated timing calculations & instant leaderboard rankings",
      "Admin CMS for tournament registration & judge scoring",
      "Integrated weather widgets for active flying days",
      "Used actively by hundreds of tournament participants",
    ],
  },
  "autonomous-ai-assistant-openclaw": {
    slug: "autonomous-ai-assistant-openclaw",
    title: "Autonomous AI Assistant (OpenClaw)",
    subtitle: "Localized WhatsApp Automated AI Agent",
    category: "AI & AUTOMATION",
    date: "May 2026",
    githubUrl: "https://github.com/basharathussain",
    mainImage: "/projects/openclaw.jpg",
    gallery: [
      "/projects/autonomous-ai-assistant-openclaw/screenshot-1.jpg",
      "/projects/autonomous-ai-assistant-openclaw/screenshot-2.jpg",
      "/projects/autonomous-ai-assistant-openclaw/screenshot-3.jpg",
      "/projects/autonomous-ai-assistant-openclaw/screenshot-4.jpg",
      "/projects/autonomous-ai-assistant-openclaw/screenshot-5.jpg",
      "/projects/autonomous-ai-assistant-openclaw/screenshot-6.jpg",
    ],
    description:
      "Engineered and deployed a localized automated WhatsApp chat agent utilizing the open-source OpenClaw framework. Configured environment files, localized model endpoints, and specific persona parameters to activate the virtual assistant.",
    problem:
      "Small businesses and tech platforms require 24/7 automated customer responses and query handling without paying expensive per-token third-party cloud API costs.",
    solution:
      "Integrated OpenClaw framework with local model endpoints and custom system prompt rules. Configured webhook dispatchers to parse incoming WhatsApp messages and dispatch intelligent, zero-latency replies.",
    stack: ["OpenClaw", "TypeScript", "WhatsApp Webhook", "Node.js", "Localized LLMs"],
    features: [
      "Integrated localized model endpoints for zero API token latency",
      "Configured custom persona parameters & prompt engineering rules",
      "Automated chat workflows and webhook dispatchers",
      "Robust error handling & fallback message queues",
    ],
  },
  "bh-tech-hub-saas-migration": {
    slug: "bh-tech-hub-saas-migration",
    title: "BH Tech Hub & B&S Solution Network",
    subtitle: "Custom SaaS Platform Migration",
    category: "WEB DEVELOPMENT & SEO",
    date: "2025 – Present",
    githubUrl: "https://github.com/basharathussain",
    liveUrl: "https://bhtechhub.com",
    mainImage: "/projects/bhtechhub.jpg",
    gallery: [
      "/projects/bh-tech-hub-saas-migration/screenshot-1.jpg",
      "/projects/bh-tech-hub-saas-migration/screenshot-2.jpg",
      "/projects/bh-tech-hub-saas-migration/screenshot-3.jpg",
      "/projects/bh-tech-hub-saas-migration/screenshot-4.jpg",
      "/projects/bh-tech-hub-saas-migration/screenshot-5.jpg",
      "/projects/bh-tech-hub-saas-migration/screenshot-6.jpg",
    ],
    description:
      "Managing comprehensive operations, content strategy, and technical infrastructure. Executing a full technical migration from WordPress to a fully custom-programmed SaaS architecture utilizing advanced server-side logic and database schemas.",
    problem:
      "Traditional WordPress websites suffer from heavy plugin overhead, slow page load times, and poor mobile search engine indexation.",
    solution:
      "Engineered a custom Next.js frontend connected to a high-speed database schema. Configured technical SEO via Google Search Console, Rank Math, and Ahrefs to maximize domain authority.",
    stack: ["Next.js", "WordPress Migration", "SEO Management", "Rank Math", "Ahrefs", "TypeScript"],
    features: [
      "WordPress to Next.js custom SaaS database migration",
      "Technical SEO management with Google Search Console & Ahrefs",
      "Advanced server-side logic and database schema design",
      "Drastic reduction in page load times and indexing latency",
    ],
  },
};

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = PROJECTS_DATA[resolvedParams.slug];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-32 pb-28 px-6 max-w-5xl mx-auto min-h-screen">
      {/* Back Link */}
      <div className="mb-8">
        <a
          href="/work"
          className="text-xs font-mono font-semibold tracking-wider text-muted uppercase hover:text-fg transition-colors inline-flex items-center gap-2"
        >
          ← Back to Projects
        </a>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 border-b border-border pb-10"
      >
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
            {project.category}
          </span>
          <span className="text-xs font-mono text-muted">{project.date}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-fg mb-4 leading-tight">
          {project.title}
        </h1>
        <p className="text-muted text-lg sm:text-xl font-medium max-w-3xl leading-relaxed">
          {project.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-8">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-fg text-bg px-6 py-3 text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              <HoverRoll>Live Preview ↗</HoverRoll>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-bg-soft border border-border text-fg px-6 py-3 text-xs font-semibold hover:border-fg transition-colors"
            >
              <HoverRoll>View Code ↗</HoverRoll>
            </a>
          )}
        </div>
      </motion.div>

      {/* Hero Banner Image */}
      <div className="relative aspect-16/9 w-full rounded-3xl overflow-hidden border border-border bg-border/40 mb-16 shadow-2xl">
        <Image
          src={project.mainImage}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1000px"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
      </div>

      {/* Overview & Problem / Solution */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-8 space-y-8">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-fg">Project Overview</h2>
            <p className="text-muted text-base leading-relaxed">{project.description}</p>
          </section>

          <section className="space-y-3 pt-6 border-t border-border/60">
            <h2 className="text-xl font-bold text-fg">The Challenge</h2>
            <p className="text-muted text-base leading-relaxed">{project.problem}</p>
          </section>

          <section className="space-y-3 pt-6 border-t border-border/60">
            <h2 className="text-xl font-bold text-fg">The Engineering Solution</h2>
            <p className="text-muted text-base leading-relaxed">{project.solution}</p>
          </section>
        </div>

        {/* Tech Stack Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl border border-border bg-bg-soft p-6">
            <h3 className="text-xs font-mono font-bold tracking-widest text-fg uppercase mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-3 py-1.5 rounded-xl border border-border bg-bg text-fg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5-6 Project Screenshots Gallery Section */}
      <section className="pt-10 border-t border-border mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
              PROJECT SCREENSHOTS & UI GALLERY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-fg mt-3">
              Detailed Interface & System Workflows
            </h2>
          </div>
          <span className="text-xs font-mono text-muted hidden sm:inline-block">
            Click any screenshot to expand
          </span>
        </div>

        {/* 6 Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {project.gallery.map((imgUrl, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => setSelectedImage(imgUrl)}
              className="group relative aspect-16/10 rounded-2xl overflow-hidden border border-border bg-bg-soft cursor-pointer shadow-md"
            >
              <Image
                src={imgUrl}
                alt={`${project.title} Screenshot ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback to main image if screenshot is missing
                  const target = e.target as HTMLImageElement;
                  target.srcset = project.mainImage;
                }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono font-bold">
                🔍 Click to Expand
              </div>
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-white/90">
                0{i + 1} / 06
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Engineering Features */}
      <section className="pt-10 border-t border-border">
        <h2 className="text-2xl font-bold text-fg mb-8">Key Engineering Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {project.features.map((feature, i) => (
            <div key={i} className="rounded-3xl border border-border bg-bg-soft p-6 flex items-start gap-3">
              <span className="text-accent font-bold text-lg">•</span>
              <p className="text-sm text-fg/90 font-medium leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Expand Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-16/10 rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Expanded Screenshot"
                fill
                sizes="100vw"
                className="object-contain bg-black"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.srcset = project.mainImage;
                }}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border border-white/20 hover:bg-white hover:text-black transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back CTA */}
      <div className="mt-16 text-center pt-10 border-t border-border">
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-full bg-fg text-bg px-8 py-4 text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <HoverRoll>Interested in a similar project? Let’s Talk</HoverRoll>
        </a>
      </div>
    </main>
  );
}
