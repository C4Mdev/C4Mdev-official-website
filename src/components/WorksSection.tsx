"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import styles from "./WorksSection.module.css";

type Project = {
    id: string;
    slug: string;
    title: string;
    category: string;
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
        slug: "united-accountancy",
        title: "United Accountancy",
        category: "Accounting & Tax Software",
        tags: ["React", "Node.js", "Supabase"],
        image: "/united-accountancy/mian.png",
        imageBackgroundPosition: "top center",
        accent: "#6c63ff",
    },
    {
        id: "proj-2",
        slug: "peo-lands",
        title: "PEO Lands",
        category: "Classified Listings Platform",
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
        slug: "minneriya",
        title: "Minneriya Wild Tours",
        category: "Tourism Website",
        tags: ["React", "Onepay", "Supabase"],
        image: "/minneriya-wild-tours/main.png",
        imageBackgroundPosition: "top center",
        accent: "#10b981",
    },
   /* {
        id: "proj-4",
        title: "EduFlow LMS",
        category: "EdTech Platform",
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
                            A showcase of our finest work - digital solutions that have transformed
                            businesses and delighted users worldwide.
                        </p>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <Link
                            key={project.id}
                            className={`${styles.card} ${index === 0 ? styles.featured : ""}`}
                            id={project.id}
                            href={`/works/${project.slug}`}
                            aria-label={`View ${project.title} project`}
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
                                <span className={styles.externalBtn} aria-hidden="true">
                                    <ExternalLink size={16} />
                                </span>
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
                                <div className={styles.tags}>
                                    {project.tags.map((tag) => (
                                        <span key={tag} className={styles.tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
