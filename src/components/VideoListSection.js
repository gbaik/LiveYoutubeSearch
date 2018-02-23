import React from 'react';
import {connect} from 'react-redux';

import { updateVideoPlayer } from '../stores/Display/actions';

const VideoListSection = ({ history, video, handleVideoSelection }) => (
  <div>
    <img src = { video.snippet.thumbnails.default.url } onClick = { () => handleVideoSelection(history, video) }/>
    <div>{ video.snippet.title }</div>      
    <div>{ video.snippet.description }</div>  
  </div>
);

async function updateVideoState (dispatch, video) {
  await dispatch(updateVideoPlayer(video));

  return;
}

const mapDispatchToProps = (dispatch) => (
  {
    handleVideoSelection: (history, video) => {
      updateVideoState(dispatch, video)
        .then(() => (
          history.push('/search/videoPlayer')
        ));
    }
  }
);

export default connect(null, mapDispatchToProps)(VideoListSection);
