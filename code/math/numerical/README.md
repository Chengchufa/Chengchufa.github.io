# 数值计算基础

> 状态：🔜 待补 · 对应笔记：docs/math/numerical（待补）

## 🎯 手搓目标

- [ ] 梯度下降（Gradient Descent）+ 学习率衰减
- [ ] Momentum 动量梯度下降
- [ ] RMSProp 优化器
- [ ] Adam 优化器
- [ ] 牛顿法（Newton's Method）二阶优化
- [ ] BFGS 拟牛顿法
- [ ] 共轭梯度法（Conjugate Gradient）
- [ ] 线搜索：Armijo 条件 + Backtracking
- [ ] 对比 7 个优化器在 Rosenbrock / 凸二次函数上收敛速度

## 📁 建议文件结构

```
numerical/
├── optimizers.py     # 7 个优化器实现
├── line_search.py    # Armijo 线搜索
├── tests/
│   ├── test_optimizers.py
│   └── test_line_search.py
└── example.ipynb     # 优化器收敛对比可视化
```

## 📖 参考资料

- 《Numerical Optimization》Nocedal & Wright
- 对应笔记：docs/math/numerical.md（待补）
