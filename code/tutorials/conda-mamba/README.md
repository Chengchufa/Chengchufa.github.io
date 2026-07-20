# Conda/Mamba 环境管理

> 🔜 待补 · 笔记：待补

## 🎯手搓目标
- [ ] environment.yml：Py3.10 + PyTorch 2.x + CUDA 12.1 完整环境
- [ ] 10 条环境冲突解决 cheat sheet（channel/priority/pin）
- [ ] Mamba 加速安装 vs Conda 对比脚本
- [ ] conda-lock 锁环境跨平台复现
- [ ] 离线迁移环境 tar 打包流程
- [ ] clean 清理缓存和未使用包脚本

## 📁建议文件结构
```
conda-mamba/
├── environment.yml
├── cheat_sheet.md
├── scripts/
│   ├── mamba_fast_install.sh
│   ├── export_env.sh
│   └── offline_migrate.sh
└── conda-lock.yml
```

## 📖参考资料
- https://mamba.readthedocs.io/
