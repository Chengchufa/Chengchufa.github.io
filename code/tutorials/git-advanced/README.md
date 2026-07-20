# Git 进阶

> 🔜 待补 · 笔记：待补

## 🎯手搓目标
- [ ] 撤销 commit 脚本：soft/mixed/hard reset 三选一 + reflog 恢复
- [ ] git bisect 自动定位 bug 脚本（配合单元测试）
- [ ] git filter-repo 清理历史大文件/敏感信息脚本
- [ ] git rebase -i 交互式变基 cheat sheet（5 种操作）
- [ ] git worktree 多分支并行开发脚本
- [ ] git hooks 配置：pre-commit 格式化 + commit-msg 规范检查

## 📁建议文件结构
```
git-advanced/
├── scripts/
│   ├── undo_commit.sh
│   ├── bisect_debug.sh
│   ├── filter_repo_clean.sh
│   ├── worktree_create.sh
│   └── setup_hooks.sh
├── hooks/
│   ├── pre-commit
│   └── commit-msg
└── cheat_sheet.md
```

## 📖参考资料
- https://git-scm.com/docs
