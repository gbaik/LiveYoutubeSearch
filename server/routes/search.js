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
})

module.exports = router;
