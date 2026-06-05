import Icon from "./Icon";

export default function SocialProof() {
  const testimonials = [
    {
      quote: "Kue ulang tahunnya cantik banget dan rasanya enak. Keluarga semua suka, sampai nambah dua potong. Pasti pesan lagi tahun depan!",
      author: "Sari W., pelanggan sejak 2022",
    },
    {
      quote: "Croissant-nya selalu habis cepat di rumah. Udah jadi langganan tiap minggu, anak-anak selalu minta sarapan roti dari sini.",
      author: "Budi R., pelanggan tetap",
    },
    {
      quote: "Pesannya gampang banget, responnya cepat. Cocok banget buat yang butuh kue acara mendadak. Kualitasnya tidak mengecewakan.",
      author: "Dewi A., pelanggan baru",
    },
  ];

  return (
    <section className="py-6 md:py-24 bg-surface-container-low border-y border-outline-variant/30">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Headline + Subheadline */}
        <div className="text-center mb-10 md:mb-12 space-y-3">
          <h2 className="font-noto-serif text-headline-md md:text-[28px] text-primary">
            Kata Mereka yang Sudah Pesan
          </h2>
          <p className="font-be-vietnam-pro text-body-lg text-on-surface-variant">
            Bukan kami yang bilang enak. Pelanggan kami yang cerita.
          </p>
        </div>

        {/* Trust Badge */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-surface px-5 py-3 rounded-full soft-shadow">
            <span className="text-yellow-500 text-[20px] leading-none">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span className="font-be-vietnam-pro text-body-md text-on-surface-variant">
              4.9 · 143 Ulasan di Google Maps
            </span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-surface rounded-xl p-5 md:p-6 soft-shadow border border-outline-variant/20"
            >
              <p className="font-be-vietnam-pro text-body-md text-on-surface-variant leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="font-be-vietnam-pro text-body-md text-on-surface-variant mt-2 font-medium">
                &ndash; {t.author}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/6281234567890"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-be-vietnam-pro text-label-lg hover:bg-surface-tint transition-all soft-shadow min-h-[56px]"
          >
            <Icon name="chat" className="w-5 h-5" />
            Pesan via WhatsApp
          </a>
          <p className="font-be-vietnam-pro text-label-sm text-outline mt-3">
            Bergabung bersama pelanggan yang sudah merasakan enaknya.
          </p>
        </div>
      </div>
    </section>
  );
}
