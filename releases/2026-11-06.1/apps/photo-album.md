# Photo Album

Category: Lifestyle
Pinned starting code: https://github.com/pagelove/photo-album-template/tree/3ee9e5e4169c7d8ee981a1b89bd8c9b61059aec9

## What to build
An accessible image gallery with albums, captions and a detail/lightbox view.

Build a working responsive result with useful empty/loading/error states and accessible controls. Keep it focused and editable.

## Existing behavior, design and limits
Selected template design: invitation / dark. Read https://github.com/pagelove/design-system/blob/main/designs/invitation/.stitch/dark.DESIGN.md and preserve the complete design unless Personalize supplies an explicit relevant preference. This album-first library has named albums, covers, local uploads, album search, bulk photo organization, a responsive grid and keyboard/swipe viewer. It protects unfinished forms and checks staged upload capacity before committing. The working DOM and saved semantic HTML document are authoritative. Device-local saving, conflicts and HTML backups are implemented; shared-account synchronization is a separate supported integration. Read REVIEW.md, docs/architecture.md and docs/testing.md. Test primarily on the supplied Pagelove instance. Preserve existing records and device libraries; never embed the authoring API token in the browser.
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
Organize photos I have actually supplied or made available into albums based on known occasions, projects or subjects, with factual captions and dates only where known. Use my known personal or business identity and visual preferences when relevant. Ask for image files/access if unavailable; do not invent images, people, locations or dates, or pretend you can retrieve an image from a textual memory.

## Pinned instruction snapshots
- reference/apps/photo-album/README.md
- reference/apps/photo-album/AGENTS.md
- reference/apps/photo-album/DESIGN.md
- reference/apps/photo-album/DOCUMENT-FIRST-REVIEW.md
- reference/apps/photo-album/docs/deployment.md
- reference/apps/photo-album/package.json
