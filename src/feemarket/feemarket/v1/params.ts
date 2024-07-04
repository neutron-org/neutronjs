/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "feemarket.feemarket.v1";
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
}
function createBaseParams(): Params {
  return {
    alpha: "",
    beta: "",
    gamma: "",
    delta: "",
    minBaseGasPrice: "",
    minLearningRate: "",
    maxLearningRate: "",
    maxBlockUtilization: BigInt(0),
    window: BigInt(0),
    feeDenom: "",
    enabled: false,
    distributeFees: false,
  };
}
export const Params = {
  typeUrl: "/feemarket.feemarket.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.alpha !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.alpha, 18).atomics);
    }
    if (message.beta !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.beta, 18).atomics);
    }
    if (message.gamma !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.gamma, 18).atomics);
    }
    if (message.delta !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.delta, 18).atomics);
    }
    if (message.minBaseGasPrice !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.minBaseGasPrice, 18).atomics);
    }
    if (message.minLearningRate !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.minLearningRate, 18).atomics);
    }
    if (message.maxLearningRate !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.maxLearningRate, 18).atomics);
    }
    if (message.maxBlockUtilization !== BigInt(0)) {
      writer.uint32(64).uint64(message.maxBlockUtilization);
    }
    if (message.window !== BigInt(0)) {
      writer.uint32(72).uint64(message.window);
    }
    if (message.feeDenom !== "") {
      writer.uint32(82).string(message.feeDenom);
    }
    if (message.enabled === true) {
      writer.uint32(88).bool(message.enabled);
    }
    if (message.distributeFees === true) {
      writer.uint32(96).bool(message.distributeFees);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alpha = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.beta = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.gamma = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.delta = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.minBaseGasPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.minLearningRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.maxLearningRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.maxBlockUtilization = reader.uint64();
          break;
        case 9:
          message.window = reader.uint64();
          break;
        case 10:
          message.feeDenom = reader.string();
          break;
        case 11:
          message.enabled = reader.bool();
          break;
        case 12:
          message.distributeFees = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.alpha)) obj.alpha = String(object.alpha);
    if (isSet(object.beta)) obj.beta = String(object.beta);
    if (isSet(object.gamma)) obj.gamma = String(object.gamma);
    if (isSet(object.delta)) obj.delta = String(object.delta);
    if (isSet(object.minBaseGasPrice)) obj.minBaseGasPrice = String(object.minBaseGasPrice);
    if (isSet(object.minLearningRate)) obj.minLearningRate = String(object.minLearningRate);
    if (isSet(object.maxLearningRate)) obj.maxLearningRate = String(object.maxLearningRate);
    if (isSet(object.maxBlockUtilization))
      obj.maxBlockUtilization = BigInt(object.maxBlockUtilization.toString());
    if (isSet(object.window)) obj.window = BigInt(object.window.toString());
    if (isSet(object.feeDenom)) obj.feeDenom = String(object.feeDenom);
    if (isSet(object.enabled)) obj.enabled = Boolean(object.enabled);
    if (isSet(object.distributeFees)) obj.distributeFees = Boolean(object.distributeFees);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.alpha !== undefined && (obj.alpha = message.alpha);
    message.beta !== undefined && (obj.beta = message.beta);
    message.gamma !== undefined && (obj.gamma = message.gamma);
    message.delta !== undefined && (obj.delta = message.delta);
    message.minBaseGasPrice !== undefined && (obj.minBaseGasPrice = message.minBaseGasPrice);
    message.minLearningRate !== undefined && (obj.minLearningRate = message.minLearningRate);
    message.maxLearningRate !== undefined && (obj.maxLearningRate = message.maxLearningRate);
    message.maxBlockUtilization !== undefined &&
      (obj.maxBlockUtilization = (message.maxBlockUtilization || BigInt(0)).toString());
    message.window !== undefined && (obj.window = (message.window || BigInt(0)).toString());
    message.feeDenom !== undefined && (obj.feeDenom = message.feeDenom);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.distributeFees !== undefined && (obj.distributeFees = message.distributeFees);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.alpha = object.alpha ?? "";
    message.beta = object.beta ?? "";
    message.gamma = object.gamma ?? "";
    message.delta = object.delta ?? "";
    message.minBaseGasPrice = object.minBaseGasPrice ?? "";
    message.minLearningRate = object.minLearningRate ?? "";
    message.maxLearningRate = object.maxLearningRate ?? "";
    if (object.maxBlockUtilization !== undefined && object.maxBlockUtilization !== null) {
      message.maxBlockUtilization = BigInt(object.maxBlockUtilization.toString());
    }
    if (object.window !== undefined && object.window !== null) {
      message.window = BigInt(object.window.toString());
    }
    message.feeDenom = object.feeDenom ?? "";
    message.enabled = object.enabled ?? false;
    message.distributeFees = object.distributeFees ?? false;
    return message;
  },
};
