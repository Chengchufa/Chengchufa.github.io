---
title: 支持向量机 SVM
---

# 支持向量机 SVM

支持向量机（Support Vector Machine, SVM）是 1995 年由 Cortes 和 Vapnik 提出的经典二分类算法。凭借**最大间隔原理、核技巧、凸优化**三大核心优势，SVM 在深度学习普及之前长期占据机器学习的头把交椅，至今仍是小样本、高维场景下的强力基线。

[[toc]]

## 1. 最大间隔分类器

### 1.1 问题定义

给定线性可分训练集 $\{(\boldsymbol{x}_i, y_i)\}_{i=1}^N$，其中 $y_i \in \{-1, +1\}$。目标是求一个分离超平面：

$$
\boldsymbol{w}^\top \boldsymbol{x} + b = 0
$$

使得两类样本被正确分开且间隔最大。

### 1.2 函数间隔与几何间隔

对单个样本 $(\boldsymbol{x}_i, y_i)$，定义**函数间隔**：

$$
\hat{\gamma}_i = y_i (\boldsymbol{w}^\top \boldsymbol{x}_i + b)
$$

将 $(\boldsymbol{w}, b)$ 做尺度归一化后得到**几何间隔**（即样本点到超平面的真实距离）：

$$
\gamma_i = \frac{\hat{\gamma}_i}{\|\boldsymbol{w}\|_2} = y_i \left( \frac{\boldsymbol{w}}{\|\boldsymbol{w}\|}^\top \boldsymbol{x}_i + \frac{b}{\|\boldsymbol{w}\|} \right)
$$

数据集的几何间隔：$\gamma = \min_{i} \gamma_i$。

### 1.3 最大间隔优化问题

目标为最大化几何间隔 $\gamma$，等价于在约束 $\hat{\gamma}_i \geq \hat{\gamma}$ 下最小化 $\|\boldsymbol{w}\|^2$。通过将最小函数间隔固定为 $\hat{\gamma}=1$（参数等比例缩放不影响超平面），得到经典的**硬间隔 SVM 原问题**：

$$
\min_{\boldsymbol{w}, b} \quad \frac{1}{2} \|\boldsymbol{w}\|^2
$$

$$
\text{s.t.} \quad y_i(\boldsymbol{w}^\top \boldsymbol{x}_i + b) \geq 1, \quad i = 1, \dots, N
$$

这是一个**凸二次规划**问题，具有唯一全局最优解。

## 2. 对偶问题与支持向量

### 2.1 拉格朗日函数

为原问题引入拉格朗日乘子 $\alpha_i \geq 0$，构造拉格朗日函数：

$$
\mathcal{L}(\boldsymbol{w}, b, \boldsymbol{\alpha}) = \frac{1}{2}\|\boldsymbol{w}\|^2 - \sum_{i=1}^N \alpha_i \left[ y_i(\boldsymbol{w}^\top \boldsymbol{x}_i + b) - 1 \right]
$$

### 2.2 对偶推导

原问题等价于 $\min_{\boldsymbol{w},b} \max_{\boldsymbol{\alpha} \geq 0} \mathcal{L}$，根据 Slater 条件（凸问题 + 存在严格可行解），可以交换 min 与 max 顺序求解对偶：

$$
\max_{\boldsymbol{\alpha} \geq 0} \min_{\boldsymbol{w},b} \mathcal{L}(\boldsymbol{w},b,\boldsymbol{\alpha})
$$

**Step 1 — 对 $\boldsymbol{w}, b$ 求极小**

分别令偏导为 0：

$$
\frac{\partial \mathcal{L}}{\partial \boldsymbol{w}} = \boldsymbol{w} - \sum_{i=1}^N \alpha_i y_i \boldsymbol{x}_i = 0 \quad \Rightarrow \quad \boldsymbol{w}^* = \sum_{i=1}^N \alpha_i^* y_i \boldsymbol{x}_i
$$

$$
\frac{\partial \mathcal{L}}{\partial b} = - \sum_{i=1}^N \alpha_i y_i = 0 \quad \Rightarrow \quad \sum_{i=1}^N \alpha_i^* y_i = 0
$$

将结果代回拉格朗日函数，消去 $\boldsymbol{w}, b$，得到对偶问题的目标（称为 $W(\boldsymbol{\alpha})$）：

$$
W(\boldsymbol{\alpha}) = \sum_{i=1}^N \alpha_i - \frac{1}{2} \sum_{i=1}^N \sum_{j=1}^N \alpha_i \alpha_j y_i y_j \boldsymbol{x}_i^\top \boldsymbol{x}_j
$$

**Step 2 — 对 $\boldsymbol{\alpha}$ 求极大**

最终对偶问题为：

$$
\max_{\boldsymbol{\alpha}} \quad \sum_{i=1}^N \alpha_i - \frac{1}{2} \sum_{i,j} \alpha_i \alpha_j y_i y_j \boldsymbol{x}_i^\top \boldsymbol{x}_j
$$

$$
\text{s.t.} \quad \sum_{i=1}^N \alpha_i y_i = 0, \quad \alpha_i \geq 0, \; i = 1, \dots, N
$$

### 2.3 KKT 条件与支持向量

最优解满足 KKT 互补松弛条件：

$$
\alpha_i^* \cdot \left[ y_i(\boldsymbol{w}^{*\top} \boldsymbol{x}_i + b^*) - 1 \right] = 0
$$

- 若 $\alpha_i^* > 0$，则必须 $y_i(\boldsymbol{w}^{*\top} \boldsymbol{x}_i + b^*) = 1$，即该样本**恰好落在间隔边界上**，称为**支持向量**
- 若 $\alpha_i^* = 0$，则样本对最终分类超平面无影响

> **关键点**：SVM 的最终参数仅由少数支持向量决定，具有天然的稀疏性，这也是算法名称"支持向量机"的由来。

## 3. 软间隔与线性不可分

当数据存在噪声点导致线性不可分时，引入**松弛变量** $\xi_i \geq 0$，允许部分样本不满足间隔约束，得到**软间隔 SVM**（即 L1-SVM）：

$$
\min_{\boldsymbol{w}, b, \boldsymbol{\xi}} \quad \frac{1}{2}\|\boldsymbol{w}\|^2 + C \sum_{i=1}^N \xi_i
$$

$$
\text{s.t.} \quad y_i(\boldsymbol{w}^\top \boldsymbol{x}_i + b) \geq 1 - \xi_i, \quad \xi_i \geq 0
$$

其中超参数 $C > 0$ 控制**间隔最大化**与**误分类惩罚**的权衡：
- $C$ 越大 → 越难容忍错分 → 间隔越窄 → 容易过拟合
- $C$ 越小 → 间隔越宽 → 允许更多错分 → 偏向欠拟合

对应的对偶问题仅增加了 $\alpha_i \leq C$ 的约束：

$$
\max_{\boldsymbol{\alpha}} \quad \sum_{i=1}^N \alpha_i - \frac{1}{2} \sum_{i,j} \alpha_i \alpha_j y_i y_j \boldsymbol{x}_i^\top \boldsymbol{x}_j
$$

$$
\text{s.t.} \quad \sum_{i=1}^N \alpha_i y_i = 0, \quad 0 \leq \alpha_i \leq C
$$

## 4. 核技巧与非线性 SVM

### 4.1 核函数定义

对于**非线性可分**数据，通过映射 $\phi: \mathcal{X} \to \mathcal{H}$ 将样本映射到高维（甚至无穷维）特征空间，在该空间中线性可分。对偶问题中只出现样本的内积，于是定义**核函数**：

$$
K(\boldsymbol{x}_i, \boldsymbol{x}_j) = \phi(\boldsymbol{x}_i)^\top \phi(\boldsymbol{x}_j)
$$

只需计算低维空间的核函数值，**无需显式写出高维映射**，巧妙规避了维度爆炸——这就是著名的**核技巧**（Kernel Trick）。

### 4.2 常见核函数

| 核名称 | 表达式 | 适用场景 |
|--------|--------|----------|
| 线性核 | $K(\boldsymbol{x},\boldsymbol{z}) = \boldsymbol{x}^\top \boldsymbol{z}$ | 特征维度已经很高、样本量大 |
| 多项式核 | $K = (\gamma \boldsymbol{x}^\top \boldsymbol{z} + r)^d$ | 图像、结构化特征 |
| **RBF 高斯核** | $K = \exp(-\gamma \|\boldsymbol{x} - \boldsymbol{z}\|^2)$ | **通用万能核，默认首选** |
| Sigmoid 核 | $K = \tanh(\gamma \boldsymbol{x}^\top \boldsymbol{z} + r)$ | 特定条件下等价浅层神经网络 |
| 自定义核 | 任意 Mercer 半正定函数 | 序列（字符串核）、图（WL 核）等 |

### 4.3 最终决策函数

引入核函数后，分类决策函数写为：

$$
f(\boldsymbol{x}) = \text{sign}\left( \sum_{i \in \text{SV}} \alpha_i^* y_i K(\boldsymbol{x}_i, \boldsymbol{x}) + b^* \right)
$$

其中求和仅遍历支持向量样本（$\alpha_i^* > 0$），$b^*$ 可通过任意支持向量的 KKT 条件反解：

$$
b^* = y_s - \sum_{i \in \text{SV}} \alpha_i^* y_i K(\boldsymbol{x}_i, \boldsymbol{x}_s), \quad \forall s: 0 < \alpha_s^* < C
$$

## 5. SMO 算法简述

SVM 对偶问题可以用通用 QP 求解器，但 Platt 1998 年提出的**序列最小优化（SMO）** 是 SVM 的标配高效算法。核心思想：

1. 每次挑选两个违反 KKT 最严重的乘子 $\alpha_i, \alpha_j$ 作为优化变量，其余固定
2. 由于存在线性约束 $\sum \alpha_i y_i = 0$，两个变量的子问题可以**解析求解**（无需迭代）
3. 循环迭代直到所有乘子满足 KKT 条件收敛

## 6. 代码实战：乳腺癌分类

```python
import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, classification_report, roc_auc_score

# 1. 数据准备
X, y = load_breast_cancer(return_X_y=True)
y[y == 0] = -1  # SVM 标签采用 +1 / -1
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42, stratify=y
)

scaler = StandardScaler()
X_train_std = scaler.fit_transform(X_train)
X_test_std = scaler.transform(X_test)

# 2. 训练 SVM (RBF 核)
clf = SVC(
    C=1.0,
    kernel="rbf",
    gamma="scale",
    probability=True,
    random_state=42,
)
clf.fit(X_train_std, y_train)

# 3. 模型评估
y_pred = clf.predict(X_test_std)
y_prob = clf.predict_proba(X_test_std)[:, 1]

print(f"支持向量数量: {clf.n_support_}，占比 {sum(clf.n_support_) / len(y_train):.2%}")
print(f"测试集准确率: {accuracy_score(y_test, y_pred):.4f}")
print(f"ROC-AUC:      {roc_auc_score(y_test, y_prob):.4f}")
print("\n分类报告:")
print(classification_report(y_test, y_pred, digits=4))

# 4. 调参演示：网格搜索 C 与 gamma
from sklearn.model_selection import GridSearchCV

param_grid = {
    "C": [0.01, 0.1, 1.0, 10.0, 100.0],
    "gamma": ["scale", 0.001, 0.01, 0.1, 1.0],
}
grid = GridSearchCV(
    SVC(kernel="rbf", random_state=42),
    param_grid,
    cv=5,
    scoring="roc_auc",
    n_jobs=-1,
)
grid.fit(X_train_std, y_train)

print(f"\n网格搜索最优参数: {grid.best_params_}")
print(f"最优 5 折交叉验证 AUC: {grid.best_score_:.4f}")
best = grid.best_estimator_
print(f"测试集 AUC: {roc_auc_score(y_test, best.decision_function(X_test_std)):.4f}")
```

**典型输出**：
```
支持向量数量: [31 31]，占比 14.55%
测试集准确率: 0.9790
ROC-AUC:      0.9965
...
网格搜索最优参数: {'C': 10.0, 'gamma': 0.01}
最优 5 折交叉验证 AUC: 0.9926
测试集 AUC: 0.9970
```

## 7. 优缺点总结

| 优点 | 缺点 |
|------|------|
| 具有严格的凸优化理论保证，全局最优 | 大规模训练（$N > 10^5$）较慢，复杂度 $O(N^2 \sim N^3)$ |
| 核技巧天然适配非线性场景 | 核函数与超参数对结果影响大，调参成本较高 |
| 解具有稀疏性，预测速度快 | 对异常点敏感，需要仔细处理特征尺度 |
| 小样本泛化能力通常优于 LR / 决策树 | 多分类需要改造（一对多 / 一对一 / 结构化） |
| 理论可解释性强，间隔边界有统计学习保证 | 概率输出需额外训练 Platt Scaling，非原生 |

## 8. 本章小结

SVM 的三条主线：
1. **最大间隔** → 泛化能力的统计保障
2. **对偶形式 + KKT** → 稀疏解与优美的数学结构
3. **核技巧** → 低维输入到高维特征空间的非线性映射

尽管在大数据和深度学习时代 SVM 不再是首选，但它的思想（间隔、核方法、对偶）深刻影响了整个机器学习领域，是每个算法工程师必须吃透的经典。

::: tip 延伸阅读
- 下一章推荐：[朴素贝叶斯](/ml/naive-bayes) 与 [集成学习](/ml/ensemble)
- 数学推导基础：[线性代数 SVD 部分](/math/linear-algebra#_4-奇异值分解-svd)
- 实践建议：SVM 在表格数据中小样本 + 强特征工程下仍非常有竞争力
:::
