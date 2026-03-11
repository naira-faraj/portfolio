import Link from "next/link";

export function Footer() {
  return (
    <footer 
      className="py-16 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28"
      style={{ backgroundColor: "#f4f2ed", borderTop: "1px solid rgba(26, 23, 22, 0.1)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#1a1716" }}
              >
                <span 
                  className="text-sm font-medium"
                  style={{ color: "#f4f2ed", fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
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
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#6d6762" }}>
              Creating beautiful, functional spaces that inspire and endure.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 
              className="text-lg mb-4"
              style={{ color: "#1a1716", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="#portfolio"
                className="text-sm transition-colors hover:opacity-80"
                style={{ color: "#6d6762" }}
              >
                Portfolio
              </Link>
              <Link
                href="#about"
                className="text-sm transition-colors hover:opacity-80"
                style={{ color: "#6d6762" }}
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm transition-colors hover:opacity-80"
                style={{ color: "#6d6762" }}
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className="text-lg mb-4"
              style={{ color: "#1a1716", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm" style={{ color: "#6d6762" }}>
              <p>hello@nairafaraj.com</p>
              <p>+1 (555) 123-4567</p>
              <p>New York, NY</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div 
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(26, 23, 22, 0.1)" }}
        >
          <p className="text-sm" style={{ color: "#6d6762" }}>
            {new Date().getFullYear()} Naira Faraj. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm transition-colors hover:opacity-80"
              style={{ color: "#6d6762" }}
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-sm transition-colors hover:opacity-80"
              style={{ color: "#6d6762" }}
            >
              Pinterest
            </Link>
            <Link
              href="#"
              className="text-sm transition-colors hover:opacity-80"
              style={{ color: "#6d6762" }}
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
