//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { JsonSafe } from "../../../../json-safe";
import { DeepPartial, Exact, isSet } from "../../../../helpers";
export const protobufPackage = "cosmos.base.reflection.v1beta1";
/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesRequest {}
/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesResponse {
  /** interface_names is an array of all the registered interfaces. */
  interfaceNames: string[];
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsRequest {
  /** interface_name defines the interface to query the implementations for. */
  interfaceName: string;
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsResponse {
  implementationMessageNames: string[];
}
function createBaseListAllInterfacesRequest(): ListAllInterfacesRequest {
  return {};
}
export const ListAllInterfacesRequest = {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesRequest",
  encode(_: ListAllInterfacesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListAllInterfacesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAllInterfacesRequest();
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
  fromJSON(_: any): ListAllInterfacesRequest {
    const obj = createBaseListAllInterfacesRequest();
    return obj;
  },
  toJSON(_: ListAllInterfacesRequest): JsonSafe<ListAllInterfacesRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ListAllInterfacesRequest>, I>>(_: I): ListAllInterfacesRequest {
    const message = createBaseListAllInterfacesRequest();
    return message;
  },
  fromAmino(_: ListAllInterfacesRequestAmino): ListAllInterfacesRequest {
    const message = createBaseListAllInterfacesRequest();
    return message;
  },
  toAmino(_: ListAllInterfacesRequest): ListAllInterfacesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ListAllInterfacesRequestAminoMsg): ListAllInterfacesRequest {
    return ListAllInterfacesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ListAllInterfacesRequest): ListAllInterfacesRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListAllInterfacesRequest",
      value: ListAllInterfacesRequest.toAmino(message),
    };
  },
};
function createBaseListAllInterfacesResponse(): ListAllInterfacesResponse {
  return {
    interfaceNames: [],
  };
}
export const ListAllInterfacesResponse = {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesResponse",
  encode(message: ListAllInterfacesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.interfaceNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListAllInterfacesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAllInterfacesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaceNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListAllInterfacesResponse {
    const obj = createBaseListAllInterfacesResponse();
    if (Array.isArray(object?.interfaceNames))
      obj.interfaceNames = object.interfaceNames.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: ListAllInterfacesResponse): JsonSafe<ListAllInterfacesResponse> {
    const obj: any = {};
    if (message.interfaceNames) {
      obj.interfaceNames = message.interfaceNames.map((e) => e);
    } else {
      obj.interfaceNames = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ListAllInterfacesResponse>, I>>(
    object: I,
  ): ListAllInterfacesResponse {
    const message = createBaseListAllInterfacesResponse();
    message.interfaceNames = object.interfaceNames?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: ListAllInterfacesResponseAmino): ListAllInterfacesResponse {
    const message = createBaseListAllInterfacesResponse();
    message.interfaceNames = object.interface_names?.map((e) => e) || [];
    return message;
  },
  toAmino(message: ListAllInterfacesResponse): ListAllInterfacesResponseAmino {
    const obj: any = {};
    if (message.interfaceNames) {
      obj.interface_names = message.interfaceNames.map((e) => e);
    } else {
      obj.interface_names = message.interfaceNames;
    }
    return obj;
  },
  fromAminoMsg(object: ListAllInterfacesResponseAminoMsg): ListAllInterfacesResponse {
    return ListAllInterfacesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ListAllInterfacesResponse): ListAllInterfacesResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListAllInterfacesResponse",
      value: ListAllInterfacesResponse.toAmino(message),
    };
  },
};
function createBaseListImplementationsRequest(): ListImplementationsRequest {
  return {
    interfaceName: "",
  };
}
export const ListImplementationsRequest = {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsRequest",
  encode(message: ListImplementationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.interfaceName !== "") {
      writer.uint32(10).string(message.interfaceName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListImplementationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListImplementationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaceName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListImplementationsRequest {
    const obj = createBaseListImplementationsRequest();
    if (isSet(object.interfaceName)) obj.interfaceName = String(object.interfaceName);
    return obj;
  },
  toJSON(message: ListImplementationsRequest): JsonSafe<ListImplementationsRequest> {
    const obj: any = {};
    message.interfaceName !== undefined && (obj.interfaceName = message.interfaceName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ListImplementationsRequest>, I>>(
    object: I,
  ): ListImplementationsRequest {
    const message = createBaseListImplementationsRequest();
    message.interfaceName = object.interfaceName ?? "";
    return message;
  },
  fromAmino(object: ListImplementationsRequestAmino): ListImplementationsRequest {
    const message = createBaseListImplementationsRequest();
    if (object.interface_name !== undefined && object.interface_name !== null) {
      message.interfaceName = object.interface_name;
    }
    return message;
  },
  toAmino(message: ListImplementationsRequest): ListImplementationsRequestAmino {
    const obj: any = {};
    obj.interface_name = message.interfaceName === "" ? undefined : message.interfaceName;
    return obj;
  },
  fromAminoMsg(object: ListImplementationsRequestAminoMsg): ListImplementationsRequest {
    return ListImplementationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ListImplementationsRequest): ListImplementationsRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListImplementationsRequest",
      value: ListImplementationsRequest.toAmino(message),
    };
  },
};
function createBaseListImplementationsResponse(): ListImplementationsResponse {
  return {
    implementationMessageNames: [],
  };
}
export const ListImplementationsResponse = {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsResponse",
  encode(message: ListImplementationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.implementationMessageNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListImplementationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListImplementationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.implementationMessageNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListImplementationsResponse {
    const obj = createBaseListImplementationsResponse();
    if (Array.isArray(object?.implementationMessageNames))
      obj.implementationMessageNames = object.implementationMessageNames.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: ListImplementationsResponse): JsonSafe<ListImplementationsResponse> {
    const obj: any = {};
    if (message.implementationMessageNames) {
      obj.implementationMessageNames = message.implementationMessageNames.map((e) => e);
    } else {
      obj.implementationMessageNames = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ListImplementationsResponse>, I>>(
    object: I,
  ): ListImplementationsResponse {
    const message = createBaseListImplementationsResponse();
    message.implementationMessageNames = object.implementationMessageNames?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: ListImplementationsResponseAmino): ListImplementationsResponse {
    const message = createBaseListImplementationsResponse();
    message.implementationMessageNames = object.implementation_message_names?.map((e) => e) || [];
    return message;
  },
  toAmino(message: ListImplementationsResponse): ListImplementationsResponseAmino {
    const obj: any = {};
    if (message.implementationMessageNames) {
      obj.implementation_message_names = message.implementationMessageNames.map((e) => e);
    } else {
      obj.implementation_message_names = message.implementationMessageNames;
    }
    return obj;
  },
  fromAminoMsg(object: ListImplementationsResponseAminoMsg): ListImplementationsResponse {
    return ListImplementationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ListImplementationsResponse): ListImplementationsResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListImplementationsResponse",
      value: ListImplementationsResponse.toAmino(message),
    };
  },
};
