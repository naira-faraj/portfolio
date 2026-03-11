import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#f4f2ed" }}>
      {/* Mint/sage accent block - bottom right */}
      <div 
        className="absolute bottom-0 right-0 w-1/2 h-[25%]"
        style={{ backgroundColor: "#c8ded4" }}
      />

      {/* Peach/salmon decorative arc - right edge */}
      <div 
        className="absolute top-[18%] -right-10 w-24 h-96 rounded-l-full"
        style={{ backgroundColor: "#e6cdb8" }}
      />

      {/* Main content grid */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 pt-28 pb-12 lg:pt-0 lg:pb-0">
          <div className="max-w-lg">
            {/* Tagline with line */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-px bg-foreground/40" />
              <span className="text-xs tracking-widest uppercase text-muted-foreground">
                The Digital Renaissance
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-8">
              <span className="block font-serif text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl text-foreground leading-none tracking-tight">
                Artistry
              </span>
              <span className="block font-serif text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl text-foreground leading-none tracking-tight italic">
                Redefined.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-sm">
              An elegant studio for bespoke interior design. Where vision meets craftsmanship to create spaces that inspire.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-foreground text-background text-sm font-medium tracking-wide hover:bg-foreground/90 transition-colors"
              >
                Begin Creating
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center gap-3 px-6 py-3.5 border border-foreground text-foreground text-sm font-medium tracking-wide hover:bg-foreground hover:text-background transition-colors"
              >
                Read Manifesto
                <BookOpen className="w-4 h-4" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="hidden lg:flex items-center justify-center relative px-8">
          {/* Polaroid container */}
          <div className="relative" style={{ transform: "rotate(4deg)" }}>
            {/* Polaroid frame */}
            <div 
              className="bg-white p-3 pb-14 shadow-2xl"
              style={{ boxShadow: "0 25px 60px -15px rgba(0,0,0,0.2)" }}
            >
              <div className="relative w-72 h-80 xl:w-80 xl:h-96 overflow-hidden">
                <Image
                  src="/images/hero-interior.jpg"
                  alt="Elegant interior design showcase"
                  fill
                  className="object-cover grayscale"
                  priority
                  sizes="(max-width: 1280px) 288px, 320px"
                />
              </div>
              {/* Caption */}
              <p className="absolute bottom-4 left-0 right-0 text-center font-serif italic text-sm text-muted-foreground">
                Figure 1. Signature Design
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile image */}
      <div className="lg:hidden absolute bottom-20 right-4 w-36" style={{ transform: "rotate(3deg)" }}>
        <div className="bg-white p-2 pb-6 shadow-xl">
          <div className="relative w-full aspect-[3/4] overflow-hidden">
            <Image
              src="/images/hero-interior.jpg"
              alt="Interior design"
              fill
              className="object-cover grayscale"
              sizes="144px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
