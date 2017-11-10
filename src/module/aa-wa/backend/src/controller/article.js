module.exports = app => {
  class ArticleController extends app.Controller {

    async list() {

      const index = this.ctx.getInt('index');
      const pageSize = this.config.pageSize;

      const list = await this.ctx.service.article.list({ index, pageSize });

      this.ctx.successMore(list, index, pageSize);
    }

    async add() {

      if (!this.ctx.isAuthenticated() || !this.ctx.user) this.ctx.throw(401);

      try {
        await this.ctx.service.article.add({ form: this.ctx.request.body, user: this.ctx.user });
        this.ctx.success();
      } catch (err) {
        this.ctx.fail(err);
      }

    }

  }
  return ArticleController;
};
