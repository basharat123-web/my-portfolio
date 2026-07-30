"use client";

import { use } from "react";
import { motion } from "framer-motion";
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
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  features: string[];
}

const PROJECTS_DATA: Record<string, ProjectDetail> = {
  "autonomous-ai-assistant-openclaw": {
    slug: "autonomous-ai-assistant-openclaw",
    title: "Autonomous AI Assistant (OpenClaw)",
    subtitle: "Localized WhatsApp Automated AI Agent",
    category: "AI & AUTOMATION",
    date: "May 2026",
    githubUrl: "https://github.com/basharathussain",
    liveUrl: "https://bhtechhub.com",
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
  "windows-video-downloader-utility": {
    slug: "windows-video-downloader-utility",
    title: "Windows Video Downloader Utility",
    subtitle: "Desktop Media Downloader App",
    category: "DESKTOP APPLICATION",
    date: "June 2026",
    githubUrl: "https://github.com/basharathussain",
    description:
      "Built and compiled a fully functional Windows desktop utility application designed to execute single-click video downloads. Structured an independent application pipeline from conception to final binary compilation.",
    problem:
      "Users often encounter ad-heavy online downloader websites with intrusive popups and throttled download speeds.",
    solution:
      "Created a clean, standalone Windows desktop application featuring multi-threaded stream fetching, custom GUI, and native Windows desktop notifications.",
    stack: ["Windows Utility", "Desktop App", "Pipeline Architecture", "Tooling", "C++ / Python"],
    features: [
      "Single-click multi-threaded video stream fetcher",
      "Custom standalone GUI with desktop notifications",
      "Optimized independent pipeline from conception to deployment",
      "Zero popups or third-party ad tracking",
    ],
  },
  "mern-stack-nextjs-architecture": {
    slug: "mern-stack-nextjs-architecture",
    title: "MERN Stack & Next.js SaaS Architecture",
    subtitle: "Full-Stack Build & Type System Curriculum",
    category: "FULL-STACK SAAS",
    date: "July 2026 – Present",
    githubUrl: "https://github.com/basharathussain",
    liveUrl: "https://bhtechhub.com",
    description:
      "Executing an intensive, structured 90-day learning curriculum focused on advanced MERN stack development, TypeScript type systems, Next.js App Router, and Tailwind CSS design. Documenting daily build logs and screen recordings.",
    problem:
      "Legacy monolithic web applications face scaling issues, slow page transitions, and complex state management across frontend and backend layers.",
    solution:
      "Leveraging Next.js React Server Components alongside Express REST API endpoints and strict TypeScript interfaces to guarantee end-to-end type safety and high performance.",
    stack: ["Next.js App Router", "TypeScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    features: [
      "Full Next.js App Router & Server Components optimization",
      "Strict TypeScript interface definitions & type safety",
      "Scalable MERN backend with MongoDB & Express API endpoints",
      "Automated build checks and production bundles",
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
        className="mb-14 border-b border-border pb-10"
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
