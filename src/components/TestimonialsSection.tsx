"use client";

import { Quote, Star } from "lucide-react";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
    {
        id: "t1",
        name: "Sarah Johnson",
        role: "CEO, TechVentures Inc.",
        avatar: "SJ",
        color: "#6c63ff",
        rating: 5,
        text: "Code4MatesDev transformed our entire digital infrastructure. Their team delivered a world-class SaaS platform that exceeded every expectation. Truly exceptional work.",
    },
    {
        id: "t2",
        name: "Michael Chen",
        role: "CTO, FinanceFlow",
        avatar: "MC",
        color: "#06b6d4",
        rating: 5,
        text: "The attention to detail and technical expertise shown by the Code4MatesDev team is unmatched. Our fintech platform handles millions of transactions flawlessly.",
    },
    {
        id: "t3",
        name: "Priya Patel",
        role: "Founder, HealthBridge",
        avatar: "PP",
        color: "#10b981",
        rating: 5,
        text: "Working with Code4MatesDev was a game-changer. They understood our complex healthcare requirements and delivered a HIPAA-compliant solution on time and within budget.",
    },
    {
        id: "t4",
        name: "James Wilson",
        role: "Product Manager, EduTech Co.",
        avatar: "JW",
        color: "#f59e0b",
        rating: 5,
        text: "The UI/UX design work was absolutely stunning. Our user engagement increased by 300% after the redesign. Code4MatesDev truly understands user-centered design.",
    },
    {
        id: "t5",
        name: "Emma Rodriguez",
        role: "Director, RetailMax",
        avatar: "ER",
        color: "#a855f7",
        rating: 5,
        text: "Our e-commerce platform now processes 10x more orders than before. The scalable architecture they built is rock-solid. Highly recommend Code4MatesDev!",
    },
    {
        id: "t6",
        name: "David Kim",
        role: "VP Engineering, CloudSoft",
        avatar: "DK",
        color: "#ef4444",
        rating: 5,
        text: "From initial consultation to final deployment, the entire experience was seamless. Their agile process kept us informed every step of the way. Outstanding team.",
    },
];

export default function TestimonialsSection() {
    return (
        <section className={`section ${styles.testimonials}`} id="testimonials">
            <div className="container">
                {/* Header */}
                <div className={styles.header}>
                    <span className="badge">Client Stories</span>
                    <h2 className="section-title">
                        Trusted by Businesses
                        <br />
                        <span className="gradient-text">Around the World</span>
                    </h2>
                    <p className="section-subtitle">
                        Don&apos;t just take our word for it — hear from the businesses we&apos;ve
                        helped transform with our digital solutions.
                    </p>
                </div>

                {/* Grid */}
                <div className={styles.grid}>
                    {testimonials.map((t) => (
                        <div key={t.id} className={styles.card} id={t.id}>
                            <div className={styles.cardTop}>
                                <Quote size={20} className={styles.quoteIcon} />
                                <div className={styles.stars}>
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                        <Star key={i} size={12} className={styles.star} />
                                    ))}
                                </div>
                            </div>
                            <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
                            <div className={styles.author}>
                                <div
                                    className={styles.avatar}
                                    style={{ background: `${t.color}22`, color: t.color, borderColor: `${t.color}44` }}
                                >
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className={styles.name}>{t.name}</div>
                                    <div className={styles.role}>{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
