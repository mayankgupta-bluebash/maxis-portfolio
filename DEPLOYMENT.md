# Deployment Guide

This guide explains how to set up automatic deployment to Vercel using GitHub Actions.

## Prerequisites

1. A Vercel account
2. Your project connected to Vercel
3. GitHub repository with your code

## Setup Steps

### 1. Get Vercel Configuration

First, you need to get your Vercel configuration details. Run these commands in your project directory:

```bash
# Install Vercel CLI if you haven't already
npm i -g vercel

# Login to Vercel
vercel login

# Link your project to Vercel (if not already done)
vercel link
```

### 2. Get Required IDs

After linking your project, you'll need to get your Organization ID and Project ID:

```bash
# Get your project configuration
vercel project ls
```

Or you can find these in your Vercel dashboard:
- Go to your project settings
- Look for "Project ID" and "Team ID" (Organization ID)

### 3. Set Up GitHub Secrets

In your GitHub repository:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add the following secrets:

   - `VERCEL_TOKEN`: Your Vercel API token
     - Get this from [Vercel Account Settings](https://vercel.com/account/tokens)
   
   - `VERCEL_ORG_ID`: Your Vercel Organization ID
     - This is your Team ID from Vercel dashboard
   
   - `VERCEL_PROJECT_ID`: Your Vercel Project ID
     - This is your Project ID from Vercel dashboard

### 4. How the Workflow Works

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:

1. **Trigger**: Run on every push to `main` or `master` branch
2. **Environment**: Use Ubuntu latest with Node.js 18
3. **Steps**:
   - Checkout code
   - Setup Node.js with npm caching
   - Install dependencies (`npm ci`)
   - Run linting (`npm run lint`)
   - Build the application (`npm run build`)
   - Deploy to Vercel using the `amondnet/vercel-action`

### 5. Manual Deployment

If you need to deploy manually:

```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

## Troubleshooting

### Common Issues

1. **Build Failures**: Check that all dependencies are properly installed and the build script works locally
2. **Vercel Token Issues**: Ensure your Vercel token has the correct permissions
3. **Project ID Issues**: Verify that the project ID matches your Vercel project

### Debugging

To debug deployment issues:

1. Check the GitHub Actions logs in your repository
2. Verify all secrets are correctly set
3. Test the build locally: `npm run build`
4. Check Vercel dashboard for deployment logs

## Environment Variables

If your application uses environment variables, make sure to:

1. Add them to your Vercel project settings
2. Add them to GitHub secrets if needed for the build process

## Custom Domains

To use a custom domain:

1. Configure it in your Vercel dashboard
2. Update your DNS settings as instructed by Vercel

## Monitoring

- Monitor deployments in your Vercel dashboard
- Check GitHub Actions for build status
- Set up notifications for deployment success/failure 