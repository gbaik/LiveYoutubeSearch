const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const url = require('url');
const redis = require('redis');

const params = process.env.REDIS_URL ? url.parse(process.env.REDIS_URL) : null;
const host = params ? params.hostname : 'localhost';
const port = params ? params.port : 6379;


module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/');
  }
};

console.log('host:', host);
console.log('port:', port);

module.exports.session = session({
  store: new RedisStore({
    client: redis.createClient(),
    host: host,
    port: port
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
});

