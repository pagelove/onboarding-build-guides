# App delivery process

Revision 3, November 16, 2026. Applies to app creation, copying, redesign, repair, distribution and release in this workspace. This supplements the Document-first guide and game handbook; it does not replace their contracts or authorize publication, permission changes or private-data use.

## 1 Resolve the request before editing

Record the target repositories, applicable instructions, audit destinations and governing guide revisions before the first edit. Preserve a current decision table with user request, superseded decision and acceptance consequence. Use an actual UTC timestamp; missing historical times stay unknown. Read instructions from each target repository, including nested repositories. Do not treat an audit entry made afterward as a pre-edit plan.

Identify the audience, purpose and first successful user action. For a product introduction, require a visible definition, intended audience and practical benefit before account-dependent actions. Record a human/agent semantic review of those questions; a keyword count is insufficient. Keep ordinary requested product changes separate from defect corrections.

## 2 Declare the exact app variant and inputs

Keep a release record joining source repository/commit, maintained source path, public origin/mount, native authoring destination, schema/policy version, asset/client/worker hashes, user-data resources, intended permissions, and approved design/copy overrides. Explicitly distinguish visual review, browser-local example, shared-public demo and protected application. Visual approval never implies permission or save acceptance.

Pin docs and dependencies. Compare approved overrides with each app's DESIGN and capability copy. Historical repair folders, old ZIPs and frozen onboarding releases are provenance, not upgrade commands. Review known issues and integrate source corrections before publishing a new immutable bundle. Never silently rewrite an old release. Record source-data ownership, credentials only by private reference, and licenses/roles for logos, fonts, icons, OG/install images and video.

## 3 Qualify the host and test environment

Owner DAV is trusted authoring and is not application validation. Test native writes through the application path. On copies, verify root and nested mounts, HTML base resolution, selector/range headers and cache keys, matching selector ETags, non-empty typed collection persistence, site-wide identifier isolation, runtime capabilities, public DOM projection and CSP execution. Maintain explicit behavior selectors that survive host projection. Resolve credential destinations before entering any key.

Disposable fixtures need bounded paths, synthetic unique IDs, exact approved policies, source preservation and a cleanup receipt. Test a real non-empty object plus repetition/edit/remove/reload, not just an empty response. Test invalid, stale and concurrent requests. Use only authorization already provided or obtain it at the actual boundary; a test plan does not grant permission.

## 4 Test user journeys and failure recovery

For each applicable feature define starting state, input, action, observed result, expected result, failure response and next ordinary action. Link it to the requirement and candidate. Do not substitute a generic app test count for feature outcomes.

- Editors: settings first/middle/last; exact remove/undo and inverse movement; intervening edits; confirmed discard/reload; rejected cleanup; dirty changes during pending work; recovery after failure.
- Forms: blank/invalid/valid submission through actual controls; blur followed by delayed rerender; retained field errors and drafts. Disabled-button behavior is required only when specified; invalid native submission must still be blocked.
- Public rendering: unresolved private APIs; cached public data during network delay; deferred auxiliary work; scroll/resize geometry and provider footer. Measure the actual state, not a benchmark inferred from one timing.
- Location: known, absent, hidden and changed venue coordinates; distance or an explicit explanation; current geolocation callback; maps destinations; no persisted visitor coordinates.
- Offline/update: correct route body for admin/visitor/query URLs, durable outbox before UI acceptance, storage denial and retry, clean/dirty/queued update states, old installed client to exact new candidate, interrupted install and preserved progress.
- Games: actual deployed reader and packed content, independent rule oracle, invalid content before mutation, bounded/cooperative harness work. Large simulation counts do not replace editor/save/update/focus journeys.
- Browser evidence: explicit active tab, current state/mode/filter/dialog, actual viewport, loaded content/fonts and relevant screenshot inspection. Record harness faults separately and link their resolution; do not repair a test by hiding the failing state.
- Imported events: identity/year/occurrence before facts, redirects and duplicate aliases, exclusions surviving refresh, exact/date-only precision, field-level provenance and actual review method. Missing information is not confirmation. Authorized approval defaults remain labeled assumptions.

## 5 Build and verify the candidate

Derive immutable asset inventories after the last transformation. Require unique URLs, matching hashes for final bytes, dependency closure and exact public routes. Narrow HTML normalization may handle proven host serialization only; records, policies, behavior hooks and CSP remain independently checked. Preserve data under conditional writes and test rollback on disposable copies.

Treat a state-changing code, config, content, policy or dependency revision as invalidating affected evidence. Verify source-to-deployment parity. Follow the user's required environment: hosted tests cannot be replaced by local fixtures. A local counterfactual process simulation checks this procedure, not the app.

## 6 Review evidence before promotion and completion

Each required outcome must carry its observation and expected result. Missing, failed, blocked or not-run requirements remain open. Successful uploads, OPTIONS, status 200, screenshot dimensions or a summary pass flag cannot stand in for the actual outcome. Qualified reviewers must examine semantic product fit and visual evidence; software can require that record, not establish taste or comprehension itself.

Freeze the applicable outcome inventory before implementing. Applicability is a reviewed decision tied to the request, feature set and risk; it cannot be inferred from which tests happened to pass. A not-applicable decision needs its rationale and reviewer before testing; inability to run a required check is blocked, not not-applicable. The gate compares the plan with that inventory, rejects missing/unknown/duplicate IDs, and binds every receipt to the exact candidate and required stage. A later repair supersedes a failed attempt through an explicit resolution link and new candidate evidence; it never silently replaces a row with the same ID. Existing failures remain in the history.

Bind observations to app/environment, immutable candidate/dependency digest, requirement, actual observation time, reviewer and raw evidence artifact/digest. Establish stage deadlines from the real edit/publication journal, not from a receipt claiming to be early. Check the raw artifact exists, matches its digest and agrees with the claimed observation. Hashes establish integrity, not truth or reviewer independence. Product/visual/source judgments still require competent review against the original brief and material; do not manufacture a passing observation to satisfy the gate.

The counterfactual replay has an independently frozen known-issue inventory. Its synthetic composite app, times and raw evidence are clearly labeled. It proves that the modeled bad observations cannot advance under these checks; it does not prove future implementations will expose every defect, that reviewers will always judge correctly, or that an unintegrated publisher is technically blocked. Broaden the inventory when a new incident or applicability gap is found. Keep normal healthy controls so a gate that rejects everything cannot appear successful.

Use the replay checker to exercise the process with bad and healthy observations. Keep production acceptance separate. All supported publishers must eventually use the same candidate-bound acceptance record. Until a publisher is integrated, an operator must verify the record before running it; documentation is not an installed technical enforcement boundary. Never report integration as completed because this procedure exists.

Before closing, compare current docs, source, public readback, bundle/version status, remaining limitations and user promises. Remove known disposable fixtures/policies and verify absence. Generate the completion summary from actual outcomes and keep unrelated tests' timestamps. Each retrospective action has a target, owner, check and closure evidence; recurring failures reopen it.
