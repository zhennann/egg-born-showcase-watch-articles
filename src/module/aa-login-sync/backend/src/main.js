const routes = require('./routes.js');
const services = require('./services.js');

// eslint-disable-next-line
module.exports = app => {

  // authenticates routers
  app.passport.mount('github', {
    loginURL: '/api/passport/github',
    callbackURL: '/api/passport/github/callback',
  });

  // verify
  app.passport.verify(async function(ctx, user) {

    console.log(user);

    return {};

  });

  //
  return {
    routes,
    services,
  };

};
