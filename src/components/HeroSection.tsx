import Icon from "./Icon";

export default function HeroSection() {
  return (
    <section className="relative" id="hero">
      {/* Hero Image — dominant, 45–50% viewport height */}
      <div className="relative w-full h-[50vh] min-h-[200px] max-h-[300px] overflow-hidden">
        <img
          alt="Roti segar buatan bakery lokal: roti tawar, croissant, donat, dan roti gandum"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkmEJCGa6bpBYq_RZSu5_8yF2ZJHY5vfvtqMuZ5qgXU1hZWjGAFU4Pw_bg5rLW68I60uRZPS4O9f6Do72hl5T_j7d8ipAj6H7_ycw-X02EHzO6qDVgP3I4w_uamwWv70b8Epz69jiktlY3PW6rHaLJQZaj5fc9AZaTr83-GKhU_sPJXcDgiFna0ufHntZvK41CoXRLvvIZSuPcoVM4Jm2fUagEHiqw0gbnXjiuuAVsNnBYfwDMbTO6WTCLUiGdNwT1ZW9r8xEH8LXZ"
        />
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content — below image, visible without scroll */}
      <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto -mt-16 md:-mt-24 pb-6 md:pb-24">
        <div className="space-y-6 text-center">
          {/* Headline */}
          <h1 className="font-noto-serif text-3xl md:text-display-lg text-on-background">
            Roti Segar Bakery Lokal: Pesan Lewat WhatsApp, Siap Hari Ini
          </h1>

          {/* Subheadline */}
          <p className="font-be-vietnam-pro text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Nggak perlu ribet. Pilih rotimu, chat kami, dan pesananmu siap. Semudah itu.
          </p>

          {/* Primary CTA */}
          <div className="pt-4 flex flex-col items-center gap-3">
            <a
              href="https://wa.me/6281234567890"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-4 md:py-[14px] rounded-full font-be-vietnam-pro text-label-lg hover:bg-surface-tint transition-all soft-shadow hover:-translate-y-1 min-h-[56px]"
            >
              <Icon name="chat" className="w-5 h-5" />
              Chat WhatsApp Sekarang
            </a>

            {/* Secondary CTA */}
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 text-on-surface-variant font-be-vietnam-pro text-body-md hover:text-secondary transition-colors py-3 min-h-[48px]"
            >
              Lihat Menu
            </a>
          </div>

          {/* Microcopy */}
          <p className="font-be-vietnam-pro text-label-sm text-outline flex items-center justify-center gap-2 pt-1">
            <Icon name="bolt" className="w-4 h-4" />
            Respon cepat. Biasanya dalam beberapa menit.
          </p>
        </div>
      </div>
    </section>
  );
}
