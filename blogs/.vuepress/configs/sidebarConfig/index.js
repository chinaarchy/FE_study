// 介绍
const alg = require('./Alg/index.js');
//
// // 基础
// const git = require('./Base/git/index.js');
// const interview = require('./Base/interview/index.js');
// const algorithm = require('./Base/algorithm/index.js');
// const clean = require('./Base/clean/index.js');
//
// // 操作系统
// const windows = require('./OS/windows/index.js');
// const manjaro = require('./OS/manjaro/index.js');
// const centos = require('./OS/centos/index.js');


/**
 * 侧边栏的配置
 * 当路由深度越深时应当排序在更前方
 * 示例: /frontend 和 /frontend/css
 *
 * 应当将 /frontend/css 写在更上方
 */
module.exports = {
    // 算法
    '/alg/': alg,
    '/': [
        '',
    ]

    // // 基础 Base
    // '/Base/git/': git,
    // '/Base/interview/': interview,
    // '/Base/clean/': clean,
    // '/Base/algorithm/': algorithm,
    //
    // // 操作系统 OS
    // '/OS/manjaro/': manjaro,
    // '/OS/windows/': windows,
    // '/OS/centos/': centos,

    // 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
    // '/': [''] // 此处选择禁用
};
