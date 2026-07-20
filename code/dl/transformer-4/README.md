# Transformer (4) - 训练技巧
> 🔜 待补 · 对应笔记：/dl/transformer-4

## 🎯 手搓目标
- [ ] Label Smoothing
- [ ] Warmup 余弦退火 LR
- [ ] 梯度裁剪

## 📁 建议文件结构
```
transformer-4/
├── label_smoothing.py
├── lr_scheduler.py
├── grad_clip.py
├── test_training.py
├── example.ipynb
└── README.md
```

## 📖 参考资料
- Szegedy 2016 Rethinking the Inception Architecture for CV (Label Smoothing)
- Vaswani 2017 Attention Is All You Need (Warmup LR)
- Loshchilov 2016 SGDR (余弦退火)
- Pascanu 2013 On the difficulty of training recurrent neural networks (梯度裁剪)
