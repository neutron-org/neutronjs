"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../../helpers.js");
exports.AminoConverter = {
    "/cosmos.benchmark.v1.MsgLoadTest": {
        aminoType: "cosmos-sdk/tools/benchmark/v1/MsgLoadTest",
        toAmino: ({ caller, ops }) => {
            return {
                caller,
                ops: ops.map((el0) => ({
                    seed: (0, helpers_js_1.omitDefault)(el0.seed)?.toString?.(),
                    actor: el0.actor,
                    key_length: (0, helpers_js_1.omitDefault)(el0.keyLength)?.toString?.(),
                    value_length: (0, helpers_js_1.omitDefault)(el0.valueLength)?.toString?.(),
                    iterations: (0, helpers_js_1.omitDefault)(el0.iterations),
                    delete: (0, helpers_js_1.omitDefault)(el0.delete),
                    exists: (0, helpers_js_1.omitDefault)(el0.exists),
                })),
            };
        },
        fromAmino: ({ caller, ops }) => {
            return {
                caller,
                ops: ops.map?.((el0) => ({
                    seed: el0.seed == null ? el0.seed : BigInt(el0.seed),
                    actor: el0.actor,
                    keyLength: el0.key_length == null ? el0.key_length : BigInt(el0.key_length),
                    valueLength: el0.value_length == null ? el0.value_length : BigInt(el0.value_length),
                    iterations: el0.iterations,
                    delete: el0.delete,
                    exists: el0.exists,
                })),
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map