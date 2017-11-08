const version = require('./controller/version.js');
const watch = require('./controller/watch.js');
const article = require('./controller/article.js');

module.exports = [
  { method: 'post', path: 'version/update', controller: version },
  { method: 'post', path: 'watch/run', controller: watch },
  { method: 'post', path: 'article/list', controller: article },
];
