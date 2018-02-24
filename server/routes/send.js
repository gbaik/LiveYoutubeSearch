const express = require('express');
const request = require('request');

const router = express.Router();

router.get('/message', function (req, res) {
  const { liveChatId, message } = req.query;
  const accessToken = 'ya29.GmJsBaA2IZSEd2AfnzNSq3sED5PyaHcXvTe49KhqVXjmm2YP5bUw5Q2U03_cLrSRvVulCc8znLoI4qaZe5fo_EfA1i2g70qMymtbYSpOEr_3qzR88AbBw-JBbdX_8InEoVeLBw';
  
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
