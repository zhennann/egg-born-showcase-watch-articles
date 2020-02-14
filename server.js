// if pm2
//    $ pm2 start server.js
const egg = require('egg');
const path = require('path');

const workers = Number(process.argv[2] || require('os').cpus().length);
egg.startCluster({
  workers,
  baseDir: path.join(__dirname, 'src/backend/'),
});
