"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import styles from "./AnimatedSection.module.css";

interface Props {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "left" | "right" | "none";
}

export default function AnimatedSection({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`${styles.animated} ${styles[direction]} ${visible ? styles.visible : ""} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
