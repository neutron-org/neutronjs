"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../../../helpers.js");
exports.AminoConverter = {
    "/ibc.applications.transfer.v1.MsgTransfer": {
        aminoType: "cosmos-sdk/MsgTransfer",
        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp, memo, encoding, }) => {
            return {
                source_port: sourcePort,
                source_channel: sourceChannel,
                token: {
                    denom: token.denom,
                    amount: token.amount,
                },
                sender,
                receiver,
                timeout_height: timeoutHeight
                    ? {
                        revision_height: (0, helpers_js_1.omitDefault)(timeoutHeight.revisionHeight)?.toString(),
                        revision_number: (0, helpers_js_1.omitDefault)(timeoutHeight.revisionNumber)?.toString(),
                    }
                    : {},
                timeout_timestamp: (0, helpers_js_1.omitDefault)(timeoutTimestamp)?.toString?.(),
                memo,
                encoding,
            };
        },
        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp, memo, encoding, }) => {
            return {
                sourcePort: source_port,
                sourceChannel: source_channel,
                token: token == null
                    ? token
                    : {
                        denom: token.denom,
                        amount: token.amount,
                    },
                sender,
                receiver,
                timeoutHeight: timeout_height
                    ? {
                        revisionHeight: BigInt(timeout_height.revision_height || "0"),
                        revisionNumber: BigInt(timeout_height.revision_number || "0"),
                    }
                    : undefined,
                timeoutTimestamp: timeout_timestamp == null ? timeout_timestamp : BigInt(timeout_timestamp),
                memo,
                encoding,
            };
        },
    },
    "/ibc.applications.transfer.v1.MsgUpdateParams": {
        aminoType: "cosmos-sdk/MsgUpdateParams",
        toAmino: ({ signer, params }) => {
            return {
                signer,
                params: {
                    allowed_clients: params.allowedClients,
                },
            };
        },
        fromAmino: ({ signer, params }) => {
            return {
                signer,
                params: params == null
                    ? params
                    : {
                        allowedClients: params.allowed_clients,
                    },
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map