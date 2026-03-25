"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/works", label: "Our Work" },
    { href: "/about", label: "About Us" },
];

const mobileNavLinks = [
    ...navLinks,
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <nav className={`${styles.nav} container`}>
                {/* Logo */}
                <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
                    <Image
                        src="/LOGONEW_WHITE.png"
                        alt="Code4MatesDev"
                        width={260}
                        height={52}
                        priority
                        className={styles.logoImg}
                    />
                </Link>

                {/* Desktop Links */}
                <ul className={styles.links}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={styles.link}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className={styles.actions}>
                    <Link href="/contact" className="btn-primary" id="nav-contact-btn">
                        Get Started
                    </Link>
                    <button
                        className={styles.menuBtn}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        id="nav-menu-toggle"
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
                <div className={styles.mobilePanel}>
                    <div className={styles.mobileTop}>
                        <Link
                            href="/"
                            className={styles.mobileLogo}
                            onClick={() => setMenuOpen(false)}
                            aria-label="Go to homepage"
                        >
                            <Image
                                src="/LOGO_WHITE.png"
                                alt="Code4MatesDev logo"
                                width={220}
                                height={40}
                                priority
                                className={styles.mobileLogoImg}
                            />
                        </Link>

                        <button
                            className={styles.mobileCloseBtn}
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                            type="button"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <ul className={styles.mobileLinks}>
                        {mobileNavLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={styles.mobileLink}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.mobileFooter}>
                        <div className={styles.mobileFooterText}>
                            SERVICES AVAILABLE REMOTELY WORLDWIDE
                        </div>
                        <div className={styles.mobileFooterText}>
                            <a href="mailto:info@code4matesdev.com">
                                info@code4matesdev.com
                            </a>
                        </div>
                        <div className={styles.mobileFooterText}>
                            +94 71 484 5708
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
