# 概率论与数理统计基础

> 状态：🔜 待补 · 对应笔记：docs/math/probability（待补）

## 🎯 手搓目标

- [ ] 伯努利分布采样器
- [ ] 二项分布采样器
- [ ] 均匀分布采样器
- [ ] 高斯（正态）分布采样器（Box-Muller 法）
- [ ] 指数分布采样器（逆变换法）
- [ ] 泊松分布采样器
- [ ] 伽马分布采样器
- [ ] Beta 分布采样器
- [ ] Dirichlet 分布采样器
- [ ] 多项分布采样器
- [ ] KL 散度计算（离散 + 连续）
- [ ] 互信息计算
- [ ] 贝叶斯推断手搓（共轭先验 + MCMC 近似）

## 📁 建议文件结构

```
probability/
├── distributions.py     # 10 种分布采样器
├── kl_divergence.py     # KL 散度 + 互信息
├── bayesian_inference.py # 贝叶斯推断
├── tests/
│   ├── test_distributions.py
│   ├── test_kl_divergence.py
│   └── test_bayesian.py
└── example.ipynb        # 分布采样可视化示例
```

## 📖 参考资料

- 陈希孺《概率论与数理统计》
- 对应笔记：docs/math/probability.md（待补）
