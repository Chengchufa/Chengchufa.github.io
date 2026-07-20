# Transformer (3) - 位置编码对比
> 🔜 待补 · 对应笔记：/dl/transformer-3

## 🎯 手搓目标
- [ ] Sinusoidal / Learned / RoPE / ALiBi 4 种 PE 可插拔对比

## 📁 建议文件结构
```
transformer-3/
├── pe_sinusoidal.py
├── pe_learned.py
├── pe_rope.py
├── pe_alibi.py
├── pe_compare.py
├── test_pe.py
├── example.ipynb
└── README.md
```

## 📖 参考资料
- Vaswani 2017 Sinusoidal PE
- Gehring 2017 Convolutional Seq2Seq (Learned PE)
- Su 2021 RoFormer: Enhanced Transformer with Rotary Position Embedding
- Press 2021 Train Short, Test Long: Attention with Linear Biases Enables Input Length Extrapolation (ALiBi)
