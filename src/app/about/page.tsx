"use client";

import { motion } from "framer-motion";
import HoverRoll from "@/components/HoverRoll";

const EXPERIENCE = [
  {
    role: "Founder & Lead Administrator",
    company: "BH Tech Hub & B&S Solution Network (Blog)",
    period: "Present",
    description:
      "Managing comprehensive operations, content strategy, and technical infrastructure. Executing a full technical migration from WordPress to a fully custom-programmed SaaS architecture utilizing advanced server-side logic and database schemas. Overseeing technical SEO management using Google Search Console, Rank Math, and Ahrefs.",
  },
  {
    role: "Technician & Graphic Designer",
    company: "AR Graphics",
    period: "Past",
    description:
      "Designed professional marketing materials and custom print formats using vector and pixel platforms. Managed vector troubleshooting, font corruption resolutions, and canvas setups for commercial print layouts via CorelDRAW and Adobe Photoshop. Provided local technical support and drive diagnostics.",
  },
  {
    role: "Multimedia Streamer & Content Creator",
    company: "XD INVOKER (YouTube)",
    period: "Oct 2025 – Present",
    description:
      "Maintaining an active broadcasting presence across video platforms and specialized community servers for simulation gaming. Configuring custom keybind remapping files, streaming metadata asset configurations, title templates, and tags.",
  },
];

const SKILLS = [
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "MySQL", "MERN Stack", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Graphic Design",
    skills: ["Adobe Photoshop", "CorelDRAW", "UI/UX Layouts", "Commercial Print Formatting", "Vector Illustration"],
  },
  {
    category: "SEO & Analytics",
    skills: ["Google Search Console", "Rank Math", "Ahrefs", "Web Traffic Analysis", "Sitemap Structuring"],
  },
  {
    category: "Hardware & Systems",
    skills: ["Local Environment Setup", "Diagnostics", "System File Recovery", "Industrial Power Systems", "Solar Inverter Configuration"],
  },
];

export default function AboutPage() {
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
          ABOUT & BACKGROUND
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-fg mb-4">
          Basharat Hussain
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-3xl leading-relaxed">
          Full-Stack Web Developer, Graphic Designer, and Technical Blogger. Founder of BH Tech Hub and B&S Solution Network platform.
        </p>
      </motion.div>

      {/* Grid: Photo & Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md aspect-3/4 rounded-3xl overflow-hidden shadow-2xl border border-border">
            <img
              src="/basharat.png"
              alt="Basharat Hussain"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 text-muted text-base sm:text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-fg">
            Professional Summary
          </h2>
          <p>
            Versatile technology professional with robust expertise in full-stack web development, digital graphic illustration, and systems optimization. Founder of BH Tech Hub and the B&S Solution Network blog platform.
          </p>
          <p>
            Proven track record in transitioning from traditional CMS platforms to modern component-based SaaS architectures using MERN stack and Next.js. Adept at AI integrations, SEO management, and computer hardware diagnostics.
          </p>
          <div className="pt-4 space-y-3">
            <div className="rounded-2xl border border-border bg-bg-soft p-5">
              <span className="text-xs font-mono font-bold text-accent">CERTIFICATION // PSDI</span>
              <p className="text-base font-bold text-fg mt-1">Comprehensive Web Development Bootcamp (2025)</p>
              <p className="text-xs text-muted">PSDI — Portal.PSDI.PK Initiative • Verification ID: <span className="font-mono text-fg font-semibold">45be378283</span></p>
              <p className="text-xs text-muted/80 mt-1">Signed by: Major Mustafa Zaidi, Director PSDI</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border bg-bg-soft p-4">
                <span className="text-xs font-mono font-bold text-accent">EDUCATION // 2023</span>
                <p className="text-sm font-bold text-fg mt-1">ICS — Computer Science</p>
                <p className="text-xs text-muted">Punjab College Phalia | BISE Gujranwala</p>
              </div>
              <div className="rounded-2xl border border-border bg-bg-soft p-4">
                <span className="text-xs font-mono font-bold text-accent">EDUCATION // 2021</span>
                <p className="text-sm font-bold text-fg mt-1">MATRIC — Grade A+</p>
                <p className="text-xs text-muted">Govt. High School Jokalian | BISE Gujranwala</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-fg mb-8">Work Experience</h2>
        <div className="space-y-6">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-border bg-bg-soft p-8 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-fg">{exp.role}</h3>
                  <p className="text-sm font-medium text-accent">{exp.company}</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-border/60 text-fg w-fit">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Skills Matrix */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-fg mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SKILLS.map((item) => (
            <div key={item.category} className="rounded-3xl border border-border bg-bg-soft p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-fg mb-4">
                {item.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1.5 rounded-xl border border-border bg-bg text-fg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
