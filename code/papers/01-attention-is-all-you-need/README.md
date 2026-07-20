# Attention Is All You Need (2017) 复现

> 🟡 具体 TODO 已拆，待复现 · 笔记：https://chengchufa.github.io/papers/transformer-paper

## 🎯手搓目标
- [ ] Table1 参数对齐：d_model=512, d_ff=2048, h=8, N=6, P_drop=0.1 完整结构
- [ ] 3.4节 LR 公式 warmup_step=4000 + Adam β1=0.9 β2=0.98 ε=1e-9
- [ ] 5.4节 4种正则化：ResidualDropout每层 / AttentionDropout / LabelSmoothing ε=0.1 / WeightDecay
- [ ] Table2 WMT 英德训练流程复现（toy 子集即可）+ Loss 曲线
- [ ] Table3 超参消融：h=4/8/16 d_model=256/512 组合 ppl 对比
- [ ] Figure3 PE 正弦波形 vs 可学习 PE 可视化

## 📁建议文件结构
```
01-attention-is-all-you-need/
├── model.py
├── scheduler.py
├── regularizer.py
├── train.py
├── reproduce_notes.md
└── tests/
```

## 📖参考资料
- https://arxiv.org/abs/1706.03762
- docs/papers/transformer-paper.md
