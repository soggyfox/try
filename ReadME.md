## Project Overview

React single-page app with GitHub Pages deployment via GitHub Actions.

## Requirements
- Node.js 18+
- npm (bundled with Node)

## Install
```bash
cd my-app
npm ci
```

## Develop
```bash
npm start          # runs at http://localhost:3000
npm test           # watch mode tests
npm run build      # creates production build in my-app/build
```

## Deploy (GitHub Actions)
- Pages source: set to **GitHub Actions** in repo Settings → Pages.
- Workflow: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
- On every push to `main` the workflow:
	- installs deps
	- builds the app
	- copies `CNAME` into the build
	- uploads and deploys to GitHub Pages

## Custom Domain
- `kevinsingpurwala.com` is set via `CNAME` in `my-app/public` and copied during the build step.

## Client-Side Routing
- `public/404.html` is present to allow deep links to work on GitHub Pages.

## Repo Layout
- App source: `my-app/src`
- Public assets: `my-app/public`
- Pages workflow: `.github/workflows/deploy.yml`