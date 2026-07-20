# 计划：更新「关于我」真实简历 + 全局邮箱替换 + 新增「手搓代码」Python 目录骨架与导航入口

> 生成时间：2026-07-20  
> 适用仓库：`d:\Sunday\个人网站` · VitePress 个人笔记站  
> 请求来源：用户希望把 `about.md` 改成真实简历、邮箱统一为 `chengchufa2026@gmail.com`、每个学习模块配一套可手搓的代码目录结构（参考「代码 → 数学 → 线性代数」层级）

---

## 一、仓库调研结论（关键现状）

| 维度 | 现状 | 本次变更 |
|---|---|---|
| `docs/about.md` | 全模板占位：第 8 行套话、教育/工作含「这里可以填写你的教育经历」、邮箱用 GitHub 转发 `chengchufa@users.noreply.github.com` | ✅ 完全重写为真实简历（教育、转行原因、裸辞时间、目标岗位） |
| 邮箱出现位置（grep `[\w.+-]+@[\w-]+\.[\w.-]+`，排除 node_modules） | 真实邮箱占位共 **2 处**：<br>① [docs/about.md L27](file:///d:/Sunday/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99/docs/about.md#L27-L27) <br>② [docs/index.md L65](file:///d:/Sunday/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99/docs/index.md#L65-L65) <br>（README.md L100 的 `your-email@example.com` 是模板说明，**保留不动**） | ✅ 上述 2 处统一替换为 `chengchufa2026@gmail.com`，**去掉「GitHub 转发」文案**，改为「欢迎邮件交流学习 / 内推 / 合作」 |
| 代码目录 | 根目录目前仅有前端构建产物：无 `code/`、无 `requirements.txt`、项目 `package.json` 只有 VitePress/vue/markdown-it-mathjax3，是纯前端项目；`.gitignore` 只忽略 Node 产物，未忽略 Python 产物（`__pycache__` / `.venv` / `.pyc` 等） | ✅ 新增项目根级 `code/` 目录，按 5 大模块拆分子目录，每个章节对应一个子文件夹，放占位 README 与环境说明；补 requirements.txt + 根 README；补 .gitignore 的 Python 忽略项 |
| 代码访问方式（关键决策） | code/ 不在 docs/ 下，**不应**进入 VitePress 构建产物（GitHub Pages 只部署 Markdown/静态资源，不部署 Python 源码） | ✅ code/ 放在项目根目录（与 docs/ 同级），作为独立开源代码合集；Markdown 页面中用 **GitHub 仓库树链接** `https://github.com/Chengchufa/Chengchufa.github.io/tree/main/code/...` 跳转（而非站内相对路径） |
| 导航与链接入口 | `docs/.vitepress/config.ts` 顶部 nav 无「💻 手搓代码」入口；各模块 `index.md` 顶部未引导到代码目录；首页 done 卡片没挂代码链接 | ✅ nav 加外部链接项「💻 手搓代码」→ `.../tree/main/code`；4 个模块 index.md + tutorials/index.md 顶部加「💻 代码目录」提示条；首页 5 个已完成笔记（✅）卡片底部追加「💻 对应代码」链接 |

---

## 二、要编辑 / 新增的文件清单

### 🔧 编辑类（8 个文件）

1. [docs/about.md](file:///d:/Sunday/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99/docs/about.md) → 完全重写（详见第三部分 A）
2. [docs/index.md](file:///d:/Sunday/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99/docs/index.md#L65-L65) → L65 邮箱替换；首页 5 个已完成章卡片追加「💻 对应代码」链接
3. [docs/.vitepress/config.ts](file:///d:/Sunday/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99/docs/.vitepress/config.ts) → `themeConfig.nav` 数组新增「💻 手搓代码」外链项（放「更新日志」和「关于」之间或右侧）
4. [docs/math/index.md](file:///d:/Sunday/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99/docs/math/index.md) → 顶部加蓝色 info 框「💻 对应代码目录」→ `code/math/` 的 GitHub 树链接
5. [docs/ml/index.md](file:///d:/Sunday/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99/docs/ml/index.md) → 同上，链到 `code/ml/`
6. [docs/dl/index.md](file:///d:/Sunday/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99/docs/dl/index.md) → 同上，链到 `code/dl/`
7. [docs/papers/index.md](file:///d:/Sunday/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99/docs/papers/index.md) → 同上，链到 `code/papers/`
8. [.gitignore](file:///d:/Sunday/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99/.gitignore) → 末尾追加 Python 忽略模板（`__pycache__/`、`*.py[cod]`、`.venv/`、`.pytest_cache/`、`.mypy_cache/`、`*.egg-info/` 等，对齐官方 Python gitignore 标准）

### 📦 新增类（26 个文件 + 18 个目录 → 全部是占位 README / 说明，无业务代码，后续用户手搓填充）

> 每个模块 1 个 `README.md` 总入口 + 每个章节对应 1 个子文件夹 + 子文件夹里 `README.md` 占位骨架。
> 暂不放真实代码（用户明确说"准备手搓"），只放清晰目录结构 + 每个章节 README 模板（包含：目标、推荐文章、实现清单、测试方法）。

#### 新增根文件（2 个）
- `code/README.md` → 代码合集总入口（含环境安装、运行方式、目录层级解释、贡献约定）
- `code/requirements.txt` → 最小依赖集合：`numpy`, `scipy`, `scikit-learn`, `matplotlib`, `seaborn`, `pandas`, `torch`, `torchvision`, `transformers`, `jupyter`, `pytest`（均不指定版本上限，用户自己 pin）

#### 新增 5 大模块子目录（5 个总 README + 对应章节目录 & 子 README）

| 模块代码目录 | 对应 docs/ 模块 | 子目录拆分（对齐 docs 章节） |
|---|---|---|
| `code/math/README.md` | docs/math | 线性代数、概率论与数理统计、数值计算、MCMC 随机模拟 — 4 个子目录；**线性代数**因为是「已完成笔记」，目录 README 写 3 条 TODO 模板（SVD 实现、特征值 QR、PCA 从 0 写），其他 3 个写「待补」 |
| `code/ml/README.md` | docs/ml | 18 章 → 18 个子文件夹：intro、knn、decision-tree、naive-bayes、max-entropy、svm、crf、hmm、em、clustering、dimensionality、topic-model、evaluation、feature-engineering、inference、ensemble、gbdt、semi-supervised；**SVM**（已完成笔记）写「从 0 实现线性 SVM + 核技巧 + SMO 算法」的细分 TODO；其余子 README 为「🔜 待补」骨架 |
| `code/dl/README.md` | docs/dl | 22 章 → 22 个子文件夹：intro、feedforward、backprop、optimization、regularization、cnn、rnn、word-vector、sentence-vector、ctr-classic、ctr-nn-1、ctr-nn-2、transformer-1、transformer-2 … transformer-9；**transformer-1**（已完成笔记）写「从 0 实现 Multi-Head Self-Attention + Encoder」细分 TODO；其余子 README 为「🔜 待补」 |
| `code/papers/README.md` | docs/papers | 对应论文标题，至少 3 个示例（用户之前说 15+）：<br>`code/papers/01-attention-is-all-you-need/`（已完成笔记）→ 写「从零复现论文核心架构」TODO；<br>`02-bert/`、`03-gpt/` 等 → 「🔜 待补」 |
| `code/tutorials/README.md` | docs/tutorials | `tutorials/claude-code/`、`tutorials/vscode/`、`tutorials/git/` 等占位 README |

> 新增结构总览：`code/` 下 5 模块 + 根 2 文件，子目录按章节约 **4 + 18 + 22 + 5 + 3 = 52 个章节目录**，每个目录 1 个 `README.md`（待补骨架），共计约 **57 个新增文件**。为保持每个新增 README 不超过 100 行、职责单一，**按目录逐个创建**。

---

## 三、详细变更步骤（可直接执行）

### A. `docs/about.md` 完全重写（替换整文件内容）

**结构大纲：**
1. `# 关于我` → 开头一句话诚实定位：**"数学背景 + 城商行软件测试出身，2026-07 裸辞恶补，目标算法工程师"**
2. `## 🎯 当前阶段` → 突出：2026.07 起开始系统恶补数学/ML/DL；本站同步记录笔记 + 手搓代码；欢迎算法/数据分析/AI 相关岗位内推
3. `## 📚 教育经历` → 时间轴卡片（两条）：
   - 2020.09 – 2023.06 上海财经大学 · 数学学院 · 基础数学硕士
   - 2016.09 – 2020.06 华东理工大学 · 理学院 · 数学与应用数学学士（注意：用户原文写"基础学习"，推断为笔误 = **基础数学**，上财数学学院的标准方向；后文用括号标注，若用户确认不是再改回）
4. `## 💼 工作经历` → 一条：
   - 2023.07 – 2026.07 某城市商业银行 · 总行科技部 · 软件测试工程师（简述职责：自动化测试 / 性能测试 / 业务系统需求分析 —— 突出与"数据分析、脚本编写、质量体系"相关的部分，为转行加分）
5. `## 🔀 转行计划（2026.07 – 至今）` → 关键差异化项，透明展示路线图：
   - 一级目标：算法工程师（推荐 / 搜广推 / NLP / 大模型应用开发）
   - 退路 1：数据分析师（SQL + Python 分析 + BI）
   - 退路 2：AI 应用 / AI 工具链 / MLOps 相关岗位
   - 行动计划：6 个月路线 → 前 3 月（本阶段）数学 + ML 基础 + 手搓代码；后 3 月 DL 专题 + 2 个完整项目 + LeetCode / Kaggle
6. `## 🔧 技术栈` → 诚实列「当前水平」与「目标」，避免装成熟：
   - ✅ 已熟练：Python 脚本、SQL、自动化测试框架、Linux 基础、Git
   - 🟡 正在熟练：NumPy/Pandas、Scikit-learn、PyTorch、Transformer 系列
   - 📖 学习清单：CV 基础、推荐系统 CTR 系列、LangChain / LLM 应用、MLOps 基础
7. `## 📬 联系方式` → 邮箱 `chengchufa2026@gmail.com` 放第一行；GitHub 链接保留；注明「内推 / 合作 / 技术讨论欢迎邮件，工作日 24h 内回复」
8. `## ❤️ 致谢 & 版权` → 保留原 VitePress 致谢和 CC BY-NC 4.0（可直接从原 32-44 行复制）

### B. 全局邮箱替换（2 处）
```
占位邮箱：chengchufa@users.noreply.github.com
→ 统一替换：chengchufa2026@gmail.com
```
- docs/about.md L27：连带括号注释「GitHub 转发，防爬虫」一并改为真实邮箱注释
- docs/index.md L65：同上

### C. 手搓代码目录结构（核心新增）

**C1. 根 code/README.md 设计要点**
- 标题「💻 手搓代码合集 · 从 0 复现算法」
- 第一屏文字说明：这是对应笔记 `docs/` 各章节的**手写实现合集**，不用 sklearn / torch 现成 API（偶尔允许对比验证），目标是**算法工程师面试手撕要求**
- 运行环境：Python 3.10+，建议 venv；给出一行命令 `python -m venv .venv && .venv\Scripts\activate && pip install -r requirements.txt`
- 目录导航：放一张表格对应 5 大模块 + 状态（✅已手写 / 🟡进行中 / 🔜待补）

**C2. 根 code/requirements.txt 设计**
- 不 pin 死版本（用户自己根据 CUDA 版本装 torch），只给最低版本提示：
  ```
  numpy>=1.24
  scipy>=1.10
  scikit-learn>=1.3
  matplotlib>=3.7
  pandas>=2.0
  seaborn>=0.12
  torch>=2.0
  torchvision>=0.15
  transformers>=4.30
  jupyter>=1.0
  pytest>=7.4
  tqdm>=4.65
  ```

**C3. 每个章节目录里的 README.md 模板（「🔜 待补」款）**
```markdown
# 章节名（英文目录名）

状态：🔜 待补 · 对应笔记链接：[docs/ml/xxx.md](https://chengchufa.github.io/ml/xxx.html)

## 🎯 手搓目标
（读完笔记后应该独立实现的 3-5 条）
- [ ] 功能 1
- [ ] 功能 2
- [ ] 单元测试覆盖 ≥ 80%
- [ ] 和 sklearn / torch 官方 API 做对比实验（误差 < 1%）

## 📁 建议文件结构
```
├── xxx.py              # 主实现（类 / 函数）
├── test_xxx.py         # pytest 单元测试
├── example.ipynb       # 用法示例（可选）
└── README.md
```

## 📖 参考资料
- 笔记章节：xxx
- 原论文 / 书：xxx
- 高质量博客：xxx
```

**C4. 5 篇「已完成笔记」对应的章节目录 README 升级（✅款）** → 分别是：
- `code/math/linear_algebra/README.md`（对应 math/linear-algebra.md）
- `code/ml/svm/README.md`（对应 ml/svm.md）
- `code/dl/transformer-1/README.md`（对应 dl/transformer-1.md）
- `code/papers/01-attention-is-all-you-need/README.md`（对应 papers/transformer-paper.md）
- `code/tutorials/claude-code/README.md`（对应 tutorials/claude-code.md）
→ 这些 README 写**更具体的手搓拆分清单**（如 SVM 拆成：线性核 SVM 对偶推导 → SMO 简化实现 → RBF 核 → 鸢尾花数据集验证），让用户打开就知道下一步写什么。

### D. 导航 & 链接入口
1. **nav 外链**：在 [config.ts](file:///d:/Sunday/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99/docs/.vitepress/config.ts) 的 `themeConfig.nav` 数组增加：
   ```ts
   { text: '💻 手搓代码', link: 'https://github.com/Chengchufa/Chengchufa.github.io/tree/main/code' }
   ```
2. **5 个模块 index.md 顶部**：在「当前进度」条下面加一个 VitePress `::: info 💻 代码目录` 提示框，内容是「本模块所有手搓代码放在 GitHub 仓库根目录 `code/{模块名}/`，点此跳转 → （链接）」
3. **首页 5 个已完成章卡片底部**（`docs/index.md` 里 math-linear / ml-svm / dl-transformer-1 / papers-attention / tutorials-claude-code 这 5 张卡片）：追加一行小字号灰色「💻 [对应代码](https://github.com/...)」

### E. .gitignore 追加 Python 项
末尾追加标准模板（约 20 行）：
```
# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
*.egg-info/
.installed.cfg
*.egg
*.manifest
*.spec
# Virtual env
.venv
venv/
ENV/
env/
# Testing & linting
.pytest_cache/
.mypy_cache/
.ruff_cache/
coverage/
htmlcov/
.tox/
.nox/
# Jupyter
.ipynb_checkpoints
```

### F. 验证步骤（**执行完 A~E 后必须跑**）
1. `npm run docs:build` → 确保 0 dead link / 0 syntax error（**config.ts 的 nav 结构必须合法**）
2. 抽查 3 个链接：首页「💻 手搓代码」按钮、math index.md 顶部的代码目录链接、首页线性代数卡片的代码链接 → 都是合法 GitHub URL（`https://github.com/Chengchufa/Chengchufa.github.io/tree/main/code/...`）
3. 抽查 about.md 两个邮箱位置 + index.md 作者卡邮箱 → 都是 `chengchufa2026@gmail.com`
4. `git status` 确认新增文件数在合理范围（约 60+ 个新增 README），.gitignore 生效（`__pycache__` 不会被 add，即使不小心创建）

### G. 提交信息（建议一条 commit）
```
feat: 更新 about.md 真实简历 + 全局邮箱 + 新增手搓代码 code/ 目录骨架

- about.md 完全重写：教育(华理数学本科→上财基础数学硕士)、
  工作(2023-2026 城商行总行科技部软件测试)、
  转行计划(2026-07 裸辞→目标算法/数据/AI)、
  技术栈诚实分级、邮箱改为 chengchufa2026@gmail.com
- 全局邮箱统一：docs/index.md 作者卡 + docs/about.md 联系方式，
  去掉 GitHub 转发文案
- 新增项目根 code/ 手搓代码合集骨架：
  - code/README.md 总入口 + code/requirements.txt 最小依赖
  - 按 5 大模块(math/ml/dl/papers/tutorials)拆分子目录，
    对齐 docs 下 52+ 章节一一对应，每章一个 README 模板
  - 5 篇已完成笔记对应章 README 写具体拆分 TODO
    （线性代数 / SVM / Transformer-1 / Attention 论文 / Claude Code）
- 导航 & 链接：
  - config.ts nav 新增「💻 手搓代码」外链 → /tree/main/code
  - 5 个模块 index.md 顶部加 info 框链接到对应代码目录
  - 首页 5 张 ✅ 卡片底部追加「💻 对应代码」链接
- .gitignore 补 Python 标准忽略项（__pycache__ / .venv / ipynb_checkpoints 等）
```

---

## 四、依赖 / 风险 / 边界处理

| 项目 | 说明 | 处理策略 |
|---|---|---|
| 用户笔误「基础学习」 | 用户 about.md 请求写「硕士基础学习」，上海财经大学数学学院正规方向为「基础数学」「应用数学」「概率论与数理统计」「运筹学与控制论」 | 重写 about.md 时**按「基础数学」落盘**，输出最终回答时提醒用户：若不是「基础数学」而是别的方向（或纯文字笔误）→ 打开 about.md 一行改掉即可，3 秒解决 |
| 新增 50+ README 文件会不会让 commit 显大？ | 每个 README 平均 40 行，总新增约 52×40 = 2080 行 Markdown，纯文本体积 < 200KB，对 Git 无压力 | 一次 commit 全加，无拆分必要 |
| 关于「邮箱全局更新」范围 | 用户说「全局」，但 grep 出 2 处真实使用 + 1 处 README 模板占位（`your-email@example.com`） | README 模板占位保留（让后来读 README 的人知道哪里可改邮箱，不要固化死）→ 只改真实呈现的 2 处 |
| 为什么 code/ 不放 docs/public/code 下？ | 一旦放 public，GitHub Pages 构建会把 50+ README 和未来所有 .py 文件打包到 dist 里，Page 体积变大加载变慢 | 放根目录 code/，纯独立代码合集，**通过 GitHub 仓库链接跳转**，Pages 仍然轻量 |
| requirements.txt 里 torch 要不要写 CPU / CUDA？ | 用户机器 GPU 环境未知，CUDA 版本会导致 pip install 失败 | 写纯 `torch>=2.0` 不加任何 index-url；code/README.md 里专门写一行提醒：「有 GPU 请按官网 pytorch.org 选 CUDA 版本命令覆盖安装，CPU 版本直接 pip install -r 即可」 |
| 构建死链风险 | 外部链接（`https://github.com/.../tree/main/code/...`）在本次执行时因为 `code/` 还没推到 GitHub，所以仓库树链接暂时 404 | **说明清楚**：先 commit 再 push，push 完成后这些链接立即生效（~2 分钟）；VitePress 默认不检查外链死链，只检查站内，所以 build 不会报错 |

---

## 五、成功判定标准（5 条）

执行完以上步骤后满足全部即可：
- [ ] 打开首页 → 点右上角「💻 手搓代码」→ 跳转到 `github.com/.../tree/main/code`（push 后）
- [ ] 打开「关于」页 → 能看到教育经历两段（华理+上财）、工作一段（城商行测试）、转行时间轴（2026-07 裸辞）、邮箱 `chengchufa2026@gmail.com`
- [ ] 首页「💬 关于本站」卡片里的邮箱也是 `chengchufa2026@gmail.com`
- [ ] 点开 math/ml/dl/papers/tutorials 5 个模块 → 顶部 info 框都有「💻 代码目录」外链
- [ ] `npm run docs:build` 通过，0 error
