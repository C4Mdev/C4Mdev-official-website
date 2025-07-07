import React from 'react';
import Animate from '../animation/Animate';

const ContactInfo = () => {
    return (
        <>
            <div className="contact-style-one-info">
                <h2>Contact Information</h2>
                <p>
                    Reach out to us for expert advice, project inquiries, or partnership opportunities. Our team is ready to help you achieve your business goals with innovative digital solutions.
                </p>
                <ul>

                    <Animate className="animate__animated animate__fadeInUp">
                        <li>
                            <div className="icon">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div className="content">
                                <h5 className="title">Hotline</h5>
                                <a href="tel:+94 77 999 2467">+94 77 999 2467 / +94 77 404 8410</a>
                            </div>
                        </li>
                    </Animate>

                    <Animate className="animate__animated animate__fadeInUp" delay="300ms">
                        <li>
                            <div className="icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="info">
                                <h5 className="title">Our Location</h5>
                                <p>
                                    Services available remotely worldwide
                                </p>
                            </div>
                        </li>
                    </Animate>

                    <Animate className="animate__animated animate__fadeInUp" delay="500ms">
                        <li>
                            <div className="icon">
                                <i className="fas fa-envelope-open-text"></i>
                            </div>
                            <div className="info">
                                <h5 className="title">Official Email</h5>
                                <a href="mailto:code4matesdev@gmail.com">code4matesdev@gmail.com</a>
                            </div>
                        </li>
                    </Animate>
                </ul>
            </div>
        </>
    );
};

export default ContactInfo;