export const changeVideoPlayerId = (videoId) => (
  {
    type: 'EDIT_VIDEO_PLAYER_ID',
    payload: {
      videoId: videoId
    }
  }
)
