---
title: 机器学习
outline: [2, 3]
---

# 机器学习

经典机器学习算法的系统性笔记，涵盖监督学习、无监督学习、特征工程、模型评估等核心主题。每章包括算法思想、数学推导、工程优缺点、实践参数建议。

## 📖 章节导航

### 基础篇

| 序号 | 章节 | 核心内容 |
|------|------|----------|
| 0 | [机器学习简介](/ml/intro) | 学习范式、误差分解、过拟合与欠拟合 |
| 1 | [支持向量机 SVM](/ml/svm) | 最大间隔、核技巧、SMO 算法 |
| 2 | [朴素贝叶斯](/ml/naive-bayes) | 贝叶斯决策、拉普拉斯平滑 |
| 3 | [决策树](/ml/decision-tree) | ID3 / C4.5 / CART、剪枝 |
| 4 | [KNN](/ml/knn) | K 近邻、距离度量、KD 树 |

### 进阶篇

| 序号 | 章节 | 核心内容 |
|------|------|----------|
| 5 | [集成学习](/ml/ensemble) | Bagging / Boosting / Stacking |
| 6 | [梯度提升树 GBDT](/ml/gbdt) | GBDT / XGBoost / LightGBM / CatBoost |
| 7 | [特征工程](/ml/feature-engineering) | 特征选择/构造/变换 |
| 8 | [模型评估](/ml/evaluation) | 指标、交叉验证、AUC 计算 |
| 9 | [降维](/ml/dimensionality) | PCA / LDA / t-SNE |
| 10 | [聚类](/ml/clustering) | K-Means / DBSCAN / 层次聚类 / 谱聚类 |

### 高级篇

| 序号 | 章节 | 核心内容 |
|------|------|----------|
| 11 | [半监督学习](/ml/semi-supervised) | 伪标签、一致性正则 |
| 12 | [EM 算法](/ml/em) | 隐变量模型、ELBO 推导 |
| 13 | [最大熵算法](/ml/max-entropy) | 最大熵原理、对偶问题 |
| 14 | [隐马尔可夫模型 HMM](/ml/hmm) | 前向后向、维特比、Baum-Welch |
| 15 | [概率图与 CRF](/ml/crf) | 有向/无向图、条件随机场 |
| 16 | [边际概率推断](/ml/inference) | 变分推断、信念传播 |
| 17 | [主题模型](/ml/topic-model) | LDA、PLSA |

## 🎯 学习建议

- 入门顺序推荐：基础篇（0→1→3→4）→ 进阶篇（5→7→8）→ 按需选择高级篇
- 每学完一章，强烈建议用 scikit-learn 在公开数据集（Iris、Breast Cancer、MNIST、Adult）上做实验
- 推荐配合 [数学基础](/math/) 模块同步查漏补缺
