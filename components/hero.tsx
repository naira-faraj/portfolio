import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-background">
      {/* Mint/sage accent block - bottom right */}
      <div className="absolute bottom-0 right-0 w-[55%] h-[22%] bg-secondary" />

      {/* Peach/salmon decorative arc - right edge */}
      <div className="absolute top-[15%] right-0 w-[90px] h-[420px] bg-accent rounded-l-full" />

      {/* Main content grid */}
      <div className="relative z-10 h-full max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 xl:pl-28 pt-24 lg:pt-0">
          <div className="max-w-xl">
            {/* Tagline with line */}
            <div className="flex items-center gap-5 mb-12">
              <div className="w-12 h-[1px] bg-foreground/30" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground font-medium">
                The Digital Renaissance
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-8">
              <span className="block font-serif text-[4.5rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[5rem] xl:text-[6.5rem] text-foreground leading-[0.9] tracking-[-0.02em]">
                Artistry
              </span>
              <span className="block font-serif text-[4.5rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[5rem] xl:text-[6.5rem] text-foreground leading-[0.9] tracking-[-0.02em] italic">
                Redefined.
              </span>
            </h1>

            {/* Description */}
            <p className="text-[15px] sm:text-base text-muted-foreground leading-[1.8] mb-10 max-w-[400px]">
              An elegant studio for bespoke interior design.
              Where vision meets craftsmanship to create
              spaces that inspire.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-3 px-7 py-4 bg-foreground text-background text-[13px] font-medium tracking-wide hover:bg-foreground/90 transition-colors"
              >
                Begin Creating
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center gap-3 px-7 py-4 border border-foreground/70 text-foreground text-[13px] font-medium tracking-wide hover:bg-foreground hover:text-background transition-colors"
              >
                Read Manifesto
                <BookOpen className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="hidden lg:flex items-center justify-center relative">
          {/* Polaroid container */}
          <div className="relative transform rotate-[4deg] mr-8">
            {/* Polaroid frame with shadow */}
            <div className="bg-white p-4 pb-16 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]">
              <div className="relative w-[300px] h-[380px] xl:w-[340px] xl:h-[420px] overflow-hidden bg-muted/20">
                <Image
                  src="/images/hero-interior.jpg"
                  alt="Elegant interior design showcase"
                  fill
                  className="object-cover grayscale"
                  priority
                />
              </div>
              {/* Typewriter-style caption */}
              <p className="absolute bottom-5 left-0 right-0 text-center font-serif italic text-[13px] text-muted-foreground tracking-wide">
                Figure 1. Signature Design
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile image */}
      <div className="lg:hidden absolute bottom-28 right-4 w-48 transform rotate-3">
        <div className="bg-white p-2 pb-8 shadow-lg">
          <div className="relative w-full aspect-[3/4] overflow-hidden">
            <Image
              src="/images/hero-interior.jpg"
              alt="Interior design"
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
