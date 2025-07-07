import Image from 'next/image';
import React from 'react';
import anim1Thumb from '@/assets/img/shape/anim-1.png'
import anim2Thumb from '@/assets/img/shape/anim-2.png'
import anim3Thumb from '@/assets/img/shape/anim-3.png'
import anim4Thumb from '@/assets/img/shape/shape_1.png'
import aboutThumb from "@/assets/img/about/about_2.png"
import About1Card from './About1Card';
import Animate from '../animation/Animate';

const AboutStyle1 = () => {
    return (
        <>
            <div className="about-style-one-area default-padding">
                <div className="shape-animated-left">
                    <Image src={anim1Thumb} alt="Image Not Found" />
                    <Image src={anim2Thumb} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="about-style-three col-xl-6 col-lg-5">
                            
                            <h4 className="sub-heading secondary">Who We Are</h4>
                            <h2 className="heading">Innovative Digital Solutions for Tomorrow</h2>
                            <p style={{ textAlign: 'justify' }}>
                                Code4MatesDev is a dynamic software development firm committed to delivering innovative, scalable, and user-centric solutions. Our team comprises experienced developers, designers, and strategists who work collaboratively to transform ideas into high-performance applications and digital experiences.
                            </p>
                            
                            <div className="mb-30">
                                <h4 className="mb-15"><strong>Our Mission</strong></h4>
                                <p style={{ textAlign: 'justify' }}>
                                    To empower businesses and individuals with cutting-edge digital solutions that drive growth, improve efficiency, and enhance user satisfaction through relentless innovation and technical excellence.
                                </p>
                            </div>

                            <div>
                                <h4 className="mb-15"><strong>Our Vision</strong></h4>
                                <p style={{ textAlign: 'justify' }}>
                                    To be a global leader in Digital services, renowned for pioneering technologies that shape the future and create lasting value for our clients, partners, and communities.
                                </p>
                            </div>
                        </div>
                        <div className="about-style-one col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
                            <div className="about-thumb">

                                <Animate className="animate__animated animate__fadeInRight">
                                    <Image src={aboutThumb} alt="Image Not Found" />
                                </Animate>
                                {/* <About1Card /> */}

                                {/* <Animate className="animate__animated animate__fadeInDown" delay="300ms">
                                    <div className="thumb-shape-bottom">
                                        <Image src={anim3Thumb} alt="Image Not Found" />
                                        <Image src={anim4Thumb} alt="Image Not Found" />
                                    </div>
                                </Animate> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyle1;