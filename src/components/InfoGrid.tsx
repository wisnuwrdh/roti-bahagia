import Icon from "./Icon";

export default function InfoGrid() {
  const infoItems = [
    {
      icon: "schedule" as const,
      title: "Jam Buka",
      lines: [
        "Senin \u2013 Jumat: 07.00 \u2013 20.00 WIB",
        "Sabtu \u2013 Minggu: 06.00 \u2013 21.00 WIB",
      ],
    },
    {
      icon: "location_on" as const,
      title: "Lokasi",
      description:
        "Jl. Raya Pahlawan No. 27, Kelurahan Sukamaju, Kecamatan Cibeunying, Bandung 40123",
    },
    {
      icon: "payments" as const,
      title: "Cara Tahu Harga",
      description:
        "Nggak perlu tebak-tebakan. Tanya langsung via WhatsApp. Kami balas cepat dan harga langsung jelas.",
    },
    {
      icon: "local_shipping" as const,
      title: "Pengiriman",
      description:
        "[Informasi layanan pengiriman belum tersedia: diisi setelah dikonfirmasi klien]",
    },
  ];

  return (
    <section className="py-6 md:py-24">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Headline */}
        <h2 className="font-noto-serif text-headline-md md:text-[28px] text-primary text-center mb-10 md:mb-12">
          Semua yang Perlu Kamu Tahu, Ada di Sini
        </h2>

        {/* Info Cards */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {infoItems.map((item) => (
            <div
              key={item.title}
              className="glass-card p-5 md:p-6 rounded-xl flex items-start gap-4"
            >
              <Icon name={item.icon} className="w-7 h-7 text-tertiary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-be-vietnam-pro text-label-lg text-on-background mb-1">
                  {item.title}
                </h3>
                {item.title === "Jam Buka" ? (
                  <div>
                    {"lines" in item && Array.isArray((item as any).lines) ? (
                      (item as any).lines.map((line: string, i: number) => (
                        <span key={i} className="font-be-vietnam-pro text-body-md text-on-surface-variant" style={{ display: "block" }}>
                          {line}
                        </span>
                      ))
                    ) : null}
                  </div>
                ) : item.title === "Lokasi" ? (
                  <div>
                    <p className="font-be-vietnam-pro text-body-md text-on-surface-variant">
                      {item.description}
                    </p>
                    <a
                      href="https://maps.google.com/?q=Roti+Bahagia+Bandung"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary font-be-vietnam-pro text-body-md hover:text-secondary transition-colors mt-1"
                    >
                      Lihat di Google Maps
                      <Icon name="arrow_forward" className="w-[18px] h-[18px]" />
                    </a>
                  </div>
                ) : (
                  <p className="font-be-vietnam-pro text-body-md text-on-surface-variant">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Secondary CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/6281234567890"
            className="inline-flex items-center gap-2 text-primary font-be-vietnam-pro text-body-md hover:text-secondary transition-colors py-3 min-h-[44px]"
          >
            Masih ada pertanyaan? Tanya via WhatsApp
            <Icon name="arrow_forward" className="w-[18px] h-[18px]" />
          </a>
          <p className="font-be-vietnam-pro text-label-sm text-outline mt-1">
            Kami senang membantu. Tidak ada pertanyaan yang terlalu kecil.
          </p>
        </div>
      </div>
    </section>
  );
}
