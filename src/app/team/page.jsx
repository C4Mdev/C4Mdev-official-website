import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import TeamStyle1 from '@/components/team/TeamStyle1';
import React from 'react';

export const metadata = {
    title: "Code4MatesDev - Our Developers"
}

const TeamPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="team" title="Our Developers">
                <TeamStyle1 />
            </LayoutStyle7>
        </>
    );
};

export default TeamPage;