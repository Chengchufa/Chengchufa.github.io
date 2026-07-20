# 支持向量机 SVM

> 状态：🟡 具体 TODO 已拆，待实现 · 对应笔记链接：https://chengchufa.github.io/ml/svm

## 🎯 手搓目标

- [ ] 硬间隔线性 SVM：SMO 简化版（两变量启发式选择 + KKT 条件检查）
- [ ] 软间隔 SVM：引入松弛变量 + C 参数调参接口
- [ ] 核技巧 SVM：Linear / RBF / Polynomial 3 种核函数 + 对比 sklearn.svm.SVC 误差 < 1%
- [ ] 多分类 SVM：One-vs-Rest 与 One-vs-One 两种策略
- [ ] 鸢尾花数据集 2D 可视化：画决策边界 + 支持向量高亮
- [ ] SMO 收敛性实验：不同 toler / max_passes 组合对收敛速度影响

## 📁 建议文件结构

```
svm/
├── svm.py           # 主类 SVM（SMO 算法）
├── kernels.py       # Linear / RBF / Polynomial 核函数
├── multiclass.py    # OvR / OvO 多分类
├── tests/
│   ├── test_svm.py
│   ├── test_kernels.py
│   └── test_multiclass.py
└── example_iris.ipynb  # 鸢尾花决策边界可视化
```

## 📖 参考资料

- 《统计学习方法》李航 Ch.7
- Platt 1998 SMO 论文
- 对应笔记：docs/ml/svm.md
