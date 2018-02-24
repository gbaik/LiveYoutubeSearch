export const searchVideo = (videos) => (
  {
    type: 'SEARCH_VIDEO',
    payload: {
      videos: videos
    }
  }
)

export const updateVideoPlayer = (video) => (
  {
    type: 'UPDATE_VIDEO_PLAYER',
    payload: {
      video: video
    }
  }
)

export const updateVideoMessages = (messages) => (
  {
    type: 'UPDATE_VIDEO_MESSAGES',
    payload: {
      messages: messages
    }
  }
)