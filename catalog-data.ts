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
  generatedAt: "unknown",
  scope: {
    maxOverseasCompanies: 7,
    maxDomesticCompanies: 7,
    maxTopModels: 15,
    maxAgentTools: 15,
    focusAreas: ["Agent Tool", "Top 模型"],
  },
  sourcePolicy: "Only official sources are accepted. Undisclosed model providers must be marked as undisclosed.",
};

export const companies: Company[] = [];
export const models: Model[] = [];
export const tools: Tool[] = [];
export const officialSources: OfficialSource[] = [];
