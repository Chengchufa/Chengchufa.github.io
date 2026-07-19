import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

const siteName = '个人学习笔记'
const siteDescription = '数学基础、机器学习、深度学习、论文笔记及工具教程的个人学习汇总'

// ============================================================================
// 部署 base 路径策略（同时兼容三种场景）：
//   1) 自定义域名（如 notes.example.com）         → base = '/'
//   2) GitHub 用户/组织主页（username.github.io） → base = '/'         （默认）
//   3) GitHub 项目仓库子路径（username.github.io/repo）
//        → 设置仓库同名环境变量 BASE=/<repo>/  或 CI 中自动注入
// ============================================================================
const getBase = (): string => {
  if (process.env.VITEPRESS_BASE) return process.env.VITEPRESS_BASE
  // GitHub Actions 自动推断：非 <owner>.github.io 仓库一律使用 /<repo>/ 前缀
  const repo = process.env.GITHUB_REPOSITORY
  if (repo) {
    const [owner, name] = repo.split('/')
    const isUserSite =
      name.toLowerCase() === `${owner.toLowerCase()}.github.io`
    if (!isUserSite) return `/${name}/`
  }
  return '/'
}

export default defineConfig({
  lang: 'zh-CN',
  title: siteName,
  description: siteDescription,

  base: getBase(),
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: false,
  sitemap: { hostname: 'https://chengchufa.github.io' },

  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'theme-color', content: '#4f6ef7' }],
    ['meta', { name: 'author', content: '' }],
    ['meta', { name: 'keywords', content: '机器学习,深度学习,算法,数学基础,笔记,Transformer,SVM,线性代数' }],
    // Open Graph 社交卡片
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: siteName }],
    ['meta', { property: 'og:description', content: siteDescription }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: siteName }],
    ['meta', { name: 'twitter:description', content: siteDescription }]
  ],

  markdown: {
    lineNumbers: true,
    math: true,
    config: (md) => {
      md.use(mathjax3)
    },
    toc: {
      level: [2, 3]
    }
  },

  themeConfig: {
    logo: '/favicon.ico',

    nav: [
      { text: '首页', link: '/' },
      { text: '数学基础', link: '/math/' },
      { text: '机器学习', link: '/ml/' },
      { text: '深度学习', link: '/dl/' },
      { text: '论文笔记', link: '/papers/' },
      { text: '工具教程', link: '/tutorials/' },
      { text: '更新日志', link: '/release' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/math/': [
        {
          text: '数学基础',
          items: [
            { text: '概述', link: '/math/' },
            { text: '1. 线性代数基础', link: '/math/linear-algebra' },
            { text: '2. 概率论基础', link: '/math/probability' },
            { text: '3. 数值计算基础', link: '/math/numerical' },
            { text: '4. 蒙特卡洛方法与 MCMC 采样', link: '/math/mcmc' }
          ]
        }
      ],

      '/ml/': [
        {
          text: '机器学习',
          items: [
            { text: '概述', link: '/ml/' },
            { text: '0. 机器学习简介', link: '/ml/intro' },
            { text: '1. 支持向量机 SVM', link: '/ml/svm' },
            { text: '2. 朴素贝叶斯', link: '/ml/naive-bayes' },
            { text: '3. 决策树', link: '/ml/decision-tree' },
            { text: '4. KNN', link: '/ml/knn' },
            { text: '5. 集成学习', link: '/ml/ensemble' },
            { text: '6. 梯度提升树 GBDT', link: '/ml/gbdt' },
            { text: '7. 特征工程', link: '/ml/feature-engineering' },
            { text: '8. 模型评估', link: '/ml/evaluation' },
            { text: '9. 降维', link: '/ml/dimensionality' },
            { text: '10. 聚类', link: '/ml/clustering' },
            { text: '11. 半监督学习', link: '/ml/semi-supervised' },
            { text: '12. EM 算法', link: '/ml/em' },
            { text: '13. 最大熵算法', link: '/ml/max-entropy' },
            { text: '14. 隐马尔可夫模型 HMM', link: '/ml/hmm' },
            { text: '15. 概率图与条件随机场', link: '/ml/crf' },
            { text: '16. 边际概率推断', link: '/ml/inference' },
            { text: '17. 主题模型', link: '/ml/topic-model' }
          ]
        }
      ],

      '/dl/': [
        {
          text: '深度学习',
          items: [
            { text: '概述', link: '/dl/' },
            { text: '0. 深度学习简介', link: '/dl/intro' },
            { text: '1. 深度前馈神经网络', link: '/dl/feedforward' },
            { text: '2. 反向传播算法', link: '/dl/backprop' },
            { text: '3. 正则化', link: '/dl/regularization' },
            { text: '4. 最优化基础', link: '/dl/optimization' },
            { text: '5. 卷积神经网络 CNN', link: '/dl/cnn' },
            { text: '6. 循环神经网络 RNN', link: '/dl/rnn' }
          ]
        },
        {
          text: 'Transformer 系列',
          collapsed: true,
          items: [
            { text: 'Transformer (1) - 基础结构', link: '/dl/transformer-1' },
            { text: 'Transformer (2) - 注意力机制', link: '/dl/transformer-2' },
            { text: 'Transformer (3) - 位置编码', link: '/dl/transformer-3' },
            { text: 'Transformer (4) - 训练技巧', link: '/dl/transformer-4' },
            { text: 'Transformer (5) - 变体模型', link: '/dl/transformer-5' },
            { text: 'Transformer (6) - 预训练模型', link: '/dl/transformer-6' },
            { text: 'Transformer (7) - BERT 系列', link: '/dl/transformer-7' },
            { text: 'Transformer (8) - GPT 系列', link: '/dl/transformer-8' },
            { text: 'Transformer (9) - 多模态模型', link: '/dl/transformer-9' }
          ]
        },
        {
          text: '专题内容',
          collapsed: true,
          items: [
            { text: '词向量', link: '/dl/word-vector' },
            { text: '句子向量', link: '/dl/sentence-vector' },
            { text: 'CTR 预估（传统方法）', link: '/dl/ctr-classic' },
            { text: 'CTR 预估（神经网络方法 1）', link: '/dl/ctr-nn-1' },
            { text: 'CTR 预估（神经网络方法 2）', link: '/dl/ctr-nn-2' }
          ]
        }
      ],

      '/papers/': [
        {
          text: '论文笔记',
          items: [
            { text: '论文列表', link: '/papers/' },
            { text: '示例：Attention Is All You Need', link: '/papers/transformer-paper' }
          ]
        }
      ],

      '/tutorials/': [
        {
          text: '工具教程',
          items: [
            { text: '教程列表', link: '/tutorials/' },
            { text: 'Claude Code 使用指南', link: '/tutorials/claude-code' }
          ]
        }
      ]
    },

    outline: {
      level: [2, 3],
      label: '目录'
    },

    editLink: {
      pattern: 'https://github.com/Chengchufa/Chengchufa.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Chengchufa/Chengchufa.github.io' }
    ],

    footer: {
      message: '本站内容仅供个人学习使用，转载请注明出处。',
      copyright: `Copyright © ${new Date().getFullYear()} 个人笔记`
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '未找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
})
