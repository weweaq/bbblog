module.exports = {
  title: '网站标题',
  description: 'VuePress演示用',
  head: [
    ['link', { rel: 'icon', href: 'https://s3.bmp.ovh/imgs/2023/02/15/16aa54f3ee84602e.webp' }]
  ],
  theme:'vdoing',
  themeConfig: {
    logo: '/starve.png',
	lastUpdated: '上次更新', // string | boolean
    nav: [
      { text: '首页', link: '/' },
      { text: '计算机基础', link: '/CouputerBasic' },
      {
        text: 'Java', items: [
          { text: 'JavaSE', link: '/JavaSE' },
          { text: 'JavaEE', link: 'https://www.peterjxl.com/JavaEE' }
        ]
      },
    ],
	sidebar: 'structuring'
  },
    plugins: [
    ['vuepress-plugin-code-copy', true],  //复制代码块的插件
	 'reading-progress',
	[
      "vuepress-plugin-live2d",
      {
        "modelName": ['tororo'],
        "mobileShow": false,
		"position": 'left'
      }
    ],
	[
      'cursor-effects', {
        size: 2, // size of the particle, default: 2
        shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      }
    ],
	['dynamic-title', {
      // showIcon: '',
      showText: '欢迎回来  O(∩_∩)O~~',
      // hideIcon: '',
      hideText: '等等，你别走啊 ::>_<::',
      recoverTime: 2000,
    }],
  ]
}
