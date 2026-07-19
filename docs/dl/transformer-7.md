---
title: Transformer (7) - BERT 系列
---

# Transformer (7) - BERT 系列

::: warning 内容撰写中
本章节正在整理撰写。请先阅读已完成的 [Transformer (1) - 基础结构](/dl/transformer-1)，或返回 [深度学习总目录](/dl/)。
:::

[[toc]]

## 章节大纲

- BERT 原论文：MLM + NSP 两个预训练目标，110M / 340M
- 细调下游任务：分类、序列标注、抽取式 QA、句子对
- BERT 改进系列：
  - RoBERTa：去掉 NSP、更大 batch 更长步数、动态 MLM
  - ALBERT：参数共享 + 因子分解嵌入，显著降参
  - ERNIE（百度）：短语 / 实体级掩码 + 知识融合
  - SpanBERT：Span 掩码 + SBO，抽取 QA 更强
  - ELECTRA：RTD 替换 token 判别，1/4 算力等价 BERT
  - MacBERT、WoBERT：中文 BERT 优化
- DeBERTa：解耦注意力，位置与内容分开编码
- 用 HuggingFace Transformers 微调 BERT 的完整 Pipeline
