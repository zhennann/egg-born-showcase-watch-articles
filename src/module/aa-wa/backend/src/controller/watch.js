module.exports = app => {
  class WatchController extends app.Controller {

    async run() {
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
