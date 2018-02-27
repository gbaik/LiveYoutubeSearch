import { connect } from 'react-redux';
import React from 'react';

import VideoListSection from './VideoListSection.js';

const VideoList = ({ history, videos }) => (
  <div className = 'video_list'>
    {videos.map((video, index) => (
      <VideoListSection history = { history } video = { video } key = { index } />
    ))}
  </div>
);

const mapStateToProps = (state) => ({ videos: state.Display.videos });

export default connect(mapStateToProps)(VideoList);