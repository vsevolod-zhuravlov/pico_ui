# Deployment Guide

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### How it works

1. **Automatic Deployment**: Every push to `main` or `test_deployment` branches triggers the deployment workflow
2. **Manual Deployment**: You can also trigger deployment manually from the Actions tab in GitHub

### Setup Instructions

1. Go to your repository settings on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**, set:
   - **Source**: GitHub Actions
4. Push to the `main` or `test_deployment` branch, or manually trigger the workflow

### Client-Side Routing

The app uses React Router with BrowserRouter for clean URLs. To make direct URL visits work on GitHub Pages:

- During build, `index.html` is copied to `404.html` in the dist folder
- When a user visits a route directly (e.g., `/pico_ui/vault-address`), GitHub Pages serves `404.html`
- The React app loads and React Router handles the routing client-side

This approach ensures that routes like `/pico_ui/0x123...` work correctly when visited directly or refreshed.

### Base Path Configuration

The vite config automatically sets the correct base path:
- **GitHub Actions**: `/pico_ui/` (matches the repository name)
- **Local development**: `/` (root path)

If you rename the repository, update the base path in `vite.config.ts` to match the new repository name.

### Local Testing

To test the production build locally:

```bash
npm run build
npm run preview
```

Note: The preview server will use base path `/` instead of `/pico_ui/`, so routing works slightly differently than on GitHub Pages.

### Workflow File

The deployment workflow is located at `.github/workflows/deploy.yml` and includes:
- Building the project with all dependencies.
- Copying `index.html` to `404.html` for SPA routing support
- Deploying to GitHub Pages
