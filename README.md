# Daniel's Personal Blog

基于 [joyehuang/blog](https://github.com/joyehuang/blog) 和 Astro Pure 的中英双语个人博客。保留模板布局、主题、入场动画、搜索和终端浏览方式。

## 当前内容

- 个人简介、教育与工程经历、6 个项目摘要迁自旧个人站点。
- 4 条工程日志迁入 Notes，保留原始日期及历史证据边界；首篇正式文章讨论人工智能辅助学习；实验室、分享和友链暂为空。
- 头像来自 GitHub 公开账号 zhoushui521-alt，仅公开 GitHub 联系方式。
- 原作者文章、活动、收款码、外部统计与评论配置已移除或关闭；机器人不启用，终端只浏览公开内容，不模拟智能体回复。

## 本地运行

需要 Node.js 22.x 与 Bun 1.3.10。

```sh
bun install --frozen-lockfile
bun dev
# 已安装依赖时也可以用 npm run dev
bun run check
bun test
bun run build
```

## 内容维护

- 站点设置：src/site.config.ts
- 个人信息及项目：src/data/profile.ts
- 中文/英文首页：src/components/home/DanielHome.astro
- 文章、笔记：src/content/blog、src/content/notes
- 关于与联系：src/pages/about、src/pages/contact 及对应 en 目录
- 头像与图标：src/assets/avatar.png、public/favicon

## 发布与改进流程

- 博客文章的发布、修改，以及正常的小问题，由站点作者与协作助手沟通后直接提交和推送，不要求先创建 Issue（议题）或 PR（拉取请求）。
- 涉及较大的功能、设计或交互改进时，先用议题说明问题和预期效果，再通过独立分支与拉取请求审阅、确认后合并。
- 按改动影响完成必要检查；文章和小改动保持轻量，不为流程本身增加步骤。隐私检查仍适用于所有公开提交。

## 后续部署

尚未部署，也未绑定域名。保留 Vercel 适配器。部署时设置 PUBLIC_SITE_URL 为最终访问地址；未设置时使用 Vercel 项目默认地址，本地回退到 http://localhost:4321。新域名不会自动证明旧项目链接可用。评论当前关闭，后续接入自己的服务再启用。

## 公开边界与来源

这里只保存可公开的站点内容，不迁移旧站环境变量、账号凭据、数据库、私人知识库、日志或图库。项目记录中的验证日期属于历史资料，并未在此次迁移中重新运行相应项目。模板代码保留上游 Apache-2.0 许可证与主题署名；旧作者文章不作为 Daniel 的作品。

### 上传前的隐私检查

- 本仓库公开。只提交已经确认可公开的源码、配置样例、头像和博客内容。
- 忽略真实环境变量、私钥、证书、数据库、本地凭据、智能体配置、私人笔记、依赖及构建产物。
- 私人材料放在仓库之外，或放入已忽略的 private、local-notes、resume 目录；不要放入 public 或 src/content。
- .env.example 仅提供公开配置示例，不填写真实密钥。
- .gitignore 只影响尚未跟踪的文件，不能移除已提交的文件或历史；提交前检查暂存内容，上传前检查历史。发现真实密钥曾被提交时，应先停止上传并处理密钥和相关历史。
- 本仓库从审查后的当前快照建立独立历史，不导入上游旧提交；模板来源和 Apache-2.0 许可证仍保留。
