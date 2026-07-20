# 朴素贝叶斯

> 状态：🔜 待补 · 对应笔记：docs/ml/naive-bayes（待补）

## 🎯 手搓目标

- [ ] 高斯朴素贝叶斯（GaussianNB）：连续特征，假设服从正态分布
- [ ] 多项式朴素贝叶斯（MultinomialNB）：离散计数特征，+ 拉普拉斯平滑
- [ ] 伯努利朴素贝叶斯（BernoulliNB）：二值特征
- [ ] 垃圾邮件分类示例：英文邮件数据集 + 词袋模型 + 对比 sklearn 准确率

## 📁 建议文件结构

```
naive_bayes/
├── naive_bayes.py    # GaussianNB / MultinomialNB / BernoulliNB
├── tests/
│   └── test_naive_bayes.py
└── example.ipynb     # 垃圾邮件分类示例
```

## 📖 参考资料

- 对应笔记：docs/ml/naive-bayes.md（待补）
- 《统计学习方法》李航 Ch.4
