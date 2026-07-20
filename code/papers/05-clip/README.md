# CLIP (2021) 复现

> 🔜 待补 · 笔记：待补

## 🎯手搓目标
- [ ] ResNet Image Encoder（ResNet50 简化版）
- [ ] Transformer Text Encoder（GPT 风格 Decoder）
- [ ] 对比学习 Loss：InfoNCE / Cross-Entropy 对称
- [ ] 多模态共享投影头 Projection Head
- [ ] 图文匹配 zero-shot 推理 demo
- [ ] toy 数据集训练流程

## 📁建议文件结构
```
05-clip/
├── image_encoder.py
├── text_encoder.py
├── loss.py
├── train.py
└── tests/
```

## 📖参考资料
- https://arxiv.org/abs/2103.00020
