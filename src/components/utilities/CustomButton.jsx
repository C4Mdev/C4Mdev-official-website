"use client"
import React from 'react';
import Link from 'next/link';

const CustomButton = ({ 
    href, 
    children, 
    backgroundColor = '#3B82F6',
    hoverColor = '#1E40AF',
    textColor = 'white',
    padding = '12px 30px',
    borderRadius = '6px',
    fontSize = '16px',
    fontWeight = '500',
    style = {},
    className = '',
    ...props 
}) => {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        color: textColor,
        padding: padding,
        borderRadius: borderRadius,
        textDecoration: 'none',
        display: 'inline-block',
        fontWeight: fontWeight,
        fontSize: fontSize,
        transition: 'all 0.3s ease-in-out',
        border: 'none',
        cursor: 'pointer',
        ...style
    };

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = hoverColor;
        e.target.style.transform = 'translateY(-2px)';
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = backgroundColor;
        e.target.style.transform = 'translateY(0)';
    };

    // If href is provided, render as Link, otherwise as button
    if (href) {
        return (
            <Link 
                href={href}
                className={className}
                style={buttonStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                {...props}
            >
                {children}
            </Link>
        );
    }

    return (
        <button 
            className={className}
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {children}
        </button>
    );
};

export default CustomButton; 