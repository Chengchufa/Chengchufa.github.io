# 集成学习

> 状态：🔜 待补 · 对应笔记：docs/ml/ensemble（待补）

## 🎯 手搓目标

- [ ] Bagging：Bootstrap 抽样 + 多棵决策树并行 + 投票/平均
- [ ] Random Forest：Bagging + 随机特征子空间（每棵树随机选部分特征）
- [ ] AdaBoost：前向分步加法模型 + 指数损失 + 加权样本分布更新
- [ ] 对比单棵决策树 vs Bagging vs Random Forest vs AdaBoost 在鸢尾花/波士顿数据集上表现

## 📁 建议文件结构

```
ensemble/
├── bagging.py       # BaggingClassifier / BaggingRegressor
├── random_forest.py # RandomForestClassifier / RandomForestRegressor
├── adaboost.py      # AdaBoostClassifier
├── tests/
│   ├── test_bagging.py
│   ├── test_random_forest.py
│   └── test_adaboost.py
└── example.ipynb    # 集成方法对比可视化
```

## 📖 参考资料

- 对应笔记：docs/ml/ensemble.md（待补）
- 《统计学习方法》李航 Ch.8
