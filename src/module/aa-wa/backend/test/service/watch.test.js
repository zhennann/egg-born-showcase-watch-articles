const { app, mockUrl, assert } = require('egg-born-mock')(__dirname);

describe('test/service/watch.test.js', () => {

  it('run', async () => {
    const ctx = app.mockContext({ mockUrl: mockUrl() });
    const res = await ctx.service.watch.run();
    assert(!res);
  });

});
