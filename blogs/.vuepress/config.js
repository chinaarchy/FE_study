const navConfig = require('./configs/navConfig')
const siderbar = require('./configs/sidebarConfig')

module.exports = {
    title: 'archy的博客',
    description: 'archy的博客，技术与生活',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    head: ['link', {rel: 'icon', href: '/favicon.ico'}],
    themeConfig: {
        nav: navConfig,
        sidebar: siderbar,
        logo: 'logo.png'
    }
}
