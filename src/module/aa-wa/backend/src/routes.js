const version = require('./controller/version.js');
const watch = require('./controller/watch.js');

module.exports = [
  { method: 'post', path: 'version/update', controller: version },
  { method: 'post', path: 'watch/run', controller: watch },
];
