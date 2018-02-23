export const searchVideo = (videos) => (
  {
    type: 'SEARCH_VIDEO',
    payload: {
      videos: videos
    }
  }
)
