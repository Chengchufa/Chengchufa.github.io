# DeepFM (2017) 复现

> 🔜 待补 · 笔记：待补

## 🎯手搓目标
- [ ] FM Part：一阶线性 + 二阶特征交互
- [ ] DNN Part：Embedding → MLP 高阶交叉
- [ ] FM 与 DNN 共享 Embedding 层
- [ ] End-to-End 联合训练 Loss
- [ ] CTR 二分类训练流程
- [ ] toy 数据集离线评估

## 📁建议文件结构
```
11-deepfm/
├── model.py
├── fm.py
├── dnn.py
├── dataset.py
├── train.py
└── tests/
```

## 📖参考资料
- https://arxiv.org/abs/1703.04247
