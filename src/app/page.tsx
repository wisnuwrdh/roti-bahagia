import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DailyProducts from "@/components/DailyProducts";
import CustomCakes from "@/components/CustomCakes";
import HowToOrder from "@/components/HowToOrder";
import InfoGrid from "@/components/InfoGrid";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Texture Overlay */}
      <div className="fixed inset-0 texture-overlay z-0"></div>

      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <DailyProducts />
        <CustomCakes />

        {/* How to Order & Info Grid (Combined) */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-24">
          <HowToOrder />
          <InfoGrid />
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
