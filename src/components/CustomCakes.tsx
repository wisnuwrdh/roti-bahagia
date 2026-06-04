export default function CustomCakes() {
  return (
    <section className="py-24 bg-surface-container-high border-y border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image side */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden soft-shadow relative z-10">
              <img
                alt="Custom Artisanal Cake"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANV7M5hqxSAogjMD5VBxScOSZUVh87mu6Hlzp3JewNAI5kcDz83iaOFE9VCNru8Taf1UZXRGErQFdbLPar1mOdv5a1UiX8wo-ocYI8oE7UzRd3hn1g1-V_QbEk1ci_twIeH6R2NkgFkLgu2vFb5AEXeake-Q42ERcgvsO2S3X8NGGuDYOD39IAzosdmyFiTpoLzO_2ytOE4FFPsXgG0uJTISJRzxbi_RTMQKLZ59Tc2HRgex2BRhflj7fX23SbD_QaisM_GG6AuM0h"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary-fixed/30 rounded-full blur-3xl z-0"></div>
          </div>

          {/* Text side */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-8">
            <div className="inline-block px-4 py-2 bg-secondary-fixed rounded-full font-be-vietnam-pro text-label-sm text-on-secondary-fixed-variant">
              Special Orders
            </div>
            <h2 className="font-noto-serif text-headline-md text-primary">
              Jadikan Momen Ulang Tahunnya Tak Terlupakan
            </h2>
            <p className="font-be-vietnam-pro text-body-lg text-on-surface-variant leading-relaxed">
              Kue buatan bakery lokal, dibuat sesuai keinginanmu — karena momen
              spesial layak dapat yang terbaik. Kami tahu setiap ulang tahun
              punya ceritanya sendiri.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-8 py-4 rounded-full font-be-vietnam-pro text-label-lg hover:bg-on-secondary-container transition-all soft-shadow"
            >
              <span className="material-symbols-outlined">cake</span>
              Konsultasi Pesanan Kue
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
