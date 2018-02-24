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

// app.use(middleware.auth.session);
app.use(express.static(path.join(__dirname, '/../dist'), options));
app.use(middleware.passport.initialize());
// app.set('trust proxy', 1) // trust first proxy
// app.use(middleware.passport.session());

app.use('/', routes.auth);

app.use('/search', routes.search);

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

app.listen(port, _ => {
  console.log(`Server connected to port number: ${port}`);
});