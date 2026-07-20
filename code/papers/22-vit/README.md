# ViT (2020) 复现

> 🔜 待补 · 笔记：待补

## 🎯手搓目标
- [ ] Patch Embedding：224×224 → 14×14 patches，16×16 patch size
- [ ] Class Token + Position Embedding 拼接
- [ ] 12 层 Transformer Encoder Layer
- [ ] MSA 多头自注意力 + MLP（GELU）
- [ ] ViT-B/16 完整结构对齐
- [ ] CIFAR-10 / toy 图像分类训练

## 📁建议文件结构
```
22-vit/
├── model.py
├── patch_embed.py
├── encoder.py
├── dataset.py
├── train.py
└── tests/
```

## 📖参考资料
- https://arxiv.org/abs/2010.11929
