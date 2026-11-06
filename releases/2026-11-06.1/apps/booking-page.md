# Booking page

Category: Services
Pinned starting code: https://github.com/pagelove/booking-page-template/tree/ea44d55ab8e07711bd2077195d2b83eaf54749ab

## What to build
Service options, available slots, timezone labels, booking details and clear confirmation states.

Build a working responsive result with useful empty/loading/error states and accessible controls. Keep it focused and editable.

## Existing behavior, design and limits
Selected template design: forest / dark. Read https://github.com/pagelove/design-system/blob/main/designs/forest/.stitch/dark.DESIGN.md and retain the complete assigned design/mode unless Personalize supplies an explicit relevant preference override. Do not replace it with the design collection default. This is a document-first implementation candidate. Read REVIEW.md and docs/architecture.md for accepted features and remaining integration gates. Configure and verify supported authenticated app writes and private reads on the target site; a DAV upload does not establish either. Preserve user records during releases.
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
Use my actual business/practice name, known services, public contact details and relevant brand. Prefill shared service descriptions, durations, prices/currency, working hours, timezone, appointment location/format and cancellation preferences. Confirm availability/calendar integration before offering bookable slots; never invent appointments, availability, payment details or professional credentials.

## Pinned instruction snapshots
- reference/apps/booking-page/README.md
- reference/apps/booking-page/AGENTS.md
- reference/apps/booking-page/DESIGN.md
- reference/apps/booking-page/DOCUMENT-FIRST-REVIEW.md
- reference/apps/booking-page/docs/deployment.md
- reference/apps/booking-page/package.json
