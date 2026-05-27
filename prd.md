# PRD: NBA Stats Trivia (1991–2026)

> Official PRD aligned to the [📋 PRD](https://www.notion.so/329da74ef04580288251f6677469c25c) template and [Minimal Public Project (Stubbed Data, No External APIs)](https://www.notion.so/35dda74ef045813b9941ead01f62f34d). Reference app: **nba-stats-trivia** — https://github.com/samturtletaubcursor/nba-stats-trivia

## 📋 Product Review: NBA Stats Trivia (1991–2026)

- **Author:** Sam Turtletaub
- **Team:** Personal / demo
- **Date:** 2026-05-27
- **Status:** Draft
- **Repo:** https://github.com/samturtletaubcursor/nba-stats-trivia
- **Live demo:** https://samturtletaubcursor.github.io/nba-stats-trivia/site/

## Opportunity

Basketball fans like testing knowledge of league history, but most stat products depend on live APIs, accounts, or paid feeds. A **self-contained trivia game** spanning roughly the last 35 years of NBA player and team stats is easy to run locally, share publicly, and iterate without integration drag.

The outcome is **speed to clarity**: reviewers can play the quiz with **zero secrets**, and scope stays narrow so we do not inherit OAuth, rate limits, or on-call before the core loop (question → answer → explanation → score) is proven.

## Customer Pains

- **Integration fragility:** External stats services fail, version, and require credentials; they slow early iteration and complicate demos.
- **Ideas stuck in notes:** A one-line Notion idea (“trivia for NBA stats”) is hard to evaluate without a runnable prototype.
- **Hidden scope:** “Live NBA data” often expands into auth, pagination, caching, and ops before the product story is crisp.

## Proposed Solution(s)

Ship a **static web trivia app** with in-repo **stub JSON** loaded via a single local `fetch` (served over HTTP per `README.md`). **No runtime calls** to third-party HTTP APIs for core flows. Twenty multiple-choice questions cover **player** and **team** categories from **1991–2026**, with explanations after each answer and a final score screen.

**Trade-off:** Data is illustrative, not live — acceptable for v1.

| Area | v1 decision |
|------|-------------|
| External APIs | **Not used** for core functionality. |
| Data | **Stub JSON** in-repo (`docs/site/data/stub.json`). |
| Distribution | **Public MIT license**; https://github.com/samturtletaubcursor/nba-stats-trivia; optional static hosting with **no secrets** in client bundles. |
| Release checks | LICENSE, `.gitignore`, `.env.example` only; stub data labeled in UI. |

**Risks (brief):** Stub answers may drift from official league records — mitigate with README disclaimer and stable question schema for a future API adapter.

## Mocks / Visuals / Prototype

- **HTML wireframe (checked in):** `docs/wireframes/primary-screen.html`
- **Working stub UI:** `docs/site/index.html` + `docs/site/data/stub.json` (run local static server — see `README.md`)
- **In-repo PRD mirror:** `prd.md`
- **Live demo (GitHub Pages):** https://samturtletaubcursor.github.io/nba-stats-trivia/site/

## Key Questions for Leadership

1. **Depth:** Expand the stub question bank (50+) or add difficulty tiers (casual vs. historian)?
2. **Hosting bar for v1:** Is **public GitHub** sufficient, or is a **static public deploy** (e.g. GitHub Pages) explicitly required?
3. **Future API:** Plan a **v2** with real stats integrations, or keep this a permanent **stub-first** reference implementation?
