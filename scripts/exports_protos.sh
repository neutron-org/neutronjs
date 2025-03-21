#!/usr/bin/env bash

set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

for dir in admin-module cosmos-sdk ibc-go wasmd ; do
  rm -rf "protos/$dir"
  mkdir -p "protos/$dir"
  echo "Autogenerated folder, see export_protos.sh" > "protos/$dir/README.md"

  buf export "protos/$dir-src/" --output "protos/$dir"
done

for dir in block-sdk feemarket slinky interchain-security; do
  rm -rf "protos/$dir"
  mkdir -p "protos/$dir"
  echo "Autogenerated folder, see export_protos.sh" > "protos/$dir/README.md"

  buf export "protos/$dir-src/proto" --output "protos/$dir"
done

for dir in neutron ; do
  rm -rf "protos/$dir"
  mkdir -p "protos/$dir"
  echo "Autogenerated folder, see export_protos.sh" > "protos/$dir/README.md"

  buf export "protos/$dir-src/proto" --output "protos/$dir"
  buf export "protos/$dir-src/third_party/proto" --output "protos/$dir"
done
