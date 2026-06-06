# NexxtWin — UI Redesign

A modern, full rebuild of the [nexxtwin.com](https://nexxtwin.com) premium sports-betting
platform, focused on an elevated, polished UI.

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript · Zustand · lucide-react

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Routes

| Route            | Page                                                        |
| ---------------- | ----------------------------------------------------------- |
| `/`              | Sports feed — promos, live ticker, featured match, fixtures |
| `/live`          | Live in-play matches                                        |
| `/match/[id]`    | Match detail — all market groups, live stats                |
| `/my-bets`       | Open & recently settled bets                                |
| `/bet-history`   | Full bet history with filters + expandable slips            |
| `/transactions`  | Wallet transactions with filters + export                   |
| `/account`       | Wallet hero, KPIs, deposit/withdraw (MoMo) modal            |
| `/verify`        | Immersive ticket-verification portal                        |
| `/login`         | Sign in                                                     |
| `/register`      | Create account                                              |

## Key features

- **Live bet slip** — tap any odds anywhere to build a slip; desktop right-rail + mobile
  bottom drawer, with acca-boost bonus, quick stakes, and a place-bet confirmation
  (state via Zustand, `src/lib/store.ts`).
- **Design system** — dark premium theme with violet→pink brand gradients, cyan/amber/
  emerald/rose accents, Outfit/Inter/JetBrains Mono fonts. Tokens + reusable component
  classes live in `src/app/globals.css`.
- **Fully responsive** — desktop sidebar + right rail collapse into a mobile drawer and
  bottom nav.
- **Mock data only** — `src/lib/data.ts`. No backend; ready to wire to a real API.

## Structure

```
src/
  app/            route pages
  components/     app shell, match card, bet slip, chat, search, auth, etc.
  lib/            data.ts (mock) · store.ts (bet slip) · types.ts · utils.ts
```

> 18+ · Play responsibly. This is a UI demo; no real wagering takes place.
