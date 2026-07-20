# 🔥 深度学习 · 手搓代码合集

> 对应 `docs/dl/` 下 25 章笔记。原则：**基础模块尽量只用 PyTorch `Tensor` 与自动微分，少用 `torch.nn` 封装；对比官方 API 数值一致。**
>
> Transformer 9 篇重点专题：每篇必须有独立可运行的最小复现脚本 + 对应原论文/博客引用。

📚 配套笔记：<https://chengchufa.github.io/dl/>

---

## 进度一览

### 基础神经网络（7 章）

| # | 章节目录 | 状态 | 对应笔记 |
|---|---------|------|---------|
| 0 | [intro/](./intro/README.md) | 🔜 待补 | 深度学习简介（待补） |
| 1 | [feedforward/](./feedforward/README.md) | 🔜 待补 | 深度前馈神经网络（待补） |
| 2 | [backprop/](./backprop/README.md) | 🔜 待补 | 反向传播算法（待补） |
| 3 | [regularization/](./regularization/README.md) | 🔜 待补 | 正则化（待补） |
| 4 | [optimization/](./optimization/README.md) | 🔜 待补 | 最优化基础（待补） |
| 5 | [cnn/](./cnn/README.md) | 🔜 待补 | CNN（待补） |
| 6 | [rnn/](./rnn/README.md) | 🔜 待补 | RNN（待补） |

### Transformer 系列（9 章 ⭐ 重点）

| T# | 章节目录 | 状态 | 对应笔记 |
|----|---------|------|---------|
| 1 | [transformer-1/](./transformer-1/README.md) | 🟡 具体 TODO 已拆，待实现 | [Transformer (1) - 基础结构](https://chengchufa.github.io/dl/transformer-1) |
| 2 | [transformer-2/](./transformer-2/README.md) | 🔜 待补 | Transformer (2) - 注意力机制（待补） |
| 3 | [transformer-3/](./transformer-3/README.md) | 🔜 待补 | Transformer (3) - 位置编码（待补） |
| 4 | [transformer-4/](./transformer-4/README.md) | 🔜 待补 | Transformer (4) - 训练技巧（待补） |
| 5 | [transformer-5/](./transformer-5/README.md) | 🔜 待补 | Transformer (5) - 变体模型（待补） |
| 6 | [transformer-6/](./transformer-6/README.md) | 🔜 待补 | Transformer (6) - 预训练模型（待补） |
| 7 | [transformer-7/](./transformer-7/README.md) | 🔜 待补 | Transformer (7) - BERT 系列（待补） |
| 8 | [transformer-8/](./transformer-8/README.md) | 🔜 待补 | Transformer (8) - GPT 系列（待补） |
| 9 | [transformer-9/](./transformer-9/README.md) | 🔜 待补 | Transformer (9) - 多模态模型（待补） |

### 专题内容（5 章）

| 代号 | 章节目录 | 状态 | 对应笔记 |
|------|---------|------|---------|
| WV | [word_vector/](./word_vector/README.md) | 🔜 待补 | 词向量（待补） |
| SV | [sentence_vector/](./sentence_vector/README.md) | 🔜 待补 | 句子向量（待补） |
| C1 | [ctr_classic/](./ctr_classic/README.md) | 🔜 待补 | CTR 预估（传统方法）（待补） |
| C2 | [ctr_nn_1/](./ctr_nn_1/README.md) | 🔜 待补 | CTR 预估（神经网络 1）（待补） |
| C3 | [ctr_nn_2/](./ctr_nn_2/README.md) | 🔜 待补 | CTR 预估（神经网络 2）（待补） |

---

## 总体目标

- [ ] 基础 7 章全部从 0 手搓：MLP / BP / Dropout / Adam / Conv2d / LSTM
- [ ] Transformer 9 篇：Encoder / Decoder / MHA / PE / Beam Search 完整可运行，支持英译中 toy 训练
- [ ] 专题：Word2Vec（Skip-gram + CBOW）、DeepFM、DIN 各 1 个从 0 最小实现
