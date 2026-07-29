"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HoverRoll, { HoverRollIcon } from "./HoverRoll";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", project: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
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

  return (
    <section id="contact" className="px-6 py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
        {/* Left Side: Content & Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-between"
        >
          <div>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-fg leading-none mb-6">
              Let’s talk.
            </h2>
            <p className="text-muted text-base sm:text-lg max-w-md leading-relaxed">
              Have a web development, graphic design, or AI project in mind? Fill out the form, and I&apos;ll get back to you soon.
            </p>
          </div>

          {/* Social Icons at Bottom Left */}
          <div className="flex items-center gap-3 mt-12 lg:mt-0 pt-6">
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
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#e3ded3] hover:bg-[#d7d1c3] text-[#131311] flex items-center justify-center transition-colors shadow-sm overflow-hidden relative"
              >
                <HoverRollIcon>{social.icon}</HoverRollIcon>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Dark Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="bg-[#0e0e0e] text-white p-6 sm:p-8 md:p-10 rounded-[28px] shadow-2xl border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-[#181818] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-white text-sm sm:text-base placeholder:text-gray-500 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-[#181818] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-white text-sm sm:text-base placeholder:text-gray-500 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all"
                />
              </div>

              {/* Your Project Field */}
              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Project
                </label>
                <textarea
                  id="project"
                  required
                  rows={4}
                  placeholder="Tell us about your project"
                  value={formData.project}
                  onChange={(e) =>
                    setFormData({ ...formData, project: e.target.value })
                  }
                  className="w-full bg-[#181818] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-white text-sm sm:text-base placeholder:text-gray-500 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading || submitted}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#ece8df] hover:bg-white text-[#0e0e0e] font-semibold py-3.5 sm:py-4 rounded-xl text-sm sm:text-base transition-colors duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-80"
              >
                {loading ? (
                  <span className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent" />
                ) : submitted ? (
                  "Message Sent! ✓"
                ) : (
                  <HoverRoll>Submit</HoverRoll>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


