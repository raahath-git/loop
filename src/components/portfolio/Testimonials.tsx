const testimonials = [
  {
    quote:
      "Lumina rebuilt our marketing site and our demo bookings doubled in a month. The craft is unreal.",
    name: "Sarah Chen",
    role: "Founder, Vault Finance",
  },
  {
    quote:
      "They understood our brand instantly and delivered a site that finally feels as premium as our product.",
    name: "Marcus Reid",
    role: "CEO, Norden Interiors",
  },
  {
    quote:
      "Fast, thoughtful, and obsessed with the details. Easily the best agency experience we've had.",
    name: "Priya Nair",
    role: "Head of Product, Aura",
  },
];

export function Testimonials() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-xl">
          <h2 className="text-4xl font-medium tracking-tight">Trusted by founders</h2>
          <p className="mt-3 text-zinc-600">What our partners say after we ship.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-3xl bg-white/40 p-8 backdrop-blur-md ring-1 ring-black/5"
            >
              <blockquote className="text-pretty text-lg leading-relaxed text-zinc-800">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8">
                <div className="text-sm font-semibold text-zinc-950">{t.name}</div>
                <div className="text-sm text-zinc-500">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
