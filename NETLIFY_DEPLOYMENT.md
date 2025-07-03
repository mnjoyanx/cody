# Netlify Deployment Guide

This guide explains how to deploy both the `web` and `flow` apps from your Turborepo monorepo to separate Netlify sites.

## Overview

You have three configuration files:

- `netlify.toml` - Currently configured for the **web** app (default)
- `netlify-web.toml` - Specific configuration for the **web** app
- `netlify-flow.toml` - Specific configuration for the **flow** app

## Option 1: Deploy Both Apps to Separate Netlify Sites (Recommended)

### Step 1: Deploy the Web App

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Configure the build settings:
   - **Base directory**: Leave empty
   - **Build command**: `pnpm install && pnpm run build --filter=web`
   - **Publish directory**: `apps/web/out`
   - **Environment variables**:
     - `NODE_VERSION = 18`
     - `NETLIFY_NEXT_PLUGIN_SKIP = true`
5. Deploy the site

### Step 2: Deploy the Flow App

1. Create another new site on Netlify
2. Connect the same Git repository
3. Configure the build settings:
   - **Base directory**: Leave empty
   - **Build command**: `pnpm install && pnpm run build --filter=@repo/flow`
   - **Publish directory**: `apps/flow/out`
   - **Environment variables**:
     - `NODE_VERSION = 18`
     - `NETLIFY_NEXT_PLUGIN_SKIP = true`
4. Deploy the site

## Option 2: Use Configuration Files

### For Web App Site:

1. Rename `netlify-web.toml` to `netlify.toml` in your repository
2. Commit and push
3. Netlify will automatically use this configuration

### For Flow App Site:

1. In your Flow app's Netlify site settings, go to "Build & deploy" → "Build settings"
2. Set the **Config file path** to `netlify-flow.toml`
3. Save and redeploy

## Option 3: Use Branch-Based Deployment

1. Create a `web-deploy` branch:

   ```bash
   git checkout -b web-deploy
   cp netlify-web.toml netlify.toml
   git add netlify.toml
   git commit -m "Configure for web app deployment"
   git push origin web-deploy
   ```

2. Create a `flow-deploy` branch:

   ```bash
   git checkout main
   git checkout -b flow-deploy
   cp netlify-flow.toml netlify.toml
   git add netlify.toml
   git commit -m "Configure for flow app deployment"
   git push origin flow-deploy
   ```

3. Configure each Netlify site to deploy from its respective branch

## Result

After deployment, you'll have:

- **Web App**: Your main landing page with the Turborepo logo and links
- **Flow App**: Your flow/diagram application with advanced features

## Troubleshooting

If builds fail:

1. Check that Node.js version is set to 18 in environment variables
2. Ensure pnpm is being used (Netlify should auto-detect it)
3. Verify the publish directories exist after build
4. Check build logs for specific error messages

### Common Error: "@netlify/plugin-nextjs" failed

If you see this error:

```
Plugin "@netlify/plugin-nextjs" failed
Error: The directory "/opt/build/repo/apps/web/out" does not contain a Next.js production build.
```

**Solution**: Add the environment variable `NETLIFY_NEXT_PLUGIN_SKIP = true` to skip Netlify's Next.js plugin since we're using static export.

## Quick Commands for Local Testing

Test web app build:

```bash
pnpm run build --filter=web
```

Test flow app build:

```bash
pnpm run build --filter=@repo/flow
```

Both should create `out` directories in their respective app folders.
