import { CurrencyPair } from "../../types/v1/currency_pair.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "slinky.oracle.v1";
/**
 * Given an authority + a set of CurrencyPairs, the x/oracle module will
 * check to see that the authority has permissions to update the set of
 * CurrencyPairs tracked in the oracle, and add the given CurrencyPairs to be
 * tracked in each VoteExtension
 */
export interface MsgAddCurrencyPairs {
    /**
     * authority is the address of the account that is authorized to update the
     * x/oracle's CurrencyPairs
     */
    authority: string;
    /**
     * set of CurrencyPairs to be added to the module (+ prices if they are to be
     * set)
     */
    currencyPairs: CurrencyPair[];
}
export interface MsgAddCurrencyPairsResponse {
}
/**
 * Given an authority + a set of CurrencyPairIDs, the x/oracle module's message
 * service will remove all of the CurrencyPairs identified by each
 * CurrencyPairID in the request from state. Notice, if a given currency-pair
 * does not exist in state, the module ignores that currency-pair and continues
 * removing the rest.
 */
export interface MsgRemoveCurrencyPairs {
    /**
     * authority is the address of the account that is authorized to update the
     * x/oracle's CurrencyPairs
     */
    authority: string;
    /**
     * currency_pair_ids are the stringified representation of a currency-pairs
     * (base/quote) to be removed from the module's state
     */
    currencyPairIds: string[];
}
export interface MsgRemoveCurrencyPairsResponse {
}
export declare const MsgAddCurrencyPairs: {
    typeUrl: string;
    encode(message: MsgAddCurrencyPairs, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddCurrencyPairs;
    fromJSON(object: any): MsgAddCurrencyPairs;
    toJSON(message: MsgAddCurrencyPairs): JsonSafe<MsgAddCurrencyPairs>;
    fromPartial<I extends Exact<DeepPartial<MsgAddCurrencyPairs>, I>>(object: I): MsgAddCurrencyPairs;
};
export declare const MsgAddCurrencyPairsResponse: {
    typeUrl: string;
    encode(_: MsgAddCurrencyPairsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddCurrencyPairsResponse;
    fromJSON(_: any): MsgAddCurrencyPairsResponse;
    toJSON(_: MsgAddCurrencyPairsResponse): JsonSafe<MsgAddCurrencyPairsResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgAddCurrencyPairsResponse>, I>>(_: I): MsgAddCurrencyPairsResponse;
};
export declare const MsgRemoveCurrencyPairs: {
    typeUrl: string;
    encode(message: MsgRemoveCurrencyPairs, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveCurrencyPairs;
    fromJSON(object: any): MsgRemoveCurrencyPairs;
    toJSON(message: MsgRemoveCurrencyPairs): JsonSafe<MsgRemoveCurrencyPairs>;
    fromPartial<I extends Exact<DeepPartial<MsgRemoveCurrencyPairs>, I>>(object: I): MsgRemoveCurrencyPairs;
};
export declare const MsgRemoveCurrencyPairsResponse: {
    typeUrl: string;
    encode(_: MsgRemoveCurrencyPairsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveCurrencyPairsResponse;
    fromJSON(_: any): MsgRemoveCurrencyPairsResponse;
    toJSON(_: MsgRemoveCurrencyPairsResponse): JsonSafe<MsgRemoveCurrencyPairsResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgRemoveCurrencyPairsResponse>, I>>(_: I): MsgRemoveCurrencyPairsResponse;
};
