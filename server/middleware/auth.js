const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const url = require('url');
const redis = require('redis');

const params = url.parse(process.env.REDIS_URL);

module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/');
  }
};

module.exports.session = session({
  store: new RedisStore({
    client: redis.createClient(),
    host: params.hostname || 'localhost',
    port: params.port || 6379
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
});

