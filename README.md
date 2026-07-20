# 个人学习笔记 · Personal Notes

> 数学基础 · 机器学习 · 深度学习 · 论文笔记 · 工具教程
>
> 使用 [VitePress](https://vitepress.dev/) 构建的静态笔记站点。
>
> 线上演示：<https://chengchufa.github.io/>

---

## ✨ 特性

- ✅ **5 大模块，60+ 章节骨架**：数学、机器学习、深度学习、论文笔记、工具教程
- ✅ **5 篇完整示例笔记**：线性代数、SVM、Transformer 基础、Attention 原论文精读、Claude Code 指南
- ✅ **LaTeX 数学公式**：内置 MathJax3，支持行内 / 块级公式
- ✅ **代码高亮 + 行号**：Python、JS、Shell、YAML 等 50+ 语言
- ✅ **内置全文搜索**：无需 Algolia 配置，本地中文开箱即用
- ✅ **响应式 + 暗/浅色主题**：手机、平板、桌面自适应
- ✅ **一键自动部署**：GitHub Actions 推送 `main` 分支即部署到 GitHub Pages
- ✅ **自定义域名就绪**：CNAME + 配置注释完整，5 分钟绑定你自己的域名
- ✅ **双模式自动适配**：<用户名>.github.io 主页仓库 & 普通项目仓库子路径，**无需改配置**

## 📦 目录结构

```
个人网站/
├── .github/workflows/deploy.yml   # GitHub Actions：push 即部署
├── CLAUDE.md                      # 项目规范（AI 协作）
├── LICENSE                        # MIT + CC BY-NC 4.0
├── package.json                   # 脚本：docs:dev / docs:build / docs:preview
├── .gitignore
└── docs/
    ├── .vitepress/
    │   ├── config.ts              # ← 站点主配置（导航栏、侧边栏、搜索）
    │   └── theme/
    │       ├── index.ts           # 主题入口
    │       └── custom.css         # 首页卡片 / 作者简介等自定义样式
    ├── public/
    │   ├── CNAME                  # ← 自定义域名（不用请删除此文件）
    │   └── robots.txt
    ├── index.md                   # 首页：Hero + 作者简介 + 更新日志 + 目录卡片
    ├── release.md                 # 完整更新历史
    ├── about.md                   # 关于我
    ├── math/                      # 数学基础（4 章）
    ├── ml/                        # 机器学习（18 章）
    ├── dl/                        # 深度学习（25 章：基础 + Transformer 9 篇 + 专题）
    ├── papers/                    # 论文笔记
    └── tutorials/                 # 工具教程
```

## 🛠 本地开发

### 前置环境

- **Node.js ≥ 18**（推荐 [v20 LTS](https://nodejs.org/)）
- npm ≥ 9（随 Node 附带）

### 安装 & 启动

```bash
# 安装依赖（package-lock.json 存在时用 ci 更快）
npm ci        # 或 npm install

# 启动开发服务器（默认 http://localhost:5173/）
npm run docs:dev

# 生产构建（产物在 docs/.vitepress/dist/）
npm run docs:build

# 本地预览构建产物（模拟线上环境）
npm run docs:preview
```

## 🚀 部署到 GitHub Pages（开源 + 自动发布）

> ⚠️ 下面 6 步完成后，每次 `git push` 会自动构建发布，**无需手动操作**。

### Step 1：在 GitHub 创建仓库

1. 打开 <https://github.com/new>
2. 仓库名分两种（两种都支持，选一种即可）：

   | 类型 | 仓库名示例 | 上线后默认网址 | 建议 |
   |------|-----------|---------------|------|
   | **普通项目仓库**（推荐新手） | `notes` 或 `my-blog` 任意 | `https://<用户名>.github.io/<仓库名>/` | 1 个账号可建无数个 |
   | **用户主页仓库**（专属域名） | `<用户名>.github.io`（名字必须完全一致） | `https://<用户名>.github.io/` | 1 个账号仅 1 个 |

3. **不要**勾选「Initialize this repository with a README」（本地已有内容）
4. 点「Create repository」

### Step 2：改 3 处占位信息（可选但建议）

用全局搜索替换以下占位字符串为你的真实信息：

| 占位符 | 改为什么 | 所在文件 |
|--------|---------|---------|
| `your-github-username` | 你的 GitHub 用户名（全小写） | `docs/.vitepress/config.ts` × 2 处、下面 Step 3 |
| `your-repo-name` | 你 Step 1 创建的仓库名 | `docs/.vitepress/config.ts` × 2 处 |
| `your-domain.example.com` | 自定义域名（如 `notes.xxx.com`），不需要自定义域名就**删除整个 `docs/public/CNAME` 文件** | `docs/public/CNAME`、`docs/public/robots.txt`、`config.ts` 的 `sitemap.hostname` |
| `your-email@example.com` | 联系邮箱 | `docs/index.md`、`docs/about.md` |

### Step 3：本地初始化 Git 并推送

```powershell
# 在项目根目录 d:\Sunday\个人网站 执行
git init
git branch -M main
git remote add origin https://github.com/<用户名>/<仓库名>.git
git add .
git commit -m "feat: init personal notes site with VitePress"
git push -u origin main
```

> 💡 **凭证问题**：首次推送 GitHub 会要求登录。推荐用 [GitHub CLI](https://cli.github.com/) 执行 `gh auth login`，或在 HTTPS 模式下使用 **Personal Access Token (classic, repo scope)** 作为密码。
> SSH 用户：`git remote add origin git@github.com:<用户名>/<仓库名>.git`，并把本机 `~/.ssh/id_ed25519.pub` 加到 GitHub Settings → SSH Keys。

### Step 4：开启仓库的 Pages 功能

1. 仓库页 → **Settings** → 左侧 **Pages**
2. Source 选择 **GitHub Actions**（不是 Deploy from branch！）
3. 等待 1~3 分钟，刷新 Pages 页会出现绿色 ✅ 和你的站点链接
4. 第一次构建可在仓库顶部 **Actions** 标签页查看进度，绿灯通过即完成

### Step 5：绑定自定义域名（可选）

如果你有自己的域名（推荐，更专业、方便搜索引擎收录）：

```bash
# 方案 A：子域名（推荐最简单，如 notes.example.com）
#   DNS 控制台添加一条 CNAME：
#   主机记录：notes
#   记录类型：CNAME
#   记录值：  <用户名>.github.io.    ← 末尾有个点

# 方案 B：根域名（如 example.com）
#   加 4 条 A 记录指向 GitHub Pages IP：
#   185.199.108.153
#   185.199.109.153
#   185.199.110.153
#   185.199.111.153
```

然后：
1. 确认 `docs/public/CNAME` 里写的是你的域名（没有文件就新建）
2. 仓库 **Settings → Pages → Custom domain** 填同一个域名，Save
3. 等 DNS 生效（几分钟到 48 小时），会出现「✅ DNS check successful」
4. 勾选 **Enforce HTTPS**（强制 HTTPS，更安全 + SEO 加分）

### Step 6：宣布开源 ✨

1. 仓库 **Settings**：Description 写「个人学习笔记 - 数学/机器学习/深度学习合集」、Website 填站点 URL、Topics 加 `notes` `machine-learning` `deep-learning` `vitepress` `chinese`
2. 仓库首页 About 区域点「Edit」勾选社交卡、License
3. （可选）分享到社交媒体 / 博客 / V2EX，欢迎大家 PR 抓虫 🐛

## 📝 新增笔记的标准流程

1. 在对应模块目录下新建文件 `docs/ml/new-topic.md`
2. 写 frontmatter + 正文：
   ```markdown
   ---
   title: 新章节中文标题
   ---

   # 新章节中文标题

   [[toc]]

   ## 1. 小节一
   正文...
   ```
3. 打开 `docs/.vitepress/config.ts`，在 `sidebar['/ml/'].items` 数组里追加一行：
   ```ts
   { text: '18. 新章节', link: '/ml/new-topic' }
   ```
4. `docs/release.md` 顶部加一条更新日志
5. 验证：
   ```bash
   npm run docs:build   # 必须 0 error
   ```
6. `git commit && git push` — 等待 2 分钟，线上自动更新

## 📄 License

- **代码部分**（配置、脚本、样式）：MIT License
- **笔记内容部分**（Markdown 正文、图示）：[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.zh-hans) — 非商用、注明出处即可自由转载。

## 🫶 致谢

- 文档框架：[VitePress](https://vitepress.dev/)
- 数学公式渲染：[MathJax 3](https://www.mathjax.org/) via `markdown-it-mathjax3`
