const express = require('express');
const middleware = require('../middleware');
const path = require('path');
const request = require('request');


const router = express.Router();

router.route('/')
  .get(middleware.auth.verify, function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../../dist/index.html'));
});


module.exports = router;
