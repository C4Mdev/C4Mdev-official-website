"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Award, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import styles from "./StatsSection.module.css";

const stats = [
    {
        icon: TrendingUp,
        value: 50,
        suffix: "+",
        label: "Projects Delivered",
        desc: "Across web, mobile & SaaS",
        color: "#6c63ff",
    },
    {
        icon: Users,
        value: 30,
        suffix: "+",
        label: "Happy Clients",
        desc: "Worldwide across industries",
        color: "#a855f7",
    },
    {
        icon: Award,
        value: 100,
        suffix: "%",
        label: "Client Satisfaction",
        desc: "We don't ship until it's perfect",
        color: "#06b6d4",
    },
    {
        icon: Clock,
        value: 3,
        suffix: "+",
        label: "Years Experience",
        desc: "Building cutting-edge products",
        color: "#10b981",
    },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const duration = 1800;
                    const steps = 60;
                    const increment = target / steps;
                    let current = 0;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, duration / steps);
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}

export default function StatsSection() {
    return (
        <section className={styles.stats} id="stats">
            <div className="container">
                <AnimatedSection>
                    <div className={styles.header}>
                        <span className="badge">Our Impact</span>
                        <h2 className="section-title">
                            Leading the{" "}
                            <span className="gradient-text">Digital Revolution</span>
                        </h2>
                    </div>
                </AnimatedSection>

                <div className={styles.grid}>
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <AnimatedSection key={stat.label} delay={i * 100}>
                                <div className={styles.card}>
                                    <div
                                        className={styles.iconWrap}
                                        style={{ "--stat-color": stat.color } as React.CSSProperties}
                                    >
                                        <Icon size={22} />
                                    </div>
                                    <div
                                        className={styles.value}
                                        style={{ color: stat.color }}
                                    >
                                        <CountUp target={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className={styles.label}>{stat.label}</div>
                                    <div className={styles.desc}>{stat.desc}</div>
                                    <div
                                        className={styles.glow}
                                        style={{ background: `radial-gradient(circle, ${stat.color}20 0%, transparent 70%)` }}
                                    />
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
