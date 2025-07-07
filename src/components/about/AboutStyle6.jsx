"use client"
import React from 'react';
import dashboard1 from '@/assets/img/illustration/11.png'
import dashboard3 from '@/assets/img/dashboard/20.png'
import illustration12 from '@/assets/img/illustration/12.png'
import Image from 'next/image';
import Link from 'next/link';
import CustomButton from '../utilities/CustomButton';

const AboutStyle6 = () => {
    return (
        <>
            <div className="about-style-six-area default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="about-style-six-thumb">
                                <Image src={dashboard3} alt="Image not Found" />
                                <Image src={illustration12} alt="Image not Found" />
                                <div className="shape">
                                    <Image src={dashboard1} alt="Image Not found" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="about-style-six-info">
                                <h4 className="sub-heading secondary">About Us</h4>
                                <h2 className="title">Transforming Ideas Into Digital Excellence</h2>
                                <p style={{ textAlign: 'justify' }}>
                                    We are a passionate team of software engineers and designers dedicated to creating innovative solutions that drive business growth. We turn complex challenges into streamlined, powerful software that delivers real results.
                                </p>
                                <ul className="list-regular">
                                    <li>End-to-end software development from concept to deployment</li>
                                    <li>Agile development process ensuring quality delivery</li>
                                    <li>Latest technologies and industry best practices</li>
                                </ul>
                                <div className="button" style={{ paddingTop: '30px' }}>
                                    <CustomButton href="/about-us">
                                        Learn More
                                    </CustomButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyle6;