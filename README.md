# DCQ Blog

这是一个 Astro 技术博客工程，已经从最初的静态原型迁移为：

- 页面组件化
- Markdown 写作
- 基于 Astro Content Collections 的文章管理
- 自动生成首页最近文章与归档页列表

## 关键目录

- `src/pages/`：页面路由
- `src/components/`：公共组件
- `src/layouts/`：基础布局
- `src/content/blog/`：Markdown 文章
- `src/content.config.ts`：文章集合 schema
- `src/styles/global.css`：全站样式

## 常用命令

```bash
npm install
npm run dev
npm run build
```

## 上线配置

- 正式域名：`https://www.siatlab.top`
- RSS：`/rss.xml`
- Sitemap：`/sitemap-index.xml`
- `robots.txt`：已配置 sitemap 地址

### Cloudflare Pages 推荐设置

- Build command：`npm run build`
- Build output directory：`dist`
- Node.js 版本：建议使用当前稳定版或与本地一致的 Node 版本

## 写新文章

在 `src/content/blog/` 下新增一个 Markdown 文件，例如：

```md
---
title: "文章标题"
description: "文章摘要"
pubDate: 2026-05-16
category: "笔记"
tags:
  - "astro"
draft: false
---

正文内容
```

## 下一步建议

1. 安装依赖并完成首次构建；
2. 配置你的真实域名到 `astro.config.mjs`；
3. 增加 RSS、sitemap、标签页与搜索；
4. 如果你希望网页后台写作，再继续接入 CMS。
