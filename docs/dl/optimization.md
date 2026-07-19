---
title: 最优化基础
---

# 深度学习最优化基础

::: warning 内容撰写中
本章节正在整理撰写。请先阅读已完成的 [Transformer (1) - 基础结构](/dl/transformer-1)，或返回 [深度学习总目录](/dl/)。
:::

[[toc]]

## 章节大纲

- 深度学习优化的独特挑战：非凸、大规模、鞍点
- 基础 SGD 公式与收敛性直觉
- Momentum SGD、Nesterov Accelerated Gradient
- AdaGrad：自适应学习率，稀疏梯度友好
- RMSprop：AdaGrad 的衰减改进
- Adam / AdamW：偏差修正 + 权重衰减解耦（现代首选）
- Lion、Adafactor、Sophia 等 2020 年后的新优化器
- 学习率调度：Step / Cosine / Linear Warmup / Cosine with Warm Restarts
- 损失景观可视化，优化器路径分析
- 大模型训练的 LAMB / ZeRO / FSDP 分布式优化
