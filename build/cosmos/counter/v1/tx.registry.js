"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/cosmos.counter.v1.MsgIncreaseCounter", tx_js_1.MsgIncreaseCounter],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        increaseCount(value) {
            return {
                typeUrl: "/cosmos.counter.v1.MsgIncreaseCounter",
                value: tx_js_1.MsgIncreaseCounter.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        increaseCount(value) {
            return {
                typeUrl: "/cosmos.counter.v1.MsgIncreaseCounter",
                value,
            };
        },
    },
    toJSON: {
        increaseCount(value) {
            return {
                typeUrl: "/cosmos.counter.v1.MsgIncreaseCounter",
                value: tx_js_1.MsgIncreaseCounter.toJSON(value),
            };
        },
    },
    fromJSON: {
        increaseCount(value) {
            return {
                typeUrl: "/cosmos.counter.v1.MsgIncreaseCounter",
                value: tx_js_1.MsgIncreaseCounter.fromJSON(value),
            };
        },
    },
    fromPartial: {
        increaseCount(value) {
            return {
                typeUrl: "/cosmos.counter.v1.MsgIncreaseCounter",
                value: tx_js_1.MsgIncreaseCounter.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map