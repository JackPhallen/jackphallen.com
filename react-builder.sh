#!/bin/bash

# arg1 - git repository to clone
# arg2 - destination directory for build

# Generate temporary directory to clone repo to
REPO_PATH="${RANDOM}-repo-${RANDOM}"
BUILD_PATH="build"

mkdir $REPO_PATH

git clone $1 $REPO_PATH

# build
(cd $REPO_PATH; yarn install;  yarn build)

# move output to destination
mv -f "${REPO_PATH}/${BUILD_PATH}" $2

# remove cloned repository
rm -rf $REPO_PATH
