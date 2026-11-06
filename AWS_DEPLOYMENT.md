# AWS Amplify Hosting Deployment Guide

This document provides complete instructions for deploying the **Aryan Tiwari Personal Portfolio & PharmaQuest** application to **AWS Amplify Hosting**.

---

## 1. Prerequisites

1. An **AWS Account** with access to the AWS Management Console.
2. A **GitHub Account** (Aryan's username: `code002-18`) where this repository will be pushed.
3. Node.js 18+ and npm installed locally (if building locally prior to deployment).

---

## 2. Architecture Overview

- **App Type**: Single Page Application (SPA) built with React, Vite, and Tailwind CSS.
- **Output Directory**: `dist`
- **Build Tool**: Vite (`npm run build`)
- **Hosting Method**: AWS Amplify Managed Hosting (Static Global CDN distribution via Amazon CloudFront and S3).

---

## 3. Deployment Steps via AWS Amplify Console (Recommended)

### Step 1: Connect Code Repository
1. Log in to the [AWS Management Console](https://console.aws.amazon.com/).
2. Navigate to **AWS Amplify**.
3. Select **Host web app** and click **Get Started**.
4. Choose **GitHub** as the Git repository provider and authorize AWS Amplify to access your GitHub account (`code002-18`).
5. Select the repository (e.g. `aryan-tiwari-portfolio`) and the target branch (`main` or `master`).

### Step 2: Configure Build Settings
Amplify will detect `amplify.yml` at the project root. Verify that the build settings match:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

- **App Name**: `aryan-tiwari-portfolio`
- **Environment**: Production
- **Node.js Version**: Amplify default (v18 or v20). If prompted, configure Node 20 in **Build Settings > Package version overrides**.

### Step 3: Single Page App (SPA) Rewrites and Redirects
Because this is a Single Page Application with client-side anchor links, configure URL rewrites in the Amplify Console:
1. In Amplify Console, navigate to **Hosting > Rewrites and redirects**.
2. Ensure the default SPA rewrite rule exists:
   - **Source address**: `</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json)$)([^.]+$)/>`
   - **Target address**: `/index.html`
   - **Type**: `200 (Rewrite)`

### Step 4: Save and Deploy
1. Click **Save and deploy**.
2. AWS Amplify will execute:
   - Provisioning container
   - Cloning repository
   - Running `npm ci`
   - Running `npm run build`
   - Deploying static files to CloudFront edge distribution.
3. When the build finishes, Amplify provides a live default domain URL (e.g., `https://main.d123456abcdef.amplifyapp.com`).

---

## 4. Custom Domain Setup (Optional)

To connect a custom domain (such as `aryantiwari.dev` or a subdomain on `bpharmhub.xyz`):
1. In the Amplify Console, navigate to **Hosting > Custom domains**.
2. Click **Add domain**.
3. Enter your domain name and follow the DNS verification instructions (adding CNAME / ALIAS records at your DNS registrar).
4. AWS Amplify will automatically provision and renew a free SSL/TLS certificate via AWS Certificate Manager (ACM).

---

## 5. Local Verification Prior to Deployment

Verify the production build locally before pushing:

```bash
# Clean previous builds
npm run clean

# Build static assets
npm run build

# Preview production build locally
npm run preview
```

---

## 6. Continuous Deployment (CI/CD)

Any future commit pushed to your GitHub `main` branch will automatically trigger a new build and deployment in AWS Amplify with zero downtime.
