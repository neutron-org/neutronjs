//@ts-nocheck
/* eslint-disable */
import { Alert } from "./alerts";
import { Params } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "slinky.alerts.v1";
/**
 * AlertStatus is the type for the status of an Alert, it can be Unconcluded or
 * Concluded.
 */
export enum AlertStatusID {
  CONCLUSION_STATUS_UNSPECIFIED = 0,
  CONCLUSION_STATUS_UNCONCLUDED = 1,
  CONCLUSION_STATUS_CONCLUDED = 2,
  UNRECOGNIZED = -1,
}
export function alertStatusIDFromJSON(object: any): AlertStatusID {
  switch (object) {
    case 0:
    case "CONCLUSION_STATUS_UNSPECIFIED":
      return AlertStatusID.CONCLUSION_STATUS_UNSPECIFIED;
    case 1:
    case "CONCLUSION_STATUS_UNCONCLUDED":
      return AlertStatusID.CONCLUSION_STATUS_UNCONCLUDED;
    case 2:
    case "CONCLUSION_STATUS_CONCLUDED":
      return AlertStatusID.CONCLUSION_STATUS_CONCLUDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AlertStatusID.UNRECOGNIZED;
  }
}
export function alertStatusIDToJSON(object: AlertStatusID): string {
  switch (object) {
    case AlertStatusID.CONCLUSION_STATUS_UNSPECIFIED:
      return "CONCLUSION_STATUS_UNSPECIFIED";
    case AlertStatusID.CONCLUSION_STATUS_UNCONCLUDED:
      return "CONCLUSION_STATUS_UNCONCLUDED";
    case AlertStatusID.CONCLUSION_STATUS_CONCLUDED:
      return "CONCLUSION_STATUS_CONCLUDED";
    case AlertStatusID.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * AlertsRequest is the request type for the Query.Alerts RPC method, the status
 * field indicates whether the request should return only Unconcluded /
 * Concluded Alerts, or all Alerts.
 */
export interface AlertsRequest {
  status: AlertStatusID;
}
/**
 * AlertsResponse is the response type for the Query.Alerts RPC method, it
 * contains the list of Alerts that are being tracked by the alerts module.
 */
export interface AlertsResponse {
  alerts: Alert[];
}
/** ParamsRequest is the request type for the Query.Params RPC method. */
export interface ParamsRequest {}
/**
 * ParamsResponse is the response type for the Query.Params RPC method, it
 * contains the Params of the module.
 */
export interface ParamsResponse {
  params: Params;
}
function createBaseAlertsRequest(): AlertsRequest {
  return {
    status: 0,
  };
}
export const AlertsRequest = {
  typeUrl: "/slinky.alerts.v1.AlertsRequest",
  encode(message: AlertsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AlertsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAlertsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AlertsRequest {
    const obj = createBaseAlertsRequest();
    if (isSet(object.status)) obj.status = alertStatusIDFromJSON(object.status);
    return obj;
  },
  toJSON(message: AlertsRequest): JsonSafe<AlertsRequest> {
    const obj: any = {};
    message.status !== undefined && (obj.status = alertStatusIDToJSON(message.status));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AlertsRequest>, I>>(object: I): AlertsRequest {
    const message = createBaseAlertsRequest();
    message.status = object.status ?? 0;
    return message;
  },
};
function createBaseAlertsResponse(): AlertsResponse {
  return {
    alerts: [],
  };
}
export const AlertsResponse = {
  typeUrl: "/slinky.alerts.v1.AlertsResponse",
  encode(message: AlertsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.alerts) {
      Alert.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AlertsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAlertsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alerts.push(Alert.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AlertsResponse {
    const obj = createBaseAlertsResponse();
    if (Array.isArray(object?.alerts)) obj.alerts = object.alerts.map((e: any) => Alert.fromJSON(e));
    return obj;
  },
  toJSON(message: AlertsResponse): JsonSafe<AlertsResponse> {
    const obj: any = {};
    if (message.alerts) {
      obj.alerts = message.alerts.map((e) => (e ? Alert.toJSON(e) : undefined));
    } else {
      obj.alerts = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AlertsResponse>, I>>(object: I): AlertsResponse {
    const message = createBaseAlertsResponse();
    message.alerts = object.alerts?.map((e) => Alert.fromPartial(e)) || [];
    return message;
  },
};
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/slinky.alerts.v1.ParamsRequest",
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
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
  fromJSON(_: any): ParamsRequest {
    const obj = createBaseParamsRequest();
    return obj;
  },
  toJSON(_: ParamsRequest): JsonSafe<ParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ParamsRequest>, I>>(_: I): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const ParamsResponse = {
  typeUrl: "/slinky.alerts.v1.ParamsResponse",
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
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
  fromJSON(object: any): ParamsResponse {
    const obj = createBaseParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: ParamsResponse): JsonSafe<ParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ParamsResponse>, I>>(object: I): ParamsResponse {
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
