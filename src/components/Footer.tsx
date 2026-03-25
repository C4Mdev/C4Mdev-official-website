import Link from "next/link";
import Image from "next/image";
import {
    Mail,
    Phone,
    MapPin,
    Github,
    Facebook,
    Linkedin,
    Instagram,
} from "lucide-react";
import styles from "./Footer.module.css";

const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/works", label: "Our Work" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
];

const services = [
    "Custom Web Solutions",
    "Enterprise SaaS",
    "UI/UX Design",
    "Mobile Development",
    "Cloud Solutions",
];

const socials = [
    { icon: Github, href: "#", label: "GitHub", external: false },
    {
        icon: Facebook,
        href: "https://www.facebook.com/share/1Cp1HKKjja/?mibextid=wwXIfr",
        label: "Facebook",
        external: true,
    },
    {
        icon: Linkedin,
        href: "https://www.linkedin.com/company/code4matesdev/",
        label: "LinkedIn",
        external: true,
    },
    {
        icon: Instagram,
        href: "https://www.instagram.com/",
        label: "Instagram",
        external: true,
    },
] as const;

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerGlow} />
            <div className={`container ${styles.footerInner}`}>
                {/* Brand */}
                <div className={styles.brand}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/LOGONEW_WHITE.png"
                            alt="Code4MatesDev"
                            width={260}
                            height={52}
                            priority
                            className={styles.logoImg}
                        />
                    </Link>
                    <p className={styles.tagline}>
                        Crafting groundbreaking digital solutions that empower businesses to lead,
                        innovate, and succeed in an ever-changing world.
                    </p>
                    <div className={styles.socials}>
                        {socials.map(({ icon: Icon, href, label, external }) => (
                            <a
                                key={label}
                                href={href}
                                {...(external
                                    ? {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                      }
                                    : {})}
                                className={styles.socialBtn}
                                aria-label={label}
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className={styles.col}>
                    <h3 className={styles.colTitle}>Quick Links</h3>
                    <ul className={styles.colList}>
                        {quickLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={styles.colLink}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div className={styles.col}>
                    <h3 className={styles.colTitle}>Services</h3>
                    <ul className={styles.colList}>
                        {services.map((s) => (
                            <li key={s}>
                                <span className={styles.colLink}>{s}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className={styles.col}>
                    <h3 className={styles.colTitle}>Contact</h3>
                    <ul className={styles.contactList}>
                        <li>
                            <MapPin size={14} />
                            <span>Services available remotely worldwide</span>
                        </li>
                        <li>
                            <Mail size={14} />
                            <a href="mailto:info@code4matesdev.com">info@code4matesdev.com</a>
                        </li>
                        <li>
                            <Phone size={14} />
                            <span>+94 71 484 5708</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`container ${styles.footerBottom}`}>
                <p>© {new Date().getFullYear()} Code4MatesDev. All rights reserved.</p>
                <div className={styles.legal}>
                    <Link href="/privacy">Privacy Policy</Link>
                    <Link href="/terms">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
