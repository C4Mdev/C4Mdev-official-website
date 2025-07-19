import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import AboutStyle2 from '@/components/about/AboutStyle2';
// import PartnerStyle1 from '@/components/partner/PartnerStyle1';
import ProcessStyle1 from '@/components/process/ProcessStyle1';
// import RequestCallStyle1 from '@/components/request/RequestCallStyle1';
import ServicesStyle2 from '@/components/services/ServicesStyle2';
// import TeamStyle1 from '@/components/team/TeamStyle1';
import TestimonialStyle1 from '@/components/testimonial/TestimonialStyle1';
import React from 'react';

export const metadata = {
    title: "Code4MatesDev - Services",
    description: "Explore our comprehensive web development, software services, and digital solutions. Code4MatesDev delivers custom software, cloud integration, and business transformation.",
    keywords: [
      "web development",
      "software services",
      "digital solutions",
      "custom software",
      "cloud integration",
      "business transformation",
      "Next.js",
      "Code4MatesDev"
    ],
    openGraph: {
      title: "Code4MatesDev - Services",
      description: "Explore our comprehensive web development, software services, and digital solutions.",
      url: "https://www.code4mates.com/services",
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

const Service2Page = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="services" title="Our Services">
                {/* <AboutStyle2 /> */}
                <ServicesStyle2 />
                <ProcessStyle1 />
                {/* <PartnerStyle1 sectionClass="default-padding bg-gray" /> */}
                {/* <TeamStyle1 teamTitle={true} /> */}
                {/* <RequestCallStyle1 /> */}
                {/* <TestimonialStyle1 /> */}
            </LayoutStyle7>
        </>
    );
};

export default Service2Page;