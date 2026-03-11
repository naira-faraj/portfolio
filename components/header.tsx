import Link from "next/link";

export function Header() {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 py-6"
      style={{ backgroundColor: "rgba(244, 242, 237, 0.9)", backdropFilter: "blur(8px)" }}
    >
      <Link href="/" className="flex items-center gap-3">
        <div 
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#1a1716" }}
        >
          <span className="text-sm font-medium" style={{ color: "#f4f2ed", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            N
          </span>
        </div>
        <span 
          className="text-lg italic"
          style={{ color: "#1a1716", fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Naira Faraj
        </span>
      </Link>

      <nav>
        <Link
          href="#portfolio"
          className="text-xs tracking-widest uppercase transition-colors hover:opacity-100"
          style={{ color: "rgba(26, 23, 22, 0.8)" }}
        >
          The Atelier
        </Link>
      </nav>
    </header>
  );
}
