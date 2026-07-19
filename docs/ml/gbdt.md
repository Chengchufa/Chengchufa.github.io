---
title: 梯度提升树 GBDT
---

# 梯度提升树 GBDT

::: warning 内容撰写中
本章节正在整理撰写。请先阅读已完成的 [支持向量机 SVM](/ml/svm)，或返回 [机器学习总目录](/ml/)。
:::

[[toc]]

## 章节大纲

1. 前向分步加性模型与提升
2. 梯度提升（Friedman）核心推导：用负梯度替代残差
3. GBDT 用于分类 / 回归 / 排序
4. XGBoost：正则化、泰勒二阶展开、近似分裂点
5. LightGBM：直方图、GOSS 采样、EFB 特征绑定
6. CatBoost：有序目标编码、处理类别特征
7. 对比三者优缺点与适用场景
8. 实战：CTR 任务对比 LightGBM / XGBoost
