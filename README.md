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

NOTE:
for now because slinky/oracle/v1/query.proto has a proto syntax error types have some syntax that codegen cannot recognize,
flow is like this:
- yarn run codegen;
- remove precodegen command from package.json;
- remove failing `option (google.api.http)` from protos/neutron/slinky/oracle/v1/query.proto;
- yarn run codegen.
