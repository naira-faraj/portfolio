import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 py-6 bg-background/80 backdrop-blur-sm">
      <Link href="/" className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
          <span className="text-background font-serif text-sm font-medium">
            N
          </span>
        </div>
        <span className="font-serif text-lg italic text-foreground">
          Naira Faraj
        </span>
      </Link>

      <nav>
        <Link
          href="#portfolio"
          className="text-xs tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors"
        >
          The Atelier
        </Link>
      </nav>
    </header>
  );
}
