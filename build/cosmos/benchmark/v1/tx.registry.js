"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/cosmos.benchmark.v1.MsgLoadTest", tx_js_1.MsgLoadTest],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        loadTest(value) {
            return {
                typeUrl: "/cosmos.benchmark.v1.MsgLoadTest",
                value: tx_js_1.MsgLoadTest.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        loadTest(value) {
            return {
                typeUrl: "/cosmos.benchmark.v1.MsgLoadTest",
                value,
            };
        },
    },
    toJSON: {
        loadTest(value) {
            return {
                typeUrl: "/cosmos.benchmark.v1.MsgLoadTest",
                value: tx_js_1.MsgLoadTest.toJSON(value),
            };
        },
    },
    fromJSON: {
        loadTest(value) {
            return {
                typeUrl: "/cosmos.benchmark.v1.MsgLoadTest",
                value: tx_js_1.MsgLoadTest.fromJSON(value),
            };
        },
    },
    fromPartial: {
        loadTest(value) {
            return {
                typeUrl: "/cosmos.benchmark.v1.MsgLoadTest",
                value: tx_js_1.MsgLoadTest.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map