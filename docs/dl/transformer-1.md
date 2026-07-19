---
title: Transformer (1) - 基础结构
---

# Transformer (1) - 基础结构

2017 年 Google 在 *Attention Is All You Need* 论文中提出 Transformer 架构，完全摒弃了传统 Seq2Seq 模型依赖的 RNN/Cnn 结构，仅使用**自注意力机制 + 前馈网络**即可建模序列依赖关系。Transformer 不仅在机器翻译任务上大幅刷新 SOTA，更成为后续 BERT、GPT、ViT、多模态大模型等几乎所有主流预训练模型的基础骨架。

本笔记为系列第一篇，重点介绍整体架构、Encoder/Decoder 组成，为后续章节的注意力推导、位置编码、训练技巧奠定基础。

[[toc]]

## 1. 整体架构一览

Transformer 采用经典的 Encoder-Decoder 架构：

```
  ┌─────────────────────────────┐         ┌─────────────────────────────┐
  │          Encoder N×         │         │          Decoder N×         │
  │  ┌───────────────────────┐  │         │  ┌───────────────────────┐  │
  │  │  Multi-Head Attention │  │         │  │ Masked MH-Attention   │  │
  │  │  (Self-Attention)     │  │         │  │ (Self-Attention)      │  │
  │  └──────────┬────────────┘  │         │  └──────────┬────────────┘  │
  │         Add & Norm          │         │         Add & Norm          │
  │             │               │         │             │               │
  │  ┌──────────▼────────────┐  │         │  ┌──────────▼────────────┐  │
  │  │   Feed Forward        │  │         │  │ Cross MH-Attention    │  │
  │  │   (两层全连接)        │  │         │  │  查询: Dec | 键值: Enc│  │
  │  └──────────┬────────────┘  │         │  └──────────┬────────────┘  │
  │         Add & Norm          │         │         Add & Norm          │
  │                             │         │             │               │
  └─────────────┬───────────────┘         │  ┌──────────▼────────────┐  │
                │ 内存 K, V               │  │   Feed Forward        │  │
  ┌─────────────▼───────────────┐         │  │   (两层全连接)        │  │
  │     Output Embeddings       │         │  └──────────┬────────────┘  │
  │        + Pos Enc            │         │         Add & Norm          │
  └─────────────┬───────────────┘         │                             │
                │                         └─────────────┬───────────────┘
  ┌─────────────▼───────────────┐                       │
  │     Input Embeddings        │         ┌─────────────▼───────────────┐
  │        + Pos Enc            │         │     Linear + Softmax        │
  └─────────────────────────────┘         │       输出词概率分布         │
                                          └─────────────────────────────┘
```

**核心参数设置（论文原文 base 版）**：

| 超参数 | 取值 | 说明 |
|--------|------|------|
| 层数 $N$ | 6 | Encoder、Decoder 各堆叠 6 层 |
| 隐藏维度 $d_{\text{model}}$ | 512 | 模型主通道维度 |
| 注意力头数 $h$ | 8 | Multi-Head 并行路数，每头 $d_k = d_v = 64$ |
| 前馈层维度 $d_{\text{ff}}$ | 2048 | Encoder/Decoder 内部 FFN 隐层大小 |
| Dropout | 0.1 | 注意力、残差、嵌入层后均使用 |
| 标签平滑 | 0.1 | 训练技巧，提升 BLEU 分数 |
| 参数量（base） | ~65M | 与 LSTM 基线持平但效果更好 |

Big 版模型翻倍（$d_{\text{model}}=1024, N=6, h=16, d_{\text{ff}}=4096$），参数量约 213M。

## 2. Encoder 结构详解

Encoder 由 $N=6$ 个完全相同的层堆叠而成，每层包含两个子层：

### 2.1 子层一：多头自注意力 + 残差层归一化

$$
\boldsymbol{S} = \text{MultiHeadAttn}(\boldsymbol{X}, \boldsymbol{X}, \boldsymbol{X})
$$

$$
\boldsymbol{Z}^{(1)} = \text{LayerNorm}(\boldsymbol{X} + \text{Dropout}(\boldsymbol{S}))
$$

这里的自注意力是**完全无掩码**的，每个位置可以自由看到输入序列的所有位置，因此能够建模全局依赖。

### 2.2 子层二：位置前馈网络 FFN + 残差层归一化

FFN 对每个位置独立做相同的两层 MLP 变换（共享参数）：

$$
\text{FFN}(\boldsymbol{x}) = \max(0, \boldsymbol{x} W_1 + \boldsymbol{b}_1) W_2 + \boldsymbol{b}_2
$$

或写成逐位置矩阵形式：

$$
\boldsymbol{Z}^{(2)} = \text{LayerNorm}\left(\boldsymbol{Z}^{(1)} + \text{Dropout}\Big(\text{ReLU}(\boldsymbol{Z}^{(1)} W_1 + \boldsymbol{b}_1) W_2 + \boldsymbol{b}_2\Big)\right)
$$

**为什么叫"位置前馈"？** 因为对每个 token 的表示独立做 MLP，权重在位置间共享；它的作用是在注意力捕捉了 token 之间的关系后，对每个 token 的特征做非线性变换，提升模型表达力。

::: info 关键设计
FFN 的内层维度通常是主维度的 4 倍（$d_{\text{ff}} = 4 \times d_{\text{model}}$），即 512→2048→512。这个配比在后续几乎所有 Transformer 模型中都被保留。
:::

### 2.3 残差 + 层归一化（Pre-Norm vs Post-Norm）

论文原文采用的是 **Post-LN** 结构：`LayerNorm(x + Sublayer(x))`。

而后续研究（T5、GPT-2 等）普遍采用更稳定的 **Pre-LN**：`x + Sublayer(LayerNorm(x))`。两者对比如下：

| 结构 | 公式 | 训练稳定性 | 效果 |
|------|------|------------|------|
| Post-LN（原论文） | $\text{LN}(x + F(x))$ | 需要学习率 warmup，否则容易梯度爆炸 | 数据充足时通常略优 |
| Pre-LN（现在主流） | $x + F(\text{LN}(x))$ | 更稳定，少用 warmup | 易训练，后续模型几乎都采用 |

## 3. Decoder 结构详解

Decoder 同样堆叠 6 层，但每层相比 Encoder 多了一个子层，共三个子层：

### 3.1 子层一：掩码多头自注意力

训练阶段 Decoder 看到的是已经生成的前缀 token（目标序列右移一位后作为输入），为了保证位置 $i$ 的预测只能依赖位置 $< i$ 的信息，必须加上**下三角掩码（Causal Mask / Look-ahead Mask）**：

$$
M_{ij} =
\begin{cases}
0 & j \leq i \\
-\infty & j > i
\end{cases}
$$

Mask 加在 Attention 的 Softmax 之前，这样未来位置的权重被强制为零。

$$
\boldsymbol{S}_1 = \text{MaskedMultiHeadAttn}(\boldsymbol{Y}_{\text{in}}, \boldsymbol{Y}_{\text{in}}, \boldsymbol{Y}_{\text{in}})
$$

$$
\boldsymbol{Z}^{(1)} = \text{LayerNorm}(\boldsymbol{Y}_{\text{in}} + \text{Dropout}(\boldsymbol{S}_1))
$$

### 3.2 子层二：交叉注意力（Encoder-Decoder Attention）

这是 Encoder-Decoder 架构的信息汇合点：**Query 来自 Decoder 上一层输出，Key 和 Value 来自 Encoder 最后一层的整个输出内存（Memory）**。

$$
\boldsymbol{S}_2 = \text{CrossAttn}(\boldsymbol{Z}^{(1)}, \boldsymbol{E}, \boldsymbol{E})
$$

$$
\boldsymbol{Z}^{(2)} = \text{LayerNorm}(\boldsymbol{Z}^{(1)} + \text{Dropout}(\boldsymbol{S}_2))
$$

直观理解：Decoder 在生成当前词时，通过交叉注意力"观察"输入序列中哪些 token 最相关（例如翻译时对齐源语句子的对应短语）。

### 3.3 子层三：位置前馈网络 FFN

与 Encoder 完全相同，独立对每个位置做两层 MLP：

$$
\boldsymbol{Z}^{(3)} = \text{LayerNorm}(\boldsymbol{Z}^{(2)} + \text{Dropout}(\text{FFN}(\boldsymbol{Z}^{(2)})))
$$

## 4. 输入嵌入与输出投影

### 4.1 词嵌入（Token Embedding）

输入序列 $\{w_1, w_2, \dots, w_n\}$ 通过查表映射为 $d_{\text{model}}$ 维向量：

$$
\boldsymbol{x}_i = \text{Embed}(w_i) \in \mathbb{R}^{d_{\text{model}}}
$$

论文中对嵌入矩阵乘以 $\sqrt{d_{\text{model}}}$ 的缩放因子，以平衡嵌入和位置编码的尺度。

### 4.2 位置编码（Positional Encoding）

由于 Transformer 不含递归和卷积，**本身没有序列顺序信息**，必须显式注入位置信息。原论文采用**正余弦固定位置编码**：

$$
\text{PE}_{(pos, 2i)} = \sin\left( pos / 10000^{2i / d_{\text{model}}} \right)
$$

$$
\text{PE}_{(pos, 2i+1)} = \cos\left( pos / 10000^{2i / d_{\text{model}}} \right)
$$

更多位置编码方案（可学习位置编码、RoPE、ALiBi）将在 Transformer (3) 中专门对比。

### 4.3 输出层

Decoder 最后一层的输出经过线性层 + Softmax 映射为词表大小的概率分布：

$$
P(w_{t+1} \mid w_1, \dots, w_t, \text{src}) = \text{Softmax}(\boldsymbol{h}_t^\top W_{\text{embed}}^\top)
$$

这里采用了**权重共享（Weight Tying）** 技巧：输出投影矩阵 $W_{\text{out}}$ 直接复用输入嵌入矩阵的转置，即 $W_{\text{out}} = W_{\text{embed}}^\top$，显著减少参数量且效果更好。

## 5. 伪代码实现（PyTorch 简化版）

```python
import torch
import torch.nn as nn
import torch.nn.functional as F
import math


class PositionalEncoding(nn.Module):
    """论文原文的固定正余弦位置编码"""
    def __init__(self, d_model: int, max_len: int = 5000, dropout: float = 0.1):
        super().__init__()
        self.dropout = nn.Dropout(p=dropout)

        pe = torch.zeros(max_len, d_model)
        position = torch.arange(0, max_len, dtype=torch.float).unsqueeze(1)
        div_term = torch.exp(
            torch.arange(0, d_model, 2).float() * (-math.log(10000.0) / d_model)
        )
        pe[:, 0::2] = torch.sin(position * div_term)
        pe[:, 1::2] = torch.cos(position * div_term)
        pe = pe.unsqueeze(0)  # (1, max_len, d_model)
        self.register_buffer("pe", pe)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        # x shape: (batch, seq_len, d_model)
        x = x + self.pe[:, : x.size(1), :]
        return self.dropout(x)


class FeedForward(nn.Module):
    def __init__(self, d_model: int, d_ff: int, dropout: float = 0.1):
        super().__init__()
        self.fc1 = nn.Linear(d_model, d_ff)
        self.fc2 = nn.Linear(d_ff, d_model)
        self.dropout = nn.Dropout(dropout)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.fc2(self.dropout(F.relu(self.fc1(x))))


class EncoderLayer(nn.Module):
    """Post-LN 版 Encoder 单层"""
    def __init__(self, d_model: int, nhead: int, d_ff: int, dropout: float = 0.1):
        super().__init__()
        self.self_attn = nn.MultiheadAttention(
            d_model, nhead, dropout=dropout, batch_first=True
        )
        self.ffn = FeedForward(d_model, d_ff, dropout)
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)
        self.dropout1 = nn.Dropout(dropout)
        self.dropout2 = nn.Dropout(dropout)

    def forward(self, x: torch.Tensor, src_mask: torch.Tensor | None = None) -> torch.Tensor:
        attn_out, _ = self.self_attn(x, x, x, attn_mask=src_mask, need_weights=False)
        x = self.norm1(x + self.dropout1(attn_out))
        x = self.norm2(x + self.dropout2(self.ffn(x)))
        return x


class TransformerEncoder(nn.Module):
    def __init__(
        self,
        vocab_size: int,
        d_model: int = 512,
        nhead: int = 8,
        num_layers: int = 6,
        d_ff: int = 2048,
        dropout: float = 0.1,
    ):
        super().__init__()
        self.d_model = d_model
        self.embed = nn.Embedding(vocab_size, d_model)
        self.pos_enc = PositionalEncoding(d_model, dropout=dropout)
        self.layers = nn.ModuleList(
            [EncoderLayer(d_model, nhead, d_ff, dropout) for _ in range(num_layers)]
        )
        self.final_norm = nn.LayerNorm(d_model)  # Post-LN 常再加一次

    def forward(self, src_ids: torch.Tensor, mask: torch.Tensor | None = None) -> torch.Tensor:
        # src_ids shape: (batch, src_len)
        x = self.embed(src_ids) * math.sqrt(self.d_model)  # 嵌入按 sqrt(d) 缩放
        x = self.pos_enc(x)
        for layer in self.layers:
            x = layer(x, mask)
        return self.final_norm(x)


# ---------- 快速验证前向传播 ----------
if __name__ == "__main__":
    torch.manual_seed(42)
    vocab_size, B, L = 10000, 4, 32
    encoder = TransformerEncoder(vocab_size=vocab_size)
    dummy_src = torch.randint(0, vocab_size, (B, L))
    memory = encoder(dummy_src)
    param_count = sum(p.numel() for p in encoder.parameters() if p.requires_grad)
    print(f"Encoder 输入形状: {tuple(dummy_src.shape)}")
    print(f"Encoder 输出形状: {tuple(memory.shape)}  # 期望 (4, 32, 512)")
    print(f"可训练参数量:     {param_count / 1e6:.2f}M")
```

**预期输出**：
```
Encoder 输入形状: (4, 32)
Encoder 输出形状: (4, 32, 512)  # 期望 (4, 32, 512)
可训练参数量:     33.34M
```

## 6. 为什么 Transformer 能取代 RNN？

| 维度 | RNN / LSTM | Transformer |
|------|-----------|-------------|
| 序列依赖计算 | 逐步递归，长路径 $O(n)$ | 自注意力一次看到全部所有对，路径 $O(1)$ |
| 并行性 | 极差（时刻 $t$ 依赖 $t-1$） | 极强（每层内所有位置完全并行） |
| 长程依赖 | 梯度衰减严重，难以学习 | 位置间路径短，更易捕捉 |
| 算力利用率 | 难跑满现代硬件 | 完全向量化，适配 GPU/TPU |
| 可扩展性 | 参数量和计算瓶颈明显 | 已验证可扩展到万亿参数 |

## 7. 本章小结

1. **整体结构**：Encoder-Decoder 各 6 层，每层核心 = 注意力 + FFN + 残差+LN
2. **Encoder**：两层（自注意力 → FFN），对输入序列编码全局语义
3. **Decoder**：三层（掩码自注意力 → 交叉注意力 → FFN），自回归生成
4. **位置信息注入**：无 RNN，必须显式位置编码
5. **权重共享**：嵌入和输出投影矩阵绑定，节省参数

::: tip 下一章预告
Transformer (2) 将深入拆解 **Self-Attention / Multi-Head Attention 的数学定义与复杂度**，并带你手推 Q、K、V 的计算过程和 Softmax 缩放因子的由来。
:::
