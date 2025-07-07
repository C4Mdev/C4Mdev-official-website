"use client"
import React from 'react';
import Services2Data from '@/assets/jsonData/services/Services2Data.json'
import SingleServices2 from './SingleServices2';

const ServicesStyle2 = () => {
    return (
        <>
            <style jsx>{`
                .service-card-hover {
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                .service-card-hover:hover {
                    box-shadow: 0 0 20px rgba(0, 123, 255, 0.3);
                    transform: translateY(-5px);
                }
            `}</style>
            <div className="services-style-two-area default-padding bottom-less bg-cover bg-gray"
                style={{ backgroundImage: `url(/assets/img/shape/27.png)` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-heading">Our Expertise</h4>
                                <h2 className="title">Digital Solutions We Deliver</h2>
                                <div className="devider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {Services2Data.slice(0, 6).map(service =>
                            <div className="col-xl-4 col-md-6 mb-30" key={service.id}>
                                <SingleServices2 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesStyle2;