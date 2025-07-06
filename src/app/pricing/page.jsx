import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import ChooseStyle1 from '@/components/choose/ChooseStyle1';
import PriceStyle1 from '@/components/price/PriceStyle1';
import TestimonialStyle1 from '@/components/testimonial/TestimonialStyle1';
import React from 'react';

export const metadata = {
    title: "Code4MatesDev - Pricing & Plans"
}

const PricingPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="Pricing" title="Software Pricing Plans">
                <PriceStyle1 />
                <ChooseStyle1 />
                <TestimonialStyle1 />
            </LayoutStyle7>
        </>
    );
};

export default PricingPage;