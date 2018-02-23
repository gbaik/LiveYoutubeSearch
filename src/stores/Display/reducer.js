const initialState = {
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
    default:
      return state;
  }
}

export default display;