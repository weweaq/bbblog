import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";

export default <VdoingThemeConfig>{
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
	sidebar: 'structuring',
	repo: 'weweaq/bbblog',
    editLinks: true,
    docsDir: 'docs',
    // 默认为 "Edit this page"
    editLinkText: '编辑此页'
}
