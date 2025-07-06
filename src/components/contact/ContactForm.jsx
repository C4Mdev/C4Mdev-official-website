"use client"
import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef();

    const handleForm = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const result = await emailjs.sendForm(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                formRef.current,
                EMAILJS_CONFIG.PUBLIC_KEY
            );

            if (result.status === 200) {
                toast.success("Thank you! Your message has been sent successfully.");
                event.target.reset();
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            toast.error("Failed to send message. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <form className="contact-form contact-form" ref={formRef} onSubmit={handleForm}>
                {/* Hidden timestamp field */}
                <input 
                    type="hidden" 
                    name="time" 
                    value={new Date().toLocaleString()} 
                />
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input 
                                className="form-control" 
                                id="name" 
                                name="user_name" 
                                placeholder="Name" 
                                type="text" 
                                autoComplete='off' 
                                required 
                            />
                            <span className="alert-error"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input 
                                className="form-control" 
                                id="email" 
                                name="user_email" 
                                placeholder="Email*" 
                                type="email" 
                                autoComplete='off' 
                                required 
                            />
                            <span className="alert-error"></span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input 
                                className="form-control" 
                                id="phone" 
                                name="user_phone" 
                                placeholder="Phone" 
                                type="text" 
                                autoComplete='off' 
                                required 
                            />
                            <span className="alert-error"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group comments">
                            <textarea 
                                className="form-control" 
                                id="comments" 
                                name="message" 
                                placeholder="Tell Us About Project *" 
                                autoComplete='off' 
                                required
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <button 
                            type="submit" 
                            name="submit" 
                            id="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <i className="fa fa-spinner fa-spin"></i> Sending...
                                </>
                            ) : (
                                <>
                                    <i className="fa fa-paper-plane"></i> Get in Touch
                                </>
                            )}
                        </button>
                    </div>
                </div>
                <div className="col-lg-12 alert-notification">
                    <div id="message" className="alert-msg"></div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;