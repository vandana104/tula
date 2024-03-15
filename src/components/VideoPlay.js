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
          opacity: '0.5', 
        }}
      />
      <img
        src={Play}
        alt='icon'
        style={{
          position: 'absolute',
          width: '70px', 
          height: '50px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)', 
        }}
      />
    </div>
  );
};

export default VideoPlay;
