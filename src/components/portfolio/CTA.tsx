export function CTA() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[max(2.5vw,32px)] bg-white/40 p-12 text-center backdrop-blur-2xl ring-1 ring-black/5 sm:p-20">
          <div className="pointer-events-none absolute -right-24 -bottom-24 size-64 rounded-full bg-brand-cyan/20 blur-3xl" />
          <div className="pointer-events-none absolute -top-24 -left-24 size-64 rounded-full bg-brand-rose/20 blur-3xl" />

          <h2 className="relative z-10 mx-auto max-w-[20ch] text-balance text-4xl leading-tight font-medium tracking-tight">
            Ready to build the most beautiful version of your product?
          </h2>
          <p className="relative z-10 mx-auto mt-6 max-w-[40ch] text-pretty text-zinc-600">
            We take on a limited number of projects each quarter so every partner gets our full attention.
          </p>
          <div className="relative z-10 mt-10 flex justify-center">
            <a
              href="mailto:hello@luminastudio.com"
              className="flex h-12 items-center rounded-full bg-zinc-950 px-8 text-sm font-medium text-zinc-50 ring-1 ring-zinc-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Book an introduction call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
