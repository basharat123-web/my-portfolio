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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://formsubmit.co/ajax/basharat81253@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.project,
          _subject: `New Portfolio Contact Form Inquiry from ${formData.name}`,
          _template: "table",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", project: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        // Fallback to mailto link
        window.location.href = `mailto:basharat81253@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0AMessage: ${encodeURIComponent(formData.project)}`;
        setSubmitted(true);
        setFormData({ name: "", email: "", project: "" });
      }
    } catch (err) {
      // Fallback on network error
      window.location.href = `mailto:basharat81253@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0AMessage: ${encodeURIComponent(formData.project)}`;
      setSubmitted(true);
      setFormData({ name: "", email: "", project: "" });
    } finally {
      setLoading(false);
    }
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
    <section id="contact" className="px-6 py-12 sm:py-20 md:py-28 border-t border-border">
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
            <p className="text-muted text-base sm:text-lg max-w-md leading-relaxed mb-8">
              Have a full-stack web application, custom PHP/Next.js system, or AI integration in mind? Get in touch directly.
            </p>

            <div className="space-y-4 mb-8 text-sm sm:text-base text-fg/90">
              <div className="flex items-center gap-3">
                <span className="font-mono text-accent font-bold">EMAIL:</span>
                <a href="mailto:basharat81253@gmail.com" className="hover:underline font-medium">
                  basharat81253@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-accent font-bold">PHONE / WHATSAPP:</span>
                <a
                  href="https://wa.me/923139986112?text=Hello%20Basharat,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium hover:underline text-fg hover:text-[#25D366] transition-colors"
                >
                  <span>0313-9986112 (+92 313 9986112)</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-[#25D366]/15 text-[#25D366] px-2 py-0.5 rounded-full border border-[#25D366]/30">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>WhatsApp</span>
                  </span>
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted text-xs sm:text-sm">
                <span className="font-mono text-accent font-bold">LOCATION:</span>
                <span>P/o Jokalian, Tehsil Phalia, M.B.Din, Punjab, Pakistan 🇵🇰</span>
              </div>
            </div>
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


