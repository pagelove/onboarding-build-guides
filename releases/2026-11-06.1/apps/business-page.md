# Business page

Category: Landing pages
Pinned starting code: https://github.com/pagelove/business-page-template/tree/a83d66c9795a1b90a9f12a2df9d28bcac5fa7b01

## What to build
A clear value proposition, services, trustworthy proof, contact information and one primary call to action.

Build a working responsive result with useful empty/loading/error states and accessible controls. Keep it focused and editable.

## Existing behavior, design and limits
Selected template design: classic / light. Read https://github.com/pagelove/design-system/blob/main/designs/classic/.stitch/light.DESIGN.md and retain the complete assigned design/mode unless Personalize supplies an explicit relevant preference override. Do not replace it with the design collection default. This is a document-first implementation candidate. Read REVIEW.md and docs/architecture.md for accepted features and remaining integration gates. Configure and verify supported authenticated app writes and private reads on the target site; a DAV upload does not establish either. Preserve user records during releases.
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
Identify my actual business and use its name in the site title, logo/wordmark text, heading and contact area. Build the value proposition, about section, products/services, audience, locations/service area, public contact details, brand tone and main call to action from facts already known. Use actual approved links/assets; do not substitute a generic company name or invent prices, testimonials, customer logos, credentials or performance claims.

## Pinned instruction snapshots
- reference/apps/business-page/README.md
- reference/apps/business-page/AGENTS.md
- reference/apps/business-page/DESIGN.md
- reference/apps/business-page/DOCUMENT-FIRST-REVIEW.md
- reference/apps/business-page/docs/deployment.md
- reference/apps/business-page/package.json
