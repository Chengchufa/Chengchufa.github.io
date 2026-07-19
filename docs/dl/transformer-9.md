---
title: Transformer (9) - 多模态模型
---

# Transformer (9) - 多模态模型

::: warning 内容撰写中
本章节正在整理撰写。请先阅读已完成的 [Transformer (1) - 基础结构](/dl/transformer-1)，或返回 [深度学习总目录](/dl/)。
:::

[[toc]]

## 章节大纲

- 多模态对齐的核心难题：语义鸿沟与模态特征分布差异
- CLIP：图文对比学习，4 亿图文对预训练，零样本分类惊艳
- ALIGN / BLIP / BLIP-2：Bootstrapping 预训练数据，Q-Former 桥接
- FLAVA / CoCa：图文统一模型，编码端和融合端
- 视觉大模型：ViT、Swin Transformer 与多模态的关系
- 多模态对话 / 图文理解：
  - LLaVA：视觉编码器 + Vicuna + 58 万 GPT 生成指令
  - Qwen-VL、InternVL 系列国产多模态
  - GPT-4V、Gemini、Claude 3 系列
- 视频多模态：Video-LLaMA、VideoLLaMA2、GPT-4o Video
- 语音多模态：Whisper、SpeechGPT、AudioLlama
- 多模态对齐技术：LoRA / QLoRA 适配器、Projection、重采样器
- 评测基准：MMBench、MMMU、POPE、Seed-Bench
