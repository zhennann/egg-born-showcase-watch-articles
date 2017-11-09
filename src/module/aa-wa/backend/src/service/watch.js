const pMap = require('p-map');
const _ = require('underscore');
const WatchArticles = require('watch-articles');

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

      const results = await pMap(articles, mapper);
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
        } else {
          // visit not effect lastWatchedAt
          const diff1 = Object.assign({}, JSON.parse(article.statNew), { visit: null });
          const diff2 = Object.assign({}, ctx.stat, { visit: null });
          if (!_.isEqual(diff1, diff2)) {
          // changed
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
          // not changed
            await this.ctx.db.update('Article', {
              id: article.id,
              error: '',
              session: 0,
              statNew: JSON.stringify(ctx.stat), // visit maybe changed
            });
          }
        }

      }

    }

    allPatterns() {
      const watch = new WatchArticles();
      return watch.allPatterns();
    }

    matchPattern(url) {
      const watch = new WatchArticles();
      return watch.matchPattern(url);
    }

    async watchRun(article) {
      const watch = new WatchArticles();
      const res = await watch.run(article);
      return res;
    }

  }

  return Watch;
};
