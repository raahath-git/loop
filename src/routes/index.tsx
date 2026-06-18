import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { Services } from "@/components/portfolio/Services";
import { Process } from "@/components/portfolio/Process";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { CTA } from "@/components/portfolio/CTA";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumina Studio — Premium Web Design for Products" },
      {
        name: "description",
        content:
          "Lumina Studio designs and builds beautiful, high-converting websites for ambitious product brands. Strategy, design, and engineering in one focused team.",
      },
      { property: "og:title", content: "Lumina Studio — Premium Web Design for Products" },
      {
        property: "og:description",
        content:
          "Beautiful, high-converting websites for ambitious product brands. Strategy, design, and engineering in one focused team.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="mesh-gradient-bg min-h-screen font-sans text-zinc-950 antialiased selection:bg-brand-rose/20">
      <Nav />
      <main>
        <Hero />
        <PortfolioGrid />
        <Services />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
