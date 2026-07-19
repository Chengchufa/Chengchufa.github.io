---
title: 词向量
---

# 词向量

::: warning 内容撰写中
本章节正在整理撰写。请先阅读已完成的 [Transformer (1) - 基础结构](/dl/transformer-1)，或返回 [深度学习总目录](/dl/)。
:::

[[toc]]

## 章节大纲

- 从 One-Hot 到分布式表示：维度灾难与语义相似
- SVD 分解方法：LSA 潜在语义分析
- Word2Vec（2013）：预测 vs 计数两种视角
  - Skip-gram + 负采样（SGNS）完整推导
  - CBOW：上下文预测中心词
  - Hierarchical Softmax：哈夫曼树加速
- GloVe：全局词共现矩阵 + 加权最小二乘
- FastText：字符 N-gram 子词，解决 OOV
- 中文词向量：搜狗、腾讯、百度各开源预训练
- 上下文相关词向量：ELMo（双向 LSTM）
- 进入 Transformer 时代：BERT 嵌入层 vs 词向量
- 评估方法：词类比、词相似、WS-353 / SimLex-999
- 代码实战：gensim 训练 Word2Vec + FastText + 可视化 t-SNE
