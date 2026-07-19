---
title: Transformer (4) - 训练技巧
---

# Transformer (4) - 训练技巧

::: warning 内容撰写中
本章节正在整理撰写。请先阅读已完成的 [Transformer (1) - 基础结构](/dl/transformer-1)，或返回 [深度学习总目录](/dl/)。
:::

[[toc]]

## 章节大纲

- Pre-LN vs Post-LN 稳定性差异根因
- Noam 学习率调度 + Warmup 的必要性
- 层归一化细节：RMSNorm vs LayerNorm
- 残差连接的 α 缩放（DeepNorm、GPT-3）
- 初始化方案：Mup 超参数迁移、T-Fuse
- 优化器选择：AdamW vs Lion vs SOAP
- 混合精度训练（AMP）：BF16 / FP16、动态损失缩放
- 梯度裁剪：Norm clipping 阈值选择
- 梯度累积与 Large Batch 的等价性
- 分布式训练：DP / DDP / ZeRO / FSDP / TP / PP
- 数据清洗、Tokenizer 训练（BPE / Unigram / WordPiece）
- 训练不稳定诊断：NaN 排查清单、Loss 尖峰、发散恢复
