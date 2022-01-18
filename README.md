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

[示例网站](https://academic-demo.netlify.app/), [对应源码](https://github.com/wowchemy/starter-hugo-academic/tree/master/exampleSite)

### 1. Create a site

选择不同的模版，默认是使用Netlify生成网站，并且会给生成一个随机URL，也可以在Netlify下定义子域名，随后在CMS里用可视化界面编辑网站。

### 2. Build your homepage

`content/home/index.md`里的`type: "widget_page"`表明, homepage是由各个widgets组成的, 所以下文介绍widgets

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
- website icon可直接修改`assets/media/icon.png`

Background：

- design.background可修改颜色、渐变色、背景图片等

Spacing: design.spacing可指定section上下左右的边距

Style：可自定义CSS的哦

### 3. Personalize

域名:

- 配置在`config/_default/config.yaml`的baseurl字段里
- Github部署如果买了域名也是可以修改的, 需要修改`static`文件里的CNAME

如何隐藏底部的Wowchemy? 需要资助他们才行哦

Website Icon: 直接修改`assets/media/icon.png`, 图片大小是512x512

外观配置文件为`config/_default/params.yaml`, 相关参数及解释见文件, 可调节的内容包括:

- 主题, 暗黑模式
- 字体, 字号
- 也可以自定义主题和字体

Header: 自定义网站header和导航栏, 见`main_menu`字段

也可以增加网站底部的Footer信息, 比如copyright

可更改时间/日期/地址格式

SEO搜索引擎优化, 可以在配置中添加一些字段, 然后在google, bing, baidu等搜索引擎中验证, 让他们的爬虫来爬我们的网站

Commenting: 可让用户来添加评论

Analytics: 可允许Google, Bing, Baidu分析我们网站的流量信息

可配置代码高亮, Latex数学公式, Markdown图

隐私: 可显示cookie消息, 并且可以让Google分析看不到访问者IP

访问者可编辑页面: 可帮助改进页面

推荐: 推荐内容

Search: 搜索功能, 试了下, 感觉略微鸡肋啊

Security: 包括内容安全政策, 权限政策, 兼容性等

地图: Contact Widget中可添加一个地图来显示当前位置, 需要设置地图提供商和当前坐标

### Edit your site

可自定义主题, 前面已经看过啦

布局选择, [各个案例](https://github.com/wowchemy/starter-hugo-academic/tree/master/exampleSite):

- Pages: 展示普通内容
- Widget Pages: 比如homepage, 由多个不同的widgets组成
- Posts: 博客 或 新闻
- Publications: 可从BibTex格式中导入
- Online Courses: 分享知识的
- Projects: 项目发布
- Notes: 笔记
- Software Documentation: 文档 或 软件项目
- Talks/Events: 像Patrick的那样
- Slides: 可以用markdown写slides

可设置Contact widget, 组织或项目信息/图标等, 和富文本选项, 比如代码高亮等

个人介绍相关:

- 默认为admin用户, 对应`content/authors/admin/_index.md`文件, 该文件夹下还包含了个人照片
- 超级用户的用户名可通过修改`content/authors/admin`其中的`admin`来改变, 那么`content/home/about.md`中的引用也要改

目录:

- 对应`config/_default/menu.yaml`
- 可创建子目录的, 父目录下添加`identifier=xxx`, 子目录下添加`parent=xxx`

网站相关配置:

- `config/_default/config.yaml`下的title和baseurl是常用配置

### Edit on your PC

讲了各个系统下的Hugo安装配置方法

### Create content

都可以创建如下内容:

- landing pages (aka widget pages)
- blog posts
- publications
- online courses
- podcasts
- videos
- Markdown slides
- notebooks
- documentation
- projects
- events/talks

### Page Features

核心配置:

- title
- summary: 会在homepage显示, 也能帮助优化搜索引擎
- data: 可配置未来发布
- authors: 可链接至某用户
- tags: 给page打上标签

流行配置:

- subtitle
- featured: 设为true, 可使用Featured widget进行展示, 可贴图
- categories: 和tag有点类似
- lastmod: 一般不需要设置, 会自动添加的
- publishDate: 如果您希望设置将来的日期但现在发布页面, 您只需要指定此选项, 例如发布将出现在期刊中的期刊文章等
- draft: 只能本地看时自己看到
- show_date: 是否显示日期
- private: 搜索结果中隐藏页面

#### Featured image

每个页面可添加一个featured image, 直接将featured.jpg/png放到对应文件夹里即可, 可为image在front matter中添加一些配置, 比如caption

```yaml
# Featured image
# To use, place an image named `featured.jpg/png` in your page's folder.
# Placement options: 1 = Full column width, 2 = Out-set, 3 = Screen-width
# Focal point options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
# Set `preview_only` to `true` to just use the image for thumbnails.
image:
  placement: 1
  caption: "Photo by [Geo](https://github.com/gcushen/)"
  focal_point: "Center"
  preview_only: false
  alt_text: An optional description of the image for screen readers.
```

#### Page resources

可以在page header中添加按钮, 比如twitter, medium按钮

也可以配置PDF按钮

#### Page features

```yaml
reading_time: false  # Show estimated reading time?
share: false  # Show social sharing links?
profile: false  # Show author profile?
commentable: false  # Allow visitors to comment? Supported by the Page, Post, and Docs content types.
editable: true  # Allow visitors to edit the page? Supported by the Page, Post, and Docs content types.
```

#### Header image

路径为`assets/media/`文件夹

```yaml
header:
  image: "header.png"
  caption: "Image credit: [**Geo**](https://github.com/gcushen/)"
```

#### Removing content

永久移除可直接删除文件夹

暂时移除可设置draft: true

#### Private pages

阻止该页面出现在任何集合里, 仅仅能让只能URL的人访问, 比如我去除了`content/authors/_index.md`中的_build字段后发现, sitemap.xml中出现了单独的author URL.

```yaml
_build:
  render: always
  list: never
```