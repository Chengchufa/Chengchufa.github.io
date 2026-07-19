---
title: 深度学习
outline: [2, 3]
---

# 深度学习

从感知机到 Transformer 大模型，系统梳理深度学习核心模型与训练技巧。特别强化了 Transformer 系列内容，共 9 篇笔记覆盖从基础结构到多模态预训练的演进脉络。

## 📖 章节导航

### 基础神经网络

| 序号 | 章节 | 核心内容 |
|------|------|----------|
| 0 | [深度学习简介](/dl/intro) | 深度学习发展简史、主要应用方向 |
| 1 | [深度前馈神经网络](/dl/feedforward) | 感知机、激活函数、损失函数 |
| 2 | [反向传播算法](/dl/backprop) | 链式法则、梯度计算、参数初始化 |
| 3 | [正则化](/dl/regularization) | L1/L2、Dropout、早停、数据增强 |
| 4 | [最优化基础](/dl/optimization) | SGD、Adam、学习率调度 |
| 5 | [卷积神经网络 CNN](/dl/cnn) | 卷积/池化、ResNet 等经典结构 |
| 6 | [循环神经网络 RNN](/dl/rnn) | LSTM、GRU、Seq2Seq 与注意力 |

### Transformer 系列

| 序号 | 章节 | 核心内容 |
|------|------|----------|
| T1 | [Transformer (1) - 基础结构](/dl/transformer-1) | Encoder-Decoder、整体架构 |
| T2 | [Transformer (2) - 注意力机制](/dl/transformer-2) | Self-Attention、Multi-Head、Mask |
| T3 | [Transformer (3) - 位置编码](/dl/transformer-3) | 正余弦、RoPE、ALiBi |
| T4 | [Transformer (4) - 训练技巧](/dl/transformer-4) | 预热、层归一化、残差设计 |
| T5 | [Transformer (5) - 变体模型](/dl/transformer-5) | Transformer-XL、Longformer、Perceiver |
| T6 | [Transformer (6) - 预训练模型](/dl/transformer-6) | 预训练范式对比（AR / AE / Prefix-LM） |
| T7 | [Transformer (7) - BERT 系列](/dl/transformer-7) | BERT、RoBERTa、ALBERT、ERNIE |
| T8 | [Transformer (8) - GPT 系列](/dl/transformer-8) | GPT-1/2/3/4、RLHF、指令微调 |
| T9 | [Transformer (9) - 多模态模型](/dl/transformer-9) | CLIP、BLIP、LLaVA、多模态对齐 |

### 专题内容

| 序号 | 章节 | 核心内容 |
|------|------|----------|
| S1 | [词向量](/dl/word-vector) | Word2Vec、GloVe、FastText |
| S2 | [句子向量](/dl/sentence-vector) | InferSent、BERT-flow、SimCSE |
| S3 | [CTR 预估（传统方法）](/dl/ctr-classic) | LR、FM、FFM、GBDT+LR |
| S4 | [CTR 预估（神经网络方法 1）](/dl/ctr-nn-1) | DeepFM、DIN、DIEN |
| S5 | [CTR 预估（神经网络方法 2）](/dl/ctr-nn-2) | MMoE、PLE、ESMM、搜索/推荐新进展 |

## 🎯 学习建议

- 学习过机器学习基础后可直接从第 0 章开始
- Transformer 系列是当前重点，建议配合原论文和 [论文笔记](/papers/) 一起阅读
- 实践方面：推荐使用 PyTorch 手动实现关键层（Linear、Conv2d、MultiHeadAttention）加深理解
