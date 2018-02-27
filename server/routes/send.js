const express = require('express');
const request = require('request');

const router = express.Router();

router.get('/message', function (req, res) {
  const { liveChatId, message } = req.query;
  const accessToken = req.session.passport.user.access_token;
  
  console.log(req.session.passport);
  console.log(accessToken);

  const options = {
    method: 'POST',
    url: `https://www.googleapis.com/youtube/v3/liveChat/messages?part=snippet&access_token=${accessToken}`, 
    body: {
      "snippet": {
        "type": "textMessageEvent",
        "liveChatId": liveChatId,
        "textMessageDetails": {
          "messageText": message
        }
      }
    },
    json: true
  }

  request(options, function (error, response, body) {
    if (error) {
      throw error;
    }

    res.send(body);
  });
});


module.exports = router;
