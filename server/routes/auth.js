const express = require('express');
const middleware = require('../middleware');
const path = require('path');

const router = express.Router();

router.get('/auth/google', middleware.passport.authenticate('google', {
  scope: [ 
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.profile.emails.read',
    'https://www.googleapis.com/auth/youtube'
  ]
}));

router.get('/auth/google/callback',
	middleware.passport.authenticate( 'google', {
		successRedirect: '/results',
		failureRedirect: '/'
}));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});
  
module.exports = router;
