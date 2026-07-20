# 🧠 机器学习 · 手搓代码合集

> 对应 `docs/ml/` 下 18 章笔记。每章要求：**核心算法只用 NumPy 从 0 实现；sklearn 只作为 ground truth 对比。**

📚 配套笔记：<https://chengchufa.github.io/ml/>

---

## 进度一览

### 基础篇

| # | 章节目录 | 状态 | 对应笔记 |
|---|---------|------|---------|
| 0 | [intro/](./intro/README.md) | 🔜 待补 | 机器学习简介（待补） |
| 1 | [svm/](./svm/README.md) | 🟡 具体 TODO 已拆，待实现 | [支持向量机 SVM](https://chengchufa.github.io/ml/svm) |
| 2 | [naive_bayes/](./naive_bayes/README.md) | 🔜 待补 | 朴素贝叶斯（待补） |
| 3 | [decision_tree/](./decision_tree/README.md) | 🔜 待补 | 决策树（待补） |
| 4 | [knn/](./knn/README.md) | 🔜 待补 | KNN（待补） |

### 进阶篇

| # | 章节目录 | 状态 | 对应笔记 |
|---|---------|------|---------|
| 5 | [ensemble/](./ensemble/README.md) | 🔜 待补 | 集成学习（待补） |
| 6 | [gbdt/](./gbdt/README.md) | 🔜 待补 | GBDT（待补） |
| 7 | [feature_engineering/](./feature_engineering/README.md) | 🔜 待补 | 特征工程（待补） |
| 8 | [evaluation/](./evaluation/README.md) | 🔜 待补 | 模型评估（待补） |
| 9 | [dimensionality/](./dimensionality/README.md) | 🔜 待补 | 降维（待补） |

### 高级篇

| # | 章节目录 | 状态 | 对应笔记 |
|---|---------|------|---------|
| 10 | [clustering/](./clustering/README.md) | 🔜 待补 | 聚类（待补） |
| 11 | [semi_supervised/](./semi_supervised/README.md) | 🔜 待补 | 半监督学习（待补） |
| 12 | [em/](./em/README.md) | 🔜 待补 | EM 算法（待补） |
| 13 | [max_entropy/](./max_entropy/README.md) | 🔜 待补 | 最大熵算法（待补） |
| 14 | [hmm/](./hmm/README.md) | 🔜 待补 | HMM（待补） |
| 15 | [crf/](./crf/README.md) | 🔜 待补 | 条件随机场（待补） |
| 16 | [inference/](./inference/README.md) | 🔜 待补 | 边际概率推断（待补） |
| 17 | [topic_model/](./topic_model/README.md) | 🔜 待补 | 主题模型（待补） |

**建议学习顺序**：按数字 0→1→2→…→17

---

## 总体目标

- [ ] 18 章算法全部从 0 手搓，每章主实现 + 单元测试
- [ ] 每章结果与 sklearn 官方实现对比，误差控制在 1% 以内
- [ ] 至少产出 3 篇专题对比实验（SVM 核函数对比 / GBDT 各参数影响 / 降维可视化）
