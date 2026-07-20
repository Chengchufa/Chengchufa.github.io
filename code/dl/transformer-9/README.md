# Transformer (9) - 多模态模型
> 🔜 待补 · 对应笔记：/dl/transformer-9

## 🎯 手搓目标
- [ ] CLIP 最小实现（Image Encoder + Text Encoder + 对比学习 Loss）

## 📁 建议文件结构
```
transformer-9/
├── clip_image_encoder.py
├── clip_text_encoder.py
├── clip.py
├── contrastive_loss.py
├── test_clip.py
├── example.ipynb
└── README.md
```

## 📖 参考资料
- Radford 2021 Learning Transferable Visual Models From Natural Language Supervision (CLIP)
- 对称对比学习 Loss：InfoNCE Loss
- 图像编码器：ResNet / ViT；文本编码器：Transformer Encoder
- 投影层：两个模态映射到相同共享维度 d_embed
