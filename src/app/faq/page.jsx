import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import FaqStyle2 from '@/components/faq/FaqStyle2';
import React from 'react';

export const metadata = {
    title: "Code4MatesDev - FAQ"
}

const FaqPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="FAQ" title="Software FAQs">
                <FaqStyle2 fullFaq={true}/>
            </LayoutStyle7>
        </>
    );
};

export default FaqPage;