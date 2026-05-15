# Lindsey Simon Portfolio

Personal website for Lindsey Simon at [idreamofuni.com](https://www.idreamofuni.com).

## Stack

- TanStack Start
- TanStack Router
- React 19
- Tailwind CSS v4
- shadcn/ui
- Vercel

## Development

From your terminal:

```sh
pnpm install
pnpm dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Build

To build the app for production:

```sh
pnpm build
```

## Deploy

The repo is linked to the Vercel `elsigh-pro` team project `v0-i-dream-of-uni`.

```sh
vercel build --prod --scope elsigh-pro
vercel deploy --prebuilt --prod --scope elsigh-pro
```

The project keeps the existing production domain:

- `www.idreamofuni.com`
- `idreamofuni.com`
