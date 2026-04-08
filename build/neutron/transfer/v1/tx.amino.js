"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../../helpers.js");
exports.AminoConverter = {
    "/neutron.transfer.MsgTransfer": {
        aminoType: "/neutron.transfer.MsgTransfer",
        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp, memo, fee, }) => {
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
                fee: {
                    recv_fee: fee.recvFee.map((el0) => ({
                        denom: el0.denom,
                        amount: el0.amount,
                    })),
                    ack_fee: fee.ackFee.map((el0) => ({
                        denom: el0.denom,
                        amount: el0.amount,
                    })),
                    timeout_fee: fee.timeoutFee.map((el0) => ({
                        denom: el0.denom,
                        amount: el0.amount,
                    })),
                },
            };
        },
        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp, memo, fee, }) => {
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
                fee: fee == null
                    ? fee
                    : {
                        recvFee: fee.recv_fee.map?.((el1) => ({
                            denom: el1.denom,
                            amount: el1.amount,
                        })),
                        ackFee: fee.ack_fee.map?.((el1) => ({
                            denom: el1.denom,
                            amount: el1.amount,
                        })),
                        timeoutFee: fee.timeout_fee.map?.((el1) => ({
                            denom: el1.denom,
                            amount: el1.amount,
                        })),
                    },
            };
        },
    },
    "/neutron.transfer.MsgUpdateParams": {
        aminoType: "/neutron.transfer.MsgUpdateParams",
        toAmino: ({ signer, params }) => {
            return {
                signer,
                params: {
                    send_enabled: (0, helpers_js_1.omitDefault)(params.sendEnabled),
                    receive_enabled: (0, helpers_js_1.omitDefault)(params.receiveEnabled),
                },
            };
        },
        fromAmino: ({ signer, params }) => {
            return {
                signer,
                params: params == null
                    ? params
                    : {
                        sendEnabled: params.send_enabled,
                        receiveEnabled: params.receive_enabled,
                    },
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map