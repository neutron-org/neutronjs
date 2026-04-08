"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../../helpers.js");
exports.AminoConverter = {
    "/cosmos.counter.v1.MsgIncreaseCounter": {
        aminoType: "cosmos-sdk/increase_counter",
        toAmino: ({ signer, count }) => {
            return {
                signer,
                count: (0, helpers_js_1.omitDefault)(count)?.toString?.(),
            };
        },
        fromAmino: ({ signer, count }) => {
            return {
                signer,
                count: count == null ? count : BigInt(count),
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map