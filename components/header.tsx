import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-12 lg:px-16">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-serif text-lg font-medium">
            N
          </span>
        </div>
        <span className="font-serif text-xl italic text-foreground">
          Naira Faraj
        </span>
      </Link>

      <nav>
        <Link
          href="#portfolio"
          className="text-sm tracking-[0.2em] uppercase text-foreground hover:text-muted-foreground transition-colors"
        >
          The Portfolio
        </Link>
      </nav>
    </header>
  );
}
