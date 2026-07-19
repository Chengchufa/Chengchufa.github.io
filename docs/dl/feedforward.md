---
title: 深度前馈神经网络
---

# 深度前馈神经网络

::: warning 内容撰写中
本章节正在整理撰写。请先阅读已完成的 [Transformer (1) - 基础结构](/dl/transformer-1)，或返回 [深度学习总目录](/dl/)。
:::

[[toc]]

## 章节大纲

- 感知机：线性阈值单元，XOR 问题不可解
- 多层感知机（MLP）：输入层 + 隐藏层 + 输出层
- 激活函数：为什么必须用非线性？
  - Sigmoid / Tanh 的梯度消失问题
  - ReLU 家族（ReLU / LeakyReLU / PReLU / GELU）
  - Swish / SiLU / Mish 现代激活
- 损失函数设计：MSE（回归） / Cross-Entropy（分类） / BCE（二分类）
- 输出层 + Softmax：温度参数与 Label Smoothing
- 前向传播完整流程手算示例
