"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../../helpers.js");
exports.AminoConverter = {
    "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
        aminoType: "osmosis/tokenfactory/create-denom",
        toAmino: ({ sender, subdenom }) => {
            return {
                sender,
                subdenom,
            };
        },
        fromAmino: ({ sender, subdenom }) => {
            return {
                sender,
                subdenom,
            };
        },
    },
    "/osmosis.tokenfactory.v1beta1.MsgMint": {
        aminoType: "osmosis/tokenfactory/mint",
        toAmino: ({ sender, amount, mintToAddress }) => {
            return {
                sender,
                amount: {
                    denom: amount.denom,
                    amount: amount.amount,
                },
                mintToAddress,
            };
        },
        fromAmino: ({ sender, amount, mintToAddress }) => {
            return {
                sender,
                amount: amount == null
                    ? amount
                    : {
                        denom: amount.denom,
                        amount: amount.amount,
                    },
                mintToAddress,
            };
        },
    },
    "/osmosis.tokenfactory.v1beta1.MsgBurn": {
        aminoType: "osmosis/tokenfactory/burn",
        toAmino: ({ sender, amount, burnFromAddress }) => {
            return {
                sender,
                amount: {
                    denom: amount.denom,
                    amount: amount.amount,
                },
                burnFromAddress,
            };
        },
        fromAmino: ({ sender, amount, burnFromAddress }) => {
            return {
                sender,
                amount: amount == null
                    ? amount
                    : {
                        denom: amount.denom,
                        amount: amount.amount,
                    },
                burnFromAddress,
            };
        },
    },
    "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
        aminoType: "osmosis/tokenfactory/change-admin",
        toAmino: ({ sender, denom, newAdmin }) => {
            return {
                sender,
                denom,
                new_admin: newAdmin,
            };
        },
        fromAmino: ({ sender, denom, new_admin }) => {
            return {
                sender,
                denom,
                newAdmin: new_admin,
            };
        },
    },
    "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
        aminoType: "osmosis/tokenfactory/set-denom-metadata",
        toAmino: ({ sender, metadata }) => {
            return {
                sender,
                metadata: {
                    description: metadata.description,
                    denom_units: metadata.denomUnits.map((el0) => ({
                        denom: el0.denom,
                        exponent: (0, helpers_js_1.omitDefault)(el0.exponent),
                        aliases: el0.aliases,
                    })),
                    base: metadata.base,
                    display: metadata.display,
                    name: metadata.name,
                    symbol: metadata.symbol,
                    uri: metadata.uri,
                    uri_hash: metadata.uriHash,
                },
            };
        },
        fromAmino: ({ sender, metadata }) => {
            return {
                sender,
                metadata: metadata == null
                    ? metadata
                    : {
                        description: metadata.description,
                        denomUnits: metadata.denom_units.map?.((el1) => ({
                            denom: el1.denom,
                            exponent: el1.exponent,
                            aliases: el1.aliases,
                        })),
                        base: metadata.base,
                        display: metadata.display,
                        name: metadata.name,
                        symbol: metadata.symbol,
                        uri: metadata.uri,
                        uriHash: metadata.uri_hash,
                    },
            };
        },
    },
    "/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook": {
        aminoType: "osmosis/tokenfactory/set-beforesend-hook",
        toAmino: ({ sender, denom, contractAddr, }) => {
            return {
                sender,
                denom,
                contract_addr: contractAddr,
            };
        },
        fromAmino: ({ sender, denom, contract_addr, }) => {
            return {
                sender,
                denom,
                contractAddr: contract_addr,
            };
        },
    },
    "/osmosis.tokenfactory.v1beta1.MsgForceTransfer": {
        aminoType: "osmosis/tokenfactory/force-transfer",
        toAmino: ({ sender, amount, transferFromAddress, transferToAddress, }) => {
            return {
                sender,
                amount: {
                    denom: amount.denom,
                    amount: amount.amount,
                },
                transferFromAddress,
                transferToAddress,
            };
        },
        fromAmino: ({ sender, amount, transferFromAddress, transferToAddress, }) => {
            return {
                sender,
                amount: amount == null
                    ? amount
                    : {
                        denom: amount.denom,
                        amount: amount.amount,
                    },
                transferFromAddress,
                transferToAddress,
            };
        },
    },
    "/osmosis.tokenfactory.v1beta1.MsgUpdateParams": {
        aminoType: "osmosis/tokenfactory/MsgUpdateParams",
        toAmino: ({ authority, params }) => {
            return {
                authority,
                params: {
                    send_enabled: params.sendEnabled.map((el0) => ({
                        denom: el0.denom,
                        enabled: (0, helpers_js_1.omitDefault)(el0.enabled),
                    })),
                    default_send_enabled: (0, helpers_js_1.omitDefault)(params.defaultSendEnabled),
                },
            };
        },
        fromAmino: ({ authority, params }) => {
            return {
                authority,
                params: params == null
                    ? params
                    : {
                        sendEnabled: params.send_enabled.map?.((el1) => ({
                            denom: el1.denom,
                            enabled: el1.enabled,
                        })),
                        defaultSendEnabled: params.default_send_enabled,
                    },
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map