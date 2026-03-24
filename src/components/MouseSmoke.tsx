"use client";

import { useEffect, useRef } from "react";
import styles from "./MouseSmoke.module.css";

type SmokeParticle = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
    ageMs: number;
    lifeMs: number;
    alpha: number;
};

export default function MouseSmoke() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const particlesRef = useRef<SmokeParticle[]>([]);
    const rafRef = useRef<number | null>(null);
    const lastSpawnRef = useRef<{ x: number; y: number } | null>(null);

    useEffect(() => {
        const reduceMotion = window.matchMedia?.(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (reduceMotion) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = 0;
        let h = 0;
        const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

        const resize = () => {
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = Math.floor(w * dpr);
            canvas.height = Math.floor(h * dpr);
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        resize();
        window.addEventListener("resize", resize);

        const pointer = { x: w / 2, y: h / 2 };

        const spawn = (x: number, y: number, strength: number) => {
            const count = Math.max(2, Math.floor(3 * strength));
            for (let i = 0; i < count; i++) {
                const ang = Math.random() * Math.PI * 2;
                const speed = (0.35 + Math.random() * 0.9) * strength;
                const r = 18 + Math.random() * 22;

                particlesRef.current.push({
                    x,
                    y,
                    vx: Math.cos(ang) * speed,
                    vy: Math.sin(ang) * speed - 0.4 * strength,
                    r,
                    ageMs: 0,
                    lifeMs: 650 + Math.random() * 550,
                    alpha: 0.16 + Math.random() * 0.18,
                });
            }
        };

        const onPointerMove = (e: PointerEvent) => {
            pointer.x = e.clientX;
            pointer.y = e.clientY;

            const last = lastSpawnRef.current;
            const dx = last ? e.clientX - last.x : 0;
            const dy = last ? e.clientY - last.y : 0;
            const dist = Math.sqrt(dx * dx + dy * dy);

            const strength = Math.min(2.2, Math.max(1, dist / 22));
            if (!last || dist > 14) {
                spawn(e.clientX, e.clientY, strength);
                lastSpawnRef.current = { x: e.clientX, y: e.clientY };
            }
        };

        const onPointerLeave = () => {
            lastSpawnRef.current = null;
        };

        window.addEventListener("pointermove", onPointerMove, {
            passive: true,
        });
        window.addEventListener("pointerleave", onPointerLeave);

        let lastT = performance.now();

        const animate = (t: number) => {
            const dt = t - lastT;
            lastT = t;

            ctx.clearRect(0, 0, w, h);

            const particles = particlesRef.current;
            if (particles.length > 520) {
                particles.splice(0, particles.length - 520);
            }

            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.ageMs += dt;

                const k = p.ageMs / p.lifeMs;
                if (k >= 1) {
                    particles.splice(i, 1);
                    continue;
                }

                p.x += p.vx * (dt / 16.67);
                p.y += p.vy * (dt / 16.67);
                p.vx *= 0.985;
                p.vy *= 0.985;

                const alpha = p.alpha * (1 - k);
                const radius = p.r * (0.65 + k * 0.9);

                const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
                grad.addColorStop(0, `rgba(108, 99, 255, ${alpha})`);
                grad.addColorStop(0.55, `rgba(168, 85, 247, ${alpha * 0.55})`);
                grad.addColorStop(1, `rgba(6, 182, 212, 0)`);

                ctx.globalCompositeOperation = "lighter";
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.globalCompositeOperation = "source-over";
            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerleave", onPointerLeave);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.canvas} />;
}

