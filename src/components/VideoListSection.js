import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { updateVideoPlayer, updateVideoMessages } from '../stores/Display/actions';

const VideoListSection = ({ history, video, handleVideoSelection }) => (
  <div>
    <img src = { video.snippet.thumbnails.default.url } onClick = { () => handleVideoSelection(history, video) }/>
    <div>{ video.snippet.title }</div>      
    <div>{ video.snippet.description }</div>  
  </div>
);

async function updateVideoState (dispatch, video) {
  await dispatch(updateVideoPlayer(video));

  const liveChatData = await axios.get(`/search/liveChatId?videoId=${video.id.videoId}`);
  const liveChatId = liveChatData["data"]["items"][0]["liveStreamingDetails"]["activeLiveChatId"];
  const messages = await axios.get(`/search/messages?liveChatId=${liveChatId}`);

  await dispatch(updateVideoMessages(liveChatId, messages));

  return;
}

const mapDispatchToProps = (dispatch) => (
  {
    handleVideoSelection: (history, video) => {
      updateVideoState(dispatch, video)
        .then(() => (
          history.push('/watch')
        ));
    }
  }
);

export default connect(null, mapDispatchToProps)(VideoListSection);
