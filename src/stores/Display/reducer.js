const initialState = {
  video: {},
  videos: [],
  messages: [],
  liveChatId: ''
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
    case 'UPDATE_VIDEO_MESSAGES':
      const { messages, liveChatId } = action.payload;

      return {
        ...state,
        messages: messages.data.items,
        liveChatId: liveChatId
      }
    default:
      return state;
  }
}

export default display;