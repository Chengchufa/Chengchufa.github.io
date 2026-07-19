---
title: 循环神经网络 RNN
---

# 循环神经网络 RNN

::: warning 内容撰写中
本章节正在整理撰写。请先阅读已完成的 [Transformer (1) - 基础结构](/dl/transformer-1)，或返回 [深度学习总目录](/dl/)。
:::

[[toc]]

## 章节大纲

- 序列建模需求：变长输入/输出、时序依赖
- 基础 RNN 结构与展开、BPTT 推导
- 梯度消失的数学分析（雅克比谱半径 < 1）
- LSTM：遗忘门、输入门、输出门、细胞状态
- GRU：简化版两门关（更新门、重置门）
- 双向 RNN / 深层 RNN
- Seq2Seq 架构：Encoder-Decoder + 固定向量瓶颈
- Bahdanau 注意力、Luong 注意力：RNN+Attn 的黄金时代
- Beam Search / Greedy Decode
- Teacher Forcing、Scheduled Sampling
- 为什么 Transformer 最终取代 RNN？总结对比
