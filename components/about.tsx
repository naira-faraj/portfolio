import Image from "next/image";

export function About() {
  return (
    <section 
      id="about" 
      className="py-24 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28"
      style={{ backgroundColor: "rgba(200, 222, 212, 0.3)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0">
              <Image
                src="/images/about.jpg"
                alt="Naira Faraj - Interior Designer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 384px"
              />
            </div>
            {/* Decorative frame */}
            <div 
              className="absolute -bottom-4 -right-4 w-full h-full border -z-10 hidden md:block max-w-sm"
              style={{ borderColor: "rgba(230, 205, 184, 0.6)" }}
            />
          </div>

          {/* Content */}
          <div className="max-w-md order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-foreground/40" />
              <span className="text-xs tracking-widest uppercase text-muted-foreground">
                About Me
              </span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
              Designing with
              <span className="italic block">Purpose.</span>
            </h2>
            
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I am Naira Faraj, an interior designer with a passion for creating 
                spaces that tell stories. With over a decade of experience in 
                residential and commercial design, I bring a unique blend of 
                classical elegance and contemporary aesthetics to every project.
              </p>
              <p>
                My approach is deeply personal — I believe that great design 
                should not only be beautiful but also functional and meaningful 
                to those who inhabit it.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-foreground/10">
              <div>
                <span className="font-serif text-3xl text-foreground">10+</span>
                <p className="text-xs text-muted-foreground mt-1 tracking-wide">Years Experience</p>
              </div>
              <div>
                <span className="font-serif text-3xl text-foreground">50+</span>
                <p className="text-xs text-muted-foreground mt-1 tracking-wide">Projects Done</p>
              </div>
              <div>
                <span className="font-serif text-3xl text-foreground">30+</span>
                <p className="text-xs text-muted-foreground mt-1 tracking-wide">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
