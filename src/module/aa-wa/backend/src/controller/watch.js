module.exports = app => {
  class WatchController extends app.Controller {

    async run() {
      // only access from localhost
      if (this.ctx.ip !== '127.0.0.1') this.ctx.throw(403);

      await this.service.watch.run();
      this.ctx.success();
    }

    async fetch() {
      await this.service.watch.fetch(this.ctx.request.body);
      this.ctx.success();
    }

  }
  return WatchController;
};
