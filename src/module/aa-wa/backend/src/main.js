const routes = require('./routes.js');
const services = require('./services.js');
const config = require('./config/config.js');
const locales = require('./config/locales.js');
const errors = require('./config/errors.js');
const schedules = require('./config/schedules.js');
const middlewares = require('./config/middlewares.js');

// eslint-disable-next-line
module.exports = app => {

  return {
    routes,
    services,
    config,
    locales,
    errors,
    schedules,
    middlewares,
  };

};
