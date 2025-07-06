import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import AboutStyle1 from '@/components/about/AboutStyle1';
import AboutStyle2 from '@/components/about/AboutStyle2';
import AboutStyle3 from '@/components/about/AboutStyle3';
import AboutStyle4 from '@/components/about/AboutStyle4';
import AboutStyle5 from '@/components/about/AboutStyle5';
import AboutStyle6 from '@/components/about/AboutStyle6';
import ValuesSection from '@/components/about/ValuesSection';
import ServicesSection from '@/components/about/ServicesSection';
import ProcessStyle1 from '@/components/process/ProcessStyle1';
import WhyChooseSection from '@/components/about/WhyChooseSection';
import TeamStyle1 from '@/components/team/TeamStyle1';
import TestimonialStyle1 from '@/components/testimonial/TestimonialStyle1';
import React from 'react';

export const metadata = {
    title: "Code4MatesDev - About Us | Innovative Software Solutions"
}

const AboutUsPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="About-us" title="About Code4MatesDev">
                <AboutStyle2 />
                <AboutStyle3 />
                <AboutStyle1 />                
                
                {/* <AboutStyle4 /> */}
                {/* <AboutStyle5 /> */}
                {/* <AboutStyle6 /> */}
                <ValuesSection />                
                {/* <WhyChooseSection /> */}
                {/* <ProcessStyle1 sectionClass="bg-gray" /> */}
            </LayoutStyle7>
        </>
    );
};

export default AboutUsPage;