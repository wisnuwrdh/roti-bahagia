export default function HeroSection() {
  return (
    <section className="relative min-h-[921px] flex items-center justify-center pt-20 pb-32 px-margin-mobile md:px-margin-desktop">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Artisanal bread flatlay"
          className="w-full h-full object-cover opacity-20"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7A22kyy9qfDo7iSU0pMI6nycXoYSEPE2DVqwOA-4u9rD6tS_268YelG5oB5HHfjIIfBjrugr3ZVPAIVQZ9HGEf52vndpgxYpp-wGkz9By6CLmJRsMjxVpkkXhB_jzMIL5ar_eJePKEEGSSvgo91qJhIGyXPGd1r3T0wmjQAnUYhmkPWdFMz6n6IOv5AkJwVAd0UO3910gYRrag_8loVSjP63gHJ9M_e2Yohq60SWRR4xbGYQle2mPrtJxQsT53uVsyIwz660nkaoz"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 mt-16">
        <h1 className="font-noto-serif text-display-lg-mobile md:text-display-lg text-on-background">
          Roti Segar Bakery Lokal —{" "}
          <br className="hidden md:block" />
          <span className="text-primary italic">
            Pesan Lewat WhatsApp, Siap Hari Ini
          </span>
        </h1>

        <p className="font-be-vietnam-pro text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Nggak perlu ribet. Pilih rotimu, chat kami, dan pesananmu siap —
          semudah itu.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-be-vietnam-pro text-label-lg hover:bg-surface-tint transition-all soft-shadow hover:-translate-y-1"
          >
            <span className="material-symbols-outlined">chat</span>
            Chat WhatsApp Sekarang
          </a>
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-tertiary text-tertiary px-8 py-4 rounded-full font-be-vietnam-pro text-label-lg hover:bg-tertiary hover:text-on-tertiary transition-all"
          >
            Lihat Menu
          </a>
        </div>

        <p className="font-be-vietnam-pro text-label-sm text-outline flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-[16px]">bolt</span>
          Respon cepat — biasanya dalam beberapa menit.
        </p>
      </div>
    </section>
  );
}
