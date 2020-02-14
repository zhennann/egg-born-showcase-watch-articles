module.exports = options => {
  return async function test(ctx, next) {
    console.log(options.name);
    // only access from localhost
    if (ctx.ip !== '127.0.0.1') ctx.throw(403);
    // next
    await next();
  };
};
