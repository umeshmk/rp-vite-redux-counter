#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo "Deploying....."
echo 'https://umeshmk.github.io/rp-vite-redux-counter/' > CNAME

git init
git add -A
git commit -m 'deploy'
git push -f origin  master:gh-pages

cd -