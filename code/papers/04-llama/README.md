# LLaMA (2023) 复现

> 🔜 待补 · 笔记：待补

## 🎯手搓目标
- [ ] RMSNorm 层归一化替换 LayerNorm
- [ ] SwiGLU FFN：silu(xW1) ⊙ (xW2) W3 结构
- [ ] RoPE 旋转位置编码实现
- [ ] 分组查询注意力 GQA 可选
- [ ] KV Cache 推理加速
- [ ] LLaMA Block 最小可训练版

## 📁建议文件结构
```
04-llama/
├── model.py
├── rope.py
├── rmsnorm.py
├── train.py
└── tests/
```

## 📖参考资料
- https://arxiv.org/abs/2302.13971
