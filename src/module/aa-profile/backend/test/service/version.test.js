const { app, mockUrl, assert } = require('egg-born-mock')(__dirname);

describe('test/service/version.test.js', () => {

  it('test', async () => {
    const ctx = app.mockContext({ mockUrl: mockUrl() });
    const res = await ctx.db.queryOne('show tables like \'User\'');
    assert(res);
  });

});
