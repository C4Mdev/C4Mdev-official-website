"use client";

import styles from "./TechMarquee.module.css";

const techs = [
    "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL",
    "AWS", "Docker", "Figma", "Python", "GraphQL",
    "Kubernetes", "MongoDB", "Redis", "Tailwind CSS", "Prisma",
    "React Native", "Flutter", "Stripe", "Vercel", "Supabase",
];

export default function TechMarquee() {
    // Duplicate for seamless loop
    const items = [...techs, ...techs];

    return (
        <div className={styles.wrapper}>
            <div className={styles.fade} />
            <div className={styles.track}>
                {items.map((tech, i) => (
                    <div key={`${tech}-${i}`} className={styles.item}>
                        <span className={styles.dot} />
                        {tech}
                    </div>
                ))}
            </div>
            <div className={`${styles.fade} ${styles.fadeRight}`} />
        </div>
    );
}
