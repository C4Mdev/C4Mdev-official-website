import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
    title: "Contact Us — Code4MatesDev",
    description:
        "Get in touch with Code4MatesDev. Let's discuss your project and how we can help bring your vision to life.",
};

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main>
                <PageHero
                    badge="Get In Touch"
                    title={<>Let&apos;s <span className="gradient-text">Talk</span></>}
                    subtitle="Have a project in mind? We'd love to hear about it. Schedule a free consultation and let's build something great together."
                />
                <ContactForm />
            </main>
            <Footer />
        </>
    );
}
