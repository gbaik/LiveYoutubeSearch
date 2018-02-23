const express = require('express');
const path = require('path');
const request = require('request');
const passport = require('passport');
const middleware = require('./middleware');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('./'));
app.use(express.static(path.join(__dirname, '/../dist')));
app.use(middleware.passport.initialize());
// app.use(middleware.passport.session());

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

app.get('/login', function (req, res) {
  console.log('login hit');
  res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

app.get('/auth/google', middleware.passport.authenticate('google', {
  scope: [ 'https://www.googleapis.com/auth/plus.login',
  'https://www.googleapis.com/auth/plus.profile.emails.read' ]
}));

app.get( '/auth/google/callback',
	passport.authenticate( 'google', {
		successRedirect: 'http://localhost:3000/search',
		failureRedirect: 'http://localhost:3000/auth/google'
}));

app.get('/search', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../dist/index.html'));  
})

app.get('/search/videoPlayer', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../dist/index.html'));  
})

app.get('/results', function (req, res) {
  const searchQuery = req.query.search_query;
  
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