"use client"
import { useState } from 'react';
import shape11 from '@/assets/img/shape/11.png'
import Image from 'next/image';
import Process1Data from '@/assets/jsonData/process/Process1Data.json'
import SingleProcess1 from './SingleProcess1';

const ProcessStyle1 = ({ sectionClass }) => {

    const [activeServiceId, setActiveServiceId] = useState(Process1Data[0]?.id || null);

    const handleMouseEnter = (id) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className={`process-style-one-area text-center default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="large-shape">
                    <Image src={shape11} alt="Shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-heading">Our Process</h4>
                                <h2 className="title">Proven Agile Driven Process <br /> for Maximum Value</h2>
                                {/* <p>We follow a proven, agile-driven process to ensure timely delivery and maximum value:</p> */}
                                <div className="devider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {Process1Data.map(process =>
                            <div className="col-lg-4 col-md-6 mb-30" key={process.id}>
                                <div className={`process-style-one ${activeServiceId === process.id ? 'active' : ''}`}
                                    onMouseEnter={() => handleMouseEnter(process.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <SingleProcess1 process={process} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessStyle1;