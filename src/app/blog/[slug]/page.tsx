"use client";

import { use } from "react";
import { motion } from "framer-motion";
import HoverRoll from "@/components/HoverRoll";
import { notFound } from "next/navigation";

interface ArticleDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
    }[];
    takeaway: string;
  };
}

const ARTICLES_DATA: Record<string, ArticleDetail> = {
  "migrating-from-wordpress-to-custom-nextjs-saas": {
    slug: "migrating-from-wordpress-to-custom-nextjs-saas",
    title: "Migrating from WordPress to Custom Next.js SaaS Architecture",
    subtitle:
      "Why component-based Next.js App Router architectures outperform traditional CMS platforms in speed, SEO indexation, and scalability.",
    category: "WEB DEVELOPMENT & PERFORMANCE",
    date: "July 2026",
    readTime: "5 min read",
    author: "Basharat Hussain",
    content: {
      intro:
        "Traditional monolithic Content Management Systems (CMS) like WordPress served as the backbone of the web for decades. However, as web standards evolved towards instantaneous page transitions, strict TypeScript type safety, and core web vitals optimization, traditional plugin-heavy WordPress setups began showing their limitations.",
      sections: [
        {
          heading: "1. The Hidden Costs of Monolithic Plugin Overhead",
          body: "In a standard WordPress ecosystem, adding functionality—ranging from SEO optimization to analytics tracking—requires third-party plugins. Over time, plugin bloat increases DOM node depth, introduces blocking JavaScript execution loops, and slows initial server response time (TTFB). By migrating to a custom Next.js App Router framework, every component is compiled down to lightweight, optimized static HTML and server-rendered chunks.",
        },
        {
          heading: "2. Next.js React Server Components & Automatic Static Optimization",
          body: "Next.js leverages React Server Components (RSC) to render pages on the server close to the database edge. This eliminates client-side JavaScript execution overhead for static text and layout components, resulting in 95+ Google PageSpeed scores out of the box. Pages load instantly without layout shifts (CLS).",
        },
        {
          heading: "3. Technical SEO Management & Automated Indexation",
          body: "Using custom Next.js metadata API combined with automated XML sitemap generation guarantees that search engine bots crawl clean semantic HTML5 markup. Connecting Search Console APIs and tracking rank positions via Ahrefs yields faster indexing and higher domain authority compared to heavy PHP templates.",
        },
      ],
      takeaway:
        "Migrating from WordPress to Next.js doesn't mean abandoning content flexibility—it means decoupling the frontend presentation layer to deliver blazing fast, secure, and scalable web experiences.",
    },
  },
  "building-an-autonomous-whatsapp-ai-agent-with-openclaw": {
    slug: "building-an-autonomous-whatsapp-ai-agent-with-openclaw",
    title: "Building an Autonomous WhatsApp AI Agent with OpenClaw",
    subtitle:
      "Configuring localized model endpoints, environment parameters, and persona rules for localized automated chat agents.",
    category: "AI & AUTOMATION",
    date: "May 2026",
    readTime: "7 min read",
    author: "Basharat Hussain",
    content: {
      intro:
        "Automating customer interactions over WhatsApp requires high reliability, low latency, and zero token-cost overhead for growing businesses. Leveraging open-source LLM frameworks like OpenClaw allows developers to connect localized model endpoints directly to WhatsApp webhooks.",
      sections: [
        {
          heading: "1. Localized Model Endpoints vs Cloud APIs",
          body: "Relying strictly on third-party cloud API tokens for 24/7 automated customer support can become prohibitively expensive at scale. By deploying localized model endpoints running quantized open LLMs on local infrastructure, response latency is kept under 500ms while token costs are eliminated entirely.",
        },
        {
          heading: "2. OpenClaw Environment & Persona Configuration",
          body: "Configuring OpenClaw requires defining system prompt parameters, fallback message queues, and context window limits. Prompt engineering rules ensure the virtual assistant maintains a polite, accurate, and brand-aligned persona when answering customer inquiries.",
        },
        {
          heading: "3. Webhook Dispatchers & Real-Time Event Handlers",
          body: "Connecting WhatsApp webhooks to Node.js / TypeScript event listeners enables automatic message parsing, state management, and instant response dispatching. Robust retry logic ensures zero dropped messages during traffic surges.",
        },
      ],
      takeaway:
        "Autonomous AI agents connected to messaging webhooks represent the future of localized business automation—providing 24/7 intelligent customer engagement with full data privacy.",
    },
  },
  "building-scalable-mern-stack-apps-with-typescript": {
    slug: "building-scalable-mern-stack-apps-with-typescript",
    title: "Building Scalable MERN Stack Applications with TypeScript Type Safety",
    subtitle:
      "How end-to-end interface contracts between React, Node.js, Express, and MongoDB eliminate runtime crashes and accelerate development.",
    category: "FULL-STACK ENGINEERING",
    date: "April 2026",
    readTime: "6 min read",
    author: "Basharat Hussain",
    content: {
      intro:
        "JavaScript's dynamic typing offers rapid prototyping, but as full-stack MERN (MongoDB, Express, React, Node) applications grow, missing properties and undefined API payloads lead to silent runtime bugs. Integrating TypeScript across both client and server layers provides absolute compile-time guarantees.",
      sections: [
        {
          heading: "1. Unified Type Definitions Across Frontend and Backend",
          body: "By sharing TypeScript interface contracts between Express REST controllers and React React components, any backend database schema change is immediately flagged by the compiler on the frontend before code is ever committed.",
        },
        {
          heading: "2. Mongoose Schema Validation with TypeScript Generics",
          body: "Typing Mongoose models using TypeScript interfaces prevents accidental document property typos, guarantees strict schema field enforcement, and provides auto-complete IntelliSense throughout backend route handlers.",
        },
        {
          heading: "3. Modular REST Controller & Service Layer Separation",
          body: "Structuring Express applications into decoupled service layers, controllers, and middleware validators ensures clean code maintainability, simplified unit testing, and effortless API expansion.",
        },
      ],
      takeaway:
        "Strict TypeScript type safety across the entire MERN stack transforms complex web development from reactive debugging into proactive software engineering.",
    },
  },
};

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const article = ARTICLES_DATA[resolvedParams.slug];

  if (!article) {
    notFound();
  }

  return (
    <main className="pt-32 pb-28 px-6 max-w-4xl mx-auto min-h-screen">
      {/* Back Link */}
      <div className="mb-8">
        <a
          href="/blog"
          className="text-xs font-mono font-semibold tracking-wider text-muted uppercase hover:text-fg transition-colors inline-flex items-center gap-2"
        >
          ← Back to Articles
        </a>
      </div>

      {/* Article Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 border-b border-border pb-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
            {article.category}
          </span>
          <span className="text-xs font-mono text-muted">• {article.date}</span>
          <span className="text-xs font-mono text-muted">• {article.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-fg mb-4 leading-tight">
          {article.title}
        </h1>

        <p className="text-muted text-base sm:text-lg font-medium leading-relaxed max-w-3xl">
          {article.subtitle}
        </p>

        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border/60 text-xs font-mono text-fg">
          <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center font-bold text-accent">
            BH
          </div>
          <div>
            <p className="font-bold text-fg">{article.author}</p>
            <p className="text-muted text-[11px]">Full-Stack Developer & Software Engineer</p>
          </div>
        </div>
      </motion.div>

      {/* Article Body */}
      <article className="space-y-8 text-fg/90 text-base sm:text-lg leading-relaxed">
        <p className="text-lg sm:text-xl font-medium text-fg border-l-2 border-accent pl-4 py-1 italic">
          {article.content.intro}
        </p>

        {article.content.sections.map((sec, i) => (
          <section key={i} className="space-y-3 pt-6 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-fg">{sec.heading}</h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed">{sec.body}</p>
          </section>
        ))}

        {/* Takeaway Box */}
        <div className="mt-12 rounded-3xl border border-border bg-bg-soft p-6 sm:p-8">
          <h3 className="text-sm font-mono font-bold tracking-widest text-accent uppercase mb-2">
            KEY TAKEAWAY
          </h3>
          <p className="text-fg font-medium text-base sm:text-lg leading-relaxed">
            {article.content.takeaway}
          </p>
        </div>
      </article>

      {/* Back CTA */}
      <div className="mt-16 text-center pt-10 border-t border-border">
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-full bg-fg text-bg px-8 py-4 text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <HoverRoll>Have a question or project? Let’s Talk</HoverRoll>
        </a>
      </div>
    </main>
  );
}
