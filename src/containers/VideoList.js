import React from 'react';
import { connect } from 'react-redux';

import VideoListSection from '../components/VideoListSection.js';

const VideoList = ({ history, videos }) => (
  <div>
    {videos.map((video, index) => (
      <VideoListSection history = { history } video = { video } key = { index } />
    ))}
  </div>
);

const mapStateToProps = (state) => ({ videos: state.Display.videos });

export default connect(mapStateToProps)(VideoList);