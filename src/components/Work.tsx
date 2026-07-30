"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HoverRoll from "./HoverRoll";

const PROJECTS = [
  {
    slug: "yarana-nal-baharan-pigeon-club",
    title: "Yarana Nal Baharan",
    subtitle: "Real-Time Pigeon Race Tracking • Greece 🇬🇷",
    image: "/projects/yarana/screenshot-1.jpg",
    bgGradient: "from-[#1a365d] via-[#2a4365] to-[#1a202c]",
    url: "https://yarannalbaharan.com",
  },
  {
    slug: "abs24-news-portal",
    title: "ABS24 News Network",
    subtitle: "Custom PHP Urdu News Portal & Live Ticker",
    image: "/projects/abs24-news-portal/screenshot-1.jpg",
    bgGradient: "from-[#742a2a] via-[#9b2c2c] to-[#1a202c]",
    url: "https://abs24news.com",
  },
  {
    slug: "axiom-research-group",
    title: "Axiom Research Group",
    subtitle: "Corporate Market Analytics & Survey Portal",
    image: "/projects/yarana/screenshot-3.jpg",
    bgGradient: "from-[#2b6cb0] via-[#2c5282] to-[#1a202c]",
    url: "https://www.axiomresearchgroup.site",
  },
  {
    slug: "shoq-ki-baat-live-tracking",
    title: "Shoq Ki Baat",
    subtitle: "Live Tournament Leaderboard System",
    image: "/projects/yarana/screenshot-4.jpg",
    bgGradient: "from-[#975a16] via-[#744210] to-[#1a202c]",
    url: "https://shoqkibat.com",
  },
  {
    slug: "autonomous-ai-assistant-openclaw",
    title: "Autonomous AI Assistant",
    subtitle: "WhatsApp Automation & Localized LLM Agent",
    image: "/projects/yarana/screenshot-5.jpg",
    bgGradient: "from-[#22543d] via-[#1c4532] to-[#1a202c]",
  },
  {
    slug: "bh-tech-hub-saas-migration",
    title: "BH Tech Hub Platform",
    subtitle: "Next.js SaaS Migration & Technical SEO",
    image: "/projects/yarana/screenshot-6.jpg",
    bgGradient: "from-[#44337a] via-[#322659] to-[#1a202c]",
    url: "https://bhtechhub.com",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] as const },
  },
};

export default function Work() {
  return (
    <section id="work" className="px-4 sm:px-6 py-16 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10 sm:mb-14">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-fg"
            >
              Featured Projects
            </motion.h2>
          </div>
          <motion.a
            href="/work"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-full border border-border bg-bg-soft px-5 py-2.5 text-xs font-semibold text-fg hover:border-fg transition-all shadow-sm flex items-center gap-1.5"
          >
            <HoverRoll>View All Work ↗</HoverRoll>
          </motion.a>
        </div>

        {/* 2-Column Clean Seamless Motion Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10"
        >
          {PROJECTS.map((project) => (
            <motion.a
              key={project.slug}
              href={`/work/${project.slug}`}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group block cursor-pointer"
            >
              {/* Borderless Smooth Gradient Backdrop & Image Container */}
              <div
                className={`relative aspect-[16/10] w-full rounded-[24px] sm:rounded-[32px] bg-gradient-to-br ${project.bgGradient} p-3 sm:p-5 overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl`}
              >
                {/* Smooth Motion Image Container (No Heavy Borders!) */}
                <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-black/40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-500" />
                </div>
              </div>

              {/* Title & Subtitle Below Image */}
              <div className="mt-4 px-1">
                <h3 className="text-xl sm:text-2xl font-bold text-fg group-hover:text-accent transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-muted text-xs sm:text-sm font-medium mt-1">
                  {project.subtitle}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
