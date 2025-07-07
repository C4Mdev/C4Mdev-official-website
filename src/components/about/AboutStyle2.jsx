import Image from 'next/image';
import React from 'react';
import about7Thumb from '@/assets/img/about/7.png'
import about8Thumb from '@/assets/img/about/8.png'
import anim5Shape from '@/assets/img/shape/anim-5.png'
import Link from 'next/link';

const AboutStyle2 = ({ sectionClass }) => {
    return (
        <>
            <div className={`about-style-two-area overflow-hidden bg-contain default-padding ${sectionClass ? sectionClass : ''}`}
                style={{ backgroundImage: `url(/assets/img/shape/29.png)` }}>
                <div className="container">
                    <div className="row align-center">

                        <div className="col-lg-5 about-style-two">
                            <div className="thumb">
                                <Image src={about7Thumb} alt="Image Not Found" />
                                <Image src={about8Thumb} alt="Image Not Found" />
                                {/* <div className="experience">
                                    <h2><strong>15</strong> Years experience</h2>
                                </div> */}
                                <div className="shape">
                                    <Image src={anim5Shape} alt="Shape" />
                                </div>
                            </div>
                        </div>
                        <div className="about-style-two col-lg-6 offset-lg-1">
                            <h2 className="title">Software Solutions for <br /> Digital Transformation</h2>
                            <p style={{ textAlign: 'justify' }}>
                                We work to understand your technical challenges and are driven to ask better questions in the pursuit of
                                building innovative software solutions. Our team of experienced developers and architects collaborates
                                closely with your business to deliver scalable, secure, and user-friendly applications that drive growth
                                and efficiency. From custom development to system integration, we transform your ideas into powerful
                                digital solutions that keep you ahead of the competition.
                            </p>
                            <div className="default-features mt-30">
                                <div className="default-feature-item">
                                    <Link href="#" scroll={false}>
                                        <i className="flaticon-investment-3"></i>
                                        <h4>Custom Software <br /> Development</h4>
                                    </Link>
                                </div>
                                <div className="default-feature-item">
                                    <Link href="#" scroll={false}>
                                        <i className="flaticon-progress"></i>
                                        <h4>Innovative Tech <br /> Solutions</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyle2;