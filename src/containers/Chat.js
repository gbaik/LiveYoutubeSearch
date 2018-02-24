import React from 'react';

const Chat = ({ message }) => (
  <div>
    { message.textMessageDetails.messageText }
  </div>
);

/*
  3. In videoListSection using videoId (from video) query https://www.googleapis.com/youtube/v3/videos to get liveChatId
  4. Using ^ liveChatId, query https://www.googleapis.com/youtube/v3/liveChat/messages
  5. Using ^'s data update state of messages

  request.get(`https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=XHCPOOkTD8M&key=${proc   ess.env.youtubeAPI}`, function (error, response, body) {
    if (error) {
      throw error;
    }

    console.log(body);
  });
*/

export default Chat;