import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: "zh-CN",
    base: "/xpath-study/",
    title: "Xpath 学习",
    description: "",
    lastUpdated: true,
    themeConfig: {
        logo: "",
        siteTitle: "Xpath学习",
        outline: {
            label: "章节导航",
            level: 'deep',
        },
        lastUpdated: {
            text: "最后更新时间",
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        editLink: {
            pattern: "https://github.com/curder/xpath-study/edit/master/docs/:path",
            text: '编辑它'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/curder/xpath-study'}
        ],
        nav: nav(),
        sidebar: {
            "/guide": sidebarGuide(),
        }
    }
});


function nav()
{
    return [
        {text: "基础", link: "/guide/syntax/"},
    ];
}

function sidebarGuide()
{
    return [
        {
            text: "",
            items: [
                {text: "语法", link: "/guide/syntax"},
                {text: "轴 Axes", link: "/guide/axes"},
                {text: "操作", link: "/guide/operators"},
            ]
        }
    ];
}