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
    id: 'bookmark-manager',
    name: '留页 · 网址收藏夹',
    description:
      '把公开网页安全保存为可搜索的 Markdown 阅读档案：从 URL 策略、受限抓取、正文提取到事务持久化和四字段检索。',
    stack: [
      'Next.js 16',
      'TypeScript',
      'SQLite/libSQL',
      'Drizzle ORM',
      'Readability',
      'Turndown',
      'Vitest',
      'Vercel'
    ],
    year: '2026',
    verified: '2026-08-12',
    links: {
      demo: 'https://bookmark-manager-black.vercel.app'
    },
    enName: 'Liuye · Web Bookmark Archive',
    enDescription:
      'Save public web pages as searchable Markdown archives, with URL validation, bounded fetching and transactional storage.'
  },
  {
    id: 'study-material-assistant',
    name: '学习资料助手 · 可追溯 RAG',
    description:
      '将固定 LCEL RAG、受限工具 Agent 和自定义 LangGraph 分层：检索负责证据，Agent 只整理证据，StateGraph 管理确认、进度、重试与恢复。',
    stack: [
      'Python',
      'LangChain',
      'LCEL',
      'Chroma',
      'Hybrid Retrieval',
      'LangGraph',
      'SQLite',
      'Unittest'
    ],
    year: '2026',
    verified: '2026-08-12',
    links: {},
    enName: 'Study Material Assistant · Traceable RAG',
    enDescription:
      'A layered learning assistant: fixed retrieval, bounded agent tools and a state graph for approval, progress and recovery.'
  },
  {
    id: 'personal-site',
    name: 'AI Native Portfolio',
    description:
      '从静态履历页升级为可搜索、可追溯、可订阅的 AI 工程案例库，并把无障碍、性能和证据边界作为产品功能。',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Framer Motion', 'GSAP'],
    year: '2026',
    verified: '2026-08-13',
    links: {
      demo: 'https://personal-site-dun-psi.vercel.app',
      repository: 'https://github.com/zhoushui521-alt/personal-site'
    },
    enName: 'Personal Site · Engineering Portfolio',
    enDescription:
      'A personal notebook and project portfolio with searchable cases, engineering logs and explicit evidence boundaries.'
  },
  {
    id: 'atlas-900',
    name: '昇腾 Atlas 900 A3 SuperPoD 服务器测试',
    description:
      '参与 Atlas 900 A3 SuperPoD 服务器测试与问题定位，把系统测试、模块联调和证据意识带入后续 AI 工程实践。',
    stack: ['Linux', 'Shell', 'Python', 'NPU', 'CANN', 'MindSpore', 'RoCE'],
    year: '2025',
    verified: '2026-08-12',
    links: {},
    enName: 'Ascend Atlas 900 · Cluster Testing',
    enDescription:
      'Training-cluster testing and troubleshooting, including hardware and driver compatibility and module integration.'
  },
  {
    id: 'automotive',
    name: '车载中控系统设计与实现',
    description: 'Linux 车载中控实践，覆盖界面、音视频、多线程、文件管理和嵌入式适配。',
    stack: ['Linux', 'C / C++', 'Qt', '多线程', 'SQLite', '交叉编译'],
    year: '2025',
    verified: '2026-08-12',
    links: {},
    enName: 'In-vehicle Control System',
    enDescription:
      'Linux and Qt/C++ practice covering media playback, threading and file management.'
  },
  {
    id: 'homework-system',
    name: '网上作业系统',
    description: '前后端分离的作业管理实践，关注多角色权限、文件流程和数据库查询。',
    stack: ['Java', 'MySQL', 'RBAC', 'REST API', 'SQL 优化'],
    year: '2024',
    verified: '2026-08-12',
    links: {},
    enName: 'Online Homework System',
    enDescription:
      'A Java and MySQL application covering role-based permissions, assignment submission and database queries.'
  }
]
