#!/usr/bin/env bash
set -euo pipefail

echo "==> Building and starting containers"
docker compose up -d --build

echo "==> Done. App is live at https://emerald-buddha.website"
