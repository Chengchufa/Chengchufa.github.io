# 隐马尔可夫模型 HMM

> 状态：🔜 待补 · 对应笔记：docs/ml/hmm（待补）

## 🎯 手搓目标

- [ ] 前向算法 Forward：计算观测序列概率 P(O|λ)
- [ ] 后向算法 Backward：同上（与前向结果数值一致性校验）
- [ ] Viterbi 解码：动态规划求最优状态序列（含回溯路径）
- [ ] Baum-Welch 参数学习：EM 风格更新 π / A / B（观测为离散符号）
- [ ] 词性标注 POS 小示例：人工词典 + 短句子 Viterbi 解码演示

## 📁 建议文件结构

```
hmm/
├── hmm.py        # 前向 / 后向 / Viterbi / Baum-Welch
├── tests/
│   └── test_hmm.py
└── example.ipynb # POS 标注示例 + 概率计算对比
```

## 📖 参考资料

- 对应笔记：docs/ml/hmm.md（待补）
- 《统计学习方法》李航 Ch.10
- PRML Ch.13（Sequential Data）
