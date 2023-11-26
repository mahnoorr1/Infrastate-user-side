import React from 'react';

const ImageGrid = ({imagePath}) => {
  const imageUrl = imagePath; 

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gap: '8px',
        width: '400px', 
      }}
    >
      {Array.from({ length: 6 }, (_, index) => (
        <div
          key={index}
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: '200% 200%',
            backgroundPosition: index % 2 === 0 ? '0% ' : '100% ',
          }}
          className={`segment-${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
