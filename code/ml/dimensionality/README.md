# 降维

> 状态：🔜 待补 · 对应笔记：docs/ml/dimensionality（待补）

## 🎯 手搓目标

- [ ] PCA：基于协方差矩阵特征值分解（调用 math 模块）+ 可选 SVD 版
- [ ] t-SNE 最小实现：简化高斯核 + 梯度下降优化高维→低维映射（t-分布替代高斯）
- [ ] 对比 PCA vs t-SNE 在 MNIST 子集 / 鸢尾花上 2D/3D 可视化效果
- [ ] 解释方差比：PCA 各主成分解释方差 + 累积方差曲线

## 📁 建议文件结构

```
dimensionality/
├── pca.py         # PCA 实现
├── tsne.py        # t-SNE 简化实现
├── tests/
│   ├── test_pca.py
│   └── test_tsne.py
└── example.ipynb  # MNIST / 鸢尾花 2D 可视化对比
```

## 📖 参考资料

- 对应笔记：docs/ml/dimensionality.md（待补）
- t-SNE 原论文：van der Maaten & Hinton 2008
