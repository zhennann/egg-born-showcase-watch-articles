module.exports = app => {

  class Article extends app.Service {

    async list({ index, pageSize, mode, user }) {

      //
      let sql;
      if (mode === 'all') {
        sql = `select * from Article where deleted=0 and title<>''
          order by lastWatchedAt desc limit ?,?`;
      } else if (mode === 'mine') {
        sql = `select * from Article where deleted=0 and uid=${user.id}
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

      // check if exists
      const data = { uid, url };
      let res = await this.ctx.db.get('Article', data);
      if (res) {
        // exists
        if (res.deleted === 0) this.ctx.throw(1002);

        // update deleted
        await this.ctx.db.update('Article', {
          id: res.id,
          deleted: 0,
        });
        return res.id;
      }
      // insert
      res = await this.ctx.db.insert('Article', {
        ...data,
        pattern: pattern.meta.name,
      });
      return res.insertId;
    }

    async delete({ id, user }) {
      const sql = 'update Article set deleted=1 where id=? and uid=?';
      const res = await this.ctx.db.query(sql, [ id, user.id ]);
      return res.affectedRows === 1;
    }

  }

  return Article;
};
