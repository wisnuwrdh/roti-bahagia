import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DailyProducts from "@/components/DailyProducts";
import CustomCakes from "@/components/CustomCakes";
import HowToOrder from "@/components/HowToOrder";
import InfoGrid from "@/components/InfoGrid";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Texture Overlay */}
      <div className="fixed inset-0 texture-overlay z-0 pointer-events-none" />

      <Navbar />

      <main className="relative z-10">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Product Showcase — Produk Harian */}
        <DailyProducts />

        {/* Section 3: Hero Product — Kue Ulang Tahun & Pesanan Khusus */}
        <CustomCakes />

        {/* Section 4: Cara Pesan */}
        <HowToOrder />

        {/* Section 5: Informasi Penting */}
        <InfoGrid />

        {/* Section 6: Social Proof — Testimoni & Kepercayaan */}
        <SocialProof />

        {/* Section 7: Final CTA */}
        <FinalCTA />
      </main>

      {/* Section 8: Footer */}
      <Footer />
    </>
  );
}
