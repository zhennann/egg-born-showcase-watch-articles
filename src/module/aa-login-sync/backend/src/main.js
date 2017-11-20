const routes = require('./routes.js');
const services = require('./services.js');
const config = require('./config/config.js');
const locales = require('./config/locales.js');
const errors = require('./config/errors.js');

// eslint-disable-next-line
module.exports = (app,moduleInfo) => {

  // authenticates routers
  app.passport.mount('github', {
    loginURL: `/api/${moduleInfo.url}/passport/github`,
    callbackURL: `/api/${moduleInfo.url}/passport/github/callback`,
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
