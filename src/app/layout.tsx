import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SoundInitializer from "@/components/SoundInitializer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://basharat-hussain.dev"),
  title: {
    default: "Basharat Hussain — Full-Stack Web Developer & Software Engineer",
    template: "%s | Basharat Hussain",
  },
  description:
    "Official Portfolio of Basharat Hussain — Full-Stack Web Developer and Software Engineer in Punjab, Pakistan. Specializing in Next.js App Router, React, TypeScript, Node.js, MERN stack, and AI automation.",
  keywords: [
    "Basharat Hussain",
    "Basharat Hussain Web Developer",
    "Basharat Hussain Software Engineer",
    "Basharat Hussain Portfolio",
    "Basharat Hussain Pakistan",
    "Full-Stack Web Developer Pakistan",
    "Next.js Developer Pakistan",
    "MERN Stack Developer",
    "React TypeScript Engineer",
    "OpenClaw AI Integration",
  ],
  authors: [{ name: "Basharat Hussain", url: "https://www.linkedin.com/in/basharat-hussain-pk" }],
  creator: "Basharat Hussain",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://basharat-hussain.dev",
    title: "Basharat Hussain — Full-Stack Web Developer & Software Engineer",
    description:
      "Full-Stack Web Developer specializing in Next.js, React, TypeScript, MERN stack, and AI automation.",
    siteName: "Basharat Hussain Portfolio",
    images: [
      {
        url: "/basharat.png",
        width: 1200,
        height: 630,
        alt: "Basharat Hussain — Full-Stack Web Developer",
      },
    ],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Basharat Hussain",
  url: "https://basharat-hussain.dev",
  image: "https://basharat-hussain.dev/basharat.png",
  sameAs: [
    "https://www.linkedin.com/in/basharat-hussain-pk",
    "https://github.com/basharathussain",
    "https://x.com",
  ],
  jobTitle: "Full-Stack Web Developer & Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance & Software Consulting",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Phalia, Mandi Bahauddin",
    addressRegion: "Punjab",
    addressCountry: "Pakistan",
  },
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PHP",
    "MySQL",
    "AI Automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-bg text-fg font-sans">
        <SoundInitializer />
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
