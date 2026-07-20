# Transformer (8) - GPT 系列
> 🔜 待补 · 对应笔记：/dl/transformer-8

## 🎯 手搓目标
- [ ] GPT-2 Decoder Only 最小可训练版本

## 📁 建议文件结构
```
transformer-8/
├── gpt2.py
├── test_gpt2.py
├── example.ipynb
└── README.md
```

## 📖 参考资料
- Radford 2019 Language Models are Unsupervised Multitask Learners (GPT-2)
- GPT-2 small: 12 layers, 12 heads, d_model=768, FFN=3072
- BPE 词表：50257 tokens, 1024 上下文长度
- Pre-LN 结构、Causal Mask、GELU 激活
