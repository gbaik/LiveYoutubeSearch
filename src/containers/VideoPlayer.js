import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import axios from 'axios';

class VideoPlayer extends Component { 
  constructor(props) { 
    super(props);
  }

  render() {
    const { videoId } = this.props;

    return (
      <div>
        {/* <iframe src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen></iframe> */}
        <iframe src={'https://www.youtube.com/embed/0ByoQm-vnYw'} allowFullScreen></iframe>
      </div>
    );
  };
}

// const mapStateToProps = (state) => ({videoId: state.videoPlayer.videoId });

// export default connect(mapStateToProps)(VideoPlayer);
export default VideoPlayer;
