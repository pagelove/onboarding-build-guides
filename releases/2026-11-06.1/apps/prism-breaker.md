# Prism Breaker

Category: Games
Pinned starting code: https://github.com/pagelove/prism-breaker/tree/d21d4dd7e26379bcffa9214c266bda6b177419a5

## What to build
A playable brick-breaking game with paddle controls, score, lives, pause, restart and responsive touch controls.

Build a working responsive result with useful empty/loading/error states and accessible controls. Keep it focused and editable.

## Existing behavior, design and limits
Read the pinned repository instructions and source for actual supported features. Do not claim a static preview establishes privacy, permissions or persistence.


## Build and acceptance
Package scripts verified from this exact public commit:
- test: bun test ./tests
- serve: bun tools/serve.mjs
- check: bun tools/build-pwa.mjs --check
- check:repository: bun tools/repository-check.mjs
- check:requirements: bun tools/requirements-check.mjs
- release:check: bun tools/release-gate.mjs
- build: bun tools/build-worlds.mjs && bun tools/build-engagement.mjs && bun tools/build-bundled-worlds.mjs && bun tools/build-world-policy.mjs && bun tools/build-data.mjs && bun tools/build-editor.mjs && bun tools/build-pwa.mjs
Read the captured README, project instructions and any available deployment/design/document-first review below. Also inspect source docs/architecture.md and docs/testing.md if present. Respect their known gaps. After adaptation run the repo’s documented checks, prepare/build and deployment tests. Regenerate identity using its actual branding command when applicable. Do not assume all repos have scripts/deploy.mjs. Preserve licenses and unrelated/user-managed records. Verify important browser, keyboard/touch/mobile tasks on the supplied host separately from local tests.

## Personalization, only when enabled
Adapt the game theme, paddle/ball appearance, visual preferences, difficulty and keyboard/touch controls to my known tastes, devices and accessibility preferences. Use a known personal or business theme only when relevant. Start scores and achievements fresh; never invent my play history, records or progress.

## Pinned instruction snapshots
- reference/apps/prism-breaker/README.md
- reference/apps/prism-breaker/AGENTS.md
- reference/apps/prism-breaker/DOCUMENT-FIRST-REVIEW.md
- reference/apps/prism-breaker/package.json
