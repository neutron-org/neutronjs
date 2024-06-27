/* eslint-disable */
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.adminmodule.adminmodule";
export interface MsgDeleteAdmin {
  creator: string;
  admin: string;
}
export interface MsgDeleteAdminResponse {}
export interface MsgAddAdmin {
  creator: string;
  admin: string;
}
export interface MsgAddAdminResponse {}
/**
 * MsgSubmitProposalLegacy defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposalLegacy {
  content?: Any;
  proposer: string;
}
/** MsgSubmitProposalLegacyResponse defines the Msg/SubmitProposalLegacy response type. */
export interface MsgSubmitProposalLegacyResponse {
  proposalId: bigint;
}
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposal {
  /** messages are the arbitrary messages to be executed if proposal passes. */
  messages: Any[];
  proposer: string;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
  proposalId: bigint;
}
function createBaseMsgDeleteAdmin(): MsgDeleteAdmin {
  return {
    creator: "",
    admin: "",
  };
}
export const MsgDeleteAdmin = {
  typeUrl: "/cosmos.adminmodule.adminmodule.MsgDeleteAdmin",
  encode(message: MsgDeleteAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteAdmin {
    const obj = createBaseMsgDeleteAdmin();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.admin)) obj.admin = String(object.admin);
    return obj;
  },
  toJSON(message: MsgDeleteAdmin): JsonSafe<MsgDeleteAdmin> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.admin !== undefined && (obj.admin = message.admin);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteAdmin>, I>>(object: I): MsgDeleteAdmin {
    const message = createBaseMsgDeleteAdmin();
    message.creator = object.creator ?? "";
    message.admin = object.admin ?? "";
    return message;
  },
};
function createBaseMsgDeleteAdminResponse(): MsgDeleteAdminResponse {
  return {};
}
export const MsgDeleteAdminResponse = {
  typeUrl: "/cosmos.adminmodule.adminmodule.MsgDeleteAdminResponse",
  encode(_: MsgDeleteAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAdminResponse();
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
  fromJSON(_: any): MsgDeleteAdminResponse {
    const obj = createBaseMsgDeleteAdminResponse();
    return obj;
  },
  toJSON(_: MsgDeleteAdminResponse): JsonSafe<MsgDeleteAdminResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteAdminResponse>, I>>(_: I): MsgDeleteAdminResponse {
    const message = createBaseMsgDeleteAdminResponse();
    return message;
  },
};
function createBaseMsgAddAdmin(): MsgAddAdmin {
  return {
    creator: "",
    admin: "",
  };
}
export const MsgAddAdmin = {
  typeUrl: "/cosmos.adminmodule.adminmodule.MsgAddAdmin",
  encode(message: MsgAddAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddAdmin {
    const obj = createBaseMsgAddAdmin();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.admin)) obj.admin = String(object.admin);
    return obj;
  },
  toJSON(message: MsgAddAdmin): JsonSafe<MsgAddAdmin> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.admin !== undefined && (obj.admin = message.admin);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddAdmin>, I>>(object: I): MsgAddAdmin {
    const message = createBaseMsgAddAdmin();
    message.creator = object.creator ?? "";
    message.admin = object.admin ?? "";
    return message;
  },
};
function createBaseMsgAddAdminResponse(): MsgAddAdminResponse {
  return {};
}
export const MsgAddAdminResponse = {
  typeUrl: "/cosmos.adminmodule.adminmodule.MsgAddAdminResponse",
  encode(_: MsgAddAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAdminResponse();
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
  fromJSON(_: any): MsgAddAdminResponse {
    const obj = createBaseMsgAddAdminResponse();
    return obj;
  },
  toJSON(_: MsgAddAdminResponse): JsonSafe<MsgAddAdminResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddAdminResponse>, I>>(_: I): MsgAddAdminResponse {
    const message = createBaseMsgAddAdminResponse();
    return message;
  },
};
function createBaseMsgSubmitProposalLegacy(): MsgSubmitProposalLegacy {
  return {
    content: undefined,
    proposer: "",
  };
}
export const MsgSubmitProposalLegacy = {
  typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposalLegacy",
  encode(message: MsgSubmitProposalLegacy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.content !== undefined) {
      Any.encode(message.content, writer.uint32(10).fork()).ldelim();
    }
    if (message.proposer !== "") {
      writer.uint32(18).string(message.proposer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalLegacy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalLegacy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.proposer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitProposalLegacy {
    const obj = createBaseMsgSubmitProposalLegacy();
    if (isSet(object.content)) obj.content = Any.fromJSON(object.content);
    if (isSet(object.proposer)) obj.proposer = String(object.proposer);
    return obj;
  },
  toJSON(message: MsgSubmitProposalLegacy): JsonSafe<MsgSubmitProposalLegacy> {
    const obj: any = {};
    message.content !== undefined &&
      (obj.content = message.content ? Any.toJSON(message.content) : undefined);
    message.proposer !== undefined && (obj.proposer = message.proposer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitProposalLegacy>, I>>(object: I): MsgSubmitProposalLegacy {
    const message = createBaseMsgSubmitProposalLegacy();
    if (object.content !== undefined && object.content !== null) {
      message.content = Any.fromPartial(object.content);
    }
    message.proposer = object.proposer ?? "";
    return message;
  },
};
function createBaseMsgSubmitProposalLegacyResponse(): MsgSubmitProposalLegacyResponse {
  return {
    proposalId: BigInt(0),
  };
}
export const MsgSubmitProposalLegacyResponse = {
  typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposalLegacyResponse",
  encode(
    message: MsgSubmitProposalLegacyResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalLegacyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalLegacyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitProposalLegacyResponse {
    const obj = createBaseMsgSubmitProposalLegacyResponse();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: MsgSubmitProposalLegacyResponse): JsonSafe<MsgSubmitProposalLegacyResponse> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitProposalLegacyResponse>, I>>(
    object: I,
  ): MsgSubmitProposalLegacyResponse {
    const message = createBaseMsgSubmitProposalLegacyResponse();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
};
function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    messages: [],
    proposer: "",
  };
}
export const MsgSubmitProposal = {
  typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposal",
  encode(message: MsgSubmitProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.proposer !== "") {
      writer.uint32(18).string(message.proposer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.proposer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitProposal {
    const obj = createBaseMsgSubmitProposal();
    if (Array.isArray(object?.messages)) obj.messages = object.messages.map((e: any) => Any.fromJSON(e));
    if (isSet(object.proposer)) obj.proposer = String(object.proposer);
    return obj;
  },
  toJSON(message: MsgSubmitProposal): JsonSafe<MsgSubmitProposal> {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.messages = [];
    }
    message.proposer !== undefined && (obj.proposer = message.proposer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitProposal>, I>>(object: I): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
    message.proposer = object.proposer ?? "";
    return message;
  },
};
function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {
    proposalId: BigInt(0),
  };
}
export const MsgSubmitProposalResponse = {
  typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposalResponse",
  encode(message: MsgSubmitProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitProposalResponse {
    const obj = createBaseMsgSubmitProposalResponse();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: MsgSubmitProposalResponse): JsonSafe<MsgSubmitProposalResponse> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitProposalResponse>, I>>(
    object: I,
  ): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
};
/** Msg defines the Msg service. */
export interface Msg {
  DeleteAdmin(request: MsgDeleteAdmin): Promise<MsgDeleteAdminResponse>;
  AddAdmin(request: MsgAddAdmin): Promise<MsgAddAdminResponse>;
  SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
  SubmitProposalLegacy(request: MsgSubmitProposalLegacy): Promise<MsgSubmitProposalLegacyResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.DeleteAdmin = this.DeleteAdmin.bind(this);
    this.AddAdmin = this.AddAdmin.bind(this);
    this.SubmitProposal = this.SubmitProposal.bind(this);
    this.SubmitProposalLegacy = this.SubmitProposalLegacy.bind(this);
  }
  DeleteAdmin(request: MsgDeleteAdmin): Promise<MsgDeleteAdminResponse> {
    const data = MsgDeleteAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmos.adminmodule.adminmodule.Msg", "DeleteAdmin", data);
    return promise.then((data) => MsgDeleteAdminResponse.decode(new BinaryReader(data)));
  }
  AddAdmin(request: MsgAddAdmin): Promise<MsgAddAdminResponse> {
    const data = MsgAddAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmos.adminmodule.adminmodule.Msg", "AddAdmin", data);
    return promise.then((data) => MsgAddAdminResponse.decode(new BinaryReader(data)));
  }
  SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse> {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request("cosmos.adminmodule.adminmodule.Msg", "SubmitProposal", data);
    return promise.then((data) => MsgSubmitProposalResponse.decode(new BinaryReader(data)));
  }
  SubmitProposalLegacy(request: MsgSubmitProposalLegacy): Promise<MsgSubmitProposalLegacyResponse> {
    const data = MsgSubmitProposalLegacy.encode(request).finish();
    const promise = this.rpc.request("cosmos.adminmodule.adminmodule.Msg", "SubmitProposalLegacy", data);
    return promise.then((data) => MsgSubmitProposalLegacyResponse.decode(new BinaryReader(data)));
  }
}
