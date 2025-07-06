import Link from 'next/link';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const SingleBanner5 = ({ banner }) => {
    const { thumb, subTitle, title1, title2, btnText, shape, videoId } = banner

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="banner-thumb bg-cover" style={{ background: `url(/assets/img/banner/${thumb})` }}></div>
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-7">
                        <div className="content">
                            <h4>{subTitle}</h4>
                            <h2>{title1} <br /> {title2}</h2>
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
                                            url={`https://www.youtube.com/watch?v=${videoId}`}
                                            width="100%"
                                            height="400px"
                                            controls
                                            playing={isOpen}
                                        />
                                    </div>
                                </div>
                            )}
                            <Link className="popup-youtube video-play-button with-text mt-20" onClick={() => setOpen(true)} href="#" scroll={false}>
                                <div className="effect"></div>
                                <span><i className="fas fa-play"></i> {btnText}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shape-bg">
                <img src={`/assets/img/shape/${shape}`} alt="Shape" />
            </div>
        </>
    );
};

export default SingleBanner5;