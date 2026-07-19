---
title: CTR 预估（神经网络方法 2）
---

# CTR 预估（神经网络方法 2）

::: warning 内容撰写中
本章节正在整理撰写。请先阅读已完成的 [Transformer (1) - 基础结构](/dl/transformer-1)，或返回 [深度学习总目录](/dl/)。
:::

[[toc]]

## 章节大纲

- 多任务学习 MTL：
  - 硬共享、软共享、MoE
  - Shared-Bottom、MMoE（多门专家混合，谷歌 2018）
  - PLE（渐进式分层提取）
- CVR 转化预估的样本偏差：
  - ESMM：全样本空间训练，解决 SSB / DSISS
  - ESMM-2 / ESM²：进一步改进
- 序列建模与 Transformer：
  - BST：行为序列 Transformer
  - SDM：短期+长期兴趣分离
  - CAN：兴趣 Capsule 网络
- 冷启动方案：元学习 MAML、内容引导、社交图谱
- 最新进展：
  - CTR 向大模型迁移：CTRL（Meta）、通义千问推荐
  - TDM、MIND、YouTubeDNN 召回模型
- 工业级 Pipeline：
  - 样本：实时流（Kafka）、样本拼接、负采样
  - 训练：分布式 Parameter Server、异步训练
  - 特征：在线/离线一致性、特征回溯体系
  - 评估：AB 测试，线上指标（CTR/CVR/GMV）
