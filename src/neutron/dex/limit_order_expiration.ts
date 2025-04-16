//@ts-nocheck
/* eslint-disable */
import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import {
  isSet,
  fromJsonTimestamp,
  bytesFromBase64,
  fromTimestamp,
  base64FromBytes,
  DeepPartial,
  Exact,
} from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.dex";
export interface LimitOrderExpiration {
  /** see limitOrderTranche.proto for details on expiration_time */
  expirationTime: Timestamp;
  trancheRef: Uint8Array;
}
function createBaseLimitOrderExpiration(): LimitOrderExpiration {
  return {
    expirationTime: Timestamp.fromPartial({}),
    trancheRef: new Uint8Array(),
  };
}
export const LimitOrderExpiration = {
  typeUrl: "/neutron.dex.LimitOrderExpiration",
  encode(message: LimitOrderExpiration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.trancheRef.length !== 0) {
      writer.uint32(18).bytes(message.trancheRef);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LimitOrderExpiration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLimitOrderExpiration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.trancheRef = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LimitOrderExpiration {
    const obj = createBaseLimitOrderExpiration();
    if (isSet(object.expirationTime)) obj.expirationTime = fromJsonTimestamp(object.expirationTime);
    if (isSet(object.trancheRef)) obj.trancheRef = bytesFromBase64(object.trancheRef);
    return obj;
  },
  toJSON(message: LimitOrderExpiration): JsonSafe<LimitOrderExpiration> {
    const obj: any = {};
    message.expirationTime !== undefined &&
      (obj.expirationTime = fromTimestamp(message.expirationTime).toISOString());
    message.trancheRef !== undefined &&
      (obj.trancheRef = base64FromBytes(
        message.trancheRef !== undefined ? message.trancheRef : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LimitOrderExpiration>, I>>(object: I): LimitOrderExpiration {
    const message = createBaseLimitOrderExpiration();
    if (object.expirationTime !== undefined && object.expirationTime !== null) {
      message.expirationTime = Timestamp.fromPartial(object.expirationTime);
    }
    message.trancheRef = object.trancheRef ?? new Uint8Array();
    return message;
  },
  fromAmino(object: LimitOrderExpirationAmino): LimitOrderExpiration {
    const message = createBaseLimitOrderExpiration();
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = Timestamp.fromAmino(object.expiration_time);
    }
    if (object.tranche_ref !== undefined && object.tranche_ref !== null) {
      message.trancheRef = bytesFromBase64(object.tranche_ref);
    }
    return message;
  },
  toAmino(message: LimitOrderExpiration): LimitOrderExpirationAmino {
    const obj: any = {};
    obj.expiration_time = message.expirationTime ? Timestamp.toAmino(message.expirationTime) : undefined;
    obj.tranche_ref = message.trancheRef ? base64FromBytes(message.trancheRef) : undefined;
    return obj;
  },
  fromAminoMsg(object: LimitOrderExpirationAminoMsg): LimitOrderExpiration {
    return LimitOrderExpiration.fromAmino(object.value);
  },
};
