const express = require('express');
const path = require('path');
const request = require('request');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('./'));
app.use(express.static(path.join(__dirname, '/../dist')));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

app.get('/search', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../dist/index.html'));  
})

app.get('/results', function (req, res) {
  const searchQuery = req.query.search_query;
  console.log('hit');
  request.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&q=${searchQuery}&key=${process.env.youtubeAPI}`, function (error, response, body) {
    if (error) {
      throw error;
    }
    res.end(body);
  });
})

app.listen(port, _ => {
  console.log(`Server connected to port number: ${port}`);
});