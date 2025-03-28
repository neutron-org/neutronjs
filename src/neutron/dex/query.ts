/* eslint-disable */
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import {
  MultiHopRoute,
  LimitOrderType,
  MsgDeposit,
  MsgWithdrawal,
  MsgPlaceLimitOrder,
  MsgWithdrawFilledLimitOrder,
  MsgCancelLimitOrder,
  MsgMultiHopSwap,
  MsgDepositResponse,
  MsgWithdrawalResponse,
  MsgPlaceLimitOrderResponse,
  MsgWithdrawFilledLimitOrderResponse,
  MsgCancelLimitOrderResponse,
  MsgMultiHopSwapResponse,
  limitOrderTypeFromJSON,
  limitOrderTypeToJSON,
} from "./tx";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Params } from "./params";
import { LimitOrderTrancheUser } from "./limit_order_tranche_user";
import { LimitOrderTranche } from "./limit_order_tranche";
import { DepositRecord } from "./deposit_record";
import { TickLiquidity } from "./tick_liquidity";
import { PoolReserves } from "./pool_reserves";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Pool } from "./pool";
import { PoolMetadata } from "./pool_metadata";
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, Exact, isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
export const protobufPackage = "neutron.dex";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryGetLimitOrderTrancheUserRequest {
  address: string;
  trancheKey: string;
  calcWithdrawableShares: boolean;
}
export interface QueryGetLimitOrderTrancheUserResponse {
  limitOrderTrancheUser?: LimitOrderTrancheUser;
  withdrawableShares?: string;
}
export interface QueryAllLimitOrderTrancheUserRequest {
  pagination?: PageRequest;
}
export interface QueryAllLimitOrderTrancheUserResponse {
  limitOrderTrancheUser?: LimitOrderTrancheUser[];
  pagination?: PageResponse;
}
export interface QueryGetLimitOrderTrancheRequest {
  pairId: string;
  tickIndex: bigint;
  tokenIn: string;
  trancheKey: string;
}
export interface QueryGetLimitOrderTrancheResponse {
  limitOrderTranche?: LimitOrderTranche;
}
export interface QueryAllLimitOrderTrancheRequest {
  pairId: string;
  tokenIn: string;
  pagination?: PageRequest;
}
export interface QueryAllLimitOrderTrancheResponse {
  limitOrderTranche?: LimitOrderTranche[];
  pagination?: PageResponse;
}
export interface QueryAllUserDepositsRequest {
  address: string;
  pagination?: PageRequest;
  includePoolData: boolean;
}
export interface QueryAllUserDepositsResponse {
  deposits?: DepositRecord[];
  pagination?: PageResponse;
}
export interface QueryAllLimitOrderTrancheUserByAddressRequest {
  address: string;
  pagination?: PageRequest;
}
export interface QueryAllLimitOrderTrancheUserByAddressResponse {
  limitOrders?: LimitOrderTrancheUser[];
  pagination?: PageResponse;
}
export interface QueryAllTickLiquidityRequest {
  pairId: string;
  tokenIn: string;
  pagination?: PageRequest;
}
export interface QueryAllTickLiquidityResponse {
  tickLiquidity?: TickLiquidity[];
  pagination?: PageResponse;
}
export interface QueryGetInactiveLimitOrderTrancheRequest {
  pairId: string;
  tokenIn: string;
  tickIndex: bigint;
  trancheKey: string;
}
export interface QueryGetInactiveLimitOrderTrancheResponse {
  inactiveLimitOrderTranche?: LimitOrderTranche;
}
export interface QueryAllInactiveLimitOrderTrancheRequest {
  pagination?: PageRequest;
}
export interface QueryAllInactiveLimitOrderTrancheResponse {
  inactiveLimitOrderTranche?: LimitOrderTranche[];
  pagination?: PageResponse;
}
export interface QueryAllPoolReservesRequest {
  pairId: string;
  tokenIn: string;
  pagination?: PageRequest;
}
export interface QueryAllPoolReservesResponse {
  poolReserves?: PoolReserves[];
  pagination?: PageResponse;
}
export interface QueryGetPoolReservesRequest {
  pairId: string;
  tokenIn: string;
  tickIndex: bigint;
  fee: bigint;
}
export interface QueryGetPoolReservesResponse {
  poolReserves?: PoolReserves;
}
export interface QueryEstimateMultiHopSwapRequest {
  /** DEPRECATED: Use QuerySimulateMultiHopSwap */
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
export interface QueryEstimateMultiHopSwapResponse {
  coinOut: Coin;
}
export interface QueryEstimatePlaceLimitOrderRequest {
  /** DEPRECATED: Use QuerySimulatePlaceLimitOrder */
  creator: string;
  receiver: string;
  tokenIn: string;
  tokenOut: string;
  tickIndexInToOut: bigint;
  amountIn: string;
  orderType: LimitOrderType;
  /** expirationTime is only valid iff orderType == GOOD_TIL_TIME. */
  expirationTime?: Timestamp;
  maxAmountOut?: string;
}
export interface QueryEstimatePlaceLimitOrderResponse {
  /**
   * Total amount of coin used for the limit order
   * You can derive makerLimitInCoin using the equation: totalInCoin =
   * swapInCoin + makerLimitInCoin
   */
  totalInCoin: Coin;
  /** Total amount of the token in that was immediately swapped for swapOutCoin */
  swapInCoin: Coin;
  /**
   * Total amount of coin received from the taker portion of the limit order
   * This is the amount of coin immediately available in the users account after
   * executing the limit order. It does not include any future proceeds from the
   * maker portion which will have withdrawn in the future
   */
  swapOutCoin: Coin;
}
export interface QueryPoolRequest {
  pairId: string;
  tickIndex: bigint;
  fee: bigint;
}
export interface QueryPoolByIDRequest {
  poolId: bigint;
}
export interface QueryPoolResponse {
  pool?: Pool;
}
export interface QueryGetPoolMetadataRequest {
  id: bigint;
}
export interface QueryGetPoolMetadataResponse {
  poolMetadata: PoolMetadata;
}
export interface QueryAllPoolMetadataRequest {
  pagination?: PageRequest;
}
export interface QueryAllPoolMetadataResponse {
  poolMetadata: PoolMetadata[];
  pagination?: PageResponse;
}
export interface QuerySimulateDepositRequest {
  msg?: MsgDeposit;
}
export interface QuerySimulateDepositResponse {
  resp?: MsgDepositResponse;
}
export interface QuerySimulateWithdrawalRequest {
  msg?: MsgWithdrawal;
}
export interface QuerySimulateWithdrawalResponse {
  resp?: MsgWithdrawalResponse;
}
export interface QuerySimulatePlaceLimitOrderRequest {
  msg?: MsgPlaceLimitOrder;
}
export interface QuerySimulatePlaceLimitOrderResponse {
  resp?: MsgPlaceLimitOrderResponse;
}
export interface QuerySimulateWithdrawFilledLimitOrderRequest {
  msg?: MsgWithdrawFilledLimitOrder;
}
export interface QuerySimulateWithdrawFilledLimitOrderResponse {
  resp?: MsgWithdrawFilledLimitOrderResponse;
}
export interface QuerySimulateCancelLimitOrderRequest {
  msg?: MsgCancelLimitOrder;
}
export interface QuerySimulateCancelLimitOrderResponse {
  resp?: MsgCancelLimitOrderResponse;
}
export interface QuerySimulateMultiHopSwapRequest {
  msg?: MsgMultiHopSwap;
}
export interface QuerySimulateMultiHopSwapResponse {
  resp?: MsgMultiHopSwapResponse;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/neutron.dex.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/neutron.dex.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseQueryGetLimitOrderTrancheUserRequest(): QueryGetLimitOrderTrancheUserRequest {
  return {
    address: "",
    trancheKey: "",
    calcWithdrawableShares: false,
  };
}
export const QueryGetLimitOrderTrancheUserRequest = {
  typeUrl: "/neutron.dex.QueryGetLimitOrderTrancheUserRequest",
  encode(
    message: QueryGetLimitOrderTrancheUserRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.trancheKey !== "") {
      writer.uint32(18).string(message.trancheKey);
    }
    if (message.calcWithdrawableShares === true) {
      writer.uint32(24).bool(message.calcWithdrawableShares);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetLimitOrderTrancheUserRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLimitOrderTrancheUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.trancheKey = reader.string();
          break;
        case 3:
          message.calcWithdrawableShares = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetLimitOrderTrancheUserRequest {
    const obj = createBaseQueryGetLimitOrderTrancheUserRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.trancheKey)) obj.trancheKey = String(object.trancheKey);
    if (isSet(object.calcWithdrawableShares))
      obj.calcWithdrawableShares = Boolean(object.calcWithdrawableShares);
    return obj;
  },
  toJSON(message: QueryGetLimitOrderTrancheUserRequest): JsonSafe<QueryGetLimitOrderTrancheUserRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
    message.calcWithdrawableShares !== undefined &&
      (obj.calcWithdrawableShares = message.calcWithdrawableShares);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetLimitOrderTrancheUserRequest>, I>>(
    object: I,
  ): QueryGetLimitOrderTrancheUserRequest {
    const message = createBaseQueryGetLimitOrderTrancheUserRequest();
    message.address = object.address ?? "";
    message.trancheKey = object.trancheKey ?? "";
    message.calcWithdrawableShares = object.calcWithdrawableShares ?? false;
    return message;
  },
};
function createBaseQueryGetLimitOrderTrancheUserResponse(): QueryGetLimitOrderTrancheUserResponse {
  return {
    limitOrderTrancheUser: undefined,
    withdrawableShares: undefined,
  };
}
export const QueryGetLimitOrderTrancheUserResponse = {
  typeUrl: "/neutron.dex.QueryGetLimitOrderTrancheUserResponse",
  encode(
    message: QueryGetLimitOrderTrancheUserResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.limitOrderTrancheUser !== undefined) {
      LimitOrderTrancheUser.encode(message.limitOrderTrancheUser, writer.uint32(10).fork()).ldelim();
    }
    if (message.withdrawableShares !== undefined) {
      writer.uint32(18).string(message.withdrawableShares);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetLimitOrderTrancheUserResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLimitOrderTrancheUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limitOrderTrancheUser = LimitOrderTrancheUser.decode(reader, reader.uint32());
          break;
        case 2:
          message.withdrawableShares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetLimitOrderTrancheUserResponse {
    const obj = createBaseQueryGetLimitOrderTrancheUserResponse();
    if (isSet(object.limitOrderTrancheUser))
      obj.limitOrderTrancheUser = LimitOrderTrancheUser.fromJSON(object.limitOrderTrancheUser);
    if (isSet(object.withdrawableShares)) obj.withdrawableShares = String(object.withdrawableShares);
    return obj;
  },
  toJSON(message: QueryGetLimitOrderTrancheUserResponse): JsonSafe<QueryGetLimitOrderTrancheUserResponse> {
    const obj: any = {};
    message.limitOrderTrancheUser !== undefined &&
      (obj.limitOrderTrancheUser = message.limitOrderTrancheUser
        ? LimitOrderTrancheUser.toJSON(message.limitOrderTrancheUser)
        : undefined);
    message.withdrawableShares !== undefined && (obj.withdrawableShares = message.withdrawableShares);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetLimitOrderTrancheUserResponse>, I>>(
    object: I,
  ): QueryGetLimitOrderTrancheUserResponse {
    const message = createBaseQueryGetLimitOrderTrancheUserResponse();
    if (object.limitOrderTrancheUser !== undefined && object.limitOrderTrancheUser !== null) {
      message.limitOrderTrancheUser = LimitOrderTrancheUser.fromPartial(object.limitOrderTrancheUser);
    }
    message.withdrawableShares = object.withdrawableShares ?? undefined;
    return message;
  },
};
function createBaseQueryAllLimitOrderTrancheUserRequest(): QueryAllLimitOrderTrancheUserRequest {
  return {
    pagination: undefined,
  };
}
export const QueryAllLimitOrderTrancheUserRequest = {
  typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheUserRequest",
  encode(
    message: QueryAllLimitOrderTrancheUserRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllLimitOrderTrancheUserRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLimitOrderTrancheUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllLimitOrderTrancheUserRequest {
    const obj = createBaseQueryAllLimitOrderTrancheUserRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllLimitOrderTrancheUserRequest): JsonSafe<QueryAllLimitOrderTrancheUserRequest> {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllLimitOrderTrancheUserRequest>, I>>(
    object: I,
  ): QueryAllLimitOrderTrancheUserRequest {
    const message = createBaseQueryAllLimitOrderTrancheUserRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAllLimitOrderTrancheUserResponse(): QueryAllLimitOrderTrancheUserResponse {
  return {
    limitOrderTrancheUser: [],
    pagination: undefined,
  };
}
export const QueryAllLimitOrderTrancheUserResponse = {
  typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheUserResponse",
  encode(
    message: QueryAllLimitOrderTrancheUserResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.limitOrderTrancheUser) {
      LimitOrderTrancheUser.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllLimitOrderTrancheUserResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLimitOrderTrancheUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limitOrderTrancheUser.push(LimitOrderTrancheUser.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllLimitOrderTrancheUserResponse {
    const obj = createBaseQueryAllLimitOrderTrancheUserResponse();
    if (Array.isArray(object?.limitOrderTrancheUser))
      obj.limitOrderTrancheUser = object.limitOrderTrancheUser.map((e: any) =>
        LimitOrderTrancheUser.fromJSON(e),
      );
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllLimitOrderTrancheUserResponse): JsonSafe<QueryAllLimitOrderTrancheUserResponse> {
    const obj: any = {};
    if (message.limitOrderTrancheUser) {
      obj.limitOrderTrancheUser = message.limitOrderTrancheUser.map((e) =>
        e ? LimitOrderTrancheUser.toJSON(e) : undefined,
      );
    } else {
      obj.limitOrderTrancheUser = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllLimitOrderTrancheUserResponse>, I>>(
    object: I,
  ): QueryAllLimitOrderTrancheUserResponse {
    const message = createBaseQueryAllLimitOrderTrancheUserResponse();
    message.limitOrderTrancheUser =
      object.limitOrderTrancheUser?.map((e) => LimitOrderTrancheUser.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryGetLimitOrderTrancheRequest(): QueryGetLimitOrderTrancheRequest {
  return {
    pairId: "",
    tickIndex: BigInt(0),
    tokenIn: "",
    trancheKey: "",
  };
}
export const QueryGetLimitOrderTrancheRequest = {
  typeUrl: "/neutron.dex.QueryGetLimitOrderTrancheRequest",
  encode(
    message: QueryGetLimitOrderTrancheRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.tickIndex !== BigInt(0)) {
      writer.uint32(16).int64(message.tickIndex);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.trancheKey !== "") {
      writer.uint32(34).string(message.trancheKey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetLimitOrderTrancheRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLimitOrderTrancheRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        case 2:
          message.tickIndex = reader.int64();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.trancheKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetLimitOrderTrancheRequest {
    const obj = createBaseQueryGetLimitOrderTrancheRequest();
    if (isSet(object.pairId)) obj.pairId = String(object.pairId);
    if (isSet(object.tickIndex)) obj.tickIndex = BigInt(object.tickIndex.toString());
    if (isSet(object.tokenIn)) obj.tokenIn = String(object.tokenIn);
    if (isSet(object.trancheKey)) obj.trancheKey = String(object.trancheKey);
    return obj;
  },
  toJSON(message: QueryGetLimitOrderTrancheRequest): JsonSafe<QueryGetLimitOrderTrancheRequest> {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.tickIndex !== undefined && (obj.tickIndex = (message.tickIndex || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetLimitOrderTrancheRequest>, I>>(
    object: I,
  ): QueryGetLimitOrderTrancheRequest {
    const message = createBaseQueryGetLimitOrderTrancheRequest();
    message.pairId = object.pairId ?? "";
    if (object.tickIndex !== undefined && object.tickIndex !== null) {
      message.tickIndex = BigInt(object.tickIndex.toString());
    }
    message.tokenIn = object.tokenIn ?? "";
    message.trancheKey = object.trancheKey ?? "";
    return message;
  },
};
function createBaseQueryGetLimitOrderTrancheResponse(): QueryGetLimitOrderTrancheResponse {
  return {
    limitOrderTranche: undefined,
  };
}
export const QueryGetLimitOrderTrancheResponse = {
  typeUrl: "/neutron.dex.QueryGetLimitOrderTrancheResponse",
  encode(
    message: QueryGetLimitOrderTrancheResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.limitOrderTranche !== undefined) {
      LimitOrderTranche.encode(message.limitOrderTranche, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetLimitOrderTrancheResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLimitOrderTrancheResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limitOrderTranche = LimitOrderTranche.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetLimitOrderTrancheResponse {
    const obj = createBaseQueryGetLimitOrderTrancheResponse();
    if (isSet(object.limitOrderTranche))
      obj.limitOrderTranche = LimitOrderTranche.fromJSON(object.limitOrderTranche);
    return obj;
  },
  toJSON(message: QueryGetLimitOrderTrancheResponse): JsonSafe<QueryGetLimitOrderTrancheResponse> {
    const obj: any = {};
    message.limitOrderTranche !== undefined &&
      (obj.limitOrderTranche = message.limitOrderTranche
        ? LimitOrderTranche.toJSON(message.limitOrderTranche)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetLimitOrderTrancheResponse>, I>>(
    object: I,
  ): QueryGetLimitOrderTrancheResponse {
    const message = createBaseQueryGetLimitOrderTrancheResponse();
    if (object.limitOrderTranche !== undefined && object.limitOrderTranche !== null) {
      message.limitOrderTranche = LimitOrderTranche.fromPartial(object.limitOrderTranche);
    }
    return message;
  },
};
function createBaseQueryAllLimitOrderTrancheRequest(): QueryAllLimitOrderTrancheRequest {
  return {
    pairId: "",
    tokenIn: "",
    pagination: undefined,
  };
}
export const QueryAllLimitOrderTrancheRequest = {
  typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheRequest",
  encode(
    message: QueryAllLimitOrderTrancheRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllLimitOrderTrancheRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLimitOrderTrancheRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllLimitOrderTrancheRequest {
    const obj = createBaseQueryAllLimitOrderTrancheRequest();
    if (isSet(object.pairId)) obj.pairId = String(object.pairId);
    if (isSet(object.tokenIn)) obj.tokenIn = String(object.tokenIn);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllLimitOrderTrancheRequest): JsonSafe<QueryAllLimitOrderTrancheRequest> {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllLimitOrderTrancheRequest>, I>>(
    object: I,
  ): QueryAllLimitOrderTrancheRequest {
    const message = createBaseQueryAllLimitOrderTrancheRequest();
    message.pairId = object.pairId ?? "";
    message.tokenIn = object.tokenIn ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAllLimitOrderTrancheResponse(): QueryAllLimitOrderTrancheResponse {
  return {
    limitOrderTranche: [],
    pagination: undefined,
  };
}
export const QueryAllLimitOrderTrancheResponse = {
  typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheResponse",
  encode(
    message: QueryAllLimitOrderTrancheResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.limitOrderTranche) {
      LimitOrderTranche.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllLimitOrderTrancheResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLimitOrderTrancheResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limitOrderTranche.push(LimitOrderTranche.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllLimitOrderTrancheResponse {
    const obj = createBaseQueryAllLimitOrderTrancheResponse();
    if (Array.isArray(object?.limitOrderTranche))
      obj.limitOrderTranche = object.limitOrderTranche.map((e: any) => LimitOrderTranche.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllLimitOrderTrancheResponse): JsonSafe<QueryAllLimitOrderTrancheResponse> {
    const obj: any = {};
    if (message.limitOrderTranche) {
      obj.limitOrderTranche = message.limitOrderTranche.map((e) =>
        e ? LimitOrderTranche.toJSON(e) : undefined,
      );
    } else {
      obj.limitOrderTranche = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllLimitOrderTrancheResponse>, I>>(
    object: I,
  ): QueryAllLimitOrderTrancheResponse {
    const message = createBaseQueryAllLimitOrderTrancheResponse();
    message.limitOrderTranche = object.limitOrderTranche?.map((e) => LimitOrderTranche.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAllUserDepositsRequest(): QueryAllUserDepositsRequest {
  return {
    address: "",
    pagination: undefined,
    includePoolData: false,
  };
}
export const QueryAllUserDepositsRequest = {
  typeUrl: "/neutron.dex.QueryAllUserDepositsRequest",
  encode(message: QueryAllUserDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.includePoolData === true) {
      writer.uint32(24).bool(message.includePoolData);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserDepositsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.includePoolData = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllUserDepositsRequest {
    const obj = createBaseQueryAllUserDepositsRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    if (isSet(object.includePoolData)) obj.includePoolData = Boolean(object.includePoolData);
    return obj;
  },
  toJSON(message: QueryAllUserDepositsRequest): JsonSafe<QueryAllUserDepositsRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.includePoolData !== undefined && (obj.includePoolData = message.includePoolData);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllUserDepositsRequest>, I>>(
    object: I,
  ): QueryAllUserDepositsRequest {
    const message = createBaseQueryAllUserDepositsRequest();
    message.address = object.address ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    message.includePoolData = object.includePoolData ?? false;
    return message;
  },
};
function createBaseQueryAllUserDepositsResponse(): QueryAllUserDepositsResponse {
  return {
    deposits: [],
    pagination: undefined,
  };
}
export const QueryAllUserDepositsResponse = {
  typeUrl: "/neutron.dex.QueryAllUserDepositsResponse",
  encode(message: QueryAllUserDepositsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deposits) {
      DepositRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserDepositsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(DepositRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllUserDepositsResponse {
    const obj = createBaseQueryAllUserDepositsResponse();
    if (Array.isArray(object?.deposits))
      obj.deposits = object.deposits.map((e: any) => DepositRecord.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllUserDepositsResponse): JsonSafe<QueryAllUserDepositsResponse> {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map((e) => (e ? DepositRecord.toJSON(e) : undefined));
    } else {
      obj.deposits = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllUserDepositsResponse>, I>>(
    object: I,
  ): QueryAllUserDepositsResponse {
    const message = createBaseQueryAllUserDepositsResponse();
    message.deposits = object.deposits?.map((e) => DepositRecord.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAllLimitOrderTrancheUserByAddressRequest(): QueryAllLimitOrderTrancheUserByAddressRequest {
  return {
    address: "",
    pagination: undefined,
  };
}
export const QueryAllLimitOrderTrancheUserByAddressRequest = {
  typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheUserByAddressRequest",
  encode(
    message: QueryAllLimitOrderTrancheUserByAddressRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllLimitOrderTrancheUserByAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLimitOrderTrancheUserByAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllLimitOrderTrancheUserByAddressRequest {
    const obj = createBaseQueryAllLimitOrderTrancheUserByAddressRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(
    message: QueryAllLimitOrderTrancheUserByAddressRequest,
  ): JsonSafe<QueryAllLimitOrderTrancheUserByAddressRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllLimitOrderTrancheUserByAddressRequest>, I>>(
    object: I,
  ): QueryAllLimitOrderTrancheUserByAddressRequest {
    const message = createBaseQueryAllLimitOrderTrancheUserByAddressRequest();
    message.address = object.address ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAllLimitOrderTrancheUserByAddressResponse(): QueryAllLimitOrderTrancheUserByAddressResponse {
  return {
    limitOrders: [],
    pagination: undefined,
  };
}
export const QueryAllLimitOrderTrancheUserByAddressResponse = {
  typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheUserByAddressResponse",
  encode(
    message: QueryAllLimitOrderTrancheUserByAddressResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.limitOrders) {
      LimitOrderTrancheUser.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllLimitOrderTrancheUserByAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLimitOrderTrancheUserByAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limitOrders.push(LimitOrderTrancheUser.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllLimitOrderTrancheUserByAddressResponse {
    const obj = createBaseQueryAllLimitOrderTrancheUserByAddressResponse();
    if (Array.isArray(object?.limitOrders))
      obj.limitOrders = object.limitOrders.map((e: any) => LimitOrderTrancheUser.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(
    message: QueryAllLimitOrderTrancheUserByAddressResponse,
  ): JsonSafe<QueryAllLimitOrderTrancheUserByAddressResponse> {
    const obj: any = {};
    if (message.limitOrders) {
      obj.limitOrders = message.limitOrders.map((e) => (e ? LimitOrderTrancheUser.toJSON(e) : undefined));
    } else {
      obj.limitOrders = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllLimitOrderTrancheUserByAddressResponse>, I>>(
    object: I,
  ): QueryAllLimitOrderTrancheUserByAddressResponse {
    const message = createBaseQueryAllLimitOrderTrancheUserByAddressResponse();
    message.limitOrders = object.limitOrders?.map((e) => LimitOrderTrancheUser.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAllTickLiquidityRequest(): QueryAllTickLiquidityRequest {
  return {
    pairId: "",
    tokenIn: "",
    pagination: undefined,
  };
}
export const QueryAllTickLiquidityRequest = {
  typeUrl: "/neutron.dex.QueryAllTickLiquidityRequest",
  encode(message: QueryAllTickLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTickLiquidityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTickLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllTickLiquidityRequest {
    const obj = createBaseQueryAllTickLiquidityRequest();
    if (isSet(object.pairId)) obj.pairId = String(object.pairId);
    if (isSet(object.tokenIn)) obj.tokenIn = String(object.tokenIn);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllTickLiquidityRequest): JsonSafe<QueryAllTickLiquidityRequest> {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllTickLiquidityRequest>, I>>(
    object: I,
  ): QueryAllTickLiquidityRequest {
    const message = createBaseQueryAllTickLiquidityRequest();
    message.pairId = object.pairId ?? "";
    message.tokenIn = object.tokenIn ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAllTickLiquidityResponse(): QueryAllTickLiquidityResponse {
  return {
    tickLiquidity: [],
    pagination: undefined,
  };
}
export const QueryAllTickLiquidityResponse = {
  typeUrl: "/neutron.dex.QueryAllTickLiquidityResponse",
  encode(message: QueryAllTickLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tickLiquidity) {
      TickLiquidity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTickLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTickLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tickLiquidity.push(TickLiquidity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllTickLiquidityResponse {
    const obj = createBaseQueryAllTickLiquidityResponse();
    if (Array.isArray(object?.tickLiquidity))
      obj.tickLiquidity = object.tickLiquidity.map((e: any) => TickLiquidity.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllTickLiquidityResponse): JsonSafe<QueryAllTickLiquidityResponse> {
    const obj: any = {};
    if (message.tickLiquidity) {
      obj.tickLiquidity = message.tickLiquidity.map((e) => (e ? TickLiquidity.toJSON(e) : undefined));
    } else {
      obj.tickLiquidity = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllTickLiquidityResponse>, I>>(
    object: I,
  ): QueryAllTickLiquidityResponse {
    const message = createBaseQueryAllTickLiquidityResponse();
    message.tickLiquidity = object.tickLiquidity?.map((e) => TickLiquidity.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryGetInactiveLimitOrderTrancheRequest(): QueryGetInactiveLimitOrderTrancheRequest {
  return {
    pairId: "",
    tokenIn: "",
    tickIndex: BigInt(0),
    trancheKey: "",
  };
}
export const QueryGetInactiveLimitOrderTrancheRequest = {
  typeUrl: "/neutron.dex.QueryGetInactiveLimitOrderTrancheRequest",
  encode(
    message: QueryGetInactiveLimitOrderTrancheRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tickIndex !== BigInt(0)) {
      writer.uint32(24).int64(message.tickIndex);
    }
    if (message.trancheKey !== "") {
      writer.uint32(34).string(message.trancheKey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetInactiveLimitOrderTrancheRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInactiveLimitOrderTrancheRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tickIndex = reader.int64();
          break;
        case 4:
          message.trancheKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetInactiveLimitOrderTrancheRequest {
    const obj = createBaseQueryGetInactiveLimitOrderTrancheRequest();
    if (isSet(object.pairId)) obj.pairId = String(object.pairId);
    if (isSet(object.tokenIn)) obj.tokenIn = String(object.tokenIn);
    if (isSet(object.tickIndex)) obj.tickIndex = BigInt(object.tickIndex.toString());
    if (isSet(object.trancheKey)) obj.trancheKey = String(object.trancheKey);
    return obj;
  },
  toJSON(
    message: QueryGetInactiveLimitOrderTrancheRequest,
  ): JsonSafe<QueryGetInactiveLimitOrderTrancheRequest> {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tickIndex !== undefined && (obj.tickIndex = (message.tickIndex || BigInt(0)).toString());
    message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetInactiveLimitOrderTrancheRequest>, I>>(
    object: I,
  ): QueryGetInactiveLimitOrderTrancheRequest {
    const message = createBaseQueryGetInactiveLimitOrderTrancheRequest();
    message.pairId = object.pairId ?? "";
    message.tokenIn = object.tokenIn ?? "";
    if (object.tickIndex !== undefined && object.tickIndex !== null) {
      message.tickIndex = BigInt(object.tickIndex.toString());
    }
    message.trancheKey = object.trancheKey ?? "";
    return message;
  },
};
function createBaseQueryGetInactiveLimitOrderTrancheResponse(): QueryGetInactiveLimitOrderTrancheResponse {
  return {
    inactiveLimitOrderTranche: undefined,
  };
}
export const QueryGetInactiveLimitOrderTrancheResponse = {
  typeUrl: "/neutron.dex.QueryGetInactiveLimitOrderTrancheResponse",
  encode(
    message: QueryGetInactiveLimitOrderTrancheResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.inactiveLimitOrderTranche !== undefined) {
      LimitOrderTranche.encode(message.inactiveLimitOrderTranche, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetInactiveLimitOrderTrancheResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInactiveLimitOrderTrancheResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inactiveLimitOrderTranche = LimitOrderTranche.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetInactiveLimitOrderTrancheResponse {
    const obj = createBaseQueryGetInactiveLimitOrderTrancheResponse();
    if (isSet(object.inactiveLimitOrderTranche))
      obj.inactiveLimitOrderTranche = LimitOrderTranche.fromJSON(object.inactiveLimitOrderTranche);
    return obj;
  },
  toJSON(
    message: QueryGetInactiveLimitOrderTrancheResponse,
  ): JsonSafe<QueryGetInactiveLimitOrderTrancheResponse> {
    const obj: any = {};
    message.inactiveLimitOrderTranche !== undefined &&
      (obj.inactiveLimitOrderTranche = message.inactiveLimitOrderTranche
        ? LimitOrderTranche.toJSON(message.inactiveLimitOrderTranche)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetInactiveLimitOrderTrancheResponse>, I>>(
    object: I,
  ): QueryGetInactiveLimitOrderTrancheResponse {
    const message = createBaseQueryGetInactiveLimitOrderTrancheResponse();
    if (object.inactiveLimitOrderTranche !== undefined && object.inactiveLimitOrderTranche !== null) {
      message.inactiveLimitOrderTranche = LimitOrderTranche.fromPartial(object.inactiveLimitOrderTranche);
    }
    return message;
  },
};
function createBaseQueryAllInactiveLimitOrderTrancheRequest(): QueryAllInactiveLimitOrderTrancheRequest {
  return {
    pagination: undefined,
  };
}
export const QueryAllInactiveLimitOrderTrancheRequest = {
  typeUrl: "/neutron.dex.QueryAllInactiveLimitOrderTrancheRequest",
  encode(
    message: QueryAllInactiveLimitOrderTrancheRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllInactiveLimitOrderTrancheRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInactiveLimitOrderTrancheRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllInactiveLimitOrderTrancheRequest {
    const obj = createBaseQueryAllInactiveLimitOrderTrancheRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(
    message: QueryAllInactiveLimitOrderTrancheRequest,
  ): JsonSafe<QueryAllInactiveLimitOrderTrancheRequest> {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllInactiveLimitOrderTrancheRequest>, I>>(
    object: I,
  ): QueryAllInactiveLimitOrderTrancheRequest {
    const message = createBaseQueryAllInactiveLimitOrderTrancheRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAllInactiveLimitOrderTrancheResponse(): QueryAllInactiveLimitOrderTrancheResponse {
  return {
    inactiveLimitOrderTranche: [],
    pagination: undefined,
  };
}
export const QueryAllInactiveLimitOrderTrancheResponse = {
  typeUrl: "/neutron.dex.QueryAllInactiveLimitOrderTrancheResponse",
  encode(
    message: QueryAllInactiveLimitOrderTrancheResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.inactiveLimitOrderTranche) {
      LimitOrderTranche.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllInactiveLimitOrderTrancheResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInactiveLimitOrderTrancheResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inactiveLimitOrderTranche.push(LimitOrderTranche.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllInactiveLimitOrderTrancheResponse {
    const obj = createBaseQueryAllInactiveLimitOrderTrancheResponse();
    if (Array.isArray(object?.inactiveLimitOrderTranche))
      obj.inactiveLimitOrderTranche = object.inactiveLimitOrderTranche.map((e: any) =>
        LimitOrderTranche.fromJSON(e),
      );
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(
    message: QueryAllInactiveLimitOrderTrancheResponse,
  ): JsonSafe<QueryAllInactiveLimitOrderTrancheResponse> {
    const obj: any = {};
    if (message.inactiveLimitOrderTranche) {
      obj.inactiveLimitOrderTranche = message.inactiveLimitOrderTranche.map((e) =>
        e ? LimitOrderTranche.toJSON(e) : undefined,
      );
    } else {
      obj.inactiveLimitOrderTranche = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllInactiveLimitOrderTrancheResponse>, I>>(
    object: I,
  ): QueryAllInactiveLimitOrderTrancheResponse {
    const message = createBaseQueryAllInactiveLimitOrderTrancheResponse();
    message.inactiveLimitOrderTranche =
      object.inactiveLimitOrderTranche?.map((e) => LimitOrderTranche.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAllPoolReservesRequest(): QueryAllPoolReservesRequest {
  return {
    pairId: "",
    tokenIn: "",
    pagination: undefined,
  };
}
export const QueryAllPoolReservesRequest = {
  typeUrl: "/neutron.dex.QueryAllPoolReservesRequest",
  encode(message: QueryAllPoolReservesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolReservesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolReservesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolReservesRequest {
    const obj = createBaseQueryAllPoolReservesRequest();
    if (isSet(object.pairId)) obj.pairId = String(object.pairId);
    if (isSet(object.tokenIn)) obj.tokenIn = String(object.tokenIn);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllPoolReservesRequest): JsonSafe<QueryAllPoolReservesRequest> {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPoolReservesRequest>, I>>(
    object: I,
  ): QueryAllPoolReservesRequest {
    const message = createBaseQueryAllPoolReservesRequest();
    message.pairId = object.pairId ?? "";
    message.tokenIn = object.tokenIn ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAllPoolReservesResponse(): QueryAllPoolReservesResponse {
  return {
    poolReserves: [],
    pagination: undefined,
  };
}
export const QueryAllPoolReservesResponse = {
  typeUrl: "/neutron.dex.QueryAllPoolReservesResponse",
  encode(message: QueryAllPoolReservesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolReserves) {
      PoolReserves.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolReservesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolReservesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolReserves.push(PoolReserves.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolReservesResponse {
    const obj = createBaseQueryAllPoolReservesResponse();
    if (Array.isArray(object?.poolReserves))
      obj.poolReserves = object.poolReserves.map((e: any) => PoolReserves.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllPoolReservesResponse): JsonSafe<QueryAllPoolReservesResponse> {
    const obj: any = {};
    if (message.poolReserves) {
      obj.poolReserves = message.poolReserves.map((e) => (e ? PoolReserves.toJSON(e) : undefined));
    } else {
      obj.poolReserves = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPoolReservesResponse>, I>>(
    object: I,
  ): QueryAllPoolReservesResponse {
    const message = createBaseQueryAllPoolReservesResponse();
    message.poolReserves = object.poolReserves?.map((e) => PoolReserves.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryGetPoolReservesRequest(): QueryGetPoolReservesRequest {
  return {
    pairId: "",
    tokenIn: "",
    tickIndex: BigInt(0),
    fee: BigInt(0),
  };
}
export const QueryGetPoolReservesRequest = {
  typeUrl: "/neutron.dex.QueryGetPoolReservesRequest",
  encode(message: QueryGetPoolReservesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tickIndex !== BigInt(0)) {
      writer.uint32(24).int64(message.tickIndex);
    }
    if (message.fee !== BigInt(0)) {
      writer.uint32(32).uint64(message.fee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolReservesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolReservesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tickIndex = reader.int64();
          break;
        case 4:
          message.fee = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolReservesRequest {
    const obj = createBaseQueryGetPoolReservesRequest();
    if (isSet(object.pairId)) obj.pairId = String(object.pairId);
    if (isSet(object.tokenIn)) obj.tokenIn = String(object.tokenIn);
    if (isSet(object.tickIndex)) obj.tickIndex = BigInt(object.tickIndex.toString());
    if (isSet(object.fee)) obj.fee = BigInt(object.fee.toString());
    return obj;
  },
  toJSON(message: QueryGetPoolReservesRequest): JsonSafe<QueryGetPoolReservesRequest> {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tickIndex !== undefined && (obj.tickIndex = (message.tickIndex || BigInt(0)).toString());
    message.fee !== undefined && (obj.fee = (message.fee || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPoolReservesRequest>, I>>(
    object: I,
  ): QueryGetPoolReservesRequest {
    const message = createBaseQueryGetPoolReservesRequest();
    message.pairId = object.pairId ?? "";
    message.tokenIn = object.tokenIn ?? "";
    if (object.tickIndex !== undefined && object.tickIndex !== null) {
      message.tickIndex = BigInt(object.tickIndex.toString());
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = BigInt(object.fee.toString());
    }
    return message;
  },
};
function createBaseQueryGetPoolReservesResponse(): QueryGetPoolReservesResponse {
  return {
    poolReserves: undefined,
  };
}
export const QueryGetPoolReservesResponse = {
  typeUrl: "/neutron.dex.QueryGetPoolReservesResponse",
  encode(message: QueryGetPoolReservesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolReserves !== undefined) {
      PoolReserves.encode(message.poolReserves, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolReservesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolReservesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolReserves = PoolReserves.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolReservesResponse {
    const obj = createBaseQueryGetPoolReservesResponse();
    if (isSet(object.poolReserves)) obj.poolReserves = PoolReserves.fromJSON(object.poolReserves);
    return obj;
  },
  toJSON(message: QueryGetPoolReservesResponse): JsonSafe<QueryGetPoolReservesResponse> {
    const obj: any = {};
    message.poolReserves !== undefined &&
      (obj.poolReserves = message.poolReserves ? PoolReserves.toJSON(message.poolReserves) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPoolReservesResponse>, I>>(
    object: I,
  ): QueryGetPoolReservesResponse {
    const message = createBaseQueryGetPoolReservesResponse();
    if (object.poolReserves !== undefined && object.poolReserves !== null) {
      message.poolReserves = PoolReserves.fromPartial(object.poolReserves);
    }
    return message;
  },
};
function createBaseQueryEstimateMultiHopSwapRequest(): QueryEstimateMultiHopSwapRequest {
  return {
    creator: "",
    receiver: "",
    routes: [],
    amountIn: "",
    exitLimitPrice: "",
    pickBestRoute: false,
  };
}
export const QueryEstimateMultiHopSwapRequest = {
  typeUrl: "/neutron.dex.QueryEstimateMultiHopSwapRequest",
  encode(
    message: QueryEstimateMultiHopSwapRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateMultiHopSwapRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateMultiHopSwapRequest();
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
  fromJSON(object: any): QueryEstimateMultiHopSwapRequest {
    const obj = createBaseQueryEstimateMultiHopSwapRequest();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    if (Array.isArray(object?.routes)) obj.routes = object.routes.map((e: any) => MultiHopRoute.fromJSON(e));
    if (isSet(object.amountIn)) obj.amountIn = String(object.amountIn);
    if (isSet(object.exitLimitPrice)) obj.exitLimitPrice = String(object.exitLimitPrice);
    if (isSet(object.pickBestRoute)) obj.pickBestRoute = Boolean(object.pickBestRoute);
    return obj;
  },
  toJSON(message: QueryEstimateMultiHopSwapRequest): JsonSafe<QueryEstimateMultiHopSwapRequest> {
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
  fromPartial<I extends Exact<DeepPartial<QueryEstimateMultiHopSwapRequest>, I>>(
    object: I,
  ): QueryEstimateMultiHopSwapRequest {
    const message = createBaseQueryEstimateMultiHopSwapRequest();
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    message.routes = object.routes?.map((e) => MultiHopRoute.fromPartial(e)) || [];
    message.amountIn = object.amountIn ?? "";
    message.exitLimitPrice = object.exitLimitPrice ?? "";
    message.pickBestRoute = object.pickBestRoute ?? false;
    return message;
  },
};
function createBaseQueryEstimateMultiHopSwapResponse(): QueryEstimateMultiHopSwapResponse {
  return {
    coinOut: Coin.fromPartial({}),
  };
}
export const QueryEstimateMultiHopSwapResponse = {
  typeUrl: "/neutron.dex.QueryEstimateMultiHopSwapResponse",
  encode(
    message: QueryEstimateMultiHopSwapResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.coinOut !== undefined) {
      Coin.encode(message.coinOut, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateMultiHopSwapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateMultiHopSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coinOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEstimateMultiHopSwapResponse {
    const obj = createBaseQueryEstimateMultiHopSwapResponse();
    if (isSet(object.coinOut)) obj.coinOut = Coin.fromJSON(object.coinOut);
    return obj;
  },
  toJSON(message: QueryEstimateMultiHopSwapResponse): JsonSafe<QueryEstimateMultiHopSwapResponse> {
    const obj: any = {};
    message.coinOut !== undefined &&
      (obj.coinOut = message.coinOut ? Coin.toJSON(message.coinOut) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEstimateMultiHopSwapResponse>, I>>(
    object: I,
  ): QueryEstimateMultiHopSwapResponse {
    const message = createBaseQueryEstimateMultiHopSwapResponse();
    if (object.coinOut !== undefined && object.coinOut !== null) {
      message.coinOut = Coin.fromPartial(object.coinOut);
    }
    return message;
  },
};
function createBaseQueryEstimatePlaceLimitOrderRequest(): QueryEstimatePlaceLimitOrderRequest {
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
  };
}
export const QueryEstimatePlaceLimitOrderRequest = {
  typeUrl: "/neutron.dex.QueryEstimatePlaceLimitOrderRequest",
  encode(
    message: QueryEstimatePlaceLimitOrderRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
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
      writer.uint32(50).string(message.amountIn);
    }
    if (message.orderType !== 0) {
      writer.uint32(56).int32(message.orderType);
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(66).fork()).ldelim();
    }
    if (message.maxAmountOut !== undefined) {
      writer.uint32(74).string(message.maxAmountOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimatePlaceLimitOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimatePlaceLimitOrderRequest();
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
        case 6:
          message.amountIn = reader.string();
          break;
        case 7:
          message.orderType = reader.int32() as any;
          break;
        case 8:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.maxAmountOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEstimatePlaceLimitOrderRequest {
    const obj = createBaseQueryEstimatePlaceLimitOrderRequest();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    if (isSet(object.tokenIn)) obj.tokenIn = String(object.tokenIn);
    if (isSet(object.tokenOut)) obj.tokenOut = String(object.tokenOut);
    if (isSet(object.tickIndexInToOut)) obj.tickIndexInToOut = BigInt(object.tickIndexInToOut.toString());
    if (isSet(object.amountIn)) obj.amountIn = String(object.amountIn);
    if (isSet(object.orderType)) obj.orderType = limitOrderTypeFromJSON(object.orderType);
    if (isSet(object.expirationTime)) obj.expirationTime = fromJsonTimestamp(object.expirationTime);
    if (isSet(object.maxAmountOut)) obj.maxAmountOut = String(object.maxAmountOut);
    return obj;
  },
  toJSON(message: QueryEstimatePlaceLimitOrderRequest): JsonSafe<QueryEstimatePlaceLimitOrderRequest> {
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
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEstimatePlaceLimitOrderRequest>, I>>(
    object: I,
  ): QueryEstimatePlaceLimitOrderRequest {
    const message = createBaseQueryEstimatePlaceLimitOrderRequest();
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
    return message;
  },
};
function createBaseQueryEstimatePlaceLimitOrderResponse(): QueryEstimatePlaceLimitOrderResponse {
  return {
    totalInCoin: Coin.fromPartial({}),
    swapInCoin: Coin.fromPartial({}),
    swapOutCoin: Coin.fromPartial({}),
  };
}
export const QueryEstimatePlaceLimitOrderResponse = {
  typeUrl: "/neutron.dex.QueryEstimatePlaceLimitOrderResponse",
  encode(
    message: QueryEstimatePlaceLimitOrderResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.totalInCoin !== undefined) {
      Coin.encode(message.totalInCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.swapInCoin !== undefined) {
      Coin.encode(message.swapInCoin, writer.uint32(18).fork()).ldelim();
    }
    if (message.swapOutCoin !== undefined) {
      Coin.encode(message.swapOutCoin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimatePlaceLimitOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimatePlaceLimitOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalInCoin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.swapInCoin = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.swapOutCoin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEstimatePlaceLimitOrderResponse {
    const obj = createBaseQueryEstimatePlaceLimitOrderResponse();
    if (isSet(object.totalInCoin)) obj.totalInCoin = Coin.fromJSON(object.totalInCoin);
    if (isSet(object.swapInCoin)) obj.swapInCoin = Coin.fromJSON(object.swapInCoin);
    if (isSet(object.swapOutCoin)) obj.swapOutCoin = Coin.fromJSON(object.swapOutCoin);
    return obj;
  },
  toJSON(message: QueryEstimatePlaceLimitOrderResponse): JsonSafe<QueryEstimatePlaceLimitOrderResponse> {
    const obj: any = {};
    message.totalInCoin !== undefined &&
      (obj.totalInCoin = message.totalInCoin ? Coin.toJSON(message.totalInCoin) : undefined);
    message.swapInCoin !== undefined &&
      (obj.swapInCoin = message.swapInCoin ? Coin.toJSON(message.swapInCoin) : undefined);
    message.swapOutCoin !== undefined &&
      (obj.swapOutCoin = message.swapOutCoin ? Coin.toJSON(message.swapOutCoin) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEstimatePlaceLimitOrderResponse>, I>>(
    object: I,
  ): QueryEstimatePlaceLimitOrderResponse {
    const message = createBaseQueryEstimatePlaceLimitOrderResponse();
    if (object.totalInCoin !== undefined && object.totalInCoin !== null) {
      message.totalInCoin = Coin.fromPartial(object.totalInCoin);
    }
    if (object.swapInCoin !== undefined && object.swapInCoin !== null) {
      message.swapInCoin = Coin.fromPartial(object.swapInCoin);
    }
    if (object.swapOutCoin !== undefined && object.swapOutCoin !== null) {
      message.swapOutCoin = Coin.fromPartial(object.swapOutCoin);
    }
    return message;
  },
};
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {
    pairId: "",
    tickIndex: BigInt(0),
    fee: BigInt(0),
  };
}
export const QueryPoolRequest = {
  typeUrl: "/neutron.dex.QueryPoolRequest",
  encode(message: QueryPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.tickIndex !== BigInt(0)) {
      writer.uint32(16).int64(message.tickIndex);
    }
    if (message.fee !== BigInt(0)) {
      writer.uint32(24).uint64(message.fee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        case 2:
          message.tickIndex = reader.int64();
          break;
        case 3:
          message.fee = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolRequest {
    const obj = createBaseQueryPoolRequest();
    if (isSet(object.pairId)) obj.pairId = String(object.pairId);
    if (isSet(object.tickIndex)) obj.tickIndex = BigInt(object.tickIndex.toString());
    if (isSet(object.fee)) obj.fee = BigInt(object.fee.toString());
    return obj;
  },
  toJSON(message: QueryPoolRequest): JsonSafe<QueryPoolRequest> {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.tickIndex !== undefined && (obj.tickIndex = (message.tickIndex || BigInt(0)).toString());
    message.fee !== undefined && (obj.fee = (message.fee || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(object: I): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.pairId = object.pairId ?? "";
    if (object.tickIndex !== undefined && object.tickIndex !== null) {
      message.tickIndex = BigInt(object.tickIndex.toString());
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = BigInt(object.fee.toString());
    }
    return message;
  },
};
function createBaseQueryPoolByIDRequest(): QueryPoolByIDRequest {
  return {
    poolId: BigInt(0),
  };
}
export const QueryPoolByIDRequest = {
  typeUrl: "/neutron.dex.QueryPoolByIDRequest",
  encode(message: QueryPoolByIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolByIDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolByIDRequest {
    const obj = createBaseQueryPoolByIDRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  toJSON(message: QueryPoolByIDRequest): JsonSafe<QueryPoolByIDRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPoolByIDRequest>, I>>(object: I): QueryPoolByIDRequest {
    const message = createBaseQueryPoolByIDRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    return message;
  },
};
function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: undefined,
  };
}
export const QueryPoolResponse = {
  typeUrl: "/neutron.dex.QueryPoolResponse",
  encode(message: QueryPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolResponse {
    const obj = createBaseQueryPoolResponse();
    if (isSet(object.pool)) obj.pool = Pool.fromJSON(object.pool);
    return obj;
  },
  toJSON(message: QueryPoolResponse): JsonSafe<QueryPoolResponse> {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(object: I): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromPartial(object.pool);
    }
    return message;
  },
};
function createBaseQueryGetPoolMetadataRequest(): QueryGetPoolMetadataRequest {
  return {
    id: BigInt(0),
  };
}
export const QueryGetPoolMetadataRequest = {
  typeUrl: "/neutron.dex.QueryGetPoolMetadataRequest",
  encode(message: QueryGetPoolMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolMetadataRequest {
    const obj = createBaseQueryGetPoolMetadataRequest();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    return obj;
  },
  toJSON(message: QueryGetPoolMetadataRequest): JsonSafe<QueryGetPoolMetadataRequest> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPoolMetadataRequest>, I>>(
    object: I,
  ): QueryGetPoolMetadataRequest {
    const message = createBaseQueryGetPoolMetadataRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    return message;
  },
};
function createBaseQueryGetPoolMetadataResponse(): QueryGetPoolMetadataResponse {
  return {
    poolMetadata: PoolMetadata.fromPartial({}),
  };
}
export const QueryGetPoolMetadataResponse = {
  typeUrl: "/neutron.dex.QueryGetPoolMetadataResponse",
  encode(message: QueryGetPoolMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolMetadata !== undefined) {
      PoolMetadata.encode(message.poolMetadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolMetadata = PoolMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolMetadataResponse {
    const obj = createBaseQueryGetPoolMetadataResponse();
    if (isSet(object.poolMetadata)) obj.poolMetadata = PoolMetadata.fromJSON(object.poolMetadata);
    return obj;
  },
  toJSON(message: QueryGetPoolMetadataResponse): JsonSafe<QueryGetPoolMetadataResponse> {
    const obj: any = {};
    message.poolMetadata !== undefined &&
      (obj.poolMetadata = message.poolMetadata ? PoolMetadata.toJSON(message.poolMetadata) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPoolMetadataResponse>, I>>(
    object: I,
  ): QueryGetPoolMetadataResponse {
    const message = createBaseQueryGetPoolMetadataResponse();
    if (object.poolMetadata !== undefined && object.poolMetadata !== null) {
      message.poolMetadata = PoolMetadata.fromPartial(object.poolMetadata);
    }
    return message;
  },
};
function createBaseQueryAllPoolMetadataRequest(): QueryAllPoolMetadataRequest {
  return {
    pagination: undefined,
  };
}
export const QueryAllPoolMetadataRequest = {
  typeUrl: "/neutron.dex.QueryAllPoolMetadataRequest",
  encode(message: QueryAllPoolMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolMetadataRequest {
    const obj = createBaseQueryAllPoolMetadataRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllPoolMetadataRequest): JsonSafe<QueryAllPoolMetadataRequest> {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPoolMetadataRequest>, I>>(
    object: I,
  ): QueryAllPoolMetadataRequest {
    const message = createBaseQueryAllPoolMetadataRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAllPoolMetadataResponse(): QueryAllPoolMetadataResponse {
  return {
    poolMetadata: [],
    pagination: undefined,
  };
}
export const QueryAllPoolMetadataResponse = {
  typeUrl: "/neutron.dex.QueryAllPoolMetadataResponse",
  encode(message: QueryAllPoolMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolMetadata) {
      PoolMetadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolMetadata.push(PoolMetadata.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolMetadataResponse {
    const obj = createBaseQueryAllPoolMetadataResponse();
    if (Array.isArray(object?.poolMetadata))
      obj.poolMetadata = object.poolMetadata.map((e: any) => PoolMetadata.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllPoolMetadataResponse): JsonSafe<QueryAllPoolMetadataResponse> {
    const obj: any = {};
    if (message.poolMetadata) {
      obj.poolMetadata = message.poolMetadata.map((e) => (e ? PoolMetadata.toJSON(e) : undefined));
    } else {
      obj.poolMetadata = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPoolMetadataResponse>, I>>(
    object: I,
  ): QueryAllPoolMetadataResponse {
    const message = createBaseQueryAllPoolMetadataResponse();
    message.poolMetadata = object.poolMetadata?.map((e) => PoolMetadata.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQuerySimulateDepositRequest(): QuerySimulateDepositRequest {
  return {
    msg: undefined,
  };
}
export const QuerySimulateDepositRequest = {
  typeUrl: "/neutron.dex.QuerySimulateDepositRequest",
  encode(message: QuerySimulateDepositRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msg !== undefined) {
      MsgDeposit.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateDepositRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = MsgDeposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateDepositRequest {
    const obj = createBaseQuerySimulateDepositRequest();
    if (isSet(object.msg)) obj.msg = MsgDeposit.fromJSON(object.msg);
    return obj;
  },
  toJSON(message: QuerySimulateDepositRequest): JsonSafe<QuerySimulateDepositRequest> {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg ? MsgDeposit.toJSON(message.msg) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySimulateDepositRequest>, I>>(
    object: I,
  ): QuerySimulateDepositRequest {
    const message = createBaseQuerySimulateDepositRequest();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgDeposit.fromPartial(object.msg);
    }
    return message;
  },
};
function createBaseQuerySimulateDepositResponse(): QuerySimulateDepositResponse {
  return {
    resp: undefined,
  };
}
export const QuerySimulateDepositResponse = {
  typeUrl: "/neutron.dex.QuerySimulateDepositResponse",
  encode(message: QuerySimulateDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resp !== undefined) {
      MsgDepositResponse.encode(message.resp, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resp = MsgDepositResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateDepositResponse {
    const obj = createBaseQuerySimulateDepositResponse();
    if (isSet(object.resp)) obj.resp = MsgDepositResponse.fromJSON(object.resp);
    return obj;
  },
  toJSON(message: QuerySimulateDepositResponse): JsonSafe<QuerySimulateDepositResponse> {
    const obj: any = {};
    message.resp !== undefined &&
      (obj.resp = message.resp ? MsgDepositResponse.toJSON(message.resp) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySimulateDepositResponse>, I>>(
    object: I,
  ): QuerySimulateDepositResponse {
    const message = createBaseQuerySimulateDepositResponse();
    if (object.resp !== undefined && object.resp !== null) {
      message.resp = MsgDepositResponse.fromPartial(object.resp);
    }
    return message;
  },
};
function createBaseQuerySimulateWithdrawalRequest(): QuerySimulateWithdrawalRequest {
  return {
    msg: undefined,
  };
}
export const QuerySimulateWithdrawalRequest = {
  typeUrl: "/neutron.dex.QuerySimulateWithdrawalRequest",
  encode(
    message: QuerySimulateWithdrawalRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.msg !== undefined) {
      MsgWithdrawal.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateWithdrawalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateWithdrawalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = MsgWithdrawal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateWithdrawalRequest {
    const obj = createBaseQuerySimulateWithdrawalRequest();
    if (isSet(object.msg)) obj.msg = MsgWithdrawal.fromJSON(object.msg);
    return obj;
  },
  toJSON(message: QuerySimulateWithdrawalRequest): JsonSafe<QuerySimulateWithdrawalRequest> {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg ? MsgWithdrawal.toJSON(message.msg) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySimulateWithdrawalRequest>, I>>(
    object: I,
  ): QuerySimulateWithdrawalRequest {
    const message = createBaseQuerySimulateWithdrawalRequest();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgWithdrawal.fromPartial(object.msg);
    }
    return message;
  },
};
function createBaseQuerySimulateWithdrawalResponse(): QuerySimulateWithdrawalResponse {
  return {
    resp: undefined,
  };
}
export const QuerySimulateWithdrawalResponse = {
  typeUrl: "/neutron.dex.QuerySimulateWithdrawalResponse",
  encode(
    message: QuerySimulateWithdrawalResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.resp !== undefined) {
      MsgWithdrawalResponse.encode(message.resp, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateWithdrawalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateWithdrawalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resp = MsgWithdrawalResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateWithdrawalResponse {
    const obj = createBaseQuerySimulateWithdrawalResponse();
    if (isSet(object.resp)) obj.resp = MsgWithdrawalResponse.fromJSON(object.resp);
    return obj;
  },
  toJSON(message: QuerySimulateWithdrawalResponse): JsonSafe<QuerySimulateWithdrawalResponse> {
    const obj: any = {};
    message.resp !== undefined &&
      (obj.resp = message.resp ? MsgWithdrawalResponse.toJSON(message.resp) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySimulateWithdrawalResponse>, I>>(
    object: I,
  ): QuerySimulateWithdrawalResponse {
    const message = createBaseQuerySimulateWithdrawalResponse();
    if (object.resp !== undefined && object.resp !== null) {
      message.resp = MsgWithdrawalResponse.fromPartial(object.resp);
    }
    return message;
  },
};
function createBaseQuerySimulatePlaceLimitOrderRequest(): QuerySimulatePlaceLimitOrderRequest {
  return {
    msg: undefined,
  };
}
export const QuerySimulatePlaceLimitOrderRequest = {
  typeUrl: "/neutron.dex.QuerySimulatePlaceLimitOrderRequest",
  encode(
    message: QuerySimulatePlaceLimitOrderRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.msg !== undefined) {
      MsgPlaceLimitOrder.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulatePlaceLimitOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulatePlaceLimitOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = MsgPlaceLimitOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulatePlaceLimitOrderRequest {
    const obj = createBaseQuerySimulatePlaceLimitOrderRequest();
    if (isSet(object.msg)) obj.msg = MsgPlaceLimitOrder.fromJSON(object.msg);
    return obj;
  },
  toJSON(message: QuerySimulatePlaceLimitOrderRequest): JsonSafe<QuerySimulatePlaceLimitOrderRequest> {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg ? MsgPlaceLimitOrder.toJSON(message.msg) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySimulatePlaceLimitOrderRequest>, I>>(
    object: I,
  ): QuerySimulatePlaceLimitOrderRequest {
    const message = createBaseQuerySimulatePlaceLimitOrderRequest();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgPlaceLimitOrder.fromPartial(object.msg);
    }
    return message;
  },
};
function createBaseQuerySimulatePlaceLimitOrderResponse(): QuerySimulatePlaceLimitOrderResponse {
  return {
    resp: undefined,
  };
}
export const QuerySimulatePlaceLimitOrderResponse = {
  typeUrl: "/neutron.dex.QuerySimulatePlaceLimitOrderResponse",
  encode(
    message: QuerySimulatePlaceLimitOrderResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.resp !== undefined) {
      MsgPlaceLimitOrderResponse.encode(message.resp, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulatePlaceLimitOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulatePlaceLimitOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resp = MsgPlaceLimitOrderResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulatePlaceLimitOrderResponse {
    const obj = createBaseQuerySimulatePlaceLimitOrderResponse();
    if (isSet(object.resp)) obj.resp = MsgPlaceLimitOrderResponse.fromJSON(object.resp);
    return obj;
  },
  toJSON(message: QuerySimulatePlaceLimitOrderResponse): JsonSafe<QuerySimulatePlaceLimitOrderResponse> {
    const obj: any = {};
    message.resp !== undefined &&
      (obj.resp = message.resp ? MsgPlaceLimitOrderResponse.toJSON(message.resp) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySimulatePlaceLimitOrderResponse>, I>>(
    object: I,
  ): QuerySimulatePlaceLimitOrderResponse {
    const message = createBaseQuerySimulatePlaceLimitOrderResponse();
    if (object.resp !== undefined && object.resp !== null) {
      message.resp = MsgPlaceLimitOrderResponse.fromPartial(object.resp);
    }
    return message;
  },
};
function createBaseQuerySimulateWithdrawFilledLimitOrderRequest(): QuerySimulateWithdrawFilledLimitOrderRequest {
  return {
    msg: undefined,
  };
}
export const QuerySimulateWithdrawFilledLimitOrderRequest = {
  typeUrl: "/neutron.dex.QuerySimulateWithdrawFilledLimitOrderRequest",
  encode(
    message: QuerySimulateWithdrawFilledLimitOrderRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.msg !== undefined) {
      MsgWithdrawFilledLimitOrder.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateWithdrawFilledLimitOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateWithdrawFilledLimitOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = MsgWithdrawFilledLimitOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateWithdrawFilledLimitOrderRequest {
    const obj = createBaseQuerySimulateWithdrawFilledLimitOrderRequest();
    if (isSet(object.msg)) obj.msg = MsgWithdrawFilledLimitOrder.fromJSON(object.msg);
    return obj;
  },
  toJSON(
    message: QuerySimulateWithdrawFilledLimitOrderRequest,
  ): JsonSafe<QuerySimulateWithdrawFilledLimitOrderRequest> {
    const obj: any = {};
    message.msg !== undefined &&
      (obj.msg = message.msg ? MsgWithdrawFilledLimitOrder.toJSON(message.msg) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySimulateWithdrawFilledLimitOrderRequest>, I>>(
    object: I,
  ): QuerySimulateWithdrawFilledLimitOrderRequest {
    const message = createBaseQuerySimulateWithdrawFilledLimitOrderRequest();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgWithdrawFilledLimitOrder.fromPartial(object.msg);
    }
    return message;
  },
};
function createBaseQuerySimulateWithdrawFilledLimitOrderResponse(): QuerySimulateWithdrawFilledLimitOrderResponse {
  return {
    resp: undefined,
  };
}
export const QuerySimulateWithdrawFilledLimitOrderResponse = {
  typeUrl: "/neutron.dex.QuerySimulateWithdrawFilledLimitOrderResponse",
  encode(
    message: QuerySimulateWithdrawFilledLimitOrderResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.resp !== undefined) {
      MsgWithdrawFilledLimitOrderResponse.encode(message.resp, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateWithdrawFilledLimitOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateWithdrawFilledLimitOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resp = MsgWithdrawFilledLimitOrderResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateWithdrawFilledLimitOrderResponse {
    const obj = createBaseQuerySimulateWithdrawFilledLimitOrderResponse();
    if (isSet(object.resp)) obj.resp = MsgWithdrawFilledLimitOrderResponse.fromJSON(object.resp);
    return obj;
  },
  toJSON(
    message: QuerySimulateWithdrawFilledLimitOrderResponse,
  ): JsonSafe<QuerySimulateWithdrawFilledLimitOrderResponse> {
    const obj: any = {};
    message.resp !== undefined &&
      (obj.resp = message.resp ? MsgWithdrawFilledLimitOrderResponse.toJSON(message.resp) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySimulateWithdrawFilledLimitOrderResponse>, I>>(
    object: I,
  ): QuerySimulateWithdrawFilledLimitOrderResponse {
    const message = createBaseQuerySimulateWithdrawFilledLimitOrderResponse();
    if (object.resp !== undefined && object.resp !== null) {
      message.resp = MsgWithdrawFilledLimitOrderResponse.fromPartial(object.resp);
    }
    return message;
  },
};
function createBaseQuerySimulateCancelLimitOrderRequest(): QuerySimulateCancelLimitOrderRequest {
  return {
    msg: undefined,
  };
}
export const QuerySimulateCancelLimitOrderRequest = {
  typeUrl: "/neutron.dex.QuerySimulateCancelLimitOrderRequest",
  encode(
    message: QuerySimulateCancelLimitOrderRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.msg !== undefined) {
      MsgCancelLimitOrder.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateCancelLimitOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateCancelLimitOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = MsgCancelLimitOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateCancelLimitOrderRequest {
    const obj = createBaseQuerySimulateCancelLimitOrderRequest();
    if (isSet(object.msg)) obj.msg = MsgCancelLimitOrder.fromJSON(object.msg);
    return obj;
  },
  toJSON(message: QuerySimulateCancelLimitOrderRequest): JsonSafe<QuerySimulateCancelLimitOrderRequest> {
    const obj: any = {};
    message.msg !== undefined &&
      (obj.msg = message.msg ? MsgCancelLimitOrder.toJSON(message.msg) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySimulateCancelLimitOrderRequest>, I>>(
    object: I,
  ): QuerySimulateCancelLimitOrderRequest {
    const message = createBaseQuerySimulateCancelLimitOrderRequest();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgCancelLimitOrder.fromPartial(object.msg);
    }
    return message;
  },
};
function createBaseQuerySimulateCancelLimitOrderResponse(): QuerySimulateCancelLimitOrderResponse {
  return {
    resp: undefined,
  };
}
export const QuerySimulateCancelLimitOrderResponse = {
  typeUrl: "/neutron.dex.QuerySimulateCancelLimitOrderResponse",
  encode(
    message: QuerySimulateCancelLimitOrderResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.resp !== undefined) {
      MsgCancelLimitOrderResponse.encode(message.resp, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateCancelLimitOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateCancelLimitOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resp = MsgCancelLimitOrderResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateCancelLimitOrderResponse {
    const obj = createBaseQuerySimulateCancelLimitOrderResponse();
    if (isSet(object.resp)) obj.resp = MsgCancelLimitOrderResponse.fromJSON(object.resp);
    return obj;
  },
  toJSON(message: QuerySimulateCancelLimitOrderResponse): JsonSafe<QuerySimulateCancelLimitOrderResponse> {
    const obj: any = {};
    message.resp !== undefined &&
      (obj.resp = message.resp ? MsgCancelLimitOrderResponse.toJSON(message.resp) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySimulateCancelLimitOrderResponse>, I>>(
    object: I,
  ): QuerySimulateCancelLimitOrderResponse {
    const message = createBaseQuerySimulateCancelLimitOrderResponse();
    if (object.resp !== undefined && object.resp !== null) {
      message.resp = MsgCancelLimitOrderResponse.fromPartial(object.resp);
    }
    return message;
  },
};
function createBaseQuerySimulateMultiHopSwapRequest(): QuerySimulateMultiHopSwapRequest {
  return {
    msg: undefined,
  };
}
export const QuerySimulateMultiHopSwapRequest = {
  typeUrl: "/neutron.dex.QuerySimulateMultiHopSwapRequest",
  encode(
    message: QuerySimulateMultiHopSwapRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.msg !== undefined) {
      MsgMultiHopSwap.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateMultiHopSwapRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateMultiHopSwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = MsgMultiHopSwap.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateMultiHopSwapRequest {
    const obj = createBaseQuerySimulateMultiHopSwapRequest();
    if (isSet(object.msg)) obj.msg = MsgMultiHopSwap.fromJSON(object.msg);
    return obj;
  },
  toJSON(message: QuerySimulateMultiHopSwapRequest): JsonSafe<QuerySimulateMultiHopSwapRequest> {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg ? MsgMultiHopSwap.toJSON(message.msg) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySimulateMultiHopSwapRequest>, I>>(
    object: I,
  ): QuerySimulateMultiHopSwapRequest {
    const message = createBaseQuerySimulateMultiHopSwapRequest();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgMultiHopSwap.fromPartial(object.msg);
    }
    return message;
  },
};
function createBaseQuerySimulateMultiHopSwapResponse(): QuerySimulateMultiHopSwapResponse {
  return {
    resp: undefined,
  };
}
export const QuerySimulateMultiHopSwapResponse = {
  typeUrl: "/neutron.dex.QuerySimulateMultiHopSwapResponse",
  encode(
    message: QuerySimulateMultiHopSwapResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.resp !== undefined) {
      MsgMultiHopSwapResponse.encode(message.resp, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateMultiHopSwapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateMultiHopSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resp = MsgMultiHopSwapResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateMultiHopSwapResponse {
    const obj = createBaseQuerySimulateMultiHopSwapResponse();
    if (isSet(object.resp)) obj.resp = MsgMultiHopSwapResponse.fromJSON(object.resp);
    return obj;
  },
  toJSON(message: QuerySimulateMultiHopSwapResponse): JsonSafe<QuerySimulateMultiHopSwapResponse> {
    const obj: any = {};
    message.resp !== undefined &&
      (obj.resp = message.resp ? MsgMultiHopSwapResponse.toJSON(message.resp) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySimulateMultiHopSwapResponse>, I>>(
    object: I,
  ): QuerySimulateMultiHopSwapResponse {
    const message = createBaseQuerySimulateMultiHopSwapResponse();
    if (object.resp !== undefined && object.resp !== null) {
      message.resp = MsgMultiHopSwapResponse.fromPartial(object.resp);
    }
    return message;
  },
};
