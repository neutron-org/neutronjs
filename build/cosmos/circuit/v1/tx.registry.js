"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker", tx_js_1.MsgAuthorizeCircuitBreaker],
    ["/cosmos.circuit.v1.MsgTripCircuitBreaker", tx_js_1.MsgTripCircuitBreaker],
    ["/cosmos.circuit.v1.MsgResetCircuitBreaker", tx_js_1.MsgResetCircuitBreaker],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        authorizeCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
                value: tx_js_1.MsgAuthorizeCircuitBreaker.encode(value).finish(),
            };
        },
        tripCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
                value: tx_js_1.MsgTripCircuitBreaker.encode(value).finish(),
            };
        },
        resetCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
                value: tx_js_1.MsgResetCircuitBreaker.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        authorizeCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
                value,
            };
        },
        tripCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
                value,
            };
        },
        resetCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
                value,
            };
        },
    },
    toJSON: {
        authorizeCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
                value: tx_js_1.MsgAuthorizeCircuitBreaker.toJSON(value),
            };
        },
        tripCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
                value: tx_js_1.MsgTripCircuitBreaker.toJSON(value),
            };
        },
        resetCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
                value: tx_js_1.MsgResetCircuitBreaker.toJSON(value),
            };
        },
    },
    fromJSON: {
        authorizeCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
                value: tx_js_1.MsgAuthorizeCircuitBreaker.fromJSON(value),
            };
        },
        tripCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
                value: tx_js_1.MsgTripCircuitBreaker.fromJSON(value),
            };
        },
        resetCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
                value: tx_js_1.MsgResetCircuitBreaker.fromJSON(value),
            };
        },
    },
    fromPartial: {
        authorizeCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
                value: tx_js_1.MsgAuthorizeCircuitBreaker.fromPartial(value),
            };
        },
        tripCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
                value: tx_js_1.MsgTripCircuitBreaker.fromPartial(value),
            };
        },
        resetCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
                value: tx_js_1.MsgResetCircuitBreaker.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map