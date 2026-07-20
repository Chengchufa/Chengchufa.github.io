# Docker 入门

> 🔜 待补 · 笔记：待补

## 🎯手搓目标
- [ ] PyTorch 训练 Dockerfile：CUDA 12.1 + PyTorch 2.x + conda env
- [ ] Jupyter Lab Dockerfile：数据科学环境 + 常用库预装
- [ ] FastAPI 服务 Dockerfile：uvicorn + 多阶段构建最小镜像
- [ ] Milvus 向量库 docker-compose.yml：单机版全套依赖
- [ ] Ollama LLM 本地推理 Dockerfile + 模型挂载目录
- [ ] 通用 Makefile：build/run/exec/logs/clean 5 个目标

## 📁建议文件结构
```
docker-getting-started/
├── pytorch-train/
│   └── Dockerfile
├── jupyter-lab/
│   └── Dockerfile
├── fastapi-app/
│   └── Dockerfile
├── milvus/
│   └── docker-compose.yml
├── ollama/
│   └── Dockerfile
└── Makefile
```

## 📖参考资料
- https://docs.docker.com/get-started/
