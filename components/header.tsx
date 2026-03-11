import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 py-5">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-9 h-9 rounded-full bg-foreground flex items-center justify-center">
          <span className="text-background font-serif text-base font-medium">
            N
          </span>
        </div>
        <span className="font-serif text-lg italic text-foreground">
          Naira Faraj
        </span>
      </Link>

      <nav className="hidden sm:block">
        <Link
          href="#portfolio"
          className="text-[11px] tracking-[0.25em] uppercase text-foreground/80 hover:text-foreground transition-colors font-medium"
        >
          The Atelier
        </Link>
      </nav>
    </header>
  );
}
