const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const { secretOrKey } = require('../config').getJwtConfig();

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey,
};

const jwtStrategy = new Strategy(jwtOptions, (payload, done) => {
  // Here, you should verify the user's payload (e.g., check the database)
  // and call 'done' with the user or 'false' if not found.
  done(null, payload.user);
});

passport.use(jwtStrategy);

const jwtAuthMiddleware = passport.authenticate('jwt', { session: false });

module.exports = jwtAuthMiddleware;
