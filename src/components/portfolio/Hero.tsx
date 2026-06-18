export function Hero() {
  return (
    <section id="top" className="relative flex flex-col items-center px-6 pt-44 pb-24 text-center">
      <div className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden">
        <div className="h-[500px] w-[800px] translate-y-[-10%] rounded-full bg-brand-rose/20 blur-[120px]" />
      </div>

      <div className="relative z-10 flex max-w-4xl flex-col items-center reveal">
        <span className="mb-6 inline-block rounded-full bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-500 ring-1 ring-black/5 backdrop-blur-md">
          Available for new projects
        </span>
        <h1 className="max-w-[20ch] text-balance text-5xl leading-none font-medium tracking-tight sm:text-6xl lg:text-7xl">
          We build beautiful websites for ambitious products
        </h1>
        <p className="mt-8 max-w-[48ch] text-pretty text-lg text-zinc-600 lg:text-xl">
          A boutique design studio crafting premium web experiences that turn attention into lasting
          brand loyalty.
        </p>
        <div className="mt-10 flex items-center gap-4">
          <a
            href="#contact"
            className="flex h-10 items-center rounded-full bg-brand-rose py-2 pr-3 pl-2 text-sm font-medium text-white ring-1 ring-brand-rose transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="mr-1.5 size-4 shrink-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
            </svg>
            Start a project
          </a>
          <a
            href="#work"
            className="flex h-10 items-center rounded-full bg-white/40 px-5 text-sm font-medium text-zinc-950 backdrop-blur-md ring-1 ring-black/5 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            View work
          </a>
        </div>
      </div>
    </section>
  );
}
