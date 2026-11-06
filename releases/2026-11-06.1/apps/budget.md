# Budget

Category: Personal
Pinned starting code: https://github.com/pagelove/budget-template/tree/44e67861a4183a570410394b6ea14a5795290683

## What to build
Income and expense entries, categories, monthly totals, balance and an understandable spending summary.

Build a working responsive result with useful empty/loading/error states and accessible controls. Keep it focused and editable.

## Existing behavior, design and limits
Selected template design: classic / dark. Read the selected repo’s DESIGN.md and mode-specific site/assets/pagelove-design/DESIGN.md and retain the complete assigned design/mode unless Personalize supplies an explicit relevant preference override. Do not replace it with the design collection default. This is a document-first implementation candidate. Read REVIEW.md and docs/architecture.md for accepted features and remaining integration gates. Configure and verify supported authenticated app writes and private reads on the target site; a DAV upload does not establish either. Preserve user records during releases.
Identity and sharing: read branding/README.md and https://github.com/pagelove/design-system/blob/main/docs/identity-and-sharing.md. Set branding/site.json.url to the supplied target site and deployment prefix, then regenerate the favicon, OG assets and metadata after applying the final design and identity. Never edit generated exports as the content source.

## Build and acceptance
Package scripts verified from this exact public commit:
- preview: node scripts/preview.mjs
- test: node --test tests/*.test.mjs
- check: node scripts/check.mjs
- deploy: node scripts/deploy.mjs
- verify: node scripts/deploy.mjs --verify
- test:deployment: node --test tests/deployment.test.mjs
- prepare: node scripts/deploy.mjs --prepare
- branding: node scripts/branding.mjs
Read the captured README, project instructions and any available deployment/design/document-first review below. Also inspect source docs/architecture.md and docs/testing.md if present. Respect their known gaps. After adaptation run the repo’s documented checks, prepare/build and deployment tests. Regenerate identity using its actual branding command when applicable. Do not assume all repos have scripts/deploy.mjs. Preserve licenses and unrelated/user-managed records. Verify important browser, keyboard/touch/mobile tasks on the supplied host separately from local tests.

## Personalization, only when enabled
Use my known currency, locale, budget period, goals and explicitly shared income/expense categories to configure the budget. Prefill actual amounts, recurring bills, frequencies and dates only from reliable information I provided. Separate planned budgets from completed transactions; do not guess balances, income, spending, debt or account details. Keep unknown amounts empty and ask for the minimum needed to calculate useful totals.

## Pinned instruction snapshots
- reference/apps/budget/README.md
- reference/apps/budget/AGENTS.md
- reference/apps/budget/DESIGN.md
- reference/apps/budget/DOCUMENT-FIRST-REVIEW.md
- reference/apps/budget/docs/deployment.md
- reference/apps/budget/package.json
