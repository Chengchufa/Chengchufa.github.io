# 边际概率推断

> 状态：🔜 待补 · 对应笔记：docs/ml/inference（待补）

## 🎯 手搓目标

- [ ] 变量消去 Variable Elimination：按顺序消除变量 + 因子乘积/求和
- [ ] 信念传播 Sum-Product（树结构）：消息传递 + 无环图校验
- [ ] 可选：Loopy Belief Propagation（有环图近似，用于对比）
- [ ] 简单贝叶斯网络推理示例：Asia / Sprinkler 经典网络

## 📁 建议文件结构

```
inference/
├── factors.py      # 因子定义 + 乘积 / 边缘化操作
├── variable_elimination.py # 变量消去算法
├── belief_propagation.py   # 信念传播（Sum-Product）
├── tests/
│   ├── test_factors.py
│   ├── test_ve.py
│   └── test_bp.py
└── example.ipynb   # Asia 网络推理演示
```

## 📖 参考资料

- 对应笔记：docs/ml/inference.md（待补）
- PRML Ch.8（Graphical Models）+ Ch.13.3
- 《概率图模型》Koller & Friedman（入门章节）
