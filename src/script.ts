import "./styles.css";

import {
  catalogMeta,
  companies,
  models,
  tools,
  officialSources,
  type Company,
  type Model,
  type Tool,
  type OfficialSource,
} from "./catalog-data";

// ─── Derived Data ────────────────────────────────────────────────────────────

const companyById = new Map(companies.map((c) => [c.id, c]));
const modelsByCompanyId = groupBy(models, "companyId");
const toolsByCompanyId = groupBy(tools, "companyId");
const sourceByUrl = new Map(officialSources.map((s) => [s.url, s]));

function groupBy<T extends Record<string, unknown>>(arr: T[], key: keyof T): Map<string, T[]> {
  const map = new Map<string, T[]>();
  for (const item of arr) {
    const k = String(item[key]);
    if (!map.has(k)) map.set(k, []);
    map.get(k)!.push(item);
  }
  return map;
}

function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

function getCompanyName(id: string): string {
  return companyById.get(id)?.name ?? "公司未匹配";
}

function hasUnknown(val: unknown): boolean {
  return String(val).toLowerCase().includes("unknown");
}

function hasUndisclosed(val: unknown): boolean {
  return String(val).toLowerCase().includes("undisclosed");
}

function isUnknownOrUndisclosed(val: unknown): boolean {
  return hasUnknown(val) || hasUndisclosed(val);
}

function tag(text: string, color: string): string {
  const cls =
    color === "amber"
      ? "bg-amber-50 text-amber-700 border border-amber-200"
      : color === "orange"
        ? "bg-orange-50 text-orange-700 border border-orange-200"
        : color === "cyan"
          ? "bg-cyan-50 text-cyan-700 border border-cyan-200"
          : color === "indigo"
            ? "bg-indigo-50 text-indigo-700 border border-indigo-200"
            : "bg-slate-100 text-slate-600 border border-slate-200";
  return `<span class="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium ${cls}">${escHtml(text)}</span>`;
}

function escHtml(s: string): string {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

// ─── State ───────────────────────────────────────────────────────────────────

type ViewMode = "all" | "companies" | "models" | "tools" | "sources";

interface CatalogState {
  query: string;
  viewMode: ViewMode;
  regions: string[];
  companyTypes: string[];
  focusAreas: string[];
  modalities: string[];
  positionings: string[];
  availabilities: string[];
  toolTypes: string[];
  audiences: string[];
  riskOnly: "all" | "unknown" | "undisclosed";
  sortBy: "name" | "company" | "checkedAt";
}

function defaultState(): CatalogState {
  return {
    query: "",
    viewMode: "all",
    regions: [],
    companyTypes: [],
    focusAreas: [],
    modalities: [],
    positionings: [],
    availabilities: [],
    toolTypes: [],
    audiences: [],
    riskOnly: "all",
    sortBy: "name",
  };
}

let state: CatalogState = defaultState();
let openDrawerCompany: string | null = null;

// ─── Filter Option Builders ──────────────────────────────────────────────────

const regionOptions = unique(companies.map((c) => c.region));
const companyTypeOptions = unique(companies.map((c) => c.companyType));
const focusAreaOptions = unique(companies.flatMap((c) => c.focusAreas));
const modalityOptions = unique(models.map((m) => m.modality));
const positioningOptions = unique(models.map((m) => m.positioning));
const availabilityOptions = unique(models.map((m) => m.availability));
const toolTypeOptions = unique(tools.map((t) => t.toolType));
const audienceOptions = unique(tools.flatMap((t) => t.audiences));

// ─── Filter Logic ────────────────────────────────────────────────────────────

function filteredCompanies(): Company[] {
  return companies.filter((c) => {
    if (state.query) {
      const q = state.query.toLowerCase();
      const haystack = `${c.name} ${c.region} ${c.companyType} ${c.summary} ${c.notes}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    if (state.regions.length && !state.regions.includes(c.region)) return false;
    if (state.companyTypes.length && !state.companyTypes.includes(c.companyType)) return false;
    if (state.focusAreas.length && !c.focusAreas.some((f) => state.focusAreas.includes(f))) return false;
    return true;
  });
}

function filteredModels(): Model[] {
  return models.filter((m) => {
    if (state.query) {
      const q = state.query.toLowerCase();
      const c = companyById.get(m.companyId);
      const haystack = `${m.name} ${m.family} ${m.modality} ${m.positioning} ${m.bestFor} ${m.notes} ${c?.name ?? ""}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    if (state.regions.length) {
      const c = companyById.get(m.companyId);
      if (!c || !state.regions.includes(c.region)) return false;
    }
    if (state.companyTypes.length) {
      const c = companyById.get(m.companyId);
      if (!c || !state.companyTypes.includes(c.companyType)) return false;
    }
    if (state.focusAreas.length) {
      const c = companyById.get(m.companyId);
      if (!c || !c.focusAreas.some((f) => state.focusAreas.includes(f))) return false;
    }
    if (state.modalities.length && !state.modalities.includes(m.modality)) return false;
    if (state.positionings.length && !state.positionings.includes(m.positioning)) return false;
    if (state.availabilities.length && !state.availabilities.includes(m.availability)) return false;
    if (state.riskOnly === "unknown" && !isUnknownOrUndisclosed(m.modality)) return false;
    if (state.riskOnly === "undisclosed" && !hasUndisclosed(m.modality)) return false;
    return true;
  });
}

function filteredTools(): Tool[] {
  return tools.filter((t) => {
    if (state.query) {
      const q = state.query.toLowerCase();
      const c = companyById.get(t.companyId);
      const providers = t.modelProviderIds.map((id) => getCompanyName(id)).join(" ");
      const haystack = `${t.name} ${t.toolType} ${t.bestFor} ${t.notes} ${c?.name ?? ""} ${providers}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    if (state.regions.length) {
      const c = companyById.get(t.companyId);
      if (!c || !state.regions.includes(c.region)) return false;
    }
    if (state.companyTypes.length) {
      const c = companyById.get(t.companyId);
      if (!c || !state.companyTypes.includes(c.companyType)) return false;
    }
    if (state.focusAreas.length) {
      const c = companyById.get(t.companyId);
      if (!c || !c.focusAreas.some((f) => state.focusAreas.includes(f))) return false;
    }
    if (state.toolTypes.length && !state.toolTypes.includes(t.toolType)) return false;
    if (state.audiences.length && !t.audiences.some((a) => state.audiences.includes(a))) return false;
    if (state.riskOnly === "undisclosed") {
      if (!t.modelProviderIds.length) return true;
      const hasUndisclosedProvider = t.modelProviderIds.some((pid) => {
        const c = companyById.get(pid);
        return c && hasUndisclosed(c.name);
      });
      if (!hasUndisclosedProvider) return false;
    }
    return true;
  });
}

function filteredSources(): OfficialSource[] {
  return officialSources.filter((s) => {
    if (state.query) {
      const q = state.query.toLowerCase();
      if (!`${s.name} ${s.url} ${s.purpose}`.toLowerCase().includes(q)) return false;
    }
    return true;
  });
}

// ─── Render Helpers ──────────────────────────────────────────────────────────

function countUnknownFields(): number {
  let n = 0;
  for (const m of models) {
    if (hasUnknown(m.modality) || hasUnknown(m.contextWindow)) n++;
  }
  for (const t of tools) {
    if (t.modelProviderIds.length === 0) n++;
  }
  return n;
}

function countUndisclosedTools(): number {
  return tools.filter((t) => t.modelProviderIds.length === 0).length;
}

function lastCheckedDate(): string {
  let last = "";
  for (const s of officialSources) {
    if (s.checkedAt > last) last = s.checkedAt;
  }
  return last || "unknown";
}

// ─── HTML Template Parts ─────────────────────────────────────────────────────

function renderApp(): string {
  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      ${renderHeader()}
      ${renderStats()}
      ${renderControls()}
      ${renderFilters()}
      <div id="main-content">${renderMainContent()}</div>
      ${renderDataHealth()}
    </div>
    <div id="drawer-overlay" class="fixed inset-0 bg-black/30 z-40 hidden"></div>
    <div id="drawer" class="fixed top-0 right-0 h-full w-full max-w-lg bg-white shadow-xl z-50 transform translate-x-full transition-transform duration-300 overflow-y-auto drawer-scroll"></div>
  `;
}

function renderHeader(): string {
  return `
    <header class="space-y-1">
      <h1 class="text-3xl font-semibold tracking-normal text-slate-950">AI Agent Tools &amp; Top Models Catalog</h1>
      <p class="text-slate-600 text-sm">
        数据来自官方来源，每日更新（最后核验：<span class="font-medium">${lastCheckedDate()}</span>）
      </p>
      <p class="text-xs text-slate-400">
        范围：海外 ≤ ${catalogMeta.scope.maxOverseasCompanies} 家 · 国内 ≤ ${catalogMeta.scope.maxDomesticCompanies} 家 ·
        Top 模型 ≤ ${catalogMeta.scope.maxTopModels} · Agent Tool ≤ ${catalogMeta.scope.maxAgentTools}
      </p>
    </header>
  `;
}

function renderStats(): string {
  const unknownCount = countUnknownFields();
  const undisclosedCount = countUndisclosedTools();
  return `
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      ${statCard("公司", String(companies.length), "text-slate-600")}
      ${statCard("Top 模型", String(models.length), "text-indigo-600")}
      ${statCard("Agent 工具", String(tools.length), "text-cyan-600")}
      ${statCard("官方来源", String(officialSources.length), "text-slate-600")}
      ${statCard("unknown 字段", String(unknownCount), unknownCount > 0 ? "text-amber-600" : "text-slate-400")}
      ${statCard("undisclosed", String(undisclosedCount), undisclosedCount > 0 ? "text-orange-600" : "text-slate-400")}
    </div>
  `;
}

function statCard(label: string, value: string, color: string): string {
  return `
    <div class="rounded-lg border border-slate-200 bg-white shadow-sm px-4 py-3">
      <div class="text-xs ${color} font-medium">${escHtml(label)}</div>
      <div class="text-2xl font-semibold mt-0.5 ${color}">${escHtml(value)}</div>
    </div>
  `;
}

function renderControls(): string {
  const views: { id: ViewMode; label: string }[] = [
    { id: "all", label: "全部" },
    { id: "companies", label: "公司" },
    { id: "models", label: "Top 模型" },
    { id: "tools", label: "Agent 工具" },
    { id: "sources", label: "来源" },
  ];
  return `
    <div class="flex flex-wrap items-center gap-3">
      <div class="relative flex-1 min-w-[200px] max-w-md">
        <input id="search-input" type="search" value="${escHtml(state.query)}"
          placeholder="搜索公司、模型、工具、场景、备注…"
          class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
      </div>
      <div class="flex gap-1 bg-slate-100 rounded-lg p-0.5">
        ${views.map((v) => {
          const active = state.viewMode === v.id;
          return `<button data-view="${v.id}" class="view-tab px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${active ? "bg-white text-slate-950 shadow-sm" : "text-slate-500 hover:text-slate-700"}">${escHtml(v.label)}</button>`;
        }).join("")}
      </div>
      <button id="reset-btn" class="text-sm text-slate-500 hover:text-slate-700 px-2 py-1 rounded hover:bg-slate-100">
        重置筛选
      </button>
    </div>
  `;
}

function checkboxGroup(id: string, label: string, options: string[], selected: string[]): string {
  if (options.length === 0) return "";
  return `
    <div class="min-w-0">
      <div class="text-xs font-medium text-slate-500 mb-1">${escHtml(label)}</div>
      <div class="flex flex-wrap gap-1.5">
        ${options
          .map(
            (opt) =>
              `<label class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs cursor-pointer border transition-colors ${
                selected.includes(opt)
                  ? "bg-cyan-50 border-cyan-300 text-cyan-700"
                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
              }">
            <input type="checkbox" data-group="${id}" value="${escHtml(opt)}" ${selected.includes(opt) ? "checked" : ""} class="sr-only" />
            ${escHtml(opt)}
          </label>`
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderFilters(): string {
  // Only show filters relevant to the current state
  const showCompanyFilters = state.viewMode === "all" || state.viewMode === "companies";
  const showModelFilters = state.viewMode === "all" || state.viewMode === "models";
  const showToolFilters = state.viewMode === "all" || state.viewMode === "tools";

  const parts: string[] = [];

  if (showCompanyFilters) {
    parts.push(checkboxGroup("regions", "地区", regionOptions, state.regions));
    parts.push(checkboxGroup("companyTypes", "公司类型", companyTypeOptions, state.companyTypes));
    parts.push(checkboxGroup("focusAreas", "领域", focusAreaOptions, state.focusAreas));
  }
  if (showModelFilters) {
    parts.push(checkboxGroup("modalities", "模型模态", modalityOptions, state.modalities));
    parts.push(checkboxGroup("positionings", "模型定位", positioningOptions, state.positionings));
    parts.push(checkboxGroup("availabilities", "开放方式", availabilityOptions, state.availabilities));
  }
  if (showToolFilters) {
    parts.push(checkboxGroup("toolTypes", "工具类型", toolTypeOptions, state.toolTypes));
    parts.push(checkboxGroup("audiences", "适合岗位", audienceOptions, state.audiences));
  }

  // Risk filter
  parts.push(`
    <div class="min-w-0">
      <div class="text-xs font-medium text-slate-500 mb-1">风险</div>
      <div class="flex gap-1.5">
        ${["all", "unknown", "undisclosed"]
          .map(
            (opt) =>
              `<button data-risk="${opt}" class="risk-btn px-2.5 py-1 text-xs font-medium rounded-md border transition-colors ${
                state.riskOnly === opt
                  ? opt === "all"
                    ? "bg-slate-800 text-white border-slate-800"
                    : opt === "unknown"
                      ? "bg-amber-50 text-amber-700 border-amber-300"
                      : "bg-orange-50 text-orange-700 border-orange-300"
                  : "bg-white text-slate-500 border-slate-200 hover:border-slate-300"
              }">${opt === "all" ? "全部" : opt === "unknown" ? "unknown" : "undisclosed"}</button>`
          )
          .join("")}
      </div>
    </div>
  `);

  // Sort
  parts.push(`
    <div class="min-w-0">
      <div class="text-xs font-medium text-slate-500 mb-1">排序</div>
      <select id="sort-select" class="text-xs rounded-md border border-slate-200 bg-white px-2 py-1 text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500">
        <option value="name" ${state.sortBy === "name" ? "selected" : ""}>名称</option>
        <option value="company" ${state.sortBy === "company" ? "selected" : ""}>公司</option>
        <option value="checkedAt" ${state.sortBy === "checkedAt" ? "selected" : ""}>核验日期</option>
      </select>
    </div>
  `);

  if (parts.length === 0) return "";

  return `<div id="filter-area" class="flex flex-wrap gap-x-6 gap-y-2.5 p-4 rounded-lg border border-slate-200 bg-white">${parts.join("")}</div>`;
}

// ─── Main Content ────────────────────────────────────────────────────────────

function renderMainContent(): string {
  switch (state.viewMode) {
    case "companies":
      return renderCompanyView();
    case "models":
      return renderModelView();
    case "tools":
      return renderToolView();
    case "sources":
      return renderSourceView();
    default:
      return renderAllView();
  }
}

function renderAllView(): string {
  const fc = filteredCompanies();
  const fm = filteredModels();
  const ft = filteredTools();
  return `
    <div class="space-y-8">
      <section>
        <h2 class="text-xl font-semibold mb-3">公司 <span class="text-sm font-normal text-slate-400">(${fc.length})</span></h2>
        ${fc.length ? renderCompanyCardsHtml(fc) : emptyState()}
      </section>
      <section>
        <h2 class="text-xl font-semibold mb-3">Top 模型 <span class="text-sm font-normal text-slate-400">(${fm.length})</span></h2>
        ${fm.length ? renderModelTableHtml(fm) : emptyState()}
      </section>
      <section>
        <h2 class="text-xl font-semibold mb-3">Agent 工具 <span class="text-sm font-normal text-slate-400">(${ft.length})</span></h2>
        ${ft.length ? renderToolGroupsHtml(ft) : emptyState()}
      </section>
    </div>
  `;
}

function renderCompanyView(): string {
  const fc = filteredCompanies();
  if (!fc.length) return emptyState();
  return `<section><h2 class="text-xl font-semibold mb-3">公司 <span class="text-sm font-normal text-slate-400">(${fc.length})</span></h2>${renderCompanyCardsHtml(fc)}</section>`;
}

function renderModelView(): string {
  const fm = filteredModels();
  if (!fm.length) return emptyState();
  return `<section><h2 class="text-xl font-semibold mb-3">Top 模型 <span class="text-sm font-normal text-slate-400">(${fm.length})</span></h2>${renderModelTableHtml(fm)}</section>`;
}

function renderToolView(): string {
  const ft = filteredTools();
  if (!ft.length) return emptyState();
  return `<section><h2 class="text-xl font-semibold mb-3">Agent 工具 <span class="text-sm font-normal text-slate-400">(${ft.length})</span></h2>${renderToolGroupsHtml(ft)}</section>`;
}

function renderSourceView(): string {
  const fs = filteredSources();
  if (!fs.length) return emptyState();
  return renderSourceTableHtml(fs);
}

function emptyState(): string {
  return `
    <div class="flex flex-col items-center justify-center py-16 text-center rounded-lg border border-dashed border-slate-300 bg-white">
      <div class="text-slate-300 text-4xl mb-2">∅</div>
      <div class="text-slate-600 font-medium">没有匹配结果</div>
      <div class="text-slate-400 text-sm mt-1">请调整筛选条件或清空搜索</div>
      <button id="reset-btn-inline" class="mt-3 text-sm text-cyan-600 hover:text-cyan-700 font-medium">重置筛选</button>
    </div>
  `;
}

// ─── Company Cards ───────────────────────────────────────────────────────────

function renderCompanyCardsHtml(list: Company[]): string {
  return `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">${list.map(companyCardHtml).join("")}</div>`;
}

function companyCardHtml(c: Company): string {
  const cModels = modelsByCompanyId.get(c.id) ?? [];
  const cTools = toolsByCompanyId.get(c.id) ?? [];
  const riskNote = c.notes && isUnknownOrUndisclosed(c.notes) ? tag(c.notes, "amber") : "";
  return `
    <div class="company-card rounded-lg border border-slate-200 bg-white shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer" data-company="${c.id}">
      <div class="flex items-start justify-between gap-2">
        <h3 class="text-base font-semibold">${escHtml(c.name)}</h3>
        <div class="flex gap-1 shrink-0">
          ${tag(c.region, "slate")}
          ${tag(c.companyType, "slate")}
        </div>
      </div>
      <div class="flex flex-wrap gap-1 mt-1.5">
        ${c.focusAreas.map((f) => (f === "Agent Tool" ? tag(f, "cyan") : tag(f, "indigo"))).join("")}
      </div>
      <p class="text-sm text-slate-600 mt-2 line-clamp-2">${escHtml(c.summary)}</p>
      <div class="mt-2 text-xs text-slate-500">
        ${cModels.length > 0 ? `<div>Top 模型：${cModels.slice(0, 3).map((m) => escHtml(m.name)).join("、")}${cModels.length > 3 ? "…" : ""}</div>` : ""}
        ${cTools.length > 0 ? `<div>Agent 工具：${cTools.slice(0, 3).map((t) => escHtml(t.name)).join("、")}${cTools.length > 3 ? "…" : ""}</div>` : ""}
      </div>
      ${riskNote ? `<div class="mt-1">${riskNote}</div>` : ""}
      <div class="flex gap-2 mt-2 text-xs text-slate-400">
        <a href="${escHtml(c.website)}" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-600" onclick="event.stopPropagation()">官网</a>
        <a href="${escHtml(c.docsUrl)}" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-600" onclick="event.stopPropagation()">文档</a>
        <span class="ml-auto">${c.checkedAt}</span>
      </div>
    </div>
  `;
}

// ─── Model Table ─────────────────────────────────────────────────────────────

function renderModelTableHtml(list: Model[]): string {
  if (state.sortBy === "company") {
    list = [...list].sort((a, b) => getCompanyName(a.companyId).localeCompare(getCompanyName(b.companyId)));
  } else if (state.sortBy === "checkedAt") {
    list = [...list].sort((a, b) => b.checkedAt.localeCompare(a.checkedAt));
  } else {
    list = [...list].sort((a, b) => a.name.localeCompare(b.name));
  }
  return `
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
          ${list.map(modelRowHtml).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function modelRowHtml(m: Model): string {
  const companyName = getCompanyName(m.companyId);
  const modalTag = hasUnknown(m.modality) ? tag(m.modality, "amber") : escHtml(m.modality);
  const ctxTag = hasUnknown(m.contextWindow) ? tag(m.contextWindow, "amber") : escHtml(m.contextWindow);
  return `
    <tr class="border-t border-slate-100 hover:bg-slate-50">
      <td class="px-4 py-3 font-medium">${escHtml(m.name)}</td>
      <td class="px-4 py-3 text-slate-600">${escHtml(companyName)}${companyName === "公司未匹配" ? tag("!", "orange") : ""}</td>
      <td class="px-4 py-3 hidden sm:table-cell">${modalTag}</td>
      <td class="px-4 py-3 hidden md:table-cell">${escHtml(m.positioning)}</td>
      <td class="px-4 py-3 hidden lg:table-cell text-slate-500">${ctxTag}</td>
      <td class="px-4 py-3 hidden md:table-cell">${escHtml(m.availability)}</td>
      <td class="px-4 py-3 text-slate-600 max-w-[200px] truncate" title="${escHtml(m.bestFor)}">${escHtml(m.bestFor)}</td>
      <td class="px-4 py-3 hidden lg:table-cell text-xs text-slate-400">${m.checkedAt}</td>
    </tr>
  `;
}

// ─── Tool Groups ─────────────────────────────────────────────────────────────

function renderToolGroupsHtml(list: Tool[]): string {
  const groups = new Map<string, Tool[]>();
  for (const t of list) {
    if (!groups.has(t.toolType)) groups.set(t.toolType, []);
    groups.get(t.toolType)!.push(t);
  }
  return Array.from(groups.entries())
    .map(([type, items]) => {
      const label = type;
      return `
        <div class="mb-6">
          <h3 class="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">${escHtml(label)} <span class="text-xs font-normal text-slate-400">(${items.length})</span></h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            ${items.map(toolCardHtml).join("")}
          </div>
        </div>
      `;
    })
    .join("");
}

function toolCardHtml(t: Tool): string {
  const companyName = getCompanyName(t.companyId);
  const providers = t.modelProviderIds.map((pid) => getCompanyName(pid)).filter(Boolean);
  const undisclosedFlag = t.modelProviderIds.length === 0;
  const brokenProvider = providers.some((p) => p === "公司未匹配");
  return `
    <div class="rounded-lg border border-slate-200 bg-white shadow-sm p-3">
      <div class="flex items-start justify-between gap-2">
        <h4 class="text-sm font-semibold">${escHtml(t.name)}</h4>
        <div class="flex gap-1 shrink-0">
          ${tag(companyName, "slate")}
          ${tag(t.toolType, "cyan")}
        </div>
      </div>
      <p class="text-xs text-slate-600 mt-1.5">${escHtml(t.bestFor)}</p>
      <div class="flex flex-wrap gap-1 mt-1.5">
        ${t.audiences.map((a) => tag(a, "slate")).join("")}
      </div>
      <div class="mt-1.5 text-xs">
        底层模型：
        ${undisclosedFlag ? tag("undisclosed", "orange") : providers.join("、")}
        ${brokenProvider ? tag("供应商未匹配", "orange") : ""}
      </div>
      ${t.notes ? `<div class="text-xs text-slate-400 mt-0.5">${escHtml(t.notes)}</div>` : ""}
      <div class="flex gap-2 mt-1.5 text-xs text-slate-400">
        <a href="${escHtml(t.website)}" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-600">详情</a>
      </div>
    </div>
  `;
}

// ─── Source Table ────────────────────────────────────────────────────────────

function renderSourceTableHtml(list: OfficialSource[]): string {
  // Group sources by which entity they belong to
  const sourceObjects: { source: OfficialSource; objType: string; objName: string; companyName: string }[] = [];

  for (const s of list) {
    // Find which model/tool/company uses this URL
    let found = false;
    for (const c of companies) {
      if (c.sourceUrls.includes(s.url)) {
        sourceObjects.push({ source: s, objType: "公司", objName: c.name, companyName: c.name });
        found = true;
        break;
      }
    }
    if (!found) {
      for (const m of models) {
        if (m.sourceUrls.includes(s.url)) {
          sourceObjects.push({ source: s, objType: "模型", objName: m.name, companyName: getCompanyName(m.companyId) });
          found = true;
          break;
        }
      }
    }
    if (!found) {
      for (const t of tools) {
        if (t.sourceUrls.includes(s.url)) {
          sourceObjects.push({ source: s, objType: "工具", objName: t.name, companyName: getCompanyName(t.companyId) });
          found = true;
          break;
        }
      }
    }
    if (!found) {
      sourceObjects.push({ source: s, objType: "—", objName: "—", companyName: "—" });
    }
  }

  // Apply query filter to source objects
  const filtered = sourceObjects.filter((item) => {
    if (!state.query) return true;
    const q = state.query.toLowerCase();
    return (
      item.source.name.toLowerCase().includes(q) ||
      item.source.url.toLowerCase().includes(q) ||
      item.objName.toLowerCase().includes(q) ||
      item.companyName.toLowerCase().includes(q)
    );
  });

  // Quick inline filter for object type
  const objTypes = unique(sourceObjects.map((o) => o.objType));
  const activeObjType = state.modalities[0] || ""; // reuse modality as obj type filter, simple approach

  // Let's just show all sources in a table
  return `
    <div>
      <h2 class="text-xl font-semibold mb-3">官方来源 <span class="text-sm font-normal text-slate-400">(${filtered.length})</span></h2>
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
            ${filtered.map(sourceRowHtml).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function sourceRowHtml(item: { source: OfficialSource; objType: string; objName: string; companyName: string }): string {
  return `
    <tr class="border-t border-slate-100 hover:bg-slate-50">
      <td class="px-4 py-3 font-medium text-xs">${escHtml(item.source.name)}</td>
      <td class="px-4 py-3 hidden sm:table-cell">${tag(item.objType, "slate")}</td>
      <td class="px-4 py-3 text-xs">${escHtml(item.objName)}</td>
      <td class="px-4 py-3 hidden md:table-cell text-xs text-slate-600">${escHtml(item.companyName)}</td>
      <td class="px-4 py-3 hidden lg:table-cell text-xs text-slate-500 max-w-[200px] truncate">${escHtml(item.source.purpose)}</td>
      <td class="px-4 py-3 text-xs max-w-[200px] truncate">
        <a href="${escHtml(item.source.url)}" target="_blank" rel="noopener noreferrer" class="text-cyan-600 hover:underline">${escHtml(shortUrl(item.source.url))}</a>
      </td>
      <td class="px-4 py-3 hidden lg:table-cell text-xs text-slate-400">${item.source.checkedAt}</td>
    </tr>
  `;
}

function shortUrl(url: string): string {
  try {
    return new URL(url).hostname + new URL(url).pathname.substring(0, 30);
  } catch {
    return url.substring(0, 40);
  }
}

// ─── Data Health ─────────────────────────────────────────────────────────────

function renderDataHealth(): string {
  const issues: string[] = [];
  let severity: "ok" | "warn" | "error" = "ok";

  // Check scope limits
  const overseas = companies.filter((c) => c.region === "海外").length;
  const domestic = companies.filter((c) => c.region === "国内").length;
  if (overseas > catalogMeta.scope.maxOverseasCompanies) {
    issues.push(`海外公司 ${overseas} 家，超出上限 ${catalogMeta.scope.maxOverseasCompanies}`);
    severity = "warn";
  }
  if (domestic > catalogMeta.scope.maxDomesticCompanies) {
    issues.push(`国内公司 ${domestic} 家，超出上限 ${catalogMeta.scope.maxDomesticCompanies}`);
    severity = "warn";
  }
  if (models.length > catalogMeta.scope.maxTopModels) {
    issues.push(`Top 模型 ${models.length} 个，超出上限 ${catalogMeta.scope.maxTopModels}`);
    severity = "warn";
  }
  if (tools.length > catalogMeta.scope.maxAgentTools) {
    issues.push(`Agent 工具 ${tools.length} 个，超出上限 ${catalogMeta.scope.maxAgentTools}`);
    severity = "warn";
  }

  // Check broken references
  for (const m of models) {
    if (!companyById.has(m.companyId)) {
      issues.push(`模型 "${m.name}" 的公司 ID "${m.companyId}" 未匹配`);
      severity = "error";
    }
  }
  for (const t of tools) {
    if (!companyById.has(t.companyId)) {
      issues.push(`工具 "${t.name}" 的公司 ID "${t.companyId}" 未匹配`);
      severity = "error";
    }
    for (const pid of t.modelProviderIds) {
      if (!companyById.has(pid)) {
        issues.push(`工具 "${t.name}" 的模型供应商 ID "${pid}" 未匹配`);
        severity = "error";
      }
    }
  }

  // Check missing sourceUrls in officialSources
  const allUsedUrls = new Set<string>();
  for (const c of companies) c.sourceUrls.forEach((u) => allUsedUrls.add(u));
  for (const m of models) m.sourceUrls.forEach((u) => allUsedUrls.add(u));
  for (const t of tools) t.sourceUrls.forEach((u) => allUsedUrls.add(u));

  const missingFromIndex = [...allUsedUrls].filter((u) => !sourceByUrl.has(u));
  if (missingFromIndex.length > 0) {
    issues.push(`${missingFromIndex.length} 个来源 URL 未进入 officialSources 索引`);
    severity = severity === "ok" ? "warn" : severity;
  }

  const statusColor = severity === "error" ? "rose" : severity === "warn" ? "amber" : "emerald";
  const statusLabel = severity === "error" ? "Blocked" : severity === "warn" ? "Needs review" : "Data ready for page use";

  return `
    <div class="rounded-lg border border-${statusColor}-200 bg-${statusColor}-50 px-4 py-3">
      <div class="flex items-center gap-2">
        <span class="inline-block w-2 h-2 rounded-full bg-${statusColor}-500"></span>
        <span class="text-sm font-semibold text-${statusColor}-700">${statusLabel}</span>
        <span class="text-xs text-${statusColor}-500">${issues.length} 个问题</span>
      </div>
      ${issues.length > 0
        ? `<ul class="mt-2 space-y-0.5">${issues.map((i) => `<li class="text-xs text-${statusColor}-600">· ${escHtml(i)}</li>`).join("")}</ul>`
        : ""
      }
    </div>
  `;
}

// ─── Drawer ──────────────────────────────────────────────────────────────────

function renderDrawer(companyId: string): string {
  const c = companyById.get(companyId);
  if (!c) return "<div class='p-6 text-slate-500'>公司未找到</div>";

  const cModels = modelsByCompanyId.get(c.id) ?? [];
  const cTools = toolsByCompanyId.get(c.id) ?? [];

  return `
    <div class="p-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-semibold">${escHtml(c.name)}</h2>
        <button id="drawer-close" class="text-slate-400 hover:text-slate-600 text-xl">&times;</button>
      </div>
      <div class="flex flex-wrap gap-1 mb-3">
        ${tag(c.region, "slate")}
        ${tag(c.companyType, "slate")}
        ${c.focusAreas.map((f) => (f === "Agent Tool" ? tag(f, "cyan") : tag(f, "indigo"))).join("")}
      </div>
      <p class="text-sm text-slate-600 mb-4">${escHtml(c.summary)}</p>

      ${c.notes ? `<div class="text-xs text-slate-500 mb-4">备注：${escHtml(c.notes)}</div>` : ""}

      <div class="flex gap-3 mb-6">
        <a href="${escHtml(c.website)}" target="_blank" rel="noopener noreferrer" class="text-sm text-cyan-600 hover:underline">官网</a>
        <a href="${escHtml(c.docsUrl)}" target="_blank" rel="noopener noreferrer" class="text-sm text-cyan-600 hover:underline">文档</a>
      </div>

      ${cModels.length > 0
        ? `<div class="mb-6"><h3 class="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">Top 模型 (${cModels.length})</h3>
          <div class="space-y-2">${cModels.map((m) => `
            <div class="rounded border border-slate-100 bg-slate-50 px-3 py-2 text-sm">
              <div class="font-medium">${escHtml(m.name)}</div>
              <div class="text-xs text-slate-500 mt-0.5">${m.modality} · ${m.positioning} · ${m.availability}</div>
              <div class="text-xs text-slate-400 mt-0.5">${escHtml(m.bestFor)}</div>
            </div>
          `).join("")}</div></div>`
        : ""
      }

      ${cTools.length > 0
        ? `<div><h3 class="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">Agent 工具 (${cTools.length})</h3>
          <div class="space-y-2">${cTools.map((t) => `
            <div class="rounded border border-slate-100 bg-slate-50 px-3 py-2 text-sm">
              <div class="font-medium">${escHtml(t.name)}</div>
              <div class="text-xs text-slate-500 mt-0.5">${t.toolType} · 适合：${t.audiences.join("、")}</div>
              <div class="text-xs text-slate-400 mt-0.5">${escHtml(t.bestFor)}</div>
            </div>
          `).join("")}</div></div>`
        : ""
      }
    </div>
  `;
}

function openDrawer(companyId: string): void {
  openDrawerCompany = companyId;
  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("drawer-overlay");
  if (!drawer || !overlay) return;
  drawer.innerHTML = renderDrawer(companyId);
  drawer.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
}

function closeDrawer(): void {
  openDrawerCompany = null;
  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("drawer-overlay");
  if (!drawer || !overlay) return;
  drawer.classList.add("translate-x-full");
  overlay.classList.add("hidden");
}

// ─── Event Binding ───────────────────────────────────────────────────────────

function handleFilterChange(): void {
  render();
}

function resetFilters(): void {
  state = defaultState();
  openDrawerCompany = null;
  closeDrawer();
  render();
  syncStateToUrl();
}

function render(): void {
  const main = document.getElementById("main-content");
  if (main) main.innerHTML = renderMainContent();
  // Re-render header, stats, controls, and filters too
  // Since we render the whole app, we re-mount. But that loses focus/scroll.
  // Better to use incremental updates. For simplicity, let's just update main.
  // Actually let's re-render the stats too since counts change.
  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = renderApp();
  }
  // Restore drawer state
  if (openDrawerCompany) {
    const drawer = document.getElementById("drawer");
    const overlay = document.getElementById("drawer-overlay");
    if (drawer && overlay) {
      drawer.innerHTML = renderDrawer(openDrawerCompany);
      drawer.classList.remove("translate-x-full");
      overlay.classList.remove("hidden");
    }
  }
  bindEvents();
}

function bindEvents(): void {
  const app = document.getElementById("app");
  if (!app) return;

  // Search input (debounced)
  const searchInput = document.getElementById("search-input") as HTMLInputElement | null;
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      state.query = searchInput.value;
      syncStateToUrl();
      // Debounce render
      clearTimeout((window as unknown as Record<string, number>)._searchTimer);
      (window as unknown as Record<string, number>)._searchTimer = setTimeout(() => {
        openDrawerCompany = null;
        closeDrawer();
        render();
      }, 200);
    });
  }

  // View tabs
  app.querySelectorAll(".view-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.viewMode = (btn as HTMLElement).dataset.view as CatalogState["viewMode"];
      openDrawerCompany = null;
      closeDrawer();
      render();
      syncStateToUrl();
    });
  });

  // Reset buttons
  const resetBtn = document.getElementById("reset-btn");
  if (resetBtn) resetBtn.addEventListener("click", resetFilters);
  const resetInline = document.getElementById("reset-btn-inline");
  if (resetInline) resetInline.addEventListener("click", resetFilters);

  // Checkbox filters
  app.querySelectorAll('input[type="checkbox"][data-group]').forEach((cb) => {
    cb.addEventListener("change", () => {
      const group = (cb as HTMLElement).dataset.group as keyof CatalogState;
      const values = Array.from(app.querySelectorAll(`input[type="checkbox"][data-group="${group}"]:checked`)).map(
        (el) => (el as HTMLInputElement).value
      );
      // Map data-group to state key
      const stateKey = group as keyof CatalogState;
      if (Array.isArray(state[stateKey])) {
        (state[stateKey] as string[]) = values;
      }
      openDrawerCompany = null;
      closeDrawer();
      render();
      syncStateToUrl();
    });
  });

  // Risk buttons
  app.querySelectorAll(".risk-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.riskOnly = (btn as HTMLElement).dataset.risk as CatalogState["riskOnly"];
      render();
      syncStateToUrl();
    });
  });

  // Sort select
  const sortSelect = document.getElementById("sort-select") as HTMLSelectElement | null;
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      state.sortBy = sortSelect.value as CatalogState["sortBy"];
      render();
      syncStateToUrl();
    });
  }

  // Company cards click -> drawer
  app.querySelectorAll(".company-card").forEach((card) => {
    card.addEventListener("click", () => {
      openDrawer((card as HTMLElement).dataset.company ?? "");
    });
  });

  // Drawer close
  const drawerClose = document.getElementById("drawer-close");
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
  const drawerOverlay = document.getElementById("drawer-overlay");
  if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);

  // Escape key closes drawer
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });
}

// ─── URL State Sync ──────────────────────────────────────────────────────────

function syncStateToUrl(): void {
  const params = new URLSearchParams();
  if (state.query) params.set("q", state.query);
  if (state.viewMode !== "all") params.set("view", state.viewMode);
  if (state.regions.length) params.set("regions", state.regions.join(","));
  if (state.companyTypes.length) params.set("types", state.companyTypes.join(","));
  if (state.focusAreas.length) params.set("areas", state.focusAreas.join(","));
  if (state.modalities.length) params.set("mods", state.modalities.join(","));
  if (state.positionings.length) params.set("pos", state.positionings.join(","));
  if (state.availabilities.length) params.set("avail", state.availabilities.join(","));
  if (state.toolTypes.length) params.set("tools", state.toolTypes.join(","));
  if (state.audiences.length) params.set("aud", state.audiences.join(","));
  if (state.riskOnly !== "all") params.set("risk", state.riskOnly);
  if (state.sortBy !== "name") params.set("sort", state.sortBy);

  const qs = params.toString();
  const url = qs ? `${window.location.pathname}?${qs}` : window.location.pathname;
  window.history.replaceState(null, "", url);
}

function hydrateStateFromUrl(): void {
  const params = new URLSearchParams(window.location.search);
  if (params.has("q")) state.query = params.get("q") ?? "";
  if (params.has("view")) {
    const v = params.get("view") as ViewMode;
    if (["all", "companies", "models", "tools", "sources"].includes(v)) state.viewMode = v;
  }
  if (params.has("regions")) state.regions = params.get("regions")!.split(",").filter(Boolean);
  if (params.has("types")) state.companyTypes = params.get("types")!.split(",").filter(Boolean);
  if (params.has("areas")) state.focusAreas = params.get("areas")!.split(",").filter(Boolean);
  if (params.has("mods")) state.modalities = params.get("mods")!.split(",").filter(Boolean);
  if (params.has("pos")) state.positionings = params.get("pos")!.split(",").filter(Boolean);
  if (params.has("avail")) state.availabilities = params.get("avail")!.split(",").filter(Boolean);
  if (params.has("tools")) state.toolTypes = params.get("tools")!.split(",").filter(Boolean);
  if (params.has("aud")) state.audiences = params.get("aud")!.split(",").filter(Boolean);
  if (params.has("risk")) {
    const r = params.get("risk");
    if (r === "unknown" || r === "undisclosed") state.riskOnly = r;
  }
  if (params.has("sort")) {
    const s = params.get("sort");
    if (s === "name" || s === "company" || s === "checkedAt") state.sortBy = s;
  }
}

// ─── Init ────────────────────────────────────────────────────────────────────

function init(): void {
  hydrateStateFromUrl();
  const app = document.getElementById("app");
  if (!app) return;
  app.innerHTML = renderApp();
  bindEvents();
  // If there was a company in URL, we could open drawer
}

// Wait for DOM
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
