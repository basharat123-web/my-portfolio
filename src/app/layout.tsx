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
  title: "Basharat Hussain — Full-Stack Web Developer & Software Engineer",
  description: "Full-Stack Web Developer and Software Engineer specializing in Next.js, React, TypeScript, Node.js, MERN stack, AI automation, and scalable SaaS architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full antialiased`}>
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
