# 批量创建 37 个 README.md 实施计划

## 任务概述
在 `d:\Sunday\个人网站\code\` 下为 37 个章节目录创建 README.md 文件，包含 3 个特殊章节（具体 TODO）和 34 个标准模板（🔜 待补）。

---

## 步骤一：创建所有 37 个子目录（不存在的先创建）

### DL 模块（25 个目录，路径前缀：`d:\Sunday\个人网站\code\dl\`）
1. `intro/`
2. `feedforward/`
3. `backprop/`
4. `regularization/`
5. `optimization/`
6. `cnn/`
7. `rnn/`
8. `transformer-1/`（⭐ 特殊）
9. `transformer-2/`
10. `transformer-3/`
11. `transformer-4/`
12. `transformer-5/`
13. `transformer-6/`
14. `transformer-7/`
15. `transformer-8/`
16. `transformer-9/`
17. `word_vector/`
18. `sentence_vector/`
19. `ctr_classic/`
20. `ctr_nn_1/`
21. `ctr_nn_2/`

### Papers 模块（9 个目录，路径前缀：`d:\Sunday\个人网站\code\papers\`）
22. `01-attention-is-all-you-need/`（⭐ 特殊）
23. `02-bert/`
24. `03-gpt3/`
25. `04-llama/`
26. `05-clip/`
27. `11-deepfm/`
28. `12-din/`
29. `21-resnet/`
30. `22-vit/`

### Tutorials 模块（6 个目录，路径前缀：`d:\Sunday\个人网站\code\tutorials\`）
31. `claude-code/`（⭐ 特殊）
32. `vscode-plugins/`
33. `conda-mamba/`
34. `terminal-tmux/`
35. `git-advanced/`
36. `docker-getting-started/`

---

## 步骤二：创建 3 个特殊章节 README

### README 统一结构
```
# 标题
> 状态 + 笔记链接

## 🎯 手搓目标
- [ ] TODO 项...

## 📁 建议文件结构
```
目录树代码块
```

## 📖 参考资料
- ...
```

### 特殊 1：`dl/transformer-1/README.md`
- 标题：Transformer (1) - 基础结构
- 状态：🟡 具体 TODO 已拆，待实现
- 笔记：https://chengchufa.github.io/dl/transformer-1
- 9 条手搓 TODO（ScaledDotProductAttention → 德译英 toy 训练）
- 7 个建议文件
- 3 条参考资料

### 特殊 2：`papers/01-attention-is-all-you-need/README.md`
- 标题：Attention Is All You Need (2017) 复现
- 状态：🟡 具体 TODO 已拆，待复现
- 笔记：https://chengchufa.github.io/papers/transformer-paper
- 6 条手搓 TODO（原论文逐节对照）
- 6 个建议文件
- 2 条参考资料

### 特殊 3：`tutorials/claude-code/README.md`
- 标题：Claude Code 配置与示例脚本合集
- 状态：🟡 具体 TODO 已拆，待实现
- 笔记：https://chengchufa.github.io/tutorials/claude-code
- 5 条手搓 TODO
- 5 个建议文件/目录
- 2 条参考资料

---

## 步骤三：创建 34 个标准 🔜 待补 README

标准模板结构：
```
# 章节标题
> 🔜 待补 · 笔记：docs/xxx/xxx（待补）

## 🎯 手搓目标
- [ ] 目标描述（来自用户提供的各章节目标）

## 📁 建议文件结构
```
└── README.md
```

## 📖 参考资料
- docs/xxx/xxx.md
```

**34 个标准模板分配：**
- DL 基础 7 章：intro, feedforward, backprop, regularization, optimization, cnn, rnn
- DL Transformer T2~T9（8 个）：transformer-2 ~ transformer-9
- DL 专题 5 个：word_vector, sentence_vector, ctr_classic, ctr_nn_1, ctr_nn_2
- Papers 8 个：02-bert, 03-gpt3, 04-llama, 05-clip, 11-deepfm, 12-din, 21-resnet, 22-vit
- Tutorials 5 个：vscode-plugins, conda-mamba, terminal-tmux, git-advanced, docker-getting-started

---

## 步骤四：验证
- 统计实际创建的 README.md 数量（应为 37）
- 输出所有文件路径列表
- 确认与预期目录数一致
