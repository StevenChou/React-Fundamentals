const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// 因為我們使用 token，所以不需要 passport 幫我們建立 cookie base session
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({ hi: 'there' });
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
};
