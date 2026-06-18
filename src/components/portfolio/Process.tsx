const steps = [
  { num: "01", title: "Discover", body: "We dig into your product, audience, and goals to shape the right strategy." },
  { num: "02", title: "Design", body: "We craft a distinctive, on-brand visual direction and refine it with you." },
  { num: "03", title: "Build", body: "We engineer fast, responsive, accessible interfaces ready to scale." },
  { num: "04", title: "Launch", body: "We ship, measure, and iterate so your site keeps converting over time." },
];

export function Process() {
  return (
    <section id="process" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-xl">
          <h2 className="text-4xl font-medium tracking-tight">How we work</h2>
          <p className="mt-3 text-zinc-600">A clear, collaborative process from first call to launch day.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-3xl bg-white/30 p-6 backdrop-blur-sm ring-1 ring-black/5"
            >
              <span className="text-sm font-semibold text-brand-rose">{step.num}</span>
              <h3 className="mt-4 text-xl font-medium tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
