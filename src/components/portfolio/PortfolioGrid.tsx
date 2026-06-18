import projectFintech from "@/assets/project-fintech.jpg";
import projectInteriors from "@/assets/project-interiors.jpg";
import projectSaas from "@/assets/project-saas.jpg";
import projectWellness from "@/assets/project-wellness.jpg";

const projects = [
  {
    image: projectSaas,
    name: "Ether Analytics",
    category: "SaaS Platform Design & Development",
    alt: "Ether Analytics SaaS dashboard interface",
  },
  {
    image: projectInteriors,
    name: "Norden Interiors",
    category: "E-commerce Experience",
    alt: "Norden Interiors luxury furniture e-commerce website",
  },
  {
    image: projectFintech,
    name: "Vault Finance",
    category: "Fintech Mobile App",
    alt: "Vault Finance fintech mobile app interface",
  },
  {
    image: projectWellness,
    name: "Aura Wellness",
    category: "Brand & Product Design",
    alt: "Aura Wellness health app interface",
  },
];

export function PortfolioGrid() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-xl">
          <h2 className="text-4xl font-medium tracking-tight">Selected work</h2>
          <p className="mt-3 text-zinc-600">
            A curated collection of products we've designed and shipped for growing brands.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group relative flex flex-col overflow-hidden rounded-[max(2vw,24px)] bg-white/30 p-4 backdrop-blur-sm ring-1 ring-black/5"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[min(1vw,12px)] bg-zinc-100 outline-1 -outline-offset-1 outline-black/5">
                <img
                  src={project.image}
                  alt={project.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center justify-between pt-6 pb-2">
                <div>
                  <h3 className="text-lg font-medium">{project.name}</h3>
                  <p className="text-sm text-zinc-500">{project.category}</p>
                </div>
                <div className="flex size-8 items-center justify-center rounded-full bg-white/80 ring-1 ring-black/5 transition-transform group-hover:translate-x-1">
                  <svg className="size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
