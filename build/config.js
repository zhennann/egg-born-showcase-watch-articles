// backend
const backend = {
  port: 7002,
  hostname: '127.0.0.1',
};

// front
const front = {
  build: {
    title: 'Watch Articles - EggBorn ShowCase',
  },
  dev: {
    title: 'Watch Articles - EggBorn ShowCase',
    port: 9092,
    proxyTable: {
      '/api': {
        target: `http://${backend.hostname}:${backend.port}`,
        changeOrigin: true,
      },
    },
  },
};

module.exports = {
  front,
  backend,
};
