import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OurLatestWorkSection from "@/components/OurLatestWorkSection";

export const metadata: Metadata = {
    title: "Our Works — Code4MatesDev",
    description:
        "Explore our portfolio of successful projects — web apps, SaaS platforms, mobile apps, and more.",
};

export default function WorksPage() {
    return (
        <>
            <Navbar />
            <main>
                <PageHero
                    badge="Portfolio"
                    title={
                        <>
                            Our <span className="gradient-text">Works</span>
                        </>
                    }
                    subtitle="Discover solutions designed to help businesses grow and customers love what they use. Explore our latest projects and results."
                />
                <OurLatestWorkSection />
            </main>
            <Footer />
        </>
    );
}
