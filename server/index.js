const express = require('express');
const path = require('path');
const request = require('request');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/../dist')));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

app.get('/test', function (req, res) {
  request.get('https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&q=music&key=', function (error, response, body) {
    if (error) {
      throw error;
    }
    res.end(body);
  });
})

app.listen(port, _ => {
  console.log(`Server connected to port number: ${port}`);
});