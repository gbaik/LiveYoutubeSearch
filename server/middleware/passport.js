const passport = require('passport');
const User = require('../../database/schema.js');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy({

  },
  function(request, accessToken, refreshToken, profile, done) {
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
        return done(err, user);
      
    })
  }
));

module.exports = passport;