import ServiceCarousel from "./ServiceCarousel";

export default function Services() {
  return (
    <section id="services" className="px-6 py-14 sm:py-28 border-t border-border overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs sm:text-sm tracking-widest text-muted uppercase mb-3">
          Services
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-xl mb-8 sm:mb-14">
          What I can help you build
        </h2>

        <ServiceCarousel />
      </div>
    </section>
  );
}
