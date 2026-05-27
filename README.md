# NBA Stats Trivia

**Repository:** https://github.com/samturtletaubcursor/nba-stats-trivia

A simple browser trivia game about NBA player and team statistics from **1991 through 2026**. All question data lives in-repo as **stub JSON** — no external APIs, API keys, or live league feeds.

## Quick start

Serve the `public/` folder over HTTP (required for `fetch`):

```bash
cd public
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## Live demo

https://samturtletaubcursor.github.io/nba-stats-trivia/

(Root `index.html` redirects to `public/`; GitHub Pages serves from `main`.)

## Project structure

| Path | Purpose |
|------|---------|
| `public/index.html` | Quiz UI |
| `public/js/app.js` | Game logic (loads stub JSON) |
| `public/data/stub.json` | 20 multiple-choice questions |
| `docs/PRD.md` | Product requirements document |
| `docs/wireframes/primary-screen.html` | Low-fi wireframe |

## Data model (stub)

Questions in `public/data/stub.json` include `category` (`player` | `team`), `season`, `prompt`, `choices`, `correctIndex`, and `explanation`. Replace this file or add an adapter layer if you later integrate a real stats API.

## Constraints (v1)

- **No runtime third-party HTTP APIs** for core gameplay
- **MIT license** — safe to fork and share
- **Synthetic / illustrative stats** labeled in the UI

## License

MIT — see [LICENSE](LICENSE).
