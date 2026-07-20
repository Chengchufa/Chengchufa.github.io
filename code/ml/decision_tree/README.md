# 决策树（ID3 / C4.5 / CART）

> 状态：🔜 待补 · 对应笔记：docs/ml/decision-tree（待补）

## 🎯 手搓目标

- [ ] CART 分类树：Gini 系数准则 + 最优特征/切分点选择
- [ ] CART 回归树：MSE 最小化准则
- [ ] 预剪枝：限制 max_depth / min_samples_split / min_samples_leaf
- [ ] 后剪枝：基于验证集的代价复杂度剪枝（CCP）
- [ ] 决策树可视化：递归打印树结构 + Graphviz / matplotlib 绘图

## 📁 建议文件结构

```
decision_tree/
├── tree.py          # CART 分类树 + 回归树
├── pruning.py       # 预剪枝 + 后剪枝（CCP）
├── tests/
│   ├── test_tree.py
│   └── test_pruning.py
└── example.ipynb    # 分类/回归树 + 剪枝对比可视化
```

## 📖 参考资料

- 对应笔记：docs/ml/decision-tree.md（待补）
- 《统计学习方法》李航 Ch.5
