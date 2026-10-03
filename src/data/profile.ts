// Public information migrated from the existing personal site; no private files are imported.
export const profile = {
  name: 'Daniel',
  location: 'China',
  title: "Daniel's Personal Blog",
  github: 'https://github.com/zhoushui521-alt',
  username: 'zhoushui521-alt',
  role: 'AI 应用开发 · 全栈实践',
  roleEn: 'AI Application Development · Full-Stack Practice',
  bio: '我的故事从计算机科学开始。一路接触 Linux、写应用、做服务器测试，如今又走进了 AI 的世界。这个小站记录我做过的东西、还在追问的问题，以及探索中的工程实践。',
  bioEn:
    'My story began with computer science, Linux, application development and server testing. I am now exploring AI applications. This blog is a place for things I build, questions I am still asking and what I learn along the way.'
} as const

export const projects = [
  {
    id: 'mini-agent',
    name: 'MiniAgent · 编程智能体',
    enName: 'MiniAgent · Coding Agent',
    description: '基于 Tau 的个人编程智能体项目，探索工具参数错误反馈与可选的单次运行限制。',
    enDescription:
      'A personal coding agent based on Tau, exploring actionable tool-argument feedback and opt-in per-run limits.',
    links: {
      repository: 'https://github.com/zhoushui521-alt/MiniAgent'
    }
  },
  {
    id: 'study-material-assistant',
    name: '学习资料助手',
    enName: 'Study Material Assistant',
    description: '围绕学习资料做检索问答，探索证据引用、检索评测和需要人工确认的工作流。',
    enDescription:
      'Retrieval over learning materials, with evidence citations, retrieval evaluation and workflows requiring human approval.',
    links: {
      repository: 'https://github.com/zhoushui521-alt/Study-Material-Assistant'
    }
  },
  {
    id: 'personal-site',
    name: 'Personal Site · 个人主页',
    enName: 'Personal Site',
    description: '用 Next.js 和 React 构建的个人网站，集中展示个人介绍、项目与学习记录。',
    enDescription:
      'A personal website built with Next.js and React, bringing together an introduction, projects and learning records.',
    links: {
      repository: 'https://github.com/zhoushui521-alt/personal-site'
    }
  }
]
