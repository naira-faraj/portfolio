import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-20 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 border-t border-foreground/10 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-foreground flex items-center justify-center">
                <span className="text-background font-serif text-base font-medium">
                  N
                </span>
              </div>
              <span className="font-serif text-lg italic text-foreground">
                Naira Faraj
              </span>
            </Link>
            <p className="text-[14px] text-muted-foreground leading-[1.8] max-w-xs">
              Creating beautiful, functional spaces that inspire and endure.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-5">Navigation</h4>
            <nav className="flex flex-col gap-4">
              <Link
                href="#portfolio"
                className="text-[14px] text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="#about"
                className="text-[14px] text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-[14px] text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-5">Get in Touch</h4>
            <div className="space-y-4 text-[14px] text-muted-foreground">
              <p>hello@nairafaraj.com</p>
              <p>+1 (555) 123-4567</p>
              <p>New York, NY</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] text-muted-foreground">
            &copy; {new Date().getFullYear()} Naira Faraj. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
            >
              Pinterest
            </Link>
            <Link
              href="#"
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
