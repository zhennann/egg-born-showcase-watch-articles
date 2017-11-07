module.exports = ctx => {

  return {
    meta: {
      name: 'juejin-im-post',
      version: '1.0.0',
      description: 'watch juejin.im post',
      author: 'zhennann',
      test: 'https://juejin.im/post/59f1be7c6fb9a04515431d2c',
    },
    sessions: [
      {
        request: {
          method: 'get',
          url: () => `https://post-storage-api-ms.juejin.im/v1/getDetailData?src=web&type=entry&postId=${ctx.data.articleId}`,
          dataType: 'json',
        },
        response: {
          matches: [ 'stat' ],
        },
      },
    ],
    matches: {
      url: {
        regex: /\/\/juejin\.im\/post\/([^\/\?#]+)/gi,
        matchPass: [
          {
            index: 1,
            data: 'articleId',
          },
        ],
      },
      stat: {
        onMatch: value => {
          const data = value.d;
          ctx.data.title = data.title;
          ctx.data.author = data.user.username;
          ctx.data.avatar = data.user.avatarLarge;
          ctx.stat.star = data.collectionCount;
          ctx.stat.reply = data.commentsCount;
          ctx.stat.visit = data.viewsCount;
        },
      },
    },

  };

};
