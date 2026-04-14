# neutronjs

Cosmjs types for users of the Neutron chain.

<https://www.neutron.org/>

Version of this package is synced with the Neutron chain version.

[![npm version](https://img.shields.io/npm/v/@neutron-org/neutronjs.svg)](https://www.npmjs.com/package/@neutron-org/neutronjs)

## Maintenance

This section is for maintainers of this repo, not users.

### Getting started

```sh
# Pull external code
git submodule update --remote
git submodule update --init --recursive

# Install dependencies
npm install

# Set specified versions for submodules
# Submodules versions (commits or tags) should be set in the ./scripts/set-versions.sh script for the corresponding *_REV constants
npm run set-versions
```

Generate updated protos directories in protos/*-src folders:
npm run precodegen

### Rebuilding types

```sh
# Generate .ts files into ./src
npm run codegen

# Build .js/.d.ts files
npm run build
```

### Publishing

Before publishing, make sure package and dependency versions are aligned with [Neutron core](https://github.com/neutron-org/neutron):

- `package.json` version must match the Neutron core version exactly. In other words, `@neutron-org/neutronjs@X.Y.Z` must correspond to Neutron core `vX.Y.Z` release.
- All `*_REV` values in `scripts/set-versions.sh` must match the versions pinned in [Neutron core go.mod](https://github.com/neutron-org/neutron/blob/main/go.mod).

Publish a stable release as `latest`:

```sh
# package.json version: X.Y.Z
npm publish ./build --access public --tag latest
```

Publish a release candidate as `next`:

```sh
# package.json version: X.Y.Z-rc.N
npm publish ./build --access public --tag next
```

You can safely check the release content using

```sh
npm pack --dry-run ./build 2>&1 | less
```