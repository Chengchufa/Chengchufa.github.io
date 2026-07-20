# DIN (2018) 复现

> 🔜 待补 · 笔记：待补

## 🎯手搓目标
- [ ] Attention-based 兴趣激活单元：候选 item 作为 query
- [ ] 用户行为序列 Attention Pooling
- [ ] Dice 激活函数（自定义 PReLU 变体）
- [ ] 特征 Embedding + MLP 组合
- [ ] DIN 完整网络端到端训练
- [ ] e-commerce toy dataset 验证

## 📁建议文件结构
```
12-din/
├── model.py
├── attention.py
├── dice.py
├── dataset.py
├── train.py
└── tests/
```

## 📖参考资料
- https://arxiv.org/abs/1706.06978
