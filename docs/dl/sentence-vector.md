---
title: 句子向量
---

# 句子向量

::: warning 内容撰写中
本章节正在整理撰写。请先阅读已完成的 [Transformer (1) - 基础结构](/dl/transformer-1)，或返回 [深度学习总目录](/dl/)。
:::

[[toc]]

## 章节大纲

- 为什么需要句子向量？语义检索、聚类、RAG 的核心
- 无监督方法：
  - 词向量平均（GloVe avg / TF-IDF 加权）
  - SIF：平滑逆频率 + 去除第一主成分
  - InferSent：孪生 BiLSTM 监督
  - BERT-flow / BERT-whitening：高斯化白化
  - ConSERT：对比学习，增强策略
- SimCSE：简单但强大的对比学习
  - 无监督 SimCSE：Dropout 作正例
  - 有监督 SimCSE：NLI 数据构造正负样本
- Sentence-T5、GTE、BGE、M3E 中文 SOTA 向量模型
- 向量检索引擎：FAISS、Milvus、pgvector、Qdrant
- MTEB / C-MTEB 评测基准
- 实战：用 BGE-M3 构建中文 RAG 检索系统
