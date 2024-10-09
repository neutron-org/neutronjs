#!/usr/bin/env bash

set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

DIRS=(capability cosmos cosmos_proto cosmwasm feemarket gaia gogoproto google ibc neutron osmosis sdk slinky tendermint)
FILES=(
  binary.d.ts
  binary.js
  binary.js.map
  helpers.d.ts
  helpers.js
  helpers.js.map
  json-safe.d.ts
  json-safe.js
  json-safe.js.map
  utf8.d.ts
  utf8.js
  utf8.js.map
  varint.d.ts
  varint.js
  varint.js.map
  querier_types.js
  querier_types.d.ts
)

for dir in "${DIRS[@]}"; do
  rm -rf "$dir"
done

for f in "${FILES[@]}"; do
  if [[ $f != *"json-safe"* ]]; then
    rm -rf "$f"
  fi
done

rm -rf ./build

for dir in admin-module block-sdk cosmos-sdk feemarket ibc-go neutron slinky wasmd ; do
  rm -rf "protos/$dir"
done
