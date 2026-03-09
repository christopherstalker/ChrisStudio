# Deployment (Vercel)

This project is optimized for deployment on Vercel.

## 1) Connect Repository

- Push your code to GitHub.
- In Vercel, select **Add New Project** and import this repository.

## 2) Configure Environment Variables

- Add required values from `.env.example` in the Vercel project settings.
- Keep production secrets only in Vercel (never commit secrets).

## 3) Build Settings

Vercel will auto-detect Next.js settings:

- Build command: `npm run build`
- Output: managed by Next.js

## 4) Deploy

- Trigger deploy from the dashboard or by pushing to the configured branch.
- Validate the deployed site and check logs if issues occur.

## 5) Ongoing Updates

- Use preview deployments for QA.
- Merge to the production branch when changes are approved.
