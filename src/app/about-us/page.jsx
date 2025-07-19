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
    title: "Code4MatesDev - About Us",
    description: "Learn about Code4MatesDev, your trusted partner for web development, software services, and digital solutions. Discover our mission, values, and expert team.",
    keywords: [
      "web development",
      "software services",
      "digital solutions",
      "custom software",
      "company mission",
      "expert team",
      "Next.js",
      "Code4MatesDev"
    ],
    openGraph: {
      title: "Code4MatesDev - About Us",
      description: "Learn about Code4MatesDev, your trusted partner for web development, software services, and digital solutions.",
      url: "https://www.code4mates.com/about-us",
      siteName: "Code4MatesDev",
      type: "website",
      images: [
        {
          url: "/assets/img/logo/logo.png",
          width: 800,
          height: 600,
          alt: "Code4MatesDev Logo"
        }
      ]
    }
}

const AboutUsPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="About us" title="About Us">
                <AboutStyle2 />
                
                <AboutStyle1 />                
                <AboutStyle3 />
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