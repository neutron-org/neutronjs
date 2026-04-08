import { AminoMsg } from "@cosmjs/amino";
import { MsgAddCurrencyPairs, MsgRemoveCurrencyPairs } from "./tx.js";
export interface MsgAddCurrencyPairsAminoType extends AminoMsg {
    type: "slinky/x/oracle/MsgAddCurrencyPairs";
    value: {
        authority: string;
        currency_pairs: {
            Base: string;
            Quote: string;
        }[];
    };
}
export interface MsgRemoveCurrencyPairsAminoType extends AminoMsg {
    type: "slinky/x/oracle/MsgSetCurrencyPairs";
    value: {
        authority: string;
        currency_pair_ids: string[];
    };
}
export declare const AminoConverter: {
    "/slinky.oracle.v1.MsgAddCurrencyPairs": {
        aminoType: string;
        toAmino: ({ authority, currencyPairs }: MsgAddCurrencyPairs) => MsgAddCurrencyPairsAminoType["value"];
        fromAmino: ({ authority, currency_pairs, }: MsgAddCurrencyPairsAminoType["value"]) => MsgAddCurrencyPairs;
    };
    "/slinky.oracle.v1.MsgRemoveCurrencyPairs": {
        aminoType: string;
        toAmino: ({ authority, currencyPairIds, }: MsgRemoveCurrencyPairs) => MsgRemoveCurrencyPairsAminoType["value"];
        fromAmino: ({ authority, currency_pair_ids, }: MsgRemoveCurrencyPairsAminoType["value"]) => MsgRemoveCurrencyPairs;
    };
};
