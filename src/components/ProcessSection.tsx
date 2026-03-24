"use client";

import { MessageSquare, Lightbulb, Code2, Rocket, HeartHandshake } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import styles from "./ProcessSection.module.css";

const steps = [
    {
        number: "01",
        icon: MessageSquare,
        title: "Discovery & Planning",
        description:
            "We start by deeply understanding your business goals, target audience, and technical requirements through collaborative workshops and research.",
        color: "#6c63ff",
    },
    {
        number: "02",
        icon: Lightbulb,
        title: "Design & Prototyping",
        description:
            "Our designers craft stunning wireframes and interactive prototypes, iterating until every interaction feels intuitive and on-brand.",
        color: "#a855f7",
    },
    {
        number: "03",
        icon: Code2,
        title: "Development",
        description:
            "Our engineers build your product using modern tech stacks, following agile sprints with regular demos and feedback loops.",
        color: "#06b6d4",
    },
    {
        number: "04",
        icon: Rocket,
        title: "Testing & Launch",
        description:
            "Rigorous QA testing, performance optimization, and security hardening ensure your product launches flawlessly.",
        color: "#10b981",
    },
    {
        number: "05",
        icon: HeartHandshake,
        title: "Support & Growth",
        description:
            "Post-launch, we provide ongoing maintenance, monitoring, and feature development to keep your product evolving.",
        color: "#f59e0b",
    },
];

export default function ProcessSection() {
    return (
        <section className={styles.process} id="process">
            <div className="container">
                <AnimatedSection>
                    <div className={styles.header}>
                        <span className="badge">How We Work</span>
                        <h2 className="section-title">
                            Our Proven{" "}
                            <span className="gradient-text">Process</span>
                        </h2>
                        <p className="section-subtitle">
                            A structured, transparent approach that keeps you informed and in
                            control at every stage of your project.
                        </p>
                    </div>
                </AnimatedSection>

                <div className={styles.timeline}>
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        const isEven = i % 2 === 1;
                        return (
                            <AnimatedSection
                                key={step.number}
                                delay={i * 80}
                                direction={isEven ? "right" : "left"}
                            >
                                <div className={`${styles.step} ${isEven ? styles.stepRight : ""}`}>
                                    {/* Card */}
                                    <div
                                        className={styles.card}
                                        style={{ "--process-color": step.color } as React.CSSProperties}
                                    >
                                        <div className={styles.cardHeader}>
                                            <div className={styles.iconWrap}>
                                                <Icon size={20} />
                                            </div>
                                            <span className={styles.number}>{step.number}</span>
                                        </div>
                                        <h3 className={styles.title}>{step.title}</h3>
                                        <p className={styles.desc}>{step.description}</p>
                                        <div className={styles.accent} />
                                    </div>

                                    {/* Connector */}
                                    <div className={styles.connector}>
                                        <div
                                            className={styles.dot}
                                            style={{ background: step.color, boxShadow: `0 0 16px ${step.color}80` }}
                                        />
                                    </div>
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
