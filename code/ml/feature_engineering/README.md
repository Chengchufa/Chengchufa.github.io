# 特征工程

> 状态：🔜 待补 · 对应笔记：docs/ml/feature-engineering（待补）

## 🎯 手搓目标

- [ ] One-Hot Encoding：类别特征独热编码（处理未知类别）
- [ ] Target Encoding：基于目标均值编码 + 交叉验证平滑防泄漏
- [ ] 特征离散化：等频分箱 / 等宽分箱 / 决策树分箱
- [ ] 标准化 StandardScaler：零均值单位方差
- [ ] 归一化 MinMaxScaler：[0,1] 区间缩放
- [ ] 异常值检测：IQR 法（箱线图）+ Z-Score 法 + 孤立森林近似

## 📁 建议文件结构

```
feature_engineering/
├── encoding.py      # One-Hot / Target Encoding
├── discretization.py # 分箱离散化
├── scaling.py       # StandardScaler / MinMaxScaler
├── outliers.py      # 异常值检测
├── tests/
│   ├── test_encoding.py
│   ├── test_scaling.py
│   └── test_outliers.py
└── example.ipynb    # 完整特征工程流水线示例
```

## 📖 参考资料

- 对应笔记：docs/ml/feature-engineering.md（待补）
- 《Feature Engineering for Machine Learning》
