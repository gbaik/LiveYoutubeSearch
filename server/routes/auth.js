const express = require('express');
const path = require('path');
const middleware = require('../middleware');

const router = express.Router();

router.get('/auth/google', middleware.passport.authenticate('google', {
  scope: [ 'https://www.googleapis.com/auth/plus.login',
  'https://www.googleapis.com/auth/plus.profile.emails.read' ]
}));

router.get('/auth/google/callback',
	middleware.passport.authenticate( 'google', {
		successRedirect: '/search',
		failureRedirect: '/auth/google'
}));

module.exports = router;
