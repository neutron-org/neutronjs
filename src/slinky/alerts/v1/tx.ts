/* eslint-disable */
import { Alert } from "./alerts";
import { Any } from "../../../google/protobuf/any";
import { Params } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "slinky.alerts.v1";
/** MsgAlert defines a message to create an alert. */
export interface MsgAlert {
  /** alert is the alert to be filed */
  alert: Alert;
}
export interface MsgAlertResponse {}
/**
 * MsgConclusion defines a message carrying a Conclusion made by the SecondTier,
 * which will be used to close an alert. And trigger any ramifications of the
 * conclusion.
 */
export interface MsgConclusion {
  /**
   * signer is the signer of this transaction (notice, this may not always be a
   * node from the SecondTier)
   */
  signer: string;
  /** conclusion is the conclusion to be filed */
  conclusion?: Any;
}
export interface MsgConclusionResponse {}
/**
 * MsgUpdateParams defines the message type expected by the UpdateParams rpc. It
 * contains an authority address, and the new Params for the x/alerts module.
 */
export interface MsgUpdateParams {
  /** authority is the address of the authority that is submitting the update */
  authority: string;
  /** params is the new set of parameters for the x/alerts module */
  params: Params;
}
export interface MsgUpdateParamsResponse {}
function createBaseMsgAlert(): MsgAlert {
  return {
    alert: Alert.fromPartial({}),
  };
}
export const MsgAlert = {
  typeUrl: "/slinky.alerts.v1.MsgAlert",
  encode(message: MsgAlert, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.alert !== undefined) {
      Alert.encode(message.alert, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAlert {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alert = Alert.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAlert {
    const obj = createBaseMsgAlert();
    if (isSet(object.alert)) obj.alert = Alert.fromJSON(object.alert);
    return obj;
  },
  toJSON(message: MsgAlert): JsonSafe<MsgAlert> {
    const obj: any = {};
    message.alert !== undefined && (obj.alert = message.alert ? Alert.toJSON(message.alert) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAlert>, I>>(object: I): MsgAlert {
    const message = createBaseMsgAlert();
    if (object.alert !== undefined && object.alert !== null) {
      message.alert = Alert.fromPartial(object.alert);
    }
    return message;
  },
};
function createBaseMsgAlertResponse(): MsgAlertResponse {
  return {};
}
export const MsgAlertResponse = {
  typeUrl: "/slinky.alerts.v1.MsgAlertResponse",
  encode(_: MsgAlertResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAlertResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAlertResponse();
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
  fromJSON(_: any): MsgAlertResponse {
    const obj = createBaseMsgAlertResponse();
    return obj;
  },
  toJSON(_: MsgAlertResponse): JsonSafe<MsgAlertResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAlertResponse>, I>>(_: I): MsgAlertResponse {
    const message = createBaseMsgAlertResponse();
    return message;
  },
};
function createBaseMsgConclusion(): MsgConclusion {
  return {
    signer: "",
    conclusion: undefined,
  };
}
export const MsgConclusion = {
  typeUrl: "/slinky.alerts.v1.MsgConclusion",
  encode(message: MsgConclusion, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.conclusion !== undefined) {
      Any.encode(message.conclusion, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConclusion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConclusion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.conclusion = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgConclusion {
    const obj = createBaseMsgConclusion();
    if (isSet(object.signer)) obj.signer = String(object.signer);
    if (isSet(object.conclusion)) obj.conclusion = Any.fromJSON(object.conclusion);
    return obj;
  },
  toJSON(message: MsgConclusion): JsonSafe<MsgConclusion> {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.conclusion !== undefined &&
      (obj.conclusion = message.conclusion ? Any.toJSON(message.conclusion) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConclusion>, I>>(object: I): MsgConclusion {
    const message = createBaseMsgConclusion();
    message.signer = object.signer ?? "";
    if (object.conclusion !== undefined && object.conclusion !== null) {
      message.conclusion = Any.fromPartial(object.conclusion);
    }
    return message;
  },
};
function createBaseMsgConclusionResponse(): MsgConclusionResponse {
  return {};
}
export const MsgConclusionResponse = {
  typeUrl: "/slinky.alerts.v1.MsgConclusionResponse",
  encode(_: MsgConclusionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConclusionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConclusionResponse();
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
  fromJSON(_: any): MsgConclusionResponse {
    const obj = createBaseMsgConclusionResponse();
    return obj;
  },
  toJSON(_: MsgConclusionResponse): JsonSafe<MsgConclusionResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConclusionResponse>, I>>(_: I): MsgConclusionResponse {
    const message = createBaseMsgConclusionResponse();
    return message;
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/slinky.alerts.v1.MsgUpdateParams",
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
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/slinky.alerts.v1.MsgUpdateParamsResponse",
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
};
/** Msg is the message service for the x/alerts module. */
export interface Msg {
  /**
   * Alert creates a new alert. On alert creation (if valid), the alert will be
   * saved to state, and its bond will be escrowed until a corresponding
   * Conclusion is filed to close the alert.
   */
  Alert(request: MsgAlert): Promise<MsgAlertResponse>;
  /**
   * Conclusion closes an alert. On alert conclusion (if valid), the alert will
   * be marked as Concluded, the bond for the alert will either be burned or
   * returned, and a set of incentives will be issued to the validators deemed
   * malicious by the conclusion.
   */
  Conclusion(request: MsgConclusion): Promise<MsgConclusionResponse>;
  /**
   * UpdateParams updates the parameters of the alerts module. Specifically, the
   * only address that is capable of submitting this Msg is the
   * module-authority, in general, the x/gov module-account. The process for
   * executing this message will be via governance proposal
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Alert = this.Alert.bind(this);
    this.Conclusion = this.Conclusion.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  Alert(request: MsgAlert): Promise<MsgAlertResponse> {
    const data = MsgAlert.encode(request).finish();
    const promise = this.rpc.request("slinky.alerts.v1.Msg", "Alert", data);
    return promise.then((data) => MsgAlertResponse.decode(new BinaryReader(data)));
  }
  Conclusion(request: MsgConclusion): Promise<MsgConclusionResponse> {
    const data = MsgConclusion.encode(request).finish();
    const promise = this.rpc.request("slinky.alerts.v1.Msg", "Conclusion", data);
    return promise.then((data) => MsgConclusionResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("slinky.alerts.v1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
