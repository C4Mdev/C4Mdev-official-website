import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/components/LegalDocument.module.css";

export const metadata: Metadata = {
    title: "Terms of Service — Code4MatesDev",
    description:
        "Terms and conditions governing your use of Code4MatesDev's website and software development services.",
};

export default function TermsOfServicePage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <div className="container">
                    <article className={styles.article}>
                        <h1 className={styles.title}>📜 Terms &amp; Conditions</h1>
                        <p className={styles.updated}>
                            Last updated: {new Date().toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                        <p className={styles.lead}>
                            These Terms &amp; Conditions govern your use of our
                            website and services. By accessing or using our
                            website, you agree to comply with these terms.
                        </p>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>1. Services</h2>
                            <p>
                                We provide software development services including
                                website development, mobile applications, and related
                                digital solutions. All services are subject to agreed
                                project scope, timelines, and payment terms.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>2. Use of Website</h2>
                            <p>
                                You agree to use this website only for lawful
                                purposes and in a way that does not harm, disrupt,
                                or misuse the platform.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                3. Intellectual Property
                            </h2>
                            <p>
                                All content on this website, including text, design,
                                graphics, and code, is the property of our company
                                unless stated otherwise. You may not copy,
                                reproduce, or distribute any content without
                                permission.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                4. Payments &amp; Projects
                            </h2>
                            <ul className={styles.list}>
                                <li>
                                    Projects typically require advance payments
                                    before work begins
                                </li>
                                <li>
                                    Remaining payments must be completed as agreed
                                    in invoices or contracts
                                </li>
                                <li>
                                    Delays in payment may result in project
                                    suspension
                                </li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                5. Limitation of Liability
                            </h2>
                            <p>We are not liable for:</p>
                            <ul className={styles.list}>
                                <li>Any indirect or consequential damages</li>
                                <li>Loss of data, revenue, or business interruptions</li>
                                <li>
                                    Issues caused by third-party services or
                                    platforms
                                </li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                6. Project Delivery &amp; Revisions
                            </h2>
                            <ul className={styles.list}>
                                <li>
                                    We aim to deliver projects on time based on
                                    agreed scope
                                </li>
                                <li>
                                    Revisions are limited to the agreed number unless
                                    otherwise discussed
                                </li>
                                <li>
                                    Additional changes may incur extra charges
                                </li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>7. Termination</h2>
                            <p>We reserve the right to terminate services if:</p>
                            <ul className={styles.list}>
                                <li>Terms are violated</li>
                                <li>Payments are not made</li>
                                <li>Misuse or unethical behavior is detected</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                8. Third-Party Tools &amp; Services
                            </h2>
                            <p>
                                Our solutions may integrate third-party services. We
                                are not responsible for their performance, policies,
                                or changes.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>9. Changes to Terms</h2>
                            <p>
                                We may update these Terms &amp; Conditions at any
                                time. Continued use of the website means you accept
                                the updated terms.
                            </p>
                        </section>
                    </article>
                </div>
            </main>
            <Footer />
        </>
    );
}
