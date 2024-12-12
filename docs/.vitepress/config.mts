import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'
// const base = '/blog/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  // base,
  extends: blogTheme,
  // base,
  lang: 'zh-cn',
  title: 'Vitamin',
  description: '',
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录',
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',
    // 设置logo
    // logo: '/logo.png',
    editLink: {
      pattern: 'https://github.com/shaw5290/blog/tree/main/docs/:path',
      text: '编辑内容',
    },
    nav: [
      { text: '首页', link: '/' },
      { text: 'Web', link: '/web/' },
      { text: '物联网', link: '/IOT/' },
      { text: '系统资源', link: '/system/' },
      { text: '软件', link: '/software/' },
      {
        text: '项目',
        items: [{ text: 'cloud', link: '/project/cloud/' }],
      },
      {
        text: 'DevOps',
        items: [
          {
            text: 'Git 仓库',
            link: 'https://git.aicoa.cn/explore/repos/',
            target: '_blank',
            rel: 'sponsored',
          },
          {
            text: 'Nacos 服务管理',
            link: 'http://nacos.aicoa.cn/',
            target: '_blank',
            rel: 'sponsored',
          },
          {
            text: 'Maven 仓库',
            link: 'https://registry.mvn.aicoa.cn/#browse/browse:maven-public',
            target: '_blank',
            rel: 'sponsored',
          },
        ],
      },
      { text: '关于作者', link: '/about-us' },
      { text: '更多', items: [{ text: '敬请期待...', link: '#' }] },
    ],
    sidebar: {
      '/project/cloud/': [
        {
          text: 'cloud',
          items: [
            { text: '项目简介', link: '/project/cloud/introduction' },
            { text: 'Getting Started', link: '/getting-started' },
          ],
        },
      ],
    },
    // socialLinks: [
    //   {
    //     icon: 'github',
    //     link: 'https://github.com/xxx',
    //   },
    // ],
  },
  srcExclude: [
    '**/README.md',
    // '**/index.md',
    '**/TODO.md',
  ],
  // ignoreDeadLinks: true,
  // 将路由处理成无 .html 后缀
  cleanUrls: true,
})
