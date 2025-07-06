import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import ProjectStyle2 from '@/components/project/ProjectStyle2';
import React from 'react';

export const metadata = {
    title: "Code4MatesDev - Software Projects"
}

const ProjectPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="Project" title="Latest Software Projects">
                <ProjectStyle2 />
            </LayoutStyle7>
        </>
    );
};

export default ProjectPage;