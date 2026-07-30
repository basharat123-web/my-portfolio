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
  heroImage: string;
  bgGradient: string;
  gallery: string[];
  description: string;
  about: string;
  designSection: string;
  architecture: string;
  stack: string[];
  features: string[];
}

const PROJECTS_DATA: Record<string, ProjectDetail> = {
  "yarana-nal-baharan-pigeon-club": {
    slug: "yarana-nal-baharan-pigeon-club",
    title: "Yarana Nal Baharan",
    subtitle: "Real-Time Pigeon Race Tracking • Greece 🇬🇷",
    category: "International Client — Greece 🇬🇷",
    date: "2025",
    liveUrl: "https://yarannalbaharan.com",
    heroImage: "/projects/yarana/screenshot-1.jpg",
    bgGradient: "from-[#1a365d] via-[#2a4365] to-[#1a202c]",
    gallery: [
      "/projects/yarana/screenshot-1.jpg",
      "/projects/yarana/screenshot-2.jpg",
      "/projects/yarana/screenshot-3.jpg",
      "/projects/yarana/screenshot-4.jpg",
      "/projects/yarana/screenshot-5.jpg",
      "/projects/yarana/screenshot-6.jpg",
    ],
    description:
      "Engineered remotely for an international client based in Greece. Features a live pigeon race tracking & club management system with real-time leaderboards, viewer counters, Facebook integration, and live weather widgets.",
    about:
      "The client needed an online platform to track live race results across multiple international participants in real-time without server delays or leaderboard sync issues on high-traffic flying days.",
    designSection:
      "Developed a custom PHP and MySQL web application with automated database polling and real-time frontend updates to display live tournament leaderboards, pigeon status, and weather forecasts.",
    architecture:
      "Component-based PHP architecture connected to MySQL database with automated query caching and responsive mobile leaderboard design.",
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
    category: "WordPress News Portal",
    date: "2025",
    liveUrl: "https://abs24news.com",
    heroImage: "/projects/abs24-news-portal/screenshot-1.jpg",
    bgGradient: "from-[#742a2a] via-[#9b2c2c] to-[#1a202c]",
    gallery: [
      "/projects/abs24-news-portal/screenshot-1.jpg",
      "/projects/abs24-news-portal/screenshot-2.jpg",
      "/projects/abs24-news-portal/screenshot-3.jpg",
      "/projects/abs24-news-portal/screenshot-4.jpg",
    ],
    description:
      "Custom PHP theme built from scratch for a full Urdu news network. Handles breaking news, live breaking news ticker, categories, and social media integration.",
    about:
      "Off-the-shelf WordPress news themes were slow and bloated with unused code. The news network needed a custom theme optimized for Urdu RTL typography and high traffic.",
    designSection:
      "Engineered a lightweight custom WordPress PHP theme with optimized database queries, custom Gutenberg blocks, and native Urdu font typography.",
    architecture:
      "Lightweight custom PHP theme, custom query loops, and RTL font optimization for seamless reading experience across desktop and mobile devices.",
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
    subtitle: "Global Market Analytics & Survey Portal",
    category: "Corporate Website",
    date: "2025",
    liveUrl: "https://www.axiomresearchgroup.site",
    heroImage: "/projects/axiom-research-group/screenshot-1.jpg",
    bgGradient: "from-[#2b6cb0] via-[#2c5282] to-[#1a202c]",
    gallery: [
      "/projects/axiom-research-group/screenshot-1.jpg",
      "/projects/axiom-research-group/screenshot-2.jpg",
      "/projects/axiom-research-group/screenshot-3.jpg",
      "/projects/axiom-research-group/screenshot-4.jpg",
      "/projects/axiom-research-group/screenshot-5.jpg",
      "/projects/axiom-research-group/screenshot-6.jpg",
    ],
    description:
      "Professional corporate website for a global market research & consulting firm. Serves clients across multiple countries with survey portals and case study showcases.",
    about:
      "The market research firm required a professional, high-trust corporate portal to present research case studies, client testimonials, and capture business survey leads.",
    designSection:
      "Designed and coded a fast, responsive corporate website using clean HTML5, CSS3, JavaScript, and a secure PHP contact & survey inquiry handler.",
    architecture:
      "Clean modular HTML5/CSS3 architecture with optimized asset loading, responsive grid layouts, and secure form validation.",
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
    title: "Shoq Ki Baat",
    subtitle: "Live Tournament Leaderboard System",
    category: "Live Tracking System",
    date: "2025",
    liveUrl: "https://shoqkibat.com",
    heroImage: "/projects/shoq-ki-baat-live-tracking/screenshot-1.jpg",
    bgGradient: "from-[#975a16] via-[#744210] to-[#1a202c]",
    gallery: [
      "/projects/shoq-ki-baat-live-tracking/screenshot-1.jpg",
      "/projects/shoq-ki-baat-live-tracking/screenshot-2.jpg",
      "/projects/shoq-ki-baat-live-tracking/screenshot-3.jpg",
      "/projects/shoq-ki-baat-live-tracking/screenshot-4.jpg",
      "/projects/shoq-ki-baat-live-tracking/screenshot-5.jpg",
      "/projects/shoq-ki-baat-live-tracking/screenshot-6.jpg",
    ],
    description:
      "Live pigeon race tracking & tournament management system with real-time leaderboards, pigeon stats, weather integration, and admin scoring panel.",
    about:
      "Managing large-scale bird flying tournaments manually on paper led to calculation errors and delayed result publishing for tournament participants.",
    designSection:
      "Automated tournament management by creating a custom PHP/MySQL database system that automatically computes race timings, rankings, and publishes real-time leaderboards.",
    architecture:
      "Custom PHP/MySQL database system with real-time scoring algorithms, admin control panels, and weather API integration.",
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
    title: "Autonomous AI Assistant",
    subtitle: "WhatsApp Automation & Localized LLM Agent",
    category: "AI & Automation",
    date: "May 2026",
    githubUrl: "https://github.com/basharathussain",
    heroImage: "/projects/autonomous-ai-assistant-openclaw/screenshot-1.jpg",
    bgGradient: "from-[#22543d] via-[#1c4532] to-[#1a202c]",
    gallery: [
      "/projects/autonomous-ai-assistant-openclaw/screenshot-1.jpg",
      "/projects/autonomous-ai-assistant-openclaw/screenshot-2.jpg",
      "/projects/autonomous-ai-assistant-openclaw/screenshot-3.jpg",
      "/projects/autonomous-ai-assistant-openclaw/screenshot-4.jpg",
      "/projects/autonomous-ai-assistant-openclaw/screenshot-5.jpg",
      "/projects/autonomous-ai-assistant-openclaw/screenshot-6.jpg",
    ],
    description:
      "Engineered and deployed a localized automated WhatsApp chat agent utilizing the open-source OpenClaw framework with zero-latency model endpoints.",
    about:
      "Small businesses require 24/7 automated customer responses and query handling without paying expensive per-token third-party cloud API costs.",
    designSection:
      "Integrated OpenClaw framework with local model endpoints and custom system prompt rules to parse incoming WhatsApp webhooks and dispatch intelligent replies.",
    architecture:
      "TypeScript/Node.js webhook architecture with localized open-source model endpoints and automated error recovery queues.",
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
    title: "BH Tech Hub Platform",
    subtitle: "Next.js SaaS Migration & Technical SEO",
    category: "Web Development & SEO",
    date: "2025 – Present",
    githubUrl: "https://github.com/basharathussain",
    liveUrl: "https://bhtechhub.com",
    heroImage: "/projects/bh-tech-hub-saas-migration/screenshot-1.jpg",
    bgGradient: "from-[#44337a] via-[#322659] to-[#1a202c]",
    gallery: [
      "/projects/bh-tech-hub-saas-migration/screenshot-1.jpg",
      "/projects/bh-tech-hub-saas-migration/screenshot-2.jpg",
      "/projects/bh-tech-hub-saas-migration/screenshot-3.jpg",
      "/projects/bh-tech-hub-saas-migration/screenshot-4.jpg",
      "/projects/bh-tech-hub-saas-migration/screenshot-5.jpg",
      "/projects/bh-tech-hub-saas-migration/screenshot-6.jpg",
    ],
    description:
      "Executing a full technical migration from WordPress to a custom-programmed SaaS architecture utilizing advanced server-side logic and database schemas.",
    about:
      "Traditional WordPress websites suffer from heavy plugin overhead, slow page load times, and poor mobile search engine indexation.",
    designSection:
      "Engineered a custom Next.js frontend connected to a high-speed database schema, configuring technical SEO via Search Console, Rank Math, and Ahrefs.",
    architecture:
      "Next.js App Router with React Server Components, TypeScript type safety, dynamic sitemap indexing, and Core Web Vitals optimization.",
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

  // Filter out current project to list "More Projects" at bottom
  const otherProjects = Object.values(PROJECTS_DATA).filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <main className="pt-28 sm:pt-32 pb-24 px-4 sm:px-6 max-w-5xl mx-auto min-h-screen">
      {/* Back Link */}
      <div className="mb-6">
        <a
          href="/work"
          className="text-xs font-mono font-semibold tracking-wider text-muted uppercase hover:text-fg transition-colors inline-flex items-center gap-2"
        >
          ← Back to Projects
        </a>
      </div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-7xl font-bold tracking-tight text-fg mb-6 leading-tight"
      >
        {project.title}
      </motion.h1>

      {/* Meta Row & Short Summary (Majd Reference Style) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-10 pb-8 border-b border-border">
        <div className="md:col-span-6 flex flex-wrap items-center gap-4 text-xs font-mono">
          <div>
            <span className="text-muted uppercase block text-[10px]">Category</span>
            <span className="font-bold text-fg">{project.category}</span>
          </div>
          <div className="h-6 w-px bg-border" />
          <div>
            <span className="text-muted uppercase block text-[10px]">Year</span>
            <span className="font-bold text-fg">{project.date}</span>
          </div>
          {project.liveUrl && (
            <>
              <div className="h-6 w-px bg-border" />
              <div>
                <span className="text-muted uppercase block text-[10px]">Live Site</span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-accent hover:underline inline-flex items-center gap-1"
                >
                  Visit ↗
                </a>
              </div>
            </>
          )}
        </div>

        <div className="md:col-span-6">
          <p className="text-muted text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Hero Presentation Banner Image (Smooth Motion, Borderless Gradient Backdrop) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        whileHover={{ scale: 1.01 }}
        className={`relative aspect-[16/10] w-full rounded-[24px] sm:rounded-[36px] bg-gradient-to-br ${project.bgGradient} p-3 sm:p-5 overflow-hidden shadow-2xl mb-16 cursor-pointer`}
        onClick={() => setSelectedImage(project.heroImage)}
      >
        <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-black/40 shadow-2xl">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.srcset = "/projects/yarana/screenshot-1.jpg";
            }}
          />
        </div>
      </motion.div>

      {/* Narrative Section 1: About the Project */}
      <section className="mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-fg mb-4">About the Project</h2>
        <p className="text-muted text-base sm:text-lg leading-relaxed max-w-3xl">
          {project.about}
        </p>
      </section>

      {/* Narrative Section 2: Designing for Impact, Built for Flexibility */}
      <section className="mb-14 pt-10 border-t border-border/60">
        <h2 className="text-2xl sm:text-3xl font-bold text-fg mb-4">
          Engineering Approach & Performance
        </h2>
        <p className="text-muted text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
          {project.designSection}
        </p>

        {/* 2-Column Side-by-Side Screenshots Grid (Majd Reference Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          {project.gallery.slice(0, 2).map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(img)}
              className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border bg-bg-soft cursor-pointer shadow-md group"
            >
              <Image
                src={img}
                alt={`${project.title} Preview ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.srcset = "/projects/yarana/screenshot-1.jpg";
                }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono font-bold">
                🔍 Click to Expand
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative Section 3: System Architecture */}
      <section className="mb-14 pt-10 border-t border-border/60">
        <h2 className="text-2xl sm:text-3xl font-bold text-fg mb-4">System Architecture & Tech Stack</h2>
        <p className="text-muted text-base sm:text-lg leading-relaxed max-w-3xl mb-6">
          {project.architecture}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-4 py-2 rounded-xl border border-border bg-bg-soft text-fg"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Full UI Screenshots Showcase Grid */}
      <section className="mb-20 pt-10 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold text-fg mb-8">Full UI Screenshots Showcase</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {project.gallery.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(img)}
              className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border bg-bg-soft cursor-pointer shadow-md group"
            >
              <Image
                src={img}
                alt={`${project.title} Screenshot ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.srcset = "/projects/yarana/screenshot-1.jpg";
                }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono font-bold">
                🔍 Click to Expand
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* "More Projects" Navigation Section (Majd Reference Style) */}
      <section className="pt-14 border-t border-border">
        <h2 className="text-3xl font-bold text-fg mb-8">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((other) => (
            <a
              key={other.slug}
              href={`/work/${other.slug}`}
              className="group block cursor-pointer"
            >
              <div
                className={`relative aspect-[16/10] w-full rounded-3xl bg-gradient-to-br ${other.bgGradient} p-4 overflow-hidden shadow-lg border border-border/40 transition-all duration-500 group-hover:shadow-2xl`}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black shadow-xl">
                  <Image
                    src={other.heroImage}
                    alt={other.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.srcset = "/projects/yarana/screenshot-1.jpg";
                    }}
                  />
                </div>
              </div>
              <div className="mt-3 px-1">
                <h3 className="text-xl font-bold text-fg group-hover:text-accent transition-colors leading-tight">
                  {other.title}
                </h3>
                <p className="text-muted text-xs font-medium mt-1">{other.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Lightbox Expand Fullscreen Modal */}
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
              className="relative max-w-6xl w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Expanded Screenshot"
                fill
                sizes="100vw"
                className="object-contain"
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
    </main>
  );
}
