# 💻 手搓代码合集 · 从 0 复现算法

> 对应 `docs/` 下各章节笔记的**手写实现合集**。原则：**能不用 sklearn / torch.nn 现成 API 就不用**，只用 NumPy / PyTorch 基础张量亲手推导一遍，目标是**算法工程师面试手撕要求**。
>
> 配套笔记站点：<https://chengchufa.github.io/>

---

## 🗺️ 目录结构

```
code/
├── README.md                         # 本文件
├── requirements.txt                  # 最小依赖集合（NumPy / PyTorch / scikit-learn …）
├── math/                             # 数学基础 · 4 章
│   ├── README.md                     # 模块总览 & 进度
│   ├── linear_algebra/               # 1. 线性代数 ✅ 具体 TODO 已拆
│   ├── probability/                  # 2. 概率论 🔜
│   ├── numerical/                    # 3. 数值计算 🔜
│   └── mcmc/                         # 4. 蒙特卡洛与 MCMC 🔜
├── ml/                               # 机器学习 · 18 章
│   ├── README.md                     # 模块总览 & 进度
│   ├── intro/                        # 0. 机器学习简介
│   ├── svm/                          # 1. SVM ✅ 具体 TODO 已拆
│   ├── naive_bayes/                  # 2. 朴素贝叶斯
│   ├── decision_tree/                # 3. 决策树
│   ├── knn/                          # 4. KNN
│   ├── ensemble/                     # 5. 集成学习
│   ├── gbdt/                         # 6. GBDT
│   ├── feature_engineering/          # 7. 特征工程
│   ├── evaluation/                   # 8. 模型评估
│   ├── dimensionality/               # 9. 降维
│   ├── clustering/                   # 10. 聚类
│   ├── semi_supervised/              # 11. 半监督
│   ├── em/                           # 12. EM
│   ├── max_entropy/                  # 13. 最大熵
│   ├── hmm/                          # 14. HMM
│   ├── crf/                          # 15. 条件随机场
│   ├── inference/                    # 16. 边际概率推断
│   └── topic_model/                  # 17. 主题模型
├── dl/                               # 深度学习 · 25 章
│   ├── README.md                     # 模块总览 & 进度
│   ├── intro/                        # 0. 深度学习简介
│   ├── feedforward/                  # 1. 前馈神经网络
│   ├── backprop/                     # 2. 反向传播
│   ├── regularization/               # 3. 正则化
│   ├── optimization/                 # 4. 最优化
│   ├── cnn/                          # 5. CNN
│   ├── rnn/                          # 6. RNN
│   ├── transformer-1/                # Transformer (1) 基础结构 ✅ 具体 TODO 已拆
│   ├── transformer-2 ... 9/          # Transformer (2~9)
│   ├── word_vector/                  # 词向量
│   ├── sentence_vector/              # 句子向量
│   ├── ctr_classic/                  # CTR 预估（传统方法）
│   ├── ctr_nn_1/                     # CTR 预估（神经网络 1）
│   └── ctr_nn_2/                     # CTR 预估（神经网络 2）
├── papers/                           # 论文复现 · 15+ 篇
│   ├── README.md                     # 模块总览 & 进度
│   └── 01-attention-is-all-you-need/ # Attention 原论文 ✅ 具体 TODO 已拆
└── tutorials/                        # 工具教程配套代码
    ├── README.md                     # 模块总览 & 进度
    └── claude-code/                  # Claude Code ✅ 具体 TODO 已拆
```

---

## ⚙️ 环境安装

> ⚠️ **关于 PyTorch**：有 GPU 的同学请按 [pytorch.org 官网](https://pytorch.org/) 选对应 CUDA 版本的安装命令覆盖安装，下面 requirements.txt 里的 `torch>=2.0` 会装 CPU 版本（体积大、慢，但通用）。

### Windows（推荐）

```powershell
# 1. 进入代码根目录
cd d:\Sunday\个人网站\code

# 2. 建立虚拟环境（用 venv 即可，与 conda 任选其一）
python -m venv .venv
.venv\Scripts\activate

# 3. 安装依赖（CPU 版 PyTorch，约 3-5 分钟）
pip install -r requirements.txt

# 4. 如果你有 GPU，执行下面这行覆盖成 CUDA 版（按官网换版本号）
# pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
```

### macOS / Linux

```bash
cd code
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### 验证安装成功

```bash
python -c "
import numpy, scipy, sklearn, pandas, torch, transformers
print(f'numpy  v{numpy.__version__}   OK')
print(f'sklearn v{sklearn.__version__}  OK')
print(f'torch   v{torch.__version__}  CUDA可用={torch.cuda.is_available()}  OK')
"
```

---

## 🧪 运行 & 测试

### 跑某个章节的单元测试（推荐 SVM 先验证环境）

```bash
cd code/ml/svm
pytest -v test_svm.py
```

### 跑某个章节的主实现（示例用法）

```bash
cd code/ml/svm
python svm.py
```

---

## 📋 进度一览

> ✅ = 已完成并通过测试　 🟡 = 进行中　 🔜 = 待补

| 模块 | 状态 | 进度 | 下一篇优先 |
|------|------|------|-----------|
| 📐 数学基础 math | 🔜 1/4 | linear_algebra 具体 TODO 已拆 | probability（概率论） |
| 🧠 机器学习 ml | 🔜 1/18 | svm 具体 TODO 已拆 | intro / decision_tree |
| 🔥 深度学习 dl | 🔜 1/25 | transformer-1 具体 TODO 已拆 | backprop + feedforward |
| 📄 论文复现 papers | 🔜 1/15+ | 01-attention-is-all-you-need 具体 TODO 已拆 | 02-bert |
| 🛠️ 工具教程 tutorials | 🟡 1/6+ | claude-code 具体 TODO 已拆 | conda-mamba |

---

## 🤝 代码约定（写给自己，执行纪律用）

1. **「从 0 实现」原则**：每章 `主实现.py` 里禁止直接调用 `sklearn.xxx`、`torch.nn.functional.*` 等现成封装 API，除非注释说明「此处作为 GROUND TRUTH 对比使用」且放在文件末尾独立 section。
2. **一篇笔记 ↔ 一个目录 ↔ 一个 pytest 集合**：对齐笔记学习进度。
3. **对比验证**：每一个手搓实现都必须在 `test_xxx.py` 里对比 sklearn / PyTorch 的标准答案，**误差 < 1%** 才算通过。
4. **不要上传 venv / pycache**：已在根 `.gitignore` 里配置。

---

## 📬 交流

发现 bug / 有更好的复现思路 / 想约代码互 Review？欢迎：

- 邮箱：[chengchufa2026@gmail.com](mailto:chengchufa2026@gmail.com)
- 提 Issue：[Chengchufa.github.io/issues](https://github.com/Chengchufa/Chengchufa.github.io/issues)
