#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/ankitbhatia8993/ankitbhatia8993.github.io.git master
>>>>>>> dea1f40603bd8c2fd2deb4cd684cf871afc501c3


cd -
