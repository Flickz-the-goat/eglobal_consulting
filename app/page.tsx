import Hero from "@/sections/Hero";
import Navbar from "@/components/Navbar";
import WhySection from "@/sections/WhySection";
import StepsSection from "@/sections/StepsSection";
import Security from "@/sections/Security";
import CtaSection from "@/sections/CtaSection";
import Footer from "@/sections/Footer";
export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <WhySection />
      <StepsSection />
      <Security />
      <CtaSection />
      <Footer />
    </main>
  );
}
