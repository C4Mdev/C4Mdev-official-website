"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import projectStyles from "@/app/works/[slug]/ProjectDetail.module.css";
import styles from "./ProjectGalleryLightbox.module.css";

type Props = {
    images: string[];
    projectTitle: string;
};

export default function ProjectGalleryLightbox({
    images,
    projectTitle,
}: Props) {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const activeSrc = images[activeIndex];
    const total = images.length;

    const activeAlt = useMemo(() => {
        return `${projectTitle} - image ${activeIndex + 1} of ${total}`;
    }, [activeIndex, projectTitle, total]);

    useEffect(() => {
        if (!open) return;

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setOpen(false);
                return;
            }
            if (e.key === "ArrowLeft") {
                setActiveIndex((i) => Math.max(0, i - 1));
            }
            if (e.key === "ArrowRight") {
                setActiveIndex((i) => Math.min(total - 1, i + 1));
            }
        };

        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = prevOverflow;
        };
    }, [open, total]);

    if (!images.length) return null;

    return (
        <>
            <div className={projectStyles.gallery}>
                {images.map((src, i) => (
                    <button
                        key={`${src}-${i}`}
                        type="button"
                        className={styles.thumbBtn}
                        aria-label={`Open ${projectTitle} image ${i + 1} in fullscreen`}
                        onClick={() => {
                            setActiveIndex(i);
                            setOpen(true);
                        }}
                    >
                        <div className={projectStyles.galleryItem}>
                            <Image
                                src={src}
                                alt={`${projectTitle} screenshot ${i + 1}`}
                                fill
                                loading="lazy"
                                sizes="(max-width: 640px) 100vw, (max-width: 900px) 33vw, 360px"
                                className={projectStyles.galleryImg}
                            />
                        </div>
                    </button>
                ))}
            </div>

            {open && (
                <div
                    className={styles.overlay}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image fullscreen viewer"
                    onMouseDown={(e) => {
                        if (e.target === e.currentTarget) setOpen(false);
                    }}
                >
                    <button
                        type="button"
                        className={styles.closeBtn}
                        aria-label="Close fullscreen viewer"
                        onClick={() => setOpen(false)}
                    >
                        <X size={18} />
                    </button>

                    {total > 1 && (
                        <>
                            <button
                                type="button"
                                className={`${styles.navBtn} ${styles.navLeft}`}
                                aria-label="Previous image"
                                disabled={activeIndex === 0}
                                onClick={() =>
                                    setActiveIndex((i) =>
                                        Math.max(0, i - 1),
                                    )
                                }
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                type="button"
                                className={`${styles.navBtn} ${styles.navRight}`}
                                aria-label="Next image"
                                disabled={activeIndex === total - 1}
                                onClick={() =>
                                    setActiveIndex((i) =>
                                        Math.min(total - 1, i + 1),
                                    )
                                }
                            >
                                <ChevronRight size={18} />
                            </button>
                        </>
                    )}

                    <div className={styles.imageWrap}>
                        <img
                            src={activeSrc}
                            alt={activeAlt}
                            className={styles.fullImage}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

