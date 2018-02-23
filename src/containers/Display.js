import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';

import { searchVideo } from '../stores/Display/actions';

class Display extends Component { 
  constructor(props) { 
    super(props);
  }

  render() {
    const { handleVideoSearch } = this.props;    
    
    return (
      <div>
        <Search onSubmit = { event => handleVideoSearch(event.videoSearchText)}/>                
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <VideoPlayer />
            </Route>
            <Route path="/search">
              <VideoList />
            </Route>      
          </Switch>
        </BrowserRouter>
      </div>
    );
  };
}

/*
  6. Display 5 - 10 videos in videolist
  7. Display videolist video with api videos
  8. 
*/

const mapDispatchToProps = (dispatch) => (
  {
    handleVideoSearch: (videoSearchText) => (
      axios.get(`/results?search_query=${videoSearchText}`)
        .then(videos => (
            dispatch(searchVideo(videos))
        ))
    )
  }
)

export default connect(null, mapDispatchToProps)(Display);