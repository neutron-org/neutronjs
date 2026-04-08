"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/ibc.core.channel.v2.MsgSendPacket", tx_js_1.MsgSendPacket],
    ["/ibc.core.channel.v2.MsgRecvPacket", tx_js_1.MsgRecvPacket],
    ["/ibc.core.channel.v2.MsgTimeout", tx_js_1.MsgTimeout],
    ["/ibc.core.channel.v2.MsgAcknowledgement", tx_js_1.MsgAcknowledgement],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        sendPacket(value) {
            return {
                typeUrl: "/ibc.core.channel.v2.MsgSendPacket",
                value: tx_js_1.MsgSendPacket.encode(value).finish(),
            };
        },
        recvPacket(value) {
            return {
                typeUrl: "/ibc.core.channel.v2.MsgRecvPacket",
                value: tx_js_1.MsgRecvPacket.encode(value).finish(),
            };
        },
        timeout(value) {
            return {
                typeUrl: "/ibc.core.channel.v2.MsgTimeout",
                value: tx_js_1.MsgTimeout.encode(value).finish(),
            };
        },
        acknowledgement(value) {
            return {
                typeUrl: "/ibc.core.channel.v2.MsgAcknowledgement",
                value: tx_js_1.MsgAcknowledgement.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        sendPacket(value) {
            return {
                typeUrl: "/ibc.core.channel.v2.MsgSendPacket",
                value,
            };
        },
        recvPacket(value) {
            return {
                typeUrl: "/ibc.core.channel.v2.MsgRecvPacket",
                value,
            };
        },
        timeout(value) {
            return {
                typeUrl: "/ibc.core.channel.v2.MsgTimeout",
                value,
            };
        },
        acknowledgement(value) {
            return {
                typeUrl: "/ibc.core.channel.v2.MsgAcknowledgement",
                value,
            };
        },
    },
    toJSON: {
        sendPacket(value) {
            return {
                typeUrl: "/ibc.core.channel.v2.MsgSendPacket",
                value: tx_js_1.MsgSendPacket.toJSON(value),
            };
        },
        recvPacket(value) {
            return {
                typeUrl: "/ibc.core.channel.v2.MsgRecvPacket",
                value: tx_js_1.MsgRecvPacket.toJSON(value),
            };
        },
        timeout(value) {
            return {
                typeUrl: "/ibc.core.channel.v2.MsgTimeout",
                value: tx_js_1.MsgTimeout.toJSON(value),
            };
        },
        acknowledgement(value) {
            return {
                typeUrl: "/ibc.core.channel.v2.MsgAcknowledgement",
                value: tx_js_1.MsgAcknowledgement.toJSON(value),
            };
        },
    },
    fromJSON: {
        sendPacket(value) {
            return {
                typeUrl: "/ibc.core.channel.v2.MsgSendPacket",
                value: tx_js_1.MsgSendPacket.fromJSON(value),
            };
        },
        recvPacket(value) {
            return {
                typeUrl: "/ibc.core.channel.v2.MsgRecvPacket",
                value: tx_js_1.MsgRecvPacket.fromJSON(value),
            };
        },
        timeout(value) {
            return {
                typeUrl: "/ibc.core.channel.v2.MsgTimeout",
                value: tx_js_1.MsgTimeout.fromJSON(value),
            };
        },
        acknowledgement(value) {
            return {
                typeUrl: "/ibc.core.channel.v2.MsgAcknowledgement",
                value: tx_js_1.MsgAcknowledgement.fromJSON(value),
            };
        },
    },
    fromPartial: {
        sendPacket(value) {
            return {
                typeUrl: "/ibc.core.channel.v2.MsgSendPacket",
                value: tx_js_1.MsgSendPacket.fromPartial(value),
            };
        },
        recvPacket(value) {
            return {
                typeUrl: "/ibc.core.channel.v2.MsgRecvPacket",
                value: tx_js_1.MsgRecvPacket.fromPartial(value),
            };
        },
        timeout(value) {
            return {
                typeUrl: "/ibc.core.channel.v2.MsgTimeout",
                value: tx_js_1.MsgTimeout.fromPartial(value),
            };
        },
        acknowledgement(value) {
            return {
                typeUrl: "/ibc.core.channel.v2.MsgAcknowledgement",
                value: tx_js_1.MsgAcknowledgement.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map