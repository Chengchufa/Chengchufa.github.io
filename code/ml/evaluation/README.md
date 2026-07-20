# 模型评估

> 状态：🔜 待补 · 对应笔记：docs/ml/evaluation（待补）

## 🎯 手搓目标

- [ ] 分类指标：准确率 / 精确率 / 召回率 / F1-Score
- [ ] AUC-ROC：ROC 曲线绘制 + 梯形法计算 AUC
- [ ] AUC-PR：Precision-Recall 曲线 + AUC
- [ ] 混淆矩阵：多分类混淆矩阵 + 可视化
- [ ] 交叉验证：K-Fold / Stratified K-Fold / 留一法 LOOCV
- [ ] 回归指标：MAE / MSE / RMSE / R²

## 📁 建议文件结构

```
evaluation/
├── metrics.py       # 分类 + 回归指标
├── roc_pr.py        # ROC / PR 曲线 + AUC
├── cross_val.py     # K-Fold / StratifiedKFold
├── tests/
│   ├── test_metrics.py
│   └── test_cross_val.py
└── example.ipynb    # 各指标计算 + 曲线绘制
```

## 📖 参考资料

- 对应笔记：docs/ml/evaluation.md（待补）
- sklearn.metrics 文档
