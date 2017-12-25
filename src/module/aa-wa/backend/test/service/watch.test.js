const { app, mockUrl, assert } = require('egg-born-mock')(__dirname);

const testUrl = 'https://github.com/zhennann/egg-born';

describe('test/service/watch.test.js', () => {

  it('matchPattern', () => {
    const ctx = app.mockContext({ mockUrl: mockUrl() });
    const res = ctx.service.watch.matchPattern(testUrl);
    assert(res);
  });

  it('schedule:watchArticles', async () => {
    const ctx = app.mockContext({ mockUrl: mockUrl() });
    await ctx.db.query('update Article set updatedAt=timestampadd(SECOND,-3600,updatedAt) where url=?', [ testUrl ]);
    await app.meta.runSchedule(`${ctx.module.info.fullName}:watchArticles`);
    const res = await ctx.db.queryOne('select statNew from Article where url=?', [ testUrl ]);
    const statNew = JSON.parse(res.statNew);
    assert(statNew.star >= 86);
  });

});
