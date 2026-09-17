#!/usr/bin/env bash
set -e

# Always execute from the repository root
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

echo "==> 1/5 Syncing Google Scholar data..."
python3 scripts/fetch_scholar.py || {
  echo "⚠️ Warning: Failed to fetch latest Google Scholar data. Continuing deployment with cached data..."
}

echo "==> 2/5 Building Astro static site..."
npm run build

echo "==> 3/5 Syncing build output into public/ (Ji-Peng.github.io)..."
rsync -av --delete --exclude='.git' --exclude='.gitignore' dist/ public/

echo "==> 4/5 Committing and pushing public repository (Ji-Peng.github.io)..."
cd "$ROOT_DIR/public"
git add -A
if ! git diff --cached --quiet; then
  git commit -m "update"
  echo "Committed changes in public with message 'update'."
else
  echo "No changes to commit in public."
fi
git push origin main

echo "==> 5/5 Committing and pushing current repository (MyPage)..."
cd "$ROOT_DIR"
git add -A
if ! git diff --cached --quiet; then
  git commit -m "update"
  echo "Committed changes in MyPage with message 'update'."
else
  echo "No changes to commit in MyPage."
fi
git push origin main

echo "==> All deployments completed successfully! 🚀"
