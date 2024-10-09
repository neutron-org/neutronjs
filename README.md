# neutronjs

Cosmjs types for users of Neutron chain.

<https://www.neutron.org/>

Version of this package is synced with Neutron chain version.

[![npm version](https://img.shields.io/npm/v/@neutron-org/neutronjs.svg)](https://www.npmjs.com/package/@neutron-org/neutronjs)

## Maintenance

This section is for maintainers of this repo, not users.

### Getting started

```sh
# Pull external code
git submodule update --init --recursive

# Install dependencies
npm install

# Set specified versions for submodules
# Submodules versions (commits or tags) should be set in the ./scripts/set-versions.sh script for the corresponding *_REV constants
npm run set-versions
```

### Rebuilding types

```sh
# Generate .ts files into ./src
npm run codegen

# Build .js/.d.ts files
npm run build
```
