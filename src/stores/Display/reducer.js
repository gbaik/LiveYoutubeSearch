const initialState = {
  video: {},
  videos: []
};

const display = (state = initialState, action) => {
  switch(action.type) {
    case 'SEARCH_VIDEO':
      const { videos } = action.payload;

      return {
        ...state,
        videos: videos.data.items
      }
    case 'UPDATE_VIDEO_PLAYER':
      const { video } = action.payload;

      return {
        ...state,
        video: video
      }
    default:
      return state;
  }
}

export default display;