/* eslint-disable */
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.crypto.multisig";
/**
 * LegacyAminoPubKey specifies a public key type
 * which nests multiple public keys and a threshold,
 * it uses legacy amino address rules.
 */
export interface LegacyAminoPubKey {
  threshold: number;
  publicKeys: Any[];
}
function createBaseLegacyAminoPubKey(): LegacyAminoPubKey {
  return {
    threshold: 0,
    publicKeys: [],
  };
}
export const LegacyAminoPubKey = {
  typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
  encode(message: LegacyAminoPubKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threshold !== 0) {
      writer.uint32(8).uint32(message.threshold);
    }
    for (const v of message.publicKeys) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LegacyAminoPubKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyAminoPubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threshold = reader.uint32();
          break;
        case 2:
          message.publicKeys.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LegacyAminoPubKey {
    const obj = createBaseLegacyAminoPubKey();
    if (isSet(object.threshold)) obj.threshold = Number(object.threshold);
    if (Array.isArray(object?.publicKeys))
      obj.publicKeys = object.publicKeys.map((e: any) => Any.fromJSON(e));
    return obj;
  },
  toJSON(message: LegacyAminoPubKey): JsonSafe<LegacyAminoPubKey> {
    const obj: any = {};
    message.threshold !== undefined && (obj.threshold = Math.round(message.threshold));
    if (message.publicKeys) {
      obj.publicKeys = message.publicKeys.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.publicKeys = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LegacyAminoPubKey>, I>>(object: I): LegacyAminoPubKey {
    const message = createBaseLegacyAminoPubKey();
    message.threshold = object.threshold ?? 0;
    message.publicKeys = object.publicKeys?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
};
