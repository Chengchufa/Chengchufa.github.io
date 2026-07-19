---
title: Transformer (2) - 注意力机制
---

# Transformer (2) - 注意力机制

::: warning 内容撰写中
本章节正在整理撰写。请先阅读已完成的 [Transformer (1) - 基础结构](/dl/transformer-1)，或返回 [深度学习总目录](/dl/)。
:::

[[toc]]

## 章节大纲

- 从 RNN 的注意力（Bahdanau/Luong）说起
- Scaled Dot-Product Attention 完整手算：4 个 token 的 Q、K、V 一步步算
- 为什么除以 √dk？Softmax 饱和的数值分析
- Multi-Head Attention 数学推导与参数量分析
- 三种注意力用法的矩阵计算：Self / Masked / Cross
- 复杂度分析：$O(L^2 d)$，长序列瓶颈
- 自注意力的可解释性：注意力权重可视化
- 扩展：稀疏注意力（Longformer）、线性注意力（Performer）、FlashAttention
- PyTorch 手写 Multi-Head Attention，与 nn.MultiheadAttention 对齐
