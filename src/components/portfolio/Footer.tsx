export function Footer() {
  return (
    <footer className="border-t border-zinc-950/5 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 sm:flex-row">
        <p className="text-xs text-zinc-500">&copy; {new Date().getFullYear()} Lumina Design Studio. Built with precision.</p>
        <div className="flex gap-8">
          <a href="#" className="text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-950">
            Twitter
          </a>
          <a href="#" className="text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-950">
            Dribbble
          </a>
          <a href="mailto:hello@luminastudio.com" className="text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-950">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
