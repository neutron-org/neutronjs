"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuerySimulateMultiHopSwapResponse = exports.QuerySimulateMultiHopSwapRequest = exports.QuerySimulateCancelLimitOrderResponse = exports.QuerySimulateCancelLimitOrderRequest = exports.QuerySimulateWithdrawFilledLimitOrderResponse = exports.QuerySimulateWithdrawFilledLimitOrderRequest = exports.QuerySimulatePlaceLimitOrderResponse = exports.QuerySimulatePlaceLimitOrderRequest = exports.QuerySimulateWithdrawalResponse = exports.QuerySimulateWithdrawalWithSharesRequest = exports.QuerySimulateWithdrawalRequest = exports.QuerySimulateDepositResponse = exports.QuerySimulateDepositRequest = exports.QueryAllPoolMetadataResponse = exports.QueryAllPoolMetadataRequest = exports.QueryGetPoolMetadataResponse = exports.QueryGetPoolMetadataRequest = exports.QueryPoolResponse = exports.QueryPoolByIDRequest = exports.QueryPoolRequest = exports.QueryEstimatePlaceLimitOrderResponse = exports.QueryEstimatePlaceLimitOrderRequest = exports.QueryEstimateMultiHopSwapResponse = exports.QueryEstimateMultiHopSwapRequest = exports.QueryGetPoolReservesResponse = exports.QueryGetPoolReservesRequest = exports.QueryAllPoolReservesResponse = exports.QueryAllPoolReservesRequest = exports.QueryAllInactiveLimitOrderTrancheResponse = exports.QueryAllInactiveLimitOrderTrancheRequest = exports.QueryGetInactiveLimitOrderTrancheResponse = exports.QueryGetInactiveLimitOrderTrancheRequest = exports.QueryAllTickLiquidityResponse = exports.QueryAllTickLiquidityRequest = exports.QueryAllLimitOrderTrancheUserByAddressResponse = exports.QueryAllLimitOrderTrancheUserByAddressRequest = exports.QueryAllUserDepositsResponse = exports.QueryAllUserDepositsRequest = exports.QueryAllLimitOrderTrancheResponse = exports.QueryAllLimitOrderTrancheRequest = exports.QueryGetLimitOrderTrancheResponse = exports.QueryGetLimitOrderTrancheRequest = exports.QueryAllLimitOrderTrancheUserResponse = exports.QueryAllLimitOrderTrancheUserRequest = exports.QueryGetLimitOrderTrancheUserResponse = exports.QueryGetLimitOrderTrancheUserRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const pagination_js_1 = require("../../cosmos/base/query/v1beta1/pagination.js");
const tx_js_1 = require("./tx.js");
const timestamp_js_1 = require("../../google/protobuf/timestamp.js");
const params_js_1 = require("./params.js");
const limit_order_tranche_user_js_1 = require("./limit_order_tranche_user.js");
const limit_order_tranche_js_1 = require("./limit_order_tranche.js");
const deposit_record_js_1 = require("./deposit_record.js");
const tick_liquidity_js_1 = require("./tick_liquidity.js");
const pool_reserves_js_1 = require("./pool_reserves.js");
const coin_js_1 = require("../../cosmos/base/v1beta1/coin.js");
const pool_js_1 = require("./pool.js");
const pool_metadata_js_1 = require("./pool_metadata.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.dex";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/neutron.dex.QueryParamsRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
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
    fromJSON(_) {
        const obj = createBaseQueryParamsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return {
        params: params_js_1.Params.fromPartial({}),
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/neutron.dex.QueryParamsResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_js_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryParamsResponse();
        if ((0, helpers_js_1.isSet)(object.params))
            obj.params = params_js_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_js_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_js_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseQueryGetLimitOrderTrancheUserRequest() {
    return {
        address: "",
        trancheKey: "",
        calcWithdrawableShares: false,
    };
}
exports.QueryGetLimitOrderTrancheUserRequest = {
    typeUrl: "/neutron.dex.QueryGetLimitOrderTrancheUserRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
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
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBaseQueryGetLimitOrderTrancheUserRequest();
        if ((0, helpers_js_1.isSet)(object.address))
            obj.address = String(object.address);
        if ((0, helpers_js_1.isSet)(object.trancheKey))
            obj.trancheKey = String(object.trancheKey);
        if ((0, helpers_js_1.isSet)(object.calcWithdrawableShares))
            obj.calcWithdrawableShares = Boolean(object.calcWithdrawableShares);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
        message.calcWithdrawableShares !== undefined &&
            (obj.calcWithdrawableShares = message.calcWithdrawableShares);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetLimitOrderTrancheUserRequest();
        message.address = object.address ?? "";
        message.trancheKey = object.trancheKey ?? "";
        message.calcWithdrawableShares = object.calcWithdrawableShares ?? false;
        return message;
    },
};
function createBaseQueryGetLimitOrderTrancheUserResponse() {
    return {
        limitOrderTrancheUser: undefined,
        withdrawableShares: undefined,
    };
}
exports.QueryGetLimitOrderTrancheUserResponse = {
    typeUrl: "/neutron.dex.QueryGetLimitOrderTrancheUserResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.limitOrderTrancheUser !== undefined) {
            limit_order_tranche_user_js_1.LimitOrderTrancheUser.encode(message.limitOrderTrancheUser, writer.uint32(10).fork()).ldelim();
        }
        if (message.withdrawableShares !== undefined) {
            writer.uint32(18).string(message.withdrawableShares);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetLimitOrderTrancheUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limitOrderTrancheUser = limit_order_tranche_user_js_1.LimitOrderTrancheUser.decode(reader, reader.uint32());
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
    fromJSON(object) {
        const obj = createBaseQueryGetLimitOrderTrancheUserResponse();
        if ((0, helpers_js_1.isSet)(object.limitOrderTrancheUser))
            obj.limitOrderTrancheUser = limit_order_tranche_user_js_1.LimitOrderTrancheUser.fromJSON(object.limitOrderTrancheUser);
        if ((0, helpers_js_1.isSet)(object.withdrawableShares))
            obj.withdrawableShares = String(object.withdrawableShares);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.limitOrderTrancheUser !== undefined &&
            (obj.limitOrderTrancheUser = message.limitOrderTrancheUser
                ? limit_order_tranche_user_js_1.LimitOrderTrancheUser.toJSON(message.limitOrderTrancheUser)
                : undefined);
        message.withdrawableShares !== undefined && (obj.withdrawableShares = message.withdrawableShares);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetLimitOrderTrancheUserResponse();
        if (object.limitOrderTrancheUser !== undefined && object.limitOrderTrancheUser !== null) {
            message.limitOrderTrancheUser = limit_order_tranche_user_js_1.LimitOrderTrancheUser.fromPartial(object.limitOrderTrancheUser);
        }
        message.withdrawableShares = object.withdrawableShares ?? undefined;
        return message;
    },
};
function createBaseQueryAllLimitOrderTrancheUserRequest() {
    return {
        pagination: undefined,
    };
}
exports.QueryAllLimitOrderTrancheUserRequest = {
    typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheUserRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllLimitOrderTrancheUserRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_js_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAllLimitOrderTrancheUserRequest();
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllLimitOrderTrancheUserRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryAllLimitOrderTrancheUserResponse() {
    return {
        limitOrderTrancheUser: [],
        pagination: undefined,
    };
}
exports.QueryAllLimitOrderTrancheUserResponse = {
    typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheUserResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.limitOrderTrancheUser) {
            limit_order_tranche_user_js_1.LimitOrderTrancheUser.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllLimitOrderTrancheUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limitOrderTrancheUser.push(limit_order_tranche_user_js_1.LimitOrderTrancheUser.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_js_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAllLimitOrderTrancheUserResponse();
        if (Array.isArray(object?.limitOrderTrancheUser))
            obj.limitOrderTrancheUser = object.limitOrderTrancheUser.map((e) => limit_order_tranche_user_js_1.LimitOrderTrancheUser.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.limitOrderTrancheUser) {
            obj.limitOrderTrancheUser = message.limitOrderTrancheUser.map((e) => e ? limit_order_tranche_user_js_1.LimitOrderTrancheUser.toJSON(e) : undefined);
        }
        else {
            obj.limitOrderTrancheUser = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllLimitOrderTrancheUserResponse();
        message.limitOrderTrancheUser =
            object.limitOrderTrancheUser?.map((e) => limit_order_tranche_user_js_1.LimitOrderTrancheUser.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryGetLimitOrderTrancheRequest() {
    return {
        pairId: "",
        tickIndex: BigInt(0),
        tokenIn: "",
        trancheKey: "",
    };
}
exports.QueryGetLimitOrderTrancheRequest = {
    typeUrl: "/neutron.dex.QueryGetLimitOrderTrancheRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
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
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBaseQueryGetLimitOrderTrancheRequest();
        if ((0, helpers_js_1.isSet)(object.pairId))
            obj.pairId = String(object.pairId);
        if ((0, helpers_js_1.isSet)(object.tickIndex))
            obj.tickIndex = BigInt(object.tickIndex.toString());
        if ((0, helpers_js_1.isSet)(object.tokenIn))
            obj.tokenIn = String(object.tokenIn);
        if ((0, helpers_js_1.isSet)(object.trancheKey))
            obj.trancheKey = String(object.trancheKey);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.pairId !== undefined && (obj.pairId = message.pairId);
        message.tickIndex !== undefined && (obj.tickIndex = (message.tickIndex || BigInt(0)).toString());
        message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
        message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
        return obj;
    },
    fromPartial(object) {
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
function createBaseQueryGetLimitOrderTrancheResponse() {
    return {
        limitOrderTranche: undefined,
    };
}
exports.QueryGetLimitOrderTrancheResponse = {
    typeUrl: "/neutron.dex.QueryGetLimitOrderTrancheResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.limitOrderTranche !== undefined) {
            limit_order_tranche_js_1.LimitOrderTranche.encode(message.limitOrderTranche, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetLimitOrderTrancheResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limitOrderTranche = limit_order_tranche_js_1.LimitOrderTranche.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetLimitOrderTrancheResponse();
        if ((0, helpers_js_1.isSet)(object.limitOrderTranche))
            obj.limitOrderTranche = limit_order_tranche_js_1.LimitOrderTranche.fromJSON(object.limitOrderTranche);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.limitOrderTranche !== undefined &&
            (obj.limitOrderTranche = message.limitOrderTranche
                ? limit_order_tranche_js_1.LimitOrderTranche.toJSON(message.limitOrderTranche)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetLimitOrderTrancheResponse();
        if (object.limitOrderTranche !== undefined && object.limitOrderTranche !== null) {
            message.limitOrderTranche = limit_order_tranche_js_1.LimitOrderTranche.fromPartial(object.limitOrderTranche);
        }
        return message;
    },
};
function createBaseQueryAllLimitOrderTrancheRequest() {
    return {
        pairId: "",
        tokenIn: "",
        pagination: undefined,
    };
}
exports.QueryAllLimitOrderTrancheRequest = {
    typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.pairId !== "") {
            writer.uint32(10).string(message.pairId);
        }
        if (message.tokenIn !== "") {
            writer.uint32(18).string(message.tokenIn);
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
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
                    message.pagination = pagination_js_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAllLimitOrderTrancheRequest();
        if ((0, helpers_js_1.isSet)(object.pairId))
            obj.pairId = String(object.pairId);
        if ((0, helpers_js_1.isSet)(object.tokenIn))
            obj.tokenIn = String(object.tokenIn);
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.pairId !== undefined && (obj.pairId = message.pairId);
        message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllLimitOrderTrancheRequest();
        message.pairId = object.pairId ?? "";
        message.tokenIn = object.tokenIn ?? "";
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryAllLimitOrderTrancheResponse() {
    return {
        limitOrderTranche: [],
        pagination: undefined,
    };
}
exports.QueryAllLimitOrderTrancheResponse = {
    typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.limitOrderTranche) {
            limit_order_tranche_js_1.LimitOrderTranche.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllLimitOrderTrancheResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limitOrderTranche.push(limit_order_tranche_js_1.LimitOrderTranche.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_js_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAllLimitOrderTrancheResponse();
        if (Array.isArray(object?.limitOrderTranche))
            obj.limitOrderTranche = object.limitOrderTranche.map((e) => limit_order_tranche_js_1.LimitOrderTranche.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.limitOrderTranche) {
            obj.limitOrderTranche = message.limitOrderTranche.map((e) => e ? limit_order_tranche_js_1.LimitOrderTranche.toJSON(e) : undefined);
        }
        else {
            obj.limitOrderTranche = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllLimitOrderTrancheResponse();
        message.limitOrderTranche = object.limitOrderTranche?.map((e) => limit_order_tranche_js_1.LimitOrderTranche.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryAllUserDepositsRequest() {
    return {
        address: "",
        pagination: undefined,
        includePoolData: false,
    };
}
exports.QueryAllUserDepositsRequest = {
    typeUrl: "/neutron.dex.QueryAllUserDepositsRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.includePoolData === true) {
            writer.uint32(24).bool(message.includePoolData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllUserDepositsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_js_1.PageRequest.decode(reader, reader.uint32());
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
    fromJSON(object) {
        const obj = createBaseQueryAllUserDepositsRequest();
        if ((0, helpers_js_1.isSet)(object.address))
            obj.address = String(object.address);
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageRequest.fromJSON(object.pagination);
        if ((0, helpers_js_1.isSet)(object.includePoolData))
            obj.includePoolData = Boolean(object.includePoolData);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageRequest.toJSON(message.pagination) : undefined);
        message.includePoolData !== undefined && (obj.includePoolData = message.includePoolData);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllUserDepositsRequest();
        message.address = object.address ?? "";
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageRequest.fromPartial(object.pagination);
        }
        message.includePoolData = object.includePoolData ?? false;
        return message;
    },
};
function createBaseQueryAllUserDepositsResponse() {
    return {
        deposits: [],
        pagination: undefined,
    };
}
exports.QueryAllUserDepositsResponse = {
    typeUrl: "/neutron.dex.QueryAllUserDepositsResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.deposits) {
            deposit_record_js_1.DepositRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllUserDepositsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposits.push(deposit_record_js_1.DepositRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_js_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAllUserDepositsResponse();
        if (Array.isArray(object?.deposits))
            obj.deposits = object.deposits.map((e) => deposit_record_js_1.DepositRecord.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.deposits) {
            obj.deposits = message.deposits.map((e) => (e ? deposit_record_js_1.DepositRecord.toJSON(e) : undefined));
        }
        else {
            obj.deposits = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllUserDepositsResponse();
        message.deposits = object.deposits?.map((e) => deposit_record_js_1.DepositRecord.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryAllLimitOrderTrancheUserByAddressRequest() {
    return {
        address: "",
        pagination: undefined,
    };
}
exports.QueryAllLimitOrderTrancheUserByAddressRequest = {
    typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheUserByAddressRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllLimitOrderTrancheUserByAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_js_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAllLimitOrderTrancheUserByAddressRequest();
        if ((0, helpers_js_1.isSet)(object.address))
            obj.address = String(object.address);
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllLimitOrderTrancheUserByAddressRequest();
        message.address = object.address ?? "";
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryAllLimitOrderTrancheUserByAddressResponse() {
    return {
        limitOrders: [],
        pagination: undefined,
    };
}
exports.QueryAllLimitOrderTrancheUserByAddressResponse = {
    typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheUserByAddressResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.limitOrders) {
            limit_order_tranche_user_js_1.LimitOrderTrancheUser.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllLimitOrderTrancheUserByAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limitOrders.push(limit_order_tranche_user_js_1.LimitOrderTrancheUser.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_js_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAllLimitOrderTrancheUserByAddressResponse();
        if (Array.isArray(object?.limitOrders))
            obj.limitOrders = object.limitOrders.map((e) => limit_order_tranche_user_js_1.LimitOrderTrancheUser.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.limitOrders) {
            obj.limitOrders = message.limitOrders.map((e) => (e ? limit_order_tranche_user_js_1.LimitOrderTrancheUser.toJSON(e) : undefined));
        }
        else {
            obj.limitOrders = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllLimitOrderTrancheUserByAddressResponse();
        message.limitOrders = object.limitOrders?.map((e) => limit_order_tranche_user_js_1.LimitOrderTrancheUser.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryAllTickLiquidityRequest() {
    return {
        pairId: "",
        tokenIn: "",
        pagination: undefined,
    };
}
exports.QueryAllTickLiquidityRequest = {
    typeUrl: "/neutron.dex.QueryAllTickLiquidityRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.pairId !== "") {
            writer.uint32(10).string(message.pairId);
        }
        if (message.tokenIn !== "") {
            writer.uint32(18).string(message.tokenIn);
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
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
                    message.pagination = pagination_js_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAllTickLiquidityRequest();
        if ((0, helpers_js_1.isSet)(object.pairId))
            obj.pairId = String(object.pairId);
        if ((0, helpers_js_1.isSet)(object.tokenIn))
            obj.tokenIn = String(object.tokenIn);
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.pairId !== undefined && (obj.pairId = message.pairId);
        message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllTickLiquidityRequest();
        message.pairId = object.pairId ?? "";
        message.tokenIn = object.tokenIn ?? "";
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryAllTickLiquidityResponse() {
    return {
        tickLiquidity: [],
        pagination: undefined,
    };
}
exports.QueryAllTickLiquidityResponse = {
    typeUrl: "/neutron.dex.QueryAllTickLiquidityResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.tickLiquidity) {
            tick_liquidity_js_1.TickLiquidity.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllTickLiquidityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tickLiquidity.push(tick_liquidity_js_1.TickLiquidity.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_js_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAllTickLiquidityResponse();
        if (Array.isArray(object?.tickLiquidity))
            obj.tickLiquidity = object.tickLiquidity.map((e) => tick_liquidity_js_1.TickLiquidity.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.tickLiquidity) {
            obj.tickLiquidity = message.tickLiquidity.map((e) => (e ? tick_liquidity_js_1.TickLiquidity.toJSON(e) : undefined));
        }
        else {
            obj.tickLiquidity = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllTickLiquidityResponse();
        message.tickLiquidity = object.tickLiquidity?.map((e) => tick_liquidity_js_1.TickLiquidity.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryGetInactiveLimitOrderTrancheRequest() {
    return {
        pairId: "",
        tokenIn: "",
        tickIndex: BigInt(0),
        trancheKey: "",
    };
}
exports.QueryGetInactiveLimitOrderTrancheRequest = {
    typeUrl: "/neutron.dex.QueryGetInactiveLimitOrderTrancheRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
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
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBaseQueryGetInactiveLimitOrderTrancheRequest();
        if ((0, helpers_js_1.isSet)(object.pairId))
            obj.pairId = String(object.pairId);
        if ((0, helpers_js_1.isSet)(object.tokenIn))
            obj.tokenIn = String(object.tokenIn);
        if ((0, helpers_js_1.isSet)(object.tickIndex))
            obj.tickIndex = BigInt(object.tickIndex.toString());
        if ((0, helpers_js_1.isSet)(object.trancheKey))
            obj.trancheKey = String(object.trancheKey);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.pairId !== undefined && (obj.pairId = message.pairId);
        message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
        message.tickIndex !== undefined && (obj.tickIndex = (message.tickIndex || BigInt(0)).toString());
        message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
        return obj;
    },
    fromPartial(object) {
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
function createBaseQueryGetInactiveLimitOrderTrancheResponse() {
    return {
        inactiveLimitOrderTranche: undefined,
    };
}
exports.QueryGetInactiveLimitOrderTrancheResponse = {
    typeUrl: "/neutron.dex.QueryGetInactiveLimitOrderTrancheResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.inactiveLimitOrderTranche !== undefined) {
            limit_order_tranche_js_1.LimitOrderTranche.encode(message.inactiveLimitOrderTranche, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetInactiveLimitOrderTrancheResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inactiveLimitOrderTranche = limit_order_tranche_js_1.LimitOrderTranche.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetInactiveLimitOrderTrancheResponse();
        if ((0, helpers_js_1.isSet)(object.inactiveLimitOrderTranche))
            obj.inactiveLimitOrderTranche = limit_order_tranche_js_1.LimitOrderTranche.fromJSON(object.inactiveLimitOrderTranche);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.inactiveLimitOrderTranche !== undefined &&
            (obj.inactiveLimitOrderTranche = message.inactiveLimitOrderTranche
                ? limit_order_tranche_js_1.LimitOrderTranche.toJSON(message.inactiveLimitOrderTranche)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetInactiveLimitOrderTrancheResponse();
        if (object.inactiveLimitOrderTranche !== undefined && object.inactiveLimitOrderTranche !== null) {
            message.inactiveLimitOrderTranche = limit_order_tranche_js_1.LimitOrderTranche.fromPartial(object.inactiveLimitOrderTranche);
        }
        return message;
    },
};
function createBaseQueryAllInactiveLimitOrderTrancheRequest() {
    return {
        pagination: undefined,
    };
}
exports.QueryAllInactiveLimitOrderTrancheRequest = {
    typeUrl: "/neutron.dex.QueryAllInactiveLimitOrderTrancheRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllInactiveLimitOrderTrancheRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_js_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAllInactiveLimitOrderTrancheRequest();
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllInactiveLimitOrderTrancheRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryAllInactiveLimitOrderTrancheResponse() {
    return {
        inactiveLimitOrderTranche: [],
        pagination: undefined,
    };
}
exports.QueryAllInactiveLimitOrderTrancheResponse = {
    typeUrl: "/neutron.dex.QueryAllInactiveLimitOrderTrancheResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.inactiveLimitOrderTranche) {
            limit_order_tranche_js_1.LimitOrderTranche.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllInactiveLimitOrderTrancheResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inactiveLimitOrderTranche.push(limit_order_tranche_js_1.LimitOrderTranche.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_js_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAllInactiveLimitOrderTrancheResponse();
        if (Array.isArray(object?.inactiveLimitOrderTranche))
            obj.inactiveLimitOrderTranche = object.inactiveLimitOrderTranche.map((e) => limit_order_tranche_js_1.LimitOrderTranche.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.inactiveLimitOrderTranche) {
            obj.inactiveLimitOrderTranche = message.inactiveLimitOrderTranche.map((e) => e ? limit_order_tranche_js_1.LimitOrderTranche.toJSON(e) : undefined);
        }
        else {
            obj.inactiveLimitOrderTranche = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllInactiveLimitOrderTrancheResponse();
        message.inactiveLimitOrderTranche =
            object.inactiveLimitOrderTranche?.map((e) => limit_order_tranche_js_1.LimitOrderTranche.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryAllPoolReservesRequest() {
    return {
        pairId: "",
        tokenIn: "",
        pagination: undefined,
    };
}
exports.QueryAllPoolReservesRequest = {
    typeUrl: "/neutron.dex.QueryAllPoolReservesRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.pairId !== "") {
            writer.uint32(10).string(message.pairId);
        }
        if (message.tokenIn !== "") {
            writer.uint32(18).string(message.tokenIn);
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
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
                    message.pagination = pagination_js_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAllPoolReservesRequest();
        if ((0, helpers_js_1.isSet)(object.pairId))
            obj.pairId = String(object.pairId);
        if ((0, helpers_js_1.isSet)(object.tokenIn))
            obj.tokenIn = String(object.tokenIn);
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.pairId !== undefined && (obj.pairId = message.pairId);
        message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllPoolReservesRequest();
        message.pairId = object.pairId ?? "";
        message.tokenIn = object.tokenIn ?? "";
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryAllPoolReservesResponse() {
    return {
        poolReserves: [],
        pagination: undefined,
    };
}
exports.QueryAllPoolReservesResponse = {
    typeUrl: "/neutron.dex.QueryAllPoolReservesResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.poolReserves) {
            pool_reserves_js_1.PoolReserves.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllPoolReservesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolReserves.push(pool_reserves_js_1.PoolReserves.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_js_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAllPoolReservesResponse();
        if (Array.isArray(object?.poolReserves))
            obj.poolReserves = object.poolReserves.map((e) => pool_reserves_js_1.PoolReserves.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.poolReserves) {
            obj.poolReserves = message.poolReserves.map((e) => (e ? pool_reserves_js_1.PoolReserves.toJSON(e) : undefined));
        }
        else {
            obj.poolReserves = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllPoolReservesResponse();
        message.poolReserves = object.poolReserves?.map((e) => pool_reserves_js_1.PoolReserves.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryGetPoolReservesRequest() {
    return {
        pairId: "",
        tokenIn: "",
        tickIndex: BigInt(0),
        fee: BigInt(0),
    };
}
exports.QueryGetPoolReservesRequest = {
    typeUrl: "/neutron.dex.QueryGetPoolReservesRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
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
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBaseQueryGetPoolReservesRequest();
        if ((0, helpers_js_1.isSet)(object.pairId))
            obj.pairId = String(object.pairId);
        if ((0, helpers_js_1.isSet)(object.tokenIn))
            obj.tokenIn = String(object.tokenIn);
        if ((0, helpers_js_1.isSet)(object.tickIndex))
            obj.tickIndex = BigInt(object.tickIndex.toString());
        if ((0, helpers_js_1.isSet)(object.fee))
            obj.fee = BigInt(object.fee.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.pairId !== undefined && (obj.pairId = message.pairId);
        message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
        message.tickIndex !== undefined && (obj.tickIndex = (message.tickIndex || BigInt(0)).toString());
        message.fee !== undefined && (obj.fee = (message.fee || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
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
function createBaseQueryGetPoolReservesResponse() {
    return {
        poolReserves: undefined,
    };
}
exports.QueryGetPoolReservesResponse = {
    typeUrl: "/neutron.dex.QueryGetPoolReservesResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.poolReserves !== undefined) {
            pool_reserves_js_1.PoolReserves.encode(message.poolReserves, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetPoolReservesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolReserves = pool_reserves_js_1.PoolReserves.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetPoolReservesResponse();
        if ((0, helpers_js_1.isSet)(object.poolReserves))
            obj.poolReserves = pool_reserves_js_1.PoolReserves.fromJSON(object.poolReserves);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolReserves !== undefined &&
            (obj.poolReserves = message.poolReserves ? pool_reserves_js_1.PoolReserves.toJSON(message.poolReserves) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetPoolReservesResponse();
        if (object.poolReserves !== undefined && object.poolReserves !== null) {
            message.poolReserves = pool_reserves_js_1.PoolReserves.fromPartial(object.poolReserves);
        }
        return message;
    },
};
function createBaseQueryEstimateMultiHopSwapRequest() {
    return {
        creator: "",
        receiver: "",
        routes: [],
        amountIn: "",
        exitLimitPrice: "",
        pickBestRoute: false,
    };
}
exports.QueryEstimateMultiHopSwapRequest = {
    typeUrl: "/neutron.dex.QueryEstimateMultiHopSwapRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        for (const v of message.routes) {
            tx_js_1.MultiHopRoute.encode(v, writer.uint32(26).fork()).ldelim();
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
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
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
                    message.routes.push(tx_js_1.MultiHopRoute.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const obj = createBaseQueryEstimateMultiHopSwapRequest();
        if ((0, helpers_js_1.isSet)(object.creator))
            obj.creator = String(object.creator);
        if ((0, helpers_js_1.isSet)(object.receiver))
            obj.receiver = String(object.receiver);
        if (Array.isArray(object?.routes))
            obj.routes = object.routes.map((e) => tx_js_1.MultiHopRoute.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.amountIn))
            obj.amountIn = String(object.amountIn);
        if ((0, helpers_js_1.isSet)(object.exitLimitPrice))
            obj.exitLimitPrice = String(object.exitLimitPrice);
        if ((0, helpers_js_1.isSet)(object.pickBestRoute))
            obj.pickBestRoute = Boolean(object.pickBestRoute);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        if (message.routes) {
            obj.routes = message.routes.map((e) => (e ? tx_js_1.MultiHopRoute.toJSON(e) : undefined));
        }
        else {
            obj.routes = [];
        }
        message.amountIn !== undefined && (obj.amountIn = message.amountIn);
        message.exitLimitPrice !== undefined && (obj.exitLimitPrice = message.exitLimitPrice);
        message.pickBestRoute !== undefined && (obj.pickBestRoute = message.pickBestRoute);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEstimateMultiHopSwapRequest();
        message.creator = object.creator ?? "";
        message.receiver = object.receiver ?? "";
        message.routes = object.routes?.map((e) => tx_js_1.MultiHopRoute.fromPartial(e)) || [];
        message.amountIn = object.amountIn ?? "";
        message.exitLimitPrice = object.exitLimitPrice ?? "";
        message.pickBestRoute = object.pickBestRoute ?? false;
        return message;
    },
};
function createBaseQueryEstimateMultiHopSwapResponse() {
    return {
        coinOut: coin_js_1.Coin.fromPartial({}),
    };
}
exports.QueryEstimateMultiHopSwapResponse = {
    typeUrl: "/neutron.dex.QueryEstimateMultiHopSwapResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.coinOut !== undefined) {
            coin_js_1.Coin.encode(message.coinOut, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEstimateMultiHopSwapResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coinOut = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryEstimateMultiHopSwapResponse();
        if ((0, helpers_js_1.isSet)(object.coinOut))
            obj.coinOut = coin_js_1.Coin.fromJSON(object.coinOut);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.coinOut !== undefined &&
            (obj.coinOut = message.coinOut ? coin_js_1.Coin.toJSON(message.coinOut) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEstimateMultiHopSwapResponse();
        if (object.coinOut !== undefined && object.coinOut !== null) {
            message.coinOut = coin_js_1.Coin.fromPartial(object.coinOut);
        }
        return message;
    },
};
function createBaseQueryEstimatePlaceLimitOrderRequest() {
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
exports.QueryEstimatePlaceLimitOrderRequest = {
    typeUrl: "/neutron.dex.QueryEstimatePlaceLimitOrderRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
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
            timestamp_js_1.Timestamp.encode(message.expirationTime, writer.uint32(66).fork()).ldelim();
        }
        if (message.maxAmountOut !== undefined) {
            writer.uint32(74).string(message.maxAmountOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
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
                    message.orderType = reader.int32();
                    break;
                case 8:
                    message.expirationTime = timestamp_js_1.Timestamp.decode(reader, reader.uint32());
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
    fromJSON(object) {
        const obj = createBaseQueryEstimatePlaceLimitOrderRequest();
        if ((0, helpers_js_1.isSet)(object.creator))
            obj.creator = String(object.creator);
        if ((0, helpers_js_1.isSet)(object.receiver))
            obj.receiver = String(object.receiver);
        if ((0, helpers_js_1.isSet)(object.tokenIn))
            obj.tokenIn = String(object.tokenIn);
        if ((0, helpers_js_1.isSet)(object.tokenOut))
            obj.tokenOut = String(object.tokenOut);
        if ((0, helpers_js_1.isSet)(object.tickIndexInToOut))
            obj.tickIndexInToOut = BigInt(object.tickIndexInToOut.toString());
        if ((0, helpers_js_1.isSet)(object.amountIn))
            obj.amountIn = String(object.amountIn);
        if ((0, helpers_js_1.isSet)(object.orderType))
            obj.orderType = (0, tx_js_1.limitOrderTypeFromJSON)(object.orderType);
        if ((0, helpers_js_1.isSet)(object.expirationTime))
            obj.expirationTime = (0, helpers_js_1.fromJsonTimestamp)(object.expirationTime);
        if ((0, helpers_js_1.isSet)(object.maxAmountOut))
            obj.maxAmountOut = String(object.maxAmountOut);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
        message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
        message.tickIndexInToOut !== undefined &&
            (obj.tickIndexInToOut = (message.tickIndexInToOut || BigInt(0)).toString());
        message.amountIn !== undefined && (obj.amountIn = message.amountIn);
        message.orderType !== undefined && (obj.orderType = (0, tx_js_1.limitOrderTypeToJSON)(message.orderType));
        message.expirationTime !== undefined &&
            (obj.expirationTime = (0, helpers_js_1.fromTimestamp)(message.expirationTime).toISOString());
        message.maxAmountOut !== undefined && (obj.maxAmountOut = message.maxAmountOut);
        return obj;
    },
    fromPartial(object) {
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
            message.expirationTime = timestamp_js_1.Timestamp.fromPartial(object.expirationTime);
        }
        message.maxAmountOut = object.maxAmountOut ?? undefined;
        return message;
    },
};
function createBaseQueryEstimatePlaceLimitOrderResponse() {
    return {
        totalInCoin: coin_js_1.Coin.fromPartial({}),
        swapInCoin: coin_js_1.Coin.fromPartial({}),
        swapOutCoin: coin_js_1.Coin.fromPartial({}),
    };
}
exports.QueryEstimatePlaceLimitOrderResponse = {
    typeUrl: "/neutron.dex.QueryEstimatePlaceLimitOrderResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.totalInCoin !== undefined) {
            coin_js_1.Coin.encode(message.totalInCoin, writer.uint32(10).fork()).ldelim();
        }
        if (message.swapInCoin !== undefined) {
            coin_js_1.Coin.encode(message.swapInCoin, writer.uint32(18).fork()).ldelim();
        }
        if (message.swapOutCoin !== undefined) {
            coin_js_1.Coin.encode(message.swapOutCoin, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEstimatePlaceLimitOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalInCoin = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.swapInCoin = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.swapOutCoin = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryEstimatePlaceLimitOrderResponse();
        if ((0, helpers_js_1.isSet)(object.totalInCoin))
            obj.totalInCoin = coin_js_1.Coin.fromJSON(object.totalInCoin);
        if ((0, helpers_js_1.isSet)(object.swapInCoin))
            obj.swapInCoin = coin_js_1.Coin.fromJSON(object.swapInCoin);
        if ((0, helpers_js_1.isSet)(object.swapOutCoin))
            obj.swapOutCoin = coin_js_1.Coin.fromJSON(object.swapOutCoin);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.totalInCoin !== undefined &&
            (obj.totalInCoin = message.totalInCoin ? coin_js_1.Coin.toJSON(message.totalInCoin) : undefined);
        message.swapInCoin !== undefined &&
            (obj.swapInCoin = message.swapInCoin ? coin_js_1.Coin.toJSON(message.swapInCoin) : undefined);
        message.swapOutCoin !== undefined &&
            (obj.swapOutCoin = message.swapOutCoin ? coin_js_1.Coin.toJSON(message.swapOutCoin) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEstimatePlaceLimitOrderResponse();
        if (object.totalInCoin !== undefined && object.totalInCoin !== null) {
            message.totalInCoin = coin_js_1.Coin.fromPartial(object.totalInCoin);
        }
        if (object.swapInCoin !== undefined && object.swapInCoin !== null) {
            message.swapInCoin = coin_js_1.Coin.fromPartial(object.swapInCoin);
        }
        if (object.swapOutCoin !== undefined && object.swapOutCoin !== null) {
            message.swapOutCoin = coin_js_1.Coin.fromPartial(object.swapOutCoin);
        }
        return message;
    },
};
function createBaseQueryPoolRequest() {
    return {
        pairId: "",
        tickIndex: BigInt(0),
        fee: BigInt(0),
    };
}
exports.QueryPoolRequest = {
    typeUrl: "/neutron.dex.QueryPoolRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
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
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBaseQueryPoolRequest();
        if ((0, helpers_js_1.isSet)(object.pairId))
            obj.pairId = String(object.pairId);
        if ((0, helpers_js_1.isSet)(object.tickIndex))
            obj.tickIndex = BigInt(object.tickIndex.toString());
        if ((0, helpers_js_1.isSet)(object.fee))
            obj.fee = BigInt(object.fee.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.pairId !== undefined && (obj.pairId = message.pairId);
        message.tickIndex !== undefined && (obj.tickIndex = (message.tickIndex || BigInt(0)).toString());
        message.fee !== undefined && (obj.fee = (message.fee || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
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
function createBaseQueryPoolByIDRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.QueryPoolByIDRequest = {
    typeUrl: "/neutron.dex.QueryPoolByIDRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBaseQueryPoolByIDRequest();
        if ((0, helpers_js_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolByIDRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
function createBaseQueryPoolResponse() {
    return {
        pool: undefined,
    };
}
exports.QueryPoolResponse = {
    typeUrl: "/neutron.dex.QueryPoolResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.pool !== undefined) {
            pool_js_1.Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = pool_js_1.Pool.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryPoolResponse();
        if ((0, helpers_js_1.isSet)(object.pool))
            obj.pool = pool_js_1.Pool.fromJSON(object.pool);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.pool !== undefined && (obj.pool = message.pool ? pool_js_1.Pool.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolResponse();
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = pool_js_1.Pool.fromPartial(object.pool);
        }
        return message;
    },
};
function createBaseQueryGetPoolMetadataRequest() {
    return {
        id: BigInt(0),
    };
}
exports.QueryGetPoolMetadataRequest = {
    typeUrl: "/neutron.dex.QueryGetPoolMetadataRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBaseQueryGetPoolMetadataRequest();
        if ((0, helpers_js_1.isSet)(object.id))
            obj.id = BigInt(object.id.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetPoolMetadataRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id.toString());
        }
        return message;
    },
};
function createBaseQueryGetPoolMetadataResponse() {
    return {
        poolMetadata: pool_metadata_js_1.PoolMetadata.fromPartial({}),
    };
}
exports.QueryGetPoolMetadataResponse = {
    typeUrl: "/neutron.dex.QueryGetPoolMetadataResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.poolMetadata !== undefined) {
            pool_metadata_js_1.PoolMetadata.encode(message.poolMetadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetPoolMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolMetadata = pool_metadata_js_1.PoolMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetPoolMetadataResponse();
        if ((0, helpers_js_1.isSet)(object.poolMetadata))
            obj.poolMetadata = pool_metadata_js_1.PoolMetadata.fromJSON(object.poolMetadata);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolMetadata !== undefined &&
            (obj.poolMetadata = message.poolMetadata ? pool_metadata_js_1.PoolMetadata.toJSON(message.poolMetadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetPoolMetadataResponse();
        if (object.poolMetadata !== undefined && object.poolMetadata !== null) {
            message.poolMetadata = pool_metadata_js_1.PoolMetadata.fromPartial(object.poolMetadata);
        }
        return message;
    },
};
function createBaseQueryAllPoolMetadataRequest() {
    return {
        pagination: undefined,
    };
}
exports.QueryAllPoolMetadataRequest = {
    typeUrl: "/neutron.dex.QueryAllPoolMetadataRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllPoolMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_js_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAllPoolMetadataRequest();
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllPoolMetadataRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryAllPoolMetadataResponse() {
    return {
        poolMetadata: [],
        pagination: undefined,
    };
}
exports.QueryAllPoolMetadataResponse = {
    typeUrl: "/neutron.dex.QueryAllPoolMetadataResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.poolMetadata) {
            pool_metadata_js_1.PoolMetadata.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllPoolMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolMetadata.push(pool_metadata_js_1.PoolMetadata.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_js_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAllPoolMetadataResponse();
        if (Array.isArray(object?.poolMetadata))
            obj.poolMetadata = object.poolMetadata.map((e) => pool_metadata_js_1.PoolMetadata.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.poolMetadata) {
            obj.poolMetadata = message.poolMetadata.map((e) => (e ? pool_metadata_js_1.PoolMetadata.toJSON(e) : undefined));
        }
        else {
            obj.poolMetadata = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllPoolMetadataResponse();
        message.poolMetadata = object.poolMetadata?.map((e) => pool_metadata_js_1.PoolMetadata.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQuerySimulateDepositRequest() {
    return {
        msg: undefined,
    };
}
exports.QuerySimulateDepositRequest = {
    typeUrl: "/neutron.dex.QuerySimulateDepositRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.msg !== undefined) {
            tx_js_1.MsgDeposit.encode(message.msg, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySimulateDepositRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = tx_js_1.MsgDeposit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySimulateDepositRequest();
        if ((0, helpers_js_1.isSet)(object.msg))
            obj.msg = tx_js_1.MsgDeposit.fromJSON(object.msg);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.msg !== undefined && (obj.msg = message.msg ? tx_js_1.MsgDeposit.toJSON(message.msg) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySimulateDepositRequest();
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = tx_js_1.MsgDeposit.fromPartial(object.msg);
        }
        return message;
    },
};
function createBaseQuerySimulateDepositResponse() {
    return {
        resp: undefined,
    };
}
exports.QuerySimulateDepositResponse = {
    typeUrl: "/neutron.dex.QuerySimulateDepositResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.resp !== undefined) {
            tx_js_1.MsgDepositResponse.encode(message.resp, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySimulateDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resp = tx_js_1.MsgDepositResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySimulateDepositResponse();
        if ((0, helpers_js_1.isSet)(object.resp))
            obj.resp = tx_js_1.MsgDepositResponse.fromJSON(object.resp);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.resp !== undefined &&
            (obj.resp = message.resp ? tx_js_1.MsgDepositResponse.toJSON(message.resp) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySimulateDepositResponse();
        if (object.resp !== undefined && object.resp !== null) {
            message.resp = tx_js_1.MsgDepositResponse.fromPartial(object.resp);
        }
        return message;
    },
};
function createBaseQuerySimulateWithdrawalRequest() {
    return {
        msg: undefined,
    };
}
exports.QuerySimulateWithdrawalRequest = {
    typeUrl: "/neutron.dex.QuerySimulateWithdrawalRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.msg !== undefined) {
            tx_js_1.MsgWithdrawal.encode(message.msg, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySimulateWithdrawalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = tx_js_1.MsgWithdrawal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySimulateWithdrawalRequest();
        if ((0, helpers_js_1.isSet)(object.msg))
            obj.msg = tx_js_1.MsgWithdrawal.fromJSON(object.msg);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.msg !== undefined && (obj.msg = message.msg ? tx_js_1.MsgWithdrawal.toJSON(message.msg) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySimulateWithdrawalRequest();
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = tx_js_1.MsgWithdrawal.fromPartial(object.msg);
        }
        return message;
    },
};
function createBaseQuerySimulateWithdrawalWithSharesRequest() {
    return {
        msg: undefined,
    };
}
exports.QuerySimulateWithdrawalWithSharesRequest = {
    typeUrl: "/neutron.dex.QuerySimulateWithdrawalWithSharesRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.msg !== undefined) {
            tx_js_1.MsgWithdrawalWithShares.encode(message.msg, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySimulateWithdrawalWithSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = tx_js_1.MsgWithdrawalWithShares.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySimulateWithdrawalWithSharesRequest();
        if ((0, helpers_js_1.isSet)(object.msg))
            obj.msg = tx_js_1.MsgWithdrawalWithShares.fromJSON(object.msg);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.msg !== undefined &&
            (obj.msg = message.msg ? tx_js_1.MsgWithdrawalWithShares.toJSON(message.msg) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySimulateWithdrawalWithSharesRequest();
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = tx_js_1.MsgWithdrawalWithShares.fromPartial(object.msg);
        }
        return message;
    },
};
function createBaseQuerySimulateWithdrawalResponse() {
    return {
        resp: undefined,
    };
}
exports.QuerySimulateWithdrawalResponse = {
    typeUrl: "/neutron.dex.QuerySimulateWithdrawalResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.resp !== undefined) {
            tx_js_1.MsgWithdrawalResponse.encode(message.resp, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySimulateWithdrawalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resp = tx_js_1.MsgWithdrawalResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySimulateWithdrawalResponse();
        if ((0, helpers_js_1.isSet)(object.resp))
            obj.resp = tx_js_1.MsgWithdrawalResponse.fromJSON(object.resp);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.resp !== undefined &&
            (obj.resp = message.resp ? tx_js_1.MsgWithdrawalResponse.toJSON(message.resp) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySimulateWithdrawalResponse();
        if (object.resp !== undefined && object.resp !== null) {
            message.resp = tx_js_1.MsgWithdrawalResponse.fromPartial(object.resp);
        }
        return message;
    },
};
function createBaseQuerySimulatePlaceLimitOrderRequest() {
    return {
        msg: undefined,
    };
}
exports.QuerySimulatePlaceLimitOrderRequest = {
    typeUrl: "/neutron.dex.QuerySimulatePlaceLimitOrderRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.msg !== undefined) {
            tx_js_1.MsgPlaceLimitOrder.encode(message.msg, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySimulatePlaceLimitOrderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = tx_js_1.MsgPlaceLimitOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySimulatePlaceLimitOrderRequest();
        if ((0, helpers_js_1.isSet)(object.msg))
            obj.msg = tx_js_1.MsgPlaceLimitOrder.fromJSON(object.msg);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.msg !== undefined && (obj.msg = message.msg ? tx_js_1.MsgPlaceLimitOrder.toJSON(message.msg) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySimulatePlaceLimitOrderRequest();
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = tx_js_1.MsgPlaceLimitOrder.fromPartial(object.msg);
        }
        return message;
    },
};
function createBaseQuerySimulatePlaceLimitOrderResponse() {
    return {
        resp: undefined,
    };
}
exports.QuerySimulatePlaceLimitOrderResponse = {
    typeUrl: "/neutron.dex.QuerySimulatePlaceLimitOrderResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.resp !== undefined) {
            tx_js_1.MsgPlaceLimitOrderResponse.encode(message.resp, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySimulatePlaceLimitOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resp = tx_js_1.MsgPlaceLimitOrderResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySimulatePlaceLimitOrderResponse();
        if ((0, helpers_js_1.isSet)(object.resp))
            obj.resp = tx_js_1.MsgPlaceLimitOrderResponse.fromJSON(object.resp);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.resp !== undefined &&
            (obj.resp = message.resp ? tx_js_1.MsgPlaceLimitOrderResponse.toJSON(message.resp) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySimulatePlaceLimitOrderResponse();
        if (object.resp !== undefined && object.resp !== null) {
            message.resp = tx_js_1.MsgPlaceLimitOrderResponse.fromPartial(object.resp);
        }
        return message;
    },
};
function createBaseQuerySimulateWithdrawFilledLimitOrderRequest() {
    return {
        msg: undefined,
    };
}
exports.QuerySimulateWithdrawFilledLimitOrderRequest = {
    typeUrl: "/neutron.dex.QuerySimulateWithdrawFilledLimitOrderRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.msg !== undefined) {
            tx_js_1.MsgWithdrawFilledLimitOrder.encode(message.msg, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySimulateWithdrawFilledLimitOrderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = tx_js_1.MsgWithdrawFilledLimitOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySimulateWithdrawFilledLimitOrderRequest();
        if ((0, helpers_js_1.isSet)(object.msg))
            obj.msg = tx_js_1.MsgWithdrawFilledLimitOrder.fromJSON(object.msg);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.msg !== undefined &&
            (obj.msg = message.msg ? tx_js_1.MsgWithdrawFilledLimitOrder.toJSON(message.msg) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySimulateWithdrawFilledLimitOrderRequest();
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = tx_js_1.MsgWithdrawFilledLimitOrder.fromPartial(object.msg);
        }
        return message;
    },
};
function createBaseQuerySimulateWithdrawFilledLimitOrderResponse() {
    return {
        resp: undefined,
    };
}
exports.QuerySimulateWithdrawFilledLimitOrderResponse = {
    typeUrl: "/neutron.dex.QuerySimulateWithdrawFilledLimitOrderResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.resp !== undefined) {
            tx_js_1.MsgWithdrawFilledLimitOrderResponse.encode(message.resp, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySimulateWithdrawFilledLimitOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resp = tx_js_1.MsgWithdrawFilledLimitOrderResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySimulateWithdrawFilledLimitOrderResponse();
        if ((0, helpers_js_1.isSet)(object.resp))
            obj.resp = tx_js_1.MsgWithdrawFilledLimitOrderResponse.fromJSON(object.resp);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.resp !== undefined &&
            (obj.resp = message.resp ? tx_js_1.MsgWithdrawFilledLimitOrderResponse.toJSON(message.resp) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySimulateWithdrawFilledLimitOrderResponse();
        if (object.resp !== undefined && object.resp !== null) {
            message.resp = tx_js_1.MsgWithdrawFilledLimitOrderResponse.fromPartial(object.resp);
        }
        return message;
    },
};
function createBaseQuerySimulateCancelLimitOrderRequest() {
    return {
        msg: undefined,
    };
}
exports.QuerySimulateCancelLimitOrderRequest = {
    typeUrl: "/neutron.dex.QuerySimulateCancelLimitOrderRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.msg !== undefined) {
            tx_js_1.MsgCancelLimitOrder.encode(message.msg, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySimulateCancelLimitOrderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = tx_js_1.MsgCancelLimitOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySimulateCancelLimitOrderRequest();
        if ((0, helpers_js_1.isSet)(object.msg))
            obj.msg = tx_js_1.MsgCancelLimitOrder.fromJSON(object.msg);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.msg !== undefined &&
            (obj.msg = message.msg ? tx_js_1.MsgCancelLimitOrder.toJSON(message.msg) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySimulateCancelLimitOrderRequest();
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = tx_js_1.MsgCancelLimitOrder.fromPartial(object.msg);
        }
        return message;
    },
};
function createBaseQuerySimulateCancelLimitOrderResponse() {
    return {
        resp: undefined,
    };
}
exports.QuerySimulateCancelLimitOrderResponse = {
    typeUrl: "/neutron.dex.QuerySimulateCancelLimitOrderResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.resp !== undefined) {
            tx_js_1.MsgCancelLimitOrderResponse.encode(message.resp, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySimulateCancelLimitOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resp = tx_js_1.MsgCancelLimitOrderResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySimulateCancelLimitOrderResponse();
        if ((0, helpers_js_1.isSet)(object.resp))
            obj.resp = tx_js_1.MsgCancelLimitOrderResponse.fromJSON(object.resp);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.resp !== undefined &&
            (obj.resp = message.resp ? tx_js_1.MsgCancelLimitOrderResponse.toJSON(message.resp) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySimulateCancelLimitOrderResponse();
        if (object.resp !== undefined && object.resp !== null) {
            message.resp = tx_js_1.MsgCancelLimitOrderResponse.fromPartial(object.resp);
        }
        return message;
    },
};
function createBaseQuerySimulateMultiHopSwapRequest() {
    return {
        msg: undefined,
    };
}
exports.QuerySimulateMultiHopSwapRequest = {
    typeUrl: "/neutron.dex.QuerySimulateMultiHopSwapRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.msg !== undefined) {
            tx_js_1.MsgMultiHopSwap.encode(message.msg, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySimulateMultiHopSwapRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = tx_js_1.MsgMultiHopSwap.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySimulateMultiHopSwapRequest();
        if ((0, helpers_js_1.isSet)(object.msg))
            obj.msg = tx_js_1.MsgMultiHopSwap.fromJSON(object.msg);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.msg !== undefined && (obj.msg = message.msg ? tx_js_1.MsgMultiHopSwap.toJSON(message.msg) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySimulateMultiHopSwapRequest();
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = tx_js_1.MsgMultiHopSwap.fromPartial(object.msg);
        }
        return message;
    },
};
function createBaseQuerySimulateMultiHopSwapResponse() {
    return {
        resp: undefined,
    };
}
exports.QuerySimulateMultiHopSwapResponse = {
    typeUrl: "/neutron.dex.QuerySimulateMultiHopSwapResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.resp !== undefined) {
            tx_js_1.MsgMultiHopSwapResponse.encode(message.resp, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySimulateMultiHopSwapResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resp = tx_js_1.MsgMultiHopSwapResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySimulateMultiHopSwapResponse();
        if ((0, helpers_js_1.isSet)(object.resp))
            obj.resp = tx_js_1.MsgMultiHopSwapResponse.fromJSON(object.resp);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.resp !== undefined &&
            (obj.resp = message.resp ? tx_js_1.MsgMultiHopSwapResponse.toJSON(message.resp) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySimulateMultiHopSwapResponse();
        if (object.resp !== undefined && object.resp !== null) {
            message.resp = tx_js_1.MsgMultiHopSwapResponse.fromPartial(object.resp);
        }
        return message;
    },
};
//# sourceMappingURL=query.js.map