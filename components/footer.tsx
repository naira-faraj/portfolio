import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-16 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 border-t border-foreground/10 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                <span className="text-background font-serif text-sm font-medium">
                  N
                </span>
              </div>
              <span className="font-serif text-lg italic text-foreground">
                Naira Faraj
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Creating beautiful, functional spaces that inspire and endure.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="#portfolio"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="#about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>hello@nairafaraj.com</p>
              <p>+1 (555) 123-4567</p>
              <p>New York, NY</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Naira Faraj. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pinterest
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
