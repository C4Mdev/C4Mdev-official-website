import React from 'react';
import shape21 from '@/assets/img/shape/21.png'
import Image from 'next/image';
import FeatureProgress1Data from '@/assets/jsonData/feature/FeatureProgress1Data.json'
import SingleFeatureProgress from './SingleFeatureProgress';
import Animate from '../animation/Animate';

const FeatureStyle1 = () => {
    return (
        <>
            <div className="feature-style-one-area half-angle-shape overflow-hidden default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="feature-style-one-heading text-light">
                                <div className="arrow-shape">
                                    <Image src={shape21} alt="Image not found" />
                                </div>
                                <h2 className="title mb-25">Flexibility & Features to Fit Any Team's Style.</h2>
                                <p>
                                    Our agency's aim is always to take the product to market as quickly as possible and use
                                    iterative software development approach until we achieve all business goals and fulfil
                                    market & user needs
                                </p>
                                <div className="circle-progress">
                                    {FeatureProgress1Data.map(progress =>
                                        <SingleFeatureProgress progress={progress} key={progress.id} />
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 offset-lg-1 pl-60 pl-md-15 pl-xs-10 mt-md-50 mt-xs-50">

                            <Animate className="animate__animated animate__fadeInUp">
                                <div className="feature-style-one">
                                    <div className="icon">
                                        <i className="flaticon-handshake"></i>
                                    </div>
                                    <div className="info">
                                        <h4>Quality Control Solutions</h4>
                                        <p>
                                            Our comprehensive testing and quality assurance process ensures every software solution meets the highest standards. We implement automated testing, code reviews, and performance optimization to deliver reliable applications.
                                        </p>
                                    </div>
                                </div>
                            </Animate>

                            <Animate className="animate__animated animate__fadeInUp" delay="300ms">
                                <div className="feature-style-one">
                                    <div className="icon">
                                        <i className="flaticon-social-engagement"></i>
                                    </div>
                                    <div className="info">
                                        <h4>Advanced Team Collaboration</h4>
                                        <p>
                                            Our development teams work seamlessly using modern collaboration tools and agile methodologies. We maintain transparent communication and regular updates throughout the development process to ensure project success.
                                        </p>
                                    </div>
                                </div>
                            </Animate>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureStyle1;