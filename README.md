# Countries Explorer Dashboard

A dashboard for exploring countries of the world with search, filtering, and favorites built with React and TypeScript.

![Countries Explorer Dashboard](/public/image.png)

## Features

- Browse all countries from the REST Countries API
- Search with debounce — no unnecessary requests while typing
- Filter by region
- Save countries to favorites — persisted in localStorage
- Detailed country page — flag, population, languages, borders
- Error boundary for unexpected crashes
- Loading and error states throughout

## Stack

- **React** + **TypeScript**
- **React Router** — client-side routing
- **shadcn/ui** + **Tailwind CSS** — UI components and styling
- **REST Countries API** — country data

## Getting Started

```bash
git clone https://github.com/raz-banned/countries-explorer-dashboard
cd countries-explorer-dashboard
npm install
npm run dev
```

## Project Structure

```
src/
├── components/     # UI components
├── hooks/          # Custom hooks (useFetch, useDebounce, useLocalStorage, useFavorites)
├── context/        # Favorites and search context
├── pages/          # Route-level components
└── types/          # TypeScript interfaces
```

## Custom Hooks

| Hook              | Purpose                                             |
| ----------------- | --------------------------------------------------- |
| `useFetch`        | Generic data fetching with loading and error states |
| `useDebounce`     | Delays search input to reduce API calls             |
| `useLocalStorage` | Syncs state to localStorage                         |
| `useFavorites`    | Manages favorites list                              |
