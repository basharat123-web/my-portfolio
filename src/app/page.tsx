import Hero from "@/components/Hero";
import About from "@/components/About";
import MorphingPortrait from "@/components/MorphingPortrait";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <div id="scroll-morph-container" className="relative">
        <Hero />
        <About />
        <MorphingPortrait />
      </div>
      <Services />
      <Work />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  );
}

