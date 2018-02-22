import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component { 
  constructor(props) { 
    super(props);
    
    this.state = {
      videoId: '0ByoQm-vnYw'
    }
  }

  componentDidMount() {
    axios.get('/test')
      .then(data => {
        this.setState({
          videoId: data.data.items[0].id.videoId
        })
      })
    //   .then(data => {
    //     console.log(data);
    //     console.log('hit');
    //   })
  }

  render() {
    const { videoId } = this.state;

    return (
      <div>
        {/* <iframe src="https://www.youtube.com/embed/6XPFG1keZak" allowFullScreen></iframe>         */}
        <iframe src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen></iframe>
      </div>
    );
  };
}

export default App;
