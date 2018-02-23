import React from 'react';
import {connect} from 'react-redux';

import VideoListSection from '../components/VideoListSection.js';

const VideoList = ({ history, videos }) => (
  <div>
    {videos.map((video, id) => (
      <VideoListSection history = {history} video = { video } key = {id} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({videos: state.Display.videos});

export default connect(mapStateToProps)(VideoList);