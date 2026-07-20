# Transformer (1) - 基础结构
> 🟡 具体 TODO 已拆，待实现 · 对应笔记：https://chengchufa.github.io/dl/transformer-1

## 🎯 手搓目标
- [ ] 缩放点积注意力 ScaledDotProductAttention(Q,K,V,mask=None) 纯 tensor 手写
- [ ] 多头注意力 MultiHeadAttention：拆头 → 并行 ScaledDotProduct → 拼接 → 输出 Linear
- [ ] 位置编码 PositionalEncoding：sin/cos 绝对位置（原论文公式 3.5）
- [ ] 位置前馈网络 FFN：Linear + GELU/ReLU + Linear + Dropout
- [ ] LayerNorm + Residual 连接封装
- [ ] EncoderLayer：MHA → FFN → 两个 LN+Res
- [ ] DecoderLayer：Masked MHA（下三角 causal mask）→ Encoder-Decoder MHA → FFN
- [ ] 完整 Encoder(N 层) + Decoder(N 层) + Linear+Softmax 输出
- [ ] 德译英 toy 训练 100 对短句，50 epoch 到 loss 收敛

## 📁 建议文件结构
```
transformer-1/
├── attention.py
├── layers.py
├── encoder.py
├── decoder.py
├── transformer.py
├── train_toy.py
├── test_transformer.py
└── README.md
```

## 📖 参考资料
- Vaswani 2017 Attention Is All You Need
- The Annotated Transformer (Harvard NLP)
- 《Attention Is All You Need》公式 3.5：PE(pos,2i)=sin(pos/10000^(2i/d_model))
