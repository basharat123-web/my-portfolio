"use client";

import { motion } from "framer-motion";
import HoverRoll from "@/components/HoverRoll";

const ALL_PROJECTS = [
  {
    slug: "autonomous-ai-assistant-openclaw",
    title: "Autonomous AI Assistant (OpenClaw)",
    subtitle: "WhatsApp Automated AI Agent",
    date: "May 2026",
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
    slug: "windows-video-downloader-utility",
    title: "Windows Video Downloader Utility",
    subtitle: "Desktop Media Downloader App",
    date: "June 2026",
    description:
      "Built and compiled a fully functional Windows desktop utility application designed to execute single-click video downloads. Structured an independent application pipeline from conception to final binary compilation.",
    details: [
      "Single-click multi-threaded video stream fetcher",
      "Custom standalone GUI with desktop notifications",
      "Optimized independent pipeline from conception to deployment",
    ],
    tags: ["Windows Utility", "Desktop App", "Pipeline Architecture", "Tooling"],
  },
  {
    slug: "mern-stack-nextjs-architecture",
    title: "MERN Stack & Next.js SaaS Architecture",
    subtitle: "Full-Stack Build & Type System Curriculum",
    date: "July 2026 – Present",
    description:
      "Executing an intensive, structured 90-day learning curriculum focused on advanced MERN stack development, TypeScript type systems, Next.js App Router, and Tailwind CSS design. Documenting daily build logs and screen recordings.",
    details: [
      "Full Next.js App Router & Server Components optimization",
      "Strict TypeScript interface definitions & type safety",
      "Scalable MERN backend with MongoDB & Express API endpoints",
    ],
    tags: ["Next.js", "MERN Stack", "TypeScript", "App Router", "Tailwind CSS"],
  },
  {
    slug: "bh-tech-hub-saas-migration",
    title: "BH Tech Hub & B&S Solution Network",
    subtitle: "Custom SaaS Platform Migration",
    date: "2025 – Present",
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
            className="group flex flex-col justify-between rounded-3xl border border-border bg-bg-soft p-8 shadow-sm hover:shadow-xl transition-all duration-300 block"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted/80">
                  {project.date}
                </span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-border/60 text-fg">
                  {project.subtitle}
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

            {/* Tags */}
            <div className="pt-4 border-t border-border/60 flex flex-wrap gap-2">
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

