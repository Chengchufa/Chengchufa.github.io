# GPT-3 (2020) 复现

> 🔜 待补 · 笔记：待补

## 🎯手搓目标
- [ ] GPT-3 超参可配置：size variants（Small/Medium/Large）
- [ ] Decoder-only Transformer Block 基础版
- [ ] Sparse Attention 近似实现（局部+稀疏模式）
- [ ] 字节级 BPE Tokenizer 适配
- [ ] 自回归 next-token 训练 loop
- [ ] Few-shot 推理样例脚本

## 📁建议文件结构
```
03-gpt3/
├── model.py
├── sparse_attention.py
├── configs.py
├── train.py
└── tests/
```

## 📖参考资料
- https://arxiv.org/abs/2005.14165
