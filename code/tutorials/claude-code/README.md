# Claude Code 配置与示例脚本合集

> 🟡 具体 TODO 已拆 · 笔记：https://chengchufa.github.io/tutorials/claude-code

## 🎯手搓目标
- [ ] 3个 /skills 示例：算法题用例生成、LeetCode 题解模板、Python 项目目录模板
- [ ] .clauderc 基础配置模板（ctx 规则 + model + alias）
- [ ] batch_ask.py：读取 code/xxx/README 所有 TODO → 输出下一步优先级报告
- [ ] commit_message_bot.py：读 git diff → 生成 Conventional Commits 规范的中文 commit message
- [ ] MCP 文件服务器配置样例：允许 Claude 读 docs/ 和 code/ 两个目录

## 📁建议文件结构
```
claude-code/
├── skills/
│   ├── algo_test_gen.md
│   ├── leetcode_solution.md
│   └── python_project_template.md
├── dotfiles/
│   └── .clauderc.tpl
├── scripts/
│   ├── batch_ask.py
│   └── commit_message_bot.py
└── mcp_config.json
```

## 📖参考资料
- https://docs.anthropic.com/claude-code
