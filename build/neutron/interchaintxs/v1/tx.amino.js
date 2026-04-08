"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
/* eslint-disable */
const channel_js_1 = require("../../../ibc/core/channel/v1/channel.js");
const helpers_js_1 = require("../../../helpers.js");
exports.AminoConverter = {
    "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount": {
        aminoType: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount",
        toAmino: ({ fromAddress, connectionId, interchainAccountId, registerFee, ordering, }) => {
            return {
                from_address: fromAddress,
                connection_id: connectionId,
                interchain_account_id: interchainAccountId,
                register_fee: registerFee.map((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
                ordering,
            };
        },
        fromAmino: ({ from_address, connection_id, interchain_account_id, register_fee, ordering, }) => {
            return {
                fromAddress: from_address,
                connectionId: connection_id,
                interchainAccountId: interchain_account_id,
                registerFee: register_fee.map?.((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
                ordering: ordering == null ? ordering : (0, channel_js_1.orderFromJSON)(ordering),
            };
        },
    },
    "/neutron.interchaintxs.v1.MsgSubmitTx": {
        aminoType: "/neutron.interchaintxs.v1.MsgSubmitTx",
        toAmino: ({ fromAddress, interchainAccountId, connectionId, msgs, memo, timeout, fee, }) => {
            return {
                from_address: fromAddress,
                interchain_account_id: interchainAccountId,
                connection_id: connectionId,
                msgs: msgs.map((el0) => ({
                    type_url: el0.typeUrl,
                    value: el0.value,
                })),
                memo,
                timeout: (0, helpers_js_1.omitDefault)(timeout)?.toString?.(),
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
        fromAmino: ({ from_address, interchain_account_id, connection_id, msgs, memo, timeout, fee, }) => {
            return {
                fromAddress: from_address,
                interchainAccountId: interchain_account_id,
                connectionId: connection_id,
                msgs: msgs.map?.((el0) => ({
                    typeUrl: el0.type_url,
                    value: el0.value,
                })),
                memo,
                timeout: timeout == null ? timeout : BigInt(timeout),
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
    "/neutron.interchaintxs.v1.MsgUpdateParams": {
        aminoType: "interchaintxs/MsgUpdateParams",
        toAmino: ({ authority, params }) => {
            return {
                authority,
                params: {
                    msg_submit_tx_max_messages: (0, helpers_js_1.omitDefault)(params.msgSubmitTxMaxMessages)?.toString?.(),
                    register_fee: params.registerFee.map((el0) => ({
                        denom: el0.denom,
                        amount: el0.amount,
                    })),
                },
            };
        },
        fromAmino: ({ authority, params }) => {
            return {
                authority,
                params: params == null
                    ? params
                    : {
                        msgSubmitTxMaxMessages: params.msg_submit_tx_max_messages == null
                            ? params.msg_submit_tx_max_messages
                            : BigInt(params.msg_submit_tx_max_messages),
                        registerFee: params.register_fee.map?.((el1) => ({
                            denom: el1.denom,
                            amount: el1.amount,
                        })),
                    },
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map