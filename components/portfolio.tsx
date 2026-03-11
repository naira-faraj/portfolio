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
    <section id="portfolio" className="py-24 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 bg-background">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-px bg-foreground/40" />
          <span className="text-xs tracking-widest uppercase text-muted-foreground">
            Selected Works
          </span>
        </div>
        <h2 className="font-serif text-5xl md:text-6xl text-foreground">
          Portfolio
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`group cursor-pointer ${
              index % 2 === 1 ? "md:mt-16" : ""
            }`}
          >
            <div className="relative overflow-hidden mb-5">
              <div className="aspect-[4/5] relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-serif text-xl text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground tracking-widest uppercase">
                  {project.category}
                </p>
              </div>
              <span className="font-serif italic text-muted text-lg">
                0{project.id}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
