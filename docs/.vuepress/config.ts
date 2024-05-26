import head from "./config/head"
import themeConfig from "./config/themeConfig"
import plugins from "./config/plugins"  

module.exports = {
  title: '网站标题',
  description: 'VuePress演示用',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  theme:'vdoing',
  head,
  themeConfig,
  plugins
}