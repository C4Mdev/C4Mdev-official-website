import { ReactNode } from "react";
import styles from "./PageHero.module.css";

interface Props {
    badge: string;
    title: ReactNode;
    subtitle: string;
}

export default function PageHero({ badge, title, subtitle }: Props) {
    return (
        <div className={styles.hero}>
            <div className={`container ${styles.content}`}>
                <span className="badge">{badge}</span>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <div className={styles.orb1} />
            <div className={styles.orb2} />
            <div className={styles.grid} />
        </div>
    );
}
