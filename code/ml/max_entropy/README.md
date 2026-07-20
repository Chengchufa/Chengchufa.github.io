# 最大熵模型

> 状态：🔜 待补 · 对应笔记：docs/ml/max-entropy（待补）

## 🎯 手搓目标

- [ ] 最大熵分类器：特征函数 f_i(x, y) 定义 + 约束条件
- [ ] IIS（改进迭代缩放算法）：δ 求解 + 参数 λ 更新
- [ ] 可选：梯度下降 / L-BFGS 替代 IIS 作为优化方法
- [ ] 文本分类示例：简单特征模板 + 二分类/多分类任务

## 📁 建议文件结构

```
max_entropy/
├── maxent.py      # 最大熵模型 + IIS 训练
├── features.py    # 特征函数模板
├── tests/
│   └── test_maxent.py
└── example.ipynb  # 文本分类示例
```

## 📖 参考资料

- 对应笔记：docs/ml/max-entropy.md（待补）
- 《统计学习方法》李航 Ch.6
- IIS 原论文：Pietra et al. 1997
