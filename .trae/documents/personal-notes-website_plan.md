# 个人笔记网站 实施计划

## 1. 项目调研结论

### 参考网站特点（huaxiaozhuan.com）
- **内容类型**：AI/算法方向的系统化学习笔记，章节式结构组织
- **首页构成**：作者简介 + 联系方式 + GitHub链接 + 版本更新日志（按日期倒序）+ 章节目录导航
- **内容分类示例**：
  - 数学基础（线性代数、概率论、数值计算、蒙特卡洛方法）
  - 机器学习（SVM、决策树、KNN、集成学习、特征工程等）
  - 深度学习（前馈网络、CNN、RNN、Transformer、词向量等）
  - 专题内容（CTR预估、论文笔记、工具教程）
- **技术栈特征**：纯静态文档站点，Markdown → HTML 生成，支持侧边栏导航、目录、搜索

### 当前工作区状态
- 目录为空，需要从零初始化项目

---

## 2. 技术方案选型

推荐采用 **VitePress** 作为站点生成器，理由如下：

| 方案 | 优点 | 缺点 |
|------|------|------|
| **VitePress**（推荐） | Vue3 驱动、MDX 支持、内置搜索、响应式主题、侧边栏目录、开箱即用 | 需 Node.js 环境 |
| Docusaurus | React 生态、功能完整、多语言、版本管理 | 配置复杂、包体积大 |
| Hexo | 博客友好、插件多 | 文档/章节管理能力弱 |
| MkDocs | Python 生态、Material 主题美观 | 定制化能力稍弱 |

### 最终选型：VitePress v1.x
- 对技术文档类站点最友好
- 侧边栏 + 目录 + 全文搜索均内置
- Markdown 扩展能力强（代码高亮、自定义容器、数学公式）
- 构建产物为纯静态文件，可部署到 GitHub Pages / Vercel / 云服务器

---

## 3. 文件与模块设计

```
d:\Sunday\个人网站\
├── .trae\documents\                 # 计划文档（已有）
├── docs\                            # 站点源码目录
│   ├── .vitepress\
│   │   ├── config.ts                # VitePress 主配置（导航、侧边栏、主题）
│   │   └── theme\
│   │       ├── index.ts             # 主题入口（可选自定义）
│   │       └── custom.css           # 自定义样式
│   ├── public\                      # 静态资源（图片、favicon）
│   │   └── favicon.ico
│   ├── index.md                     # 首页（作者简介 + 更新日志 + 目录导航）
│   ├── release.md                   # 版本更新历史页
│   ├── math\                        # 数学基础模块
│   │   ├── index.md                 # 模块首页
│   │   ├── linear-algebra.md        # 线性代数
│   │   ├── probability.md           # 概率论
│   │   ├── numerical.md             # 数值计算
│   │   └── mcmc.md                  # 蒙特卡洛方法
│   ├── ml\                          # 机器学习模块
│   │   ├── index.md
│   │   ├── intro.md                 # 简介
│   │   ├── svm.md                   # 支持向量机
│   │   ├── naive-bayes.md           # 朴素贝叶斯
│   │   ├── decision-tree.md         # 决策树
│   │   ├── knn.md                   # KNN
│   │   ├── ensemble.md              # 集成学习
│   │   ├── gbdt.md                  # 梯度提升树
│   │   ├── feature-engineering.md   # 特征工程
│   │   ├── evaluation.md            # 模型评估
│   │   ├── dimensionality.md        # 降维
│   │   ├── clustering.md            # 聚类
│   │   ├── semi-supervised.md       # 半监督学习
│   │   ├── em.md                    # EM算法
│   │   ├── max-entropy.md           # 最大熵
│   │   ├── hmm.md                   # HMM
│   │   ├── crf.md                   # 条件随机场
│   │   ├── inference.md             # 概率推断
│   │   └── topic-model.md           # 主题模型
│   ├── dl\                          # 深度学习模块
│   │   ├── index.md
│   │   ├── intro.md
│   │   ├── feedforward.md           # 前馈网络
│   │   ├── backprop.md              # 反向传播
│   │   ├── regularization.md        # 正则化
│   │   ├── optimization.md          # 最优化
│   │   ├── cnn.md                   # CNN
│   │   ├── rnn.md                   # RNN
│   │   ├── transformer-1.md ~ 9.md  # Transformer 系列
│   │   ├── sentence-vector.md       # 句子向量
│   │   ├── word-vector.md           # 词向量
│   │   ├── ctr-classic.md           # CTR传统方法
│   │   ├── ctr-nn-1.md              # CTR神经方法1
│   │   └── ctr-nn-2.md              # CTR神经方法2
│   ├── papers\                      # 论文笔记模块
│   │   ├── index.md
│   │   └── *.md                     # 各篇论文笔记
│   ├── tutorials\                   # 工具教程模块
│   │   ├── index.md
│   │   └── claude-code.md           # 例如 Claude Code 教程
│   └── about.md                     # 关于我页面
├── package.json                     # 项目依赖与脚本
└── .gitignore
```

---

## 4. 实施步骤

### 阶段一：项目初始化与基础框架搭建
1. **初始化 Node.js 项目**
   - 执行 `npm init -y` 创建 package.json
   - 安装 vitepress 开发依赖
   - 配置 package.json 脚本（dev / build / preview）

2. **创建 VitePress 基础配置**
   - 创建 `docs/.vitepress/config.ts`
   - 配置站点标题、描述、语言（中文）
   - 配置顶部导航栏（Home / 数学基础 / 机器学习 / 深度学习 / 论文笔记 / 教程 / 关于）
   - 配置侧边栏（按模块组织多级目录结构）
   - 启用内置本地搜索（Algolia DocSearch 可选，后期接入）
   - 配置 GitHub / 邮箱等社交链接

3. **创建首页 `docs/index.md`**
   - 顶部 Hero 区：网站标题 + 一句话介绍 + 开始阅读按钮
   - 作者简介块：个人背景、学习方向、联系方式（邮箱、QQ/微信、GitHub）
   - 版本更新日志：倒序列出最近 10 次更新，每条附跳转链接
   - 全量章节目录导航卡片区：按模块分组展示所有章节链接

4. **创建 release.md 历史更新页**
   - 存放完整的版本更新历史记录

### 阶段二：主题美化与样式定制
5. **自定义主题样式 `custom.css`**
   - 配色方案：选择适合技术阅读的深色/浅色双主题
   - 字体：中文用系统无衬线，英文/代码用等宽字体
   - 代码块样式、引用块、提示容器样式微调
   - 首页卡片网格布局美化
   - 可选：数学公式支持（引入 KaTeX / MathJax）

6. **配置公共组件（可选）**
   - 更新日志专用组件（自动提取最近N条）
   - GitHub 卡片组件

### 阶段三：示例内容填充
7. **填充各模块首页占位内容与示例文章**
   - math / ml / dl / papers / tutorials 各 `index.md` 模块入口页
   - 编写 2-3 篇示例笔记（含标题、目录、代码块、数学公式、图片），验证渲染效果
   - 配置侧边栏链接指向这些文档

8. **创建 about.md 关于页面**
   - 个人简介、技能栈、教育/工作经历、社交链接

### 阶段四：构建验证与部署准备
9. **本地验证**
   - 运行 `npm run dev` 启动开发服务器，检查：
     - 首页显示正常，所有链接可跳转
     - 侧边栏目录层级正确，折叠/展开正常
     - 搜索功能可用
     - 代码块高亮、数学公式、图片显示正常
     - 移动端响应式布局正常
   - 运行 `npm run build` 检查构建是否无报错
   - 运行 `npm run preview` 预览生产构建产物

10. **配置部署（可选，用户后续自行操作）**
    - GitHub Pages：生成 `.github/workflows/deploy.yml` CI 配置
    - 或 Vercel / Netlify 一键部署说明

---

## 5. 潜在依赖与注意事项

### 必须依赖
- **Node.js ≥ 18**：VitePress v1 要求
- **VitePress v1.x**：核心框架
- 可选扩展：
  - `markdown-it-katex` 或 `vitepress-plugin-mathjax`：数学公式渲染
  - `vitepress-plugin-search`：若内置搜索不够用

### 注意事项
1. **路径编码**：中文文件名在某些静态托管会 404，建议文件/目录统一使用英文 slug，标题在 Markdown frontmatter 中定义中文
2. **图片资源**：大型图片建议放 `public/img/` 或外部图床，避免仓库过大
3. **侧边栏维护**：新增文档后需在 `config.ts` 的 sidebar 中手动添加链接（后续可写脚本自动生成）
4. **数学公式**：若笔记中有大量 LaTeX 公式，必须在 VitePress 配置中启用 markdown-it 数学插件
5. **搜索索引**：内置搜索对中文分词一般，内容量大后可考虑接入 Algolia DocSearch（免费申请）

---

## 6. 风险与应对

| 风险 | 影响 | 应对方案 |
|------|------|----------|
| 侧边栏手动维护易遗忘/出错 | 新文章无法被导航到 | 1. 约定命名规范；2. 后续编写 Node.js 脚本扫描目录自动生成 sidebar 配置 |
| 中文搜索效果差 | 站内搜索难以命中 | 初期用内置搜索可接受；后期申请 Algolia DocSearch 或接入本地中文分词 |
| 图片加载慢/丢失 | 阅读体验下降 | 1. 重要图片放 public 目录；2. 使用稳定图床；3. .gitignore 排除大文件 |
| Node 版本不兼容 | 构建失败 | 在 package.json 中声明 `"engines": { "node": ">=18" }`，README 说明 |
| 笔记内容迁移成本高 | 想换框架时痛苦 | 所有正文保持标准 Markdown，减少 VitePress 专属语法的过度依赖 |

---

## 7. 验证清单（计划执行完毕后需确认）

- [ ] `npm run dev` 启动后首页正常显示，无控制台报错
- [ ] 顶部导航栏所有菜单存在并可点击
- [ ] 侧边栏按模块正确展开/折叠，所有链接 404 率为 0
- [ ] 首页更新日志区 + 卡片导航区渲染正确
- [ ] 示例 Markdown 中的代码块、列表、表格、引用块、公式渲染正常
- [ ] `npm run build` 构建成功，无错误输出
- [ ] `npm run preview` 预览构建产物与开发环境一致
- [ ] 移动端（宽度 < 768px）布局正常，菜单抽屉可打开
- [ ] 全文搜索可用，能搜出示例内容关键词
