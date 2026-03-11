import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-28 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/about.jpg"
                alt="Naira Faraj - Interior Designer"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/60 -z-10 hidden md:block max-w-md" />
          </div>

          {/* Content */}
          <div className="max-w-lg order-1 lg:order-2">
            <div className="flex items-center gap-5 mb-8">
              <div className="w-12 h-[1px] bg-foreground/30" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground font-medium">
                About Me
              </span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-10 tracking-[-0.02em]">
              Designing with
              <span className="italic block">Purpose.</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-[1.8] text-[15px]">
              <p>
                I am Naira Faraj, an interior designer with a passion for creating 
                spaces that tell stories. With over a decade of experience in 
                residential and commercial design, I bring a unique blend of 
                classical elegance and contemporary aesthetics to every project.
              </p>
              <p>
                My approach is deeply personal — I believe that great design 
                should not only be beautiful but also functional and meaningful 
                to those who inhabit it. Every space has a soul waiting to be 
                discovered.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-14 pt-10 border-t border-foreground/10">
              <div>
                <span className="font-serif text-4xl text-foreground tracking-tight">10+</span>
                <p className="text-[13px] text-muted-foreground mt-2 tracking-wide">Years Experience</p>
              </div>
              <div>
                <span className="font-serif text-4xl text-foreground tracking-tight">50+</span>
                <p className="text-[13px] text-muted-foreground mt-2 tracking-wide">Projects Done</p>
              </div>
              <div>
                <span className="font-serif text-4xl text-foreground tracking-tight">30+</span>
                <p className="text-[13px] text-muted-foreground mt-2 tracking-wide">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
