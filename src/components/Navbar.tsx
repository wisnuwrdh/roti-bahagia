import Link from "next/link";

const navLinks = [
  { label: "Menu", href: "#menu", active: true },
  { label: "Order", href: "#order" },
  { label: "Our Story", href: "#story" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  return (
    <nav className="bg-background/90 backdrop-blur-md w-full top-0 sticky z-50 shadow-[0_10px_30px_-10px_rgba(155,63,37,0.08)]">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
        {/* Brand */}
        <Link
          href="#"
          className="font-noto-serif text-display-lg text-primary italic leading-none"
        >
          Roti Bahagia
        </Link>

        {/* Links (Desktop) */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? "text-primary border-b-2 border-primary pb-1 font-be-vietnam-pro text-label-lg opacity-80 scale-95 transition-all"
                  : "text-on-surface-variant hover:text-secondary transition-colors duration-300 font-be-vietnam-pro text-label-lg"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#order"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-be-vietnam-pro text-label-lg hover:bg-surface-tint transition-colors"
        >
          <span className="material-symbols-outlined">forum</span>
          WhatsApp Order
        </a>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-primary" aria-label="Menu">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
