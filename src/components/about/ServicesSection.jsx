import React from 'react';
import CustomButton from '../utilities/CustomButton';

const ServicesSection = () => {
    const services = [
        {
            title: "Custom Software Development",
            description: "Bespoke applications built for your unique requirements.",
            icon: "fas fa-code"
        },
        {
            title: "Web & Mobile Applications",
            description: "Responsive, high-performance web and mobile apps.",
            icon: "fas fa-mobile-alt"
        },
        {
            title: "Cloud Solutions & DevOps",
            description: "Scalable cloud architectures and automated delivery pipelines.",
            icon: "fas fa-cloud"
        },
        {
            title: "UI/UX Design",
            description: "Intuitive and engaging interfaces for superior user experiences.",
            icon: "fas fa-paint-brush"
        },
        {
            title: "Maintenance & Support",
            description: "Ongoing monitoring, updates, and technical assistance.",
            icon: "fas fa-tools"
        }
    ];

    return (
        <div className="services-section default-padding bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-heading">What We Do</h4>
                            <h2 className="title">Comprehensive Software Services</h2>
                            <p>We offer a comprehensive suite of software services tailored to meet the diverse needs of our clients:</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-lg-6 mb-30" key={index}>
                            <div className="single-item">
                                <div className="icon">
                                    <i className={service.icon}></i>
                                </div>
                                <div className="info">
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center mt-30">
                        <CustomButton href="/services">
                            View All Services
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection; 