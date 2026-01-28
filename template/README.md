# elements-app

A tiny Vite template using `@pfern/elements`.

Includes:

- Minimal client-side routing (history + `popstate`)
- A todos example (`src/components/todos.js`)
- Two independent counters (`src/components/counter.js`)
- Pico.css styling (`src/style.css`)

## Getting started

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm test
```

## Routing

Routes are defined in `src/router.js` and used from `src/components/app.js`.
Navigation uses the History API so the address bar stays in sync.

## Linting & Formatting

The rules in `eslint.config.json` are there to allow for the Formatting style
used in the examples. Feel free to remove or edit them if preferred.
