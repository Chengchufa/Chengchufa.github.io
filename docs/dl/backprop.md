---
title: 反向传播算法
---

# 反向传播算法

::: warning 内容撰写中
本章节正在整理撰写。请先阅读已完成的 [Transformer (1) - 基础结构](/dl/transformer-1)，或返回 [深度学习总目录](/dl/)。
:::

[[toc]]

## 章节大纲

- 前向计算图 + 链式法则回顾
- 完整 MLP 的反向传播推导（每一层 W、b 的梯度公式）
- Softmax + Cross-Entropy 的雅可比矩阵与简化求导
- 数值梯度检查：用有限差分验证推导正确性
- 梯度消失 / 梯度爆炸：数学原因与早期应对方案
- 参数初始化：Xavier（Glorot）vs He（Kaiming）
- 批归一化 BN：反向传播中的梯度改善
- 层归一化 LN / 组归一化 GN：Transformer / ViT 的选择
- 用 NumPy 手写 3 层 MLP 的 BP，再用 PyTorch 对比梯度
