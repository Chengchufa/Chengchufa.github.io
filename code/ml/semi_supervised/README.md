# 半监督学习

> 状态：🔜 待补 · 对应笔记：docs/ml/semi-supervised（待补）

## 🎯 手搓目标

- [ ] Self-training（自训练）：基分类器 + 高置信度伪标签迭代加入训练集
- [ ] Label Propagation（标签传播）：基于图的相似性矩阵 + 标签扩散迭代
- [ ] 对比有监督（仅用少量标注）vs 半监督（用未标注数据）在分类任务上的准确率提升
- [ ] 标签传播可视化：图结构 + 标签传播过程热力图

## 📁 建议文件结构

```
semi_supervised/
├── self_training.py   # Self-training
├── label_propagation.py # Label Propagation
├── tests/
│   ├── test_self_training.py
│   └── test_label_propagation.py
└── example.ipynb      # 半监督 vs 纯监督对比 + 标签传播可视化
```

## 📖 参考资料

- 对应笔记：docs/ml/semi-supervised.md（待补）
- Label Propagation 原论文：Zhu & Ghahramani 2002
