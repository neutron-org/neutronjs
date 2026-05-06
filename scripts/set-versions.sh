#!/usr/bin/env bash

set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

readonly BLOCK_SDK_DIR="block-sdk-src"
readonly COSMOS_SDK_DIR="cosmos-sdk-src"
readonly FEEMARKET_DIR="feemarket-src"
readonly IBC_GO_DIR="ibc-go-src"
readonly NEUTRON_DIR="neutron-src"
readonly SLINKY_DIR="slinky-src"
readonly WASMD_DIR="wasmd-src"

readonly BLOCK_SDK_REV="v2.1.5"
readonly COSMOS_SDK_REV="v0.53.4-neutron"
readonly FEEMARKET_REV="v1.2.0"
readonly IBC_GO_REV="v10.5.0"
readonly NEUTRON_REV="feat/dao-migration"
readonly SLINKY_REV="v1.3.1"
readonly WASMD_REV="v0.61.10-neutron"

checkout_version () {
   git -C "protos/$1" checkout "$2"
}

checkout_version $BLOCK_SDK_DIR $BLOCK_SDK_REV
checkout_version $COSMOS_SDK_DIR $COSMOS_SDK_REV
checkout_version $FEEMARKET_DIR $FEEMARKET_REV
checkout_version $IBC_GO_DIR $IBC_GO_REV
checkout_version $NEUTRON_DIR $NEUTRON_REV
checkout_version $SLINKY_DIR $SLINKY_REV
checkout_version $WASMD_DIR $WASMD_REV
