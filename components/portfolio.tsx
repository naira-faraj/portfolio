import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Modern Minimalist",
    category: "Residential",
    image: "/images/project-1.jpg",
  },
  {
    id: 2,
    title: "Coastal Retreat",
    category: "Villa",
    image: "/images/project-2.jpg",
  },
  {
    id: 3,
    title: "Urban Loft",
    category: "Commercial",
    image: "/images/project-3.jpg",
  },
  {
    id: 4,
    title: "Classic Elegance",
    category: "Residential",
    image: "/images/project-4.jpg",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-28 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 bg-background">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex items-center gap-5 mb-8">
          <div className="w-12 h-[1px] bg-foreground/30" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground font-medium">
            Selected Works
          </span>
        </div>
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground tracking-[-0.02em]">
          Portfolio
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`group cursor-pointer ${
              index % 2 === 1 ? "md:mt-20" : ""
            }`}
          >
            <div className="relative overflow-hidden mb-6">
              <div className="aspect-[4/5] relative bg-muted/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
            </div>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-2 tracking-[-0.01em]">
                  {project.title}
                </h3>
                <p className="text-[13px] text-muted-foreground tracking-wide uppercase">
                  {project.category}
                </p>
              </div>
              <span className="font-serif italic text-muted text-xl">
                0{project.id}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
