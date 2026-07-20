# 蒙特卡洛方法与 MCMC 采样

> 状态：🔜 待补 · 对应笔记：docs/math/mcmc（待补）

## 🎯 手搓目标

- [ ] 拒绝采样（Rejection Sampling）
- [ ] 重要性采样（Importance Sampling）+ 归一化权重
- [ ] Metropolis-Hastings 采样器（MH）
- [ ] Gibbs 采样（Gibbs Sampling，以 2D 高斯为例）
- [ ] Slice Sampling（切片采样）
- [ ] 2D 高斯分布可视化对比：5 个采样器的采样效率（ESS 有效样本量）

## 📁 建议文件结构

```
mcmc/
├── samplers.py       # 5 个采样器实现
├── tests/
│   └── test_samplers.py
└── example.ipynb     # 2D 高斯采样对比可视化
```

## 📖 参考资料

- PRML Ch.11（Sampling Methods）
- 对应笔记：docs/math/mcmc.md（待补）
