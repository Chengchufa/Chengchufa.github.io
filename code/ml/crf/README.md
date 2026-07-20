# 条件随机场 CRF

> 状态：🔜 待补 · 对应笔记：docs/ml/crf（待补）

## 🎯 手搓目标

- [ ] 线性链 CRF：状态特征 + 转移特征定义 + 特征函数统一表示
- [ ] 前向后向算法：计算 α / β 矩阵 + 每个位置的边缘概率
- [ ] Viterbi 解码：求最优标签序列 y* = argmax P(y|x)
- [ ] 对数似然 + 梯度计算（含正则项），用梯度下降或 L-BFGS 训练
- [ ] 简单序列标注示例：BIO 命名实体识别 toy 数据

## 📁 建议文件结构

```
crf/
├── crf.py        # 线性链 CRF（前向后向 + Viterbi + 训练）
├── tests/
│   └── test_crf.py
└── example.ipynb # 序列标注 toy 示例
```

## 📖 参考资料

- 对应笔记：docs/ml/crf.md（待补）
- 《统计学习方法》李航 Ch.11
- CRF 原论文：Lafferty et al. 2001
