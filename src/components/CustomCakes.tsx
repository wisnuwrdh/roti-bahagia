import Icon from "./Icon";

export default function CustomCakes() {
  return (
    <section className="py-6 md:py-24 bg-surface-container border-y border-outline-variant/30">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Headline + Subheadline */}
        <div className="text-center mb-10 md:mb-12 space-y-3">
          <h2 className="font-noto-serif text-headline-md md:text-[28px] text-primary">
            Jadikan Momen Ulang Tahunnya Tak Terlupakan
          </h2>
          <p className="font-be-vietnam-pro text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Kue buatan bakery lokal, dibuat sesuai keinginanmu. Karena momen spesial layak dapat yang terbaik.
          </p>
        </div>

        {/* Main Product Image — full-width, larger than daily product cards */}
        <div className="rounded-xl overflow-hidden soft-shadow mb-6 md:mb-8">
          <img
            alt="Kue ulang tahun buatan bakery lokal: custom sesuai permintaan"
            className="w-full aspect-[4/3] md:aspect-[16/9] object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuANV7M5hqxSAogjMD5VBxScOSZUVh87mu6Hlzp3JewNAI5kcDz83iaOFE9VCNru8Taf1UZXRGErQFdbLPar1mOdv5a1UiX8wo-ocYI8oE7UzRd3hn1g1-V_QbEk1ci_twIeH6R2NkgFkLgu2vFb5AEXeake-Q42ERcgvsO2S3X8NGGuDYOD39IAzosdmyFiTpoLzO_2ytOE4FFPsXgG0uJTISJRzxbi_RTMQKLZ59Tc2HRgex2BRhflj7fX23SbD_QaisM_GG6AuM0h"
          />
        </div>

        {/* Body Copy */}
        <p className="font-be-vietnam-pro text-body-md md:text-body-lg text-on-surface-variant text-center max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
          Kami tahu setiap ulang tahun punya ceritanya sendiri. Makanya, setiap kue yang kami buat disesuaikan langsung dengan keinginanmu: mulai dari rasa, ukuran, hingga tampilan. Hubungi kami, ceritakan momennya, dan kami yang urus sisanya.
        </p>

        {/* Portfolio Images — 2 side-by-side */}
        <div className="grid grid-cols-2 gap-4 mb-8 md:mb-10">
          <div className="rounded-xl overflow-hidden soft-shadow aspect-square">
            <img
              alt="Contoh kue ulang tahun custom: portfolio 1"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANV7M5hqxSAogjMD5VBxScOSZUVh87mu6Hlzp3JewNAI5kcDz83iaOFE9VCNru8Taf1UZXRGErQFdbLPar1mOdv5a1UiX8wo-ocYI8oE7UzRd3hn1g1-V_QbEk1ci_twIeH6R2NkgFkLgu2vFb5AEXeake-Q42ERcgvsO2S3X8NGGuDYOD39IAzosdmyFiTpoLzO_2ytOE4FFPsXgG0uJTISJRzxbi_RTMQKLZ59Tc2HRgex2BRhflj7fX23SbD_QaisM_GG6AuM0h"
            />
          </div>
          <div className="rounded-xl overflow-hidden soft-shadow aspect-square">
            <img
              alt="Contoh kue ulang tahun custom: portfolio 2"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANV7M5hqxSAogjMD5VBxScOSZUVh87mu6Hlzp3JewNAI5kcDz83iaOFE9VCNru8Taf1UZXRGErQFdbLPar1mOdv5a1UiX8wo-ocYI8oE7UzRd3hn1g1-V_QbEk1ci_twIeH6R2NkgFkLgu2vFb5AEXeake-Q42ERcgvsO2S3X8NGGuDYOD39IAzosdmyFiTpoLzO_2ytOE4FFPsXgG0uJTISJRzxbi_RTMQKLZ59Tc2HRgex2BRhflj7fX23SbD_QaisM_GG6AuM0h"
            />
          </div>
        </div>

        {/* CTA — specific to this section */}
        <div className="text-center">
          <a
            href="https://wa.me/6281234567890"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary text-on-secondary px-8 py-4 rounded-full font-be-vietnam-pro text-label-lg hover:bg-on-secondary-container transition-all soft-shadow min-h-[56px]"
          >
            <Icon name="cake" className="w-5 h-5" />
            Konsultasi Pesanan Kue via WhatsApp
          </a>
          <p className="font-be-vietnam-pro text-label-sm text-outline mt-3">
            Pesan lebih awal untuk memastikan kue siap tepat waktu di hari istimewamu.
          </p>
        </div>
      </div>
    </section>
  );
}
