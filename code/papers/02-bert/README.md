# BERT (2018) 复现

> 🔜 待补 · 笔记：待补

## 🎯手搓目标
- [ ] MLM 掩码语言模型任务：15% token 随机掩码
- [ ] NSP 下一句预测任务：50% 正例/负例采样
- [ ] BERT-Base 结构：12 Layers, 768 hidden, 12 heads
- [ ] WordPiece Tokenizer 最小实现
- [ ] 双任务联合 Loss 训练流程
- [ ] GLUE 子集 toy 验证

## 📁建议文件结构
```
02-bert/
├── model.py
├── tokenizer.py
├── dataset.py
├── train.py
└── tests/
```

## 📖参考资料
- https://arxiv.org/abs/1810.04805
