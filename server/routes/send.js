const express = require('express');
const request = require('request');

const router = express.Router();

router.get('/message', function (req, res) {
  const message = req.query.videoChatText;
  const accessToken = ''

  const options = {
    method: 'POST',
    url: `https://www.googleapis.com/youtube/v3/liveChat/messages?part=snippet&access_token=${accessToken}`, 
    body: {
      "snippet": {
        "type": "textMessageEvent",
        "liveChatId": "",
        "textMessageDetails": {
          "messageText": "How is 3veryone doing tonight?"
        }
      }
    },
    json: true
  }

  request(options, function (error, response, body) {
    if (error) {
      throw error;
    }
    console.log('mesage sent:', body);
    res.send(body);
  });
});


module.exports = router;
