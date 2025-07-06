"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

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
                                    <Link className="btn circle btn-md btn-gradient" href="/project-details/1">Explore the Case Study</Link>
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
                                    {isOpen && (
                                        <div className="modal-overlay" style={{
                                            position: 'fixed',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundColor: 'rgba(0,0,0,0.8)',
                                            zIndex: 9999,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <div style={{ position: 'relative', width: '80%', maxWidth: '800px' }}>
                                                <button 
                                                    onClick={() => setOpen(false)}
                                                    style={{
                                                        position: 'absolute',
                                                        top: '-40px',
                                                        right: '0',
                                                        background: 'none',
                                                        border: 'none',
                                                        color: 'white',
                                                        fontSize: '24px',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    ×
                                                </button>
                                                <ReactPlayer
                                                    url="https://www.youtube.com/watch?v=OSE1K12rm18"
                                                    width="100%"
                                                    height="400px"
                                                    controls
                                                    playing={isOpen}
                                                />
                                            </div>
                                        </div>
                                    )}
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