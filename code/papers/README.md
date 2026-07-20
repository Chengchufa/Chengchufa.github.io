# 📄 论文复现 · 手搓代码合集

> 对应 `docs/papers/` 下的精读笔记。每篇论文至少包含：**核心架构最小复现脚本 + 与原文实验结论对照 README**。
>
> 不求完整 SOTA，但求**论文里最核心的那一页算法/架构能亲手写一遍**，建立「读论文 → 写代码 → 跑起来」的正反馈。

📚 配套笔记：<https://chengchufa.github.io/papers/>

---

## 进度一览

### NLP / 大模型方向

| # | 章节目录 | 年份 | 状态 | 对应笔记 |
|---|---------|------|------|---------|
| 01 | [01-attention-is-all-you-need/](./01-attention-is-all-you-need/README.md) | 2017 | 🟡 具体 TODO 已拆，待复现 | [Attention Is All You Need](https://chengchufa.github.io/papers/transformer-paper) |
| 02 | [02-bert/](./02-bert/README.md) | 2018 | 🔜 待补 | BERT（待补） |
| 03 | [03-gpt3/](./03-gpt3/README.md) | 2020 | 🔜 待补 | GPT-3（待补） |
| 04 | [04-llama/](./04-llama/README.md) | 2023 | 🔜 待补 | LLaMA（待补） |
| 05 | [05-clip/](./05-clip/README.md) | 2021 | 🔜 待补 | CLIP（待补） |

### 推荐系统 / CTR 方向

| # | 章节目录 | 年份 | 状态 | 对应笔记 |
|---|---------|------|------|---------|
| 11 | [11-deepfm/](./11-deepfm/README.md) | 2017 | 🔜 待补 | DeepFM（待补） |
| 12 | [12-din/](./12-din/README.md) | 2018 | 🔜 待补 | DIN（待补） |

### CV 方向

| # | 章节目录 | 年份 | 状态 | 对应笔记 |
|---|---------|------|------|---------|
| 21 | [21-resnet/](./21-resnet/README.md) | 2015 | 🔜 待补 | ResNet（待补） |
| 22 | [22-vit/](./22-vit/README.md) | 2020 | 🔜 待补 | ViT（待补） |

---

## 总体目标

- [ ] 2026 年底前完成 8 篇以上核心论文最小复现（2 × NLP + 2 × Rec + 2 × CV + 2 × LLM）
- [ ] 每篇复现都有 `example.sh` 一键跑 demo，输出结果截图与原文对比
- [ ] 每个目录附一份「一文读懂版 Notes.md」，用自己的话重述论文创新点与核心公式
