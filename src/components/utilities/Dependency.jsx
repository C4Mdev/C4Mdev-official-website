"use client"
import { useEffect, useState } from 'react';

const CustomScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop || 0;
    const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Prevent division by zero and ensure valid progress calculation
    const progress = maxHeight > 0 ? Math.min((scrolled / maxHeight) * 100, 100) : 0;
    
    setScrollProgress(isFinite(progress) ? progress : 0);
    setIsVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Initial call to set proper values
    toggleVisibility();
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const circumference = 2 * Math.PI * 20; // radius = 20
  const validScrollProgress = isFinite(scrollProgress) ? scrollProgress : 0;
  const strokeDashoffset = circumference - (validScrollProgress / 100) * circumference;

  return (
    <div
      className={`to-top-progress ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '50px',
        right: '30px',
        width: '50px',
        height: '50px',
        cursor: 'pointer',
        zIndex: 999999,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'all 0.3s ease',
      }}
    >
      <svg width="50" height="50" style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="rgba(59, 130, 246, 0.2)"
          strokeWidth="2"
          fill="#F7FBFE"
        />
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="#3B82F6"
          strokeWidth="2"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 0.1s ease' }}
        />
      </svg>
      <i 
        className="fal fa-long-arrow-up" 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#3B82F6',
          fontSize: '22px'
        }}
      ></i>
    </div>
  );
};

const Dependency = () => {

  useEffect(() => {

    // Dynamically import Bootstrap JS to avoid SSR issues
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {

    }).catch((err) => {
      console.error('Project loading ...:', err);
    });
  }, []);

  return (
    <>
      <CustomScrollToTop />
    </>
  );
};

export default Dependency;