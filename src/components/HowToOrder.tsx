import Icon from "./Icon";

export default function HowToOrder() {
  const steps = [
    {
      number: "1",
      title: "Chat Kami di WhatsApp",
      description: "Beritahu produk yang kamu mau. Kami bantu pilihkan jika perlu.",
    },
    {
      number: "2",
      title: "Konfirmasi Pesanan",
      description: "Kami konfirmasi ketersediaan, harga, dan waktu siapnya. Semua jelas sebelum kamu bayar.",
    },
    {
      number: "3",
      title: "Ambil atau Terima Pesananmu",
      description: "Tinggal datang ke toko atau kami atur pengirimannya. Sesuai kesepakatan.",
    },
  ];

  return (
    <section className="py-6 md:py-24 bg-surface-container-low">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Headline + Subheadline */}
        <div className="text-center mb-10 md:mb-12 space-y-3">
          <h2 className="font-noto-serif text-headline-md md:text-[28px] text-primary">
            Pesan Semudah Chat: 3 Langkah Saja
          </h2>
          <p className="font-be-vietnam-pro text-body-lg text-on-surface-variant">
            Tidak perlu daftar akun, tidak perlu aplikasi tambahan. Cukup WhatsApp.
          </p>
        </div>

        {/* Steps — vertical numbered list */}
        <div className="max-w-xl mx-auto space-y-8 md:space-y-10">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-5 md:gap-6">
              {/* Number circle */}
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-on-primary flex items-center justify-center font-noto-serif text-headline-sm md:text-[26px] font-bold soft-shadow">
                {step.number}
              </div>
              {/* Step content */}
              <div className="pt-1 md:pt-2">
                <h3 className="font-be-vietnam-pro text-body-lg md:text-[20px] font-semibold text-on-background mb-1">
                  {step.title}
                </h3>
                <p className="font-be-vietnam-pro text-body-md text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12 text-center">
          <a
            href="https://wa.me/6281234567890"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-be-vietnam-pro text-label-lg hover:bg-surface-tint transition-all soft-shadow min-h-[56px]"
          >
            <Icon name="chat" className="w-5 h-5" />
            Mulai Chat Sekarang
          </a>
          <p className="font-be-vietnam-pro text-label-sm text-outline mt-3">
            Sudah banyak pelanggan yang pesan dengan cara ini. Mudah, aman, dan nggak pernah mengecewakan.
          </p>
        </div>
      </div>
    </section>
  );
}
