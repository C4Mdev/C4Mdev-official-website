"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import styles from "./HeroSection.module.css";

const stats = [
    { value: "10+", label: "Projects Delivered" },
    { value: "10+", label: "Happy Clients" },
    { value: "3+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
];

export default function HeroSection() {
    return (
        <section className={styles.hero} id="hero">
            {/* Background Elements */}
            <div className={styles.bg}>
                <div className={`${styles.orb} ${styles.orb1}`} />
                <div className={`${styles.orb} ${styles.orb2}`} />
                <div className={`${styles.orb} ${styles.orb3}`} />
                <div className={styles.grid} />
            </div>

            <div className={`container ${styles.content}`}>
                {/* Badge */}
                <div className={styles.badge}>
                    <Sparkles size={12} />
                    Digital Innovation Leaders
                </div>

                {/* Heading */}
                <h1 className={styles.heading}>
                    Redefining{" "}
                    <span className={styles.gradientWord}>Digital</span>
                    <br />
                    <span className={styles.gradientWord}>Excellence</span> for Your
                    <br />
                    Visionary Business
                </h1>

                {/* Subtext */}
                <p className={styles.subtext}>
                    At Code4MatesDev, we craft groundbreaking digital solutions that empower
                    businesses to lead, innovate, and succeed in an ever-changing world.
                </p>

                {/* CTAs */}
                <div className={styles.ctas}>
                    <Link href="/contact" className="btn-primary" id="hero-cta-primary">
                        Become A Client
                        
                    </Link>
                    <Link href="/works" className="btn-secondary" id="hero-cta-works">
                        View Our Works
                    </Link>
                </div>

                {/* Stats */}
               {/*} <div className={styles.stats}>
                    {stats.map((stat) => (
                        <div key={stat.label} className={styles.stat}>
                            <span className={styles.statValue}>{stat.value}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </div>
                    ))}
                </div>*/}
            </div>

            {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
                <ChevronDown size={20} />
            </div>

            {/* Floating Cards */}
            <div className={styles.floatingCards}>
                <div className={`${styles.floatCard} ${styles.floatCard1}`}>
                    <div className={styles.floatCardDot} />
                    <span>React & Next.js</span>
                </div>
                <div className={`${styles.floatCard} ${styles.floatCard2}`}>
                    <div className={`${styles.floatCardDot} ${styles.dotCyan}`} />
                    <span>Cloud Native</span>
                </div>
                <div className={`${styles.floatCard} ${styles.floatCard3}`}>
                    <div className={`${styles.floatCardDot} ${styles.dotPink}`} />
                    <span>UI/UX Design</span>
                </div>
            </div>
        </section>
    );
}
