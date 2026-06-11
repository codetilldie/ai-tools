# AI Agent Tools & Top Models Catalog

A **daily-updated** catalog of AI companies, top models, and agent tools, presented as a filterable single-page web app.

**Live site:** [codetilldie.github.io/ai-tools/](https://codetilldie.github.io/ai-tools/) (GitHub Pages)

## Scope

| Category | Limit |
|---|---|
| Overseas AI companies | ≤ 7 |
| Domestic (CN) AI companies | ≤ 7 |
| Top models | ≤ 15 |
| Agent tools | ≤ 15 |

All data is sourced exclusively from **official sources** (company websites, official documentation, official blogs, API docs, and release notes). Unconfirmed model providers are marked as `undisclosed` — no guessing.

## Project Structure

```
ai-tools/
├── src/
│   ├── catalog-data.ts   # Single data source — companies, models, tools, sources
│   ├── script.ts         # App entry — search, filter, sort, views, drawer
│   └── styles.css        # Tailwind CSS v4 entry
├── index.html            # Vite entry HTML
├── package.json
├── vite.config.ts
├── tsconfig.json
├── .gitignore
├── scripts/
│   └── deploy-gh-pages.sh # Publish dist/ to the gh-pages branch
│ 公司/                    # Daily generated: company lists & detail cards
│ 模型/                    # Daily generated: top model lists
│ 工具/                    # Daily generated: agent tool lists
│ 推荐/                    # Daily generated: role-based recommendations
│ 来源/                    # Daily generated: official source index
│ 校验/                    # Daily generated: validation reports
│ 日报/                    # Daily generated: daily summary reports
└── dist/                  # Build output (GitHub Pages artifact)
```

## Daily Data Pipeline

The catalog is regenerated each day through 9 sequential tasks:

1. **Company list** — collect official info for each company
2. **Top model list** — identify current flagship/latest models from official sources
3. **Agent tool list** — identify tools with multi-step, coding, workflow, or browser automation capabilities
4. **Company detail cards** — structured profiles for each company
5. **Role-based recommendations** — tool/model combos for developers, PMs, designers, operations, marketing, and managers
6. **Source index** — compile all official source URLs with their targets
7. **Validation report** — check counts, sources, field integrity, and cross-references
8. **Daily summary** — summarize changes, issues, and next steps
9. **Write `src/catalog-data.ts`** — compile validated results into the TypeScript data source

After `src/catalog-data.ts` is updated, run the validation/build/deploy command to publish the refreshed page.

## Web App Features

- **4 views**: All, Companies, Top Models, Agent Tools, Sources
- **Search**: global search across companies, models, tools, descriptions, and notes
- **Filters**: by region, company type, modality, positioning, availability, tool type, audience, and risk level (unknown/undisclosed)
- **Sort**: by name, company, or check date
- **Company detail drawer**: click a company card to see all its models and tools
- **Data health check**: real-time validation of scope limits, broken references, and missing source URLs
- **URL state sync**: filters and search are persisted in the URL — shareable and refresh-safe

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type-check
npm run typecheck

# Build for production
npm run build

# Preview production build
npm run preview
```

## Updating Data

Edit `src/catalog-data.ts` — it is the single source of truth. The app derives all filters, stats, and views from this file automatically. No other files need to change.

### Adding a new company

1. Add a `Company` entry to the `companies` array
2. Add a source URL to `officialSources` if new
3. Add related models to `models` and tools to `tools` with the correct `companyId`

### TypeScript types

All data types are defined at the top of `src/catalog-data.ts`:
- `Company` — id, name, region, country, companyType, focusAreas, website, docsUrl, summary, sourceUrls, checkedAt, notes
- `Model` — id, companyId, name, family, modality, positioning, contextWindow, availability, bestFor, sourceUrls, checkedAt, notes
- `Tool` — id, name, companyId, modelProviderIds, toolType, audiences, bestFor, website, sourceUrls, checkedAt, notes
- `OfficialSource` — name, url, purpose, checkedAt

## Deployment

The site is deployed via the **`gh-pages` branch**. This avoids committing GitHub Actions workflow files and does not require the GitHub token `workflow` scope.

1. Push source changes to `main`
2. Run `npm run deploy:pages`
3. The command type-checks, builds `dist/`, and force-pushes only `dist/` to `gh-pages`
4. In GitHub repository settings, set Pages source to `Deploy from a branch`, branch `gh-pages`, folder `/ (root)`

Expected Pages URL: [codetilldie.github.io/ai-tools/](https://codetilldie.github.io/ai-tools/)

## License

Internal use. Data compiled from official sources for training, evaluation, and research purposes.
