"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import styles from "./WorksSection.module.css";

type Project = {
    id: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    image?: string;
    /** background-position when using image (e.g. top center for tall screenshots) */
    imageBackgroundPosition?: string;
    gradient?: string;
    accent: string;
};

const projects: Project[] = [
    {
        id: "proj-1",
        title: "United Accountancy",
        category: "Accounting & Tax Software",
        description:
            "A fully customized client management and tax accountancy system—centralized dashboard, client records, tax workflows, reporting, document storage, and secure role-based access, built with React, Node.js, and Supabase.",
        tags: ["React", "Node.js", "Supabase"],
        image: "/united-accountancy/mian.png",
        imageBackgroundPosition: "top center",
        accent: "#6c63ff",
    },
    {
        id: "proj-2",
        title: "PEO Lands",
        category: "Classified Listings Platform",
        description:
            "A modern, cloud-based classified listings platform for Sri Lanka—properties, vehicles, electronics, pets, and more—with powerful search, watermarked images, roles, SEO, and an admin dashboard.",
        tags: [
            "Next.js",
            "TypeScript",
            "NestJS",
            "MongoDB",
            "DigitalOcean Spaces",
            "Docker",
        ],
        image: "/peo-lands/main.jpeg",
        imageBackgroundPosition: "top center",
        accent: "#06b6d4",
    },
    {
        id: "proj-3",
        title: "Minneriya Wild Tours",
        category: "Tourism Website",
        description: "Telemedicine platform connecting patients with doctors, featuring video consultations and electronic health records.",
        tags: ["React", "Onepay", "Supabase"],
        image: "/minneriya-wild-tours/main.png",
        imageBackgroundPosition: "top center",
        accent: "#10b981",
    },
   /* {
        id: "proj-4",
        title: "EduFlow LMS",
        category: "EdTech Platform",
        description: "Modern learning management system with interactive courses, progress tracking, and live collaboration tools.",
        tags: ["Vue.js", "Django", "WebSocket"],
        gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
        accent: "#f59e0b",
    },*/
];

export default function WorksSection() {
    return (
        <section className={`section ${styles.works}`} id="works">
            <div className="container">
                {/* Header */}
                <div className={styles.header}>
                    <div>
                        <span className="badge">Our Works</span>
                        <h2 className="section-title" style={{ marginTop: "16px" }}>
                            Projects That
                            <br />
                            <span className="gradient-text">Define Excellence</span>
                        </h2>
                        <p className="section-subtitle">
                            A showcase of our finest work — digital solutions that have transformed
                            businesses and delighted users worldwide.
                        </p>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`${styles.card} ${index === 0 ? styles.featured : ""}`}
                            id={project.id}
                        >
                            {/* Visual */}
                            <div
                                className={styles.visual}
                                style={
                                    project.gradient
                                        ? { background: project.gradient }
                                        : undefined
                                }
                            >
                                {project.image && (
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} preview`}
                                        fill
                                        loading="lazy"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className={styles.visualImg}
                                        style={{
                                            objectPosition:
                                                project.imageBackgroundPosition ??
                                                "center",
                                        }}
                                    />
                                )}
                                <div className={styles.visualPattern} />
                                <div className={styles.visualContent}>
                                    <span className={styles.visualLabel}>{project.category}</span>
                                </div>
                                <button className={styles.externalBtn} aria-label="View project">
                                    <ExternalLink size={16} />
                                </button>
                            </div>

                            {/* Info */}
                            <div className={styles.info}>
                                <div className={styles.meta}>
                                    <span
                                        className={styles.category}
                                        style={{ color: project.accent }}
                                    >
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className={styles.title}>{project.title}</h3>
                                <p className={styles.desc}>{project.description}</p>
                                <div className={styles.tags}>
                                    {project.tags.map((tag) => (
                                        <span key={tag} className={styles.tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.viewAllWrap}>
                    <Link
                        href="/works"
                        className="btn-secondary"
                        id="works-view-all"
                    >
                        View All Projects
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
