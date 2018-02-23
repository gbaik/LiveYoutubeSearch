const express = require('express');
const path = require('path');
const middleware = require('./middleware');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/../dist')));
app.use(middleware.passport.initialize());

app.use('/', routes.auth);

app.use('/action', routes.search);

app.use('*', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

app.listen(port, _ => {
  console.log(`Server connected to port number: ${port}`);
});