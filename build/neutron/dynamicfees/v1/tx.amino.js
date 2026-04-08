"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/neutron.dynamicfees.v1.MsgUpdateParams": {
        aminoType: "dynamicfees/MsgUpdateParams",
        toAmino: ({ authority, params }) => {
            return {
                authority,
                params: {
                    ntrn_prices: params.ntrnPrices.map((el0) => ({
                        denom: el0.denom,
                        amount: el0.amount,
                    })),
                },
            };
        },
        fromAmino: ({ authority, params }) => {
            return {
                authority,
                params: params == null
                    ? params
                    : {
                        ntrnPrices: params.ntrn_prices.map?.((el1) => ({
                            denom: el1.denom,
                            amount: el1.amount,
                        })),
                    },
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map