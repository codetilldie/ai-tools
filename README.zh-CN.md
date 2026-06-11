[English](./README.md) | **中文**

# AI Agent 工具与 Top 模型目录

每日更新的 AI 公司、模型与工具清单，以可筛选的单页网页呈现。

**在线访问：** [codetilldie.github.io/ai-tools/](https://codetilldie.github.io/ai-tools/)

## 数据范围

| 类别 | 上限 |
|---|---|
| 海外 AI 公司 | ≤ 7 家 |
| 国内 AI 公司 | ≤ 7 家 |
| Top 模型 | ≤ 15 个 |
| Agent 工具 | ≤ 15 个 |

所有数据**只采信官方来源**（官网、官方文档、官方博客、API 文档、Release Notes）。未公开底层模型的工具标记为 `undisclosed`，不做猜测。

## 项目结构

```
ai-tools/
├── src/
│   ├── catalog-data.ts   # 唯一数据源 — 公司、模型、工具、来源
│   ├── script.ts         # 应用入口 — 搜索、筛选、排序、视图、抽屉
│   └── styles.css        # Tailwind CSS v4 入口
├── index.html            # Vite 入口 HTML
├── package.json
├── vite.config.ts
├── tsconfig.json
├── .gitignore
├── scripts/
│   └── deploy-gh-pages.sh # 发布 dist/ 到 gh-pages 分支
│ 公司/                    # 每日生成：公司清单与详情卡
│ 模型/                    # 每日生成：Top 模型清单
│ 工具/                    # 每日生成：Agent 工具清单
│ 推荐/                    # 每日生成：岗位推荐清单
│ 来源/                    # 每日生成：官方来源索引
│ 校验/                    # 每日生成：校验报告
│ 日报/                    # 每日生成：每日汇总
└── dist/                  # 构建产物（GitHub Pages 发布内容）
```

## 每日数据流水线

每天按顺序执行 9 个任务：

1. **公司清单** — 从官方来源收集各公司信息
2. **Top 模型清单** — 识别官方当前主推的最新模型
3. **Agent 工具清单** — 识别具备多步骤、编码、工作流或浏览器自动化能力的工具
4. **公司详情卡** — 为每家公司生成结构化档案
5. **岗位推荐** — 为研发、产品、设计、运营、市场、管理者推荐工具/模型组合
6. **来源索引** — 汇总所有官方来源 URL 及其关联对象
7. **校验报告** — 检查数量限制、来源完整性、字段正确性和引用关系
8. **每日汇总** — 总结新增、更新、待复核问题和下一步任务
9. **写入 `src/catalog-data.ts`** — 将校验通过的结果编译为 TypeScript 数据源

更新 `src/catalog-data.ts` 后，运行构建/部署命令刷新线上页面。

## Web 功能

- **4 种视图**：全部、公司、Top 模型、Agent 工具、来源
- **搜索**：全局搜索公司、模型、工具、描述、备注
- **筛选**：按地区、公司类型、模态、定位、开放方式、工具类型、岗位、风险级别
- **排序**：按名称、公司、核验日期
- **公司详情抽屉**：点击公司卡片查看其所有模型和工具
- **数据健康检查**：实时校验范围限制、断裂引用、缺失来源 URL
- **URL 状态同步**：筛选条件持久化到 URL，可分享和刷新恢复

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 类型检查
npm run typecheck

# 生产构建
npm run build

# 预览构建产物
npm run preview
```

## 更新数据

编辑 `src/catalog-data.ts`，这是唯一数据源。应用自动从此文件派生所有筛选、统计和视图。

### 新增公司

1. 在 `companies` 数组中添加 `Company` 条目
2. 如果来源 URL 不存在，添加到 `officialSources`
3. 在 `models` 和 `tools` 中添加对应的模型和工具，关联正确的 `companyId`

### 数据类型

所有数据类型定义在 `src/catalog-data.ts` 顶部：
- `Company` — id, name, region, country, companyType, focusAreas, website, docsUrl, summary, sourceUrls, checkedAt, notes
- `Model` — id, companyId, name, family, modality, positioning, contextWindow, availability, bestFor, sourceUrls, checkedAt, notes
- `Tool` — id, name, companyId, modelProviderIds, toolType, audiences, bestFor, website, sourceUrls, checkedAt, notes
- `OfficialSource` — name, url, purpose, checkedAt

## 部署

通过 **`gh-pages` 分支**发布。不需要 GitHub Actions workflow 配置，也不需要 `workflow` scope 权限。

1. 将源码变更推送到 `main` 分支
2. 运行 `npm run deploy:pages`
3. 命令会自动执行类型检查、构建 `dist/`，并将 `dist/` 内容强制推送到 `gh-pages` 分支
4. 在 GitHub 仓库 Settings > Pages 中设置：Source 为 `Deploy from a branch`，分支为 `gh-pages`，目录为 `/ (root)`

Page 访问地址：[codetilldie.github.io/ai-tools/](https://codetilldie.github.io/ai-tools/)

## 许可证

内部使用。数据来自官方来源，用于培训、选型和内部研究。
