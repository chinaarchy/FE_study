module.exports = {
    title: 'archy的博客',
    description: 'archy的博客，技术与生活',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    head: ['link', {rel: 'icon', href: '/favicon.ico'}],
    plugins: {
        "@vssue/vuepress-plugin-vssue": {
            platform: 'github',
            owner: ''
        }
    },
    base: 'FE_study',
    themeConfig: {
        smoothScroll: true,
        dateFormat: 'YYYY-MM-DD',
        nav: [
            {
                text: 'Blog',
                link: '/'
            }
        ],
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/chinaarchy',
                },
                {
                    type: 'mail',
                    link: 'chinaarchy@icloud.com',
                },
            ],
            copyright: [
                {
                    text: 'Privacy Policy',
                    link: 'https://policies.google.com/privacy?hl=en-US',
                },
                {
                    text: 'MIT Licensed | Copyright © 2018-present Vue.js',
                    link: '',
                },
            ]
        }

    }
}
