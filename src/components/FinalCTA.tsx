import Icon from "./Icon";

export default function FinalCTA() {
  return (
    <section className="py-6 md:py-28 bg-primary text-on-primary text-center px-margin-mobile relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        {/* Headline */}
        <h2 className="font-noto-serif text-display-lg-mobile md:text-display-lg">
          Siap Pesan? Kami Siap Membantu Sekarang.
        </h2>

        {/* Subheadline */}
        <p className="font-be-vietnam-pro text-body-lg text-on-primary/80 max-w-xl mx-auto">
          Chat kami di WhatsApp. Beritahu apa yang kamu mau, dan kami yang urus sisanya.
        </p>

        {/* Primary CTA */}
        <div className="pt-4">
          <a
            href="https://wa.me/6281234567890"
            className="inline-flex items-center gap-3 bg-surface text-primary px-10 py-5 rounded-full font-be-vietnam-pro text-label-lg hover:scale-105 transition-transform duration-300 shadow-xl min-h-[56px]"
          >
            <Icon name="chat" className="w-[26px] h-[26px]" />
            Chat WhatsApp Sekarang
          </a>
        </div>

        {/* Contact Info */}
        <div className="pt-6 space-y-2 text-on-primary/70 font-be-vietnam-pro text-body-md">
          <p className="flex items-center justify-center gap-2">
            <Icon name="smartphone" className="w-[18px] h-[18px]" />
            WhatsApp: +62 812-3456-7890
          </p>
          <p className="flex items-center justify-center gap-2">
            <Icon name="location_on" className="w-[18px] h-[18px]" />
            Jl. Raya Pahlawan No. 27, Bandung
          </p>
          <p className="flex items-center justify-center gap-2">
            <Icon name="schedule" className="w-[18px] h-[18px]" />
            Senin-Jumat 07.00-20.00 WIB, Sabtu-Minggu 06.00-21.00 WIB
          </p>
        </div>
      </div>
    </section>
  );
}
