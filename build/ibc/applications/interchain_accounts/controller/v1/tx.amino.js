"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
/* eslint-disable */
const channel_js_1 = require("../../../../core/channel/v1/channel.js");
const packet_js_1 = require("../../v1/packet.js");
const helpers_js_1 = require("../../../../../helpers.js");
exports.AminoConverter = {
    "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
        aminoType: "cosmos-sdk/MsgRegisterInterchainAccount",
        toAmino: ({ owner, connectionId, version, ordering, }) => {
            return {
                owner,
                connection_id: connectionId,
                version,
                ordering,
            };
        },
        fromAmino: ({ owner, connection_id, version, ordering, }) => {
            return {
                owner,
                connectionId: connection_id,
                version,
                ordering: ordering == null ? ordering : (0, channel_js_1.orderFromJSON)(ordering),
            };
        },
    },
    "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
        aminoType: "cosmos-sdk/MsgSendTx",
        toAmino: ({ owner, connectionId, packetData, relativeTimeout, }) => {
            return {
                owner,
                connection_id: connectionId,
                packet_data: {
                    type: packetData.type,
                    data: packetData.data,
                    memo: packetData.memo,
                },
                relative_timeout: (0, helpers_js_1.omitDefault)(relativeTimeout)?.toString?.(),
            };
        },
        fromAmino: ({ owner, connection_id, packet_data, relative_timeout, }) => {
            return {
                owner,
                connectionId: connection_id,
                packetData: packet_data == null
                    ? packet_data
                    : {
                        type: packet_data.type == null ? packet_data.type : (0, packet_js_1.typeFromJSON)(packet_data.type),
                        data: packet_data.data,
                        memo: packet_data.memo,
                    },
                relativeTimeout: relative_timeout == null ? relative_timeout : BigInt(relative_timeout),
            };
        },
    },
    "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams": {
        aminoType: "cosmos-sdk/MsgUpdateParams",
        toAmino: ({ signer, params }) => {
            return {
                signer,
                params: {
                    controller_enabled: (0, helpers_js_1.omitDefault)(params.controllerEnabled),
                },
            };
        },
        fromAmino: ({ signer, params }) => {
            return {
                signer,
                params: params == null
                    ? params
                    : {
                        controllerEnabled: params.controller_enabled,
                    },
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map