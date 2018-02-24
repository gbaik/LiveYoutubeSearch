// const session = require('express-session');

// module.exports.verify = (req, res, next) => {
//   console.log(req.isAuthenticated());
//   if (req.isAuthenticated()) {
//     return next();
//   } else {
//     res.redirect('/');
//   }
// };

// module.exports.session = session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// });

// var session = require('express-session');
// var RedisStore = require('connect-redis')(session);

// app.use(session({
//     store: new RedisStore(options),
//     secret: 'keyboard cat',
//     resave: false
// }));

