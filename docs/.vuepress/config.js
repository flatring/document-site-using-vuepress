const { title, description } = require('../../package.json')

module.exports = {
  base: '/document-site-using-vuepress/',
  dest: 'public',
  title: title,
  description: description,
  head: [
    [ 'link', { rel: 'icon', type: 'image/png', href: '/document.png' } ],
    [ 'link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP' } ],
    [ 'meta', { name: "viewport", content: "width=device-width,initial-scale=1" } ],
    [ 'meta', { name: "robots", content: "noindex, follow" } ],
  ],
  themeConfig: {
    repo:'',
    docsDir: '',
    displayAllheaders: true,
    editLinks: false,
    editLinkText: '',
    lastUpdated: '最終更新日',
    nav: [
      { text: 'GitHub', link: 'https://github.com/flatring/document-site-using-vuepress' }
    ],
    servers: ['http://localhost:8082'],
    sidebar: 'auto',
    sidebarDepth: 2, // max=2
  },
  locales: {
    // default
    '/': {
      lang: 'ja',
      title: 'Sample documentation site',
      description: 'Document site using VuePress'
    }
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.set({ typographer: true }),
      md.use(require('markdown-it-imsize'), { autofill: true }),
      md.use(require('markdown-it-plantuml')),
      md.use(require('markdown-it-task-lists'))
    }
  },
  plugins: [
    ['@dovyp/vuepress-plugin-clipboard-copy', true],
    ['@vuepress/back-to-top'],
    ['@vuepress/nprogress'],
    [
      'vuepress-plugin-zooming',
      {
        delay: 1000,
        options: {
          bgColor: 'silver',
          zIndex: 10000,
        }
      }
    ],
  ],
  configureWebpack: (config) => {
    config.module.rules.push({
      test: /\.yaml$/,
      use: 'js-yaml-loader'
    })
  }
}
