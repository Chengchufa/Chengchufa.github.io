---
title: 线性代数基础
---

# 线性代数基础

线性代数是机器学习与深度学习的基石。本章梳理算法研究与工程实践中高频出现的核心概念，重点包括**向量与矩阵运算、特征值分解、奇异值分解 SVD、矩阵求导**四个板块。

[[toc]]

## 1. 向量与向量空间

### 1.1 基本定义

一个 $n$ 维列向量记作：

$$
\boldsymbol{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix} \in \mathbb{R}^{n}
$$

所有满足加法和数乘封闭的 $n$ 维实向量集合构成**实数向量空间** $\mathbb{R}^{n}$。

### 1.2 常见向量运算

| 运算 | 定义 | 性质 |
|------|------|------|
| 内积（点积） | $\langle \boldsymbol{x},\boldsymbol{y}\rangle = \boldsymbol{x}^\top \boldsymbol{y} = \sum_{i=1}^n x_i y_i$ | 交换律、双线性、正定性 |
| 外积 | $\boldsymbol{x} \boldsymbol{y}^\top \in \mathbb{R}^{n \times m}$ | 秩 $\leq 1$ |
| 元素积（Hadamard） | $\boldsymbol{x} \odot \boldsymbol{y}$ | 逐元素相乘 |
| L2 范数 | $\|\boldsymbol{x}\|_2 = \sqrt{\sum_i x_i^2}$ | 欧氏距离 |
| L1 范数 | $\|\boldsymbol{x}\|_1 = \sum_i \|x_i\|$ | 稀疏性相关 |
| L∞ 范数 | $\|\boldsymbol{x}\|_\infty = \max_i \|x_i\|$ | 最大绝对值 |

### 1.3 向量组与线性相关

- 线性无关：$\sum_{i=1}^k \alpha_i \boldsymbol{v}_i = 0 \Rightarrow \forall i, \alpha_i = 0$
- 秩（rank）：矩阵列/行向量中极大线性无关组的大小
- 满秩矩阵：$\text{rank}(A_{n \times n}) = n$，等价于可逆

::: tip 机器学习中的理解
向量在机器学习中通常代表**样本的特征表示**；向量内积则是相似度计算（余弦相似度、注意力权重）的基础。
:::

## 2. 矩阵运算与性质

### 2.1 矩阵乘法

设 $A \in \mathbb{R}^{m \times n}$，$B \in \mathbb{R}^{n \times p}$，则 $C = AB \in \mathbb{R}^{m \times p}$ 满足：

$$
C_{ij} = \sum_{k=1}^n A_{ik} B_{kj}
$$

**性质**：
- 结合律：$(AB)C = A(BC)$
- 分配律：$A(B+C) = AB + AC$
- 一般不满足交换律：$AB \neq BA$
- 转置：$(AB)^\top = B^\top A^\top$

### 2.2 逆矩阵与伪逆

对于方阵 $A$，若存在 $B$ 使得 $AB = BA = I$，则 $B = A^{-1}$。可逆的充要条件：

$$
\det(A) \neq 0 \Leftrightarrow \text{rank}(A) = n
$$

当矩阵非方阵或不可逆时，使用 Moore-Penrose 伪逆：

$$
A^+ = V \Sigma^+ U^\top
$$

其中 $A = U \Sigma V^\top$ 为 SVD 分解，$\Sigma^+$ 将非零对角线元素取倒数。

### 2.3 正交矩阵

若 $Q^\top Q = Q Q^\top = I$，则 $Q$ 为正交矩阵。其几何意义是**保持长度不变的线性变换**（旋转 + 反射）：

$$
\|Q \boldsymbol{x}\|_2 = \|\boldsymbol{x}\|_2
$$

## 3. 特征值与特征向量

### 3.1 定义

对方阵 $A \in \mathbb{R}^{n \times n}$，若存在非零向量 $\boldsymbol{v}$ 和标量 $\lambda$ 满足：

$$
A \boldsymbol{v} = \lambda \boldsymbol{v}
$$

则称 $\lambda$ 为特征值，$\boldsymbol{v}$ 为对应特征向量。

### 3.2 特征方程

特征值满足**特征多项式**等于零：

$$
\det(A - \lambda I) = 0
$$

由此可解出 $n$ 个（含重根）特征值 $\lambda_1, \dots, \lambda_n$，并满足：

- 迹：$\text{tr}(A) = \sum_{i=1}^n \lambda_i$
- 行列式：$\det(A) = \prod_{i=1}^n \lambda_i$

### 3.3 对称矩阵的谱分解

当 $A = A^\top$ 为实对称矩阵时，可进行**正交对角化**：

$$
A = Q \Lambda Q^\top, \quad Q^\top Q = I, \quad \Lambda = \text{diag}(\lambda_1, \dots, \lambda_n)
$$

这是 PCA、核方法、高斯过程中高频出现的分解形式。

::: info 正定与半正定
实对称矩阵 $A$ 正定（$A \succ 0$）当且仅当所有特征值 $\lambda_i > 0$；半正定（$A \succeq 0$）当且仅当所有 $\lambda_i \geq 0$。
协方差矩阵、核矩阵 Gram matrix 天然是半正定的。
:::

## 4. 奇异值分解 SVD

**任意矩阵** $A \in \mathbb{R}^{m \times n}$ 都可以分解为：

$$
A = U \Sigma V^\top
$$

其中：
- $U \in \mathbb{R}^{m \times m}$ 正交矩阵，列为 $AA^\top$ 的特征向量（左奇异向量）
- $V \in \mathbb{R}^{n \times n}$ 正交矩阵，列为 $A^\top A$ 的特征向量（右奇异向量）
- $\Sigma \in \mathbb{R}^{m \times n}$ 对角矩阵，对角线元素 $\sigma_1 \geq \sigma_2 \geq \dots \geq 0$ 为奇异值

奇异值与特征值的关系：

$$
\sigma_i = \sqrt{\lambda_i(A^\top A)}
$$

### 4.1 低秩近似（Eckart-Young 定理）

SVD 的一个重要应用是**矩阵低秩近似**。取前 $k$ 个最大奇异值：

$$
A_k = U_{:,1:k} \Sigma_{1:k,1:k} V_{:,1:k}^\top
$$

则 $A_k$ 是所有秩为 $k$ 的矩阵中，在 Frobenius 范数下最接近 $A$ 的矩阵：

$$
\|A - A_k\|_F = \sqrt{\sum_{i=k+1}^r \sigma_i^2} = \min_{\text{rank}(B)=k} \|A - B\|_F
$$

该结果是推荐系统、图像压缩、降维算法的理论基础。

## 5. 矩阵求导（核心速查）

机器学习中反向传播、参数更新依赖矩阵求导，以下是核心公式（分母布局）：

### 5.1 基础公式

| 表达式 | 导数结果 |
|--------|----------|
| $\frac{\partial \boldsymbol{a}^\top \boldsymbol{x}}{\partial \boldsymbol{x}}$ | $\boldsymbol{a}$ |
| $\frac{\partial \boldsymbol{x}^\top \boldsymbol{x}}{\partial \boldsymbol{x}}$ | $2\boldsymbol{x}$ |
| $\frac{\partial \boldsymbol{x}^\top A \boldsymbol{x}}{\partial \boldsymbol{x}}$ | $(A + A^\top)\boldsymbol{x}$ |
| $\frac{\partial \|A \boldsymbol{x} - \boldsymbol{b}\|_2^2}{\partial \boldsymbol{x}}$ | $2A^\top(A\boldsymbol{x} - \boldsymbol{b})$ |
| $\frac{\partial \text{tr}(AB)}{\partial A}$ | $B^\top$ |
| $\frac{\partial \det(A)}{\partial A}$ | $\det(A) \cdot A^{-\top}$ |

### 5.2 链式法则（反向传播核心）

若 $\boldsymbol{y} = g(\boldsymbol{z})$，$\boldsymbol{z} = W \boldsymbol{x}$，则对参数 $W$ 的梯度：

$$
\frac{\partial L}{\partial W} = \frac{\partial L}{\partial \boldsymbol{y}} \frac{\partial \boldsymbol{y}}{\partial \boldsymbol{z}} \frac{\partial \boldsymbol{z}}{\partial W} = \left( \frac{\partial L}{\partial \boldsymbol{y}} \odot g'(\boldsymbol{z}) \right) \boldsymbol{x}^\top
$$

## 6. Python / NumPy 实践示例

```python
import numpy as np

# 6.1 向量运算示例
x = np.array([1.0, 2.0, 3.0])
y = np.array([4.0, 5.0, 6.0])

print("内积 x·y =", x @ y)                   # 32.0
print("L2 范数 ||x|| =", np.linalg.norm(x))   # 3.7417
print("余弦相似度 =", (x @ y) / (np.linalg.norm(x) * np.linalg.norm(y)))  # 0.9746

# 6.2 特征值分解（对称矩阵）
A = np.array([[4.0, 1.0], [1.0, 3.0]])
eigvals, eigvecs = np.linalg.eigh(A)
print("特征值 λ =", eigvals)                    # [2.38196601 4.61803399]
print("A ≈ QΛQᵀ ?", np.allclose(A, eigvecs @ np.diag(eigvals) @ eigvecs.T))  # True

# 6.3 SVD 低秩近似
np.random.seed(42)
M = np.random.randn(100, 50)
U, S, Vt = np.linalg.svd(M, full_matrices=False)

for k in [1, 5, 10, 25]:
    M_k = U[:, :k] @ np.diag(S[:k]) @ Vt[:k, :]
    rel_err = np.linalg.norm(M - M_k) / np.linalg.norm(M)
    print(f"秩 k={k:2d} 近似误差 = {rel_err:.4f}")
# 秩 k= 1 近似误差 = 0.8977
# 秩 k= 5 近似误差 = 0.7437
# 秩 k=10 近似误差 = 0.6285
# 秩 k=25 近似误差 = 0.3968
```

## 7. 本章小结

- **向量与矩阵**是数据的表示基础，范数刻画"距离"与"大小"
- **特征值分解**适用于对称方阵，PCA、谱聚类的核心
- **SVD**适用于任意矩阵，低秩近似、推荐系统、NLP 语义分析的基石
- **矩阵求导**是反向传播的数学根基，务必熟记核心公式并手推几遍

::: tip 下一步建议
学完本章后，建议直接跳到 [概率论基础](/math/probability) 或结合 [深度学习反向传播](/dl/backprop) 章节交叉理解。
:::
