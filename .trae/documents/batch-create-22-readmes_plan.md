# 批量创建 22 个章节目录 README.md 计划

## 任务概述
在 `d:\Sunday\个人网站\code\` 下批量创建 22 个章节目录的 README.md 文件，包括 math 模块 4 个和 ml 模块 18 个。

## 统一格式规则
每个 README.md 必须包含以下 4 个大标题，且总行数不超过 70 行：
1. `# 标题`（第一行）
2. `## 🎯 手搓目标`（带 `- [ ]` 复选框列表）
3. `## 📁 建议文件结构`（\`\`\` 代码块树形）
4. `## 📖 参考资料`

标题下紧接着一行状态引用：`> 状态：xxx · 对应笔记：<链接>`

## 文件清单（共 22 个）

### Math 模块（4 个）
| # | 目录路径 | 标题 | 特殊处理 |
|---|---------|------|---------|
| 1 | `code/math/linear_algebra/README.md` | 线性代数基础 | 🟡 已完成笔记，7 条具体 TODO + 文件结构 |
| 2 | `code/math/probability/README.md` | 概率论与数理统计基础 | 🔜 标准待补模板 |
| 3 | `code/math/numerical/README.md` | 数值计算基础 | 🔜 标准待补模板 |
| 4 | `code/math/mcmc/README.md` | 蒙特卡洛方法与 MCMC 采样 | 🔜 标准待补模板 |

### ML 模块（18 个）
| # | 目录路径 | 标题 | 特殊处理 |
|---|---------|------|---------|
| 1 | `code/ml/intro/README.md` | 机器学习简介 | 🔜 标准待补 |
| 2 | `code/ml/svm/README.md` | 支持向量机 SVM | 🟡 已完成笔记，6 条具体 TODO |
| 3 | `code/ml/naive_bayes/README.md` | 朴素贝叶斯 | 🔜 标准待补 |
| 4 | `code/ml/decision_tree/README.md` | 决策树（ID3 / C4.5 / CART） | 🔜 标准待补 |
| 5 | `code/ml/knn/README.md` | K 近邻 KNN | 🔜 标准待补 |
| 6 | `code/ml/ensemble/README.md` | 集成学习 | 🔜 标准待补 |
| 7 | `code/ml/gbdt/README.md` | 梯度提升树 GBDT | 🔜 标准待补 |
| 8 | `code/ml/feature_engineering/README.md` | 特征工程 | 🔜 标准待补 |
| 9 | `code/ml/evaluation/README.md` | 模型评估 | 🔜 标准待补 |
| 10 | `code/ml/dimensionality/README.md` | 降维 | 🔜 标准待补 |
| 11 | `code/ml/clustering/README.md` | 聚类 | 🔜 标准待补 |
| 12 | `code/ml/semi_supervised/README.md` | 半监督学习 | 🔜 标准待补 |
| 13 | `code/ml/em/README.md` | EM 算法 | 🔜 标准待补 |
| 14 | `code/ml/max_entropy/README.md` | 最大熵模型 | 🔜 标准待补 |
| 15 | `code/ml/hmm/README.md` | 隐马尔可夫模型 HMM | 🔜 标准待补 |
| 16 | `code/ml/crf/README.md` | 条件随机场 CRF | 🔜 标准待补 |
| 17 | `code/ml/inference/README.md` | 边际概率推断 | 🔜 标准待补 |
| 18 | `code/ml/topic_model/README.md` | 主题模型 | 🔜 标准待补 |

## 执行步骤
1. 使用 Shell 创建 22 个目标目录（确保目录存在）
2. 批量 Write 22 个 README.md 文件（math 4 个 + ml 18 个）
3. 汇总输出 22 个文件的完整路径列表
