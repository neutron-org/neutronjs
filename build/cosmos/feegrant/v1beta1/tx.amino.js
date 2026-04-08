"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
        aminoType: "cosmos-sdk/MsgGrantAllowance",
        toAmino: ({ granter, grantee, allowance }) => {
            return {
                granter,
                grantee,
                allowance: {
                    type_url: allowance.typeUrl,
                    value: allowance.value,
                },
            };
        },
        fromAmino: ({ granter, grantee, allowance }) => {
            return {
                granter,
                grantee,
                allowance: allowance == null
                    ? allowance
                    : {
                        typeUrl: allowance.type_url,
                        value: allowance.value,
                    },
            };
        },
    },
    "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
        aminoType: "cosmos-sdk/MsgRevokeAllowance",
        toAmino: ({ granter, grantee }) => {
            return {
                granter,
                grantee,
            };
        },
        fromAmino: ({ granter, grantee }) => {
            return {
                granter,
                grantee,
            };
        },
    },
    "/cosmos.feegrant.v1beta1.MsgPruneAllowances": {
        aminoType: "cosmos-sdk/MsgPruneAllowances",
        toAmino: ({ pruner }) => {
            return {
                pruner,
            };
        },
        fromAmino: ({ pruner }) => {
            return {
                pruner,
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map