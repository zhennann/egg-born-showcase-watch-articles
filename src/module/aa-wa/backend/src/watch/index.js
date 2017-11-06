const providers = require('./providers.js');
const taskCreator = require('./task.js');

module.exports = app => {

  class Watch {

    matchProvider(url) {
      for (const key of Object.keys(providers)) {
        const Task = taskCreator(app);
        const task = new Task(providers[key], url);
        if (task.matchUrl()) return task.provider;
      }
      return null;
    }

    async run(article) {
      try {
        const Task = taskCreator(app);
        const task = new Task(providers[article.provider], article.url);
        const ctx = await task.run();
        return { article, error: null, ctx };
      } catch (error) {
        return { article, error };
      }
    }

  }

  return Watch;
};

