---
title: 正则化
---

# 正则化

::: warning 内容撰写中
本章节正在整理撰写。请先阅读已完成的 [Transformer (1) - 基础结构](/dl/transformer-1)，或返回 [深度学习总目录](/dl/)。
:::

[[toc]]

## 章节大纲

- 正则化的统一视角：参数先验（MAP）+ 约束优化
- L1 / L2 权重衰减：稀疏性 vs 平滑性
- Dropout：训练时随机失活，测试时缩放，原理解释
- DropConnect / Stochastic Depth
- 数据增强：几何变换、MixUp / CutMix / CutOut
- 早停 Early Stopping：验证集 patience
- 批归一化与层归一化作为隐式正则化
- 标签平滑 Label Smoothing
- 谱归一化 / 梯度惩罚
- 对抗训练（AT）、虚拟对抗训练（VAT）
- 大模型时代的正则化：LoRA / 指令微调的正则化效果
