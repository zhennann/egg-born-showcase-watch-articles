module.exports = app => {

  class Watch extends app.Service {

    async run() {

      // get 100 articles
      const watchCount = this.ctx.config.watchCount;
      const watchInterval = this.ctx.config.watchInterval;

    }

  }

  return Watch;
};
