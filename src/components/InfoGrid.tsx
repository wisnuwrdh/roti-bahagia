const infoCards = [
  {
    icon: "schedule",
    title: "Jam Buka",
    description: (
      <>
        Setiap Hari
        <br />
        06:00 - 20:00
      </>
    ),
  },
  {
    icon: "location_on",
    title: "Lokasi",
    description: (
      <>
        Jl. Roti Hangat No. 12
        <br />
        Jakarta Selatan
      </>
    ),
  },
  {
    icon: "payments",
    title: "Harga",
    description: "Tanya via WhatsApp untuk list harga terbaru.",
  },
  {
    icon: "local_shipping",
    title: "Pengiriman",
    description: "Tersedia via Kurir Instant.",
  },
];

export default function InfoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {infoCards.map((card) => (
        <div
          key={card.title}
          className="glass-card p-6 rounded-xl flex items-start gap-4"
        >
          <span className="material-symbols-outlined text-tertiary text-[28px]">
            {card.icon}
          </span>
          <div>
            <h4 className="font-be-vietnam-pro text-label-lg text-on-background mb-1">
              {card.title}
            </h4>
            <p className="font-be-vietnam-pro text-body-md text-on-surface-variant text-sm">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
