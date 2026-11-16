# Onboarding process merge reversal

## REVERT-PLAN-001 — 2026-11-16T11:28:57.827Z — Codex

User requested reverting GitHub PR1 and leaving the proposal as an unmerged PR. Verified PR1 merge b008f9fde3456df20c2bd3e41e8a929d83450035 and head3793efd217c490d155dde51a8285341e8288af0b. Plan: use an isolated branch from current main; revert the README additions and five versioned supplement files, retaining historical audit entries and app-guide releases. Verify exact pre-PR README/blob state and unchanged release/source/client/tool trees. Merge only this rollback through normal GitHub rules after CI, then create a separate branch/PR reintroducing the reviewed proposal and leave it open with auto-merge disabled. The separate Pagelove Gitea merge and original dirty checkouts are out of scope. All steps retain hashes, UTC and provider evidence; no force push, history rewrite, app deployment or permission change. Honcho tools unavailable. Status: rollback pending.

## REVERT-VERIFIED-002 — 2026-11-16T11:29:56.893Z — Codex

Prepared `git revert --no-commit -m 1` of the exact merge. Retained the existing audit as history and added this reversal record. README bytes equal the pre-merge parent; all five supplement files are absent; releases/source/tools/client have no changes. Exact hash and file evidence: PROCESS-REVERT-20261116.json. Scope is README, removed supplement and audit additions only. No application tests/release build were rerun for this documentation reversal; existing GitHub checks will run before merge. Status: commit/push/rollback PR pending.
