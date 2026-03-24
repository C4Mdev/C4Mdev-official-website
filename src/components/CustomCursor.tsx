"use client";

import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
    const outerRef = useRef<HTMLDivElement | null>(null);
    const innerRef = useRef<HTMLDivElement | null>(null);
    const rafRef = useRef<number | null>(null);

    const wrapRef = useRef<HTMLDivElement | null>(null);
    const enabledRef = useRef(false);
    const targetPosRef = useRef({ x: 0, y: 0 });
    const posRef = useRef({ x: 0, y: 0 });
    const hoveringRef = useRef(false);

    useEffect(() => {
        const coarse = window.matchMedia?.("(pointer: coarse)").matches;
        const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        const enabled = !(coarse || reduce);
        enabledRef.current = enabled;

        if (wrapRef.current) {
            wrapRef.current.style.opacity = enabled ? "1" : "0";
        }
    }, []);

    useEffect(() => {
        if (!enabledRef.current) return;

        const prevCursor = document.body.style.cursor;
        document.body.style.cursor = "none";

        const updateHovering = (x: number, y: number) => {
            const el = document.elementFromPoint(x, y) as HTMLElement | null;
            const interactive = el?.closest?.(
                "a, button, [role='button'], input, textarea, select, label"
            );
            hoveringRef.current = Boolean(interactive);

            const outer = outerRef.current;
            const inner = innerRef.current;
            if (!outer || !inner) return;

            if (hoveringRef.current) {
                outer.classList.add(styles.isHover);
                inner.classList.add(styles.isHover);
            } else {
                outer.classList.remove(styles.isHover);
                inner.classList.remove(styles.isHover);
            }
        };

        const onPointerMove = (e: PointerEvent) => {
            targetPosRef.current = { x: e.clientX, y: e.clientY };
            updateHovering(e.clientX, e.clientY);
        };

        const animate = () => {
            const outer = outerRef.current;
            const inner = innerRef.current;
            if (!outer || !inner) return;

            // simple smoothing
            const { x: tx, y: ty } = targetPosRef.current;
            const { x: cx, y: cy } = posRef.current;
            const ease = 0.22;
            const nx = cx + (tx - cx) * ease;
            const ny = cy + (ty - cy) * ease;

            posRef.current = { x: nx, y: ny };

            outer.style.transform = `translate3d(${nx}px, ${ny}px, 0)`;
            inner.style.transform = `translate3d(${nx}px, ${ny}px, 0)`;

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);
        window.addEventListener("pointermove", onPointerMove, { passive: true });

        return () => {
            document.body.style.cursor = prevCursor;
            window.removeEventListener("pointermove", onPointerMove);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div
            ref={wrapRef}
            className={styles.wrap}
            aria-hidden="true"
            style={{ opacity: 0 }}
        >
            <div ref={outerRef} className={styles.cursorOuter}>
                <svg
                    className={styles.handSvg}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M7 11V5.5C7 4.67 7.67 4 8.5 4C9.33 4 10 4.67 10 5.5V11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10 11V6.5C10 5.67 10.67 5 11.5 5C12.33 5 13 5.67 13 6.5V11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M13 11V8C13 7.17 13.67 6.5 14.5 6.5C15.33 6.5 16 7.17 16 8V13.5C16 15.43 14.43 17 12.5 17H11.2C10.02 17 9.01 16.28 8.6 15.23L7.2 11.9C6.88 11.15 7.25 10.28 8 9.95C8.75 9.62 9.62 9.99 9.95 10.75L10.3 11.6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <div ref={innerRef} className={styles.cursorInner} />
        </div>
    );
}

