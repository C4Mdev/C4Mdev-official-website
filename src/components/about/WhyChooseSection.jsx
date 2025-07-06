import React from 'react';
import CustomButton from '../utilities/CustomButton';

const WhyChooseSection = () => {
    const reasons = [
        {
            title: "Expert Development Team",
            description: "Skilled software engineers with deep technical expertise across multiple platforms and technologies.",
            icon: "fas fa-user-tie"
        },
        {
            title: "Custom Software Solutions",
            description: "Tailored development approach to meet your exact business requirements and technical specifications.",
            icon: "fas fa-cogs"
        },
        {
            title: "Agile Development Methodology",
            description: "Flexible development processes that adapt to changing requirements and deliver results quickly.",
            icon: "fas fa-sync-alt"
        },
        {
            title: "Transparent Project Communication",
            description: "Regular updates, collaborative tools, and clear communication keep you informed throughout development.",
            icon: "fas fa-comments"
        },
        {
            title: "Proven Technical Track Record",
            description: "Successful software projects across industries with satisfied clients and measurable business impact.",
            icon: "fas fa-trophy"
        }
    ];

    return (
        <div className="why-choose-section default-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-heading">Why Choose Us</h4>
                            <h2 className="title">Why Choose Code4MatesDev?</h2>
                            <p>We bring together technical expertise, innovative solutions, and dedicated development to deliver exceptional software results</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {reasons.map((reason, index) => (
                        <div className="col-lg-4 col-md-6 mb-30" key={index}>
                            <div className="single-item text-center">
                                <div className="icon">
                                    <i className={reason.icon}></i>
                                </div>
                                <div className="info">
                                    <h4>{reason.title}</h4>
                                    <p>{reason.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center mt-30">
                        <CustomButton href="/contact-us">
                            Start Your Project
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseSection; 