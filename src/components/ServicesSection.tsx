"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Globe, Server, Palette, Smartphone, Cloud, Shield, ArrowRight, X } from "lucide-react";
import styles from "./ServicesSection.module.css";

const CUSTOM_WEB_MODAL_DESCRIPTION =
    "Cutting-edge, fully responsive web applications designed to elevate and transform your digital presence. We craft everything from sleek, high-performing corporate websites to powerful, scalable e-commerce platforms tailored to your business goals. Our solutions focus on modern UI/UX design, fast loading performance, SEO optimization, and seamless cross-device compatibility to ensure the best user experience.\n\nWe integrate secure backend systems, custom APIs, and database-driven functionalities to support real-world business operations whether it's managing products, handling customer data, or automating workflows. Every project is built with scalability, security, and future growth in mind, ensuring your platform evolves alongside your business.";

const ENTERPRISE_SAAS_MODAL_DESCRIPTION =
    "Transform your business operations with powerful, custom-built SaaS platforms designed for efficiency, scalability, and long term growth. We develop secure, cloud-based solutions that adapt and scale seamlessly as your business evolves whether you're a startup or an established enterprise.\n\nOur platforms include intuitive dashboards, real-time data analytics, user management systems, subscription and billing integrations, and automated workflows to streamline your daily operations. Built with modern technologies, our SaaS solutions ensure high performance, data security, and accessibility from anywhere, on any device.\n\nFrom concept to deployment, we focus on delivering reliable, user-friendly systems that help you reduce manual work, improve productivity, and unlock new revenue opportunities.";

const UI_UX_MODAL_DESCRIPTION =
    "User-centered design solutions that create intuitive, engaging, and visually appealing digital experiences. We focus on understanding user behavior and business goals to craft interfaces that are not only beautiful but also highly functional and easy to use.\n\nFrom low-fidelity wireframes to high-fidelity interactive prototypes, we design seamless user journeys that enhance usability and maximize user satisfaction. Our process includes research, user flow mapping, prototyping, and usability testing to ensure every interaction feels natural and efficient.\n\nWe prioritize clarity, accessibility, and consistency across all devices, delivering designs that improve user engagement, increase conversions, and provide a strong foundation for development.";

const MOBILE_MODAL_DESCRIPTION =
    "Native and cross-platform mobile applications that deliver exceptional, high-performance user experiences on both iOS and Android platforms. We build scalable, secure, and user-friendly mobile apps tailored to your business needs whether it's a customer-facing app or an internal business solution.\n\nOur development process focuses on smooth performance, intuitive UI/UX, and seamless functionality across devices. From concept and design to development and deployment, we ensure every app is optimized for speed, reliability, and long-term scalability.\n\nWe integrate essential features such as real-time data synchronization, push notifications, API integrations, and secure authentication systems to create powerful and engaging mobile experiences. Every solution is built to enhance user engagement, streamline operations, and support your business growth in the mobile-first world.";

const CLOUD_MODAL_DESCRIPTION =
    "Scalable cloud infrastructure and DevOps solutions designed to keep your applications fast, reliable, and secure at all times. We build and manage robust cloud environments that support seamless performance, high availability, and efficient resource utilization as your business grows.\n\nOur services include cloud architecture design, continuous integration and deployment (CI/CD), server management, and infrastructure automation to streamline development workflows and reduce downtime. We ensure your systems are optimized for speed, stability, and cost-efficiency across modern cloud platforms.\n\nWith a strong focus on security, monitoring, and performance optimization, we implement best practices such as automated backups, real-time monitoring, and secure access controls giving you peace of mind while your applications scale effortlessly.";

const SECURITY_MODAL_DESCRIPTION =
    "Comprehensive security audits, penetration testing, and compliance-driven solutions designed to protect your digital assets and business operations. We identify vulnerabilities, assess risks, and implement strong security measures to safeguard your systems from potential threats and attacks.\n\nOur approach includes in-depth security assessments, ethical hacking simulations, and continuous monitoring to ensure your applications and infrastructure remain secure at all times. We help businesses meet industry standards and compliance requirements while strengthening overall system integrity.\n\nFrom data protection and secure authentication to network security and threat prevention, our solutions are built to minimize risks, prevent breaches, and maintain trust with your users ensuring your business operates safely in an increasingly digital world.";

const services = [
    {
        id: "web",
        icon: Globe,
        color: "#6c63ff",
        title: "Custom Web Solutions",
        description:
            "Cutting-edge, responsive web applications that transform your digital presence. From sleek corporate websites to powerful e-commerce platforms.",
        detailDescription: CUSTOM_WEB_MODAL_DESCRIPTION,
        tags: ["React", "Next.js", "TypeScript"],
    },
    {
        id: "saas",
        icon: Server,
        color: "#a855f7",
        title: "Enterprise SaaS",
        description:
            "Transform your business operations with powerful SaaS platforms. We develop cloud-based solutions that scale with your growth.",
        detailDescription: ENTERPRISE_SAAS_MODAL_DESCRIPTION,
        tags: ["Node.js", "PostgreSQL", "AWS"],
    },
    {
        id: "design",
        icon: Palette,
        color: "#06b6d4",
        title: "UI/UX Design",
        description:
            "User-centered design solutions that create intuitive and engaging digital experiences. From wireframes to interactive prototypes.",
        detailDescription: UI_UX_MODAL_DESCRIPTION,
        tags: ["Figma", "Prototyping", "Research"],
    },
    {
        id: "mobile",
        icon: Smartphone,
        color: "#f59e0b",
        title: "Mobile Development",
        description:
            "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
        detailDescription: MOBILE_MODAL_DESCRIPTION,
        tags: ["React Native", "Flutter", "iOS/Android"],
    },
    {
        id: "cloud",
        icon: Cloud,
        color: "#10b981",
        title: "Cloud Solutions",
        description:
            "Scalable cloud infrastructure and DevOps solutions that ensure your applications are always fast, reliable, and secure.",
        detailDescription: CLOUD_MODAL_DESCRIPTION,
        tags: ["AWS", "Docker", "Kubernetes"],
    },
    {
        id: "security",
        icon: Shield,
        color: "#ef4444",
        title: "Security & Compliance",
        description:
            "Comprehensive security audits, penetration testing, and compliance solutions to protect your digital assets.",
        detailDescription: SECURITY_MODAL_DESCRIPTION,
        tags: ["OWASP", "Pen Testing", "Compliance"],
    },
];

type ServicesSectionProps = {
    enableModal?: boolean;
};

export default function ServicesSection({ enableModal = false }: ServicesSectionProps) {
    const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
    const selectedService = services.find((service) => service.id === selectedServiceId) ?? null;
    const SelectedIcon = selectedService?.icon;

    useEffect(() => {
        if (!enableModal || !selectedService) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedServiceId(null);
            }
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleEscape);
        };
    }, [enableModal, selectedService]);

    return (
        <section className={`section ${styles.services}`} id="services">
            <div className="container">
                {/* Header */}
                <div className={styles.header}>
                    <span className="badge">Our Expertise</span>
                    <h2 className="section-title">
                        Complete Digital Solutions
                        <br />
                        for Every Need
                    </h2>
                    <p className="section-subtitle">
                        From concept to deployment, we deliver end-to-end digital solutions
                        that drive real business results.
                    </p>
                </div>

                {/* Grid */}
                <div className={styles.grid}>
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div key={service.id} className={styles.card} id={`service-${service.id}`}>
                                <div
                                    className={styles.iconWrap}
                                    style={{ "--service-color": service.color } as React.CSSProperties}
                                >
                                    <Icon size={24} />
                                </div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDesc}>{service.description}</p>
                                <div className={styles.tags}>
                                    {service.tags.map((tag) => (
                                        <span key={tag} className={styles.tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className={styles.cardArrow}>
                                    <ArrowRight size={16} />
                                </div>
                                {enableModal && (
                                    <button
                                        type="button"
                                        className={styles.cardClickArea}
                                        onClick={() => setSelectedServiceId(service.id)}
                                        aria-label={`Open details for ${service.title}`}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>

                {!enableModal && (
                    <div className={styles.cta}>
                        <Link href="/services#services" className="btn-primary" id="services-view-all">
                            View All Services
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                )}
            </div>

            {enableModal && selectedService && (
                <div className={styles.modalOverlay} onClick={() => setSelectedServiceId(null)}>
                    <div
                        className={styles.modalCard}
                        style={{ "--service-color": selectedService.color } as React.CSSProperties}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            className={styles.modalClose}
                            aria-label="Close service details"
                            onClick={() => setSelectedServiceId(null)}
                        >
                            <X size={18} />
                        </button>

                        <div className={styles.modalHeader}>
                            <div className={styles.iconWrap}>
                                {SelectedIcon && <SelectedIcon size={24} />}
                            </div>
                            <h3 className={styles.modalTitle}>{selectedService.title}</h3>
                        </div>

                        <p className={styles.modalDesc}>
                            {"detailDescription" in selectedService && selectedService.detailDescription
                                ? selectedService.detailDescription
                                : selectedService.description}
                        </p>

                        <div className={styles.modalTags}>
                            {selectedService.tags.map((tag) => (
                                <span key={tag} className={styles.tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
