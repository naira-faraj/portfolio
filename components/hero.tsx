import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex">
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 pt-24 pb-12 lg:max-w-[55%]">
        <div className="max-w-xl">
          {/* Tagline */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px bg-muted" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Interior Design Studio
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-8">
            <span className="block font-serif text-6xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] tracking-tight">
              Spaces
            </span>
            <span className="block font-serif text-6xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] tracking-tight italic">
              Redefined.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-md">
            An elegant studio for bespoke interior design. Where vision meets
            craftsmanship to create spaces that inspire.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-foreground/90 transition-colors"
            >
              View Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center gap-3 px-7 py-4 border border-foreground text-foreground text-sm tracking-wide hover:bg-foreground hover:text-primary-foreground transition-colors"
            >
              About Me
              <BookOpen className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="hidden lg:flex flex-1 relative items-center justify-center overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute right-0 top-1/4 w-32 h-[60%] bg-accent rounded-l-full opacity-80" />
        <div className="absolute right-0 bottom-0 w-full h-1/4 bg-secondary" />

        {/* Main Image with Polaroid Effect */}
        <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <div className="bg-card p-3 pb-16 shadow-2xl">
            <div className="relative w-72 h-96 md:w-80 md:h-[28rem] overflow-hidden">
              <Image
                src="/images/hero-interior.jpg"
                alt="Elegant interior design showcase"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>
            {/* Caption */}
            <p className="absolute bottom-4 left-0 right-0 text-center font-serif italic text-sm text-muted-foreground">
              Figure 1. Signature Design
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Image */}
      <div className="lg:hidden absolute bottom-0 right-0 w-48 h-64 opacity-20">
        <Image
          src="/images/hero-interior.jpg"
          alt="Interior design"
          fill
          className="object-cover grayscale"
        />
      </div>
    </section>
  );
}
