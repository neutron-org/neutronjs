"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/neutron.interchainqueries.MsgRegisterInterchainQuery", tx_js_1.MsgRegisterInterchainQuery],
    ["/neutron.interchainqueries.MsgSubmitQueryResult", tx_js_1.MsgSubmitQueryResult],
    ["/neutron.interchainqueries.MsgRemoveInterchainQueryRequest", tx_js_1.MsgRemoveInterchainQueryRequest],
    ["/neutron.interchainqueries.MsgUpdateInterchainQueryRequest", tx_js_1.MsgUpdateInterchainQueryRequest],
    ["/neutron.interchainqueries.MsgUpdateParams", tx_js_1.MsgUpdateParams],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        registerInterchainQuery(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgRegisterInterchainQuery",
                value: tx_js_1.MsgRegisterInterchainQuery.encode(value).finish(),
            };
        },
        submitQueryResult(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgSubmitQueryResult",
                value: tx_js_1.MsgSubmitQueryResult.encode(value).finish(),
            };
        },
        removeInterchainQuery(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest",
                value: tx_js_1.MsgRemoveInterchainQueryRequest.encode(value).finish(),
            };
        },
        updateInterchainQuery(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest",
                value: tx_js_1.MsgUpdateInterchainQueryRequest.encode(value).finish(),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        registerInterchainQuery(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgRegisterInterchainQuery",
                value,
            };
        },
        submitQueryResult(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgSubmitQueryResult",
                value,
            };
        },
        removeInterchainQuery(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest",
                value,
            };
        },
        updateInterchainQuery(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest",
                value,
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgUpdateParams",
                value,
            };
        },
    },
    toJSON: {
        registerInterchainQuery(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgRegisterInterchainQuery",
                value: tx_js_1.MsgRegisterInterchainQuery.toJSON(value),
            };
        },
        submitQueryResult(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgSubmitQueryResult",
                value: tx_js_1.MsgSubmitQueryResult.toJSON(value),
            };
        },
        removeInterchainQuery(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest",
                value: tx_js_1.MsgRemoveInterchainQueryRequest.toJSON(value),
            };
        },
        updateInterchainQuery(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest",
                value: tx_js_1.MsgUpdateInterchainQueryRequest.toJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.toJSON(value),
            };
        },
    },
    fromJSON: {
        registerInterchainQuery(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgRegisterInterchainQuery",
                value: tx_js_1.MsgRegisterInterchainQuery.fromJSON(value),
            };
        },
        submitQueryResult(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgSubmitQueryResult",
                value: tx_js_1.MsgSubmitQueryResult.fromJSON(value),
            };
        },
        removeInterchainQuery(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest",
                value: tx_js_1.MsgRemoveInterchainQueryRequest.fromJSON(value),
            };
        },
        updateInterchainQuery(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest",
                value: tx_js_1.MsgUpdateInterchainQueryRequest.fromJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromJSON(value),
            };
        },
    },
    fromPartial: {
        registerInterchainQuery(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgRegisterInterchainQuery",
                value: tx_js_1.MsgRegisterInterchainQuery.fromPartial(value),
            };
        },
        submitQueryResult(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgSubmitQueryResult",
                value: tx_js_1.MsgSubmitQueryResult.fromPartial(value),
            };
        },
        removeInterchainQuery(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest",
                value: tx_js_1.MsgRemoveInterchainQueryRequest.fromPartial(value),
            };
        },
        updateInterchainQuery(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest",
                value: tx_js_1.MsgUpdateInterchainQueryRequest.fromPartial(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.interchainqueries.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map