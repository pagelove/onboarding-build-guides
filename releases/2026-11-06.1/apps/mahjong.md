# Mahjong

Category: Games
Pinned starting code: https://github.com/pagelove/mahjong-template/tree/908fee48fca44854b5b2b8b7309251839315420e

## What to build
A playable tile-matching game with valid pair selection, clear rules, shuffle, restart and a win state.

Build a working responsive result with useful empty/loading/error states and accessible controls. Keep it focused and editable.

## Existing behavior, design and limits
This is a document-first implementation candidate. Read REVIEW.md and docs/architecture.md for accepted features and remaining integration gates. Configure and verify supported authenticated app writes and private reads on the target site; a DAV upload does not establish either. Preserve user records during releases.


## Build and acceptance
Package scripts verified from this exact public commit:
- test: node tools/check.mjs
- build: node tools/build.mjs
- serve: node tools/serve.mjs
- author-levels: node tools/author-levels.mjs
- check: node tools/check.mjs
- gate: node tools/gate.mjs
- prepare: node tools/prepare-template.mjs
- deploy: node scripts/deploy.mjs
- verify: node scripts/deploy.mjs --verify
- test:deployment: node --test tests/deployment.test.mjs
Read the captured README, project instructions and any available deployment/design/document-first review below. Also inspect source docs/architecture.md and docs/testing.md if present. Respect their known gaps. After adaptation run the repo’s documented checks, prepare/build and deployment tests. Regenerate identity using its actual branding command when applicable. Do not assume all repos have scripts/deploy.mjs. Preserve licenses and unrelated/user-managed records. Verify important browser, keyboard/touch/mobile tasks on the supplied host separately from local tests.

## Personalization, only when enabled
Use known visual themes, tile-style preferences, preferred challenge level, session length, device and accessibility preferences to choose tile contrast, board density, sound and controls. Clarify whether I want solitaire tile matching if uncertain. Start a new game with no invented history or achievements.

## Pinned instruction snapshots
- reference/apps/mahjong/README.md
- reference/apps/mahjong/AGENTS.md
- reference/apps/mahjong/DESIGN.md
- reference/apps/mahjong/DOCUMENT-FIRST-REVIEW.md
- reference/apps/mahjong/docs/deployment.md
- reference/apps/mahjong/package.json
