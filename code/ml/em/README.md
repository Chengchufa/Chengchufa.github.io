# EM 算法

> 状态：🔜 待补 · 对应笔记：docs/ml/em（待补）

## 🎯 手搓目标

- [ ] 高斯混合模型 GMM：K 个高斯分量 + 混合系数 π
- [ ] E 步：基于当前参数计算每个样本属于各分量的后验概率 γ(z_ik)
- [ ] M 步：重新估计 π_k / μ_k / Σ_k（加权均值与加权协方差）
- [ ] 对数似然收敛监测 + 多组随机初始化选最优
- [ ] GMM 聚类可视化：2D 人造数据 + 等高线 + 聚类结果
- [ ] 对比 GMM vs K-Means 在非球形簇上的表现

## 📁 建议文件结构

```
em/
├── gmm.py        # 高斯混合模型 EM 实现
├── tests/
│   └── test_gmm.py
└── example.ipynb # GMM 可视化 + K-Means 对比
```

## 📖 参考资料

- 对应笔记：docs/ml/em.md（待补）
- PRML Ch.9（Mixture Models and EM）
- 《统计学习方法》李航 Ch.9
