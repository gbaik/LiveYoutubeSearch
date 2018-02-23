const initialState = {
  videoId: '0ByoQm-vnYw'  
};

const videoPlayer = (state = initialState, action) => {
  switch(action.type) {
    case 'EDIT_VIDEO_PLAYER_ID': 
      return {
        // ...state,
        videoId: action.payload.videoId
      }
      return state;
    default:
      return state;
  }
}

export default videoPlayer;