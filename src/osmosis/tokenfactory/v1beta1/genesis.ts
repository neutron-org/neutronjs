//@ts-nocheck
/* eslint-disable */
import { Params } from "../params";
import { DenomAuthorityMetadata } from "./authorityMetadata";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "osmosis.tokenfactory.v1beta1";
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisState {
  /** params defines the parameters of the module. */
  params: Params;
  factoryDenoms: GenesisDenom[];
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenom {
  denom: string;
  authorityMetadata: DenomAuthorityMetadata;
  hookContractAddress?: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    factoryDenoms: [],
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.factoryDenoms) {
      GenesisDenom.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.factoryDenoms.push(GenesisDenom.decode(reader, reader.uint32()));
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
    if (Array.isArray(object?.factoryDenoms))
      obj.factoryDenoms = object.factoryDenoms.map((e: any) => GenesisDenom.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.factoryDenoms) {
      obj.factoryDenoms = message.factoryDenoms.map((e) => (e ? GenesisDenom.toJSON(e) : undefined));
    } else {
      obj.factoryDenoms = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.factoryDenoms = object.factoryDenoms?.map((e) => GenesisDenom.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.factoryDenoms = object.factory_denoms?.map((e) => GenesisDenom.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.factoryDenoms) {
      obj.factory_denoms = message.factoryDenoms.map((e) => (e ? GenesisDenom.toAmino(e) : undefined));
    } else {
      obj.factory_denoms = message.factoryDenoms;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/tokenfactory/genesis-state",
      value: GenesisState.toAmino(message),
    };
  },
};
function createBaseGenesisDenom(): GenesisDenom {
  return {
    denom: "",
    authorityMetadata: DenomAuthorityMetadata.fromPartial({}),
    hookContractAddress: undefined,
  };
}
export const GenesisDenom = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisDenom",
  encode(message: GenesisDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.authorityMetadata !== undefined) {
      DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.hookContractAddress !== undefined) {
      writer.uint32(26).string(message.hookContractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.authorityMetadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
          break;
        case 3:
          message.hookContractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisDenom {
    const obj = createBaseGenesisDenom();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.authorityMetadata))
      obj.authorityMetadata = DenomAuthorityMetadata.fromJSON(object.authorityMetadata);
    if (isSet(object.hookContractAddress)) obj.hookContractAddress = String(object.hookContractAddress);
    return obj;
  },
  toJSON(message: GenesisDenom): JsonSafe<GenesisDenom> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.authorityMetadata !== undefined &&
      (obj.authorityMetadata = message.authorityMetadata
        ? DenomAuthorityMetadata.toJSON(message.authorityMetadata)
        : undefined);
    message.hookContractAddress !== undefined && (obj.hookContractAddress = message.hookContractAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisDenom>, I>>(object: I): GenesisDenom {
    const message = createBaseGenesisDenom();
    message.denom = object.denom ?? "";
    if (object.authorityMetadata !== undefined && object.authorityMetadata !== null) {
      message.authorityMetadata = DenomAuthorityMetadata.fromPartial(object.authorityMetadata);
    }
    message.hookContractAddress = object.hookContractAddress ?? undefined;
    return message;
  },
  fromAmino(object: GenesisDenomAmino): GenesisDenom {
    const message = createBaseGenesisDenom();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.authority_metadata !== undefined && object.authority_metadata !== null) {
      message.authorityMetadata = DenomAuthorityMetadata.fromAmino(object.authority_metadata);
    }
    if (object.hook_contract_address !== undefined && object.hook_contract_address !== null) {
      message.hookContractAddress = object.hook_contract_address;
    }
    return message;
  },
  toAmino(message: GenesisDenom): GenesisDenomAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.authority_metadata = message.authorityMetadata
      ? DenomAuthorityMetadata.toAmino(message.authorityMetadata)
      : undefined;
    obj.hook_contract_address =
      message.hookContractAddress === null ? undefined : message.hookContractAddress;
    return obj;
  },
  fromAminoMsg(object: GenesisDenomAminoMsg): GenesisDenom {
    return GenesisDenom.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisDenom): GenesisDenomAminoMsg {
    return {
      type: "osmosis/tokenfactory/genesis-denom",
      value: GenesisDenom.toAmino(message),
    };
  },
};
