# 线性代数基础

> 状态：🟡 具体 TODO 已拆，待实现 · 对应笔记链接：https://chengchufa.github.io/math/linear-algebra

## 🎯 手搓目标

（必须用纯 NumPy，禁调用 numpy.linalg 现成函数，除非 ground truth 对比）

- [ ] 矩阵乘法 matmul(A, B) 三重循环实现 + 分块优化版本
- [ ] 高斯消元解线性方程组 Ax=b（含 LU 分解 + 列主元）
- [ ] 特征值分解 eig(A)：QR 算法 + 对称矩阵加速（对比 np.linalg.eig 误差 < 1e-6）
- [ ] SVD 分解 svd(A)：双边 Jacobi 旋转法实现（对比 np.linalg.svd）
- [ ] Cholesky 分解 cholesky(A)：正定矩阵 LL^T 分解
- [ ] 主成分分析 PCA：基于 SVD / 基于协方差矩阵 两种实现 + 鸢尾花降维 2D 可视化
- [ ] 单元测试覆盖 ≥ 80%：随机生成 100 组矩阵对比 np.linalg

## 📁 建议文件结构

```
linear_algebra/
├── matmul.py          # 矩阵乘法（三重循环 + 分块）
├── solve.py           # 高斯消元 + LU 分解
├── eig.py             # QR 算法特征值分解
├── svd.py             # 双边 Jacobi SVD
├── cholesky.py        # Cholesky 分解
├── pca.py             # PCA（SVD 版 + 协方差版）
├── tests/
│   ├── test_matmul.py
│   ├── test_solve.py
│   ├── test_eig.py
│   ├── test_svd.py
│   ├── test_cholesky.py
│   ├── test_pca.py
│   └── test_all.py
└── example_pca.ipynb  # 鸢尾花 PCA 可视化示例
```

## 📖 参考资料

- 《线性代数及其应用》David C. Lay
- Matrix Cookbook
- 对应笔记：docs/math/linear-algebra.md
