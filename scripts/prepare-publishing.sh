#!/usr/bin/env bash

set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

readonly BUILD_DIR="./build"
readonly ROOT_FILES=(
  LICENSE
  README.md
  package.json
)

if [[ ! -d "$BUILD_DIR" ]]; then
  echo "Build directory not found: $BUILD_DIR. Run 'npm run build' first."
  exit 1
fi

for file in "${ROOT_FILES[@]}"; do
  if [[ ! -f "./$file" ]]; then
    echo "Required file not found: ./$file"
    exit 1
  fi

  cp "./$file" "$BUILD_DIR/"
done

# Remove root-only fields from publish manifest inside ./build.
# shellcheck disable=SC2016
node -e '
const fs = require("node:fs");
const pkgPath = "./build/package.json";
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
delete pkg.scripts;
delete pkg.devDependencies;
delete pkg.packageManager;
fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);
'
