#!/usr/bin/env sh
set -eu

if [ ! -d "dist" ]; then
  echo "dist/ not found. Run npm run build before deploying."
  exit 1
fi

remote_url="$(git remote get-url origin)"
tmp_dir="$(mktemp -d)"

cleanup() {
  rm -rf "$tmp_dir"
}
trap cleanup EXIT

cp -R dist/. "$tmp_dir"/
touch "$tmp_dir/.nojekyll"

git -C "$tmp_dir" init -q
git -C "$tmp_dir" checkout -b gh-pages >/dev/null 2>&1
git -C "$tmp_dir" add -A
git -C "$tmp_dir" -c user.name="codex" -c user.email="codex@local" commit -m "Deploy GitHub Pages" >/dev/null
git -C "$tmp_dir" remote add origin "$remote_url"
git -C "$tmp_dir" push --force origin gh-pages

echo "Published dist/ to gh-pages."
