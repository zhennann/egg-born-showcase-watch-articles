module.exports = app => {
  class ArticleController extends app.Controller {

    async list() {

      const mode = this.ctx.getStr('mode');
      const index = this.ctx.getInt('index');
      const pageSize = this.config.pageSize;

      if (mode === 'mine' && !this.ctx.isAuthenticated()) this.ctx.throw(401);

      const list = await this.ctx.service.article.list({ index, pageSize, mode, user: this.ctx.user });

      this.ctx.successMore(list, index, pageSize);
    }

    async item() {
      const article = await this.ctx.service.article.item({ id: this.ctx.getInt('id') });
      this.ctx.success(article);
    }

    async add() {

      if (!this.ctx.isAuthenticated()) this.ctx.throw(401);

      try {
        const id = await this.ctx.service.article.add({ form: this.ctx.request.body, user: this.ctx.user });
        this.ctx.success({ id });
      } catch (err) {
        this.ctx.fail(err);
      }

    }

    async delete() {

      if (!this.ctx.isAuthenticated()) this.ctx.throw(401);

      const res = await this.ctx.service.article.delete({ id: this.ctx.getInt('id'), user: this.ctx.user });
      this.ctx.success(res);

    }

  }
  return ArticleController;
};
