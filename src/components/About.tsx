"use client";

import { motion } from "framer-motion";
import ScrollRevealText from "./ScrollRevealText";
import HoverRoll from "./HoverRoll";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="px-6 py-14 sm:py-28 md:py-36 border-t border-border">
      <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-10 md:gap-8 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-4xl sm:text-5xl font-semibold mb-8">Hey!</p>
          <p className="text-muted max-w-xs leading-relaxed">
            I&apos;m <strong className="text-fg font-semibold">Basharat Hussain</strong>, Founder of BH Tech Hub & B&S Solution Network. I specialize in full-stack web development, graphic design, and AI integrations.
          </p>
        </motion.div>

        <div
          id="about-photo-anchor"
          className="w-full max-w-xs mx-auto aspect-3/4 rounded-xl"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <ScrollRevealText
            className="text-fg mb-6"
            text="Versatile technology professional with robust expertise in full-stack web development, MERN stack, Next.js, and systems optimization."
          />
          <ScrollRevealText
            className="text-muted mb-8"
            text="Proven track record in transitioning traditional CMS platforms to modern component-based SaaS architectures, technical SEO management, and graphic illustration."
          />
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
          >
            <HoverRoll>View Projects</HoverRoll>
            <span aria-hidden="true">&#8599;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

