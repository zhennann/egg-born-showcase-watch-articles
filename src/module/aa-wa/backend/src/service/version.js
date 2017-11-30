module.exports = app => {

  class Version extends app.Service {

    sleep(time) {
      return new Promise(resolve => {
        setTimeout(resolve, time);
      });
    }
    async update(version) {

      if (version === 2) {
        // create table: ArticleRef
        let sql = `
          CREATE TABLE ArticleRef (
            id int(11) NOT NULL AUTO_INCREMENT,
            createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            deleted int(11) DEFAULT '0',
            uid int(11) DEFAULT NULL,
            articleId int(11) DEFAULT NULL,
            PRIMARY KEY (id)
          )
        `;

        await this.ctx.db.query(sql);

        // add Field: Article.refTimes
        sql = `
          ALTER TABLE Article 
            ADD COLUMN refTimes int(11) DEFAULT '0' AFTER deleted
        `;

        await this.ctx.db.query(sql);

        // transfer data
        const articleMap = {};
        const articles = await this.ctx.db.select('Article');
        for (const article of articles) {
          if (!articleMap[article.url]) {
            // first
            await this.ctx.db.insert('ArticleRef', {
              uid: article.uid,
              articleId: article.id,
            });
            await this.ctx.db.update('Article', {
              id: article.id,
              refTimes: 1,
              deleted: 0,
            });
            articleMap[article.url] = article;
          } else {
            // more times
            const article2 = articleMap[article.url];
            await this.ctx.db.insert('ArticleRef', {
              uid: article.uid,
              articleId: article2.id,
            });
            await this.ctx.db.query('update Article set refTimes=refTimes+1 where id=?', [ article2.id ]);
            await this.ctx.db.delete('Article', { id: article.id });
          }
        }

        // delete field: Article.uid
        sql = `
          ALTER TABLE Article 
            DROP COLUMN uid
        `;

        await this.ctx.db.query(sql);

      }

      if (version === 1) {
        // create table: Article
        const sql = `
          CREATE TABLE Article (
            id int(11) NOT NULL AUTO_INCREMENT,
            createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            deleted int(11) DEFAULT '0',
            uid int(11) DEFAULT NULL,
            url varchar(255) DEFAULT NULL,
            pattern varchar(255) DEFAULT NULL,
            title varchar(255) DEFAULT NULL,
            author varchar(255) DEFAULT NULL,
            avatar varchar(255) DEFAULT NULL,
            statNew json DEFAULT NULL,
            statOld json DEFAULT NULL,
            session bigint(20) DEFAULT '0',
            lastWatchedAt timestamp NULL,
            error text DEFAULT NULL,
            PRIMARY KEY (id)
          )
        `;

        await this.ctx.db.query(sql);
      }

      if (version === 0) {
        // insert an article
        const form = { url: 'https://github.com/zhennann/egg-born' };
        const user = { id: null };
        await this.ctx.service.article.add({ form, user });
      }
    }

  }

  return Version;
};
