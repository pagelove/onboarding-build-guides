# Fitness tracker

Category: Personal
Pinned starting code: https://github.com/pagelove/fitness-tracker-template/tree/79288c6e67f2eafdf71470341b88308997e3f14a

## What to build
Dated activity entries, goals, progress, exercise details and a useful weekly overview.

Build a working responsive result with useful empty/loading/error states and accessible controls. Keep it focused and editable.

## Existing behavior, design and limits
Selected template design: forest / light. Read the selected repo’s DESIGN.md and mode-specific site/assets/pagelove-design/DESIGN.md and retain the complete assigned design/mode unless Personalize supplies an explicit relevant preference override. Do not replace it with the design collection default. This is a document-first implementation candidate. Read REVIEW.md and docs/architecture.md for accepted features and remaining integration gates. Configure and verify supported authenticated app writes and private reads on the target site; a DAV upload does not establish either. Preserve user records during releases.
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
Use my stated activities, goals, units, preferred schedule, equipment and devices to configure tracking fields and views. Prefill workouts only when I shared the activity and reliable date, duration, distance, repetitions or load. Distinguish planned workouts from completed sessions. Do not infer medical conditions, fabricate activity, performance or progress, or turn a stated goal into a completed result.

## Pinned instruction snapshots
- reference/apps/fitness-tracker/README.md
- reference/apps/fitness-tracker/AGENTS.md
- reference/apps/fitness-tracker/DESIGN.md
- reference/apps/fitness-tracker/DOCUMENT-FIRST-REVIEW.md
- reference/apps/fitness-tracker/docs/deployment.md
- reference/apps/fitness-tracker/package.json
