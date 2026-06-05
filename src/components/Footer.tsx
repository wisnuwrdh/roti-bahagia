import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="bg-surface-container-high border-t border-outline-variant/30 w-full">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 md:py-16">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <span className="font-noto-serif text-display-lg text-primary italic select-none">
            Roti Bahagia
          </span>

          {/* Contact Info */}
          <div className="font-be-vietnam-pro text-body-md text-on-surface-variant space-y-1">
            <p>WhatsApp: +62 812-3456-7890</p>
            <p>Jl. Raya Pahlawan No. 27, Bandung</p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-on-surface-variant font-be-vietnam-pro text-body-md hover:text-secondary transition-colors py-2 min-h-[44px]"
            >
              <Icon name="camera_alt" className="w-5 h-5" />
              Ikuti Kami di Instagram
            </a>
            <a
              href="https://wa.me/6281234567890"
              className="inline-flex items-center gap-2 text-on-surface-variant font-be-vietnam-pro text-body-md hover:text-secondary transition-colors py-2 min-h-[44px]"
            >
              <Icon name="chat" className="w-5 h-5" />
              Chat via WhatsApp
            </a>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-outline-variant/50" />

          {/* Copyright */}
          <p className="font-be-vietnam-pro text-body-md text-on-surface-variant">
            &copy; 2026 Roti Bahagia. Bakery lokal buatan tangan dengan cinta.
          </p>
        </div>
      </div>
    </footer>
  );
}
