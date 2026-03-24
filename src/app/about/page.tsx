import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import AboutUsHero from "@/components/AboutUsHero";

export const metadata: Metadata = {
    title: "About Us - Code4MatesDev",
    description:
        "Learn about Code4MatesDev — a passionate team of software engineers and designers dedicated to creating innovative digital solutions.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Us - Code4MatesDev",
        description:
            "Learn about Code4MatesDev — a passionate team of software engineers and designers dedicated to creating innovative digital solutions.",
        url: "/about",
        images: ["/LOGONEW_WHITE.png"],
    },
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main>
                <AboutUsHero />
                <AboutSection />
                <CTASection />
            </main>
            <Footer />
        </>
    );
}
