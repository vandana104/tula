// import { Box } from '@mui/material';
import React from 'react';

const DynamicImageBox = ({ imageSrc, altText, height, top, left, zIndex }) => {
    return (
      <img
        src={imageSrc}
        alt={altText}
        style={{
          position: 'absolute',
          height: height,
          top: top,
          left: left,
          zIndex: zIndex,
        }}
      />
    );
  };

export default DynamicImageBox;
