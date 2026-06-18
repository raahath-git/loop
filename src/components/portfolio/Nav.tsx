export function Nav() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="flex h-12 items-center gap-8 rounded-full bg-white/40 px-6 backdrop-blur-xl ring-1 ring-black/5">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          Lumina Studio
        </a>
        <div className="hidden items-center gap-6 sm:flex">
          <a href="#work" className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950">
            Work
          </a>
          <a href="#services" className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950">
            Services
          </a>
          <a href="#process" className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950">
            Process
          </a>
        </div>
        <a
          href="#contact"
          className="flex h-8 items-center rounded-full bg-zinc-950 px-4 text-sm font-medium text-zinc-50 ring-1 ring-zinc-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
