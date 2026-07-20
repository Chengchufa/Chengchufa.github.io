# 机器学习简介

> 状态：🔜 待补 · 对应笔记：docs/ml/intro（待补）

## 🎯 手搓目标

- [ ] 误差分解：Bias-Variance Tradeoff 演示（模拟不同模型复杂度的偏差/方差/噪声）
- [ ] 过拟合/欠拟合曲线可视化：训练误差 + 验证误差 vs 模型复杂度 / 训练数据量
- [ ] 学习曲线（Learning Curve）：训练集大小 vs 训练/验证分数
- [ ] 验证曲线（Validation Curve）：超参数 vs 训练/验证分数

## 📁 建议文件结构

```
intro/
├── bias_variance.py    # 偏差方差分解演示
├── curves.py           # 学习曲线 + 验证曲线
├── tests/
│   └── test_intro.py
└── example.ipynb       # Bias-Variance + 曲线可视化
```

## 📖 参考资料

- 对应笔记：docs/ml/intro.md（待补）
- Andrew Ng ML Course Week 1-3
