# Claude Chat

A full-stack chat application built with **Next.js (App Router) + TypeScript** that
talks to the **Anthropic Claude API**. The API key is kept server-side and responses
are streamed token-by-token to the browser.

## Features

- Server-side Anthropic API route (`/api/chat`) — the API key never reaches the client.
- Streaming responses rendered incrementally in the UI.
- Multi-turn conversation with full history sent to the model.
- Zero-dependency UI (plain React + CSS), dark themed.

## Prerequisites

- Node.js 18+ (20+ recommended)
- An Anthropic API key: https://console.anthropic.com/settings/keys

## Setup

```bash
cd chat-app
npm install
cp .env.example .env.local   # then edit .env.local and set ANTHROPIC_API_KEY
npm run dev
```

Open http://localhost:3000.

## Environment variables

| Variable            | Required | Description                                             |
| ------------------- | -------- | ------------------------------------------------------- |
| `ANTHROPIC_API_KEY` | yes      | Your Anthropic API key (server-side only).              |
| `ANTHROPIC_MODEL`   | no       | Model id (must be accessible to your account). Defaults to `claude-sonnet-5`. |

## Scripts

| Command             | Description                     |
| ------------------- | ------------------------------- |
| `npm run dev`       | Start the dev server.           |
| `npm run build`     | Production build.               |
| `npm run start`     | Serve the production build.     |
| `npm run lint`      | Lint with ESLint.               |
| `npm run typecheck` | Type-check with `tsc --noEmit`. |

## Project structure

```
chat-app/
  src/
    app/
      api/chat/route.ts   # server-side streaming Claude endpoint
      layout.tsx
      page.tsx
      globals.css
    components/
      Chat.tsx            # client chat UI
    lib/
      types.ts
```
