"use client";

import { CheckCircle2, Users, Cpu, Rocket } from "lucide-react";
import styles from "./AboutSection.module.css";

const steps = [
    {
        icon: Users,
        title: "Collaboration with Customers",
        description:
            "We establish close partnerships through regular communication, requirement gathering sessions, and collaborative workshops to understand your vision.",
    },
    {
        icon: Cpu,
        title: "Software Design & Technology",
        description:
            "Our expert architects create robust software designs using cutting-edge technologies, scalable architecture, and optimal tech stacks.",
    },
    {
        icon: Rocket,
        title: "Final Customization & Launch",
        description:
            "We fine-tune every aspect before launch — performance optimization, security hardening, and comprehensive testing for a polished product.",
    },
];

const highlights = [
    "End-to-end software development from concept to deployment",
    "Agile development process ensuring quality delivery",
    "Latest technologies and industry best practices",
    "Dedicated support and maintenance post-launch",
];

export default function AboutSection() {
    return (
        <section className={`section ${styles.about}`} id="about">
            <div className="container">
                <div className={styles.layout}>
                    {/* Left */}
                    <div className={styles.left}>
                        <span className="badge">About Us</span>
                        <h2 className={`section-title ${styles.title}`}>
                            Transforming Ideas Into
                            <br />
                            <span className="gradient-text">Digital Excellence</span>
                        </h2>
                        <p className={styles.desc}>
                            We are a passionate team of software engineers and designers dedicated
                            to creating innovative solutions that drive business growth. We turn
                            complex challenges into streamlined, powerful software that delivers
                            real results.
                        </p>
                        <ul className={styles.highlights}>
                            {highlights.map((item) => (
                                <li key={item} className={styles.highlight}>
                                    <CheckCircle2 size={16} className={styles.checkIcon} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right */}
                    <div className={styles.right}>
                        <div className={styles.steps}>
                            {steps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <div key={step.title} className={styles.step}>
                                        <div className={styles.stepLeft}>
                                            <div className={styles.stepIcon}>
                                                <Icon size={20} />
                                            </div>
                                            {index < steps.length - 1 && (
                                                <div className={styles.stepLine} />
                                            )}
                                        </div>
                                        <div className={styles.stepContent}>
                                            <h3 className={styles.stepTitle}>{step.title}</h3>
                                            <p className={styles.stepDesc}>{step.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className={styles.banner}>
                            <p className={styles.bannerText}>
                                We partner with businesses to deliver innovative, scalable, and
                                secure digital solutions — empowering you to achieve your goals in
                                a rapidly evolving digital landscape.
                            </p>
                            <div className={styles.bannerAccent} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
