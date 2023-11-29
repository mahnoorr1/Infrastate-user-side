import React from 'react';

const ImageGrid = ({ imagePath }) => {
  const totalSegments = 12;
  const gridItems = [];

  for (let i = 0; i < totalSegments; i++) {
    const xOffset = (i % 2) * 50;
    const yOffset = Math.floor(i / 2) * 50;

    const backgroundPosition = `${xOffset}% ${yOffset}%`;

    const imageStyle = {
      background: `url(${imagePath})`,
      backgroundSize: '300% 550%',
      backgroundPosition,
      width: '100%',
      height: '100%',
    };

    gridItems.push(
      <div key={i} style={imageStyle} />
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(5, 1fr)',
        gap: '20px',
        width: '1200px',
        height: '2000px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {gridItems}
    </div>
  );
};

export default ImageGrid;
