import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectGalleryLightbox from "@/components/ProjectGalleryLightbox";
import {
    getProjectBySlug,
    getAllProjectSlugs,
    projectSeoDescription,
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
        return {
            title: "Project - Code4MatesDev",
            alternates: {
                canonical: `/works/${slug}`,
            },
        };
    }
    const canonical = `/works/${project.slug}`;
    const desc = projectSeoDescription(project);
    return {
        title: `${project.title} - Our Works - Code4MatesDev`,
        description: desc,
        alternates: {
            canonical,
        },
        openGraph: {
            title: `${project.title} - Our Works - Code4MatesDev`,
            description: desc,
            url: canonical,
            images: [project.image],
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.title} - Our Works - Code4MatesDev`,
            description: desc,
            images: [project.image],
        },
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
                        {project.liveUrl ? (
                            <p className={styles.liveSiteWrap}>
                                <a
                                    href={project.liveUrl}
                                    className={styles.liveSiteLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ExternalLink size={18} aria-hidden />
                                    Visit live site
                                </a>
                            </p>
                        ) : null}
                    </div>

                    <div className={styles.caseStudy} aria-label="Case study">
                        <section className={styles.caseSection}>
                            <h2 className={styles.caseHeading}>Client &amp; Problem</h2>
                            {project.clientProblem.trim() ? (
                                <p className={styles.caseBody}>{project.clientProblem}</p>
                            ) : null}
                        </section>
                        <section className={styles.caseSection}>
                            <h2 className={styles.caseHeading}>Solution</h2>
                            {project.solution.trim() ? (
                                <p className={styles.caseBody}>{project.solution}</p>
                            ) : null}
                        </section>
                        <section className={styles.caseSection}>
                            <h2 className={styles.caseHeading}>Result</h2>
                            {project.result.trim() ? (
                                <p className={styles.caseBody}>{project.result}</p>
                            ) : null}
                        </section>
                    </div>

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
                        <ProjectGalleryLightbox
                            images={project.galleryImages}
                            projectTitle={project.title}
                        />
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
