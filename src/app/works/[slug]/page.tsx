import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    getProjectBySlug,
    getAllProjectSlugs,
} from "@/data/portfolioProjects";
import styles from "./ProjectDetail.module.css";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) {
        return { title: "Project — Code4MatesDev" };
    }
    return {
        title: `${project.title} — Our Works — Code4MatesDev`,
        description: project.description,
    };
}

export default async function WorkProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) notFound();

    return (
        <>
            <Navbar />
            <main>
                <div className="container">
                    <div className={styles.backRow}>
                        <Link href="/works" className={styles.backLink}>
                            <ArrowLeft size={18} aria-hidden />
                            Back to Our Works
                        </Link>
                    </div>

                    <div className={styles.heroImage}>
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            priority
                            sizes="100vw"
                            className={styles.heroImg}
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

                    <div className={styles.content}>
                        <p className={styles.category}>{project.category}</p>
                        <h1 className={styles.title}>{project.title}</h1>
                    </div>

                    <p className={styles.descriptionFull}>
                        {project.longDescription}
                    </p>

                    <div className={styles.content}>
                        <h2 className={styles.sectionLabel}>
                            Languages & technologies
                        </h2>
                        <div className={styles.tags} aria-label="Technologies">
                            {project.tags.map((tag) => (
                                <span key={tag} className={styles.tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <section
                        className={styles.gallerySection}
                        aria-label="Project gallery"
                    >
                        <h2 className={styles.galleryHeading}>Project gallery</h2>
                        <div className={styles.gallery}>
                            {project.galleryImages.slice(0, 3).map((src, i) => (
                                <div
                                    key={`${src}-${i}`}
                                    className={styles.galleryItem}
                                >
                                    <Image
                                        src={src}
                                        alt={`${project.title} screenshot ${i + 1}`}
                                        fill
                                        loading="lazy"
                                        sizes="(max-width: 640px) 100vw, (max-width: 900px) 33vw, 360px"
                                        className={styles.galleryImg}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
