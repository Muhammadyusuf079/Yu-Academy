#!/bin/bash
set -e

echo "🚀 Building Next.js project..."
npm run build

echo "📦 Staging and committing changes..."
MSG="${1:-update: Automatic project update}"
git add -A
git commit -m "$MSG" || echo "No changes to commit"

echo "🌐 Pushing to GitHub (origin main)..."
git push origin main

echo "✅ Successfully deployed to GitHub! Vercel is auto-deploying to production."
