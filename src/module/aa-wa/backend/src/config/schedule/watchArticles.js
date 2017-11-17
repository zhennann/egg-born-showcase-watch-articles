module.exports = async function(ctx) {
  try {
    const moduleInfo = ctx.app.meta.mockUtil.parseInfoFromPackage(__dirname);
    await ctx.performAction({
      method: 'post',
      url: `/${moduleInfo.url}/watch/run`,
    });
  } catch (err) {
    console.log(err);
  }
};
