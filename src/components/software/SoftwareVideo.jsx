"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const SoftwareVideo = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <div className="software-video overflow-hidden default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-heading secondary">Featured Project</h4>
                                <h2 className="title">Enterprise SaaS Solution</h2>
                                <p>A scalable, cutting-edge platform that transforms efficiency and user experience for global businesses.</p>
                                <div className="button mt-35">
                                    <a className="btn circle btn-md btn-gradient" href="/project-details/1">Explore the Case Study</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="software-video-preview bg-cover">
                                <div className="video-bg-live" style={{ backgroundImage: `url(/assets/img/banner/20.jpg)` }}>
                                    <div className="shadow-overlay"></div>
                                    <div className="player"></div>
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="OSE1K12rm18" onClose={() => setOpen(false)} />
                                    <Link className="popup-youtube video-play-button" onClick={() => setOpen(true)} href="#" scroll={false}>
                                        <i className="fas fa-play"></i>
                                        <div className="effect"></div>
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

export default SoftwareVideo;