---
layout: home

hero:
  name: 个人学习笔记
  text: 数学 · 机器学习 · 深度学习
  tagline: 准备开始系统化学习与记录的个人笔记站 · 还在路上 🌱
  actions:
    - theme: brand
      text: 先看看已完成内容
      link: /tutorials/
    - theme: alt
      text: GitHub 仓库
      link: https://github.com/Chengchufa/Chengchufa.github.io

features:
  - icon: 📐
    title: 数学基础（计划）
    details: 计划系统整理线性代数、概率论、数值计算、蒙特卡洛方法等机器学习必备数学知识
    link: /math/
    linkText: 查看待补清单

  - icon: 🧠
    title: 机器学习（计划）
    details: 从 SVM、决策树到集成学习、特征工程，经典机器学习算法将按 17 章计划逐篇梳理
    link: /ml/
    linkText: 查看待补清单

  - icon: 🔥
    title: 深度学习（计划）
    details: 前馈网络、CNN、RNN、Transformer 9 篇、CTR/词向量专题共 21 章，边学边写
    link: /dl/
    linkText: 查看待补清单

  - icon: 📄
    title: 论文笔记（计划）
    details: 经典与前沿论文的精读笔记与核心要点总结，15+ 篇按研究方向分类规划
    link: /papers/
    linkText: 查看待补清单

  - icon: 🛠️
    title: 工具教程（进行中）
    details: 开发工具、AI 辅助编程、效率技巧等实用教程，已有 1 篇完整内容
    link: /tutorials/
    linkText: 进入教程
---

<div class="home-content-wrap">

  <section class="home-section">
    <h2>关于本站</h2>
    <div class="profile-card">
      <p>这是一个<strong>从零开始建设</strong>的个人学习笔记站。我目前还没有正式开始系统学习，
      但先把目录框架搭好，逼迫自己按计划推进 🚜</p>
      <p>为了避免给访客造成「这里已有完整内容」的误导，<strong>所有未完成的章节都会在各模块首页
      明确标注「（待补）」</strong>；完成的笔记会在标题前加 <code>✅</code> 绿色标识。</p>
      <p>未来本站每一篇完成的笔记都会遵循以下原则：</p>
      <ul>
        <li>笔记内容仅供个人学习使用，非本人同意不得应用于商业领域</li>
        <li>所有代码示例、数学推导都会反复验证，尽量避免错误</li>
        <li>总结不到位的地方欢迎大家通过下方联系方式探讨和 PR 指正</li>
      </ul>
      <p><strong>联系方式：</strong></p>
      <ul>
        <li>邮箱：<a href="mailto:chengchufa2026@gmail.com">chengchufa2026@gmail.com</a>（学习交流 / 内推 / 合作欢迎来信，工作日 24h 内回复）</li>
        <li>GitHub：<a href="https://github.com/Chengchufa" target="_blank" rel="noopener">github.com/Chengchufa</a></li>
      </ul>
      <p>另有个人在 GitHub 上的一些项目：</p>
      <ul>
        <li>个人笔记站（本站）：<a href="https://github.com/Chengchufa/Chengchufa.github.io" target="_blank" rel="noopener">Chengchufa.github.io</a></li>
        <li>更多项目：<a href="https://github.com/Chengchufa?tab=repositories" target="_blank" rel="noopener">我的仓库列表</a></li>
      </ul>
    </div>
  </section>

  <section class="home-section">
    <h2>章节目录 · 学习路线</h2>
    <p class="section-intro">以下为完整学习路线骨架（共 60+ 章节计划），<code>✅ 已完成</code>的章节可以直接点击进入查看正文，
    其余 <code>🔜 待补</code> 章节会在开始学习后按顺序补充。每完成一篇都会在
    <a href="/release">更新日志</a> 同步记录。</p>

    <div class="chapter-group">
      <div class="chapter-group-title">📐 数学基础 · 4 章（已完成 1）</div>
      <div class="chapters-grid">
        <a class="chapter-card done" href="/math/linear-algebra">
          <div class="chapter-icon">01 ✅</div>
          <h3>线性代数基础</h3>
          <p>向量空间、矩阵运算、特征值分解、SVD 等核心概念</p>
          <p class="card-footer-link">💻 <a href="https://github.com/Chengchufa/Chengchufa.github.io/tree/main/code/math/linear_algebra" target="_blank" rel="noopener" onclick="event.stopPropagation()">对应代码</a></p>
        </a>
        <div class="chapter-card todo" title="尚未开始，计划第一篇写">
          <div class="chapter-icon">02 🔜</div>
          <h3>（待补）概率论基础</h3>
          <p>计划学习：概率分布、期望方差、贝叶斯定理、常见分布族</p>
        </div>
        <div class="chapter-card todo">
          <div class="chapter-icon">03 🔜</div>
          <h3>（待补）数值计算基础</h3>
          <p>计划学习：数值稳定性、优化方法、梯度下降与高阶优化算法</p>
        </div>
        <div class="chapter-card todo">
          <div class="chapter-icon">04 🔜</div>
          <h3>（待补）蒙特卡洛与 MCMC</h3>
          <p>计划学习：重要性采样、Metropolis-Hastings、Gibbs 采样</p>
        </div>
      </div>
      <p class="group-footer">→ 查看 <a href="/math/">数学基础完整待补清单</a></p>
    </div>

    <div class="chapter-group">
      <div class="chapter-group-title">🧠 机器学习 · 17 章（已完成 1）</div>
      <div class="chapters-grid">
        <div class="chapter-card todo">
          <div class="chapter-icon">00 🔜</div>
          <h3>（待补）机器学习简介</h3>
          <p>计划学习：监督/无监督范式、误差分析、过拟合与欠拟合</p>
        </div>
        <a class="chapter-card done" href="/ml/svm">
          <div class="chapter-icon">01 ✅</div>
          <h3>支持向量机 SVM</h3>
          <p>最大间隔分类器、核技巧、软间隔与 SMO 算法推导</p>
          <p class="card-footer-link">💻 <a href="https://github.com/Chengchufa/Chengchufa.github.io/tree/main/code/ml/svm" target="_blank" rel="noopener" onclick="event.stopPropagation()">对应代码</a></p>
        </a>
        <div class="chapter-card todo">
          <div class="chapter-icon">03 🔜</div>
          <h3>（待补）决策树</h3>
          <p>计划学习：ID3 / C4.5 / CART、信息增益、基尼系数与剪枝策略</p>
        </div>
        <div class="chapter-card todo">
          <div class="chapter-icon">05 🔜</div>
          <h3>（待补）集成学习</h3>
          <p>计划学习：Bagging、Boosting 思想，Random Forest、AdaBoost 原理</p>
        </div>
        <div class="chapter-card todo">
          <div class="chapter-icon">07 🔜</div>
          <h3>（待补）特征工程</h3>
          <p>计划学习：特征选择、特征构造、连续与离散特征处理方法</p>
        </div>
        <div class="chapter-card todo">
          <div class="chapter-icon">10 🔜</div>
          <h3>（待补）聚类</h3>
          <p>计划学习：K-Means、层次聚类、DBSCAN、谱聚类与评估指标</p>
        </div>
      </div>
      <p class="group-footer">→ 查看 <a href="/ml/">机器学习完整 17 章待补清单</a>（进阶篇 + 高级篇还有 11 章）</p>
    </div>

    <div class="chapter-group">
      <div class="chapter-group-title">🔥 深度学习 · 21 章（已完成 1）</div>
      <div class="chapters-grid">
        <div class="chapter-card todo">
          <div class="chapter-icon">01 🔜</div>
          <h3>（待补）深度前馈神经网络</h3>
          <p>计划学习：感知机、多层网络、激活函数、损失函数设计</p>
        </div>
        <div class="chapter-card todo">
          <div class="chapter-icon">02 🔜</div>
          <h3>（待补）反向传播算法</h3>
          <p>计划学习：链式法则推导、参数梯度计算、数值稳定性与初始化</p>
        </div>
        <div class="chapter-card todo">
          <div class="chapter-icon">05 🔜</div>
          <h3>（待补）卷积神经网络 CNN</h3>
          <p>计划学习：卷积/池化操作、LeNet/AlexNet/VGG/ResNet 经典结构</p>
        </div>
        <div class="chapter-card todo">
          <div class="chapter-icon">06 🔜</div>
          <h3>（待补）循环神经网络 RNN</h3>
          <p>计划学习：RNN、LSTM、GRU、双向与深层循环结构</p>
        </div>
        <a class="chapter-card done" href="/dl/transformer-1">
          <div class="chapter-icon">T1 ✅</div>
          <h3>Transformer 基础结构</h3>
          <p>Encoder-Decoder 框架、自注意力、Multi-Head Attention</p>
          <p class="card-footer-link">💻 <a href="https://github.com/Chengchufa/Chengchufa.github.io/tree/main/code/dl/transformer-1" target="_blank" rel="noopener" onclick="event.stopPropagation()">对应代码</a></p>
        </a>
        <div class="chapter-card todo">
          <div class="chapter-icon">WV 🔜</div>
          <h3>（待补）词向量</h3>
          <p>计划学习：One-Hot、Word2Vec、GloVe、FastText 原理与对比</p>
        </div>
      </div>
      <p class="group-footer">→ 查看 <a href="/dl/">深度学习完整 21 章待补清单</a>（Transformer 系列剩余 8 篇 + 专题 5 章）</p>
    </div>

    <div class="chapter-group">
      <div class="chapter-group-title">📄 论文笔记 &amp; 🛠️ 工具教程（共 21+ 篇计划 · 已完成 2）</div>
      <div class="chapters-grid">
        <a class="chapter-card done" href="/papers/transformer-paper">
          <div class="chapter-icon">P1 ✅</div>
          <h3>Attention Is All You Need</h3>
          <p>Transformer 开山之作，逐节精读与核心创新点总结</p>
          <p class="card-footer-link">💻 <a href="https://github.com/Chengchufa/Chengchufa.github.io/tree/main/code/papers/01-attention-is-all-you-need" target="_blank" rel="noopener" onclick="event.stopPropagation()">对应代码</a></p>
        </a>
        <div class="chapter-card todo">
          <div class="chapter-icon">P2~ 🔜</div>
          <h3>（待补）更多论文</h3>
          <p>BERT、GPT-3、LLaMA、CLIP、DeepFM、DIN、ResNet、ViT 等 14 篇精读计划</p>
        </div>
        <a class="chapter-card done" href="/tutorials/claude-code">
          <div class="chapter-icon">T1 ✅</div>
          <h3>Claude Code 使用指南</h3>
          <p>AI 辅助编程工具的安装、常用命令与高阶技巧</p>
          <p class="card-footer-link">💻 <a href="https://github.com/Chengchufa/Chengchufa.github.io/tree/main/code/tutorials/claude-code" target="_blank" rel="noopener" onclick="event.stopPropagation()">对应代码</a></p>
        </a>
        <div class="chapter-card todo">
          <div class="chapter-icon">T2~ 🔜</div>
          <h3>（待补）更多工具教程</h3>
          <p>VS Code 插件、Conda/Mamba 环境、Tmux+Zsh、Git 进阶、Docker 等 5+ 篇计划</p>
        </div>
      </div>
      <p class="group-footer">
        → 查看 <a href="/papers/">论文笔记完整清单</a> ·
        <a href="/tutorials/">工具教程完整清单</a>
      </p>
    </div>

    <section class="home-section progress-summary">
      <h2>📊 整体进度一览</h2>
      <div class="progress-card">
        <ul>
          <li>✅ <strong>数学基础</strong>：1/4 完成 &nbsp;|&nbsp; 下一步 → 概率论基础</li>
          <li>✅ <strong>机器学习</strong>：1/17 完成 &nbsp;|&nbsp; 下一步 → 机器学习简介 / 决策树</li>
          <li>✅ <strong>深度学习</strong>：1/21 完成 &nbsp;|&nbsp; 下一步 → Transformer (2) 注意力机制</li>
          <li>✅ <strong>论文笔记</strong>：1/15+ 完成 &nbsp;|&nbsp; 下一步 → BERT</li>
          <li>✅ <strong>工具教程</strong>：1/6+ 完成 &nbsp;|&nbsp; 下一步 → Conda 环境管理</li>
        </ul>
        <p class="progress-total">合计：<strong>5 / 63+ 已完成</strong> — 欢迎 <a href="/about">联系我</a>
        或在 GitHub 提 <a href="https://github.com/Chengchufa/Chengchufa.github.io/issues" target="_blank" rel="noopener">Issue</a>
        催促更新 💪</p>
      </div>
    </section>

  </section>

</div>
