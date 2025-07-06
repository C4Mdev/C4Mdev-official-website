import React from 'react';
import shape37 from '@/assets/img/shape/37.png';
import Image from 'next/image';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactStyle1 = () => {
    return (
        <>
            <div className="contact-style-one-area overflow-hidden secondary default-padding">
                <div className="contact-shape">
                    <Image src={shape37} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center mb-60">
                                <h4 className="sub-heading secondary">Let's Shape the Future</h4>
                                <h2 className="title">Collaborate with us to bring your boldest ideas to life</h2>
                                <div className="button mt-35">
                                    <a className="btn circle btn-md btn-gradient" href="/contact-us">Start the Conversation</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-center">
                        <div className="contact-stye-one col-lg-5 mb-md-50 mb-xs-20">
                            <ContactInfo />
                        </div>
                        <div className="contact-stye-one col-lg-7 pl-60 pl-md-15 pl-xs-15">
                            <div className="contact-form-style-one">
                                <h5 className="sub-heading secondary">Have Questions?</h5>
                                <h2 className="heading">Send us a Message</h2>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactStyle1;