import ServiceCarousel from "./ServiceCarousel";

export default function Services() {
  return (
    <section id="services" className="px-6 py-28 border-t border-border overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm tracking-widest text-muted uppercase mb-4">
          Services
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl mb-14">
          What I can help you build
        </h2>

        <ServiceCarousel />
      </div>
    </section>
  );
}
