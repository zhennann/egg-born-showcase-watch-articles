module.exports = app => {

  class Article extends app.Service {

    async list({ index, pageSize }) {

      //
      const sql = `select * from Article
          order by lastWatchedAt desc limit ?,?`;

      return await this.ctx.db.query(sql, [ index, pageSize ]);
    }

  }

  return Article;
};
