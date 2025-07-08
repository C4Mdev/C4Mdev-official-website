"use client"
import React from 'react';
import Image from 'next/image';
import shape40 from '@/assets/img/shape/40.png'

const ValuesSection = () => {
    const values = [
        {
            title: "Innovation",
            description: "We embrace new ideas and technologies to stay ahead of the curve.",
            icon: "10.png"
        },
        {
            title: "Quality",
            description: "We adhere to the highest standards in design, development, and support.",
            icon: "11.png"
        },
        {
            title: "Integrity",
            description: "We build trust through transparency, honesty, and accountability.",
            icon: "12.png"
        },
        {
            title: "Collaboration",
            description: "We believe in the power of teamwork and open communication.",
            icon: "13.png"
        },
        {
            title: "Customer Centricity",
            description: "We put our clients' needs at the heart of everything we do.",
            icon: "14.png"
        },
        {
            title: "Excellence",
            description: "We strive for technical excellence and continuous improvement in all our solutions.",
            icon: "15.png"
        }
    ];

    return (
        <>
            <style jsx>{`
                .value-card-hover {
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                .value-card-hover:hover {
                    box-shadow: 0 0 20px rgba(0, 123, 255, 0.3);
                    transform: translateY(-5px);
                }
            `}</style>
            <div className="feature-style-two-area default-padding bottom-less bg-gray about-us-values-section" style={{ backgroundImage: `url(/assets/img/shape/45.png)` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading secondary text-center">
                            <h4 className="sub-heading">Our Values</h4>
                            <h2 className="title">Core Principles That Drive Us</h2>
                            <div className="devider"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row relative">
                    {values.map((value, index) => (
                        <div className="col-lg-4 col-md-6 mb-30" key={index}>
                            <div className="feature-style-two mb-30 value-card-hover">
                                <Image src={`/assets/img/icon/${value.icon}`} width={430} height={430} alt="Icon" />
                                <h4 className="mb-15"><strong>{value.title}</strong></h4>
                                <p style={{ textAlign: 'justify' }}>{value.description}</p>
                            </div>
                        </div>
                    ))}
                    <div className="shape-right-bottom">
                        <Image src={shape40} alt="Image Not found" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ValuesSection; 