import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Code4MatesDev - Digital Innovation Leaders",
  description:
    "Code4MatesDev crafts groundbreaking digital solutions — custom web apps, enterprise SaaS, and stunning UI/UX design — that empower businesses to lead and innovate.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Code4MatesDev - Digital Innovation Leaders",
    description:
      "Code4MatesDev crafts groundbreaking digital solutions — custom web apps, enterprise SaaS, and stunning UI/UX design — that empower businesses to lead and innovate.",
    url: "/",
    images: ["/LOGONEW_WHITE.png"],
  },
};

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
