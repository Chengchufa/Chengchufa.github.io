---
title: 深度学习
outline: [2, 3]
---

# 深度学习

从感知机到 Transformer 大模型，**系统梳理深度学习核心模型与训练技巧的学习计划**。
重点强化 Transformer 系列内容，共 9 篇笔记覆盖从基础结构到多模态预训练的演进脉络。
每章完成后会包含核心结构图示、关键公式推导、工程调参经验总结。

> 🎯 **当前进度**：21 章规划中，已完成 1 章（Transformer-1 基础结构），其余「待补」。

## 📖 章节导航

### 基础神经网络

| 序号 | 章节 | 核心内容 |
|------|------|----------|
| 0 | （待补）深度学习简介 | 深度学习发展简史、主要应用方向 |
| 1 | （待补）深度前馈神经网络 | 感知机、激活函数、损失函数 |
| 2 | （待补）反向传播算法 | 链式法则、梯度计算、参数初始化 |
| 3 | （待补）正则化 | L1/L2、Dropout、早停、数据增强 |
| 4 | （待补）最优化基础 | SGD、Adam、学习率调度 |
| 5 | （待补）卷积神经网络 CNN | 卷积/池化、ResNet 等经典结构 |
| 6 | （待补）循环神经网络 RNN | LSTM、GRU、Seq2Seq 与注意力 |

### Transformer 系列

| 序号 | 章节 | 核心内容 |
|------|------|----------|
| T1 | [✅ Transformer (1) - 基础结构](/dl/transformer-1) | Encoder-Decoder、整体架构 |
| T2 | （待补）Transformer (2) - 注意力机制 | Self-Attention、Multi-Head、Mask |
| T3 | （待补）Transformer (3) - 位置编码 | 正余弦、RoPE、ALiBi |
| T4 | （待补）Transformer (4) - 训练技巧 | 预热、层归一化、残差设计 |
| T5 | （待补）Transformer (5) - 变体模型 | Transformer-XL、Longformer、Perceiver |
| T6 | （待补）Transformer (6) - 预训练模型 | 预训练范式对比（AR / AE / Prefix-LM） |
| T7 | （待补）Transformer (7) - BERT 系列 | BERT、RoBERTa、ALBERT、ERNIE |
| T8 | （待补）Transformer (8) - GPT 系列 | GPT-1/2/3/4、RLHF、指令微调 |
| T9 | （待补）Transformer (9) - 多模态模型 | CLIP、BLIP、LLaVA、多模态对齐 |

### 专题内容

| 序号 | 章节 | 核心内容 |
|------|------|----------|
| S1 | （待补）词向量 | Word2Vec、GloVe、FastText |
| S2 | （待补）句子向量 | InferSent、BERT-flow、SimCSE |
| S3 | （待补）CTR 预估（传统方法） | LR、FM、FFM、GBDT+LR |
| S4 | （待补）CTR 预估（神经网络方法 1） | DeepFM、DIN、DIEN |
| S5 | （待补）CTR 预估（神经网络方法 2） | MMoE、PLE、ESMM、搜索/推荐新进展 |

## 🎯 学习建议

- 学习过机器学习基础后可直接从第 0 章开始
- Transformer 系列是当前重点，建议配合原论文和 [论文笔记](/papers/) 一起阅读
- 实践方面：推荐使用 PyTorch 手动实现关键层（Linear、Conv2d、MultiHeadAttention）加深理解
