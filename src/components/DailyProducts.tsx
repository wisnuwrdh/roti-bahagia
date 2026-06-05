import Icon from "./Icon";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "Roti Tawar",
    description:
      "Lembut di dalam, sempurna untuk sarapan keluarga setiap pagi.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkmEJCGa6bpBYq_RZSu5_8yF2ZJHY5vfvtqMuZ5qgXU1hZWjGAFU4Pw_bg5rLW68I60uRZPS4O9f6Do72hl5T_j7d8ipAj6H7_ycw-X02EHzO6qDVgP3I4w_uamwWv70b8Epz69jiktlY3PW6rHaLJQZaj5fc9AZaTr83-GKhU_sPJXcDgiFna0ufHntZvK41CoXRLvvIZSuPcoVM4Jm2fUagEHiqw0gbnXjiuuAVsNnBYfwDMbTO6WTCLUiGdNwT1ZW9r8xEH8LXZ",
    imageAlt:
      "Close up macro photography of freshly baked sliced white bread on marble countertop",
  },
  {
    title: "Croissant",
    description:
      "Berlapis renyah di luar, lembut di dalam. Teman kopi terbaik.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMDm6RSxp8E-A0nJ8WWwxtdsg56tb17tZOCr_Dw9hDxHpuGDq5UYhx5ECcDp4bHuRNpsVUCKmQYuDGFOeMhT4Adn_QWdLT4nRUiq3KHEbyn74z6JsNeAIKEWPDwkwg2sPXfCp0FBNECQUyK6XcBiEobirEZ6dZ4rRufTaqd4OLs6avAk8yj-uTih5CDOXDIc6tvt4QcjTLR8o-zAVnLGSR03pb2h6Vw6tK62K9LaUTg2WeSTImlGD8W6TKDhRovEMv-AoQPEKjzDeQ",
    imageAlt: "Flaky golden-brown artisanal croissant on linen cloth",
  },
  {
    title: "Donat",
    description:
      "Manis, empuk, dan bikin semangat. Untuk kamu dan si kecil.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBo45pkOA8Wr3VVec1xzQyYwSyYuooGAY2rCq7L-jzK3JiSiFqq_AkWMTR8FGgri8PCYVa3yhThtYHbjO6C3LXZwN9_YAc6DQOsYGqNM5ooUG50YXrcpwOky23p5w1uBOonTLuA7WRldF_ZANu-_eYNmAr2G7pNN8hpkz5wtGNY3nf8DqSpt3VIM9Bgj96nzX-G3EfXy_4d7ULj9KX9wgNlG0VxjET1tX7Fub-vj5_-QcObgQu-SXJo6XKi-M3gcHqtRvdM2gNgrBeZ",
    imageAlt: "Artisanal glazed donut dusted with sugar on ceramic plate",
  },
  {
    title: "Roti Gandum",
    description:
      "Lebih sehat, tetap enak. Pilihan tepat untuk gaya hidup aktif.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdqXNkc2jubWodqVSxo9xj4P8e2BXQut7WoZXhaEFqPRUV62y36jdCqg9sAGF4J_g2mIJi4-heJn6588ZY98clhaJ5OppPHkNu02RMU8u3tgXB3XxB5ZdZkCCVtaAjGiNJkuGQDtm7lAC9Jgb7JDti6EIvNMa-irnHpjLaEXOmb0rX7AISLFSnF5iB1bo-Alp0Zu15uaVecioQ1Xe0gulS4r-Eck3NPnBtk5lSf6yodST9ZxO4jEAdPV0YSSNeLwuF7fqGdu0GVSp4",
    imageAlt: "Rustic whole wheat bread loaf on wooden cutting board",
  },
];

export default function DailyProducts() {
  return (
    <section className="py-6 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="menu">
      {/* Headline + Subheadline */}
      <div className="text-center mb-10 md:mb-12 space-y-3">
        <h2 className="font-noto-serif text-headline-md md:text-[28px] text-primary">
          Pilihan Roti Segar untuk Hari-Harimu
        </h2>
        <p className="font-be-vietnam-pro text-body-lg text-on-surface-variant">
          Dari sarapan pagi sampai camilan sore, semua ada dan semua segar.
        </p>
      </div>

      {/* Product Grid — 2 columns mobile */}
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>

      {/* Section CTA */}
      <div className="mt-10 md:mt-12 text-center">
        <a
          href="https://wa.me/6281234567890"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-be-vietnam-pro text-label-lg hover:bg-surface-tint transition-all soft-shadow min-h-[56px]"
        >
          <Icon name="chat" className="w-5 h-5" />
          Pesan via WhatsApp
        </a>
        <p className="font-be-vietnam-pro text-label-sm text-outline mt-3">
          Tanya harga dan ketersediaan hari ini langsung di WhatsApp. Cepat, mudah, tanpa ribet.
        </p>
      </div>
    </section>
  );
}
