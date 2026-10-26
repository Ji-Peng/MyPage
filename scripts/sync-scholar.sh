#!/usr/bin/env bash
# Weekly local Google Scholar sync (run from cron; Scholar blocks GitHub runner IPs).
# Fetches metrics, and if anything other than the timestamp changed, commits
# src/data/scholar.json alone and pushes; the push triggers the deploy workflow.
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"
DATA=src/data/scholar.json

echo "==> $(date -Is) Scholar sync"
git pull --rebase --autostash -q origin main

before="$(jq -S 'del(.updatedAt)' "$DATA")"
python3 scripts/fetch_scholar.py
after="$(jq -S 'del(.updatedAt)' "$DATA")"

if [ "$before" = "$after" ]; then
  echo "No metric changes; discarding timestamp-only update."
  git checkout -- "$DATA"
  exit 0
fi

git add -- "$DATA"
git commit -q -m "chore(scholar): update Google Scholar citation count" -- "$DATA"
git push -q origin main
echo "Pushed: citations=$(jq .totalCitations "$DATA") h=$(jq .hIndex "$DATA") i10=$(jq .i10Index "$DATA")"
