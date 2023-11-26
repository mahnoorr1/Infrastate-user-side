import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
// import ArrowUpwardIcon from '@mui/icons-material';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <IconButton
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: isVisible ? 'block' : 'none',
        background: 'rgba(0, 0, 0, 0.6)',
        color: 'white',
      }}
    >
      <ArrowUpwardIcon />
    </IconButton>
  );
  
};

export default ScrollToTopButton;
