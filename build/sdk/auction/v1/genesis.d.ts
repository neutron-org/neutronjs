import { Coin } from "../../../cosmos/base/v1beta1/coin.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "sdk.auction.v1";
/** GenesisState defines the genesis state of the x/auction module. */
export interface GenesisState {
    params: Params;
}
/** Params defines the parameters of the x/auction module. */
export interface Params {
    /**
     * max_bundle_size is the maximum number of transactions that can be bundled
     * in a single bundle.
     */
    maxBundleSize: number;
    /**
     * escrow_account_address is the address of the account that will receive a
     * portion of the bid proceeds.
     */
    escrowAccountAddress: Uint8Array;
    /** reserve_fee specifies the bid floor for the auction. */
    reserveFee: Coin;
    /**
     * min_bid_increment specifies the minimum amount that the next bid must be
     * greater than the previous bid.
     */
    minBidIncrement: Coin;
    /**
     * front_running_protection specifies whether front running and sandwich
     * attack protection is enabled.
     */
    frontRunningProtection: boolean;
    /**
     * proposer_fee defines the portion of the winning bid that goes to the block
     * proposer that proposed the block.
     */
    proposerFee: string;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): JsonSafe<GenesisState>;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): JsonSafe<Params>;
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params;
};
