module.exports = appInfo => {
  const config = {};

  // keys
  config.keys = appInfo.name + '_1509355511167_4919';

  // info
  config.pageSize = 20;

  // module config
  config.module = {
    'aa-hello': {
    },
  };

  // mysql
  config.mysql = {
    clients: {
      // donnot change the name
      __ebdb: {
        host: '127.0.0.1',
        port: '3306',
        user: 'travis',
        password: '',
        database: 'watch-articles',
      },
    },
  };

  // session
  config.session = {
    key: 'EGG_SESS',
    maxAge: 30 * 24 * 3600 * 1000, // 30 天
    httpOnly: true,
    encrypt: true,
  };

  // passport github
  config.passportGithub = {
    key: 'caf8046c4583f3aa133f',
    secret: '11ec2b5be8178dc3f3170293bd435c8aa62673bb',
  };

  return config;
};
