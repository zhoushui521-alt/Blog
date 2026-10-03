/** SEO-only copy. Visible headings and article metadata remain owned by their pages. */
const sections: Record<string, [string, string, string, string]> = {
  '/': [
    '首页',
    'Daniel 的个人博客：记录 AI Agent、软件工程与学习实践，汇集技术文章、笔记和开源项目。',
    'Home',
    'Daniel’s personal blog on AI agents, software engineering, and learning, with technical articles, notes, and open-source projects.'
  ],
  '/about': [
    '关于我',
    '了解 Daniel：个人介绍、学习与开发经历，以及日常使用的开发工具、设计软件和设备。',
    'About',
    'Meet Daniel: personal background, learning and development experience, and the tools, design software, and equipment used day to day.'
  ],
  '/contact': [
    '联系我',
    '通过 GitHub 与 Daniel 交流 AI 应用、全栈开发和项目实践。',
    'Contact',
    'Find Daniel on GitHub to discuss AI applications and project work.'
  ],
  '/projects': [
    'Open Source',
    'Daniel 的公开源码项目：编程智能体、学习资料助手与个人网站。',
    'Open Source',
    'Explore Daniel’s public repositories for a coding agent, study material assistant and personal website.'
  ],
  '/links': [
    '友情链接',
    'Daniel 的朋友与独立博客，发现不同作者的技术记录、生活分享和个人网站。',
    'Links',
    'Discover friends and independent blogs in Daniel’s blogroll, with links to personal websites, technical writing, and everyday stories.'
  ],
  '/curated': [
    '精选阅读',
    '筛选值得阅读的技术博客、论文、报告和开源项目，附来源链接与推荐理由。',
    'Curated',
    'Selected technical blogs, papers, reports, and repositories, with source links and notes on why they are worth reading.'
  ],
  '/tags': [
    '博客标签',
    '按主题浏览博客文章，从标签进入相关技术实践、原理解析与学习记录。',
    'Blog tags',
    'Browse blog topics and find related engineering practice, technical explanations, and learning records through their tags.'
  ],
  '/notes/tags': [
    '笔记标签',
    '按标签查找学习笔记、代码片段、研究记录与尚在完善的想法。',
    'Note tags',
    'Find learning notes, code snippets, research records, and developing ideas by tag.'
  ],
  '/archives/agent-onboarding-guide-v1': [
    '【存档】Agent 入门指南 v1.0',
    '2026 年 5 月 17 日发布的 Agent 入门指南 v1.0 历史存档，保留当时的学习路线与内容，并提供最新版本入口。',
    'Agent onboarding guide v1 archive',
    'The original May 17, 2026 Agent onboarding guide, preserved as a historical snapshot with a link to the maintained version.'
  ],
  '/v2': [
    'Daniel · AI Agent 产品工程师 · V2',
    'Daniel 的 V2 个人主页，展示 AI Agent 项目、开源仓库与近期文章和笔记。',
    'Daniel — AI Agent Product Engineer · V2',
    'Daniel’s V2 portfolio with AI agent projects, open-source repositories, and recent articles and notes.'
  ],
  '/archives': [
    '文章归档',
    '按年份回顾 Daniel 已发布的博客文章，查找不同阶段的技术探索与学习记录。',
    'Archives',
    'Browse Daniel’s published articles by year and revisit technical explorations and learning records.'
  ]
}

export function sectionMetadata(pathname: string) {
  const en = /^\/en(?:\/|$)/.test(pathname)
  const bare = (en ? pathname.slice(3) : pathname).replace(/\/$/, '') || '/'
  const copy = sections[bare]
  return copy ? { title: copy[en ? 2 : 0], description: copy[en ? 3 : 1] } : undefined
}

export function listingMetadata(
  kind: 'blog' | 'notes' | 'lab',
  en: boolean,
  page: number,
  titles: string[],
  tag?: string | number
) {
  const name = en
    ? { blog: 'Blog', notes: 'Notes', lab: 'Lab' }[kind]
    : { blog: '博客', notes: '笔记', lab: '实验室' }[kind]
  const subject = tag ? (en ? `${name} tagged “${tag}”` : `${name} · ${tag} 标签`) : name
  const suffix = en ? `Page ${page}` : `第 ${page} 页`
  const examples = titles.slice(0, 3).join(en ? '; ' : '；')
  return {
    title: `${subject} · ${suffix}`,
    description: en
      ? `${subject}, page ${page}. ${examples ? `On this page: ${examples}.` : 'Browse published entries.'}`
      : `${subject}，第 ${page} 页。${examples ? `本页收录：${examples}。` : '浏览已发布的记录。'}`
  }
}
