import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleServices2 = ({ service }) => {
    const { id, thumb, title, icon, text, btnText } = service

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
            <div className="services-style-two active service-card-hover">
                <div className="thumb">
                    <Image src={`/assets/img/service/${thumb}`} width={800} height={600} alt="Thumb" />
                    <div className="title">
                    <Link href={`/project`}>
                        {/* <Link href={`/services-details/${id}`}> */}
                            <i className={icon}></i>
                            <h4>{title}</h4>
                        </Link>
                    </div>
                </div>
                <div className="info">
                    <p style={{ textAlign: 'justify' }}>{text}</p>
                    <div className="button">
                        {/* <Link href={`/services-details/${id}`}>{btnText}</Link> */}
                        <Link href={'/project'}>{btnText}</Link>
                        <div className="devider"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleServices2;