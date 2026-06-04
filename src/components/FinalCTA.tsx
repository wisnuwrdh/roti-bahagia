export default function FinalCTA() {
  return (
    <section className="py-32 bg-primary text-on-primary text-center px-margin-mobile relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="relative z-10 max-w-2xl mx-auto space-y-8">
        <h2 className="font-noto-serif text-display-lg-mobile md:text-display-lg">
          Siap Pesan? Kami Siap Membantu Sekarang.
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-3 bg-surface text-primary px-10 py-5 rounded-full font-be-vietnam-pro text-label-lg hover:scale-105 transition-transform duration-300 shadow-xl"
        >
          <span className="material-symbols-outlined text-[28px]">chat</span>
          Hubungi WhatsApp
        </a>
      </div>
    </section>
  );
}
