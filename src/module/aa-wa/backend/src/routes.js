const version = require('./controller/version.js');
const watch = require('./controller/watch.js');
const article = require('./controller/article.js');

const safeAccess = async function(ctx, next) {
  if (ctx.ip !== '127.0.0.1') ctx.throw(403);
  // next
  await next();
};

module.exports = [
  { method: 'post', path: 'version/update', controller: version, middlewares: 'safeAccess' },
  // { method: 'post', path: 'watch/run', controller: watch, middlewares: 'safeAccess' },
  { method: 'post', path: 'watch/run', controller: watch, middlewares: [ safeAccess ] },
  { method: 'post', path: 'watch/fetch', controller: watch },
  { method: 'post', path: 'article/list', controller: article },
  { method: 'post', path: 'article/item', controller: article },
  { method: 'post', path: 'article/add', controller: article, middlewares: 'auth' },
  { method: 'post', path: 'article/delete', controller: article, middlewares: 'auth' },
];
