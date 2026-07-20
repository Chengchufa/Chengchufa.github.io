# 主题模型

> 状态：🔜 待补 · 对应笔记：docs/ml/topic-model（待补）

## 🎯 手搓目标

- [ ] LDA 主题模型：文档-主题 θ 与 主题-词 φ 的狄利克雷先验
- [ ] Gibbs 采样近似推断：条件分布 P(z_i|z_{-i}, w, α, β) + 采样更新
- [ ] 可选：变分推断 EM 近似（简化版，与 Gibbs 结果对比）
- [ ] 主题一致性 / 困惑度 Perplexity 评估
- [ ] 示例：20 Newsgroups 子集（或自带 toy 语料）+ K=10 主题提取 + 每主题 Top-N 词

## 📁 建议文件结构

```
topic_model/
├── lda_gibbs.py     # LDA Gibbs 采样实现
├── lda_vi.py        # LDA 变分推断（可选）
├── evaluations.py   # 困惑度 / 主题一致性
├── tests/
│   └── test_lda.py
└── example.ipynb    # 语料 LDA 训练 + 主题展示
```

## 📖 参考资料

- 对应笔记：docs/ml/topic-model.md（待补）
- LDA 原论文：Blei, Ng, Jordan 2003
- Griffiths & Steyvers 2004（Gibbs 采样 LDA）
