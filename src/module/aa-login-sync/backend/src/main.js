const routes = require('./routes.js');
const services = require('./services.js');
const config = require('./config/config.js');
const locales = require('./config/locales.js');
const errors = require('./config/errors.js');

// eslint-disable-next-line
module.exports = app => {

  const prefix = app.mockUtil.parseUrlFromPackage(__dirname);

  // authenticates routers
  app.passport.mount('github', {
    loginURL: `${prefix}/passport/github`,
    callbackURL: `${prefix}/passport/github/callback`,
  });

  // verify
  app.passport.verify(async function(ctx, profileUser) {
    return await ctx.service.user.verify(profileUser);
  });

  //
  return {
    routes,
    services,
    config,
    locales,
    errors,
  };

};
