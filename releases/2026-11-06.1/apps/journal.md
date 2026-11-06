# Journal

Category: Personal
Pinned starting code: https://github.com/pagelove/journal-template/tree/6701e1ac15c59f0a4521521463cb095989bc23f5

## What to build
Dated entries, an entry editor, chronological browsing, search and an accessible reading view.

Build a working responsive result with useful empty/loading/error states and accessible controls. Keep it focused and editable.

## Existing behavior, design and limits
Selected template design: editorial / dark. Read the selected repo’s DESIGN.md and mode-specific site/assets/pagelove-design/DESIGN.md and retain the complete assigned design/mode unless Personalize supplies an explicit relevant preference override. Do not replace it with the design collection default. This is a document-first implementation candidate. Read REVIEW.md and docs/architecture.md for accepted features and remaining integration gates. Configure and verify supported authenticated app writes and private reads on the target site; a DAV upload does not establish either. Preserve user records during releases.
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
Prefill dated entries with specific activities, experiences, reflections or milestones I actually discussed, using the dates I supplied. Keep uncertain or undated memories in an undated draft/inbox and ask before assigning a date. Match my known writing tone and journal goals. Distinguish direct recollections from summaries; never invent a day, event, emotion or person to fill a gap.

## Pinned instruction snapshots
- reference/apps/journal/README.md
- reference/apps/journal/AGENTS.md
- reference/apps/journal/DESIGN.md
- reference/apps/journal/DOCUMENT-FIRST-REVIEW.md
- reference/apps/journal/docs/deployment.md
- reference/apps/journal/package.json
