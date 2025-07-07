import Image from 'next/image';
import React from 'react';
import illustration16 from '@/assets/img/illustration/16.png'
import illustrationV from '@/assets/img/illustration/v.png'
import illustrationV2 from '@/assets/img/illustration/v2.png'
import Animate from '../animation/Animate';

const AboutStyle3 = () => {
    return (
        <>
            <div className="about-style-three-area default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="about-style-three">
                                <div className="thumb">
                                    <Animate className="animate__animated animate__fadeInLeft">
                                        <Image src={illustration16} alt="Image not found" />
                                    </Animate>
                                    <div className="sub-item">
                                        <Animate className="animate__animated animate__fadeInUp" delay="500ms">
                                            <Image src={illustrationV} alt="Image not found" />
                                        </Animate>
                                        <Animate className="animate__animated animate__fadeInRight" delay="1000ms">
                                            <Image src={illustrationV2} alt="Image not found" />
                                        </Animate>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="about-style-three">
                                <h4 className="sub-heading secondary">Why Choose Us</h4>
                                <h2 className="heading">Why Partner with Us?</h2>
                                <Animate className="animate__animated animate__fadeInUp">
                                    <div className="list-item-style-two">
                                        <div className="number">01</div>
                                        <div className="info">
                                            <h4>Innovative Solutions</h4>
                                            <p style={{ textAlign: 'justify' }}>
                                                We leverage the latest technologies and creative thinking to deliver software that solves real business challenges and drives growth for our clients.
                                            </p>
                                        </div>
                                    </div>
                                </Animate>
                                <Animate className="animate__animated animate__fadeInUp" delay="500ms">
                                    <div className="list-item-style-two">
                                        <div className="number">02</div>
                                        <div className="info">
                                            <h4>Technical Excellence & Partnership</h4>
                                            <p style={{ textAlign: 'justify' }}>
                                                Our experienced team works as your technology partner, ensuring quality, transparency, and ongoing support from concept to deployment and beyond.
                                            </p>
                                        </div>
                                    </div>
                                </Animate>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyle3;