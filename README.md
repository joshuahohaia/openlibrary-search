# Bookfinder

A responsive book discovery app with fast search and keyboard-first navigation, built using React, Redux Toolkit, and styled-components.

![application screenshot](./media/screenshot.png)

## Features

- Real-time search with debounced API calls
- Infinite scroll with automatic pagination
- Virtualized results list
- Keyboard navigation (arrows, Enter, Escape)
- `Ctrl+K` / `Cmd+K` shortcut to focus search
- Responsive design (desktop, tablet, mobile)
- Results link to Amazon search
- Accessible combobox pattern (ARIA)
- Theme based on Taxfix brand palette

## Tech Stack

- **React 18** with TypeScript
- **Redux Toolkit** + RTK Query for state & API
- **styled-components** for styling
- **react-window** for list virtualization
- **Vitest** + React Testing Library for tests
- **Vite** for build tooling

## Prerequisites

- Node.js 18+
- npm 9+

## Getting Started


| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run tests |
| `npm run lint` | Lint code |

## Architecture

### Feature-based Structure

The search feature is fully encapsulated. Only `SearchWidget` is exported - internal components like `ResultItem` and `SearchInput` remain private. This pattern scales well as features are added.

```
src/
├── app/                    # Application-level setup
│   ├── store.ts           # Redux store configuration
│   ├── hooks.ts           # Typed Redux hooks
│   ├── theme.ts           # Design tokens
│   └── index.ts           # Clean public exports
├── features/
│   └── search/            # Self-contained feature module
│       ├── api/           # RTK Query endpoints
│       ├── components/    # Feature-specific components
│       ├── utils/         # Feature utilities
│       └── index.ts       # Public API for the feature
├── pages/                 # Route-level components
├── components/            # Shared/global components
└── types/                 # Shared type definitions
```

### State Management

Uses **Redux Toolkit** with **RTK Query** for API state. Key patterns:

- **Typed hooks** (`useAppDispatch`, `useAppSelector`) ensure type safety across the app
- **Feature isolation**: Each feature exports its own hooks and types
- **RTK Query caching**: Automatic cache management with pagination merge strategy

```typescript
// Import typed hooks from app module
import { useAppDispatch, useAppSelector } from '@/app'

// Or import feature-specific hooks directly
import { useSearchBooksQuery } from '@/features/search'
```