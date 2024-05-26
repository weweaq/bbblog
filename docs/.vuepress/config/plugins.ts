import { UserPlugins } from 'vuepress/config';

export default <UserPlugins>[

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
