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
    <section id="portfolio" className="py-24 px-8 md:px-12 lg:px-16">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-muted" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Selected Works
          </span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
          Portfolio
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`group cursor-pointer ${
              index % 2 === 1 ? "md:mt-16" : ""
            }`}
          >
            <div className="relative overflow-hidden bg-card mb-6">
              <div className="aspect-[4/5] relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
            </div>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground tracking-wide">
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
