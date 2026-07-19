---
title: Attention Is All You Need - 论文精读
---

# Attention Is All You Need 精读笔记

> **论文信息**  
> 标题：*Attention Is All You Need*  
> 作者：Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz Kaiser, Illia Polosukhin  
> 机构：Google Brain, Google Research, University of Toronto  
> 会议：NeurIPS 2017（**Best Paper 提名**）  
> 链接：[arXiv:1706.03762](https://arxiv.org/abs/1706.03762)  
> 代码：官方 Tensor2Tensor，后续 PyTorch 官方已内置 `nn.Transformer`

这篇论文奠定了过去 8 年整个 NLP / 多模态 / 大模型领域的架构基础，影响力不可估量。本笔记逐节精读，突出论文的三大贡献、关键设计决策以及与后世模型演进的关系。

[[toc]]

## 1. 研究动机与核心贡献

### 1.1 当时的主流架构与痛点

在 2017 年之前，序列建模的主流方案是 **RNN（LSTM / GRU）+ 注意力机制** 的 Encoder-Decoder 架构（Bahdanau 2014, Luong 2015），存在三个本质瓶颈：

1. **时序依赖导致并行度差**：RNN 的 $t$ 时刻必须等 $t-1$ 时刻算完，训练无法充分利用 GPU/TPU 硬件
2. **长程依赖梯度衰减**：即使有 LSTM 的门控，极长序列（数百 token）的依赖仍然难以学到
3. **卷积也非完美**：ConvS2S 等基于 CNN 的替代方案虽然可并行，但远距离 token 需要多层卷积才能"看到"彼此

### 1.2 三大核心贡献

::: tip 💡 论文贡献总结
1. **提出纯注意力架构 Transformer**：完全摒弃 RNN 和卷积，仅使用自注意力 + 前馈网络
2. **多头注意力与缩放点积注意力**：解决单头注意力表达力不足、点积数值过大导致 Softmax 饱和的问题
3. **实验验证在机器翻译上的巨大优势**：在 WMT 2014 英德 / 英法任务上以更低训练成本刷新 SOTA，且具备良好的泛化性（解析任务、句法成分）
:::

## 2. 模型架构详解

### 2.1 高层结构总览

沿用 Encoder-Decoder 范式：

- **Encoder**：$N=6$ 层堆叠，每层包含（多头自注意力 + 位置前馈 FFN）两个子层，每个子层接残差连接 + 层归一化
- **Decoder**：$N=6$ 层堆叠，每层包含（掩码多头自注意力 + 交叉注意力 + FFN）三个子层，同样残差+LN
- 最终输出：Linear + Softmax，输出层权重与输入嵌入共享

关键超参数：$d_{\text{model}}=512,\ d_{\text{ff}}=2048,\ h=8,\ d_k=d_v=64$。

### 2.2 缩放点积注意力

定义查询 $Q \in \mathbb{R}^{n \times d_k}$，键 $K \in \mathbb{R}^{m \times d_k}$，值 $V \in \mathbb{R}^{m \times d_v}$：

$$
\text{Attention}(Q, K, V) = \text{Softmax}\left( \frac{Q K^\top}{\sqrt{d_k}} \right) V
$$

::: info 为什么除以 $\sqrt{d_k}$？
当 $d_k$ 很大时，点积 $q \cdot k$ 的方差也变大，导致值落入 Softmax 的饱和区（梯度接近 0）。若 $q_i, k_i$ 独立零均值、方差为 1，则 $q \cdot k$ 的均值为 0、方差为 $d_k$，因此除以 $\sqrt{d_k}$ 使其方差回到 1，保证 Softmax 有非饱和的输入梯度。
:::

### 2.3 多头注意力 Multi-Head Attention

$$
\text{MultiHead}(Q, K, V) = \text{Concat}(\text{head}_1, \dots, \text{head}_h) W^O
$$

$$
\text{其中 } \text{head}_i = \text{Attention}(Q W_i^Q, K W_i^K, V W_i^V)
$$

每个头投影到不同的 $d_k$ 维子空间（$d_k = d_v = d_{\text{model}} / h = 64$），多头并行后再融合。它的价值在于：

- 单头只能学一种注意力模式，多头可同时关注**句法关系 + 语义关联 + 共现模式**等不同子空间
- 总计算量与单头全维度注意力几乎相同（因为子空间被切分）

### 2.4 注意力的三种用法

Transformer 中注意力被巧妙地用在三处：

| 位置 | Q 来源 | K / V 来源 | Mask | 作用 |
|------|--------|-----------|------|------|
| Encoder 自注意力 | 上一层 Enc 输出 | 同左 | 无 | 捕捉输入序列全局依赖 |
| Decoder 掩码自注意力 | 上一层 Dec 输出 | 同左 | 下三角掩码 | 保证自回归（只能看到已生成部分） |
| Enc-Dec 交叉注意力 | Decoder 上一层 | Encoder 顶层 | 无 | 生成时对齐输入相关部分 |

### 2.5 位置前馈网络 FFN

$$
\text{FFN}(x) = \max(0, x W_1 + b_1) W_2 + b_2
$$

内层维度 $d_{\text{ff}} = 4 \times d_{\text{model}} = 2048$。对每个 token 独立应用，权重在位置间共享。后世的 SwiGLU、GeGLU 等激活替换几乎都基于此骨架。

### 2.6 位置编码

因无递归结构，必须显式注入绝对位置信息。论文采用固定正余弦编码：

$$
\text{PE}_{(pos, 2i)} = \sin\left(pos \cdot 10000^{-2i/d}\right), \quad \text{PE}_{(pos, 2i+1)} = \cos\left(pos \cdot 10000^{-2i/d}\right)
$$

作者在 ablation 中对比了**可学习位置编码**，两者效果几乎相同，但选择了正余弦版，理由是：

- 泛化到训练时未见过的更长序列（但实验中效果差异不显著）
- 无需额外参数
- 后续 RoPE / ALiBi 等相对位置编码在此基础上演进

## 3. 训练细节与关键技巧

### 3.1 数据与批处理

- WMT 2014 英→德：~450 万句对，共享 BPE 词表 37k
- WMT 2014 英→法：~3600 万句对，词表 32k
- 动态批处理：按 token 数组织 batch，每批约 25000 source + 25000 target tokens

### 3.2 硬件与训练时长

- 8 张 NVIDIA P100，每台 12-16GB 显存
- Base 模型：训练 100K 步 / 12 小时
- Big 模型：训练 300K 步 / 3.5 天
- 对比当时 SOTA 模型（ConvS2S、MoE）：**训练成本下降一个数量级**

### 3.3 学习率策略（非常关键）

$$
\text{lr} = d_{\text{model}}^{-0.5} \cdot \min\left( \text{step}^{-0.5},\ \text{step} \cdot \text{warmup_steps}^{-1.5} \right)
$$

即：warmup 步数内线性上升，之后按 step 的 $-0.5$ 次方衰减。Base 模型 warmup = 4000 步，Big 模型 warmup = 16000 步。

> 这个 Noam 学习率调度后来被几乎所有 T5 / 大模型预训练沿用。

### 3.4 正则化

1. **残差 Dropout**：每个子层输出（Add 之前）Drop 0.1
2. **嵌入 Dropout**：嵌入 + 位置编码叠加后再 Drop
3. **标签平滑 Label Smoothing**：$\epsilon_{\text{ls}} = 0.1$，略微降低单 token 置信度，提升 BLEU（代价是困惑度变差）

## 4. 实验结果

### 4.1 机器翻译主结果

| 模型 | WMT 2014 EN→DE BLEU | WMT 2014 EN→FR BLEU | 训练计算量（FLOPs × 10¹⁸） |
|------|---------------------|---------------------|---------------------------|
| Best ConvS2S | 26.4 | 40.3 | 95.0 |
| Deep-Att + PosUnk | 27.4 | 39.2 | - |
| GNMT + RL | 24.6 | 39.92 | ~230.0 |
| Transformer (base) | 27.3 | 38.1 | **3.3** |
| Transformer (big) | **28.4** | **41.8** | **2.3 / (ens=9.7)** |

::: warning 核心结论
- 仅 base 单模型就以 **1/30** 的训练算力与 Deep-Att 持平甚至更好
- Big 版在英法任务上超出第二名 1.5 BLEU，这在机器翻译领域属于断崖式提升
:::

### 4.2 消融实验（精华部分）

| 变体 | EN→DE PPL | EN→DE BLEU | 结论 |
|------|-----------|-----------|------|
| baseline（多头 $h=8,\ d_k=64$） | 4.61 | 25.8 | - |
| 单头 $h=1$ | 4.91 | 24.9 | 多头显著优于单头 |
| 头数过多 $h=16,\ d_k=32$ | 4.67 | 25.6 | 每头维度太低也会变差 |
| 移除缩放因子 $1/\sqrt{d_k}$ | 4.88 | 25.0 | 缩放确实解决 Softmax 饱和 |
| 用可学习位置编码替换正余弦 | 4.63 | 25.7 | 两种位置编码效果相当 |
| 移除 FFN（$d_{\text{ff}}=d$） | 4.97 | 25.0 | FFN 对表达力至关重要 |
| 去掉 Dropout | 训练不稳定 | - | Dropout 对 Post-LN 架构必要 |

### 4.3 泛化实验：英语选区解析

直接用 WMT 语料预训练好的 Transformer 初始化，在 Penn Treebank 上微调：

- F1 = 92.7，首次超过当时解析专用模型（Recurrent Neural Network Grammars）
- 说明 Transformer 学到的表示具备通用句法建模能力，而非只是翻译任务的 overfit

## 5. 为什么这篇论文能成功？

我认为它的成功来自三个层次的"恰到好处"：

1. **技术视角正确**：正确识别了 RNN 的瓶颈不是"表示力"而是"训练效率"，因此注意力 + 并行化是正确方向
2. **工程设计完善**：位置编码、缩放因子、学习率 warmup、标签平滑、权重共享等**细节无一不是精调过的组合拳**，任何一处缺失效果都会大幅下降
3. **时代红利**：恰逢 GPU 算力开始爆发、TPU 问世，模型算力与数据规模双双进入指数增长期，Transformer 的并行计算特性正好踩中了趋势

## 6. 论文的不足与后世演进

| 论文局限 | 后世解决方案 |
|---------|-------------|
| 固定正余弦位置编码不支持相对位置 | BERT 用可学习位置编码；GPT-Neo/LLaMA 用 RoPE；LLM 系列用 ALiBi |
| 自注意力 $O(L^2)$ 复杂度，长序列难处理 | Longformer / Perceiver / FlashAttention / GQA / MQA |
| Post-LN 不稳定，需要 warmup | GPT-2 / T5 切换为 Pre-LN；RMSNorm 进一步简化 |
| 固定正余弦没考虑外推 | 位置插值 RoPE、NTK-aware scaling、YaRN |
| 原始结构不是纯解码器 | GPT 系列走 Decoder-only，BERT 走 Encoder-only，统一了方向 |
| 激活 ReLU 表达力有限 | Swish、GELU、SwiGLU（PaLM / LLaMA 标配） |
| 只在翻译验证 | BERT/GPT 证明了在分类 / 生成 / 多任务的普适性 |

## 7. 重读原文的建议

对于第一次读这篇论文的同学，建议阅读顺序：

1. §1 Intro + §3 Architecture → 先整体架构（本文核心贡献）
2. §3.2 Attention 逐行推导 $Q,K,V$ 和缩放因子的直觉
3. §5.3 消融实验 → 看作者如何通过 ablation 验证每个设计决策的必要性
4. §4 Experiment → 看效果到底有多夸张
5. 最后再看 §3.5 位置编码、§5.2 硬件与超参数

## 8. 推荐延伸阅读

- 架构细节补充：[Transformer (1) - 基础结构](/dl/transformer-1)、[Transformer (2) - 注意力机制](/dl/transformer-2)
- BERT 论文：*BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding* (NAACL 2019)
- GPT 系列论文：GPT-1 ~ GPT-4 技术报告
- 训练技巧与长序列：FlashAttention、RoPE、GQA 等新论文
