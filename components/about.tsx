import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 px-8 md:px-12 lg:px-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/about.jpg"
                alt="Naira Faraj - Interior Designer"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent -z-10 hidden md:block" />
          </div>

          {/* Content */}
          <div className="max-w-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-muted" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                About Me
              </span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
              Designing with
              <span className="italic"> Purpose</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
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
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <span className="font-serif text-3xl text-foreground">10+</span>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <span className="font-serif text-3xl text-foreground">50+</span>
                <p className="text-sm text-muted-foreground mt-1">Projects Done</p>
              </div>
              <div>
                <span className="font-serif text-3xl text-foreground">30+</span>
                <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
