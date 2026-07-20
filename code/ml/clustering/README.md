# 聚类

> 状态：🔜 待补 · 对应笔记：docs/ml/clustering（待补）

## 🎯 手搓目标

- [ ] K-Means：标准 Lloyd 算法 + K-Means++ 初始化（优化初始中心选择）
- [ ] DBSCAN：密度聚类 + ε 邻域 / MinPts 参数 + 核心点/边界点/噪声点识别
- [ ] 层次聚类 Agglomerative：自底向上合并 + 三种 linkage（single/complete/average）
- [ ] 聚类评估：轮廓系数 Silhouette Score + 兰德指数 ARI（有标签时）
- [ ] 对比三种方法在人造数据集（环形/半月形/球形）上的可视化效果

## 📁 建议文件结构

```
clustering/
├── kmeans.py       # K-Means + K-Means++
├── dbscan.py       # DBSCAN
├── hierarchical.py # 层次聚类
├── metrics.py      # 聚类评估指标
├── tests/
│   ├── test_kmeans.py
│   ├── test_dbscan.py
│   └── test_hierarchical.py
└── example.ipynb   # 三种聚类方法对比可视化
```

## 📖 参考资料

- 对应笔记：docs/ml/clustering.md（待补）
- 《统计学习方法》李航 Ch.14
