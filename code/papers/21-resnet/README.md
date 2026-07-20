# ResNet (2015) 复现

> 🔜 待补 · 笔记：待补

## 🎯手搓目标
- [ ] BasicBlock：两个 3×3 Conv + BN + ReLU + Shortcut
- [ ] 4 个 Layer 通道递增：64 → 128 → 256 → 512
- [ ] Downsample ShortCut：步长2 降采样 + 1×1 Conv 对齐维度
- [ ] ResNet18：[2,2,2,2] × BasicBlock 共 18 层
- [ ] CIFAR-10 / ImageNet toy 训练流程
- [ ] Top-1 / Top-5 Acc 评估

## 📁建议文件结构
```
21-resnet/
├── model.py
├── basic_block.py
├── dataset.py
├── train.py
└── tests/
```

## 📖参考资料
- https://arxiv.org/abs/1512.03385
