import Image from 'next/image';
import React from 'react';
import SocialShare from '../utilities/SocialShare';

const ProjectDetailsContent = ({ projectInfo }) => {
    const { thumbFull, projectData, detailsTitle, detailsIntro, detailsMain, projectInfo: projectDetails, galleryImages } = projectInfo

    return (
        <>
            <div className="project-details-area default-padding">
                <div className="container">
                    <div className="project-details-items">
                        <div className="thumb">
                            <Image src={`/assets/img/gallery/${thumbFull}`} alt="Thumb" width={1920} height={825} />
                        </div>
                        <div className="top-info">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 order-lg-last right-info">
                                    <div className="project-info mt-15" style={{ backgroundImage: `url(/assets/img/shape/41.png)` }}>
                                        <h4 className="title">Project Info</h4>
                                        <ul>
                                            <li>
                                                Client <span>
                                                    {projectDetails?.clientWebsite ? (
                                                        <a 
                                                            href={projectDetails.clientWebsite} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            style={{ color: 'inherit', textDecoration: 'underline' }}
                                                        >
                                                            {projectDetails.client}
                                                        </a>
                                                    ) : (
                                                        projectDetails?.client || 'N/A'
                                                    )}
                                                </span>
                                            </li>
                                            <li>
                                                Category <span>{projectDetails?.category || 'N/A'}</span>
                                            </li>
                                            <li>
                                                Duration <span>{projectDetails?.duration || 'N/A'}</span>
                                            </li>
                                        </ul>
                                        <ul className="social">
                                            <SocialShare />
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-7 pr-35 pr-md-15 pr-xs-15 left-info mt-md-10">
                                    <h2>{detailsTitle}</h2>
                                    <p style={{ textAlign: 'justify' }}>
                                        {detailsIntro}
                                    </p>
                                    <ul className="check-list">
                                        {projectData.map(list =>
                                            <li key={list.id}>
                                                <h4>{list.title}</h4>
                                                <p>{list.info}</p>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="main-content">
                            <p style={{ textAlign: 'justify' }}>
                                {detailsMain}
                            </p>
                            {/* {galleryImages && galleryImages.length > 0 && (
                                <div className="row">
                                    {galleryImages.map((image, index) => (
                                        <div key={index} className="col-lg-6 col-md-6">
                                            <Image 
                                                src={`/assets/img/gallery/${image}`} 
                                                alt={`Project Gallery ${index + 1}`} 
                                                width={800} 
                                                height={600} 
                                            />
                                        </div>
                                    ))}
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsContent;