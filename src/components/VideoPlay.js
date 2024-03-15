import React from 'react';
import Video from '../assets/images/video.svg';
import Play from '../assets/logos/playButton.svg'; // Assuming you have an icon image

const VideoPlay = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={Video}
        alt='video'
        style={{
          width: '100%',
          height: 'auto',
          opacity: '0.5', // Adjust the opacity to dim the image
        }}
      />
      <img
        src={Play}
        alt='icon'
        style={{
          position: 'absolute',
          width: '50px', // Adjust the size of the icon as needed
          height: '50px',
          top: '50%', // Position the icon in the center
          left: '50%',
          transform: 'translate(-50%, -50%)', // Center the icon
        }}
      />
    </div>
  );
};

export default VideoPlay;
