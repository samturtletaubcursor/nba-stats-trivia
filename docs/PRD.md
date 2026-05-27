# PRD: NBA Stats Trivia (1991–2026)

Aligned to the [📋 PRD](https://www.notion.so/329da74ef04580288251f6677469c25c) template and [Minimal Public Project](https://www.notion.so/35dda74ef045813b9941ead01f62f34d) constraints.

## Product Review: NBA Stats Trivia

- **Author:** Sam Turtletaub
- **Team:** Personal / demo
- **Date:** 2026-05-27
- **Status:** Draft
- **Repo:** https://github.com/samturtletaubcursor/nba-stats-trivia
- **Live demo:** https://samturtletaubcursor.github.io/nba-stats-trivia/site/

## Opportunity

Basketball fans enjoy testing knowledge of league history, but most stat apps require live APIs, accounts, or paid data feeds. A **self-contained trivia experience** over the last ~35 years of NBA history is easy to demo, fork, and share without operational overhead.

The goal is a **small public artifact**: prove product thinking (clear UX, scoped MVP) and engineering discipline (stub-first data, no secrets) in one repo.

## Customer Pains

- **Integration fragility:** Live stats APIs change, rate-limit, and need keys — bad for quick demos.
- **Unclear demoability:** Ideas stuck in Notion are hard to hand to reviewers without a runnable build.
- **Scope creep:** “Real-time NBA data” pulls in auth, caching, and compliance before the game loop works.

## Proposed Solution

Ship a **static web trivia app** that loads **in-repo stub JSON** via `fetch`. Core flows: start quiz → answer multiple-choice questions → see explanations → view final score → replay with shuffled order.

| Area | v1 decision |
|------|-------------|
| External APIs | **Not used** for gameplay |
| Data | **`docs/site/data/stub.json`** (20 questions, player + team, 1991–2026) |
| Distribution | **Public MIT repo**; optional static hosting with no secrets |
| UI | Start screen, quiz card, results screen; stub disclaimer badge |

**Trade-off:** Stats are illustrative, not authoritative — acceptable for v1.

**Future adapter (documented only):** Swap `stub.json` for a backend or stats provider without changing screen flow.

## Mocks / Visuals / Prototype

- Wireframe: `docs/wireframes/primary-screen.html`
- Working UI: `docs/site/index.html` + local HTTP server
- Screenshots: capture after first local run for Notion / README

## Functional requirements

1. Present one question at a time with four choices.
2. Show immediate feedback and a short explanation after each answer.
3. Track score and progress (e.g. `3 / 20`).
4. Shuffle question order each run.
5. Display a visible **stub data** disclaimer.
6. Work offline from stub file once assets are served over HTTP.

## Non-goals (v1)

- User accounts, leaderboards, multiplayer
- Live box scores or season-to-date API sync
- Mobile native apps

## Key Questions for Leadership

1. **Depth:** Expand stub bank (50+ questions) or add difficulty tiers?
2. **Hosting:** Is GitHub-only enough, or is a public static deploy required?
3. **v2 data:** Stay stub-first permanently, or plan a real stats API with typed DTO mapping?
