const pMap = require('p-map');
const _ = require('underscore');
const WatchCreator = require('../watch');

module.exports = app => {

  class Watch extends app.Service {

    async run() {

      //
      const watchCount = this.ctx.config.watchCount;
      const watchInterval = this.ctx.config.watchInterval;

      // get articles
      let sql = `
        select * from Article 
          where session=0 and timestampdiff(SECOND,updatedAt,now())>${watchInterval}
            order by updatedAt  
              limit 0,${watchCount}
      `;

      const articles = await this.ctx.db.query(sql);
      const ids = articles.map(item => item.id);
      if (articles.length === 0) return;

      // set session
      const session = (new Date()).getTime();

      sql = `update Article set session=${session} where id in (${ids.join(',')})`;
      await this.ctx.db.query(sql);

      // 批量执行
      const mapper = article => {
        return this.watchRun(article);
      };

      const results = await pMap(articles, mapper, { concurrency: 10 });
      for (const result of results) {
        const ctx = result.ctx;
        const article = result.article;
        if (result.error) {
          // err
          await this.ctx.db.update('Article', {
            id: article.id,
            error: result.error.message,
            session: 0,
          });
        } else if (!_.isEqual(JSON.parse(article.statNew), ctx.stat)) {
          // new
          await this.ctx.db.update('Article', {
            id: article.id,
            error: '',
            session: 0,
            title: ctx.data.title,
            author: ctx.data.author,
            avatar: ctx.data.avatar,
            statNew: JSON.stringify(ctx.stat),
            statOld: article.statNew,
            lastWatchedAt: this.ctx.db.literals.now,
          });
        } else {
          // not change
          await this.ctx.db.update('Article', {
            id: article.id,
            error: '',
            session: 0,
          });
        }

      }

    }

    matchPattern(url) {
      const Watch = WatchCreator(app);
      const watch = new Watch();
      return watch.matchPattern(url);
    }

    async watchRun(article) {
      const Watch = WatchCreator(app);
      const watch = new Watch();
      const res = await watch.run(article);
      return res;
    }

  }

  return Watch;
};
