const express = require('express');
const request = require('request');

const router = express.Router();

router.get('/', function (req, res) {
  const searchQuery = req.query.query;
  
  request.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&q=${searchQuery}&key=${process.env.youtubeAPI}`, function (error, response, body) {
    if (error) {
      throw error;
    }

    res.end(body);
  });
});

router.get('/liveChatId', function (req, res) {
  const videoId = req.query.videoId;
  
  request.get(`https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${videoId}&key=${process.env.youtubeAPI}`, function (error, response, body) {
    if (error) {
      throw error;
    }
    res.end(body);
  });
})

router.get('/messages', function (req, res) {
  const liveChatId = req.query.liveChatId;

  request.get(`https://www.googleapis.com/youtube/v3/liveChat/messages?part=snippet&liveChatId=${liveChatId}&key=${process.env.youtubeAPI}`, function (error, response, body) {
    if (error) {
      throw error;
    }

    res.end(body);
  });
});


module.exports = router;
