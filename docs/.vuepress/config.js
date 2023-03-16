module.exports = {
    title: '前端学习博客',
    description: '',
    base: '/learnblog/',
    theme: 'reco',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: 'code Home', 
                items: [
                    { text: 'Github', link: 'https://github.com/YuXianDuan' },
                    { text: 'Gitee', link: 'https://gitee.com/maikekeliang' }
                ]
            }
        ],
        sidebar: [
            {
                title: 'JavaScript',
                path: '/handbook/javascript/javascript',
                collapsable: false, // 不折叠
                children: [
                    { title: "闭包", path: "/handbook/JavaScript/closure" },
                    { title: "原型链", path: "/handbook/JavaScript/prototype" }
                ]
            },
            {
              title: "React",
              path: '/handbook/React/react',
            //   collapsable: false, // 不折叠
              children: [
                { title: "fibe", path: "/handbook/React/fibe" },
                { title: "performance", path: "/handbook/React/performance" }
              ],
            },
            {
                title: "Webpack",
                path: '/handbook/Webpack/webpack',
                // collapsable: false, // 不折叠
                children: [
                  { title: "Webpack配置", path: "/handbook/Webpack/config" },
                ],
              },
              {
                title: "Node",
                path: '/handbook/Node/node',
                // collapsable: false, // 不折叠
                children: [
                  { title: "node", path: "/handbook/Node/node" },
                  { title: "fs", path: "/handbook/Node/fs" },
                ],
              }
          ]
    }
}