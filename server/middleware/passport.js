const config = require('../../config/client_secrets.json');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const User = require('../../database/schema.js');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy({
  clientID: config.Google.client_id,
  clientSecret: config.Google.client_secret,
  callbackURL: config.Google.redirect_uris
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({ profile_id: profile.id }, function(err, user) {
      if (err) {
          throw err;
      }

      if (!user) {
        let user = new User({
            profile_id: profile.id
        });

        user.save(function(err) {
          if (err) {
            throw err;
          }
        });
      } 
        return cb(err, user);
      
    })
  }
));

module.exports = passport;