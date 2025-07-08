import React from 'react';
import BreadCrumb from '../breadCrumb/BreadCrumb';
import FooterStyle1 from '../footer/FooterStyle1';
import HeaderStyle7 from '../header/HeaderStyle7';
import shape38 from '@/assets/img/shape/38.png';
import logoLightSolid from '@/assets/img/logo-light-solid.png';

const LayoutStyle7 = ({ children, breadCrumb, title }) => {
    return (
        <>
            <HeaderStyle7 />
            {breadCrumb && <BreadCrumb breadCrumb={breadCrumb} title={title} />}
            {children}
            <FooterStyle1 shape={shape38} shapeClass="bottom" logo={logoLightSolid} formStyle="secondary"/>
        </>
    );
};

export default LayoutStyle7;


