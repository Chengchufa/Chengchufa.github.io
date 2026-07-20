# K 近邻 KNN

> 状态：🔜 待补 · 对应笔记：docs/ml/knn（待补）

## 🎯 手搓目标

- [ ] Brute-force 实现：距离矩阵 + 排序选 Top-K
- [ ] KD-tree 实现：建树 + 最近邻搜索（含回溯剪枝）
- [ ] 距离度量：欧氏距离 / 曼哈顿距离 / 余弦相似度
- [ ] 分类（投票）+ 回归（平均）两种任务模式
- [ ] 对比 KD-tree 与 Brute-force 在不同数据量下的查询速度

## 📁 建议文件结构

```
knn/
├── knn.py         # KNNClassifier + KNNRegressor
├── kdtree.py      # KD-tree 实现
├── distances.py   # 距离度量函数
├── tests/
│   ├── test_knn.py
│   └── test_kdtree.py
└── example.ipynb  # 不同数据量下速度对比
```

## 📖 参考资料

- 对应笔记：docs/ml/knn.md（待补）
- 《统计学习方法》李航 Ch.3
