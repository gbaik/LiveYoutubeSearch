const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const url = require('url');
const redis = require('redis');

const params = process.env.REDIS_URL ? url.parse(process.env.REDIS_URL) : null;
const host = params ? params.hostname : 'localhost';
const port = params ? params.port : 6379;
const redisClient = redis.createClient(port, host);
const auth = params ? redisClient.auth(params.auth.split(':')[1]) : null;


module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/');
  }
};

console.log('host:', host);
console.log('port:', port);
console.log('auth', auth);

module.exports.session = session({
  store: new RedisStore({
    client: redisClient
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
});

