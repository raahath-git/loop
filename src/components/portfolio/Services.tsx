const services = [
  {
    title: "Strategy first",
    body: "We define the narrative before we touch the canvas, ensuring every pixel serves a business objective.",
    iconBg: "bg-brand-rose/10 ring-brand-rose/20",
    iconColor: "text-brand-rose",
    path: "M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3Z",
  },
  {
    title: "Visual fidelity",
    body: "High-end aesthetics paired with functional precision, creating interfaces that feel as good as they look.",
    iconBg: "bg-brand-amber/10 ring-brand-amber/20",
    iconColor: "text-brand-amber",
    path: "M2 4.25A2.25 2.25 0 0 1 4.25 2h7.5A2.25 2.25 0 0 1 14 4.25v7.5A2.25 2.25 0 0 1 11.75 14h-7.5A2.25 2.25 0 0 1 2 11.75v-7.5Z",
  },
  {
    title: "Clean engineering",
    body: "Responsive, accessible, and high-performance code built for the modern web ecosystem.",
    iconBg: "bg-brand-cyan/10 ring-brand-cyan/20",
    iconColor: "text-brand-cyan",
    path: "M9.586 1.586A2 2 0 0 1 11 1h2a2 2 0 0 1 2 2v2a2 2 0 0 1-.586 1.414l-6.5 6.5a2 2 0 0 1-2.828 0L2.086 10.914a2 2 0 0 1 0-2.828l6.5-6.5Z",
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-xl">
          <h2 className="text-4xl font-medium tracking-tight">What we do</h2>
          <p className="mt-3 text-zinc-600">
            End-to-end design and development, handled by one focused team.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col gap-4">
              <div className={`flex size-10 items-center justify-center rounded-xl ring-1 ${service.iconBg}`}>
                <svg className={`size-4 ${service.iconColor}`} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d={service.path} fillRule="evenodd" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-medium tracking-tight">{service.title}</h3>
              <p className="max-w-[35ch] text-pretty text-sm leading-relaxed text-zinc-600">{service.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
