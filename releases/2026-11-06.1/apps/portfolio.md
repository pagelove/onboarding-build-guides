# Portfolio

Category: Landing pages
Pinned starting code: https://github.com/pagelove/portfolio-template/tree/e9e66ebf97d784e8545ed29925295ec05ead8469

## What to build
An introduction, selected projects, case studies, accessible project imagery and contact details.

Build a working responsive result with useful empty/loading/error states and accessible controls. Keep it focused and editable.

## Existing behavior, design and limits
Selected template design: midnight / dark. Read https://github.com/pagelove/design-system/blob/main/designs/midnight/.stitch/dark.DESIGN.md and retain the complete assigned design/mode unless Personalize supplies an explicit relevant preference override. Do not replace it with the design collection default. This is a document-first implementation candidate. Read REVIEW.md and docs/architecture.md for accepted features and remaining integration gates. Configure and verify supported authenticated app writes and private reads on the target site; a DAV upload does not establish either. Preserve user records during releases.
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
Identify whether this portfolio represents me personally or my business/studio; if I own a relevant business, use its actual name and my role consistently. Use known bio, specialties, completed projects, responsibilities, dates, project links, approved imagery and contact/social destinations to populate the introduction and case studies. Do not attribute employer/client work to my business incorrectly or invent clients, awards, outcomes or metrics.

## Pinned instruction snapshots
- reference/apps/portfolio/README.md
- reference/apps/portfolio/AGENTS.md
- reference/apps/portfolio/DESIGN.md
- reference/apps/portfolio/DOCUMENT-FIRST-REVIEW.md
- reference/apps/portfolio/docs/deployment.md
- reference/apps/portfolio/package.json
