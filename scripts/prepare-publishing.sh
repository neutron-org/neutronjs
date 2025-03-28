#!/usr/bin/env bash

set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

DIRS=(capability cosmos cosmos_proto cosmwasm feemarket gaia gogoproto google ibc neutron osmosis sdk slinky tendermint interchain-security)
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
  cp -R "./build/$dir" ./
done

for f in "${FILES[@]}"; do
  rm -rf "$f"
  cp "./build/$f" ./
done
