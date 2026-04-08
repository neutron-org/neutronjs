"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/neutron.cron.MsgAddSchedule", tx_js_1.MsgAddSchedule],
    ["/neutron.cron.MsgRemoveSchedule", tx_js_1.MsgRemoveSchedule],
    ["/neutron.cron.MsgUpdateParams", tx_js_1.MsgUpdateParams],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        addSchedule(value) {
            return {
                typeUrl: "/neutron.cron.MsgAddSchedule",
                value: tx_js_1.MsgAddSchedule.encode(value).finish(),
            };
        },
        removeSchedule(value) {
            return {
                typeUrl: "/neutron.cron.MsgRemoveSchedule",
                value: tx_js_1.MsgRemoveSchedule.encode(value).finish(),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.cron.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        addSchedule(value) {
            return {
                typeUrl: "/neutron.cron.MsgAddSchedule",
                value,
            };
        },
        removeSchedule(value) {
            return {
                typeUrl: "/neutron.cron.MsgRemoveSchedule",
                value,
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.cron.MsgUpdateParams",
                value,
            };
        },
    },
    toJSON: {
        addSchedule(value) {
            return {
                typeUrl: "/neutron.cron.MsgAddSchedule",
                value: tx_js_1.MsgAddSchedule.toJSON(value),
            };
        },
        removeSchedule(value) {
            return {
                typeUrl: "/neutron.cron.MsgRemoveSchedule",
                value: tx_js_1.MsgRemoveSchedule.toJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.cron.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.toJSON(value),
            };
        },
    },
    fromJSON: {
        addSchedule(value) {
            return {
                typeUrl: "/neutron.cron.MsgAddSchedule",
                value: tx_js_1.MsgAddSchedule.fromJSON(value),
            };
        },
        removeSchedule(value) {
            return {
                typeUrl: "/neutron.cron.MsgRemoveSchedule",
                value: tx_js_1.MsgRemoveSchedule.fromJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.cron.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromJSON(value),
            };
        },
    },
    fromPartial: {
        addSchedule(value) {
            return {
                typeUrl: "/neutron.cron.MsgAddSchedule",
                value: tx_js_1.MsgAddSchedule.fromPartial(value),
            };
        },
        removeSchedule(value) {
            return {
                typeUrl: "/neutron.cron.MsgRemoveSchedule",
                value: tx_js_1.MsgRemoveSchedule.fromPartial(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.cron.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map