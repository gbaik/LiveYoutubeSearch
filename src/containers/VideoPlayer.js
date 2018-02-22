import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import axios from 'axios';

class VideoPlayer extends Component { 
  constructor(props) { 
    super(props);
  }

  componentDidMount() {
    // axios.get('/test')
    //   .then(data => {
    //     this.setState({
    //       videoId: data.data.items[0].id.videoId
    //     })
    //   })
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

export default connect(mapStateToProps)(VideoPlayer);
