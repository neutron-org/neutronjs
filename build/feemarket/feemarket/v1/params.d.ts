import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "feemarket.feemarket.v1";
/**
 * Params contains the required set of parameters for the EIP1559 fee market
 * plugin implementation.
 */
export interface Params {
    /**
     * Alpha is the amount we additively increase the learning rate
     * when it is above or below the target +/- threshold.
     *
     * Must be > 0.
     */
    alpha: string;
    /**
     * Beta is the amount we multiplicatively decrease the learning rate
     * when it is within the target +/- threshold.
     *
     * Must be [0, 1].
     */
    beta: string;
    /**
     * Gamma is the threshold for the learning rate. If the learning rate is
     * above or below the target +/- threshold, we additively increase the
     * learning rate by Alpha. Otherwise, we multiplicatively decrease the
     * learning rate by Beta.
     *
     * Must be [0, 0.5].
     */
    gamma: string;
    /**
     * Delta is the amount we additively increase/decrease the gas price when the
     * net block utilization difference in the window is above/below the target
     * utilization.
     */
    delta: string;
    /**
     * MinBaseGasPrice determines the initial gas price of the module and the
     * global minimum for the network.
     */
    minBaseGasPrice: string;
    /** MinLearningRate is the lower bound for the learning rate. */
    minLearningRate: string;
    /** MaxLearningRate is the upper bound for the learning rate. */
    maxLearningRate: string;
    /** MaxBlockUtilization is the maximum block utilization. */
    maxBlockUtilization: bigint;
    /**
     * Window defines the window size for calculating an adaptive learning rate
     * over a moving window of blocks.
     */
    window: bigint;
    /** FeeDenom is the denom that will be used for all fee payments. */
    feeDenom: string;
    /**
     * Enabled is a boolean that determines whether the EIP1559 fee market is
     * enabled.
     */
    enabled: boolean;
    /**
     * DistributeFees is a boolean that determines whether the fees are burned or
     * distributed to all stakers.
     */
    distributeFees: boolean;
    /**
     * SendTipToProposer is a boolean that determines whether the tip is sent to a
     * proposer or to a module account.
     */
    sendTipToProposer: boolean;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): JsonSafe<Params>;
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params;
};
