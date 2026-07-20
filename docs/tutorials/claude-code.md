---
title: Claude Code 使用指南
---

# Claude Code 使用指南

Claude Code 是 Anthropic 官方推出的终端版 AI 编程助手（CLI 工具）。相比于 IDE 类的 Cursor / Windsurf，Claude Code 的优势在于：**深度集成终端、上下文极大、长任务自主规划能力强、可直接读写文件和运行命令**，非常适合复杂重构、代码生成、调试排错、脚本自动化等场景。

本文整理从零安装到高阶技巧的完整使用路径。

[[toc]]

## 1. 安装与初始化

### 1.1 环境要求

- 操作系统：macOS 12+ / Ubuntu 20.04+ / Windows 10+（需 PowerShell 7+ 或 WSL）
- Node.js ≥ 18（推荐 20 LTS）
- Anthropic API Key（付费账户推荐，免费额度有限）

### 1.2 安装命令

```bash
# 方式一：全局安装（推荐）
npm install -g @anthropic-ai/claude-code

# 验证安装
claude --version
```

### 1.3 首次配置

```bash
# 交互式配置 API Key
claude config set api_key sk-ant-xxxxxxxxxxxxxxxxxxxx

# 也可通过环境变量（不保存明文到配置文件，更安全）
export ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxx

# 查看当前配置
claude config list
```

### 1.4 常用全局参数速查

```bash
claude [options] <mode>

# 常用 options:
#   -m, --model <name>        指定模型: claude-sonnet-4-20250514 / claude-opus-... / claude-haiku-...
#   -p, --project <dir>       项目根目录（决定上下文文件扫描范围）
#   -t, --temp <0~1>          温度（越低越稳定，代码推荐 0.0~0.3）
#   -c, --cost <limit>        单次会话累计成本上限，如 5.00 USD
#   --no-confirm              非交互模式（CI 环境用）
#   --max-tokens <n>          单次输出 token 上限
```

::: tip 成本控制建议
- 日常代码任务默认用 **Claude Sonnet**：综合能力强，价格仅 Opus 的约 1/5
- 简单脚本生成可用 **Haiku**，速度快、极便宜
- 只有复杂架构设计 / 疑难 Bug 排查再切 **Opus**
- 强烈建议每次会话加 `-c 0.5` 防止长任务费用跑飞
:::

## 2. 三种交互模式

### 2.1 Chat 模式（默认）

进入多轮持续对话，可在多轮内逐步完成复杂任务。

```bash
# 在当前项目目录下启动
cd my-project
claude
```

**会话内常用快捷键**：

| 操作 | 快捷键 |
|------|--------|
| 发送消息 | `Enter` |
| 输入多行 | `Shift + Enter` |
| 停止 AI 输出 | `Ctrl + C` |
| 进入 / 退出自动模式 | `/auto` |
| 打开最近编辑文件 | `/open` |
| 查看 cost & token 统计 | `/cost` |
| 清屏 | `Ctrl + L` |
| 退出会话 | `Ctrl + D` 或 `/exit` |

### 2.2 One-Shot 模式

适合快速生成脚本、翻译一段文字、解释一行命令等一次性任务：

```bash
# 快速生成一个 python 脚本并写入文件
claude "写一个 Python 脚本统计当前目录下所有 .md 文件的行数，输出 CSV 报告" > count_lines.py

# 解释错误日志
claude "解释下面这个 Python Traceback 的根因并给出修复建议：
$(cat error.log)"

# 直接在 Chat 里用 stdin 也可以：
cat error.log | claude "分析这段错误日志"
```

### 2.3 Agent 自动模式

这是 Claude Code 最强的模式——给它一个目标，它会**自主规划步骤、读写文件、执行命令、重试错误**，直到完成。适合："给项目加个登录模块"、"把 JS 老代码迁移到 TypeScript"、"修复 CI 构建失败"等复杂任务。

```bash
# 直接在 chat 里输入 /auto 切换，或命令行指定
claude -m auto "将项目中 src/ 下所有 CommonJS require() 迁移成 ESM import，同步更新 package.json 的 type: module"
```

**自动模式的使用原则**：
1. 先用 Sonnet 模型跑通主流程，遇到卡点再切 Opus
2. 务必设置成本上限 `-c 2.00` 或更低
3. 涉及数据库操作、生产服务器命令时，建议关闭自动允许（`--require-approval`）

## 3. 工程实践：用 Claude Code 重构一个 VitePress 站点侧边栏

以下是完整的示例对话，演示如何一步步指导 Claude 完成真实项目任务。

```
You:
  我有一个 VitePress 项目，所有 Markdown 文件在 docs/ 下分目录存放：
  docs/math/*.md, docs/ml/*.md, docs/dl/*.md ...
  现在 .vitepress/config.ts 里的 sidebar 是手动维护的，很容易漏。
  你帮我写一个 scripts/generate-sidebar.mjs 脚本，自动扫描 docs/ 下的
  子目录，读取每个 md 文件的 frontmatter title，生成 sidebar JSON 结构，
  然后在 config.ts 里 import 它。

  要求：
  1. 跳过文件名包含 draft 的文件
  2. index.md 的 link 只写到 /xxx/ 目录路径
  3. 目录顺序固定：math > ml > dl > papers > tutorials，其余按字母序
  4. 打印扫描报告：多少目录、多少文件、跳过多少 draft

Claude Code:
  (开始设计脚本结构...)
```

它生成的脚本核心部分类似：

```javascript
// scripts/generate-sidebar.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOCS_ROOT = path.resolve(__dirname, "..", "docs");
const PRIORITY = ["math", "ml", "dl", "papers", "tutorials"];

function extractTitle(mdContent) {
  const m = mdContent.match(/^---\n([\s\S]*?)\n---\n/);
  if (m) {
    const titleMatch = m[1].match(/^title:\s*(.+?)\s*$/m);
    if (titleMatch) return titleMatch[1].trim().replace(/^['"]|['"]$/g, "");
  }
  const h1 = mdContent.match(/^#\s+(.+)$/m);
  return h1 ? h1[1].trim() : null;
}

function scanFolder(relDir) {
  const abs = path.join(DOCS_ROOT, relDir);
  const files = fs.readdirSync(abs).filter(f => f.endsWith(".md"));
  const items = [];
  let skipped = 0;

  for (const f of files) {
    if (f.includes("draft")) { skipped++; continue; }
    const content = fs.readFileSync(path.join(abs, f), "utf8");
    const title = extractTitle(content) || f.replace(/\.md$/, "");
    const link = f === "index.md"
      ? `/${relDir}/`
      : `/${relDir}/${f.replace(/\.md$/, "")}`;
    items.push({ text: title, link });
  }
  items.sort((a, b) => a.link.localeCompare(b.link));
  return { items, skipped };
}

function main() {
  const dirs = fs.readdirSync(DOCS_ROOT).filter(
    d => fs.statSync(path.join(DOCS_ROOT, d)).isDirectory()
        && !d.startsWith(".")
  );
  dirs.sort((a, b) => {
    const pa = PRIORITY.indexOf(a), pb = PRIORITY.indexOf(b);
    if (pa >= 0 && pb >= 0) return pa - pb;
    if (pa >= 0) return -1;
    if (pb >= 0) return 1;
    return a.localeCompare(b);
  });

  const sidebar = {};
  let totalFiles = 0, totalSkipped = 0;
  for (const dir of dirs) {
    const { items, skipped } = scanFolder(dir);
    sidebar[`/${dir}/`] = [{ text: dir, items, collapsed: true }];
    totalFiles += items.length;
    totalSkipped += skipped;
  }
  console.log(`[sidebar-gen] 目录 ${dirs.length}  文件 ${totalFiles}  跳过草稿 ${totalSkipped}`);
  const out = `// Auto-generated by scripts/generate-sidebar.mjs  —— 请勿手动编辑！
export default ${JSON.stringify(sidebar, null, 2)};
`;
  fs.writeFileSync(path.join(DOCS_ROOT, ".vitepress", "sidebar.mjs"), out);
}

main();
```

最后你再在 `config.ts` 中 `import sidebar from './sidebar.mjs'` 引入即可，完成了维护方式的升级。

## 4. 提升回答质量的 Prompt 技巧

同样的需求，好的 Prompt 输出质量会高一个档次，以下是我归纳的 5 条黄金原则：

### 4.1 SFT 四件套结构

```
[角色定义]  +  [任务目标]  +  [上下文/约束]  +  [输出格式要求]
```

示例：
```
你是一名资深前端架构师，熟悉 VitePress + Vue 3 生态。
请帮我重构我项目的首页 hero 区：
  - 现有文件 docs/index.md，用的 VitePress 默认 home layout
  - 目标：做成简洁实用的个人学习笔记风格的首页 + 更新日志 + 卡片导航
  - 约束：不能引入新的依赖；保留 VitePress 原生特性（搜索、导航栏）
  - 输出：先列设计思路（3-5 条要点），再给出具体文件 diff
```

### 4.2 明确禁止/要求

```
要求:
- 用 TypeScript，不要 any 类型
- 所有函数必须写 JSDoc 注释
- 使用 vitest 写单元测试，覆盖率 > 90%
- 不要引入第三方库，只用 Node 内置模块

禁止:
- 不要用 class，纯函数式
- 不要写解释性文字
- 不要改变函数签名
```

### 4.3 给示例，胜过讲道理

```
我需要一个函数把中文标题转成 URL slug，规则和我的 VitePress 配置一致。
示例:
  "线性代数基础"  ->  "linear-algebra"
  "SVM - 支持向量机"  ->  "svm-support-vector-machine"
  "Transformer (1)"  ->  "transformer-1"
```

### 4.4 错误驱动调试

当代码报错时，直接把**最小复现**+**完整错误**扔过去，效果最好：

```
我运行你上次写的 generate-sidebar.mjs 报错：

$ node scripts/generate-sidebar.mjs
node:internal/fs/utils:353
    throw err;
    ^
Error: ENOENT: no such file or directory, scandir '/Users/xxx/docs/dl/.DS_Store'
    at Object.readdirSync (node:fs:1558:26)

问题是 docs/ 下有 .DS_Store 这样的非目录文件被当作目录处理了。修复它。
```

### 4.5 长任务拆解 + 让它先输出计划

对于复杂需求，不要一次把所有需求塞进去，要分阶段：

```
Phase 1: 先分析我当前的项目结构，列出所有需要修改的文件清单和修改点。
Phase 2: 逐个文件修改，一次改一个，改完让我 review。
```

## 5. 常见问题 FAQ

**Q: 如何让 Claude 不每次都扫描一遍 node_modules？**
A: 根目录创建 `.claudeignore` 文件（语法等同 .gitignore），把 `node_modules`、`.git`、`dist`、大文件等都忽略掉，这是第一步必做的事。

**Q: 命令行粘贴代码会被当成 shell 执行？**
A: 会话内用三反引号 ``` 包裹代码，或 Claude 会自动识别代码块。多行输入用 Shift + Enter。

**Q: 与 Git 工作流最佳搭配？**
A:
```bash
# 1. 新建分支
git checkout -b feat/sidebar-gen

# 2. 让 Claude 在干净的 workspace 上工作
git stash -u  # 如果有未提交改动

# 3. 启动 claude 执行任务
claude -m auto -c 2.00 "..."

# 4. 让它自己跑测试和 lint，失败就修
# claude 会自动调 npm test

# 5. 完成后人工 review diff
git diff
git add . && git commit -m "feat: auto generate sidebar"
```

**Q: 对话太长上下文爆了怎么办？**
A:
- 定期 `/clear` 清历史开启新会话
- 把中间产物（已经生成的文件）作为上下文而不是对话历史
- 关键文件用 `cat file | claude "基于这个文件做 xxx"` 方式 one-shot

## 6. 高阶：用 CLAUDE.md 定制项目级 System Prompt

Claude Code 支持在项目根放 `CLAUDE.md`（或 `.github/CLAUDE.md`、`CLAUDE.md`），每次启动新会话自动作为系统提示注入，非常适合定义项目规范：

```markdown
# Project Rules for personal-notes-site

## Stack
- VitePress 1.x with TypeScript configs
- Package manager: npm only, never use pnpm/yarn

## Writing rules
- All file / folder names use kebab-case English slugs (no Chinese characters!)
- Titles go in markdown frontmatter `title: 中文标题`
- Math formulas use $$ LaTeX blocks; use markdown-it-mathjax3 syntax

## Sidebar discipline
- Always update docs/.vitepress/config.ts sidebar when adding new md files
- Or use: node scripts/generate-sidebar.mjs to regenerate

## Before finishing any task
1. Run `npm run docs:build` to ensure build passes
2. Fix any TypeScript / lint errors
3. Summarize file changes in this conversation
```

这样每次新开会话无需重复说明项目规范。

## 7. 本章小结

Claude Code 的正确使用心法可以浓缩为三句话：

> **任务要拆、Prompt 要准、结果要审。**

- 把复杂任务拆成一个个 Claude 可独立完成的步骤
- 用「角色 + 目标 + 约束 + 格式」四件套写精准 Prompt
- 对 Claude 生成的代码、运行结果保持 engineer 的专业判断力，不盲信

掌握这些，你会发现它真正成为你的**终端智能副驾驶**，将重复的编码、重构、排错工作效率提升数倍。

::: tip 推荐拓展
- 官方文档：[docs.anthropic.com/claude-code](https://docs.anthropic.com/claude-code)
- 进阶阅读：Anthropic 官方 Prompt Engineering 指南
- 提示工程：[Dyno 官方 Prompt 库](https://dynoanthropic.com/prompts)
:::
