"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/slinky.oracle.v1.MsgAddCurrencyPairs": {
        aminoType: "slinky/x/oracle/MsgAddCurrencyPairs",
        toAmino: ({ authority, currencyPairs }) => {
            return {
                authority,
                currency_pairs: currencyPairs.map((el0) => ({
                    Base: el0.base,
                    Quote: el0.quote,
                })),
            };
        },
        fromAmino: ({ authority, currency_pairs, }) => {
            return {
                authority,
                currencyPairs: currency_pairs.map?.((el0) => ({
                    base: el0.Base,
                    quote: el0.Quote,
                })),
            };
        },
    },
    "/slinky.oracle.v1.MsgRemoveCurrencyPairs": {
        aminoType: "slinky/x/oracle/MsgSetCurrencyPairs",
        toAmino: ({ authority, currencyPairIds, }) => {
            return {
                authority,
                currency_pair_ids: currencyPairIds,
            };
        },
        fromAmino: ({ authority, currency_pair_ids, }) => {
            return {
                authority,
                currencyPairIds: currency_pair_ids,
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map