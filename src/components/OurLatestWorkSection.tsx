import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { portfolioProjects } from "@/data/portfolioProjects";
import styles from "./OurLatestWorkSection.module.css";

export default function OurLatestWorkSection() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.layout}>
                    <div className={styles.gallery} aria-label="Latest work gallery">
                        {portfolioProjects.map((project) => (
                            <Link
                                key={project.slug}
                                href={`/works/${project.slug}`}
                                className={styles.tile}
                            >
                                <div className={styles.tileMedia}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        loading="lazy"
                                        sizes="(max-width: 768px) 90vw, 420px"
                                        className={styles.img}
                                        style={
                                            project.imageObjectPosition
                                                ? {
                                                      objectPosition:
                                                          project.imageObjectPosition,
                                                  }
                                                : undefined
                                        }
                                    />
                                </div>

                                <div className={styles.tileBody}>
                                    <div className={styles.cardMeta}>
                                        <span className={styles.cardDate}>
                                            {project.date}
                                        </span>
                                        <span className={styles.cardTag}>
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className={styles.cardTitle}>
                                        {project.title}
                                    </h3>
                                    <p className={styles.cardDesc}>
                                        {project.description}
                                    </p>

                                    <span className={styles.cardBtn}>
                                        <span>Learn more</span>
                                        <ArrowRight size={16} aria-hidden />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
