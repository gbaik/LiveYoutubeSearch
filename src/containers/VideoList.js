import React from 'react';

const VideoList = ({videos}) => (
  <div>
    {videos.map(video => (
      <img src = { video.snippet.thumbnails.default.url } />
    ))}
  </div>
);

export default VideoList;