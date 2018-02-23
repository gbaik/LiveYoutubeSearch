import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';

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
  1.
  2. 
  3. 
  4. Figure out where the intial state is supposed to be using heirarchy
  5. Using data update the state of video
  6. Display 5 - 10 videos in videolist
  7. Display videolist video with api videos
  8. 
*/

const mapDispatchToProps = (dispatch) => (
  {
    handleVideoSearch: (videoSearchText) => {
      axios.get(`/results?search_query=${videoSearchText}`)
        .then(data => {
            console.log(data);
            // (data.data.items[0].id.videoId)
        })
      // dispatch()
    }
    
    // handleVideoPlayerIdChange: (videoId) => (
    //   dispatch(changeVideoPlayerId(videoId))
    // )
  }
)

export default connect(null, mapDispatchToProps)(Display);