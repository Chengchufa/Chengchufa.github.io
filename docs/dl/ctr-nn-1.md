---
title: CTR 预估（神经网络方法 1）
---

# CTR 预估（神经网络方法 1）

::: warning 内容撰写中
本章节正在整理撰写。请先阅读已完成的 [Transformer (1) - 基础结构](/dl/transformer-1)，或返回 [深度学习总目录](/dl/)。
:::

[[toc]]

## 章节大纲

- Wide & Deep：记忆 + 泛化，谷歌 Play 推荐
- DeepFM：Wide 部分替换为 FM，端到端训练
- Deep & Cross（DCN / DCN-V2）：Cross Net 显式高阶交叉
- xDeepFM：CIN 压缩交互网络，向量级交叉
- FNN：FM 预训练初始化 Embedding
- PNN（IPNN / OPNN）：内积 / 外积 Product 层
- NFM：FM + Bi-Interaction Pooling，接 MLP
- AFM：注意力加权 FM
- DIN（深度兴趣网络）：目标 Attention，用户行为序列建模
- DIEN：兴趣抽取层 + GRU，兴趣演进建模
- 代码实战：DeepCTR 库跑通 Criteo 数据集
