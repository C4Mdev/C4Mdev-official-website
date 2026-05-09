"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import styles from "./ScrollToTopButton.module.css";

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsVisible(window.scrollY > 280);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={styles.stack}>
            <a
                href="https://wa.me/94701399168"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.whatsapp}`}
                aria-label="Chat on WhatsApp"
            >
                <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    aria-hidden="true"
                    focusable="false"
                >
                    <path
                        fill="currentColor"
                        d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.32-1.66a11.86 11.86 0 0 0 5.74 1.47h.01c6.56 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.16-3.45-8.43ZM12.07 21.8h-.01a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-3.75.98 1-3.66-.23-.37a9.86 9.86 0 0 1-1.53-5.25c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.89-9.9 9.89Zm5.43-7.42c-.3-.15-1.75-.86-2.02-.95-.27-.1-.47-.15-.66.15-.2.3-.76.95-.93 1.15-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.48.71.3 1.27.48 1.7.62.72.23 1.37.2 1.88.12.57-.08 1.75-.71 2-1.39.25-.68.25-1.26.17-1.39-.07-.12-.27-.2-.57-.35Z"
                    />
                </svg>
            </a>

            <button
                type="button"
                onClick={handleScrollToTop}
                className={`${styles.button} ${isVisible ? styles.visible : ""}`}
                aria-label="Scroll to top"
            >
                <ArrowUp size={18} />
            </button>
        </div>
    );
}
