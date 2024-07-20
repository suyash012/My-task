import React from 'react';

function VideoAsset({ src }) {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={src}
        frameBorder="2"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="w-full h-72"
      ></iframe>
    </div>
  );
}

export default VideoAsset;