# 反向传播算法
> 🔜 待补 · 对应笔记：/dl/backprop

## 🎯 手搓目标
- [ ] 数值梯度函数
- [ ] 3 层 MLP 解析梯度
- [ ] 10 组随机参数梯度检验 < 1e-5

## 📁 建议文件结构
```
backprop/
├── gradient_check.py
├── mlp.py
├── test_backprop.py
├── example.ipynb
└── README.md
```

## 📖 参考资料
- 《深度学习》第6.5节 反向传播
- CS231n Lecture 4 Backpropagation
- 数值梯度公式：f'(x) ≈ (f(x+h) - f(x-h)) / (2h)
