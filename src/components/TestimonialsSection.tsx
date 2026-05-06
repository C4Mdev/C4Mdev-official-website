"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
    {
        id: "t1",
        name: "United Accountancy.",
        job: "CEO",
        initials: "UA",
        rating: 5,
        text: "We recently partnered with Code4Mates to develop a custom client management system for our firm, and the experience was seamless from start to finish. The team took the time to understand our specific workflows and delivered a robust, intuitive solution that has significantly boosted our efficiency. Their technical expertise is matched only by their professionalism. If you're looking for a development crew that delivers high-quality code on time, I can’t recommend Code4Mates enough.",
    },
    {
        id: "t2",
        name: "Rishantha D.",
        job: "Operations Lead",
        initials: "RD",
        rating: 5,
        text: "Search, listings, and admin are snappy. We ship more inventory with less back-and-forth. Clear communication across time zones — exactly what we needed from an offshore partner.",
    },
    {
        id: "t3",
        name: "Nuwan G.",
        job: "Founder",
        initials: "NG",
        rating: 5,
        text: "From discovery to launch, they treated our product like their own. Bookings and payments feel smooth for guests. We got agency-quality work without the Western price tag.",
    },
    {
        id: "t4",
        name: "Sarah M.",
        job: "Head of Product",
        initials: "SM",
        rating: 5,
        text: "Three engineers, zero fluff. They integrated with our stack, documented decisions, and shipped on schedule. We have kept them on for phase two without hesitation.",
    },
    {
        id: "t5",
        name: "James W.",
        job: "IT Director",
        initials: "JW",
        rating: 5,
        text: "We needed a POS and inventory view our staff could learn in a day. The UI is clear, support is responsive, and we are seeing fewer errors at checkout.",
    },
    {
        id: "t6",
        name: "Priya K.",
        job: "Startup CTO",
        initials: "PK",
        rating: 5,
        text: "Solid architecture, sensible defaults, and no surprise invoices. They ship like a product team, not a body shop. Our investors were happy with the velocity.",
    },
];

export default function TestimonialsSection() {
    const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

    const handleToggleExpand = (id: string) => {
        setExpandedIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    return (
        <section className={`section ${styles.testimonials}`} id="testimonials">
            <div className="container">
                {/* Same header pattern as Our Works (WorksSection) */}
                <div className={styles.header}>
                    <div>
                        <span className="badge">Testimonials</span>
                        <h2 className="section-title" style={{ marginTop: "16px" }}>
                            What Our Clients
                            <br />
                            <span className="gradient-text">Say About Us</span>
                        </h2>
                        <p className="section-subtitle">
                            Hear from teams who trusted us with custom ERP, POS, eCommerce, and web
                            platforms - from Sri Lanka to remote partners worldwide. We focus on
                            clear communication, senior-level delivery, and software you can run for
                            years.
                        </p>
                    </div>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((t) => {
                        const isExpanded = expandedIds.has(t.id);

                        return (
                            <article key={t.id} className={styles.card}>
                                <div
                                    className={styles.stars}
                                    aria-label={`${t.rating} out of 5 stars`}
                                >
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                        <Star key={i} size={14} className={styles.star} aria-hidden />
                                    ))}
                                </div>
                                <blockquote
                                    className={`${styles.text} ${!isExpanded ? styles.textClamped : ""}`}
                                >
                                    &ldquo;{t.text}&rdquo;
                                </blockquote>
                                <button
                                    type="button"
                                    className={styles.seeMoreBtn}
                                    onClick={() => handleToggleExpand(t.id)}
                                >
                                    {isExpanded ? "See less" : "See more"}
                                </button>
                                <div className={styles.cardBottom}>
                                    <div className={styles.author}>
                                        <div className={styles.avatar} aria-hidden>
                                            {t.initials}
                                        </div>
                                        <div className={styles.authorText}>
                                            <div className={styles.name}>{t.name}</div>
                                            <div className={styles.job}>{t.job}</div>
                                        </div>
                                    </div>
                                    <span className={styles.quoteDecor} aria-hidden>
                                        &rdquo;
                                    </span>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
