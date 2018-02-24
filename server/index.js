const express = require('express');
const path = require('path');
const middleware = require('./middleware');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

const options = {
  setHeaders: function (res, path) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.set('Access-Control-Allow-Headers', 'content-type'); 
  }
};

app.use(express.static(path.join(__dirname, '/../dist'), options));
app.use(middleware.passport.initialize());

app.use('/', routes.auth);

app.use('/search', routes.search);

app.use('*', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

app.listen(port, _ => {
  console.log(`Server connected to port number: ${port}`);
});