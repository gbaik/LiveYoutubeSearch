import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import axios from 'axios';

class VideoPlayer extends Component { 
  constructor(props) { 
    super(props);
  }

  render() {
    const { video, videoId } = this.props;

    return (
      <div>
        <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen></iframe>
        <div>{ video.snippet.title }</div>      
        <div>{ video.snippet.description }</div>
    </div>
    );
  };
}

const mapStateToProps = (state) => ({video: state.Display.video });

export default connect(mapStateToProps)(VideoPlayer);
