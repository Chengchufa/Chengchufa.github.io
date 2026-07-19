# 项目规范（给 Claude Code / 协作者看）

> 本文件会被 Claude Code 在新建会话时自动作为 System Prompt 注入。
> 目标：让 AI 写代码时遵循本项目的统一规范，避免反复重述。

## 技术栈

- 文档站点框架：VitePress 1.x
- 配置语言：TypeScript（`.vitepress/config.ts`）
- 笔记格式：标准 Markdown（frontmatter + 正文）
- 包管理器：**npm**（禁止使用 pnpm / yarn，保证 CI 一致）
- Node.js：最低 v18，推荐 v20 LTS

## 命名 & 目录规范

1. **所有文件 / 目录名必须使用英文 kebab-case，一律禁止中文文件名**
   - 好：`docs/ml/feature-engineering.md`
   - 坏：`docs/ml/特征工程.md`
   - 页面中文标题统一写在 Markdown frontmatter：`--- title: 特征工程 ---`
2. 内容按模块分组：
   - `docs/math/` — 数学基础
   - `docs/ml/` — 机器学习
   - `docs/dl/` — 深度学习
   - `docs/papers/` — 论文笔记
   - `docs/tutorials/` — 工具教程
3. 每个模块目录下必须有 `index.md` 作为模块入口（URL 为 `/模块名/`）
4. 静态资源（图片、PDF 等）统一放 `docs/public/img/模块名/`，引用时直接写 `/img/模块名/xxx.png`

## Markdown 书写规范

1. 每个 `.md` 开头必须有 frontmatter：
   ```yaml
   ---
   title: 中文标题
   sidebar: auto   # 单页且不需要侧边栏时用 false
   ---
   ```
2. 标题层级必须严格递增（H1 只出现在文档最开头一个，之后从 H2 开始）
3. 数学公式：
   - 行内公式：`$E = mc^2$`
   - 块级公式：`$$ ... $$`
   - 默认使用 markdown-it-mathjax3 渲染
4. 代码块必须指定语言，启用语法高亮：
   ````markdown
   ```python
   # ...
   ```
   ````
5. 自定义容器（VitePress 内置）：
   - `::: tip` / `::: warning` / `::: danger` / `::: info` / `::: details`
6. 新增笔记后**必须**同步修改 `docs/.vitepress/config.ts` 中对应模块的 `sidebar`

## 侧边栏维护纪律

新增 `.md` 后必须同步更新 `docs/.vitepress/config.ts` 中的对应 `sidebar` 项，
否则页面无法在侧边栏导航中找到。修改完成后必须本地跑一遍：

```bash
npm run docs:build
```

确保 **0 个 dead link 报错** 后再提交。

## 提交 / 发版流程

1. 写新笔记 → 加到 sidebar → `npm run docs:build` 全绿 → PR / commit
2. 更新日志：每次发版本时在 `docs/release.md` 顶部追加新条目，格式：
   ```markdown
   ## YYYYMMDD 修订
   新增 xxx。参考 [这里](/path/to/page)
   ```
3. `git push origin main` 后，`.github/workflows/deploy.yml` 会自动
   构建并部署到 GitHub Pages，约 1~3 分钟生效。

## 禁止事项

- ❌ 不允许直接在 main 分支 force push
- ❌ 不允许提交 > 5MB 的图片 / PDF 大文件（改用图床或 Git LFS）
- ❌ 不允许在 Markdown 中引入 VitePress 专属语法以外的私有扩展（保持可迁移）
