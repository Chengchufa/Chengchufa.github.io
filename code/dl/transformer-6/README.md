# Transformer (6) - 预训练模型
> 🔜 待补 · 对应笔记：/dl/transformer-6

## 🎯 手搓目标
- [ ] MLM + NSP + CLM + PrefixLM 4 种 loss 计算函数

## 📁 建议文件结构
```
transformer-6/
├── loss_mlm.py
├── loss_nsp.py
├── loss_clm.py
├── loss_prefixlm.py
├── test_pretrain_loss.py
├── example.ipynb
└── README.md
```

## 📖 参考资料
- Devlin 2018 BERT: Pre-training of Deep Bidirectional Transformers (MLM + NSP)
- Radford 2018 GPT-1 / 2019 GPT-2 / 2020 GPT-3 (CLM)
- Raffel 2020 Exploring the Limits of Transfer Learning with a T5 (PrefixLM)
- Liu 2019 RoBERTa (NSP 去除讨论)
