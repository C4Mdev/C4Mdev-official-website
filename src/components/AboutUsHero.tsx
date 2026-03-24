"use client";

import Image from "next/image";
import styles from "./AboutUsHero.module.css";
import { Star } from "lucide-react";

export default function AboutUsHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.bg}>
                <div className={styles.orb1} />
                <div className={styles.orb2} />
                <div className={styles.grid} />
            </div>

            <div className={`container ${styles.inner}`}>
                <div className={styles.left}>
                    <span className={`badge ${styles.badge}`}>
                        <Star size={12} />
                        ABOUT US
                    </span>

                    <h1 className={styles.title}>
                        Built To Make Growth
                        <br />
                        <span className={styles.titleAccent}>Simpler</span>
                    </h1>

                    <p className={styles.subtitle}>
                        We help businesses establish a powerful online presence through custom software
                        solutions, modern UI/UX design, and scalable development practices.
                    </p>

                    <div className={styles.missionVision}>
                        <div className={styles.miniCard}>
                            <span className={styles.miniTitle}>Our Mission</span>
                            <p className={styles.miniText}>
                            To empower businesses and individuals with cutting-edge digital solutions that drive growth, improve efficiency, and enhance user satisfaction through relentless innovation and technical excellence.
                            </p>
                        </div>
                        <div className={styles.miniCard}>
                            <span className={styles.miniTitle}>Our Vision</span>
                            <p className={styles.miniText}>
                            To be a global leader in Digital services, renowned for pioneering technologies that shape the future and create lasting value for our clients, partners, and communities.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.imageCard}>
                        <div className={styles.imageWrap}>
                            <Image
                                src="/about%20us.jpg"
                                alt="About us showcase"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className={styles.heroImage}
                                priority
                            />
                        </div>

                        <div className={styles.quote}>
                            <p className={styles.quoteText}>
                                &ldquo;Our goal is to build digital experiences that leave a lasting impression.&rdquo;
                            </p>
                            <span className={styles.quoteBy}>— Code4MatesDev</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

