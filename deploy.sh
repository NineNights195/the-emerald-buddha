#!/usr/bin/env bash
set -euo pipefail

IMAGE="the-emerald-buddha"
CONTAINER="the-emerald-buddha"
PORT=8080

echo "==> Building Docker image: $IMAGE"
docker build -t "$IMAGE" .

echo "==> Stopping existing container (if any)"
docker rm -f "$CONTAINER" 2>/dev/null || true

echo "==> Starting container: $CONTAINER on port $PORT"
docker run -d \
  --name "$CONTAINER" \
  --restart unless-stopped \
  -p "$PORT:8080" \
  "$IMAGE"

echo "==> Done. App is running at http://localhost:$PORT"
