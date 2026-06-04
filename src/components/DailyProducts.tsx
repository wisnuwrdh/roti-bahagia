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
    badge: "Best Seller",
    layout: "default" as const,
  },
  {
    title: "Croissant",
    description:
      "Berlapis renyah di luar, lembut di dalam — teman kopi terbaik.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMDm6RSxp8E-A0nJ8WWwxtdsg56tb17tZOCr_Dw9hDxHpuGDq5UYhx5ECcDp4bHuRNpsVUCKmQYuDGFOeMhT4Adn_QWdLT4nRUiq3KHEbyn74z6JsNeAIKEWPDwkwg2sPXfCp0FBNECQUyK6XcBiEobirEZ6dZ4rRufTaqd4OLs6avAk8yj-uTih5CDOXDIc6tvt4QcjTLR8o-zAVnLGSR03pb2h6Vw6tK62K9LaUTg2WeSTImlGD8W6TKDhRovEMv-AoQPEKjzDeQ",
    imageAlt: "Flaky golden-brown artisanal croissant on linen cloth",
    layout: "default" as const,
  },
  {
    title: "Donat",
    description:
      "Manis, empuk, dan bikin semangat — untuk kamu dan si kecil.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBo45pkOA8Wr3VVec1xzQyYwSyYuooGAY2rCq7L-jzK3JiSiFqq_AkWMTR8FGgri8PCYVa3yhThtYHbjO6C3LXZwN9_YAc6DQOsYGqNM5ooUG50YXrcpwOky23p5w1uBOonTLuA7WRldF_ZANu-_eYNmAr2G7pNN8hpkz5wtGNY3nf8DqSpt3VIM9Bgj96nzX-G3EfXy_4d7ULj9KX9wgNlG0VxjET1tX7Fub-vj5_-QcObgQu-SXJo6XKi-M3gcHqtRvdM2gNgrBeZ",
    imageAlt: "Artisanal glazed donut dusted with sugar on ceramic plate",
    layout: "horizontal" as const,
  },
  {
    title: "Roti Gandum",
    description:
      "Lebih sehat, tetap enak — pilihan tepat untuk gaya hidup aktif.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdqXNkc2jubWodqVSxo9xj4P8e2BXQut7WoZXhaEFqPRUV62y36jdCqg9sAGF4J_g2mIJi4-heJn6588ZY98clhaJ5OppPHkNu02RMU8u3tgXB3XxB5ZdZkCCVtaAjGiNJkuGQDtm7lAC9Jgb7JDti6EIvNMa-irnHpjLaEXOmb0rX7AISLFSnF5iB1bo-Alp0Zu15uaVecioQ1Xe0gulS4r-Eck3NPnBtk5lSf6yodST9ZxO4jEAdPV0YSSNeLwuF7fqGdu0GVSp4",
    imageAlt: "Rustic whole wheat bread loaf on wooden cutting board",
    layout: "horizontal" as const,
  },
];

export default function DailyProducts() {
  return (
    <section
      className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      id="menu"
    >
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-noto-serif text-headline-md text-primary">
          Pilihan Roti Segar untuk Hari-Harimu
        </h2>
        <div className="h-1 w-24 bg-secondary mx-auto rounded-full opacity-50"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Roti Tawar */}
        <ProductCard {...products[0]} />

        {/* Croissant */}
        <ProductCard {...products[1]} />

        {/* Stacked in 3rd column on large screens */}
        <div className="flex flex-col gap-6">
          <ProductCard {...products[2]} />
          <ProductCard {...products[3]} />
        </div>
      </div>
    </section>
  );
}
