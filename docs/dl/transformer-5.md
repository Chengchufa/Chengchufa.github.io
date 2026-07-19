---
title: Transformer (5) - 变体模型
---

# Transformer (5) - 变体模型

::: warning 内容撰写中
本章节正在整理撰写。请先阅读已完成的 [Transformer (1) - 基础结构](/dl/transformer-1)，或返回 [深度学习总目录](/dl/)。
:::

[[toc]]

## 章节大纲

- Transformer-XL：段级循环 + 相对位置编码，解决长上下文
- XLNet：排列语言模型，自回归 + 双向上下文
- Reformer：局部敏感哈希 LSH 注意力 + 可逆残差
- Longformer：滑动窗口 + 全局 token 的稀疏注意力
- BigBird：随机 + 窗口 + 全局三种注意力模式
- Perceiver / Perceiver IO：通用架构，跨模态输入输出
- Efficient Transformers 综述：线性化注意力家族
- Mamba / SSM 系列：从注意力回到状态空间模型（2023+）
