# Racing

Category: Games
Pinned starting code: https://github.com/pagelove/racing-template/tree/ddee0439ad5c565ecb1eb080f6ba3b0463912af6

## What to build
Use the Scrap League code in the linked Racing template: twelve authored circuits, four cups, 81 modular car builds, six-car races against five rivals, Time Trial, Daily Spec, keyboard/touch controls, pause/restart, local progress/ghosts and the integrated Track Workshop. Preserve the shared HTML model/compiler, validation, garage presets, Workshop undo/redo, canonical HTML import/export, local drafts and complete offline release checks. Shared online boards and remote Workshop publishing remain disconnected unless separately implemented and verified. Do not replace this with a simpler three-track loop game.

Build a working responsive result with useful empty/loading/error states and accessible controls. Keep it focused and editable.

## Existing behavior, design and limits
Scrap League adaptation from https://github.com/wesley83/scrap-league with twelve circuits, four cups, 81 car builds, six-car races and the integrated Track Workshop. Read UPSTREAM.md, REVIEW.md and docs/deployment.md. Gameplay, Garage and Workshop drafts save locally without sign-in; shared boards and remote Workshop publishing UI are disconnected. The private-input owner CLI deploys to the supplied site and preserves existing player/Workshop data.


## Build and acceptance
Package scripts verified from this exact public commit:
- build: node tools/build.mjs
- prepare: node tools/build.mjs
- check: node tools/build.mjs && node --test tests/*.test.mjs
- test: node --test tests/*.test.mjs
- preview: node tools/serve.mjs
- deploy: node scripts/deploy.mjs
- verify: node scripts/deploy.mjs --verify
- test:deployment: node --test tests/deployment.test.mjs tests/publication-html.test.mjs
Read the captured README, project instructions and any available deployment/design/document-first review below. Also inspect source docs/architecture.md and docs/testing.md if present. Respect their known gaps. After adaptation run the repo’s documented checks, prepare/build and deployment tests. Regenerate identity using its actual branding command when applicable. Do not assume all repos have scripts/deploy.mjs. Preserve licenses and unrelated/user-managed records. Verify important browser, keyboard/touch/mobile tasks on the supplied host separately from local tests.

## Personalization, only when enabled
Use my known interests in vehicles, settings, visual style, challenge level and preferred device to tailor the car, track theme, control scheme and session length. Offer adjustable controls and motion settings relevant to stated preferences. Do not infer real driving skill or invent race times, unlocked tracks or prior results.

## Pinned instruction snapshots
- reference/apps/racing/README.md
- reference/apps/racing/AGENTS.md
- reference/apps/racing/DESIGN.md
- reference/apps/racing/DOCUMENT-FIRST-REVIEW.md
- reference/apps/racing/docs/deployment.md
- reference/apps/racing/package.json
