"use client";

import { motion } from "framer-motion";
import HoverRoll, { HoverRollIcon } from "./HoverRoll";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      name: "X (Twitter)",
      href: "https://x.com",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current stroke-[2]"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  const navColumns = [
    {
      title: "PRODUCT",
      links: [
        { label: "Components", href: "/documentation" },
        { label: "Templates", href: "/documentation" },
        { label: "Pricing", href: "/support" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { label: "Documentation", href: "/documentation" },
        { label: "Support", href: "/support" },
        { label: "Changelog", href: "/changelog" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-border overflow-hidden bg-bg text-fg">
      {/* Main Footer Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-10 sm:pt-16 pb-8 sm:pb-12">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-16">
          {/* Left Column: Brand & Description */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-fg mb-4">
                Basharat Hussain
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed max-w-md">
                Full-stack web developer and software engineer.
                Building modern Next.js SaaS platforms, AI automation agents, and scalable web architectures.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#e3ded3] hover:bg-[#d7d1c3] text-[#131311] flex items-center justify-center transition-colors shadow-sm overflow-hidden relative"
                  >
                    <HoverRollIcon>{social.icon}</HoverRollIcon>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Columns: Navigation Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {navColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] font-semibold tracking-wider text-muted/70 uppercase mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm font-medium text-fg/80 hover:text-fg transition-colors"
                      >
                        <HoverRoll>{link.label}</HoverRoll>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar Separator */}
        <div className="border-t border-border/60 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted relative z-20">
          {/* Left: Copyright */}
          <p>© {new Date().getFullYear()} Basharat Hussain. All rights reserved.</p>

          {/* Right: Policy Links & Back to Top */}
          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-fg transition-colors">
              <HoverRoll>Privacy Policy</HoverRoll>
            </a>
            <a href="/terms" className="hover:text-fg transition-colors">
              <HoverRoll>Terms of Service</HoverRoll>
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-fg transition-colors flex items-center gap-1 cursor-pointer font-medium"
            >
              <span>↑</span>
              <HoverRoll>Back to top</HoverRoll>
            </button>
          </div>
        </div>
      </div>

      {/* Giant Background Watermark Text: "BASHARAT" */}
      <div className="absolute bottom-[-2vw] left-0 right-0 w-full flex justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="text-[15vw] leading-none font-black text-fg/[0.04] tracking-tighter whitespace-nowrap">
          BASHARAT
        </span>
      </div>
    </footer>
  );
}



