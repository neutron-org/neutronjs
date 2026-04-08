import { Params } from "./params.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.revenue";
/** Defines the revenue module's genesis state. */
export interface GenesisState {
    /** Revenue module parameters. */
    params: Params;
    /**
     * The current payment schedule. If nil, the module will use the respective payment schedule for
     * the payment schedule type specified in the params.
     */
    paymentSchedule?: PaymentSchedule;
    /** Revenue module list of validators. */
    validators: ValidatorInfo[];
}
/**
 * A model that contains information specific to the currently active payment schedule. The oneof
 * implementations define conditions for payment periods ending and track the progress of the
 * current payment period. This is a module's state variable.
 * The inner oneof must correspond with the respective payment schedule type defined in the module
 * params. In runtime, on a mismatch due to e.g. MsgUpdateParams execution, the module will switch
 * to the payment schedule that corresponds to the payment schedule type automatically.
 */
export interface PaymentSchedule {
    monthlyPaymentSchedule?: MonthlyPaymentSchedule;
    blockBasedPaymentSchedule?: BlockBasedPaymentSchedule;
    emptyPaymentSchedule?: EmptyPaymentSchedule;
}
/** Contains information about a validator. */
export interface ValidatorInfo {
    /** The validator's node operator address. */
    valOperAddress: string;
    /** The number of blocks the validator has committed in the current payment period. */
    commitedBlocksInPeriod: bigint;
    /** The number of oracle votes the validator has submitted in the current payment period. */
    commitedOracleVotesInPeriod: bigint;
    /**
     * The number of blocks the validator has remained in the active validator set for in the
     * current payment period.
     */
    inActiveValsetForBlocksInPeriod: bigint;
}
/** Represents a payment schedule where revenue payments are processed once a month. */
export interface MonthlyPaymentSchedule {
    /** The block height at which the current month started. */
    currentMonthStartBlock: bigint;
    /** The timestamp of the block at which the current month started. */
    currentMonthStartBlockTs: bigint;
}
/**
 * Represents a payment schedule where revenue payments are processed after a specified number
 * of blocks.
 */
export interface BlockBasedPaymentSchedule {
    /** The number of blocks in each payment period. */
    blocksPerPeriod: bigint;
    /** The block height at which the current payment period started. */
    currentPeriodStartBlock: bigint;
}
/** Represents a payment schedule where revenue is never distributed. */
export interface EmptyPaymentSchedule {
}
/**
 * Represents a data structure that tracks the cumulative price of an asset over the entire
 * observation period, along with the last absolute asset price and the timestamp when this
 * price was last recorded.
 */
export interface RewardAssetPrice {
    /**
     * The cumulative price of the reward asset within the TWAP window. It is calculated as:
     * `cumulative_price_at_timestamp_t(n)` = `last_price_at_t(n-1)` * (t(n) - t(n-1)) + `cumulative_price_at_timestamp_t(n-1)`
     */
    cumulativePrice: string;
    /** The price of the reward asset in reward quote asset that corresponds to the timestamp. */
    absolutePrice: string;
    /** The timestamp of the last update of the absolute and cumulative price. */
    timestamp: bigint;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): JsonSafe<GenesisState>;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
export declare const PaymentSchedule: {
    typeUrl: string;
    encode(message: PaymentSchedule, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PaymentSchedule;
    fromJSON(object: any): PaymentSchedule;
    toJSON(message: PaymentSchedule): JsonSafe<PaymentSchedule>;
    fromPartial<I extends Exact<DeepPartial<PaymentSchedule>, I>>(object: I): PaymentSchedule;
};
export declare const ValidatorInfo: {
    typeUrl: string;
    encode(message: ValidatorInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValidatorInfo;
    fromJSON(object: any): ValidatorInfo;
    toJSON(message: ValidatorInfo): JsonSafe<ValidatorInfo>;
    fromPartial<I extends Exact<DeepPartial<ValidatorInfo>, I>>(object: I): ValidatorInfo;
};
export declare const MonthlyPaymentSchedule: {
    typeUrl: string;
    encode(message: MonthlyPaymentSchedule, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MonthlyPaymentSchedule;
    fromJSON(object: any): MonthlyPaymentSchedule;
    toJSON(message: MonthlyPaymentSchedule): JsonSafe<MonthlyPaymentSchedule>;
    fromPartial<I extends Exact<DeepPartial<MonthlyPaymentSchedule>, I>>(object: I): MonthlyPaymentSchedule;
};
export declare const BlockBasedPaymentSchedule: {
    typeUrl: string;
    encode(message: BlockBasedPaymentSchedule, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BlockBasedPaymentSchedule;
    fromJSON(object: any): BlockBasedPaymentSchedule;
    toJSON(message: BlockBasedPaymentSchedule): JsonSafe<BlockBasedPaymentSchedule>;
    fromPartial<I extends Exact<DeepPartial<BlockBasedPaymentSchedule>, I>>(object: I): BlockBasedPaymentSchedule;
};
export declare const EmptyPaymentSchedule: {
    typeUrl: string;
    encode(_: EmptyPaymentSchedule, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EmptyPaymentSchedule;
    fromJSON(_: any): EmptyPaymentSchedule;
    toJSON(_: EmptyPaymentSchedule): JsonSafe<EmptyPaymentSchedule>;
    fromPartial<I extends Exact<DeepPartial<EmptyPaymentSchedule>, I>>(_: I): EmptyPaymentSchedule;
};
export declare const RewardAssetPrice: {
    typeUrl: string;
    encode(message: RewardAssetPrice, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RewardAssetPrice;
    fromJSON(object: any): RewardAssetPrice;
    toJSON(message: RewardAssetPrice): JsonSafe<RewardAssetPrice>;
    fromPartial<I extends Exact<DeepPartial<RewardAssetPrice>, I>>(object: I): RewardAssetPrice;
};
