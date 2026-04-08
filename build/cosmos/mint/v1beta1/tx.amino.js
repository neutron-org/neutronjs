"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../../helpers.js");
exports.AminoConverter = {
    "/cosmos.mint.v1beta1.MsgUpdateParams": {
        aminoType: "cosmos-sdk/x/mint/MsgUpdateParams",
        toAmino: ({ authority, params }) => {
            return {
                authority,
                params: {
                    mint_denom: params.mintDenom,
                    inflation_rate_change: params.inflationRateChange,
                    inflation_max: params.inflationMax,
                    inflation_min: params.inflationMin,
                    goal_bonded: params.goalBonded,
                    blocks_per_year: (0, helpers_js_1.omitDefault)(params.blocksPerYear)?.toString?.(),
                },
            };
        },
        fromAmino: ({ authority, params }) => {
            return {
                authority,
                params: params == null
                    ? params
                    : {
                        mintDenom: params.mint_denom,
                        inflationRateChange: params.inflation_rate_change,
                        inflationMax: params.inflation_max,
                        inflationMin: params.inflation_min,
                        goalBonded: params.goal_bonded,
                        blocksPerYear: params.blocks_per_year == null ? params.blocks_per_year : BigInt(params.blocks_per_year),
                    },
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map