module.exports = ctx => {

  return {
    meta: {
      name: 'github-repo',
      version: '1.0.0',
      description: 'watch github repo',
      author: 'zhennann',
      test: 'https://github.com/zhennann/egg-born',
    },
    sessions: [
      {
        request: {
          method: 'get',
          url: () => ctx.url,
          dataType: 'text',
        },
        response: {
          matches: [ 'title', 'avatar', 'watch', 'star', 'fork', 'issue' ],
        },
      },
    ],
    matches: {
      url: {
        regex: /\/\/github\.com\/([^\/\?]*)\/([^\/\?]*)/gi,
        matchPass: [
          {
            index: 1,
            data: 'user',
          },
          {
            index: 2,
            data: 'repo',
          },
          {
            index: 1,
            data: 'author',
          },
          {
            index: 2,
            data: 'articleId',
          },
        ],
      },
      title: {
        regex: /<title>(.*)<\/title>/gi,
        matchPass: [
          {
            index: 1,
            data: 'title',
          },
        ],
      },
      avatar: {
        regex: /<meta\s+content="(https:\/\/avatars[^"]+)"\s+property="og:image"\s+\/>/gi,
        matchPass: [
          {
            index: 1,
            data: 'avator',
          },
        ],
      },
      watch: {
        regex: /<a\s+class="social-count[^"]*"\s+href="[^"]+\/watchers"\s+aria-label="(\d+)\s+[^"]+">/gi,
        matchPass: [
          {
            index: 1,
            stat: 'watch',
          },
        ],
      },
      star: {
        regex: /<a\s+class="social-count[^"]*"\s+href="[^"]+\/stargazers"\s+aria-label="(\d+)\s+[^"]+">/gi,
        matchPass: [
          {
            index: 1,
            stat: 'star',
          },
        ],
      },
      fork: {
        regex: /<a\s+href="[^"]+\/network"\s+class="social-count[^"]*"\s+aria-label="(\d+)\s+[^"]+">/gi,
        matchPass: [
          {
            index: 1,
            stat: 'fork',
          },
        ],
      },
      issue: {
        regex: /<span\s+itemprop="name">Issues<\/span>\s+<span\s+class="Counter">(\d+)<\/span>/gi,
        matchPass: [
          {
            index: 1,
            stat: 'issue',
          },
        ],
      },
    },

  };

};
