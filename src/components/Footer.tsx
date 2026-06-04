import Link from "next/link";

const footerLinks = [
  { label: "Menu", href: "#" },
  { label: "Order Now", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Contact Us", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-high border-t border-outline-variant/30 w-full">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 flex flex-col md:flex-row justify-between items-center gap-8 transition-all duration-200">
        {/* Brand */}
        <Link
          href="#"
          className="font-noto-serif text-display-lg text-primary italic"
        >
          Roti Bahagia
        </Link>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-be-vietnam-pro text-label-sm text-on-surface-variant hover:text-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-be-vietnam-pro text-body-md text-on-surface-variant text-center md:text-right">
          &copy; 2024 Roti Bahagia Artisanal Bakery. Handcrafted with love.
        </p>
      </div>
    </footer>
  );
}
