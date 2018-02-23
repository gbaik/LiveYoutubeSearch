import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { changeVideoPlayerId } from '../stores/VideoPlayer/actions';

class VideoPlayer extends Component { 
  constructor(props) { 
    super(props);
  }

  componentDidMount() {
    const { handleVideoPlayerIdChange } = this.props;
    
    axios.get('/test')
      .then(data => {
          handleVideoPlayerIdChange(data.data.items[0].id.videoId)
      })
  }

  render() {
    const { videoId } = this.props;

    return (
      <div>
        <iframe src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen></iframe>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({videoId: state.videoPlayer.videoId });

const mapDispatchToProps = (dispatch) => (
  {
    handleVideoPlayerIdChange: (videoId) => (
      dispatch(changeVideoPlayerId(videoId))
    )
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
