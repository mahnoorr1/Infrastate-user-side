import React, { useState } from 'react';

const HoverZoom = ({height, children}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        height: height,
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.2s ease-in-out',
        cursor: 'pointer',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default HoverZoom;
