import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/components/LegalDocument.module.css";

export const metadata: Metadata = {
    title: "Privacy Policy - Code4MatesDev",
    description:
        "How Code4MatesDev collects, uses, and protects your information when you use our website and services.",
    alternates: {
        canonical: "/privacy",
    },
    openGraph: {
        title: "Privacy Policy - Code4MatesDev",
        description:
            "How Code4MatesDev collects, uses, and protects your information when you use our website and services.",
        url: "/privacy",
        images: ["/LOGONEW_WHITE.png"],
    },
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <div className="container">
                    <article className={styles.article}>
                        <h1 className={styles.title}>🔐 Privacy Policy</h1>
                        <p className={styles.updated}>
                            Last updated: {new Date().toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                        <p className={styles.lead}>
                            This Privacy Policy explains how we collect, use, and
                            protect your information when you use our website and
                            services. We are committed to safeguarding your privacy
                            and ensuring that your personal data is handled securely
                            and responsibly.
                        </p>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                1. Information We Collect
                            </h2>
                            <p>We may collect the following types of information:</p>
                            <ul className={styles.list}>
                                <li>
                                    Personal details (such as name, email address,
                                    phone number)
                                </li>
                                <li>
                                    Business information provided through contact
                                    forms or inquiries
                                </li>
                                <li>
                                    Technical data (IP address, browser type,
                                    device information)
                                </li>
                                <li>
                                    Usage data (pages visited, time spent on the
                                    site)
                                </li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                2. How We Use Your Information
                            </h2>
                            <p>We use your information to:</p>
                            <ul className={styles.list}>
                                <li>Respond to inquiries and communicate with you</li>
                                <li>Provide and manage our services</li>
                                <li>Improve our website and user experience</li>
                                <li>
                                    Send updates, proposals, or service-related
                                    information
                                </li>
                                <li>Ensure security and prevent fraud</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                3. Data Protection
                            </h2>
                            <p>
                                We implement appropriate technical and organizational
                                measures to protect your data against unauthorized
                                access, loss, or misuse.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                4. Sharing of Information
                            </h2>
                            <p>
                                We do not sell, trade, or rent your personal
                                information. We may share data only when necessary:
                            </p>
                            <ul className={styles.list}>
                                <li>
                                    With trusted service providers assisting our
                                    operations
                                </li>
                                <li>When required by law or legal obligations</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>5. Cookies</h2>
                            <p>
                                Our website may use cookies to enhance user
                                experience and analyze website traffic. You can
                                choose to disable cookies through your browser
                                settings.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                6. Third-Party Links
                            </h2>
                            <p>
                                Our website may contain links to external websites.
                                We are not responsible for the privacy practices of
                                those websites.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>7. Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul className={styles.list}>
                                <li>Request access to your data</li>
                                <li>Request corrections or deletion of your data</li>
                                <li>Withdraw consent at any time</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                8. Updates to This Policy
                            </h2>
                            <p>
                                We may update this Privacy Policy from time to time.
                                Changes will be posted on this page with the updated
                                date.
                            </p>
                        </section>
                    </article>
                </div>
            </main>
            <Footer />
        </>
    );
}
