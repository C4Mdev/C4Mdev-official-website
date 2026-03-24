"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import styles from "./ContactForm.module.css";

const contactInfo = [
    {
        icon: Mail,
        label: "Email Us",
        value: "info@code4matesdev.com",
        href: "mailto:info@code4matesdev.com",
    },
    {
        icon: Phone,
        label: "Call Us",
        value: "+94 77 999 2467",
        href: "tel:+94779992467",
    },
    {
        icon: Phone,
        label: "Alternative",
        value: "+94 77 404 8410",
        href: "tel:+94774048410",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Remote — Available Worldwide",
        href: null,
    },
];

const services = [
    "Custom Web Development",
    "Enterprise SaaS",
    "UI/UX Design",
    "Mobile Development",
    "Cloud Solutions",
    "Other",
];

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            /**
             * Same flow as Web3Forms’ sample: POST multipart FormData to their API from the browser.
             * Never hardcode access_key in source — use .env.local (see .env.example).
             */
            const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
            if (!accessKey?.trim()) {
                setError(
                    "Contact form is not configured. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local (same key from web3forms.com)."
                );
                return;
            }

            const formEl = e.currentTarget;
            const fd = new FormData(formEl);
            fd.append("access_key", accessKey);

            const name = String(fd.get("name") ?? "").trim();
            const email = String(fd.get("email") ?? "").trim();
            fd.set("subject", `Website contact: ${name}`);
            fd.set("replyto", email);

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: fd,
            });
            const data = (await res.json()) as { success?: boolean; message?: string };
            if (!res.ok || !data.success) {
                setError(
                    data.message ||
                        "Could not send your message. Please try again or email us directly."
                );
                return;
            }
            setSubmitted(true);
        } catch {
            setError("Network error. Check your connection or email us directly.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={`section ${styles.contact}`} id="contact-form">
            <div className="container">
                <div className={styles.layout}>
                    {/* Left - Info */}
                    <div className={styles.info}>
                        <h2 className={styles.infoTitle}>
                            Start a Conversation
                        </h2>
                        <p className={styles.infoDesc}>
                            Whether you have a project in mind or just want to explore possibilities,
                            we&apos;re here to help. Reach out and let&apos;s create something amazing.
                        </p>

                        <div className={styles.contactItems}>
                            {contactInfo.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.label} className={styles.contactItem}>
                                        <div className={styles.contactIcon}>
                                            <Icon size={18} />
                                        </div>
                                        <div>
                                            <div className={styles.contactLabel}>{item.label}</div>
                                            {item.href ? (
                                                <a href={item.href} className={styles.contactValue}>
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <span className={styles.contactValue}>{item.value}</span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Response time */}
                        <div className={styles.responseTime}>
                            <div className={styles.responseDot} />
                            <span>We typically respond within 24 hours</span>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className={styles.formWrap}>
                        {submitted ? (
                            <div className={styles.success}>
                                <div className={styles.successIcon}>
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3>Message Sent!</h3>
                                <p>
                                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                                </p>
                                <button
                                    className="btn-secondary"
                                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", service: "", budget: "", message: "" }); }}
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.form} id="contact-form-element">
                                {error ? (
                                    <div className={styles.formError} role="alert">
                                        {error}
                                    </div>
                                ) : null}
                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <label htmlFor="name" className={styles.label}>Full Name *</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            placeholder="John Doe"
                                            value={form.name}
                                            onChange={handleChange}
                                            className={styles.input}
                                        />
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="email" className={styles.label}>Email Address *</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="john@company.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            className={styles.input}
                                        />
                                    </div>
                                </div>

                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <label htmlFor="company" className={styles.label}>Company</label>
                                        <input
                                            id="company"
                                            name="company"
                                            type="text"
                                            placeholder="Your Company"
                                            value={form.company}
                                            onChange={handleChange}
                                            className={styles.input}
                                        />
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="service" className={styles.label}>Service Needed</label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={form.service}
                                            onChange={handleChange}
                                            className={styles.select}
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="budget" className={styles.label}>Estimated Budget</label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={form.budget}
                                        onChange={handleChange}
                                        className={styles.select}
                                    >
                                        <option value="">Select budget range</option>
                                        <option value="<5k">Less than $5,000</option>
                                        <option value="5k-15k">$5,000 – $15,000</option>
                                        <option value="15k-50k">$15,000 – $50,000</option>
                                        <option value="50k+">$50,000+</option>
                                    </select>
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="message" className={styles.label}>Project Details *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Tell us about your project, goals, and timeline..."
                                        value={form.message}
                                        onChange={handleChange}
                                        className={styles.textarea}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={styles.submitBtn}
                                    disabled={loading}
                                    id="contact-submit-btn"
                                >
                                    {loading ? (
                                        <span className={styles.spinner} />
                                    ) : (
                                        <>
                                            <Send size={16} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
