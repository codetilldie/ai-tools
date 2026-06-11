export type CatalogDate = `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

export type Region = "国内" | "海外";

export type FocusArea = "Agent Tool" | "Top 模型";

export type CompanyType =
  | "模型公司"
  | "工具公司"
  | "平台公司"
  | "设计内容公司"
  | "Agent 工具公司"
  | "Agent 框架公司";

export type ModelModality =
  | "文本"
  | "图像"
  | "视频"
  | "音频"
  | "多模态"
  | "3D"
  | "unknown";

export type ModelPositioning =
  | "旗舰"
  | "轻量"
  | "高性价比"
  | "推理"
  | "编码"
  | "搜索"
  | "视频生成"
  | "图像生成"
  | "unknown";

export type ModelAvailability =
  | "API"
  | "App"
  | "开源权重"
  | "企业私有化"
  | "限定开放"
  | "unknown";

export type ToolType =
  | "编码 Agent"
  | "通用任务 Agent"
  | "企业 Agent"
  | "工作流编排"
  | "开发框架"
  | "浏览器 Agent"
  | "办公协同 Agent";

export type Audience =
  | "研发"
  | "产品"
  | "设计"
  | "运营"
  | "市场"
  | "管理者";

export type OfficialSource = {
  name: string;
  url: string;
  purpose: string;
  checkedAt: CatalogDate;
};

export type Company = {
  id: string;
  name: string;
  region: Region;
  country: string;
  companyType: CompanyType;
  focusAreas: FocusArea[];
  website: string;
  docsUrl: string;
  summary: string;
  sourceUrls: string[];
  checkedAt: CatalogDate;
  notes: string;
};

export type Model = {
  id: string;
  companyId: Company["id"];
  name: string;
  family: string;
  modality: ModelModality;
  positioning: ModelPositioning;
  contextWindow: string | "unknown";
  availability: ModelAvailability;
  bestFor: string;
  sourceUrls: string[];
  checkedAt: CatalogDate;
  notes: string;
};

export type Tool = {
  id: string;
  name: string;
  companyId: Company["id"];
  modelProviderIds: Company["id"][];
  toolType: ToolType;
  audiences: Audience[];
  bestFor: string;
  website: string;
  sourceUrls: string[];
  checkedAt: CatalogDate;
  notes: string;
};

export type CatalogMeta = {
  version: string;
  generatedAt: CatalogDate | "unknown";
  scope: {
    maxOverseasCompanies: number;
    maxDomesticCompanies: number;
    maxTopModels: number;
    maxAgentTools: number;
    focusAreas: FocusArea[];
  };
  sourcePolicy: string;
};

export const catalogMeta: CatalogMeta = {
  version: "20260611",
  generatedAt: "2026-06-11",
  scope: {
    maxOverseasCompanies: 7,
    maxDomesticCompanies: 7,
    maxTopModels: 15,
    maxAgentTools: 15,
    focusAreas: ["Agent Tool", "Top 模型"],
  },
  sourcePolicy: "Only official sources are accepted. Undisclosed model providers must be marked as undisclosed.",
};

export const officialSources: OfficialSource[] = [
  { name: "OpenAI 官网", url: "https://openai.com", purpose: "公司信息和产品入口", checkedAt: "2026-06-11" },
  { name: "OpenAI 开发者平台", url: "https://developers.openai.com", purpose: "API 文档和开发者资源", checkedAt: "2026-06-11" },
  { name: "Anthropic 官网", url: "https://www.anthropic.com", purpose: "公司信息和产品入口", checkedAt: "2026-06-11" },
  { name: "Claude API 文档", url: "https://platform.claude.com", purpose: "API 文档和模型信息", checkedAt: "2026-06-11" },
  { name: "Google DeepMind 官网", url: "https://deepmind.google", purpose: "研究进展和产品入口", checkedAt: "2026-06-11" },
  { name: "AI at Meta", url: "https://ai.meta.com", purpose: "AI 产品和研究", checkedAt: "2026-06-11" },
  { name: "Meta for Developers AI", url: "https://developers.meta.com/ai/", purpose: "开发者资源和模型", checkedAt: "2026-06-11" },
  { name: "xAI 官网", url: "https://x.ai", purpose: "产品信息和 API 入口", checkedAt: "2026-06-11" },
  { name: "Mistral AI 官网", url: "https://mistral.ai", purpose: "公司信息和产品入口", checkedAt: "2026-06-11" },
  { name: "Mistral AI 文档", url: "https://docs.mistral.ai", purpose: "API 和技术文档", checkedAt: "2026-06-11" },
  { name: "Perplexity 官网", url: "https://www.perplexity.ai", purpose: "产品和帮助中心", checkedAt: "2026-06-11" },
  { name: "Perplexity API 文档", url: "https://docs.perplexity.ai", purpose: "API 技术文档", checkedAt: "2026-06-11" },
  { name: "DeepSeek 官网", url: "https://www.deepseek.com", purpose: "产品信息和 API 入口", checkedAt: "2026-06-11" },
  { name: "Qwen AI", url: "https://qwen.ai", purpose: "Qwen 产品入口", checkedAt: "2026-06-11" },
  { name: "阿里云", url: "https://www.alibabacloud.com", purpose: "Qwen API 和云服务", checkedAt: "2026-06-11" },
  { name: "Moonshot AI 官网", url: "https://www.moonshot.ai", purpose: "公司信息和 Kimi 产品", checkedAt: "2026-06-11" },
  { name: "Kimi API 平台", url: "https://platform.moonshot.ai", purpose: "Kimi API 文档", checkedAt: "2026-06-11" },
  { name: "Seed 官网", url: "https://seed.bytedance.com", purpose: "Seed 模型信息", checkedAt: "2026-06-11" },
  { name: "MiniMax 官网", url: "https://minimax.io", purpose: "公司信息和产品入口", checkedAt: "2026-06-11" },
  { name: "智谱 AI 官网", url: "https://www.zhipuai.cn", purpose: "公司信息和 GLM 产品", checkedAt: "2026-06-11" },
  { name: "GPT-5.5 发布公告", url: "https://openai.com/index/introducing-gpt-5-5/", purpose: "GPT-5.5 发布详情", checkedAt: "2026-06-11" },
  { name: "Claude Fable 5 发布公告", url: "https://www.anthropic.com/news/claude-fable-5-mythos-5", purpose: "Fable 5 发布详情", checkedAt: "2026-06-11" },
  { name: "Claude 模型概览", url: "https://platform.claude.com/docs/en/about-claude/models/overview", purpose: "模型对比和规格", checkedAt: "2026-06-11" },
  { name: "Llama 4 发布博客", url: "https://ai.meta.com/blog/Llama-4-multimodal-intelligence/", purpose: "Llama 4 发布详情", checkedAt: "2026-06-11" },
  { name: "Llama 官网", url: "https://www.llama.com", purpose: "模型信息和下载", checkedAt: "2026-06-11" },
  { name: "Mistral 3 发布公告", url: "https://mistral.ai/news/mistral-3/", purpose: "Mistral 3 发布详情", checkedAt: "2026-06-11" },
  { name: "Mistral 模型页", url: "https://mistral.ai/models/", purpose: "模型列表和规格", checkedAt: "2026-06-11" },
  { name: "MiniMax M3 产品页", url: "https://www.minimax.io/models/text/m3", purpose: "M3 详细规格", checkedAt: "2026-06-11" },
  { name: "Codex 产品页", url: "https://openai.com/codex/", purpose: "Codex 功能和使用", checkedAt: "2026-06-11" },
  { name: "Vibe 产品页", url: "https://mistral.ai/products/vibe/code/", purpose: "Vibe 功能和定价", checkedAt: "2026-06-11" },
  { name: "Comet 产品页", url: "https://www.perplexity.ai/comet/", purpose: "Comet 浏览器信息", checkedAt: "2026-06-11" },
  { name: "UI-TARS 官网", url: "https://seed-tars.com", purpose: "UI-TARS 项目主页", checkedAt: "2026-06-11" },
  { name: "AutoGLM GitHub", url: "https://github.com/zai-org/Open-AutoGLM", purpose: "开源代码和文档", checkedAt: "2026-06-11" },
  { name: "Qwen Studio", url: "https://qwen.ai", purpose: "产品入口", checkedAt: "2026-06-11" },
  { name: "Seed 模型列表", url: "https://seed.bytedance.com/zh/models", purpose: "模型详情列表", checkedAt: "2026-06-11" },
  { name: "GPT-5.5 API 文档", url: "https://developers.openai.com/api/docs/models/gpt-5.5", purpose: "GPT-5.5 API 规格", checkedAt: "2026-06-11" },
  { name: "Z.ai 域名", url: "https://z.ai", purpose: "GLM 模型展示", checkedAt: "2026-06-11" },
  { name: "MiniMax 模型产品页", url: "https://www.minimax.io/models/text", purpose: "模型详细信息和 API", checkedAt: "2026-06-11" },
  { name: "Grok 4.3 文档", url: "https://docs.x.ai/developers/models/grok-4.3", purpose: "Grok 4.3 规格和定价", checkedAt: "2026-06-11" },
  { name: "DeepSeek V4 发布公告", url: "https://api-docs.deepseek.com/news/news260424", purpose: "DeepSeek-V4 上下文窗口和功能", checkedAt: "2026-06-11" },
  { name: "Kimi K2.6 快速开始", url: "https://platform.kimi.ai/docs/guide/kimi-k2-6-quickstart", purpose: "Kimi K2.6 上下文窗口和参数", checkedAt: "2026-06-11" },
  { name: "GLM-5.1 文档", url: "https://docs.bigmodel.cn/cn/guide/models/text/glm-5.1", purpose: "GLM-5.1 上下文窗口和能力", checkedAt: "2026-06-11" },
  { name: "小米 MiMo 官网", url: "https://mimo.xiaomi.com", purpose: "公司信息和产品入口", checkedAt: "2026-06-11" },
  { name: "MiMo-V2.5-Pro 发布页", url: "https://mimo.xiaomi.com/mimo-v2-5-pro", purpose: "旗舰模型规格和开源", checkedAt: "2026-06-11" },
  { name: "Accio Work 页面", url: "https://www.accio.com/work", purpose: "Accio Work 产品信息和使用", checkedAt: "2026-06-11" },
  { name: "Qoder 官网", url: "https://qoder.com/zh", purpose: "Qoder CLI 和 IDE 产品信息", checkedAt: "2026-06-11" },
  { name: "Kimi Code 文档", url: "https://code.kimi.com", purpose: "Kimi Code CLI 开发文档", checkedAt: "2026-06-11" },
  { name: "钉钉悟空官网", url: "https://wukong.dingtalk.com", purpose: "钉钉悟空企业 AI 平台", checkedAt: "2026-06-11" },
  { name: "Claude Code 文档", url: "https://code.claude.com", purpose: "Claude Code 产品文档", checkedAt: "2026-06-11" },
];

export const companies: Company[] = [
  {
    id: "openai",
    name: "OpenAI",
    region: "海外",
    country: "美国",
    companyType: "模型公司",
    focusAreas: ["Agent Tool", "Top 模型"],
    website: "https://openai.com",
    docsUrl: "https://developers.openai.com",
    summary: "通用人工智能研究与产品化，GPT 系列模型、Codex 编码 Agent",
    sourceUrls: ["https://openai.com", "https://developers.openai.com"],
    checkedAt: "2026-06-11",
    notes: "闭源模型，API 定价较高",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    region: "海外",
    country: "美国",
    companyType: "模型公司",
    focusAreas: ["Agent Tool", "Top 模型"],
    website: "https://www.anthropic.com",
    docsUrl: "https://platform.claude.com",
    summary: "AI 安全研究与可靠 AI 系统，Claude 系列模型、MCP 协议",
    sourceUrls: ["https://www.anthropic.com", "https://platform.claude.com"],
    checkedAt: "2026-06-11",
    notes: "Fable 5 自带安全分类器可能拒绝部分请求",
  },
  {
    id: "google-deepmind",
    name: "Google DeepMind",
    region: "海外",
    country: "美国/英国",
    companyType: "模型公司",
    focusAreas: ["Agent Tool", "Top 模型"],
    website: "https://deepmind.google",
    docsUrl: "https://deepmind.google/research/",
    summary: "前沿 AI 研究与科学发现，Gemini 系列模型、Gemma 开源模型",
    sourceUrls: ["https://deepmind.google"],
    checkedAt: "2026-06-11",
    notes: "部分模型闭源，产品矩阵复杂",
  },
  {
    id: "meta",
    name: "Meta",
    region: "海外",
    country: "美国",
    companyType: "模型公司",
    focusAreas: ["Top 模型"],
    website: "https://ai.meta.com",
    docsUrl: "https://developers.meta.com/ai/",
    summary: "开源 AI 模型与社交 AI 产品，Llama 系列开源模型",
    sourceUrls: ["https://ai.meta.com", "https://developers.meta.com/ai/"],
    checkedAt: "2026-06-11",
    notes: "Muse Spark 闭源，Llama 系列已逐步被取代",
  },
  {
    id: "xai",
    name: "xAI",
    region: "海外",
    country: "美国",
    companyType: "模型公司",
    focusAreas: ["Agent Tool", "Top 模型"],
    website: "https://x.ai",
    docsUrl: "https://x.ai",
    summary: "理解宇宙本质的前沿 AI，Grok 系列模型",
    sourceUrls: ["https://x.ai"],
    checkedAt: "2026-06-11",
    notes: "模型版本迭代快，API 可用性取决于平台政策",
  },
  {
    id: "mistral-ai",
    name: "Mistral AI",
    region: "海外",
    country: "法国",
    companyType: "模型公司",
    focusAreas: ["Agent Tool", "Top 模型"],
    website: "https://mistral.ai",
    docsUrl: "https://docs.mistral.ai",
    summary: "开源前沿 AI 与企业级解决方案，Mistral 系列模型、Vibe Agent",
    sourceUrls: ["https://mistral.ai", "https://docs.mistral.ai"],
    checkedAt: "2026-06-11",
    notes: "开源模型许可（Apache 2.0），商业使用友好",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    region: "海外",
    country: "美国",
    companyType: "工具公司",
    focusAreas: ["Agent Tool"],
    website: "https://www.perplexity.ai",
    docsUrl: "https://docs.perplexity.ai",
    summary: "AI 搜索引擎与答案引擎，Comet 浏览器 Agent",
    sourceUrls: ["https://www.perplexity.ai", "https://docs.perplexity.ai"],
    checkedAt: "2026-06-11",
    notes: "底层模型未公开（undisclosed）",
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    region: "国内",
    country: "中国杭州",
    companyType: "模型公司",
    focusAreas: ["Top 模型"],
    website: "https://www.deepseek.com",
    docsUrl: "https://www.deepseek.com",
    summary: "基础模型研究与 AGI，DeepSeek-V4 系列模型",
    sourceUrls: ["https://www.deepseek.com"],
    checkedAt: "2026-06-11",
    notes: "国际访问可能受限",
  },
  {
    id: "alibaba-qwen",
    name: "阿里巴巴 / Qwen",
    region: "国内",
    country: "中国杭州",
    companyType: "模型公司",
    focusAreas: ["Top 模型"],
    website: "https://qwen.ai",
    docsUrl: "https://www.alibabacloud.com",
    summary: "通义系列大模型与云计算 AI，Qwen3 系列模型",
    sourceUrls: ["https://qwen.ai", "https://www.alibabacloud.com"],
    checkedAt: "2026-06-11",
    notes: "API 需通过阿里云国际站或国内站",
  },
  {
    id: "moonshot-kimi",
    name: "Moonshot AI / Kimi",
    region: "国内",
    country: "中国北京",
    companyType: "模型公司",
    focusAreas: ["Agent Tool", "Top 模型"],
    website: "https://www.moonshot.ai",
    docsUrl: "https://platform.moonshot.ai",
    summary: "AGI 研究与长上下文理解，Kimi K2.6 模型",
    sourceUrls: ["https://www.moonshot.ai", "https://platform.moonshot.ai"],
    checkedAt: "2026-06-11",
    notes: "海外访问可能受限",
  },
  {
    id: "bytedance-seed",
    name: "字节跳动 / Seed",
    region: "国内",
    country: "中国北京",
    companyType: "模型公司",
    focusAreas: ["Agent Tool", "Top 模型"],
    website: "https://seed.bytedance.com",
    docsUrl: "https://seed.bytedance.com/zh/models",
    summary: "基础模型研究与 AI 产品化，Seed2.0 模型、豆包 App",
    sourceUrls: ["https://seed.bytedance.com", "https://seed.bytedance.com/zh/models"],
    checkedAt: "2026-06-11",
    notes: "产品矩阵以字节系生态为主",
  },
  {
    id: "minimax",
    name: "MiniMax",
    region: "国内",
    country: "中国",
    companyType: "模型公司",
    focusAreas: ["Agent Tool", "Top 模型"],
    website: "https://minimax.io",
    docsUrl: "https://www.minimax.io/models/text",
    summary: "全栈自研多模态模型家族，MiniMax M1/M2.5/M3 模型",
    sourceUrls: ["https://minimax.io", "https://www.minimax.io/models/text"],
    checkedAt: "2026-06-11",
    notes: "官网部分地区访问需验证",
  },
  {
    id: "zhipu-zai",
    name: "智谱 / Z.ai",
    region: "国内",
    country: "中国北京",
    companyType: "模型公司",
    focusAreas: ["Top 模型"],
    website: "https://www.zhipuai.cn",
    docsUrl: "https://z.ai",
    summary: "GLM 大模型架构与 Agent 工程，GLM-5.1 开源模型",
    sourceUrls: ["https://www.zhipuai.cn", "https://z.ai"],
    checkedAt: "2026-06-11",
    notes: "港股上市公司（02513.HK）",
  },
  {
    id: "xiaomi-mimo",
    name: "小米 / MiMo",
    region: "国内",
    country: "中国北京",
    companyType: "模型公司",
    focusAreas: ["Agent Tool", "Top 模型"],
    website: "https://mimo.xiaomi.com",
    docsUrl: "https://mimo.xiaomi.com",
    summary: "小米 AI 大模型平台，MiMo 系列开源模型，MiMo Code 命令行 Agent",
    sourceUrls: ["https://mimo.xiaomi.com"],
    checkedAt: "2026-06-11",
    notes: "模型全面开源，包含 MiMo-V2.5-Pro 旗舰模型",
  },
];

export const models: Model[] = [
  {
    id: "gpt-5-5",
    companyId: "openai",
    name: "GPT-5.5",
    family: "GPT-5",
    modality: "文本",
    positioning: "旗舰",
    contextWindow: "1,050,000",
    availability: "API",
    bestFor: "复杂推理、编码、专业工作流",
    sourceUrls: ["https://openai.com/index/introducing-gpt-5-5/", "https://developers.openai.com/api/docs/models/gpt-5.5"],
    checkedAt: "2026-06-11",
    notes: "支持 reasoning.effort 参数调节推理深度",
  },
  {
    id: "claude-fable-5",
    companyId: "anthropic",
    name: "Claude Fable 5",
    family: "Claude Fable",
    modality: "文本",
    positioning: "旗舰",
    contextWindow: "1,000,000",
    availability: "API",
    bestFor: "复杂推理、长程 Agent、网络安全",
    sourceUrls: ["https://www.anthropic.com/news/claude-fable-5-mythos-5", "https://platform.claude.com/docs/en/about-claude/models/overview"],
    checkedAt: "2026-06-11",
    notes: "自带安全分类器，定价 $10/1M input tokens",
  },
  {
    id: "claude-sonnet-4-6",
    companyId: "anthropic",
    name: "Claude Sonnet 4.6",
    family: "Claude Sonnet",
    modality: "文本",
    positioning: "高性价比",
    contextWindow: "1,000,000",
    availability: "API",
    bestFor: "通用开发、编码、日常推理",
    sourceUrls: ["https://platform.claude.com/docs/en/about-claude/models/overview"],
    checkedAt: "2026-06-11",
    notes: "速度与智能的最佳平衡点",
  },
  {
    id: "gemini-3-5",
    companyId: "google-deepmind",
    name: "Gemini 3.5",
    family: "Gemini",
    modality: "多模态",
    positioning: "旗舰",
    contextWindow: "1,048,576",
    availability: "API",
    bestFor: "多模态理解、科学发现、Agent 平台",
    sourceUrls: ["https://deepmind.google"],
    checkedAt: "2026-06-11",
    notes: "支持 Agent 操作能力",
  },
  {
    id: "gemma-4",
    companyId: "google-deepmind",
    name: "Gemma 4",
    family: "Gemma",
    modality: "文本",
    positioning: "轻量",
    contextWindow: "256,000",
    availability: "开源权重",
    bestFor: "开发者本地部署、研究",
    sourceUrls: ["https://deepmind.google"],
    checkedAt: "2026-06-11",
    notes: "开源模型，适合开发者",
  },
  {
    id: "llama-4-maverick",
    companyId: "meta",
    name: "Llama 4 Maverick",
    family: "Llama 4",
    modality: "多模态",
    positioning: "旗舰",
    contextWindow: "10,000,000",
    availability: "开源权重",
    bestFor: "多模态应用、长上下文分析、研究",
    sourceUrls: ["https://ai.meta.com/blog/Llama-4-multimodal-intelligence/", "https://www.llama.com"],
    checkedAt: "2026-06-11",
    notes: "MoE 架构，17B 激活 / 128 专家",
  },
  {
    id: "grok-4-3",
    companyId: "xai",
    name: "Grok 4.3",
    family: "Grok",
    modality: "多模态",
    positioning: "旗舰",
    contextWindow: "1,000,000",
    availability: "API",
    bestFor: "推理、编码、语音、图像、视频",
    sourceUrls: ["https://docs.x.ai/developers/models/grok-4.3"],
    checkedAt: "2026-06-11",
    notes: "Colossus 超级集群训练",
  },
  {
    id: "mistral-large-3",
    companyId: "mistral-ai",
    name: "Mistral Large 3",
    family: "Mistral Large",
    modality: "多模态",
    positioning: "旗舰",
    contextWindow: "256,000",
    availability: "开源权重",
    bestFor: "多语言、企业工作流、多模态理解",
    sourceUrls: ["https://mistral.ai/news/mistral-3/", "https://mistral.ai/models/"],
    checkedAt: "2026-06-11",
    notes: "Apache 2.0 许可，MoE 架构 41B 激活 / 675B 总参",
  },
  {
    id: "deepseek-v4",
    companyId: "deepseek",
    name: "DeepSeek-V4",
    family: "DeepSeek",
    modality: "文本",
    positioning: "旗舰",
    contextWindow: "1,000,000",
    availability: "开源权重",
    bestFor: "推理、Agent 能力、编码",
    sourceUrls: ["https://api-docs.deepseek.com/news/news260424"],
    checkedAt: "2026-06-11",
    notes: "预览版本已发布，Agent 能力大幅提升",
  },
  {
    id: "qwen-3-7-max",
    companyId: "alibaba-qwen",
    name: "Qwen3.7-Max",
    family: "Qwen3.7",
    modality: "文本",
    positioning: "旗舰",
    contextWindow: "1,000,000",
    availability: "开源权重",
    bestFor: "Agent 工作流、编码、自动化办公",
    sourceUrls: ["https://qwen.ai"],
    checkedAt: "2026-06-11",
    notes: "专为 Agent 时代设计，支持数百步自主执行",
  },
  {
    id: "kimi-k2-6",
    companyId: "moonshot-kimi",
    name: "Kimi K2.6",
    family: "Kimi K2",
    modality: "多模态",
    positioning: "旗舰",
    contextWindow: "256,000",
    availability: "API",
    bestFor: "编码、Agent 自主执行、多模态理解",
    sourceUrls: ["https://platform.kimi.ai/docs/guide/kimi-k2-6-quickstart"],
    checkedAt: "2026-06-11",
    notes: "原生多模态模型，Agent 性能突出",
  },
  {
    id: "seed-2-0",
    companyId: "bytedance-seed",
    name: "Seed2.0",
    family: "Seed",
    modality: "多模态",
    positioning: "旗舰",
    contextWindow: "256,000",
    availability: "API",
    bestFor: "多模态理解、LLM、Agent 任务",
    sourceUrls: ["https://seed.bytedance.com", "https://seed.bytedance.com/zh/models"],
    checkedAt: "2026-06-11",
    notes: "多模态理解全面升级，Agent 表现大幅强化",
  },
  {
    id: "minimax-m3",
    companyId: "minimax",
    name: "MiniMax M3",
    family: "MiniMax M",
    modality: "多模态",
    positioning: "旗舰",
    contextWindow: "1,000,000",
    availability: "开源权重",
    bestFor: "编码、Agent、1M 上下文、多模态",
    sourceUrls: ["https://www.minimax.io/models/text/m3"],
    checkedAt: "2026-06-11",
    notes: "首个同时具备编码前沿、百万上下文和多模态能力的开源模型",
  },
  {
    id: "glm-5-1",
    companyId: "zhipu-zai",
    name: "GLM-5.1",
    family: "GLM",
    modality: "文本",
    positioning: "旗舰",
    contextWindow: "200,000",
    availability: "开源权重",
    bestFor: "编码、8 小时长程自治 Agent 任务",
    sourceUrls: ["https://docs.bigmodel.cn/cn/guide/models/text/glm-5.1"],
    checkedAt: "2026-06-11",
    notes: "可独立完成最长 8 小时的自主工程任务",
  },
  {
    id: "mimo-v2-5-pro",
    companyId: "xiaomi-mimo",
    name: "MiMo-V2.5-Pro",
    family: "MiMo-V2.5",
    modality: "文本",
    positioning: "旗舰",
    contextWindow: "1,000,000",
    availability: "开源权重",
    bestFor: "编码、Agent 工作流、长程推理",
    sourceUrls: ["https://mimo.xiaomi.com/mimo-v2-5-pro"],
    checkedAt: "2026-06-11",
    notes: "1.02T MoE 模型，42B 激活参数，全面开源",
  },
];

export const tools: Tool[] = [
  {
    id: "codex",
    name: "Codex",
    companyId: "openai",
    modelProviderIds: ["openai"],
    toolType: "通用任务 Agent",
    audiences: ["研发"],
    bestFor: "全栈编码、PR 管理、自动化工作流、并行 Agent 任务",
    website: "https://openai.com/codex/",
    sourceUrls: ["https://openai.com/codex/", "https://developers.openai.com"],
    checkedAt: "2026-06-11",
    notes: "支持 Skills 和 Automations 扩展",
  },
  {
    id: "agents-sdk",
    name: "Agents SDK",
    companyId: "openai",
    modelProviderIds: ["openai"],
    toolType: "开发框架",
    audiences: ["研发"],
    bestFor: "构建代码优先 Agent，支持工具编排、任务交接、审批流",
    website: "https://developers.openai.com",
    sourceUrls: ["https://developers.openai.com"],
    checkedAt: "2026-06-11",
    notes: "开源框架",
  },
  {
    id: "claude",
    name: "Claude Code",
    companyId: "anthropic",
    modelProviderIds: ["anthropic"],
    toolType: "通用任务 Agent",
    audiences: ["研发"],
    bestFor: "终端编码、代码库理解、自动化开发工作流",
    website: "https://code.claude.com",
    sourceUrls: ["https://code.claude.com", "https://www.anthropic.com"],
    checkedAt: "2026-06-11",
    notes: "终端 AI 编码 Agent，开源，支持 MCP、子 Agent、Git 集成",
  },
  {
    id: "gemini-platform",
    name: "Gemini Enterprise Agent Platform",
    companyId: "google-deepmind",
    modelProviderIds: ["google-deepmind"],
    toolType: "企业 Agent",
    audiences: ["研发", "运营"],
    bestFor: "企业级 Agent 平台、多模态任务编排",
    website: "https://deepmind.google",
    sourceUrls: ["https://deepmind.google"],
    checkedAt: "2026-06-11",
    notes: "面向企业的 Agent 平台",
  },
  {
    id: "grok-build",
    name: "Grok (Grok Build)",
    companyId: "xai",
    modelProviderIds: ["xai"],
    toolType: "编码 Agent",
    audiences: ["研发"],
    bestFor: "编码、推理、多模态理解",
    website: "https://x.ai",
    sourceUrls: ["https://x.ai"],
    checkedAt: "2026-06-11",
    notes: "Grok Build 专门用于编码任务",
  },
  {
    id: "vibe",
    name: "Vibe",
    companyId: "mistral-ai",
    modelProviderIds: ["mistral-ai"],
    toolType: "编码 Agent",
    audiences: ["研发"],
    bestFor: "IDE/终端编码、自动化 PR、多 Agent 并行",
    website: "https://mistral.ai/products/vibe/code/",
    sourceUrls: ["https://mistral.ai/products/vibe/code/", "https://mistral.ai"],
    checkedAt: "2026-06-11",
    notes: "支持 Work Mode 和 Code Mode",
  },
  {
    id: "comet",
    name: "Comet",
    companyId: "perplexity",
    modelProviderIds: [],
    toolType: "浏览器 Agent",
    audiences: ["运营", "市场", "管理者"],
    bestFor: "网页操作、购物、邮件、日程管理自动化",
    website: "https://www.perplexity.ai/comet/",
    sourceUrls: ["https://www.perplexity.ai/comet/", "https://www.perplexity.ai"],
    checkedAt: "2026-06-11",
    notes: "AI 浏览器，可执行复杂网页操作，底层模型未公开",
  },
  {
    id: "kimi",
    name: "Kimi Code",
    companyId: "moonshot-kimi",
    modelProviderIds: ["moonshot-kimi"],
    toolType: "通用任务 Agent",
    audiences: ["研发"],
    bestFor: "终端编码、Agent 自主执行、多步骤开发任务",
    website: "https://code.kimi.com",
    sourceUrls: ["https://code.kimi.com", "https://www.moonshot.ai"],
    checkedAt: "2026-06-11",
    notes: "支持多模态和 Agent 能力",
  },
  {
    id: "ui-tars",
    name: "UI-TARS",
    companyId: "bytedance-seed",
    modelProviderIds: ["bytedance-seed"],
    toolType: "浏览器 Agent",
    audiences: ["研发", "运营"],
    bestFor: "原生 GUI 操作、手机/桌面自动化、游戏",
    website: "https://seed-tars.com",
    sourceUrls: ["https://seed-tars.com", "https://seed.bytedance.com"],
    checkedAt: "2026-06-11",
    notes: "多轮强化学习训练的 GUI Agent",
  },
  {
    id: "autoglm",
    name: "AutoGLM",
    companyId: "zhipu-zai",
    modelProviderIds: ["zhipu-zai"],
    toolType: "浏览器 Agent",
    audiences: ["研发", "运营"],
    bestFor: "手机 GUI 自动化、屏幕理解、ADB 控制",
    website: "https://github.com/zai-org/Open-AutoGLM",
    sourceUrls: ["https://github.com/zai-org/Open-AutoGLM"],
    checkedAt: "2026-06-11",
    notes: "开源手机 Agent 框架",
  },
  {
    id: "mcp",
    name: "MCP (Model Context Protocol)",
    companyId: "anthropic",
    modelProviderIds: [],
    toolType: "开发框架",
    audiences: ["研发"],
    bestFor: "Agent 工具互操作协议、连接外部数据源",
    website: "https://www.anthropic.com",
    sourceUrls: ["https://www.anthropic.com"],
    checkedAt: "2026-06-11",
    notes: "开放协议，多厂商支持",
  },
  {
    id: "accio-work",
    name: "Accio Work",
    companyId: "alibaba-qwen",
    modelProviderIds: [],
    toolType: "通用任务 Agent",
    audiences: ["产品", "运营", "管理者"],
    bestFor: "桌面端业务自动化 Agent，可读取本地文件、执行命令、控制浏览器、对接 API",
    website: "https://www.accio.com/work",
    sourceUrls: ["https://www.accio.com/work"],
    checkedAt: "2026-06-11",
    notes: "底层模型支持多供应商（Gemini、GPT-4o、Claude、Qwen）",
  },
  {
    id: "qoder-work",
    name: "Qoder Work",
    companyId: "alibaba-qwen",
    modelProviderIds: ["alibaba-qwen"],
    toolType: "通用任务 Agent",
    audiences: ["研发", "产品"],
    bestFor: "终端编码 Agent，支持文件读写、Shell 命令、代码审查、子 Agent、MCP",
    website: "https://qoder.com/zh",
    sourceUrls: ["https://qoder.com/zh"],
    checkedAt: "2026-06-11",
    notes: "Alibaba 出品，支持 CLI 和 IDE 双模式",
  },
  {
    id: "dingtalk-wukong",
    name: "钉钉悟空",
    companyId: "alibaba-qwen",
    modelProviderIds: [],
    toolType: "通用任务 Agent",
    audiences: ["运营", "管理者"],
    bestFor: "企业 AI 桌面 Agent，直接操作钉钉文档/日历/审批，支持浏览器自动化和本地控制",
    website: "https://wukong.dingtalk.com",
    sourceUrls: ["https://wukong.dingtalk.com"],
    checkedAt: "2026-06-11",
    notes: "底层模型未公开（undisclosed），深度集成钉钉生态",
  },
  {
    id: "mimo-code",
    name: "MiMo Code",
    companyId: "xiaomi-mimo",
    modelProviderIds: ["xiaomi-mimo"],
    toolType: "通用任务 Agent",
    audiences: ["研发"],
    bestFor: "终端编码 Agent，长周期自动化编程、MCP 支持、多步骤任务规划",
    website: "https://mimo.xiaomi.com",
    sourceUrls: ["https://mimo.xiaomi.com"],
    checkedAt: "2026-06-11",
    notes: "小米出品，开源（MIT），支持 OpenCode/OpenClaw 集成",
  },
];
