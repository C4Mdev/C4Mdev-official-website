import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TechMarquee from "@/components/TechMarquee";
import ServicesSection from "@/components/ServicesSection";
import WorksSection from "@/components/WorksSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TechMarquee />
        <ServicesSection />
       {/*} <StatsSection />*/}
        <WorksSection />
       {/* <ProcessSection />*/}
{/*<AboutSection />*/}
        {/*<TestimonialsSection />*/}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
