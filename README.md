# Pagelove onboarding build guides

One short prompt, explicit app instructions and a matching offline attachment. Public docs contain no runtime site credentials or personal user content.

Current release: [2026-11-06.1](releases/2026-11-06.1/README.md). Start with [START.md](releases/2026-11-06.1/START.md). Select the manifest matching the chosen app and Personalize on/off in [catalog.json](releases/2026-11-06.1/catalog.json).

## How the pieces fit

- `source/` is the approved policy/catalog and pinned upstream instruction snapshot. `original-prompt.txt` preserves migration provenance, with placeholder connection values only.
- `tools/build.mjs` generates shared/app/provider Markdown, manifests, checksums and identical-release Markdown/ZIP bundles. The full Document-first Development edition2.4 guide remains required.
- `client/guide-client.mjs` creates the user-friendly starter and verifies pinned manifest/required-file hashes without sending private connection details.
- `releases/2026-11-06.1/` is immutable after publication. Publish a new release directory for changes; never rewrite an old release in place or silently substitute latest.
- App profiles reference exact public repo commits and include their actual README, available project/design/deployment/document-first instructions and package scripts. Repo source and its licenses remain in their respective repositories.

Run `npm run build` and `npm test` with Node22+. No packages or provider API keys are required. Every new release needs all34 item/personalization combinations, fallback/integrity checks, public pinned readback and hosted UI/download acceptance. A deterministic loader test is not proof that an LLM obeys instructions; test actual build behavior where access is available and report other providers as untested.

The published review UI is https://kayak-draw-9549.onpagelove.com/onboarding/04-starting-point.html . Connection fields go only into the user's copied prompt; static downloads never contain them. The token remains private trusted-authoring input, not browser application authentication.

## Maintenance

Read the plan and migration entry in audit/CHANGELOG.md before changes. Record UTC, actor, request, rationale, affected files, tests, hashes and pending limitations for meaningful batches. Refresh exact upstream refs and snapshots deliberately, review conflicts (especially assigned app modes), change the release identifier, rebuild/test and publish. Generate UI release metadata from that exact public commit and copy the matching download files before switching the UI. Keep old release assets for existing prompts. No automatic mutable-main fallback.

Setup routes are current referenced official documentation with version/account caveats, never assumed account capabilities. They are loaded only when tools are missing and cover major providers plus a catch-all. The offline bundle contains those sections for recovery; show only the relevant route to the user. No new outside sign-in service is introduced for the app.

Guide code and original guide text use MIT except incorporated works, whose original notices and licenses remain applicable. Pinned upstream instruction snapshots retain their repositories' notices; the Document-first guide retains its attribution/license. Do not strip license notices from reused source.
