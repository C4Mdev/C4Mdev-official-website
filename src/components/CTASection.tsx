"use client";

import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import styles from "./CTASection.module.css";

export default function CTASection() {
    return (
        <section className={`section ${styles.cta}`} id="cta">
            <div className="container">
                <div className={styles.card}>
                    {/* Background */}
                    <div className={styles.bg}>
                        <div className={styles.orb1} />
                        <div className={styles.orb2} />
                        <div className={styles.grid} />
                    </div>

                    {/* Content */}
                    <div className={styles.content}>
                        <span className={styles.badge}>Ready to Start?</span>
                        <h2 className={styles.title}>
                            Let&apos;s Build Something
                            <br />
                            <span className={styles.gradientText}>Extraordinary Together</span>
                        </h2>
                        <p className={styles.desc}>
                            Have a project in mind? We&apos;d love to hear about it. Let&apos;s
                            schedule a free consultation and discuss how we can help bring your
                            vision to life.
                        </p>

                        <div className={styles.actions}>
                            <Link href="/contact" className={styles.primaryBtn} id="cta-start-project">
                                Start Your Project
                                <ArrowRight size={16} />
                            </Link>
                            <div className={styles.contacts}>
                                <a href="mailto:info@code4matesdev.com" className={styles.contactItem}>
                                    <Mail size={14} />
                                    info@code4matesdev.com
                                </a>
                                <a href="tel:+94714845708" className={styles.contactItem}>
                                    <Phone size={14} />
                                    +94 71 484 5708
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
