#!/usr/bin/env sh

set -e
npm run build
cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main


cd -