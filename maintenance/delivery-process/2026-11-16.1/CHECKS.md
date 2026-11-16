# Observable delivery checks

Each row is required when its feature/risk applies. Declare applicability before testing; a passing check in another app or state does not cover it. The expected values in the replay are synthetic scenario constants, not global product defaults. Manual/semantic judgments need recorded review; the checker cannot infer them from screenshots.

| ID | Stage | Required observation | Kind |
| --- | --- | --- | --- |
| P01 | brief | Explain the product before onboarding | semantic review |
| P02 | brief | Resolve superseded product decisions | document comparison |
| P03 | pre-edit | Read nested instructions before edits | sequence review |
| P04 | pre-edit | Use a captured audit timestamp | sequence review |
| P05 | brief | Pin governing guidance and differences | document comparison |
| P06 | completion | Close recurring lessons with implemented checks | closure review |
| H01 | host-fixture | Persist a non-empty typed team collection | hosted journey |
| H02 | host-fixture | Use the intended native write policy | hosted journey |
| H03 | host-fixture | Read and write the same revision scope | protocol assertion |
| H04 | host-fixture | Verify runtime capabilities used by validators | host assertion |
| H05 | host-fixture | Honor the document base at nested mounts | route assertion |
| H06 | host-fixture | Forward selector headers and key caches correctly | adapter assertion |
| H07 | host-fixture | Isolate site-wide identifiers in QA copies | identity assertion |
| H08 | journey | Update CRM counters in the served DOM | hosted journey |
| H09 | candidate | Resolve every workshop and preview route | route assertion |
| H10 | host-fixture | Resolve authoring host before credentials | destination assertion |
| H11 | candidate | Execute the served workshop with CSP intact | hosted journey |
| L01 | journey | Restore the exact position after undo | document round trip |
| L02 | journey | Keep settings in place through inverse reorder | document round trip |
| L03 | journey | Discard and reload with one confirmation | native browser journey |
| L04 | journey | Accept selection only after durable queue write | failure injection |
| L05 | journey | Return the correct offline route body | route content assertion |
| L06 | journey | Retain invalid-email feedback across rerender | async journey |
| L07 | journey | Render public content while private APIs wait | failure injection |
| L08 | journey | Render cached public content before network finishes | failure injection |
| L09 | journey | Keep footer and navigation stable while scrolling | geometry review |
| L10 | journey | Explain missing or private venue distances | data-state matrix |
| L11 | upgrade | Apply clean updates with one action | installed upgrade |
| E01 | capture | Verify the actual phone viewport | browser measurement |
| E02 | capture | Capture loaded content rather than loading state | visual review |
| E03 | journey | Observe current tab mode filter and dialog | browser state review |
| E04 | host-fixture | Read packed content with the production parser | reader parity |
| E05 | host-fixture | Keep long test runs responsive | harness qualification |
| E06 | journey | Assert behavior rather than an invented disabled state | oracle review |
| R01 | candidate | Derive URL hashes from final transformed bytes | artifact assertion |
| R02 | promotion | Map every applicable feature to acceptance | coverage review |
| R03 | promotion | Retest affected changes after the passing gate | release assertion |
| R04 | completion | Keep blocked or unrun outcomes open | completion review |
| R05 | promotion | Use the requested hosted acceptance environment | environment assertion |
| D01 | brief | Match capability notices to deployed behavior | copy review |
| D02 | distribution | Do not present old pinned bundles as repaired | source reconciliation |
| D03 | distribution | Reconcile all consumers of shared client fixes | source reconciliation |
| D04 | capture | Check brand asset role and proportions | visual review |
| D05 | data-import | Separate discovery from organizer verification | source review |
| D06 | data-import | Keep aliases and exclusions through refresh | import lifecycle |
| D07 | data-import | Record the actual source-review method | provenance review |
| D08 | distribution | Identify what existing ZIP recipients receive | distribution review |
| D09 | brief | Disclose unavailable requested messaging input | source review |
