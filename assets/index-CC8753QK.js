(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const u={scope:{maxOverseasCompanies:7,maxDomesticCompanies:7,maxTopModels:15,maxAgentTools:15}},U=[{name:"OpenAI 官网",url:"https://openai.com",purpose:"公司信息和产品入口",checkedAt:"2026-06-11"},{name:"OpenAI 开发者平台",url:"https://developers.openai.com",purpose:"API 文档和开发者资源",checkedAt:"2026-06-11"},{name:"Anthropic 官网",url:"https://www.anthropic.com",purpose:"公司信息和产品入口",checkedAt:"2026-06-11"},{name:"Claude API 文档",url:"https://platform.claude.com",purpose:"API 文档和模型信息",checkedAt:"2026-06-11"},{name:"Google DeepMind 官网",url:"https://deepmind.google",purpose:"研究进展和产品入口",checkedAt:"2026-06-11"},{name:"AI at Meta",url:"https://ai.meta.com",purpose:"AI 产品和研究",checkedAt:"2026-06-11"},{name:"Meta for Developers AI",url:"https://developers.meta.com/ai/",purpose:"开发者资源和模型",checkedAt:"2026-06-11"},{name:"xAI 官网",url:"https://x.ai",purpose:"产品信息和 API 入口",checkedAt:"2026-06-11"},{name:"Mistral AI 官网",url:"https://mistral.ai",purpose:"公司信息和产品入口",checkedAt:"2026-06-11"},{name:"Mistral AI 文档",url:"https://docs.mistral.ai",purpose:"API 和技术文档",checkedAt:"2026-06-11"},{name:"Perplexity 官网",url:"https://www.perplexity.ai",purpose:"产品和帮助中心",checkedAt:"2026-06-11"},{name:"Perplexity API 文档",url:"https://docs.perplexity.ai",purpose:"API 技术文档",checkedAt:"2026-06-11"},{name:"DeepSeek 官网",url:"https://www.deepseek.com",purpose:"产品信息和 API 入口",checkedAt:"2026-06-11"},{name:"Qwen AI",url:"https://qwen.ai",purpose:"Qwen 产品入口",checkedAt:"2026-06-11"},{name:"阿里云",url:"https://www.alibabacloud.com",purpose:"Qwen API 和云服务",checkedAt:"2026-06-11"},{name:"Moonshot AI 官网",url:"https://www.moonshot.ai",purpose:"公司信息和 Kimi 产品",checkedAt:"2026-06-11"},{name:"Kimi API 平台",url:"https://platform.moonshot.ai",purpose:"Kimi API 文档",checkedAt:"2026-06-11"},{name:"Seed 官网",url:"https://seed.bytedance.com",purpose:"Seed 模型信息",checkedAt:"2026-06-11"},{name:"MiniMax 官网",url:"https://minimax.io",purpose:"公司信息和产品入口",checkedAt:"2026-06-11"},{name:"智谱 AI 官网",url:"https://www.zhipuai.cn",purpose:"公司信息和 GLM 产品",checkedAt:"2026-06-11"},{name:"GPT-5.5 发布公告",url:"https://openai.com/index/introducing-gpt-5-5/",purpose:"GPT-5.5 发布详情",checkedAt:"2026-06-11"},{name:"Claude Fable 5 发布公告",url:"https://www.anthropic.com/news/claude-fable-5-mythos-5",purpose:"Fable 5 发布详情",checkedAt:"2026-06-11"},{name:"Claude 模型概览",url:"https://platform.claude.com/docs/en/about-claude/models/overview",purpose:"模型对比和规格",checkedAt:"2026-06-11"},{name:"Llama 4 发布博客",url:"https://ai.meta.com/blog/Llama-4-multimodal-intelligence/",purpose:"Llama 4 发布详情",checkedAt:"2026-06-11"},{name:"Llama 官网",url:"https://www.llama.com",purpose:"模型信息和下载",checkedAt:"2026-06-11"},{name:"Mistral 3 发布公告",url:"https://mistral.ai/news/mistral-3/",purpose:"Mistral 3 发布详情",checkedAt:"2026-06-11"},{name:"Mistral 模型页",url:"https://mistral.ai/models/",purpose:"模型列表和规格",checkedAt:"2026-06-11"},{name:"MiniMax M3 产品页",url:"https://www.minimax.io/models/text/m3",purpose:"M3 详细规格",checkedAt:"2026-06-11"},{name:"Codex 产品页",url:"https://openai.com/codex/",purpose:"Codex 功能和使用",checkedAt:"2026-06-11"},{name:"Vibe 产品页",url:"https://mistral.ai/products/vibe/code/",purpose:"Vibe 功能和定价",checkedAt:"2026-06-11"},{name:"Comet 产品页",url:"https://www.perplexity.ai/comet/",purpose:"Comet 浏览器信息",checkedAt:"2026-06-11"},{name:"UI-TARS 官网",url:"https://seed-tars.com",purpose:"UI-TARS 项目主页",checkedAt:"2026-06-11"},{name:"AutoGLM GitHub",url:"https://github.com/zai-org/Open-AutoGLM",purpose:"开源代码和文档",checkedAt:"2026-06-11"},{name:"Qwen Studio",url:"https://qwen.ai",purpose:"产品入口",checkedAt:"2026-06-11"},{name:"Seed 模型列表",url:"https://seed.bytedance.com/zh/models",purpose:"模型详情列表",checkedAt:"2026-06-11"},{name:"GPT-5.5 API 文档",url:"https://developers.openai.com/api/docs/models/gpt-5.5",purpose:"GPT-5.5 API 规格",checkedAt:"2026-06-11"},{name:"Z.ai 域名",url:"https://z.ai",purpose:"GLM 模型展示",checkedAt:"2026-06-11"},{name:"MiniMax 模型产品页",url:"https://www.minimax.io/models/text",purpose:"模型详细信息和 API",checkedAt:"2026-06-11"},{name:"Grok 4.3 文档",url:"https://docs.x.ai/developers/models/grok-4.3",purpose:"Grok 4.3 规格和定价",checkedAt:"2026-06-11"},{name:"DeepSeek V4 发布公告",url:"https://api-docs.deepseek.com/news/news260424",purpose:"DeepSeek-V4 上下文窗口和功能",checkedAt:"2026-06-11"},{name:"Kimi K2.6 快速开始",url:"https://platform.kimi.ai/docs/guide/kimi-k2-6-quickstart",purpose:"Kimi K2.6 上下文窗口和参数",checkedAt:"2026-06-11"},{name:"GLM-5.1 文档",url:"https://docs.bigmodel.cn/cn/guide/models/text/glm-5.1",purpose:"GLM-5.1 上下文窗口和能力",checkedAt:"2026-06-11"},{name:"小米 MiMo 官网",url:"https://mimo.xiaomi.com",purpose:"公司信息和产品入口",checkedAt:"2026-06-11"},{name:"MiMo-V2.5-Pro 发布页",url:"https://mimo.xiaomi.com/mimo-v2-5-pro",purpose:"旗舰模型规格和开源",checkedAt:"2026-06-11"},{name:"Accio Work 页面",url:"https://www.accio.com/work",purpose:"Accio Work 产品信息和使用",checkedAt:"2026-06-11"},{name:"Qoder 官网",url:"https://qoder.com/zh",purpose:"Qoder CLI 和 IDE 产品信息",checkedAt:"2026-06-11"},{name:"Kimi Code 文档",url:"https://code.kimi.com",purpose:"Kimi Code CLI 开发文档",checkedAt:"2026-06-11"},{name:"钉钉悟空官网",url:"https://wukong.dingtalk.com",purpose:"钉钉悟空企业 AI 平台",checkedAt:"2026-06-11"},{name:"Claude Code 文档",url:"https://code.claude.com",purpose:"Claude Code 产品文档",checkedAt:"2026-06-11"}],f=[{id:"openai",name:"OpenAI",region:"海外",country:"美国",companyType:"模型公司",focusAreas:["Agent Tool","Top 模型"],website:"https://openai.com",docsUrl:"https://developers.openai.com",summary:"通用人工智能研究与产品化，GPT 系列模型、Codex 编码 Agent",sourceUrls:["https://openai.com","https://developers.openai.com"],checkedAt:"2026-06-11",notes:"闭源模型，API 定价较高"},{id:"anthropic",name:"Anthropic",region:"海外",country:"美国",companyType:"模型公司",focusAreas:["Agent Tool","Top 模型"],website:"https://www.anthropic.com",docsUrl:"https://platform.claude.com",summary:"AI 安全研究与可靠 AI 系统，Claude 系列模型、MCP 协议",sourceUrls:["https://www.anthropic.com","https://platform.claude.com"],checkedAt:"2026-06-11",notes:"Fable 5 自带安全分类器可能拒绝部分请求"},{id:"google-deepmind",name:"Google DeepMind",region:"海外",country:"美国/英国",companyType:"模型公司",focusAreas:["Agent Tool","Top 模型"],website:"https://deepmind.google",docsUrl:"https://deepmind.google/research/",summary:"前沿 AI 研究与科学发现，Gemini 系列模型、Gemma 开源模型",sourceUrls:["https://deepmind.google"],checkedAt:"2026-06-11",notes:"部分模型闭源，产品矩阵复杂"},{id:"meta",name:"Meta",region:"海外",country:"美国",companyType:"模型公司",focusAreas:["Top 模型"],website:"https://ai.meta.com",docsUrl:"https://developers.meta.com/ai/",summary:"开源 AI 模型与社交 AI 产品，Llama 系列开源模型",sourceUrls:["https://ai.meta.com","https://developers.meta.com/ai/"],checkedAt:"2026-06-11",notes:"Muse Spark 闭源，Llama 系列已逐步被取代"},{id:"xai",name:"xAI",region:"海外",country:"美国",companyType:"模型公司",focusAreas:["Agent Tool","Top 模型"],website:"https://x.ai",docsUrl:"https://x.ai",summary:"理解宇宙本质的前沿 AI，Grok 系列模型",sourceUrls:["https://x.ai"],checkedAt:"2026-06-11",notes:"模型版本迭代快，API 可用性取决于平台政策"},{id:"mistral-ai",name:"Mistral AI",region:"海外",country:"法国",companyType:"模型公司",focusAreas:["Agent Tool","Top 模型"],website:"https://mistral.ai",docsUrl:"https://docs.mistral.ai",summary:"开源前沿 AI 与企业级解决方案，Mistral 系列模型、Vibe Agent",sourceUrls:["https://mistral.ai","https://docs.mistral.ai"],checkedAt:"2026-06-11",notes:"开源模型许可（Apache 2.0），商业使用友好"},{id:"perplexity",name:"Perplexity",region:"海外",country:"美国",companyType:"工具公司",focusAreas:["Agent Tool"],website:"https://www.perplexity.ai",docsUrl:"https://docs.perplexity.ai",summary:"AI 搜索引擎与答案引擎，Comet 浏览器 Agent",sourceUrls:["https://www.perplexity.ai","https://docs.perplexity.ai"],checkedAt:"2026-06-11",notes:"底层模型未公开（undisclosed）"},{id:"deepseek",name:"DeepSeek",region:"国内",country:"中国杭州",companyType:"模型公司",focusAreas:["Top 模型"],website:"https://www.deepseek.com",docsUrl:"https://www.deepseek.com",summary:"基础模型研究与 AGI，DeepSeek-V4 系列模型",sourceUrls:["https://www.deepseek.com"],checkedAt:"2026-06-11",notes:"国际访问可能受限"},{id:"alibaba-qwen",name:"阿里巴巴 / Qwen",region:"国内",country:"中国杭州",companyType:"模型公司",focusAreas:["Top 模型"],website:"https://qwen.ai",docsUrl:"https://www.alibabacloud.com",summary:"通义系列大模型与云计算 AI，Qwen3 系列模型",sourceUrls:["https://qwen.ai","https://www.alibabacloud.com"],checkedAt:"2026-06-11",notes:"API 需通过阿里云国际站或国内站"},{id:"moonshot-kimi",name:"Moonshot AI / Kimi",region:"国内",country:"中国北京",companyType:"模型公司",focusAreas:["Agent Tool","Top 模型"],website:"https://www.moonshot.ai",docsUrl:"https://platform.moonshot.ai",summary:"AGI 研究与长上下文理解，Kimi K2.6 模型",sourceUrls:["https://www.moonshot.ai","https://platform.moonshot.ai"],checkedAt:"2026-06-11",notes:"海外访问可能受限"},{id:"bytedance-seed",name:"字节跳动 / Seed",region:"国内",country:"中国北京",companyType:"模型公司",focusAreas:["Agent Tool","Top 模型"],website:"https://seed.bytedance.com",docsUrl:"https://seed.bytedance.com/zh/models",summary:"基础模型研究与 AI 产品化，Seed2.0 模型、豆包 App",sourceUrls:["https://seed.bytedance.com","https://seed.bytedance.com/zh/models"],checkedAt:"2026-06-11",notes:"产品矩阵以字节系生态为主"},{id:"minimax",name:"MiniMax",region:"国内",country:"中国",companyType:"模型公司",focusAreas:["Agent Tool","Top 模型"],website:"https://minimax.io",docsUrl:"https://www.minimax.io/models/text",summary:"全栈自研多模态模型家族，MiniMax M1/M2.5/M3 模型",sourceUrls:["https://minimax.io","https://www.minimax.io/models/text"],checkedAt:"2026-06-11",notes:"官网部分地区访问需验证"},{id:"zhipu-zai",name:"智谱 / Z.ai",region:"国内",country:"中国北京",companyType:"模型公司",focusAreas:["Top 模型"],website:"https://www.zhipuai.cn",docsUrl:"https://z.ai",summary:"GLM 大模型架构与 Agent 工程，GLM-5.1 开源模型",sourceUrls:["https://www.zhipuai.cn","https://z.ai"],checkedAt:"2026-06-11",notes:"港股上市公司（02513.HK）"},{id:"xiaomi-mimo",name:"小米 / MiMo",region:"国内",country:"中国北京",companyType:"模型公司",focusAreas:["Agent Tool","Top 模型"],website:"https://mimo.xiaomi.com",docsUrl:"https://mimo.xiaomi.com",summary:"小米 AI 大模型平台，MiMo 系列开源模型，MiMo Code 命令行 Agent",sourceUrls:["https://mimo.xiaomi.com"],checkedAt:"2026-06-11",notes:"模型全面开源，包含 MiMo-V2.5-Pro 旗舰模型"}],h=[{id:"gpt-5-5",companyId:"openai",name:"GPT-5.5",family:"GPT-5",modality:"文本",positioning:"旗舰",contextWindow:"1,050,000",availability:"API",bestFor:"复杂推理、编码、专业工作流",sourceUrls:["https://openai.com/index/introducing-gpt-5-5/","https://developers.openai.com/api/docs/models/gpt-5.5"],checkedAt:"2026-06-11",notes:"支持 reasoning.effort 参数调节推理深度"},{id:"claude-fable-5",companyId:"anthropic",name:"Claude Fable 5",family:"Claude Fable",modality:"文本",positioning:"旗舰",contextWindow:"1,000,000",availability:"API",bestFor:"复杂推理、长程 Agent、网络安全",sourceUrls:["https://www.anthropic.com/news/claude-fable-5-mythos-5","https://platform.claude.com/docs/en/about-claude/models/overview"],checkedAt:"2026-06-11",notes:"自带安全分类器，定价 $10/1M input tokens"},{id:"claude-sonnet-4-6",companyId:"anthropic",name:"Claude Sonnet 4.6",family:"Claude Sonnet",modality:"文本",positioning:"高性价比",contextWindow:"1,000,000",availability:"API",bestFor:"通用开发、编码、日常推理",sourceUrls:["https://platform.claude.com/docs/en/about-claude/models/overview"],checkedAt:"2026-06-11",notes:"速度与智能的最佳平衡点"},{id:"gemini-3-5",companyId:"google-deepmind",name:"Gemini 3.5",family:"Gemini",modality:"多模态",positioning:"旗舰",contextWindow:"1,048,576",availability:"API",bestFor:"多模态理解、科学发现、Agent 平台",sourceUrls:["https://deepmind.google"],checkedAt:"2026-06-11",notes:"支持 Agent 操作能力"},{id:"gemma-4",companyId:"google-deepmind",name:"Gemma 4",family:"Gemma",modality:"文本",positioning:"轻量",contextWindow:"256,000",availability:"开源权重",bestFor:"开发者本地部署、研究",sourceUrls:["https://deepmind.google"],checkedAt:"2026-06-11",notes:"开源模型，适合开发者"},{id:"llama-4-maverick",companyId:"meta",name:"Llama 4 Maverick",family:"Llama 4",modality:"多模态",positioning:"旗舰",contextWindow:"10,000,000",availability:"开源权重",bestFor:"多模态应用、长上下文分析、研究",sourceUrls:["https://ai.meta.com/blog/Llama-4-multimodal-intelligence/","https://www.llama.com"],checkedAt:"2026-06-11",notes:"MoE 架构，17B 激活 / 128 专家"},{id:"grok-4-3",companyId:"xai",name:"Grok 4.3",family:"Grok",modality:"多模态",positioning:"旗舰",contextWindow:"1,000,000",availability:"API",bestFor:"推理、编码、语音、图像、视频",sourceUrls:["https://docs.x.ai/developers/models/grok-4.3"],checkedAt:"2026-06-11",notes:"Colossus 超级集群训练"},{id:"mistral-large-3",companyId:"mistral-ai",name:"Mistral Large 3",family:"Mistral Large",modality:"多模态",positioning:"旗舰",contextWindow:"256,000",availability:"开源权重",bestFor:"多语言、企业工作流、多模态理解",sourceUrls:["https://mistral.ai/news/mistral-3/","https://mistral.ai/models/"],checkedAt:"2026-06-11",notes:"Apache 2.0 许可，MoE 架构 41B 激活 / 675B 总参"},{id:"deepseek-v4",companyId:"deepseek",name:"DeepSeek-V4",family:"DeepSeek",modality:"文本",positioning:"旗舰",contextWindow:"1,000,000",availability:"开源权重",bestFor:"推理、Agent 能力、编码",sourceUrls:["https://api-docs.deepseek.com/news/news260424"],checkedAt:"2026-06-11",notes:"预览版本已发布，Agent 能力大幅提升"},{id:"qwen-3-7-max",companyId:"alibaba-qwen",name:"Qwen3.7-Max",family:"Qwen3.7",modality:"文本",positioning:"旗舰",contextWindow:"1,000,000",availability:"开源权重",bestFor:"Agent 工作流、编码、自动化办公",sourceUrls:["https://qwen.ai"],checkedAt:"2026-06-11",notes:"专为 Agent 时代设计，支持数百步自主执行"},{id:"kimi-k2-6",companyId:"moonshot-kimi",name:"Kimi K2.6",family:"Kimi K2",modality:"多模态",positioning:"旗舰",contextWindow:"256,000",availability:"API",bestFor:"编码、Agent 自主执行、多模态理解",sourceUrls:["https://platform.kimi.ai/docs/guide/kimi-k2-6-quickstart"],checkedAt:"2026-06-11",notes:"原生多模态模型，Agent 性能突出"},{id:"seed-2-0",companyId:"bytedance-seed",name:"Seed2.0",family:"Seed",modality:"多模态",positioning:"旗舰",contextWindow:"256,000",availability:"API",bestFor:"多模态理解、LLM、Agent 任务",sourceUrls:["https://seed.bytedance.com","https://seed.bytedance.com/zh/models"],checkedAt:"2026-06-11",notes:"多模态理解全面升级，Agent 表现大幅强化"},{id:"minimax-m3",companyId:"minimax",name:"MiniMax M3",family:"MiniMax M",modality:"多模态",positioning:"旗舰",contextWindow:"1,000,000",availability:"开源权重",bestFor:"编码、Agent、1M 上下文、多模态",sourceUrls:["https://www.minimax.io/models/text/m3"],checkedAt:"2026-06-11",notes:"首个同时具备编码前沿、百万上下文和多模态能力的开源模型"},{id:"glm-5-1",companyId:"zhipu-zai",name:"GLM-5.1",family:"GLM",modality:"文本",positioning:"旗舰",contextWindow:"200,000",availability:"开源权重",bestFor:"编码、8 小时长程自治 Agent 任务",sourceUrls:["https://docs.bigmodel.cn/cn/guide/models/text/glm-5.1"],checkedAt:"2026-06-11",notes:"可独立完成最长 8 小时的自主工程任务"},{id:"mimo-v2-5-pro",companyId:"xiaomi-mimo",name:"MiMo-V2.5-Pro",family:"MiMo-V2.5",modality:"文本",positioning:"旗舰",contextWindow:"1,000,000",availability:"开源权重",bestFor:"编码、Agent 工作流、长程推理",sourceUrls:["https://mimo.xiaomi.com/mimo-v2-5-pro"],checkedAt:"2026-06-11",notes:"1.02T MoE 模型，42B 激活参数，全面开源"}],g=[{id:"codex",name:"Codex",companyId:"openai",modelProviderIds:["openai"],toolType:"通用任务 Agent",audiences:["研发"],bestFor:"全栈编码、PR 管理、自动化工作流、并行 Agent 任务",website:"https://openai.com/codex/",sourceUrls:["https://openai.com/codex/","https://developers.openai.com"],checkedAt:"2026-06-11",notes:"支持 Skills 和 Automations 扩展"},{id:"agents-sdk",name:"Agents SDK",companyId:"openai",modelProviderIds:["openai"],toolType:"通用任务 Agent",audiences:["研发"],bestFor:"构建代码优先 Agent，支持工具编排、任务交接、审批流",website:"https://developers.openai.com",sourceUrls:["https://developers.openai.com"],checkedAt:"2026-06-11",notes:"开源框架"},{id:"claude",name:"Claude Code",companyId:"anthropic",modelProviderIds:["anthropic"],toolType:"通用任务 Agent",audiences:["研发"],bestFor:"终端编码、代码库理解、自动化开发工作流",website:"https://code.claude.com",sourceUrls:["https://code.claude.com","https://www.anthropic.com"],checkedAt:"2026-06-11",notes:"终端 AI 编码 Agent，开源，支持 MCP、子 Agent、Git 集成"},{id:"gemini-platform",name:"Gemini Enterprise Agent Platform",companyId:"google-deepmind",modelProviderIds:["google-deepmind"],toolType:"通用任务 Agent",audiences:["研发","运营"],bestFor:"企业级 Agent 平台、多模态任务编排",website:"https://deepmind.google",sourceUrls:["https://deepmind.google"],checkedAt:"2026-06-11",notes:"面向企业的 Agent 平台"},{id:"grok-build",name:"Grok (Grok Build)",companyId:"xai",modelProviderIds:["xai"],toolType:"通用任务 Agent",audiences:["研发"],bestFor:"编码、推理、多模态理解",website:"https://x.ai",sourceUrls:["https://x.ai"],checkedAt:"2026-06-11",notes:"Grok Build 专门用于编码任务"},{id:"vibe",name:"Vibe",companyId:"mistral-ai",modelProviderIds:["mistral-ai"],toolType:"通用任务 Agent",audiences:["研发"],bestFor:"IDE/终端编码、自动化 PR、多 Agent 并行",website:"https://mistral.ai/products/vibe/code/",sourceUrls:["https://mistral.ai/products/vibe/code/","https://mistral.ai"],checkedAt:"2026-06-11",notes:"支持 Work Mode 和 Code Mode"},{id:"comet",name:"Comet",companyId:"perplexity",modelProviderIds:[],toolType:"通用任务 Agent",audiences:["运营","市场","管理者"],bestFor:"网页操作、购物、邮件、日程管理自动化",website:"https://www.perplexity.ai/comet/",sourceUrls:["https://www.perplexity.ai/comet/","https://www.perplexity.ai"],checkedAt:"2026-06-11",notes:"AI 浏览器，可执行复杂网页操作，底层模型未公开"},{id:"kimi",name:"Kimi Code",companyId:"moonshot-kimi",modelProviderIds:["moonshot-kimi"],toolType:"通用任务 Agent",audiences:["研发"],bestFor:"终端编码、Agent 自主执行、多步骤开发任务",website:"https://code.kimi.com",sourceUrls:["https://code.kimi.com","https://www.moonshot.ai"],checkedAt:"2026-06-11",notes:"支持多模态和 Agent 能力"},{id:"ui-tars",name:"UI-TARS",companyId:"bytedance-seed",modelProviderIds:["bytedance-seed"],toolType:"通用任务 Agent",audiences:["研发","运营"],bestFor:"原生 GUI 操作、手机/桌面自动化、游戏",website:"https://seed-tars.com",sourceUrls:["https://seed-tars.com","https://seed.bytedance.com"],checkedAt:"2026-06-11",notes:"多轮强化学习训练的 GUI Agent"},{id:"autoglm",name:"AutoGLM",companyId:"zhipu-zai",modelProviderIds:["zhipu-zai"],toolType:"通用任务 Agent",audiences:["研发","运营"],bestFor:"手机 GUI 自动化、屏幕理解、ADB 控制",website:"https://github.com/zai-org/Open-AutoGLM",sourceUrls:["https://github.com/zai-org/Open-AutoGLM"],checkedAt:"2026-06-11",notes:"开源手机 Agent 框架"},{id:"mcp",name:"MCP (Model Context Protocol)",companyId:"anthropic",modelProviderIds:[],toolType:"通用任务 Agent",audiences:["研发"],bestFor:"Agent 工具互操作协议、连接外部数据源",website:"https://www.anthropic.com",sourceUrls:["https://www.anthropic.com"],checkedAt:"2026-06-11",notes:"开放协议，多厂商支持"},{id:"accio-work",name:"Accio Work",companyId:"alibaba-qwen",modelProviderIds:[],toolType:"通用任务 Agent",audiences:["产品","运营","管理者"],bestFor:"桌面端业务自动化 Agent，可读取本地文件、执行命令、控制浏览器、对接 API",website:"https://www.accio.com/work",sourceUrls:["https://www.accio.com/work"],checkedAt:"2026-06-11",notes:"底层模型支持多供应商（Gemini、GPT-4o、Claude、Qwen）"},{id:"qoder-work",name:"Qoder Work",companyId:"alibaba-qwen",modelProviderIds:["alibaba-qwen"],toolType:"通用任务 Agent",audiences:["研发","产品"],bestFor:"终端编码 Agent，支持文件读写、Shell 命令、代码审查、子 Agent、MCP",website:"https://qoder.com/zh",sourceUrls:["https://qoder.com/zh"],checkedAt:"2026-06-11",notes:"Alibaba 出品，支持 CLI 和 IDE 双模式"},{id:"dingtalk-wukong",name:"钉钉悟空",companyId:"alibaba-qwen",modelProviderIds:[],toolType:"通用任务 Agent",audiences:["运营","管理者"],bestFor:"企业 AI 桌面 Agent，直接操作钉钉文档/日历/审批，支持浏览器自动化和本地控制",website:"https://wukong.dingtalk.com",sourceUrls:["https://wukong.dingtalk.com"],checkedAt:"2026-06-11",notes:"底层模型未公开（undisclosed），深度集成钉钉生态"},{id:"mimo-code",name:"MiMo Code",companyId:"xiaomi-mimo",modelProviderIds:["xiaomi-mimo"],toolType:"通用任务 Agent",audiences:["研发"],bestFor:"终端编码 Agent，长周期自动化编程、MCP 支持、多步骤任务规划",website:"https://mimo.xiaomi.com",sourceUrls:["https://mimo.xiaomi.com"],checkedAt:"2026-06-11",notes:"小米出品，开源（MIT），支持 OpenCode/OpenClaw 集成"}],p=new Map(f.map(e=>[e.id,e])),F=B(h,"companyId"),q=B(g,"companyId"),_=new Map(U.map(e=>[e.url,e]));function B(e,t){const s=new Map;for(const a of e){const n=String(a[t]);s.has(n)||s.set(n,[]),s.get(n).push(a)}return s}function x(e){return[...new Set(e)]}function v(e){var t;return((t=p.get(e))==null?void 0:t.name)??"公司未匹配"}function M(e){return String(e).toLowerCase().includes("unknown")}function C(e){return String(e).toLowerCase().includes("undisclosed")}function G(e){return M(e)||C(e)}function c(e,t){return`<span class="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium ${t==="amber"?"bg-amber-50 text-amber-700 border border-amber-200":t==="orange"?"bg-orange-50 text-orange-700 border border-orange-200":t==="cyan"?"bg-cyan-50 text-cyan-700 border border-cyan-200":t==="indigo"?"bg-indigo-50 text-indigo-700 border border-indigo-200":"bg-slate-100 text-slate-600 border border-slate-200"}">${i(e)}</span>`}function i(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function E(){return{query:"",viewMode:"all",regions:[],companyTypes:[],focusAreas:[],modalities:[],positionings:[],availabilities:[],toolTypes:[],audiences:[],riskOnly:"all",sortBy:"name"}}let o=E(),w=null;const Z=x(f.map(e=>e.region)),J=x(f.map(e=>e.companyType)),X=x(f.flatMap(e=>e.focusAreas)),Y=x(h.map(e=>e.modality)),ee=x(h.map(e=>e.positioning)),te=x(h.map(e=>e.availability)),oe=x(g.map(e=>e.toolType)),se=x(g.flatMap(e=>e.audiences));function j(){return f.filter(e=>{if(o.query){const t=o.query.toLowerCase();if(!`${e.name} ${e.region} ${e.companyType} ${e.summary} ${e.notes}`.toLowerCase().includes(t))return!1}return!(o.regions.length&&!o.regions.includes(e.region)||o.companyTypes.length&&!o.companyTypes.includes(e.companyType)||o.focusAreas.length&&!e.focusAreas.some(t=>o.focusAreas.includes(t)))})}function O(){return h.filter(e=>{if(o.query){const t=o.query.toLowerCase(),s=p.get(e.companyId);if(!`${e.name} ${e.family} ${e.modality} ${e.positioning} ${e.bestFor} ${e.notes} ${(s==null?void 0:s.name)??""}`.toLowerCase().includes(t))return!1}if(o.regions.length){const t=p.get(e.companyId);if(!t||!o.regions.includes(t.region))return!1}if(o.companyTypes.length){const t=p.get(e.companyId);if(!t||!o.companyTypes.includes(t.companyType))return!1}if(o.focusAreas.length){const t=p.get(e.companyId);if(!t||!t.focusAreas.some(s=>o.focusAreas.includes(s)))return!1}return!(o.modalities.length&&!o.modalities.includes(e.modality)||o.positionings.length&&!o.positionings.includes(e.positioning)||o.availabilities.length&&!o.availabilities.includes(e.availability)||o.riskOnly==="unknown"&&!G(e.modality)||o.riskOnly==="undisclosed"&&!C(e.modality))})}function D(){return g.filter(e=>{if(o.query){const t=o.query.toLowerCase(),s=p.get(e.companyId),a=e.modelProviderIds.map(r=>v(r)).join(" ");if(!`${e.name} ${e.toolType} ${e.bestFor} ${e.notes} ${(s==null?void 0:s.name)??""} ${a}`.toLowerCase().includes(t))return!1}if(o.regions.length){const t=p.get(e.companyId);if(!t||!o.regions.includes(t.region))return!1}if(o.companyTypes.length){const t=p.get(e.companyId);if(!t||!o.companyTypes.includes(t.companyType))return!1}if(o.focusAreas.length){const t=p.get(e.companyId);if(!t||!t.focusAreas.some(s=>o.focusAreas.includes(s)))return!1}if(o.toolTypes.length&&!o.toolTypes.includes(e.toolType)||o.audiences.length&&!e.audiences.some(t=>o.audiences.includes(t)))return!1;if(o.riskOnly==="undisclosed"){if(!e.modelProviderIds.length)return!0;if(!e.modelProviderIds.some(s=>{const a=p.get(s);return a&&C(a.name)}))return!1}return!0})}function ne(){return U.filter(e=>{if(o.query){const t=o.query.toLowerCase();if(!`${e.name} ${e.url} ${e.purpose}`.toLowerCase().includes(t))return!1}return!0})}function ae(){let e=0;for(const t of h)(M(t.modality)||M(t.contextWindow))&&e++;for(const t of g)t.modelProviderIds.length===0&&e++;return e}function ie(){return g.filter(e=>e.modelProviderIds.length===0).length}function re(){let e="";for(const t of U)t.checkedAt>e&&(e=t.checkedAt);return e||"unknown"}function z(){return`
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      ${le()}
      ${ce()}
      ${de()}
      ${pe()}
      <div id="main-content">${W()}</div>
      ${ke()}
    </div>
    <div id="drawer-overlay" class="fixed inset-0 bg-black/30 z-40 hidden"></div>
    <div id="drawer" class="fixed top-0 right-0 h-full w-full max-w-lg bg-white shadow-xl z-50 transform translate-x-full transition-transform duration-300 overflow-y-auto drawer-scroll"></div>
  `}function le(){return`
    <header class="space-y-1">
      <h1 class="text-3xl font-semibold tracking-normal text-slate-950">AI Agent Tools &amp; Top Models Catalog</h1>
      <p class="text-slate-600 text-sm">
        数据来自官方来源，每日更新（最后核验：<span class="font-medium">${re()}</span>）
      </p>
      <p class="text-xs text-slate-400">
        范围：海外 ≤ ${u.scope.maxOverseasCompanies} 家 · 国内 ≤ ${u.scope.maxDomesticCompanies} 家 ·
        Top 模型 ≤ ${u.scope.maxTopModels} · Agent Tool ≤ ${u.scope.maxAgentTools}
      </p>
    </header>
  `}function ce(){const e=ae(),t=ie();return`
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      ${$("公司",String(f.length),"text-slate-600")}
      ${$("Top 模型",String(h.length),"text-indigo-600")}
      ${$("Agent 工具",String(g.length),"text-cyan-600")}
      ${$("官方来源",String(U.length),"text-slate-600")}
      ${$("unknown 字段",String(e),e>0?"text-amber-600":"text-slate-400")}
      ${$("undisclosed",String(t),t>0?"text-orange-600":"text-slate-400")}
    </div>
  `}function $(e,t,s){return`
    <div class="rounded-lg border border-slate-200 bg-white shadow-sm px-4 py-3">
      <div class="text-xs ${s} font-medium">${i(e)}</div>
      <div class="text-2xl font-semibold mt-0.5 ${s}">${i(t)}</div>
    </div>
  `}function de(){const e=[{id:"all",label:"全部"},{id:"companies",label:"公司"},{id:"models",label:"Top 模型"},{id:"tools",label:"Agent 工具"},{id:"sources",label:"来源"}];return`
    <div class="flex flex-wrap items-center gap-3">
      <div class="relative flex-1 min-w-[200px] max-w-md">
        <input id="search-input" type="search" value="${i(o.query)}"
          placeholder="搜索公司、模型、工具、场景、备注…"
          class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
      </div>
      <div class="flex gap-1 bg-slate-100 rounded-lg p-0.5">
        ${e.map(t=>{const s=o.viewMode===t.id;return`<button data-view="${t.id}" class="view-tab px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${s?"bg-white text-slate-950 shadow-sm":"text-slate-500 hover:text-slate-700"}">${i(t.label)}</button>`}).join("")}
      </div>
      <button id="reset-btn" class="text-sm text-slate-500 hover:text-slate-700 px-2 py-1 rounded hover:bg-slate-100">
        重置筛选
      </button>
    </div>
  `}function b(e,t,s,a){return s.length===0?"":`
    <div class="min-w-0">
      <div class="text-xs font-medium text-slate-500 mb-1">${i(t)}</div>
      <div class="flex flex-wrap gap-1.5">
        ${s.map(n=>`<label class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs cursor-pointer border transition-colors ${a.includes(n)?"bg-cyan-50 border-cyan-300 text-cyan-700":"bg-white border-slate-200 text-slate-600 hover:border-slate-300"}">
            <input type="checkbox" data-group="${e}" value="${i(n)}" ${a.includes(n)?"checked":""} class="sr-only" />
            ${i(n)}
          </label>`).join("")}
      </div>
    </div>
  `}function pe(){const e=o.viewMode==="all"||o.viewMode==="companies",t=o.viewMode==="all"||o.viewMode==="models",s=o.viewMode==="all"||o.viewMode==="tools",a=[];return e&&(a.push(b("regions","地区",Z,o.regions)),a.push(b("companyTypes","公司类型",J,o.companyTypes)),a.push(b("focusAreas","领域",X,o.focusAreas))),t&&(a.push(b("modalities","模型模态",Y,o.modalities)),a.push(b("positionings","模型定位",ee,o.positionings)),a.push(b("availabilities","开放方式",te,o.availabilities))),s&&(a.push(b("toolTypes","工具类型",oe,o.toolTypes)),a.push(b("audiences","适合岗位",se,o.audiences))),a.push(`
    <div class="min-w-0">
      <div class="text-xs font-medium text-slate-500 mb-1">风险</div>
      <div class="flex gap-1.5">
        ${["all","unknown","undisclosed"].map(n=>`<button data-risk="${n}" class="risk-btn px-2.5 py-1 text-xs font-medium rounded-md border transition-colors ${o.riskOnly===n?n==="all"?"bg-slate-800 text-white border-slate-800":n==="unknown"?"bg-amber-50 text-amber-700 border-amber-300":"bg-orange-50 text-orange-700 border-orange-300":"bg-white text-slate-500 border-slate-200 hover:border-slate-300"}">${n==="all"?"全部":n==="unknown"?"unknown":"undisclosed"}</button>`).join("")}
      </div>
    </div>
  `),a.push(`
    <div class="min-w-0">
      <div class="text-xs font-medium text-slate-500 mb-1">排序</div>
      <select id="sort-select" class="text-xs rounded-md border border-slate-200 bg-white px-2 py-1 text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500">
        <option value="name" ${o.sortBy==="name"?"selected":""}>名称</option>
        <option value="company" ${o.sortBy==="company"?"selected":""}>公司</option>
        <option value="checkedAt" ${o.sortBy==="checkedAt"?"selected":""}>核验日期</option>
      </select>
    </div>
  `),a.length===0?"":`<div id="filter-area" class="flex flex-wrap gap-x-6 gap-y-2.5 p-4 rounded-lg border border-slate-200 bg-white">${a.join("")}</div>`}function W(){switch(o.viewMode){case"companies":return ue();case"models":return he();case"tools":return ge();case"sources":return ye();default:return me()}}function me(){const e=j(),t=O(),s=D();return`
    <div class="space-y-8">
      <section>
        <h2 class="text-xl font-semibold mb-3">公司 <span class="text-sm font-normal text-slate-400">(${e.length})</span></h2>
        ${e.length?K(e):k()}
      </section>
      <section>
        <h2 class="text-xl font-semibold mb-3">Top 模型 <span class="text-sm font-normal text-slate-400">(${t.length})</span></h2>
        ${t.length?N(t):k()}
      </section>
      <section>
        <h2 class="text-xl font-semibold mb-3">Agent 工具 <span class="text-sm font-normal text-slate-400">(${s.length})</span></h2>
        ${s.length?H(s):k()}
      </section>
    </div>
  `}function ue(){const e=j();return e.length?`<section><h2 class="text-xl font-semibold mb-3">公司 <span class="text-sm font-normal text-slate-400">(${e.length})</span></h2>${K(e)}</section>`:k()}function he(){const e=O();return e.length?`<section><h2 class="text-xl font-semibold mb-3">Top 模型 <span class="text-sm font-normal text-slate-400">(${e.length})</span></h2>${N(e)}</section>`:k()}function ge(){const e=D();return e.length?`<section><h2 class="text-xl font-semibold mb-3">Agent 工具 <span class="text-sm font-normal text-slate-400">(${e.length})</span></h2>${H(e)}</section>`:k()}function ye(){const e=ne();return e.length?we(e):k()}function k(){return`
    <div class="flex flex-col items-center justify-center py-16 text-center rounded-lg border border-dashed border-slate-300 bg-white">
      <div class="text-slate-300 text-4xl mb-2">∅</div>
      <div class="text-slate-600 font-medium">没有匹配结果</div>
      <div class="text-slate-400 text-sm mt-1">请调整筛选条件或清空搜索</div>
      <button id="reset-btn-inline" class="mt-3 text-sm text-cyan-600 hover:text-cyan-700 font-medium">重置筛选</button>
    </div>
  `}function K(e){return`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">${e.map(fe).join("")}</div>`}function fe(e){const t=F.get(e.id)??[],s=q.get(e.id)??[],a=e.notes&&G(e.notes)?c(e.notes,"amber"):"";return`
    <div class="company-card rounded-lg border border-slate-200 bg-white shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer" data-company="${e.id}">
      <div class="flex items-start justify-between gap-2">
        <h3 class="text-base font-semibold">${i(e.name)}</h3>
        <div class="flex gap-1 shrink-0">
          ${c(e.region,"slate")}
          ${c(e.companyType,"slate")}
        </div>
      </div>
      <div class="flex flex-wrap gap-1 mt-1.5">
        ${e.focusAreas.map(n=>n==="Agent Tool"?c(n,"cyan"):c(n,"indigo")).join("")}
      </div>
      <p class="text-sm text-slate-600 mt-2 line-clamp-2">${i(e.summary)}</p>
      <div class="mt-2 text-xs text-slate-500">
        ${t.length>0?`<div>Top 模型：${t.slice(0,3).map(n=>i(n.name)).join("、")}${t.length>3?"…":""}</div>`:""}
        ${s.length>0?`<div>Agent 工具：${s.slice(0,3).map(n=>i(n.name)).join("、")}${s.length>3?"…":""}</div>`:""}
      </div>
      ${a?`<div class="mt-1">${a}</div>`:""}
      <div class="flex gap-2 mt-2 text-xs text-slate-400">
        <a href="${i(e.website)}" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-600" onclick="event.stopPropagation()">官网</a>
        <a href="${i(e.docsUrl)}" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-600" onclick="event.stopPropagation()">文档</a>
        <span class="ml-auto">${e.checkedAt}</span>
      </div>
    </div>
  `}function N(e){return o.sortBy==="company"?e=[...e].sort((t,s)=>v(t.companyId).localeCompare(v(s.companyId))):o.sortBy==="checkedAt"?e=[...e].sort((t,s)=>s.checkedAt.localeCompare(t.checkedAt)):e=[...e].sort((t,s)=>t.name.localeCompare(s.name)),`
    <div class="overflow-x-auto rounded-lg border border-slate-200 bg-white">
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-slate-50 text-left text-xs font-medium text-slate-500 uppercase">
            <th class="px-4 py-3">模型</th>
            <th class="px-4 py-3">公司</th>
            <th class="px-4 py-3 hidden sm:table-cell">模态</th>
            <th class="px-4 py-3 hidden md:table-cell">定位</th>
            <th class="px-4 py-3 hidden lg:table-cell">上下文</th>
            <th class="px-4 py-3 hidden md:table-cell">开放方式</th>
            <th class="px-4 py-3">适合场景</th>
            <th class="px-4 py-3 hidden lg:table-cell">核验</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(xe).join("")}
        </tbody>
      </table>
    </div>
  `}function xe(e){const t=v(e.companyId),s=M(e.modality)?c(e.modality,"amber"):i(e.modality),a=M(e.contextWindow)?c(e.contextWindow,"amber"):i(e.contextWindow);return`
    <tr class="border-t border-slate-100 hover:bg-slate-50">
      <td class="px-4 py-3 font-medium">${i(e.name)}</td>
      <td class="px-4 py-3 text-slate-600">${i(t)}${t==="公司未匹配"?c("!","orange"):""}</td>
      <td class="px-4 py-3 hidden sm:table-cell">${s}</td>
      <td class="px-4 py-3 hidden md:table-cell">${i(e.positioning)}</td>
      <td class="px-4 py-3 hidden lg:table-cell text-slate-500">${a}</td>
      <td class="px-4 py-3 hidden md:table-cell">${i(e.availability)}</td>
      <td class="px-4 py-3 text-slate-600 max-w-[200px] truncate" title="${i(e.bestFor)}">${i(e.bestFor)}</td>
      <td class="px-4 py-3 hidden lg:table-cell text-xs text-slate-400">${e.checkedAt}</td>
    </tr>
  `}function H(e){const t=new Map;for(const s of e)t.has(s.toolType)||t.set(s.toolType,[]),t.get(s.toolType).push(s);return Array.from(t.entries()).map(([s,a])=>`
        <div class="mb-6">
          <h3 class="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">${i(s)} <span class="text-xs font-normal text-slate-400">(${a.length})</span></h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            ${a.map(be).join("")}
          </div>
        </div>
      `).join("")}function be(e){const t=v(e.companyId),s=e.modelProviderIds.map(r=>v(r)).filter(Boolean),a=e.modelProviderIds.length===0,n=s.some(r=>r==="公司未匹配");return`
    <div class="rounded-lg border border-slate-200 bg-white shadow-sm p-3">
      <div class="flex items-start justify-between gap-2">
        <h4 class="text-sm font-semibold">${i(e.name)}</h4>
        <div class="flex gap-1 shrink-0">
          ${c(t,"slate")}
          ${c(e.toolType,"cyan")}
        </div>
      </div>
      <p class="text-xs text-slate-600 mt-1.5">${i(e.bestFor)}</p>
      <div class="flex flex-wrap gap-1 mt-1.5">
        ${e.audiences.map(r=>c(r,"slate")).join("")}
      </div>
      <div class="mt-1.5 text-xs">
        底层模型：
        ${a?c("undisclosed","orange"):s.join("、")}
        ${n?c("供应商未匹配","orange"):""}
      </div>
      ${e.notes?`<div class="text-xs text-slate-400 mt-0.5">${i(e.notes)}</div>`:""}
      <div class="flex gap-2 mt-1.5 text-xs text-slate-400">
        <a href="${i(e.website)}" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-600">详情</a>
      </div>
    </div>
  `}function we(e){const t=[];for(const a of e){let n=!1;for(const r of f)if(r.sourceUrls.includes(a.url)){t.push({source:a,objType:"公司",objName:r.name,companyName:r.name}),n=!0;break}if(!n){for(const r of h)if(r.sourceUrls.includes(a.url)){t.push({source:a,objType:"模型",objName:r.name,companyName:v(r.companyId)}),n=!0;break}}if(!n){for(const r of g)if(r.sourceUrls.includes(a.url)){t.push({source:a,objType:"工具",objName:r.name,companyName:v(r.companyId)}),n=!0;break}}n||t.push({source:a,objType:"—",objName:"—",companyName:"—"})}const s=t.filter(a=>{if(!o.query)return!0;const n=o.query.toLowerCase();return a.source.name.toLowerCase().includes(n)||a.source.url.toLowerCase().includes(n)||a.objName.toLowerCase().includes(n)||a.companyName.toLowerCase().includes(n)});return x(t.map(a=>a.objType)),o.modalities[0],`
    <div>
      <h2 class="text-xl font-semibold mb-3">官方来源 <span class="text-sm font-normal text-slate-400">(${s.length})</span></h2>
      <div class="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-slate-50 text-left text-xs font-medium text-slate-500 uppercase">
              <th class="px-4 py-3">来源名称</th>
              <th class="px-4 py-3 hidden sm:table-cell">对象类型</th>
              <th class="px-4 py-3">对象名称</th>
              <th class="px-4 py-3 hidden md:table-cell">公司</th>
              <th class="px-4 py-3 hidden lg:table-cell">用途</th>
              <th class="px-4 py-3">URL</th>
              <th class="px-4 py-3 hidden lg:table-cell">核验</th>
            </tr>
          </thead>
          <tbody>
            ${s.map(ve).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `}function ve(e){return`
    <tr class="border-t border-slate-100 hover:bg-slate-50">
      <td class="px-4 py-3 font-medium text-xs">${i(e.source.name)}</td>
      <td class="px-4 py-3 hidden sm:table-cell">${c(e.objType,"slate")}</td>
      <td class="px-4 py-3 text-xs">${i(e.objName)}</td>
      <td class="px-4 py-3 hidden md:table-cell text-xs text-slate-600">${i(e.companyName)}</td>
      <td class="px-4 py-3 hidden lg:table-cell text-xs text-slate-500 max-w-[200px] truncate">${i(e.source.purpose)}</td>
      <td class="px-4 py-3 text-xs max-w-[200px] truncate">
        <a href="${i(e.source.url)}" target="_blank" rel="noopener noreferrer" class="text-cyan-600 hover:underline">${i(Ae(e.source.url))}</a>
      </td>
      <td class="px-4 py-3 hidden lg:table-cell text-xs text-slate-400">${e.source.checkedAt}</td>
    </tr>
  `}function Ae(e){try{return new URL(e).hostname+new URL(e).pathname.substring(0,30)}catch{return e.substring(0,40)}}function ke(){const e=[];let t="ok";const s=f.filter(l=>l.region==="海外").length,a=f.filter(l=>l.region==="国内").length;s>u.scope.maxOverseasCompanies&&(e.push(`海外公司 ${s} 家，超出上限 ${u.scope.maxOverseasCompanies}`),t="warn"),a>u.scope.maxDomesticCompanies&&(e.push(`国内公司 ${a} 家，超出上限 ${u.scope.maxDomesticCompanies}`),t="warn"),h.length>u.scope.maxTopModels&&(e.push(`Top 模型 ${h.length} 个，超出上限 ${u.scope.maxTopModels}`),t="warn"),g.length>u.scope.maxAgentTools&&(e.push(`Agent 工具 ${g.length} 个，超出上限 ${u.scope.maxAgentTools}`),t="warn");for(const l of h)p.has(l.companyId)||(e.push(`模型 "${l.name}" 的公司 ID "${l.companyId}" 未匹配`),t="error");for(const l of g){p.has(l.companyId)||(e.push(`工具 "${l.name}" 的公司 ID "${l.companyId}" 未匹配`),t="error");for(const y of l.modelProviderIds)p.has(y)||(e.push(`工具 "${l.name}" 的模型供应商 ID "${y}" 未匹配`),t="error")}const n=new Set;for(const l of f)l.sourceUrls.forEach(y=>n.add(y));for(const l of h)l.sourceUrls.forEach(y=>n.add(y));for(const l of g)l.sourceUrls.forEach(y=>n.add(y));const r=[...n].filter(l=>!_.has(l));r.length>0&&(e.push(`${r.length} 个来源 URL 未进入 officialSources 索引`),t=t==="ok"?"warn":t);const m=t==="error"?"rose":t==="warn"?"amber":"emerald";return`
    <div class="rounded-lg border border-${m}-200 bg-${m}-50 px-4 py-3">
      <div class="flex items-center gap-2">
        <span class="inline-block w-2 h-2 rounded-full bg-${m}-500"></span>
        <span class="text-sm font-semibold text-${m}-700">${t==="error"?"Blocked":t==="warn"?"Needs review":"Data ready for page use"}</span>
        <span class="text-xs text-${m}-500">${e.length} 个问题</span>
      </div>
      ${e.length>0?`<ul class="mt-2 space-y-0.5">${e.map(l=>`<li class="text-xs text-${m}-600">· ${i(l)}</li>`).join("")}</ul>`:""}
    </div>
  `}function V(e){const t=p.get(e);if(!t)return"<div class='p-6 text-slate-500'>公司未找到</div>";const s=F.get(t.id)??[],a=q.get(t.id)??[];return`
    <div class="p-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-semibold">${i(t.name)}</h2>
        <button id="drawer-close" class="text-slate-400 hover:text-slate-600 text-xl">&times;</button>
      </div>
      <div class="flex flex-wrap gap-1 mb-3">
        ${c(t.region,"slate")}
        ${c(t.companyType,"slate")}
        ${t.focusAreas.map(n=>n==="Agent Tool"?c(n,"cyan"):c(n,"indigo")).join("")}
      </div>
      <p class="text-sm text-slate-600 mb-4">${i(t.summary)}</p>

      ${t.notes?`<div class="text-xs text-slate-500 mb-4">备注：${i(t.notes)}</div>`:""}

      <div class="flex gap-3 mb-6">
        <a href="${i(t.website)}" target="_blank" rel="noopener noreferrer" class="text-sm text-cyan-600 hover:underline">官网</a>
        <a href="${i(t.docsUrl)}" target="_blank" rel="noopener noreferrer" class="text-sm text-cyan-600 hover:underline">文档</a>
      </div>

      ${s.length>0?`<div class="mb-6"><h3 class="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">Top 模型 (${s.length})</h3>
          <div class="space-y-2">${s.map(n=>`
            <div class="rounded border border-slate-100 bg-slate-50 px-3 py-2 text-sm">
              <div class="font-medium">${i(n.name)}</div>
              <div class="text-xs text-slate-500 mt-0.5">${n.modality} · ${n.positioning} · ${n.availability}</div>
              <div class="text-xs text-slate-400 mt-0.5">${i(n.bestFor)}</div>
            </div>
          `).join("")}</div></div>`:""}

      ${a.length>0?`<div><h3 class="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">Agent 工具 (${a.length})</h3>
          <div class="space-y-2">${a.map(n=>`
            <div class="rounded border border-slate-100 bg-slate-50 px-3 py-2 text-sm">
              <div class="font-medium">${i(n.name)}</div>
              <div class="text-xs text-slate-500 mt-0.5">${n.toolType} · 适合：${n.audiences.join("、")}</div>
              <div class="text-xs text-slate-400 mt-0.5">${i(n.bestFor)}</div>
            </div>
          `).join("")}</div></div>`:""}
    </div>
  `}function $e(e){w=e;const t=document.getElementById("drawer"),s=document.getElementById("drawer-overlay");!t||!s||(t.innerHTML=V(e),t.classList.remove("translate-x-full"),s.classList.remove("hidden"))}function A(){w=null;const e=document.getElementById("drawer"),t=document.getElementById("drawer-overlay");!e||!t||(e.classList.add("translate-x-full"),t.classList.add("hidden"))}function P(){o=E(),w=null,A(),I(),T()}function I(){const e=document.getElementById("main-content");e&&(e.innerHTML=W());const t=document.getElementById("app");if(t&&(t.innerHTML=z()),w){const s=document.getElementById("drawer"),a=document.getElementById("drawer-overlay");s&&a&&(s.innerHTML=V(w),s.classList.remove("translate-x-full"),a.classList.remove("hidden"))}R()}function R(){const e=document.getElementById("app");if(!e)return;const t=document.getElementById("search-input");t&&t.addEventListener("input",()=>{o.query=t.value,T(),clearTimeout(window._searchTimer),window._searchTimer=setTimeout(()=>{w=null,A(),I()},200)}),e.querySelectorAll(".view-tab").forEach(d=>{d.addEventListener("click",()=>{o.viewMode=d.dataset.view,w=null,A(),I(),T()})});const s=document.getElementById("reset-btn");s&&s.addEventListener("click",P);const a=document.getElementById("reset-btn-inline");a&&a.addEventListener("click",P),e.querySelectorAll('input[type="checkbox"][data-group]').forEach(d=>{d.addEventListener("change",()=>{const l=d.dataset.group,y=Array.from(e.querySelectorAll(`input[type="checkbox"][data-group="${l}"]:checked`)).map(Q=>Q.value),L=l;Array.isArray(o[L])&&(o[L]=y),w=null,A(),I(),T()})}),e.querySelectorAll(".risk-btn").forEach(d=>{d.addEventListener("click",()=>{o.riskOnly=d.dataset.risk,I(),T()})});const n=document.getElementById("sort-select");n&&n.addEventListener("change",()=>{o.sortBy=n.value,I(),T()}),e.querySelectorAll(".company-card").forEach(d=>{d.addEventListener("click",()=>{$e(d.dataset.company??"")})});const r=document.getElementById("drawer-close");r&&r.addEventListener("click",A);const m=document.getElementById("drawer-overlay");m&&m.addEventListener("click",A),document.addEventListener("keydown",d=>{d.key==="Escape"&&A()})}function T(){const e=new URLSearchParams;o.query&&e.set("q",o.query),o.viewMode!=="all"&&e.set("view",o.viewMode),o.regions.length&&e.set("regions",o.regions.join(",")),o.companyTypes.length&&e.set("types",o.companyTypes.join(",")),o.focusAreas.length&&e.set("areas",o.focusAreas.join(",")),o.modalities.length&&e.set("mods",o.modalities.join(",")),o.positionings.length&&e.set("pos",o.positionings.join(",")),o.availabilities.length&&e.set("avail",o.availabilities.join(",")),o.toolTypes.length&&e.set("tools",o.toolTypes.join(",")),o.audiences.length&&e.set("aud",o.audiences.join(",")),o.riskOnly!=="all"&&e.set("risk",o.riskOnly),o.sortBy!=="name"&&e.set("sort",o.sortBy);const t=e.toString(),s=t?`${window.location.pathname}?${t}`:window.location.pathname;window.history.replaceState(null,"",s)}function Ie(){const e=new URLSearchParams(window.location.search);if(e.has("q")&&(o.query=e.get("q")??""),e.has("view")){const t=e.get("view");["all","companies","models","tools","sources"].includes(t)&&(o.viewMode=t)}if(e.has("regions")&&(o.regions=e.get("regions").split(",").filter(Boolean)),e.has("types")&&(o.companyTypes=e.get("types").split(",").filter(Boolean)),e.has("areas")&&(o.focusAreas=e.get("areas").split(",").filter(Boolean)),e.has("mods")&&(o.modalities=e.get("mods").split(",").filter(Boolean)),e.has("pos")&&(o.positionings=e.get("pos").split(",").filter(Boolean)),e.has("avail")&&(o.availabilities=e.get("avail").split(",").filter(Boolean)),e.has("tools")&&(o.toolTypes=e.get("tools").split(",").filter(Boolean)),e.has("aud")&&(o.audiences=e.get("aud").split(",").filter(Boolean)),e.has("risk")){const t=e.get("risk");(t==="unknown"||t==="undisclosed")&&(o.riskOnly=t)}if(e.has("sort")){const t=e.get("sort");(t==="name"||t==="company"||t==="checkedAt")&&(o.sortBy=t)}}function S(){Ie();const e=document.getElementById("app");e&&(e.innerHTML=z(),R())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",S):S();
