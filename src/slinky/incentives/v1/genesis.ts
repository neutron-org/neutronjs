//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "slinky.incentives.v1";
/** GenesisState is the genesis-state for the x/incentives module. */
export interface GenesisState {
  /**
   * Registry is a list of incentives by type. The registry defined here
   * should be a subset of the incentive types defined in the incentive
   * module (keeper).
   */
  registry: IncentivesByType[];
}
/**
 * IncentivesByType encapsulates a list of incentives by type. Each of the
 * entries here must correspond to the same incentive type defined here.
 */
export interface IncentivesByType {
  /**
   * IncentiveType is the incentive type i.e. (BadPriceIncentiveType,
   * GoodPriceIncentiveType).
   */
  incentiveType: string;
  /** Entries is a list of incentive bytes. */
  entries: Uint8Array[];
}
function createBaseGenesisState(): GenesisState {
  return {
    registry: [],
  };
}
export const GenesisState = {
  typeUrl: "/slinky.incentives.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.registry) {
      IncentivesByType.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.registry.push(IncentivesByType.decode(reader, reader.uint32()));
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
    if (Array.isArray(object?.registry))
      obj.registry = object.registry.map((e: any) => IncentivesByType.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.registry) {
      obj.registry = message.registry.map((e) => (e ? IncentivesByType.toJSON(e) : undefined));
    } else {
      obj.registry = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.registry = object.registry?.map((e) => IncentivesByType.fromPartial(e)) || [];
    return message;
  },
};
function createBaseIncentivesByType(): IncentivesByType {
  return {
    incentiveType: "",
    entries: [],
  };
}
export const IncentivesByType = {
  typeUrl: "/slinky.incentives.v1.IncentivesByType",
  encode(message: IncentivesByType, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.incentiveType !== "") {
      writer.uint32(10).string(message.incentiveType);
    }
    for (const v of message.entries) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IncentivesByType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentivesByType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentiveType = reader.string();
          break;
        case 2:
          message.entries.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IncentivesByType {
    const obj = createBaseIncentivesByType();
    if (isSet(object.incentiveType)) obj.incentiveType = String(object.incentiveType);
    if (Array.isArray(object?.entries)) obj.entries = object.entries.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  toJSON(message: IncentivesByType): JsonSafe<IncentivesByType> {
    const obj: any = {};
    message.incentiveType !== undefined && (obj.incentiveType = message.incentiveType);
    if (message.entries) {
      obj.entries = message.entries.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<IncentivesByType>, I>>(object: I): IncentivesByType {
    const message = createBaseIncentivesByType();
    message.incentiveType = object.incentiveType ?? "";
    message.entries = object.entries?.map((e) => e) || [];
    return message;
  },
};
