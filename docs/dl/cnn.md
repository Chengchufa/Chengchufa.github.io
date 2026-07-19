---
title: 卷积神经网络 CNN
---

# 卷积神经网络 CNN

::: warning 内容撰写中
本章节正在整理撰写。请先阅读已完成的 [Transformer (1) - 基础结构](/dl/transformer-1)，或返回 [深度学习总目录](/dl/)。
:::

[[toc]]

## 章节大纲

- 卷积操作定义：离散 2D 卷积、通道与偏置
- 卷积的平移等变性、权值共享、稀疏交互
- 池化层：Max / Average / Lp 池化；全局平均池化
- 感受野公式：多层堆叠的感受野计算
- 经典网络结构演进：
  - LeNet-5 (1998)
  - AlexNet (2012)：ReLU + GPU + Dropout
  - VGGNet (2014)：小卷积 + 深层堆叠
  - GoogLeNet / Inception (2014)：多尺度卷积
  - ResNet (2015)：残差连接解决退化
  - DenseNet、MobileNet、EfficientNet
- 转置卷积、空洞卷积、深度可分离卷积
- CNN 用于目标检测：YOLO 系列、R-CNN 系列（索引链接）
- 从 CNN 到 ViT：NLP 架构统一视觉
