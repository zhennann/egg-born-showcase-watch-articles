const version = require('./controller/version.js');
const user = require('./controller/user.js');

module.exports = [
  { method: 'post', path: 'version/update', controller: version, middlewares: 'safeAccess' },
  { method: 'get', path: 'user/getAuth', controller: user },
  { method: 'post', path: 'user/logout', controller: user },
];
