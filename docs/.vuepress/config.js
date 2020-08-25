module.exports = {
  domain: 'https://github.com/mypage/',
  repo: 'https://github.com/mypage/reposiroty.git',
  base: '/document/',
  dest: 'public',
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/png', href: '/image.png' }
    ],
    [
      'link',
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP' }
    ],
  ],
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/mypage/' }
    ],
    sidebar: 'auto',
    sidebarDepth: 2, // max=2
    displayAllheaders: true,
    lastUpdated: '最終更新日',
  },
  locales: {
    // default
    '/': {
      lang: 'ja',
      title: 'document',
      description: 'Document'
    }
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.set({ typegrapher: true }),
      md.use(require('markdown-it-footnote')),
      md.use(require('markdown-it-imsize'), { autofill: true }),
      md.use(require('markdown-it-plantuml')),
      md.use(require('markdown-it-task-lists'))
    }
  },
  plugins: [
    ['@dovyp/vuepress-plugin-clipboard-copy', true],
    ['@vuepress/plugin-back-to-top'],
    ['@vuepress/plugin-nprogress'],
    [
      'vuepress-plugin-zooming',
      {
        delay: 1000,
        options: {
          bgColor: 'silver',
          zIndex: 10000,
        }
      }
    ]
  ]
}
