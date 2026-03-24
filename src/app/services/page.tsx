import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";

export const metadata: Metadata = {
    title: "Services — Code4MatesDev",
    description:
        "Discover our specialized services crafted to help your business grow with modern, scalable digital solutions.",
};

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <main>
                <PageHero
                    badge="What We Do"
                    title={
                        <>
                            Our <span className="gradient-text">Services</span>
                        </>
                    }
                    subtitle="Discover our specialized services crafted to help your business grow with modern, scalable digital solutions."
                />
                <ServicesSection enableModal />
                <ProcessSection />
            </main>
            <Footer />
        </>
    );
}
