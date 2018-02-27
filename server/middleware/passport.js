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
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.REDIRECT_URIS
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({ profile_id: profile.id }, function(err, user) {
      if (err) {
          throw err;
      }

      if (!user) {
        let user = new User({
            profile_id: profile.id,
            access_token: accessToken
        });

        user.save(cb);
      } else {
        return cb(err, user);
      }
    })
  }
));

module.exports = passport;