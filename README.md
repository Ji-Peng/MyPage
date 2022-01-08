<!--<p align="center"><a href="https://wowchemy.com" target="_blank" rel="noopener"><img src="https://sourcethemes.com/academic/img/logo_200px.png" alt="Wowchemy Website Builder"></a></p>-->

# Book Template for [Wowchemy Website Builder](https://wowchemy.com)

The **Book Template** empowers you to create **product documentation**, **digital books**, **personal notes**, and **knowledge bases**.

[Check out the latest demo](https://book-starter.netlify.app/) of what you'll get in less than 10 minutes, or [view the showcase](https://wowchemy.com/user-stories/).

[**Wowchemy**](https://github.com/wowchemy/wowchemy-hugo-modules) makes it easy to create a beautiful website for free using Markdown, Jupyter, or RStudio. Customize anything on your site with widgets, themes, and language packs.

- 👉 [**Get Started**](https://wowchemy.com/templates/)
- 📚 [View the **documentation**](https://wowchemy.com/docs/)
- 💬 [Chat with the **Wowchemy community**](https://discord.gg/z8wNYzb) or [**Hugo community**](https://discourse.gohugo.io)
- 🐦 Twitter: [@wowchemy](https://twitter.com/wowchemy) [@GeorgeCushen](https://twitter.com/GeorgeCushen) [#MadeWithWowchemy](https://twitter.com/search?q=(%23MadeWithWowchemy%20OR%20%23MadeWithAcademic)&src=typed_query)
- 💡 [Request a **feature** or report a **bug** for _Wowchemy_](https://github.com/wowchemy/wowchemy-hugo-modules/issues)
- ⬆️ **Updating Wowchemy?** View the [Update Guide](https://wowchemy.com/docs/update/) and [Release Notes](https://wowchemy.com/updates/)

## Crowd-funded open-source software

To help us develop this template and software sustainably under the MIT license, we ask all individuals and businesses that use it to help support its ongoing maintenance and development via sponsorship.

### [❤️ Click here to unlock rewards with sponsorship](https://wowchemy.com/plans/)

## [配置教程](https://wowchemy.com/docs/getting-started/customization/)

### 1. Create a site

选择不同的模版，默认是使用Netlify生成网站，并且会给生成一个随机URL，也可以在Netlify下定义子域名，随后在CMS里用可视化界面编辑网站。

### 2. Build your homepage

Wowchemy提供了好用的widget，包括：

- Blank：可添加任意元素，比如图片集
- Hero：比如祈求访问者给github点个star
- About me：图片+Biography+Interests+Education
- Skills/Features：技能展示
- Experience&Education：用时间线的形式展示个人经历和教育
- Accomplishments：列出成就（包括证书）和参加过的课程
- Content Feed：列出近期published内容，有PDF、Slide等按钮，我没有用，觉得较为复杂，字节文字编辑加链接就好得很呢
- Featured content：和上面Content Feed的区别就在于可以贴一张大图～
- Contact：给出自己的联系方式，包括电话、地址、推特、微信等，偏商务性质的吧
- Protfolio：过滤内容，比如选择AI可过滤部分项目、选择Crypto可过滤部分项目
- Tag Cloud：显示我们的主流topic，同时在每个page中添加tag，某个tag被用的越多，Tag Cloud就会对其显示越大
- Team Members：介绍团队成员，可展示多个成员的信息
- Slider：类似IOS的叠放组件啦

`content/home`中包含各种widgets，可删除或将其`active`设为`false`

`config/_default/menus.yaml`是用来管理主页顶部菜单栏的，具体配置方法见文件注释

定制widget：

- 大多数组件都支持title和subtitle
- 大多数组件可设置design.columns为1 or 2, 的确可以，将experience设为1-column啦
- View：可用于选择展示多少内容，内置内容包括List, Compact, Card, Citation, Showcase, Masonry, 也可创建自己的

修改Icon：

- 内部包中包含一些icon，比如推特、微信、微博、github、google-scholar、表情等
- `assets/media/icons`下可以放自己的custom SVG icon，在icon域引用其名字即可（不用加svg后缀）

Background：

- design.background可修改颜色、渐变色、背景图片等

Spacing: design.spacing可指定section上下左右的边距

Style：可自定义CSS的哦

website icon可在直接修改`assets/media/icon.png`

外观配置文件为`config/_default/params.yaml`, 相关参数及解释见文件

