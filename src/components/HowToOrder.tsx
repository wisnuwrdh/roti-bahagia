const steps = [
  {
    icon: "mark_chat_read",
    title: "1. Chat Kami",
    description: "Hubungi via WhatsApp, pilih roti favoritmu.",
  },
  {
    icon: "receipt_long",
    title: "2. Konfirmasi",
    description: "Kami siapkan pesanan dan total biayanya.",
  },
  {
    icon: "shopping_bag",
    title: "3. Ambil/Terima",
    description: "Ambil di toko atau tunggu diantar ke rumah.",
  },
];

export default function HowToOrder() {
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="font-noto-serif text-headline-md text-primary mb-4">
          Pesan Semudah Chat — 3 Langkah Saja
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-outline-variant/50 z-0"></div>

        {steps.map((step) => (
          <div
            key={step.title}
            className="relative z-10 flex flex-col items-center text-center space-y-4"
          >
            <div className="w-24 h-24 rounded-full bg-surface-container-highest border-4 border-background flex items-center justify-center soft-shadow text-primary">
              <span className="material-symbols-outlined text-[40px]">
                {step.icon}
              </span>
            </div>
            <h3 className="font-noto-serif text-headline-sm">{step.title}</h3>
            <p className="font-be-vietnam-pro text-body-md text-on-surface-variant">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
