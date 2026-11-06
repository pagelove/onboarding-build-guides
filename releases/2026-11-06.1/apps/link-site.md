# Link site

Category: Landing pages
Pinned starting code: https://github.com/pagelove/link-in-bio-template/tree/8da337adc05d86ba5575faf5a100259445aa3412

## What to build
A profile with editable links, meaningful labels, accessible touch targets and social destinations.

Build a working responsive result with useful empty/loading/error states and accessible controls. Keep it focused and editable.

## Existing behavior, design and limits
Selected template design: invitation / dark. Read https://github.com/pagelove/design-system/blob/main/designs/invitation/.stitch/dark.DESIGN.md and retain the complete assigned design/mode unless Personalize supplies an explicit relevant preference override. Do not replace it with the design collection default. This is a document-first implementation candidate. Read REVIEW.md and docs/architecture.md for accepted features and remaining integration gates. Configure and verify supported authenticated app writes and private reads on the target site; a DAV upload does not establish either. Preserve user records during releases.
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
Identify whether this profile is for me or my business; use my actual business name when the intended profile is business-related. Prefill the known display name, bio, approved avatar/logo, website, products/services and verified social/content/contact links. Prioritize destinations relevant to my stated goals and audience. Never guess handles, URLs or offers, and do not mix personal/private destinations with the business profile.

## Pinned instruction snapshots
- reference/apps/link-site/README.md
- reference/apps/link-site/AGENTS.md
- reference/apps/link-site/DESIGN.md
- reference/apps/link-site/DOCUMENT-FIRST-REVIEW.md
- reference/apps/link-site/docs/deployment.md
- reference/apps/link-site/package.json
