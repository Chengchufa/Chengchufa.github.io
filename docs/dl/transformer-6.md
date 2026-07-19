---
title: Transformer (6) - 预训练模型范式
---

# Transformer (6) - 预训练模型范式

::: warning 内容撰写中
本章节正在整理撰写。请先阅读已完成的 [Transformer (1) - 基础结构](/dl/transformer-1)，或返回 [深度学习总目录](/dl/)。
:::

[[toc]]

## 章节大纲

- 迁移学习的发展：从 ImageNet 预训练到 NLP 预训练
- 预训练三大范式对比：
  - AR 自回归（GPT 系列）：左到右生成式
  - AE 自编码（BERT 系列）：掩码语言模型
  - Prefix-LM / Seq2Seq（T5、UL2）：前缀双向 + 后缀生成
- 目标函数详解：MLM、PLM、CLM、RTD、替换 token 检测
- 多任务预训练：T0 / ExT5 / FLAN 系列
- 数据配比与预训练数据工程：Common Crawl 清洗策略
- 后训练：SFT（监督微调） + RLHF（RL 从人类反馈）+ DPO
- 继续预训练 vs 从零训练：何时选择哪个？
