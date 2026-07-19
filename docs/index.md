---
layout: home

hero:
  name: 个人学习笔记
  text: 数学 · 机器学习 · 深度学习
  tagline: 系统化整理的学习笔记与实践记录，持续更新中...
  actions:
    - theme: brand
      text: 开始阅读
      link: /math/
    - theme: alt
      text: 查看更新日志
      link: /release
    - theme: alt
      text: GitHub
      link: https://github.com/

features:
  - icon: 📐
    title: 数学基础
    details: 线性代数、概率论、数值计算、蒙特卡洛方法等机器学习必备数学知识
    link: /math/
    linkText: 进入学习

  - icon: 🧠
    title: 机器学习
    details: 从 SVM、决策树到集成学习、特征工程，经典机器学习算法系统梳理
    link: /ml/
    linkText: 进入学习

  - icon: 🔥
    title: 深度学习
    details: 前馈网络、CNN、RNN、Transformer 及预训练模型等前沿内容详解
    link: /dl/
    linkText: 进入学习

  - icon: 📄
    title: 论文笔记
    details: 经典与前沿论文的精读笔记与核心要点总结
    link: /papers/
    linkText: 浏览论文

  - icon: 🛠️
    title: 工具教程
    details: 开发工具、AI 辅助编程、效率技巧等实用教程
    link: /tutorials/
    linkText: 查看教程

  - icon: 📝
    title: 持续更新
    details: 每次修订均保留更新日志，便于追踪学习轨迹与新增内容
    link: /release
    linkText: 查看历史
---

<div class="home-content-wrap">

  <section class="home-section">
    <h2>关于本站</h2>
    <div class="profile-card">
      <p>这是我多年以来学习总结的笔记，经整理之后发布于此。考虑到正式出版的时间周期较长，而书本购买成本高不利于技术广泛传播，因此采取<strong>开源免费</strong>的形式供大家参考学习。</p>
      <p>笔记内容仅供个人学习使用，非本人同意不得应用于商业领域。</p>
      <p>笔记内容较多，可能有些总结不到位的地方，欢迎大家探讨。</p>
      <p><strong>联系方式：</strong></p>
      <ul>
        <li>邮箱：<a href="mailto:chengchufa@users.noreply.github.com">chengchufa@users.noreply.github.com</a>（GitHub 转发，防爬虫）</li>
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
    <h2>最近更新</h2>
    <div class="release-list">
      <div class="release-item">
        <div class="release-date">20260719 修订</div>
        <div class="release-content">
          网站初始化：搭建 VitePress 框架，创建数学基础、机器学习、深度学习、论文笔记、工具教程五大模块。
          参考 <a href="/release">完整更新历史</a>
        </div>
      </div>
      <div class="release-item">
        <div class="release-date">20260710 修订</div>
        <div class="release-content">
          新增 Transformer 系列笔记 (1)(2)(3)，包括基础结构、注意力机制、位置编码等内容。
          参考 <a href="/dl/#transformer-系列">Transformer 系列</a>
        </div>
      </div>
      <div class="release-item">
        <div class="release-date">20260620 修订</div>
        <div class="release-content">
          新增 3 篇论文笔记：Attention Is All You Need、BERT、GPT-3。
          参考 <a href="/papers/">论文笔记</a>
        </div>
      </div>
    </div>
    <a class="release-more" href="/release">查看全部更新记录 →</a>
  </section>

  <section class="home-section">
    <h2>章节目录</h2>

    <div class="chapter-group">
      <div class="chapter-group-title">📐 数学基础</div>
      <div class="chapters-grid">
        <a class="chapter-card" href="/math/linear-algebra">
          <div class="chapter-icon">01</div>
          <h3>线性代数基础</h3>
          <p>向量空间、矩阵运算、特征值分解、SVD 等核心概念</p>
        </a>
        <a class="chapter-card" href="/math/probability">
          <div class="chapter-icon">02</div>
          <h3>概率论基础</h3>
          <p>概率分布、期望方差、贝叶斯定理、常见概率分布族</p>
        </a>
        <a class="chapter-card" href="/math/numerical">
          <div class="chapter-icon">03</div>
          <h3>数值计算基础</h3>
          <p>数值稳定性、优化方法、梯度下降与高阶优化算法</p>
        </a>
        <a class="chapter-card" href="/math/mcmc">
          <div class="chapter-icon">04</div>
          <h3>蒙特卡洛与 MCMC</h3>
          <p>重要性采样、Metropolis-Hastings、Gibbs 采样</p>
        </a>
      </div>
    </div>

    <div class="chapter-group">
      <div class="chapter-group-title">🧠 机器学习</div>
      <div class="chapters-grid">
        <a class="chapter-card" href="/ml/intro">
          <div class="chapter-icon">00</div>
          <h3>机器学习简介</h3>
          <p>监督/无监督/强化学习范式、误差分析、过拟合与欠拟合</p>
        </a>
        <a class="chapter-card" href="/ml/svm">
          <div class="chapter-icon">01</div>
          <h3>支持向量机 SVM</h3>
          <p>最大间隔分类器、核技巧、软间隔与 SMO 算法推导</p>
        </a>
        <a class="chapter-card" href="/ml/decision-tree">
          <div class="chapter-icon">03</div>
          <h3>决策树</h3>
          <p>ID3 / C4.5 / CART、信息增益、基尼系数与剪枝策略</p>
        </a>
        <a class="chapter-card" href="/ml/ensemble">
          <div class="chapter-icon">05</div>
          <h3>集成学习</h3>
          <p>Bagging、Boosting 思想，Random Forest、AdaBoost 原理</p>
        </a>
        <a class="chapter-card" href="/ml/feature-engineering">
          <div class="chapter-icon">07</div>
          <h3>特征工程</h3>
          <p>特征选择、特征构造、连续与离散特征处理方法</p>
        </a>
        <a class="chapter-card" href="/ml/clustering">
          <div class="chapter-icon">10</div>
          <h3>聚类</h3>
          <p>K-Means、层次聚类、DBSCAN、谱聚类与聚类评估指标</p>
        </a>
      </div>
    </div>

    <div class="chapter-group">
      <div class="chapter-group-title">🔥 深度学习</div>
      <div class="chapters-grid">
        <a class="chapter-card" href="/dl/feedforward">
          <div class="chapter-icon">01</div>
          <h3>深度前馈神经网络</h3>
          <p>感知机、多层网络、激活函数、损失函数设计</p>
        </a>
        <a class="chapter-card" href="/dl/backprop">
          <div class="chapter-icon">02</div>
          <h3>反向传播算法</h3>
          <p>链式法则推导、参数梯度计算、数值稳定性与初始化</p>
        </a>
        <a class="chapter-card" href="/dl/cnn">
          <div class="chapter-icon">05</div>
          <h3>卷积神经网络 CNN</h3>
          <p>卷积/池化操作、LeNet/AlexNet/VGG/ResNet 经典结构</p>
        </a>
        <a class="chapter-card" href="/dl/rnn">
          <div class="chapter-icon">06</div>
          <h3>循环神经网络 RNN</h3>
          <p>RNN、LSTM、GRU、双向与深层循环结构</p>
        </a>
        <a class="chapter-card" href="/dl/transformer-1">
          <div class="chapter-icon">T1</div>
          <h3>Transformer 基础结构</h3>
          <p>Encoder-Decoder 框架、自注意力、Multi-Head Attention</p>
        </a>
        <a class="chapter-card" href="/dl/word-vector">
          <div class="chapter-icon">WV</div>
          <h3>词向量</h3>
          <p>One-Hot、Word2Vec、GloVe、FastText 原理与对比</p>
        </a>
      </div>
    </div>

    <div class="chapter-group">
      <div class="chapter-group-title">📄 论文笔记 & 🛠️ 工具教程</div>
      <div class="chapters-grid">
        <a class="chapter-card" href="/papers/transformer-paper">
          <div class="chapter-icon">P1</div>
          <h3>Attention Is All You Need</h3>
          <p>Transformer 开山之作，逐节精读与核心创新点总结</p>
        </a>
        <a class="chapter-card" href="/papers/">
          <div class="chapter-icon">ALL</div>
          <h3>全部论文笔记</h3>
          <p>按研究方向分类的论文阅读清单与笔记索引</p>
        </a>
        <a class="chapter-card" href="/tutorials/claude-code">
          <div class="chapter-icon">T1</div>
          <h3>Claude Code 使用指南</h3>
          <p>AI 辅助编程工具的安装、常用命令与高阶技巧</p>
        </a>
        <a class="chapter-card" href="/tutorials/">
          <div class="chapter-icon">ALL</div>
          <h3>全部工具教程</h3>
          <p>开发工具、效率技巧、环境配置等实用教程合集</p>
        </a>
      </div>
    </div>
  </section>

</div>
