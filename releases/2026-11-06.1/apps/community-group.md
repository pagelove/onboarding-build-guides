# Community group

Category: Lifestyle
Pinned starting code: https://github.com/pagelove/demo-apps/tree/980117a70de847751c8d32c35af3af1e46a0a1a3/demo-05-professional

## What to build
A community introduction, upcoming events, discussion or resource areas and a clear joining path.

Build a working responsive result with useful empty/loading/error states and accessible controls. Keep it focused and editable.

## Existing behavior, design and limits
Use demo-05-professional as the starting point for its member directory, discussions and resources. The sample screenshot shows its actual directory and member activity view; adapt its seeded content to the requested community group. Read the repository-root README at https://github.com/pagelove/demo-apps for shared assets, schema and deployment instructions; do not copy the subfolder alone without its dependencies.


## Build and acceptance
Package scripts verified from this exact public commit:
- install:browser: node node_modules/@playwright/test/cli.js install chromium
- prepare:test: python scripts/prepare-deploy.py --host ci-demo.example --output .deploy-ci
- test:browser: node node_modules/@playwright/test/cli.js test
Read the captured README, project instructions and any available deployment/design/document-first review below. Also inspect source docs/architecture.md and docs/testing.md if present. Respect their known gaps. After adaptation run the repo’s documented checks, prepare/build and deployment tests. Regenerate identity using its actual branding command when applicable. Do not assume all repos have scripts/deploy.mjs. Preserve licenses and unrelated/user-managed records. Verify important browser, keyboard/touch/mobile tasks on the supplied host separately from local tests.

## Personalization, only when enabled
Use the actual community name and its relationship to my business if known. Populate the introduction, purpose, audience, guidelines, event types, resources, timezone and approved joining/contact links from shared facts. Include real scheduled events only with reliable dates/timezones; do not invent members, quotations, discussions or activity.

## Pinned instruction snapshots
- reference/apps/community-group/README.md
- reference/apps/community-group/AGENTS.md
- reference/apps/community-group/DOCUMENT-FIRST-REVIEW.md
- reference/apps/community-group/package.json
