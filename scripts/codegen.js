#!/usr/bin/env node

const { join } = require("path");
const telescope = require("@cosmology/telescope").default;

const outPath = join(__dirname, "/../src");

telescope({
  protoDirs: [
    "protos/admin-module",
    "protos/block-sdk",
    "protos/cosmos-sdk",
    "protos/feemarket",
    "protos/ibc-go",
    "protos/neutron",
    "protos/slinky",
    "protos/wasmd",
  ],
  outPath: outPath,
  options: {
    logLevel: 0,
    useSDKTypes: false,
    tsDisable: {
      files: ["slinky/oracle/v1/query.ts"],
    },
    eslintDisable: {
      disableAll: true,
    },
    bundle: {
      enabled: false,
    },
    interfaces: {
      enabled: false,
    },
    prototypes: {
      includePackageVar: true,
      strictNullCheckForPrototypeMethods: true,
      paginationDefaultFromPartial: true,
      addTypeUrlToObjects: true,
      // Those are causing trouble in CosmJS testing (https://github.com/cosmology-tech/telescope/issues/489)
      addTypeUrlToDecoders: false,
      excluded: {
        protos: [
          "neutron/dex/genesis.proto",
          "neutron/transfer/v1/query.proto",
          "slinky/abci/v1/vote_extensions.proto",
          "slinky/marketmap/v1/tx.proto",
          "slinky/oracle/v1/query.proto",
        ],
        packages: ["google.api"],
      },
      methods: {
        // There are users who need those functions. CosmJS does not need them directly.
        // See https://github.com/cosmos/cosmjs/pull/1329
        fromJSON: true,
        toJSON: true,
        fromAmino: false,
        toAmino: false,
        fromProto: false,
        toProto: false,
      },
      typingsFormat: {
        useDeepPartial: true,
        useExact: true,
        timestamp: "timestamp",
        duration: "duration",
        customTypes: {
          useCosmosSDKDec: true,
        },
        num64: "bigint",
      },
    },
    lcdClients: {
      enabled: false,
    },
    rpcClients: {
      enabled: true,
      extensions: true,
      camelCase: true,
      useConnectComet: true,
    },
    aminoEncoding: {
      enabled: false,
      useLegacyInlineEncoding: true,
    },
  },
}).then(
  () => {
    console.log("✨ All Done!");
  },
  (e) => {
    console.error(e);
    process.exit(1);
  },
);
