// eslint-disable-next-line
module.exports = appInfo => {
  const config = {};

  config.watchCount = 20;
  config.watchInterval = 1 * 60 * 60; // one hour

  // schedules
  config.schedules = {
    watchArticles: {
      interval: '10s',
      type: 'worker',
    },
  };

  // middlewares
  config.middlewares = {
    test: {
      name: 'test',
    },
  };

  return config;
};
