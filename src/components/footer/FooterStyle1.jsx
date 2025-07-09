"use client"
import Image from 'next/image';
import React from 'react';
import shape7 from '@/assets/img/shape/7.png';
import shape9 from '@/assets/img/shape/9.png';
import logoLight from '@/assets/img/logo-light.png';
import Link from 'next/link';
import SocialShare from '../utilities/SocialShare';
import FooterNewsLetter from '../form/FooterNewsLetter';

const FooterStyle1 = ({ shape, shapeClass, logo, formStyle }) => {
    return (
        <>
            <footer className="bg-dark text-light">
                <div className="footer-shape">
                    <div className={`item ${shapeClass}`}>
                        {shape ? <Image src={shape} alt="Shape" /> : <Image src={shape7} alt="Shape" />}
                    </div>
                    <div className="item">
                        <Image src={shape9} alt="Shape" />
                    </div>
                </div>
                <div className="container">
                    <div className="footer-top pt-40 pb-20 pt-xs-0 pb-xs-40">
                        <div className="row d-flex align-items-start justify-content-between">
                            {/* Column 1: Logo & Tagline */}
                            <div className="col-lg-6 col-md-8 text-start">
                                <Link href="/">
                                    {logo ? <Image className="footer-logo" src={logo} alt="Logo" /> : <Image className="footer-logo" src={logoLight} alt="Logo" />}
                                </Link>
                                <p className="footer-tagline mt-3 " style={{textAlign: 'justify'}}>
                                    We partner with businesses to deliver innovative, scalable, and secure digital solutions empowering you to achieve your goals in a rapidly evolving digital landscape.
                                </p>
                            </div>
                            {/* Column 2: Quick Links */}
                            <div className="col-lg-2 col-md-2">
                                <h5>Quick Links</h5>
                                <ul className="footer-links ps-0 d-inline-block text-start">
                                    <li><Link href="/"><span>Home</span></Link></li>
                                    <li><Link href="/project"><span>Our Works</span></Link></li>
                                    <li><Link href="/services"><span>Services</span></Link></li>
                                    <li><Link href="/about-us"><span>About Us</span></Link></li>                             
                                    <li><Link href="/contact-us"><span>Contact Us</span></Link></li>
                                </ul>
                            </div>
                            {/* Column 3: Contact Info */}
                            <div className="col-lg-3 col-md-2">
                                <h5>Contact</h5>
                                <ul className="footer-links ps-0 d-inline-block text-start">
                                    <li><i className="fas fa-map-marker-alt"></i> &nbsp;&nbsp;&nbsp;Services available remotely worldwide</li>
                                    <li><i className="fas fa-envelope"></i> &nbsp;&nbsp;&nbsp;code4matesdev@gmail.com</li>
                                    <li><i className="fas fa-phone"></i> &nbsp;&nbsp;&nbsp;+94 77 999 2467 / +94 77 404 8410</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom ">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                            <p className="mb-0 text-start">
                                &copy; {new Date().getFullYear()} Code4MatesDev. All rights reserved.
                            </p>
                            <p className="mb-0 text-end">
                                <Link href="">Privacy Policy</Link> | <Link href="">Terms of Service</Link>
                            </p>
                            {/* <p className="mb-0 text-end">
                                <Link href="/privacy">Privacy Policy</Link> | <Link href="/terms">Terms of Service</Link>
                            </p> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterStyle1;