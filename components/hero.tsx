import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background color blocks */}
      <div className="absolute inset-0">
        {/* Main cream background */}
        <div className="absolute inset-0 bg-background" />
        {/* Mint accent at bottom right */}
        <div className="absolute bottom-0 right-0 w-1/2 h-40 bg-secondary" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-12 md:px-16 lg:px-20 xl:px-28">
          <div className="max-w-lg">
            {/* Tagline */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-px bg-foreground/40" />
              <span className="text-xs tracking-[0.25em] uppercase text-foreground/60">
                Interior Design Studio
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-8">
              <span className="block font-serif text-6xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[0.95] tracking-tight">
                Artistry
              </span>
              <span className="block font-serif text-6xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[0.95] tracking-tight italic">
                Redefined.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed mb-10 max-w-md">
              An elegant studio for bespoke interior design. Where vision meets
              craftsmanship to create spaces that inspire.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-foreground/90 transition-colors"
              >
                Begin Creating
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center gap-3 px-6 py-3.5 border border-foreground/80 text-foreground text-sm tracking-wide hover:bg-foreground hover:text-primary-foreground transition-colors"
              >
                Read Manifesto
                <BookOpen className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="hidden lg:block w-1/2 relative">
          {/* Peach/salmon decorative shape */}
          <div className="absolute right-0 top-1/4 w-24 h-[55%] bg-accent rounded-l-full" />

          {/* Polaroid container - centered in right half */}
          <div className="absolute inset-0 flex items-center justify-center pr-8">
            <div className="relative transform rotate-3 hover:rotate-1 transition-transform duration-500">
              {/* Polaroid frame */}
              <div className="bg-white p-3 pb-14 shadow-xl">
                <div className="relative w-72 h-[22rem] xl:w-80 xl:h-[26rem] overflow-hidden">
                  <Image
                    src="/images/hero-interior.jpg"
                    alt="Elegant interior design showcase"
                    fill
                    className="object-cover grayscale"
                    priority
                  />
                </div>
                {/* Caption */}
                <p className="absolute bottom-4 left-0 right-0 text-center font-serif italic text-sm text-foreground/50">
                  Figure 1. Signature Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile decorative accent */}
      <div className="lg:hidden absolute bottom-0 right-0 w-32 h-24 bg-secondary" />
    </section>
  );
}
