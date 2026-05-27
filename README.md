# NBA Stats Trivia

**Repository:** https://github.com/samturtletaubcursor/nba-stats-trivia

A simple browser trivia game about NBA player and team statistics from **1991 through 2026**. All question data lives in-repo as **stub JSON** — no external APIs, API keys, or live league feeds.

## Quick start

Serve `docs/site/` over HTTP (required for `fetch`):

```bash
cd docs/site
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## Live demo

https://samturtletaubcursor.github.io/nba-stats-trivia/site/

(GitHub Pages publishes the `docs/` folder on `main`.)

## Project structure

| Path | Purpose |
|------|---------|
| `docs/site/index.html` | Quiz UI |
| `docs/site/js/app.js` | Game logic (loads stub JSON) |
| `docs/site/data/stub.json` | 20 multiple-choice questions |
| `prd.md` | Product requirements document |
| `docs/wireframes/primary-screen.html` | Low-fi wireframe |

## Data model (stub)

Questions in `docs/site/data/stub.json` include `category` (`player` | `team`), `season`, `prompt`, `choices`, `correctIndex`, and `explanation`. Replace this file or add an adapter layer if you later integrate a real stats API.

## Constraints (v1)

- **No runtime third-party HTTP APIs** for core gameplay
- **MIT license** — safe to fork and share
- **Synthetic / illustrative stats** labeled in the UI

## License

MIT — see [LICENSE](LICENSE).
