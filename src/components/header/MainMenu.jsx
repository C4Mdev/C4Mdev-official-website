'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
    const pathname = usePathname();
    console.log('Current pathname:', pathname);
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li className={pathname === '/' ? 'active' : ''}><Link href="/">Home</Link></li>
                <li className={pathname.startsWith('/project') && pathname !== '/' ? 'active' : ''}><Link href="/project">Our Works</Link></li>
                <li className={pathname.startsWith('/services') && pathname !== '/' ? 'active' : ''}><Link href="/services">Services</Link></li>
                <li className={pathname.startsWith('/about-us') && pathname !== '/' ? 'active' : ''}><Link href="/about-us">About Us</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;