const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const url = require('url');
const redis = require('redis');

const params = process.env.REDIS_URL ? url.parse(process.env.REDIS_URL) : null;
const host = params ? params.hostname : 'localhost';
const port = params ? params.port : 6379;
const auth = params ? params.auth.split(':')[1] : null;
const redisClient = params ? redis.createClient().auth(auth) : redis.createClient();


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
    client: redisClient,
    host: host,
    port: port
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
});

