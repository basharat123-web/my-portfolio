import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Basharat Hussain — Full-Stack Developer & Graphic Designer",
  description: "Versatile technology professional specializing in full-stack web development, Next.js, MERN stack, graphic design, SEO, and AI integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-bg text-fg font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
