import { Link } from "@tanstack/react-router";

export function InteractiveTicker() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Define the ticker items with their display text and routing/link configuration
  const tickerItems = [
    { type: "work", label: "Damas Agency ↗", to: "/work/$projectId", params: { projectId: "damas" } },
    { type: "scroll", label: "Website Migration", targetId: "services" },
    { type: "work", label: "Najm SaaS ↗", to: "/work/$projectId", params: { projectId: "najm" } },
    { type: "scroll", label: "Framer Templates", targetId: "services" },
    { type: "work", label: "Kavi AI ↗", to: "/work/$projectId", params: { projectId: "kavi" } },
    { type: "scroll", label: "Frontend Development", targetId: "services" },
    { type: "work", label: "Sham Studio ↗", to: "/work/$projectId", params: { projectId: "sham" } },
    { type: "scroll", label: "Product Consulting", targetId: "services" },
    { type: "scroll", label: "Let's Talk ↗", targetId: "contact" },
  ];

  // Repeat items to fill container width for seamless scrolling loop
  const repeatedItems = [...tickerItems, ...tickerItems, ...tickerItems];

  const renderItem = (item: typeof tickerItems[0], index: number) => {
    const itemClassName = "transition-all duration-300 group-hover:opacity-30 hover:!opacity-100 hover:scale-105 text-zinc-400 hover:text-white font-display font-bold uppercase tracking-wider text-xs sm:text-sm whitespace-nowrap cursor-pointer";

    if (item.type === "work" && item.to) {
      return (
        <Link
          key={`${item.label}-${index}`}
          to={item.to}
          params={item.params}
          className={itemClassName}
        >
          {item.label}
        </Link>
      );
    }

    if (item.type === "scroll" && item.targetId) {
      return (
        <a
          key={`${item.label}-${index}`}
          href={`#${item.targetId}`}
          onClick={(e) => handleScrollToSection(e, item.targetId!)}
          className={itemClassName}
        >
          {item.label}
        </a>
      );
    }

    return null;
  };

  return (
    <div 
      className="group border-y border-[#27272a] bg-[#111111] py-7 overflow-hidden flex select-none relative" 
      style={{ backgroundImage: "none" }}
    >
      {/* Background visual styling */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />

      {/* Ticker scrolling track */}
      <div className="flex whitespace-nowrap min-w-full">
        {/* Container 1 */}
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16 group-hover:[animation-play-state:paused]">
          {repeatedItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-12 sm:gap-16">
              {renderItem(item, idx)}
              <span className="text-zinc-700 font-mono text-xs select-none">•</span>
            </div>
          ))}
        </div>
        
        {/* Container 2 (identical copy for seamless animation loop) */}
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16 group-hover:[animation-play-state:paused]" aria-hidden="true">
          {repeatedItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-12 sm:gap-16">
              {renderItem(item, idx)}
              <span className="text-zinc-700 font-mono text-xs select-none">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
