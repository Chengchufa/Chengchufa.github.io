# 梯度提升树 GBDT

> 状态：🔜 待补 · 对应笔记：docs/ml/gbdt（待补）

## 🎯 手搓目标

- [ ] GBDT 分类：对数损失（LogLoss）+ 负梯度拟合 + 多分类 One-vs-Rest
- [ ] GBDT 回归：MSE 损失 + 残差拟合
- [ ] 学习率 shrinkage：每棵树权重乘 η，控制过拟合
- [ ] 特征重要性：基于分裂次数 / 增益计算
- [ ] 对比不同 learning_rate / n_estimators / max_depth 在数据集上的表现

## 📁 建议文件结构

```
gbdt/
├── gbdt.py        # GBDTClassifier + GBDTRegressor
├── tests/
│   └── test_gbdt.py
└── example.ipynb  # 超参数调参对比 + 特征重要性可视化
```

## 📖 参考资料

- 对应笔记：docs/ml/gbdt.md（待补）
- 《统计学习方法》李航 Ch.8 Boosting
- XGBoost / LightGBM 原论文思想参考
