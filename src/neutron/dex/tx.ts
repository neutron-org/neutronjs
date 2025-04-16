//@ts-nocheck
/* eslint-disable */
import { Timestamp } from "../../google/protobuf/timestamp";
import { Params } from "./params";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.dex";
export enum LimitOrderType {
  GOOD_TIL_CANCELLED = 0,
  FILL_OR_KILL = 1,
  IMMEDIATE_OR_CANCEL = 2,
  JUST_IN_TIME = 3,
  GOOD_TIL_TIME = 4,
  UNRECOGNIZED = -1,
}
export function limitOrderTypeFromJSON(object: any): LimitOrderType {
  switch (object) {
    case 0:
    case "GOOD_TIL_CANCELLED":
      return LimitOrderType.GOOD_TIL_CANCELLED;
    case 1:
    case "FILL_OR_KILL":
      return LimitOrderType.FILL_OR_KILL;
    case 2:
    case "IMMEDIATE_OR_CANCEL":
      return LimitOrderType.IMMEDIATE_OR_CANCEL;
    case 3:
    case "JUST_IN_TIME":
      return LimitOrderType.JUST_IN_TIME;
    case 4:
    case "GOOD_TIL_TIME":
      return LimitOrderType.GOOD_TIL_TIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LimitOrderType.UNRECOGNIZED;
  }
}
export function limitOrderTypeToJSON(object: LimitOrderType): string {
  switch (object) {
    case LimitOrderType.GOOD_TIL_CANCELLED:
      return "GOOD_TIL_CANCELLED";
    case LimitOrderType.FILL_OR_KILL:
      return "FILL_OR_KILL";
    case LimitOrderType.IMMEDIATE_OR_CANCEL:
      return "IMMEDIATE_OR_CANCEL";
    case LimitOrderType.JUST_IN_TIME:
      return "JUST_IN_TIME";
    case LimitOrderType.GOOD_TIL_TIME:
      return "GOOD_TIL_TIME";
    case LimitOrderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface DepositOptions {
  disableAutoswap: boolean;
  failTxOnBel: boolean;
  swapOnDeposit: boolean;
  swapOnDepositSlopToleranceBps: bigint;
}
export interface MsgDeposit {
  creator: string;
  receiver: string;
  tokenA: string;
  tokenB: string;
  amountsA: string[];
  amountsB: string[];
  tickIndexesAToB: bigint[];
  fees: bigint[];
  options: DepositOptions[];
}
export interface FailedDeposit {
  depositIdx: bigint;
  error: string;
}
export interface MsgDepositResponse {
  reserve0Deposited: string[];
  reserve1Deposited: string[];
  failedDeposits: FailedDeposit[];
  sharesIssued: Coin[];
}
export interface MsgWithdrawal {
  creator: string;
  receiver: string;
  tokenA: string;
  tokenB: string;
  sharesToRemove: string[];
  tickIndexesAToB: bigint[];
  fees: bigint[];
}
export interface MsgWithdrawalResponse {
  reserve0Withdrawn: string;
  reserve1Withdrawn: string;
  sharesBurned: Coin[];
}
export interface MsgPlaceLimitOrder {
  creator: string;
  receiver: string;
  tokenIn: string;
  tokenOut: string;
  /** DEPRECATED: tick_index_in_to_out will be removed in future release; limit_sell_price should be used instead. */
  /** @deprecated */
  tickIndexInToOut: bigint;
  amountIn: string;
  orderType: LimitOrderType;
  /** expirationTime is only valid iff orderType == GOOD_TIL_TIME. */
  expirationTime?: Timestamp;
  maxAmountOut?: string;
  limitSellPrice?: string;
  /**
   * min_average_sell_price is an optional parameter that sets a required minimum average price for the entire trade.
   * if the min_average_sell_price is not met the trade will fail.
   * If min_average_sell_price is omitted limit_sell_price will be used instead
   */
  minAverageSellPrice?: string;
}
export interface MsgPlaceLimitOrderResponse {
  trancheKey: string;
  /** Total amount of coin used for the limit order */
  coinIn: Coin;
  /**
   * Total amount of coin received from the taker portion of the limit order
   * This is the amount of coin immediately available in the users account after
   * executing the limit order. It does not include any future proceeds from the
   * maker portion which will have withdrawn in the future
   */
  takerCoinOut: Coin;
  /** Total amount of the token in that was immediately swapped for takerOutCoin */
  takerCoinIn: Coin;
}
export interface MsgWithdrawFilledLimitOrder {
  creator: string;
  trancheKey: string;
}
export interface MsgWithdrawFilledLimitOrderResponse {
  /** Total amount of taker reserves that were withdrawn */
  takerCoinOut: Coin;
  /** Total amount of maker reserves that were withdrawn --only applies to inactive LimitOrders */
  makerCoinOut: Coin;
}
export interface MsgCancelLimitOrder {
  creator: string;
  trancheKey: string;
}
export interface MsgCancelLimitOrderResponse {
  /** Total amount of taker reserves that were withdrawn */
  takerCoinOut: Coin;
  /** Total amount of maker reserves that were canceled */
  makerCoinOut: Coin;
}
export interface MultiHopRoute {
  hops: string[];
}
export interface MsgMultiHopSwap {
  creator: string;
  receiver: string;
  routes: MultiHopRoute[];
  amountIn: string;
  exitLimitPrice: string;
  /**
   * If pickBestRoute == true then all routes are run and the route with the
   * best price is chosen otherwise, the first succesful route is used.
   */
  pickBestRoute: boolean;
}
export interface MsgMultiHopSwapResponse {
  coinOut: Coin;
  route?: MultiHopRoute;
  dust: Coin[];
}
export interface MsgUpdateParams {
  /** Authority is the address of the governance account. */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: 0.47
 */
export interface MsgUpdateParamsResponse {}
function createBaseDepositOptions(): DepositOptions {
  return {
    disableAutoswap: false,
    failTxOnBel: false,
    swapOnDeposit: false,
    swapOnDepositSlopToleranceBps: BigInt(0),
  };
}
export const DepositOptions = {
  typeUrl: "/neutron.dex.DepositOptions",
  encode(message: DepositOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.disableAutoswap === true) {
      writer.uint32(8).bool(message.disableAutoswap);
    }
    if (message.failTxOnBel === true) {
      writer.uint32(16).bool(message.failTxOnBel);
    }
    if (message.swapOnDeposit === true) {
      writer.uint32(24).bool(message.swapOnDeposit);
    }
    if (message.swapOnDepositSlopToleranceBps !== BigInt(0)) {
      writer.uint32(32).uint64(message.swapOnDepositSlopToleranceBps);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DepositOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disableAutoswap = reader.bool();
          break;
        case 2:
          message.failTxOnBel = reader.bool();
          break;
        case 3:
          message.swapOnDeposit = reader.bool();
          break;
        case 4:
          message.swapOnDepositSlopToleranceBps = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DepositOptions {
    const obj = createBaseDepositOptions();
    if (isSet(object.disableAutoswap)) obj.disableAutoswap = Boolean(object.disableAutoswap);
    if (isSet(object.failTxOnBel)) obj.failTxOnBel = Boolean(object.failTxOnBel);
    if (isSet(object.swapOnDeposit)) obj.swapOnDeposit = Boolean(object.swapOnDeposit);
    if (isSet(object.swapOnDepositSlopToleranceBps))
      obj.swapOnDepositSlopToleranceBps = BigInt(object.swapOnDepositSlopToleranceBps.toString());
    return obj;
  },
  toJSON(message: DepositOptions): JsonSafe<DepositOptions> {
    const obj: any = {};
    message.disableAutoswap !== undefined && (obj.disableAutoswap = message.disableAutoswap);
    message.failTxOnBel !== undefined && (obj.failTxOnBel = message.failTxOnBel);
    message.swapOnDeposit !== undefined && (obj.swapOnDeposit = message.swapOnDeposit);
    message.swapOnDepositSlopToleranceBps !== undefined &&
      (obj.swapOnDepositSlopToleranceBps = (message.swapOnDepositSlopToleranceBps || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DepositOptions>, I>>(object: I): DepositOptions {
    const message = createBaseDepositOptions();
    message.disableAutoswap = object.disableAutoswap ?? false;
    message.failTxOnBel = object.failTxOnBel ?? false;
    message.swapOnDeposit = object.swapOnDeposit ?? false;
    if (object.swapOnDepositSlopToleranceBps !== undefined && object.swapOnDepositSlopToleranceBps !== null) {
      message.swapOnDepositSlopToleranceBps = BigInt(object.swapOnDepositSlopToleranceBps.toString());
    }
    return message;
  },
  fromAmino(object: DepositOptionsAmino): DepositOptions {
    const message = createBaseDepositOptions();
    if (object.disable_autoswap !== undefined && object.disable_autoswap !== null) {
      message.disableAutoswap = object.disable_autoswap;
    }
    if (object.fail_tx_on_bel !== undefined && object.fail_tx_on_bel !== null) {
      message.failTxOnBel = object.fail_tx_on_bel;
    }
    if (object.swap_on_deposit !== undefined && object.swap_on_deposit !== null) {
      message.swapOnDeposit = object.swap_on_deposit;
    }
    if (
      object.swap_on_deposit_slop_tolerance_bps !== undefined &&
      object.swap_on_deposit_slop_tolerance_bps !== null
    ) {
      message.swapOnDepositSlopToleranceBps = BigInt(object.swap_on_deposit_slop_tolerance_bps);
    }
    return message;
  },
  toAmino(message: DepositOptions): DepositOptionsAmino {
    const obj: any = {};
    obj.disable_autoswap = message.disableAutoswap === false ? undefined : message.disableAutoswap;
    obj.fail_tx_on_bel = message.failTxOnBel === false ? undefined : message.failTxOnBel;
    obj.swap_on_deposit = message.swapOnDeposit === false ? undefined : message.swapOnDeposit;
    obj.swap_on_deposit_slop_tolerance_bps =
      message.swapOnDepositSlopToleranceBps !== BigInt(0)
        ? message.swapOnDepositSlopToleranceBps?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(object: DepositOptionsAminoMsg): DepositOptions {
    return DepositOptions.fromAmino(object.value);
  },
};
function createBaseMsgDeposit(): MsgDeposit {
  return {
    creator: "",
    receiver: "",
    tokenA: "",
    tokenB: "",
    amountsA: [],
    amountsB: [],
    tickIndexesAToB: [],
    fees: [],
    options: [],
  };
}
export const MsgDeposit = {
  typeUrl: "/neutron.dex.MsgDeposit",
  encode(message: MsgDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.tokenA !== "") {
      writer.uint32(26).string(message.tokenA);
    }
    if (message.tokenB !== "") {
      writer.uint32(34).string(message.tokenB);
    }
    for (const v of message.amountsA) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.amountsB) {
      writer.uint32(50).string(v!);
    }
    writer.uint32(58).fork();
    for (const v of message.tickIndexesAToB) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(66).fork();
    for (const v of message.fees) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.options) {
      DepositOptions.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.tokenA = reader.string();
          break;
        case 4:
          message.tokenB = reader.string();
          break;
        case 5:
          message.amountsA.push(reader.string());
          break;
        case 6:
          message.amountsB.push(reader.string());
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tickIndexesAToB.push(reader.int64());
            }
          } else {
            message.tickIndexesAToB.push(reader.int64());
          }
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fees.push(reader.uint64());
            }
          } else {
            message.fees.push(reader.uint64());
          }
          break;
        case 9:
          message.options.push(DepositOptions.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeposit {
    const obj = createBaseMsgDeposit();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    if (isSet(object.tokenA)) obj.tokenA = String(object.tokenA);
    if (isSet(object.tokenB)) obj.tokenB = String(object.tokenB);
    if (Array.isArray(object?.amountsA)) obj.amountsA = object.amountsA.map((e: any) => String(e));
    if (Array.isArray(object?.amountsB)) obj.amountsB = object.amountsB.map((e: any) => String(e));
    if (Array.isArray(object?.tickIndexesAToB))
      obj.tickIndexesAToB = object.tickIndexesAToB.map((e: any) => BigInt(e.toString()));
    if (Array.isArray(object?.fees)) obj.fees = object.fees.map((e: any) => BigInt(e.toString()));
    if (Array.isArray(object?.options))
      obj.options = object.options.map((e: any) => DepositOptions.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgDeposit): JsonSafe<MsgDeposit> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.tokenA !== undefined && (obj.tokenA = message.tokenA);
    message.tokenB !== undefined && (obj.tokenB = message.tokenB);
    if (message.amountsA) {
      obj.amountsA = message.amountsA.map((e) => e);
    } else {
      obj.amountsA = [];
    }
    if (message.amountsB) {
      obj.amountsB = message.amountsB.map((e) => e);
    } else {
      obj.amountsB = [];
    }
    if (message.tickIndexesAToB) {
      obj.tickIndexesAToB = message.tickIndexesAToB.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.tickIndexesAToB = [];
    }
    if (message.fees) {
      obj.fees = message.fees.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.fees = [];
    }
    if (message.options) {
      obj.options = message.options.map((e) => (e ? DepositOptions.toJSON(e) : undefined));
    } else {
      obj.options = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeposit>, I>>(object: I): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    message.tokenA = object.tokenA ?? "";
    message.tokenB = object.tokenB ?? "";
    message.amountsA = object.amountsA?.map((e) => e) || [];
    message.amountsB = object.amountsB?.map((e) => e) || [];
    message.tickIndexesAToB = object.tickIndexesAToB?.map((e) => BigInt(e.toString())) || [];
    message.fees = object.fees?.map((e) => BigInt(e.toString())) || [];
    message.options = object.options?.map((e) => DepositOptions.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgDepositAmino): MsgDeposit {
    const message = createBaseMsgDeposit();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.token_a !== undefined && object.token_a !== null) {
      message.tokenA = object.token_a;
    }
    if (object.token_b !== undefined && object.token_b !== null) {
      message.tokenB = object.token_b;
    }
    message.amountsA = object.amounts_a?.map((e) => e) || [];
    message.amountsB = object.amounts_b?.map((e) => e) || [];
    message.tickIndexesAToB = object.tick_indexes_a_to_b?.map((e) => BigInt(e)) || [];
    message.fees = object.fees?.map((e) => BigInt(e)) || [];
    message.options = object.options?.map((e) => DepositOptions.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgDeposit): MsgDepositAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.token_a = message.tokenA === "" ? undefined : message.tokenA;
    obj.token_b = message.tokenB === "" ? undefined : message.tokenB;
    if (message.amountsA) {
      obj.amounts_a = message.amountsA.map((e) => e);
    } else {
      obj.amounts_a = message.amountsA;
    }
    if (message.amountsB) {
      obj.amounts_b = message.amountsB.map((e) => e);
    } else {
      obj.amounts_b = message.amountsB;
    }
    if (message.tickIndexesAToB) {
      obj.tick_indexes_a_to_b = message.tickIndexesAToB.map((e) => e.toString());
    } else {
      obj.tick_indexes_a_to_b = message.tickIndexesAToB;
    }
    if (message.fees) {
      obj.fees = message.fees.map((e) => e.toString());
    } else {
      obj.fees = message.fees;
    }
    if (message.options) {
      obj.options = message.options.map((e) => (e ? DepositOptions.toAmino(e) : undefined));
    } else {
      obj.options = message.options;
    }
    return obj;
  },
  fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit {
    return MsgDeposit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeposit): MsgDepositAminoMsg {
    return {
      type: "dex/MsgDeposit",
      value: MsgDeposit.toAmino(message),
    };
  },
};
function createBaseFailedDeposit(): FailedDeposit {
  return {
    depositIdx: BigInt(0),
    error: "",
  };
}
export const FailedDeposit = {
  typeUrl: "/neutron.dex.FailedDeposit",
  encode(message: FailedDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositIdx !== BigInt(0)) {
      writer.uint32(8).uint64(message.depositIdx);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FailedDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFailedDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositIdx = reader.uint64();
          break;
        case 2:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FailedDeposit {
    const obj = createBaseFailedDeposit();
    if (isSet(object.depositIdx)) obj.depositIdx = BigInt(object.depositIdx.toString());
    if (isSet(object.error)) obj.error = String(object.error);
    return obj;
  },
  toJSON(message: FailedDeposit): JsonSafe<FailedDeposit> {
    const obj: any = {};
    message.depositIdx !== undefined && (obj.depositIdx = (message.depositIdx || BigInt(0)).toString());
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FailedDeposit>, I>>(object: I): FailedDeposit {
    const message = createBaseFailedDeposit();
    if (object.depositIdx !== undefined && object.depositIdx !== null) {
      message.depositIdx = BigInt(object.depositIdx.toString());
    }
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: FailedDepositAmino): FailedDeposit {
    const message = createBaseFailedDeposit();
    if (object.deposit_idx !== undefined && object.deposit_idx !== null) {
      message.depositIdx = BigInt(object.deposit_idx);
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: FailedDeposit): FailedDepositAmino {
    const obj: any = {};
    obj.deposit_idx = message.depositIdx !== BigInt(0) ? message.depositIdx?.toString() : undefined;
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: FailedDepositAminoMsg): FailedDeposit {
    return FailedDeposit.fromAmino(object.value);
  },
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {
    reserve0Deposited: [],
    reserve1Deposited: [],
    failedDeposits: [],
    sharesIssued: [],
  };
}
export const MsgDepositResponse = {
  typeUrl: "/neutron.dex.MsgDepositResponse",
  encode(message: MsgDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.reserve0Deposited) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.reserve1Deposited) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.failedDeposits) {
      FailedDeposit.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sharesIssued) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserve0Deposited.push(reader.string());
          break;
        case 2:
          message.reserve1Deposited.push(reader.string());
          break;
        case 3:
          message.failedDeposits.push(FailedDeposit.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sharesIssued.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDepositResponse {
    const obj = createBaseMsgDepositResponse();
    if (Array.isArray(object?.reserve0Deposited))
      obj.reserve0Deposited = object.reserve0Deposited.map((e: any) => String(e));
    if (Array.isArray(object?.reserve1Deposited))
      obj.reserve1Deposited = object.reserve1Deposited.map((e: any) => String(e));
    if (Array.isArray(object?.failedDeposits))
      obj.failedDeposits = object.failedDeposits.map((e: any) => FailedDeposit.fromJSON(e));
    if (Array.isArray(object?.sharesIssued))
      obj.sharesIssued = object.sharesIssued.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgDepositResponse): JsonSafe<MsgDepositResponse> {
    const obj: any = {};
    if (message.reserve0Deposited) {
      obj.reserve0Deposited = message.reserve0Deposited.map((e) => e);
    } else {
      obj.reserve0Deposited = [];
    }
    if (message.reserve1Deposited) {
      obj.reserve1Deposited = message.reserve1Deposited.map((e) => e);
    } else {
      obj.reserve1Deposited = [];
    }
    if (message.failedDeposits) {
      obj.failedDeposits = message.failedDeposits.map((e) => (e ? FailedDeposit.toJSON(e) : undefined));
    } else {
      obj.failedDeposits = [];
    }
    if (message.sharesIssued) {
      obj.sharesIssued = message.sharesIssued.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.sharesIssued = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDepositResponse>, I>>(object: I): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    message.reserve0Deposited = object.reserve0Deposited?.map((e) => e) || [];
    message.reserve1Deposited = object.reserve1Deposited?.map((e) => e) || [];
    message.failedDeposits = object.failedDeposits?.map((e) => FailedDeposit.fromPartial(e)) || [];
    message.sharesIssued = object.sharesIssued?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgDepositResponseAmino): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    message.reserve0Deposited = object.reserve0_deposited?.map((e) => e) || [];
    message.reserve1Deposited = object.reserve1_deposited?.map((e) => e) || [];
    message.failedDeposits = object.failed_deposits?.map((e) => FailedDeposit.fromAmino(e)) || [];
    message.sharesIssued = object.shares_issued?.map((e) => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgDepositResponse): MsgDepositResponseAmino {
    const obj: any = {};
    if (message.reserve0Deposited) {
      obj.reserve0_deposited = message.reserve0Deposited.map((e) => e);
    } else {
      obj.reserve0_deposited = message.reserve0Deposited;
    }
    if (message.reserve1Deposited) {
      obj.reserve1_deposited = message.reserve1Deposited.map((e) => e);
    } else {
      obj.reserve1_deposited = message.reserve1Deposited;
    }
    if (message.failedDeposits) {
      obj.failed_deposits = message.failedDeposits.map((e) => (e ? FailedDeposit.toAmino(e) : undefined));
    } else {
      obj.failed_deposits = message.failedDeposits;
    }
    if (message.sharesIssued) {
      obj.shares_issued = message.sharesIssued.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.shares_issued = message.sharesIssued;
    }
    return obj;
  },
  fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse {
    return MsgDepositResponse.fromAmino(object.value);
  },
};
function createBaseMsgWithdrawal(): MsgWithdrawal {
  return {
    creator: "",
    receiver: "",
    tokenA: "",
    tokenB: "",
    sharesToRemove: [],
    tickIndexesAToB: [],
    fees: [],
  };
}
export const MsgWithdrawal = {
  typeUrl: "/neutron.dex.MsgWithdrawal",
  encode(message: MsgWithdrawal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.tokenA !== "") {
      writer.uint32(26).string(message.tokenA);
    }
    if (message.tokenB !== "") {
      writer.uint32(34).string(message.tokenB);
    }
    for (const v of message.sharesToRemove) {
      writer.uint32(42).string(v!);
    }
    writer.uint32(50).fork();
    for (const v of message.tickIndexesAToB) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.fees) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.tokenA = reader.string();
          break;
        case 4:
          message.tokenB = reader.string();
          break;
        case 5:
          message.sharesToRemove.push(reader.string());
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tickIndexesAToB.push(reader.int64());
            }
          } else {
            message.tickIndexesAToB.push(reader.int64());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fees.push(reader.uint64());
            }
          } else {
            message.fees.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawal {
    const obj = createBaseMsgWithdrawal();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    if (isSet(object.tokenA)) obj.tokenA = String(object.tokenA);
    if (isSet(object.tokenB)) obj.tokenB = String(object.tokenB);
    if (Array.isArray(object?.sharesToRemove))
      obj.sharesToRemove = object.sharesToRemove.map((e: any) => String(e));
    if (Array.isArray(object?.tickIndexesAToB))
      obj.tickIndexesAToB = object.tickIndexesAToB.map((e: any) => BigInt(e.toString()));
    if (Array.isArray(object?.fees)) obj.fees = object.fees.map((e: any) => BigInt(e.toString()));
    return obj;
  },
  toJSON(message: MsgWithdrawal): JsonSafe<MsgWithdrawal> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.tokenA !== undefined && (obj.tokenA = message.tokenA);
    message.tokenB !== undefined && (obj.tokenB = message.tokenB);
    if (message.sharesToRemove) {
      obj.sharesToRemove = message.sharesToRemove.map((e) => e);
    } else {
      obj.sharesToRemove = [];
    }
    if (message.tickIndexesAToB) {
      obj.tickIndexesAToB = message.tickIndexesAToB.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.tickIndexesAToB = [];
    }
    if (message.fees) {
      obj.fees = message.fees.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.fees = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawal>, I>>(object: I): MsgWithdrawal {
    const message = createBaseMsgWithdrawal();
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    message.tokenA = object.tokenA ?? "";
    message.tokenB = object.tokenB ?? "";
    message.sharesToRemove = object.sharesToRemove?.map((e) => e) || [];
    message.tickIndexesAToB = object.tickIndexesAToB?.map((e) => BigInt(e.toString())) || [];
    message.fees = object.fees?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgWithdrawalAmino): MsgWithdrawal {
    const message = createBaseMsgWithdrawal();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.token_a !== undefined && object.token_a !== null) {
      message.tokenA = object.token_a;
    }
    if (object.token_b !== undefined && object.token_b !== null) {
      message.tokenB = object.token_b;
    }
    message.sharesToRemove = object.shares_to_remove?.map((e) => e) || [];
    message.tickIndexesAToB = object.tick_indexes_a_to_b?.map((e) => BigInt(e)) || [];
    message.fees = object.fees?.map((e) => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgWithdrawal): MsgWithdrawalAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.token_a = message.tokenA === "" ? undefined : message.tokenA;
    obj.token_b = message.tokenB === "" ? undefined : message.tokenB;
    if (message.sharesToRemove) {
      obj.shares_to_remove = message.sharesToRemove.map((e) => e);
    } else {
      obj.shares_to_remove = message.sharesToRemove;
    }
    if (message.tickIndexesAToB) {
      obj.tick_indexes_a_to_b = message.tickIndexesAToB.map((e) => e.toString());
    } else {
      obj.tick_indexes_a_to_b = message.tickIndexesAToB;
    }
    if (message.fees) {
      obj.fees = message.fees.map((e) => e.toString());
    } else {
      obj.fees = message.fees;
    }
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawalAminoMsg): MsgWithdrawal {
    return MsgWithdrawal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawal): MsgWithdrawalAminoMsg {
    return {
      type: "dex/MsgWithdrawal",
      value: MsgWithdrawal.toAmino(message),
    };
  },
};
function createBaseMsgWithdrawalResponse(): MsgWithdrawalResponse {
  return {
    reserve0Withdrawn: "",
    reserve1Withdrawn: "",
    sharesBurned: [],
  };
}
export const MsgWithdrawalResponse = {
  typeUrl: "/neutron.dex.MsgWithdrawalResponse",
  encode(message: MsgWithdrawalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reserve0Withdrawn !== "") {
      writer.uint32(10).string(message.reserve0Withdrawn);
    }
    if (message.reserve1Withdrawn !== "") {
      writer.uint32(18).string(message.reserve1Withdrawn);
    }
    for (const v of message.sharesBurned) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserve0Withdrawn = reader.string();
          break;
        case 2:
          message.reserve1Withdrawn = reader.string();
          break;
        case 3:
          message.sharesBurned.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawalResponse {
    const obj = createBaseMsgWithdrawalResponse();
    if (isSet(object.reserve0Withdrawn)) obj.reserve0Withdrawn = String(object.reserve0Withdrawn);
    if (isSet(object.reserve1Withdrawn)) obj.reserve1Withdrawn = String(object.reserve1Withdrawn);
    if (Array.isArray(object?.sharesBurned))
      obj.sharesBurned = object.sharesBurned.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgWithdrawalResponse): JsonSafe<MsgWithdrawalResponse> {
    const obj: any = {};
    message.reserve0Withdrawn !== undefined && (obj.reserve0Withdrawn = message.reserve0Withdrawn);
    message.reserve1Withdrawn !== undefined && (obj.reserve1Withdrawn = message.reserve1Withdrawn);
    if (message.sharesBurned) {
      obj.sharesBurned = message.sharesBurned.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.sharesBurned = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawalResponse>, I>>(object: I): MsgWithdrawalResponse {
    const message = createBaseMsgWithdrawalResponse();
    message.reserve0Withdrawn = object.reserve0Withdrawn ?? "";
    message.reserve1Withdrawn = object.reserve1Withdrawn ?? "";
    message.sharesBurned = object.sharesBurned?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgWithdrawalResponseAmino): MsgWithdrawalResponse {
    const message = createBaseMsgWithdrawalResponse();
    if (object.reserve0_withdrawn !== undefined && object.reserve0_withdrawn !== null) {
      message.reserve0Withdrawn = object.reserve0_withdrawn;
    }
    if (object.reserve1_withdrawn !== undefined && object.reserve1_withdrawn !== null) {
      message.reserve1Withdrawn = object.reserve1_withdrawn;
    }
    message.sharesBurned = object.shares_burned?.map((e) => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgWithdrawalResponse): MsgWithdrawalResponseAmino {
    const obj: any = {};
    obj.reserve0_withdrawn = message.reserve0Withdrawn ?? "";
    obj.reserve1_withdrawn = message.reserve1Withdrawn ?? "";
    if (message.sharesBurned) {
      obj.shares_burned = message.sharesBurned.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.shares_burned = message.sharesBurned;
    }
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawalResponseAminoMsg): MsgWithdrawalResponse {
    return MsgWithdrawalResponse.fromAmino(object.value);
  },
};
function createBaseMsgPlaceLimitOrder(): MsgPlaceLimitOrder {
  return {
    creator: "",
    receiver: "",
    tokenIn: "",
    tokenOut: "",
    tickIndexInToOut: BigInt(0),
    amountIn: "",
    orderType: 0,
    expirationTime: undefined,
    maxAmountOut: undefined,
    limitSellPrice: undefined,
    minAverageSellPrice: undefined,
  };
}
export const MsgPlaceLimitOrder = {
  typeUrl: "/neutron.dex.MsgPlaceLimitOrder",
  encode(message: MsgPlaceLimitOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    if (message.tickIndexInToOut !== BigInt(0)) {
      writer.uint32(40).int64(message.tickIndexInToOut);
    }
    if (message.amountIn !== "") {
      writer.uint32(58).string(message.amountIn);
    }
    if (message.orderType !== 0) {
      writer.uint32(64).int32(message.orderType);
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(74).fork()).ldelim();
    }
    if (message.maxAmountOut !== undefined) {
      writer.uint32(82).string(message.maxAmountOut);
    }
    if (message.limitSellPrice !== undefined) {
      writer.uint32(90).string(message.limitSellPrice);
    }
    if (message.minAverageSellPrice !== undefined) {
      writer.uint32(98).string(message.minAverageSellPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPlaceLimitOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceLimitOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        case 5:
          message.tickIndexInToOut = reader.int64();
          break;
        case 7:
          message.amountIn = reader.string();
          break;
        case 8:
          message.orderType = reader.int32() as any;
          break;
        case 9:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 10:
          message.maxAmountOut = reader.string();
          break;
        case 11:
          message.limitSellPrice = reader.string();
          break;
        case 12:
          message.minAverageSellPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPlaceLimitOrder {
    const obj = createBaseMsgPlaceLimitOrder();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    if (isSet(object.tokenIn)) obj.tokenIn = String(object.tokenIn);
    if (isSet(object.tokenOut)) obj.tokenOut = String(object.tokenOut);
    if (isSet(object.tickIndexInToOut)) obj.tickIndexInToOut = BigInt(object.tickIndexInToOut.toString());
    if (isSet(object.amountIn)) obj.amountIn = String(object.amountIn);
    if (isSet(object.orderType)) obj.orderType = limitOrderTypeFromJSON(object.orderType);
    if (isSet(object.expirationTime)) obj.expirationTime = fromJsonTimestamp(object.expirationTime);
    if (isSet(object.maxAmountOut)) obj.maxAmountOut = String(object.maxAmountOut);
    if (isSet(object.limitSellPrice)) obj.limitSellPrice = String(object.limitSellPrice);
    if (isSet(object.minAverageSellPrice)) obj.minAverageSellPrice = String(object.minAverageSellPrice);
    return obj;
  },
  toJSON(message: MsgPlaceLimitOrder): JsonSafe<MsgPlaceLimitOrder> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.tickIndexInToOut !== undefined &&
      (obj.tickIndexInToOut = (message.tickIndexInToOut || BigInt(0)).toString());
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.orderType !== undefined && (obj.orderType = limitOrderTypeToJSON(message.orderType));
    message.expirationTime !== undefined &&
      (obj.expirationTime = fromTimestamp(message.expirationTime).toISOString());
    message.maxAmountOut !== undefined && (obj.maxAmountOut = message.maxAmountOut);
    message.limitSellPrice !== undefined && (obj.limitSellPrice = message.limitSellPrice);
    message.minAverageSellPrice !== undefined && (obj.minAverageSellPrice = message.minAverageSellPrice);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPlaceLimitOrder>, I>>(object: I): MsgPlaceLimitOrder {
    const message = createBaseMsgPlaceLimitOrder();
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    if (object.tickIndexInToOut !== undefined && object.tickIndexInToOut !== null) {
      message.tickIndexInToOut = BigInt(object.tickIndexInToOut.toString());
    }
    message.amountIn = object.amountIn ?? "";
    message.orderType = object.orderType ?? 0;
    if (object.expirationTime !== undefined && object.expirationTime !== null) {
      message.expirationTime = Timestamp.fromPartial(object.expirationTime);
    }
    message.maxAmountOut = object.maxAmountOut ?? undefined;
    message.limitSellPrice = object.limitSellPrice ?? undefined;
    message.minAverageSellPrice = object.minAverageSellPrice ?? undefined;
    return message;
  },
  fromAmino(object: MsgPlaceLimitOrderAmino): MsgPlaceLimitOrder {
    const message = createBaseMsgPlaceLimitOrder();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.tick_index_in_to_out !== undefined && object.tick_index_in_to_out !== null) {
      message.tickIndexInToOut = BigInt(object.tick_index_in_to_out);
    }
    if (object.amount_in !== undefined && object.amount_in !== null) {
      message.amountIn = object.amount_in;
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = Timestamp.fromAmino(object.expiration_time);
    }
    if (object.max_amount_out !== undefined && object.max_amount_out !== null) {
      message.maxAmountOut = object.max_amount_out;
    }
    if (object.limit_sell_price !== undefined && object.limit_sell_price !== null) {
      message.limitSellPrice = object.limit_sell_price;
    }
    if (object.min_average_sell_price !== undefined && object.min_average_sell_price !== null) {
      message.minAverageSellPrice = object.min_average_sell_price;
    }
    return message;
  },
  toAmino(message: MsgPlaceLimitOrder): MsgPlaceLimitOrderAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.tick_index_in_to_out =
      message.tickIndexInToOut !== BigInt(0) ? message.tickIndexInToOut?.toString() : undefined;
    obj.amount_in = message.amountIn ?? "";
    obj.order_type = message.orderType === 0 ? undefined : message.orderType;
    obj.expiration_time = message.expirationTime ? Timestamp.toAmino(message.expirationTime) : undefined;
    obj.max_amount_out = message.maxAmountOut ?? null;
    obj.limit_sell_price = message.limitSellPrice ?? null;
    obj.min_average_sell_price = message.minAverageSellPrice ?? null;
    return obj;
  },
  fromAminoMsg(object: MsgPlaceLimitOrderAminoMsg): MsgPlaceLimitOrder {
    return MsgPlaceLimitOrder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPlaceLimitOrder): MsgPlaceLimitOrderAminoMsg {
    return {
      type: "dex/MsgPlaceLimitOrder",
      value: MsgPlaceLimitOrder.toAmino(message),
    };
  },
};
function createBaseMsgPlaceLimitOrderResponse(): MsgPlaceLimitOrderResponse {
  return {
    trancheKey: "",
    coinIn: Coin.fromPartial({}),
    takerCoinOut: Coin.fromPartial({}),
    takerCoinIn: Coin.fromPartial({}),
  };
}
export const MsgPlaceLimitOrderResponse = {
  typeUrl: "/neutron.dex.MsgPlaceLimitOrderResponse",
  encode(message: MsgPlaceLimitOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.trancheKey !== "") {
      writer.uint32(10).string(message.trancheKey);
    }
    if (message.coinIn !== undefined) {
      Coin.encode(message.coinIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.takerCoinOut !== undefined) {
      Coin.encode(message.takerCoinOut, writer.uint32(26).fork()).ldelim();
    }
    if (message.takerCoinIn !== undefined) {
      Coin.encode(message.takerCoinIn, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPlaceLimitOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceLimitOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trancheKey = reader.string();
          break;
        case 2:
          message.coinIn = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.takerCoinOut = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.takerCoinIn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPlaceLimitOrderResponse {
    const obj = createBaseMsgPlaceLimitOrderResponse();
    if (isSet(object.trancheKey)) obj.trancheKey = String(object.trancheKey);
    if (isSet(object.coinIn)) obj.coinIn = Coin.fromJSON(object.coinIn);
    if (isSet(object.takerCoinOut)) obj.takerCoinOut = Coin.fromJSON(object.takerCoinOut);
    if (isSet(object.takerCoinIn)) obj.takerCoinIn = Coin.fromJSON(object.takerCoinIn);
    return obj;
  },
  toJSON(message: MsgPlaceLimitOrderResponse): JsonSafe<MsgPlaceLimitOrderResponse> {
    const obj: any = {};
    message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
    message.coinIn !== undefined && (obj.coinIn = message.coinIn ? Coin.toJSON(message.coinIn) : undefined);
    message.takerCoinOut !== undefined &&
      (obj.takerCoinOut = message.takerCoinOut ? Coin.toJSON(message.takerCoinOut) : undefined);
    message.takerCoinIn !== undefined &&
      (obj.takerCoinIn = message.takerCoinIn ? Coin.toJSON(message.takerCoinIn) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPlaceLimitOrderResponse>, I>>(
    object: I,
  ): MsgPlaceLimitOrderResponse {
    const message = createBaseMsgPlaceLimitOrderResponse();
    message.trancheKey = object.trancheKey ?? "";
    if (object.coinIn !== undefined && object.coinIn !== null) {
      message.coinIn = Coin.fromPartial(object.coinIn);
    }
    if (object.takerCoinOut !== undefined && object.takerCoinOut !== null) {
      message.takerCoinOut = Coin.fromPartial(object.takerCoinOut);
    }
    if (object.takerCoinIn !== undefined && object.takerCoinIn !== null) {
      message.takerCoinIn = Coin.fromPartial(object.takerCoinIn);
    }
    return message;
  },
  fromAmino(object: MsgPlaceLimitOrderResponseAmino): MsgPlaceLimitOrderResponse {
    const message = createBaseMsgPlaceLimitOrderResponse();
    if (object.trancheKey !== undefined && object.trancheKey !== null) {
      message.trancheKey = object.trancheKey;
    }
    if (object.coin_in !== undefined && object.coin_in !== null) {
      message.coinIn = Coin.fromAmino(object.coin_in);
    }
    if (object.taker_coin_out !== undefined && object.taker_coin_out !== null) {
      message.takerCoinOut = Coin.fromAmino(object.taker_coin_out);
    }
    if (object.taker_coin_in !== undefined && object.taker_coin_in !== null) {
      message.takerCoinIn = Coin.fromAmino(object.taker_coin_in);
    }
    return message;
  },
  toAmino(message: MsgPlaceLimitOrderResponse): MsgPlaceLimitOrderResponseAmino {
    const obj: any = {};
    obj.trancheKey = message.trancheKey === "" ? undefined : message.trancheKey;
    obj.coin_in = message.coinIn ? Coin.toAmino(message.coinIn) : Coin.toAmino(Coin.fromPartial({}));
    obj.taker_coin_out = message.takerCoinOut
      ? Coin.toAmino(message.takerCoinOut)
      : Coin.toAmino(Coin.fromPartial({}));
    obj.taker_coin_in = message.takerCoinIn
      ? Coin.toAmino(message.takerCoinIn)
      : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgPlaceLimitOrderResponseAminoMsg): MsgPlaceLimitOrderResponse {
    return MsgPlaceLimitOrderResponse.fromAmino(object.value);
  },
};
function createBaseMsgWithdrawFilledLimitOrder(): MsgWithdrawFilledLimitOrder {
  return {
    creator: "",
    trancheKey: "",
  };
}
export const MsgWithdrawFilledLimitOrder = {
  typeUrl: "/neutron.dex.MsgWithdrawFilledLimitOrder",
  encode(message: MsgWithdrawFilledLimitOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.trancheKey !== "") {
      writer.uint32(18).string(message.trancheKey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawFilledLimitOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFilledLimitOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.trancheKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawFilledLimitOrder {
    const obj = createBaseMsgWithdrawFilledLimitOrder();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.trancheKey)) obj.trancheKey = String(object.trancheKey);
    return obj;
  },
  toJSON(message: MsgWithdrawFilledLimitOrder): JsonSafe<MsgWithdrawFilledLimitOrder> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawFilledLimitOrder>, I>>(
    object: I,
  ): MsgWithdrawFilledLimitOrder {
    const message = createBaseMsgWithdrawFilledLimitOrder();
    message.creator = object.creator ?? "";
    message.trancheKey = object.trancheKey ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawFilledLimitOrderAmino): MsgWithdrawFilledLimitOrder {
    const message = createBaseMsgWithdrawFilledLimitOrder();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.tranche_key !== undefined && object.tranche_key !== null) {
      message.trancheKey = object.tranche_key;
    }
    return message;
  },
  toAmino(message: MsgWithdrawFilledLimitOrder): MsgWithdrawFilledLimitOrderAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.tranche_key = message.trancheKey === "" ? undefined : message.trancheKey;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawFilledLimitOrderAminoMsg): MsgWithdrawFilledLimitOrder {
    return MsgWithdrawFilledLimitOrder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawFilledLimitOrder): MsgWithdrawFilledLimitOrderAminoMsg {
    return {
      type: "dex/MsgWithdrawFilledLimitOrder",
      value: MsgWithdrawFilledLimitOrder.toAmino(message),
    };
  },
};
function createBaseMsgWithdrawFilledLimitOrderResponse(): MsgWithdrawFilledLimitOrderResponse {
  return {
    takerCoinOut: Coin.fromPartial({}),
    makerCoinOut: Coin.fromPartial({}),
  };
}
export const MsgWithdrawFilledLimitOrderResponse = {
  typeUrl: "/neutron.dex.MsgWithdrawFilledLimitOrderResponse",
  encode(
    message: MsgWithdrawFilledLimitOrderResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.takerCoinOut !== undefined) {
      Coin.encode(message.takerCoinOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.makerCoinOut !== undefined) {
      Coin.encode(message.makerCoinOut, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawFilledLimitOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFilledLimitOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.takerCoinOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.makerCoinOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawFilledLimitOrderResponse {
    const obj = createBaseMsgWithdrawFilledLimitOrderResponse();
    if (isSet(object.takerCoinOut)) obj.takerCoinOut = Coin.fromJSON(object.takerCoinOut);
    if (isSet(object.makerCoinOut)) obj.makerCoinOut = Coin.fromJSON(object.makerCoinOut);
    return obj;
  },
  toJSON(message: MsgWithdrawFilledLimitOrderResponse): JsonSafe<MsgWithdrawFilledLimitOrderResponse> {
    const obj: any = {};
    message.takerCoinOut !== undefined &&
      (obj.takerCoinOut = message.takerCoinOut ? Coin.toJSON(message.takerCoinOut) : undefined);
    message.makerCoinOut !== undefined &&
      (obj.makerCoinOut = message.makerCoinOut ? Coin.toJSON(message.makerCoinOut) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawFilledLimitOrderResponse>, I>>(
    object: I,
  ): MsgWithdrawFilledLimitOrderResponse {
    const message = createBaseMsgWithdrawFilledLimitOrderResponse();
    if (object.takerCoinOut !== undefined && object.takerCoinOut !== null) {
      message.takerCoinOut = Coin.fromPartial(object.takerCoinOut);
    }
    if (object.makerCoinOut !== undefined && object.makerCoinOut !== null) {
      message.makerCoinOut = Coin.fromPartial(object.makerCoinOut);
    }
    return message;
  },
  fromAmino(object: MsgWithdrawFilledLimitOrderResponseAmino): MsgWithdrawFilledLimitOrderResponse {
    const message = createBaseMsgWithdrawFilledLimitOrderResponse();
    if (object.taker_coin_out !== undefined && object.taker_coin_out !== null) {
      message.takerCoinOut = Coin.fromAmino(object.taker_coin_out);
    }
    if (object.maker_coin_out !== undefined && object.maker_coin_out !== null) {
      message.makerCoinOut = Coin.fromAmino(object.maker_coin_out);
    }
    return message;
  },
  toAmino(message: MsgWithdrawFilledLimitOrderResponse): MsgWithdrawFilledLimitOrderResponseAmino {
    const obj: any = {};
    obj.taker_coin_out = message.takerCoinOut
      ? Coin.toAmino(message.takerCoinOut)
      : Coin.toAmino(Coin.fromPartial({}));
    obj.maker_coin_out = message.makerCoinOut
      ? Coin.toAmino(message.makerCoinOut)
      : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawFilledLimitOrderResponseAminoMsg): MsgWithdrawFilledLimitOrderResponse {
    return MsgWithdrawFilledLimitOrderResponse.fromAmino(object.value);
  },
};
function createBaseMsgCancelLimitOrder(): MsgCancelLimitOrder {
  return {
    creator: "",
    trancheKey: "",
  };
}
export const MsgCancelLimitOrder = {
  typeUrl: "/neutron.dex.MsgCancelLimitOrder",
  encode(message: MsgCancelLimitOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.trancheKey !== "") {
      writer.uint32(18).string(message.trancheKey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelLimitOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelLimitOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.trancheKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelLimitOrder {
    const obj = createBaseMsgCancelLimitOrder();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.trancheKey)) obj.trancheKey = String(object.trancheKey);
    return obj;
  },
  toJSON(message: MsgCancelLimitOrder): JsonSafe<MsgCancelLimitOrder> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelLimitOrder>, I>>(object: I): MsgCancelLimitOrder {
    const message = createBaseMsgCancelLimitOrder();
    message.creator = object.creator ?? "";
    message.trancheKey = object.trancheKey ?? "";
    return message;
  },
  fromAmino(object: MsgCancelLimitOrderAmino): MsgCancelLimitOrder {
    const message = createBaseMsgCancelLimitOrder();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.tranche_key !== undefined && object.tranche_key !== null) {
      message.trancheKey = object.tranche_key;
    }
    return message;
  },
  toAmino(message: MsgCancelLimitOrder): MsgCancelLimitOrderAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.tranche_key = message.trancheKey === "" ? undefined : message.trancheKey;
    return obj;
  },
  fromAminoMsg(object: MsgCancelLimitOrderAminoMsg): MsgCancelLimitOrder {
    return MsgCancelLimitOrder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelLimitOrder): MsgCancelLimitOrderAminoMsg {
    return {
      type: "dex/MsgCancelLimitOrder",
      value: MsgCancelLimitOrder.toAmino(message),
    };
  },
};
function createBaseMsgCancelLimitOrderResponse(): MsgCancelLimitOrderResponse {
  return {
    takerCoinOut: Coin.fromPartial({}),
    makerCoinOut: Coin.fromPartial({}),
  };
}
export const MsgCancelLimitOrderResponse = {
  typeUrl: "/neutron.dex.MsgCancelLimitOrderResponse",
  encode(message: MsgCancelLimitOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.takerCoinOut !== undefined) {
      Coin.encode(message.takerCoinOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.makerCoinOut !== undefined) {
      Coin.encode(message.makerCoinOut, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelLimitOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelLimitOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.takerCoinOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.makerCoinOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelLimitOrderResponse {
    const obj = createBaseMsgCancelLimitOrderResponse();
    if (isSet(object.takerCoinOut)) obj.takerCoinOut = Coin.fromJSON(object.takerCoinOut);
    if (isSet(object.makerCoinOut)) obj.makerCoinOut = Coin.fromJSON(object.makerCoinOut);
    return obj;
  },
  toJSON(message: MsgCancelLimitOrderResponse): JsonSafe<MsgCancelLimitOrderResponse> {
    const obj: any = {};
    message.takerCoinOut !== undefined &&
      (obj.takerCoinOut = message.takerCoinOut ? Coin.toJSON(message.takerCoinOut) : undefined);
    message.makerCoinOut !== undefined &&
      (obj.makerCoinOut = message.makerCoinOut ? Coin.toJSON(message.makerCoinOut) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelLimitOrderResponse>, I>>(
    object: I,
  ): MsgCancelLimitOrderResponse {
    const message = createBaseMsgCancelLimitOrderResponse();
    if (object.takerCoinOut !== undefined && object.takerCoinOut !== null) {
      message.takerCoinOut = Coin.fromPartial(object.takerCoinOut);
    }
    if (object.makerCoinOut !== undefined && object.makerCoinOut !== null) {
      message.makerCoinOut = Coin.fromPartial(object.makerCoinOut);
    }
    return message;
  },
  fromAmino(object: MsgCancelLimitOrderResponseAmino): MsgCancelLimitOrderResponse {
    const message = createBaseMsgCancelLimitOrderResponse();
    if (object.taker_coin_out !== undefined && object.taker_coin_out !== null) {
      message.takerCoinOut = Coin.fromAmino(object.taker_coin_out);
    }
    if (object.maker_coin_out !== undefined && object.maker_coin_out !== null) {
      message.makerCoinOut = Coin.fromAmino(object.maker_coin_out);
    }
    return message;
  },
  toAmino(message: MsgCancelLimitOrderResponse): MsgCancelLimitOrderResponseAmino {
    const obj: any = {};
    obj.taker_coin_out = message.takerCoinOut
      ? Coin.toAmino(message.takerCoinOut)
      : Coin.toAmino(Coin.fromPartial({}));
    obj.maker_coin_out = message.makerCoinOut
      ? Coin.toAmino(message.makerCoinOut)
      : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgCancelLimitOrderResponseAminoMsg): MsgCancelLimitOrderResponse {
    return MsgCancelLimitOrderResponse.fromAmino(object.value);
  },
};
function createBaseMultiHopRoute(): MultiHopRoute {
  return {
    hops: [],
  };
}
export const MultiHopRoute = {
  typeUrl: "/neutron.dex.MultiHopRoute",
  encode(message: MultiHopRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.hops) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MultiHopRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiHopRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hops.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MultiHopRoute {
    const obj = createBaseMultiHopRoute();
    if (Array.isArray(object?.hops)) obj.hops = object.hops.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: MultiHopRoute): JsonSafe<MultiHopRoute> {
    const obj: any = {};
    if (message.hops) {
      obj.hops = message.hops.map((e) => e);
    } else {
      obj.hops = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MultiHopRoute>, I>>(object: I): MultiHopRoute {
    const message = createBaseMultiHopRoute();
    message.hops = object.hops?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: MultiHopRouteAmino): MultiHopRoute {
    const message = createBaseMultiHopRoute();
    message.hops = object.hops?.map((e) => e) || [];
    return message;
  },
  toAmino(message: MultiHopRoute): MultiHopRouteAmino {
    const obj: any = {};
    if (message.hops) {
      obj.hops = message.hops.map((e) => e);
    } else {
      obj.hops = message.hops;
    }
    return obj;
  },
  fromAminoMsg(object: MultiHopRouteAminoMsg): MultiHopRoute {
    return MultiHopRoute.fromAmino(object.value);
  },
};
function createBaseMsgMultiHopSwap(): MsgMultiHopSwap {
  return {
    creator: "",
    receiver: "",
    routes: [],
    amountIn: "",
    exitLimitPrice: "",
    pickBestRoute: false,
  };
}
export const MsgMultiHopSwap = {
  typeUrl: "/neutron.dex.MsgMultiHopSwap",
  encode(message: MsgMultiHopSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    for (const v of message.routes) {
      MultiHopRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.amountIn !== "") {
      writer.uint32(34).string(message.amountIn);
    }
    if (message.exitLimitPrice !== "") {
      writer.uint32(42).string(message.exitLimitPrice);
    }
    if (message.pickBestRoute === true) {
      writer.uint32(48).bool(message.pickBestRoute);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMultiHopSwap {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiHopSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.routes.push(MultiHopRoute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.amountIn = reader.string();
          break;
        case 5:
          message.exitLimitPrice = reader.string();
          break;
        case 6:
          message.pickBestRoute = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMultiHopSwap {
    const obj = createBaseMsgMultiHopSwap();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    if (Array.isArray(object?.routes)) obj.routes = object.routes.map((e: any) => MultiHopRoute.fromJSON(e));
    if (isSet(object.amountIn)) obj.amountIn = String(object.amountIn);
    if (isSet(object.exitLimitPrice)) obj.exitLimitPrice = String(object.exitLimitPrice);
    if (isSet(object.pickBestRoute)) obj.pickBestRoute = Boolean(object.pickBestRoute);
    return obj;
  },
  toJSON(message: MsgMultiHopSwap): JsonSafe<MsgMultiHopSwap> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    if (message.routes) {
      obj.routes = message.routes.map((e) => (e ? MultiHopRoute.toJSON(e) : undefined));
    } else {
      obj.routes = [];
    }
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.exitLimitPrice !== undefined && (obj.exitLimitPrice = message.exitLimitPrice);
    message.pickBestRoute !== undefined && (obj.pickBestRoute = message.pickBestRoute);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMultiHopSwap>, I>>(object: I): MsgMultiHopSwap {
    const message = createBaseMsgMultiHopSwap();
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    message.routes = object.routes?.map((e) => MultiHopRoute.fromPartial(e)) || [];
    message.amountIn = object.amountIn ?? "";
    message.exitLimitPrice = object.exitLimitPrice ?? "";
    message.pickBestRoute = object.pickBestRoute ?? false;
    return message;
  },
  fromAmino(object: MsgMultiHopSwapAmino): MsgMultiHopSwap {
    const message = createBaseMsgMultiHopSwap();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    message.routes = object.routes?.map((e) => MultiHopRoute.fromAmino(e)) || [];
    if (object.amount_in !== undefined && object.amount_in !== null) {
      message.amountIn = object.amount_in;
    }
    if (object.exit_limit_price !== undefined && object.exit_limit_price !== null) {
      message.exitLimitPrice = object.exit_limit_price;
    }
    if (object.pick_best_route !== undefined && object.pick_best_route !== null) {
      message.pickBestRoute = object.pick_best_route;
    }
    return message;
  },
  toAmino(message: MsgMultiHopSwap): MsgMultiHopSwapAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    if (message.routes) {
      obj.routes = message.routes.map((e) => (e ? MultiHopRoute.toAmino(e) : undefined));
    } else {
      obj.routes = message.routes;
    }
    obj.amount_in = message.amountIn ?? "";
    obj.exit_limit_price = message.exitLimitPrice ?? "";
    obj.pick_best_route = message.pickBestRoute === false ? undefined : message.pickBestRoute;
    return obj;
  },
  fromAminoMsg(object: MsgMultiHopSwapAminoMsg): MsgMultiHopSwap {
    return MsgMultiHopSwap.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMultiHopSwap): MsgMultiHopSwapAminoMsg {
    return {
      type: "dex/MsgMultiHopSwap",
      value: MsgMultiHopSwap.toAmino(message),
    };
  },
};
function createBaseMsgMultiHopSwapResponse(): MsgMultiHopSwapResponse {
  return {
    coinOut: Coin.fromPartial({}),
    route: undefined,
    dust: [],
  };
}
export const MsgMultiHopSwapResponse = {
  typeUrl: "/neutron.dex.MsgMultiHopSwapResponse",
  encode(message: MsgMultiHopSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.coinOut !== undefined) {
      Coin.encode(message.coinOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.route !== undefined) {
      MultiHopRoute.encode(message.route, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.dust) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMultiHopSwapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiHopSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coinOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.route = MultiHopRoute.decode(reader, reader.uint32());
          break;
        case 3:
          message.dust.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMultiHopSwapResponse {
    const obj = createBaseMsgMultiHopSwapResponse();
    if (isSet(object.coinOut)) obj.coinOut = Coin.fromJSON(object.coinOut);
    if (isSet(object.route)) obj.route = MultiHopRoute.fromJSON(object.route);
    if (Array.isArray(object?.dust)) obj.dust = object.dust.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgMultiHopSwapResponse): JsonSafe<MsgMultiHopSwapResponse> {
    const obj: any = {};
    message.coinOut !== undefined &&
      (obj.coinOut = message.coinOut ? Coin.toJSON(message.coinOut) : undefined);
    message.route !== undefined &&
      (obj.route = message.route ? MultiHopRoute.toJSON(message.route) : undefined);
    if (message.dust) {
      obj.dust = message.dust.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.dust = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMultiHopSwapResponse>, I>>(object: I): MsgMultiHopSwapResponse {
    const message = createBaseMsgMultiHopSwapResponse();
    if (object.coinOut !== undefined && object.coinOut !== null) {
      message.coinOut = Coin.fromPartial(object.coinOut);
    }
    if (object.route !== undefined && object.route !== null) {
      message.route = MultiHopRoute.fromPartial(object.route);
    }
    message.dust = object.dust?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgMultiHopSwapResponseAmino): MsgMultiHopSwapResponse {
    const message = createBaseMsgMultiHopSwapResponse();
    if (object.coin_out !== undefined && object.coin_out !== null) {
      message.coinOut = Coin.fromAmino(object.coin_out);
    }
    if (object.route !== undefined && object.route !== null) {
      message.route = MultiHopRoute.fromAmino(object.route);
    }
    message.dust = object.dust?.map((e) => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgMultiHopSwapResponse): MsgMultiHopSwapResponseAmino {
    const obj: any = {};
    obj.coin_out = message.coinOut ? Coin.toAmino(message.coinOut) : Coin.toAmino(Coin.fromPartial({}));
    obj.route = message.route ? MultiHopRoute.toAmino(message.route) : undefined;
    if (message.dust) {
      obj.dust = message.dust.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.dust = message.dust;
    }
    return obj;
  },
  fromAminoMsg(object: MsgMultiHopSwapResponseAminoMsg): MsgMultiHopSwapResponse {
    return MsgMultiHopSwapResponse.fromAmino(object.value);
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/neutron.dex.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    const obj = createBaseMsgUpdateParams();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "dex/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message),
    };
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/neutron.dex.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    const obj = createBaseMsgUpdateParamsResponse();
    return obj;
  },
  toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
};
