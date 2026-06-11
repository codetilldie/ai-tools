# 公司优先的 AI 工具与最新模型分类清单方案

## Summary

目标是广泛收集国内外主流 AI 工具和 AI 模型，但采集顺序不再从工具清单直接展开，而是反向整理为“工具/模型 -> 所属公司 -> 公司最新模型/产品线”的公司优先清单。

最终产物建议为一个 PC 端静态网页和一个结构化 JS 数据源，放在现有目录：

`reports/flashback-ai-training/ai-tools/`

页面展示逻辑：

1. 先看公司。
2. 再看这家公司有哪些 AI 工具。
3. 再看这家公司当前最新或主推的 AI 模型。
4. 最后按岗位、场景、国内/海外、工具类型进行筛选。

## Data Structure

新增或改造 `catalog-data.js`，使用三个核心数据表。

`companies`：公司表

字段包括：

- `id`：公司唯一 ID。
- `name`：公司名称。
- `region`：国内 / 海外。
- `country`：国家或地区。
- `companyType`：模型公司 / 工具公司 / 平台公司 / 设计内容公司 / Agent 框架公司。
- `website`：官网。
- `docsUrl`：官方文档或模型列表。
- `summary`：一句话定位。
- `checkedAt`：最近核验日期。

`models`：模型表

字段包括：

- `id`：模型唯一 ID。
- `companyId`：所属公司 ID。
- `name`：模型名称。
- `family`：模型家族。
- `modality`：文本 / 图像 / 视频 / 音频 / 多模态 / 3D。
- `positioning`：旗舰 / 高性价比 / 轻量 / 编码 / 推理 / 搜索 / 视频生成。
- `contextWindow`：上下文长度，未知则填 `unknown`。
- `availability`：API / App / 开源权重 / 企业私有化 / 限定开放。
- `bestFor`：典型适用场景。
- `sourceUrls`：官方来源链接。
- `checkedAt`：最近核验日期。
- `notes`：重要限制或说明。

`tools`：工具表

字段包括：

- `id`：工具唯一 ID。
- `name`：工具名称。
- `companyId`：所属公司 ID。
- `modelProviderIds`：公开支持或主要使用的模型公司 ID。
- `toolType`：通用对话 / 搜索研究 / 编码 Agent / 设计创作 / 视频音频 / 办公协同 / 企业 Agent / 开发框架。
- `audiences`：适合岗位。
- `bestFor`：适合任务。
- `website`：官网。
- `sourceUrls`：官方来源链接。
- `notes`：底层模型未公开时标记 `undisclosed`，不猜测。

## Collection Scope

首版采用“主流优先”，不做长尾穷举。每家公司先收录 1-5 个当前主推模型或产品线。

海外模型公司：

- OpenAI
- Anthropic
- Google DeepMind
- Meta
- Mistral AI
- xAI
- Cohere
- Perplexity
- Stability AI

国内模型公司：

- DeepSeek
- 阿里巴巴 / Qwen
- Moonshot / Kimi
- 字节跳动 Seed / 豆包 / 火山引擎
- MiniMax
- 智谱 / Z.ai
- 百度文心
- 腾讯混元
- 阶跃星辰
- 商汤
- 昆仑万维

编码与 Agent 工具公司：

- OpenAI / Codex
- Anthropic / Claude Code
- Anysphere / Cursor
- GitHub / Copilot
- Windsurf
- Qoder
- 字节跳动 / TRAE
- Z.ai / OpenClaw
- Nous Research / Hermes Agent
- Dify
- Coze
- LangChain
- CrewAI

设计与内容工具公司：

- Figma
- Pixso
- Canva
- Adobe
- Midjourney
- Runway
- 快手可灵
- 稿定
- Gamma
- Notion

## Initial Official Snapshot

以下作为首版核验起点，实施时仍需重新打开官方来源确认。

OpenAI：

- GPT-5.5
- GPT-5.5 Pro
- GPT-5.4
- GPT-5.4 mini / nano
- GPT-5.3-Codex
- 来源：[OpenAI Models](https://developers.openai.com/api/docs/models/all)

Anthropic：

- Claude Fable 5
- Claude Mythos 5
- Claude Opus 4.8
- Claude Sonnet 4.6
- 来源：[Claude Intro](https://platform.claude.com/docs/en/intro)

Google DeepMind：

- Gemini 3.1 Pro Preview
- Gemini 3.1 Flash-Lite
- Gemini 3.1 Flash Image
- Veo 3.1
- 来源：[Gemini Models](https://ai.google.dev/gemini-api/docs/models)

阿里巴巴 / Qwen：

- Qwen3.7-Max
- Qwen3.7-Plus
- Qwen3-Coder-Plus
- Qwen3.5 多模态系列
- 来源：[Qwen Blog](https://qwen.ai/blog?id=qwen3.7)、[Alibaba Model Studio](https://www.alibabacloud.com/help/en/model-studio/models)

Moonshot / Kimi：

- Kimi K2.6
- 来源：[Kimi API Docs](https://platform.kimi.ai/docs/overview)

字节跳动 Seed / 豆包：

- Seed2.0 Pro
- Seed2.0 Lite
- Seed2.0 Mini
- Doubao-Seed-2.0
- Seedance 2.0
- Seedream 5.0
- 来源：[Seed2.0](https://seed.bytedance.com/en/seed2)、[火山引擎豆包](https://www.volcengine.com/product/doubao)

MiniMax：

- MiniMax M3
- MiniMax M2.7
- Music-2.6
- 来源：[MiniMax Release Notes](https://platform.minimax.io/docs/release-notes/models)

Meta：

- Llama 4 Scout
- Llama 4 Maverick
- Llama 4 Behemoth Preview
- 来源：[Meta Llama 4](https://ai.meta.com/blog/llama-4-multimodal-intelligence/)

Mistral AI：

- Mistral Medium 3.5
- Mistral Small 4
- Mistral Large 3
- Voxtral
- 来源：[Mistral Models](https://docs.mistral.ai/models/overview)

xAI：

- Grok 4.3
- Grok 4.20
- 来源：[xAI Models](https://docs.x.ai/docs/models)

智谱 / Z.ai：

- GLM-5.1
- GLM-5
- GLM-5-Turbo
- GLM-5V-Turbo
- 来源：[GLM Model Overview](https://docs.bigmodel.cn/cn/guide/start/model-overview)

百度文心：

- ERNIE 5.1
- ERNIE 5.0
- ERNIE-X1.1
- ERNIE-4.5-Turbo
- 来源：[百度千帆模型列表](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)

腾讯混元：

- Hunyuan TurboS latest
- Hunyuan 3D 2.1
- Hunyuan Image 3.0
- Hunyuan Translation
- 来源：[腾讯混元产品概述](https://cloud.tencent.com/document/product/1729/104753)

Perplexity：

- Sonar
- Sonar Pro
- Sonar Reasoning Pro
- Sonar Deep Research
- 来源：[Perplexity Sonar Models](https://docs.perplexity.ai/docs/sonar/models)

Cohere：

- Command A+
- Command A
- Command A Vision
- Command A Reasoning
- 来源：[Cohere Models](https://docs.cohere.com/docs/models)

## Page Design

页面保持现有 `ai-tools` 静态页风格，不引入 React、Vite 或新服务。

页面模块：

1. `Hero`：说明这是“公司优先的 AI 工具与模型清单”。
2. `公司索引`：按国内/海外、公司类型筛选。
3. `最新模型表`：按公司展示最新模型、模态、开放方式和官方来源。
4. `工具清单`：展示工具、所属公司、底层模型供应商、适合岗位。
5. `公司详情卡`：展示公司定位、代表工具、最新模型和核验日期。
6. `岗位推荐`：按研发、产品、设计、运营、人力、市场、管理者给出工具和模型组合。
7. `使用规范`：说明数据安全、敏感信息、人工复核、模型幻觉和版本变动风险。

顶部统计：

- 公司数
- 模型数
- 工具数
- 官方来源数
- 最近核验日期

筛选能力：

- 搜索公司名、模型名、工具名。
- 按国内 / 海外筛选。
- 按公司类型筛选。
- 按工具类型筛选。
- 按模态筛选。
- 按岗位筛选。

## Implementation Notes

只修改或新增以下文件：

- `reports/flashback-ai-training/ai-tools/index.html`
- `reports/flashback-ai-training/ai-tools/styles.css`
- `reports/flashback-ai-training/ai-tools/script.js`
- `reports/flashback-ai-training/ai-tools/catalog-data.js`

不新增临时开发服务器。

不把 Markdown、JSON、CSV、数据库文件直接暴露到公开预览目录。

如果需要保留方案文档，建议路径为：

`reports/flashback-ai-training/ai-tools/company-first-ai-catalog-plan.md`

## Validation Plan

数据校验：

- `companies.id` 唯一。
- `models.id` 唯一。
- `tools.id` 唯一。
- 每个 `models.companyId` 必须能匹配公司。
- 每个 `tools.companyId` 必须能匹配公司。
- 每个模型至少有一个官方来源 URL。
- 每家公司至少有官网或官方文档。
- 所有 `checkedAt` 使用 `YYYY-MM-DD` 格式。

页面校验：

- 搜索公司、模型、工具都能命中。
- 国内 / 海外筛选正常。
- 公司类型筛选正常。
- 模态筛选正常。
- 岗位筛选正常。
- 筛选为空时显示空状态。
- 重置筛选后恢复全部内容。

视觉校验：

- `1366x768` 无横向滚动。
- `1440x900` 无卡片重叠。
- `1920x1080` 内容居中，不偏左。
- 长英文模型名允许换行。
- 公司卡、模型卡、工具卡高度变化不导致布局错位。

预览校验：

- 使用 `https://linhai.uno/ai-cases/reports/flashback-ai-training/ai-tools/` 打开页面。
- 页面返回 200。
- `.git`、`.env`、源码根目录等敏感路径返回 403 或 404。
- Chrome 打开域名地址确认页面可用。
- 不使用 `localhost`、IP、临时服务或本地文件路径作为最终交付入口。

## Assumptions

- “最新模型”定义为官方当前推荐、最新发布或仍在官方模型列表中可用的模型。
- 不采用媒体爆料、社交平台传闻或非官方排行榜作为最新模型依据。
- 对底层模型未公开的工具，只标记为“未公开”，不猜测。
- 首版不做价格排名，不做能力排行榜。
- 首版重点是分类清单和可维护数据结构，不追求穷举所有长尾 AI 工具。
- 页面只做 PC 优先适配，不做移动端专项设计。
