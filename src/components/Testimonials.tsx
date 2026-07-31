"use client";

import { motion } from "framer-motion";
import DocumentCard from "./DocumentCard";

const TESTIMONIALS = [
  {
    quote: "Working remotely with Basharat was seamless. He delivered a flawless real-time race tracking system with live weather and social integration that our club members in Greece absolutely love.",
    name: "Yarana Nal Baharan",
    role: "International Client (Greece)",
    date: "JANUARY 2025",
    folderColor: "from-[#1a365d] to-[#1e3a8a]",
    accentColor: "bg-[#172554]",
  },
  {
    quote: "We struggled with bloated off-the-shelf themes until Basharat built our custom Urdu news portal. The RTL typography is perfect, and the live breaking news ticker handles our high traffic effortlessly.",
    name: "ABS24 News Network",
    role: "Editorial Team",
    date: "MARCH 2025",
    folderColor: "from-[#742a2a] to-[#9b2c2c]",
    accentColor: "bg-[#450a0a]",
  },
  {
    quote: "Managing our massive flying tournaments used to be a nightmare of manual calculations. Basharat's automated tracking system completely transformed our operations, providing instant, error-free leaderboards.",
    name: "Shoq Ki Baat",
    role: "Tournament Organizers",
    date: "FEBRUARY 2025",
    folderColor: "from-[#975a16] to-[#744210]",
    accentColor: "bg-[#451a03]",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-14 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold tracking-widest text-muted uppercase mb-3">
          TESTIMONIALS & CASE FILES
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-xl mb-4">
          What people say
        </h2>
        <p className="text-muted text-sm sm:text-base max-w-md mb-8 sm:mb-14">
          Interactive document folders containing client feedback and verified project reports. Hover or click a file to open.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} variants={item}>
              <DocumentCard
                quote={t.quote}
                name={t.name}
                role={t.role}
                date={t.date}
                folderColor={t.folderColor}
                accentColor={t.accentColor}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

