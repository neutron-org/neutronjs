/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import { AlertWithStatus } from "./alerts";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "slinky.alerts.v1";
/**
 * AlertParams is the set of parameters for the x/Alerts module's Alerting. It
 * defines whether or not Alerts can be submitted, and if so, the minimum
 * bond amount required to submit an Alert.
 */
export interface AlertParams {
  /**
   * Enabled is a boolean defining whether or not Alerts can be submitted
   * to the module
   */
  enabled: boolean;
  /**
   * BondAmount is the minimum amount of bond required to submit an
   * Alert
   */
  bondAmount: Coin;
  /**
   * MaxBlockAge defines the maximum age of an Alert before it is pruned, notice
   * this is defined wrt. the height that the Alert references, i.e Alerts are
   * only relevant until Alert.Height + MaxBlockAge is reached.
   */
  maxBlockAge: bigint;
}
/** PruningParams defines the criterion for pruning Alerts from the state. */
export interface PruningParams {
  /** Enabled defines whether Alerts are to be pruned */
  enabled: boolean;
  /**
   * BlocksToPrune defines the number of blocks until an Alert will be pruned
   * from state, notice this is defined wrt. the current block height, i.e
   * Alerts will be stored in state until current_height + BlocksToPrune is
   * reached.
   */
  blocksToPrune: bigint;
}
/** Params is the set of parameters for the x/Alerts module. */
export interface Params {
  /** AlertParams is the set of parameters for the x/Alerts module's Alerting. */
  alertParams: AlertParams;
  /**
   * ConclusionVerificationParams is the set of parameters for the x/Alerts
   * module's conclusion verification.
   */
  conclusionVerificationParams?: Any;
  /** PruningParams is the set of parameters for the x/Alerts module's pruning. */
  pruningParams: PruningParams;
}
/**
 * GenesisState is the state that must be provided at genesis. It contains
 * params for the module, and the set initial Alerts.
 */
export interface GenesisState {
  /** Params is the set of x/Alerts parameters */
  params: Params;
  /** Alerts is the set of Alerts that have been submitted to the module */
  alerts: AlertWithStatus[];
}
function createBaseAlertParams(): AlertParams {
  return {
    enabled: false,
    bondAmount: Coin.fromPartial({}),
    maxBlockAge: BigInt(0),
  };
}
export const AlertParams = {
  typeUrl: "/slinky.alerts.v1.AlertParams",
  encode(message: AlertParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.bondAmount !== undefined) {
      Coin.encode(message.bondAmount, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxBlockAge !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxBlockAge);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AlertParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAlertParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.bondAmount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxBlockAge = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AlertParams {
    const obj = createBaseAlertParams();
    if (isSet(object.enabled)) obj.enabled = Boolean(object.enabled);
    if (isSet(object.bondAmount)) obj.bondAmount = Coin.fromJSON(object.bondAmount);
    if (isSet(object.maxBlockAge)) obj.maxBlockAge = BigInt(object.maxBlockAge.toString());
    return obj;
  },
  toJSON(message: AlertParams): JsonSafe<AlertParams> {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.bondAmount !== undefined &&
      (obj.bondAmount = message.bondAmount ? Coin.toJSON(message.bondAmount) : undefined);
    message.maxBlockAge !== undefined && (obj.maxBlockAge = (message.maxBlockAge || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AlertParams>, I>>(object: I): AlertParams {
    const message = createBaseAlertParams();
    message.enabled = object.enabled ?? false;
    if (object.bondAmount !== undefined && object.bondAmount !== null) {
      message.bondAmount = Coin.fromPartial(object.bondAmount);
    }
    if (object.maxBlockAge !== undefined && object.maxBlockAge !== null) {
      message.maxBlockAge = BigInt(object.maxBlockAge.toString());
    }
    return message;
  },
};
function createBasePruningParams(): PruningParams {
  return {
    enabled: false,
    blocksToPrune: BigInt(0),
  };
}
export const PruningParams = {
  typeUrl: "/slinky.alerts.v1.PruningParams",
  encode(message: PruningParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.blocksToPrune !== BigInt(0)) {
      writer.uint32(16).uint64(message.blocksToPrune);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PruningParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePruningParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.blocksToPrune = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PruningParams {
    const obj = createBasePruningParams();
    if (isSet(object.enabled)) obj.enabled = Boolean(object.enabled);
    if (isSet(object.blocksToPrune)) obj.blocksToPrune = BigInt(object.blocksToPrune.toString());
    return obj;
  },
  toJSON(message: PruningParams): JsonSafe<PruningParams> {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.blocksToPrune !== undefined &&
      (obj.blocksToPrune = (message.blocksToPrune || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PruningParams>, I>>(object: I): PruningParams {
    const message = createBasePruningParams();
    message.enabled = object.enabled ?? false;
    if (object.blocksToPrune !== undefined && object.blocksToPrune !== null) {
      message.blocksToPrune = BigInt(object.blocksToPrune.toString());
    }
    return message;
  },
};
function createBaseParams(): Params {
  return {
    alertParams: AlertParams.fromPartial({}),
    conclusionVerificationParams: undefined,
    pruningParams: PruningParams.fromPartial({}),
  };
}
export const Params = {
  typeUrl: "/slinky.alerts.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.alertParams !== undefined) {
      AlertParams.encode(message.alertParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.conclusionVerificationParams !== undefined) {
      Any.encode(message.conclusionVerificationParams, writer.uint32(18).fork()).ldelim();
    }
    if (message.pruningParams !== undefined) {
      PruningParams.encode(message.pruningParams, writer.uint32(26).fork()).ldelim();
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
          message.alertParams = AlertParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.conclusionVerificationParams = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.pruningParams = PruningParams.decode(reader, reader.uint32());
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
    if (isSet(object.alertParams)) obj.alertParams = AlertParams.fromJSON(object.alertParams);
    if (isSet(object.conclusionVerificationParams))
      obj.conclusionVerificationParams = Any.fromJSON(object.conclusionVerificationParams);
    if (isSet(object.pruningParams)) obj.pruningParams = PruningParams.fromJSON(object.pruningParams);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.alertParams !== undefined &&
      (obj.alertParams = message.alertParams ? AlertParams.toJSON(message.alertParams) : undefined);
    message.conclusionVerificationParams !== undefined &&
      (obj.conclusionVerificationParams = message.conclusionVerificationParams
        ? Any.toJSON(message.conclusionVerificationParams)
        : undefined);
    message.pruningParams !== undefined &&
      (obj.pruningParams = message.pruningParams ? PruningParams.toJSON(message.pruningParams) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (object.alertParams !== undefined && object.alertParams !== null) {
      message.alertParams = AlertParams.fromPartial(object.alertParams);
    }
    if (object.conclusionVerificationParams !== undefined && object.conclusionVerificationParams !== null) {
      message.conclusionVerificationParams = Any.fromPartial(object.conclusionVerificationParams);
    }
    if (object.pruningParams !== undefined && object.pruningParams !== null) {
      message.pruningParams = PruningParams.fromPartial(object.pruningParams);
    }
    return message;
  },
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    alerts: [],
  };
}
export const GenesisState = {
  typeUrl: "/slinky.alerts.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.alerts) {
      AlertWithStatus.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.alerts.push(AlertWithStatus.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.alerts))
      obj.alerts = object.alerts.map((e: any) => AlertWithStatus.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.alerts) {
      obj.alerts = message.alerts.map((e) => (e ? AlertWithStatus.toJSON(e) : undefined));
    } else {
      obj.alerts = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.alerts = object.alerts?.map((e) => AlertWithStatus.fromPartial(e)) || [];
    return message;
  },
};
