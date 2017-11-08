module.exports = app => {
  class ArticleController extends app.Controller {

    async list() {

      const index = this.ctx.getInt('index');
      const pageSize = this.config.pageSize;

      const list = await this.ctx.service.article.list({ index, pageSize });

      this.ctx.successMore(list, index, pageSize);
    }

  }
  return ArticleController;
};
