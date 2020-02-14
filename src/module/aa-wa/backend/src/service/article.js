module.exports = app => {

  class Article extends app.Service {

    async list({ index, pageSize, mode, user }) {

      //
      let sql;
      if (mode === 'all') {
        sql = `select * from Article where refTimes>0 and title<>''
          order by lastWatchedAt desc limit ?,?`;
      } else if (mode === 'mine') {
        sql = `select a.*,b.id as refId from Article a
                 left join ArticleRef b on a.id=b.articleId
                   where b.uid=${user.id}
                   order by lastWatchedAt desc limit ?,?`;
      }

      return await this.ctx.db.query(sql, [ index, pageSize ]);
    }

    async item({ id }) {
      return await this.ctx.db.get('Article', { id });
    }

    async add({ form, user }) {
      const url = form.url;
      const uid = user.id;

      // match pattern
      const pattern = this.ctx.service.watch.matchPattern(url);
      if (!pattern) this.ctx.throw(1001);

      // check if article exists
      let articleId;
      let res = await this.ctx.db.get('Article', { url });
      if (res) {
        articleId = res.id;
      } else {
        res = await this.ctx.db.insert('Article', {
          url,
          pattern: pattern.meta.name,
        });
        articleId = res.insertId;
      }

      // check if articleref exists
      res = await this.ctx.db.get('ArticleRef', { uid, articleId });
      if (res) this.ctx.throw(1002);

      // update refTimes
      await this.ctx.db.query('update Article set refTimes=refTimes+1 where id=?', [ articleId ]);
      // insert
      res = await this.ctx.db.insert('ArticleRef', { uid, articleId });
      return { id: res.insertId, articleId };
    }

    async delete({ id, user }) {
      const ref = await this.ctx.db.get('ArticleRef', { articleId: id, uid: user.id });
      if (!ref) this.ctx.throw(403);

      let res = await this.ctx.db.query('update Article a set refTimes=refTimes-1 where id=?', [ ref.articleId ]);
      res = await this.ctx.db.delete('ArticleRef', { id: ref.id });
      return res.affectedRows === 1;
    }

  }

  return Article;
};
