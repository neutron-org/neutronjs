/* eslint-disable */
import { Any } from "../../../../google/protobuf/any";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import {
  isSet,
  bytesFromBase64,
  base64FromBytes,
  DeepPartial,
  Exact,
  fromJsonTimestamp,
  fromTimestamp,
} from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "interchain_security.ccv.consumer.v1";
/**
 * CrossChainValidator defines the type used to store validator information
 * internal to the consumer CCV module.  Note one cross chain validator entry is
 * persisted for each consumer validator, where incoming VSC packets update this
 * data, which is eventually forwarded to comet for consumer chain consensus.
 *
 * Note this type is only used internally to the consumer CCV module.
 */
export interface CrossChainValidator {
  address: Uint8Array;
  power: bigint;
  /** pubkey is the consensus public key of the validator, as a Protobuf Any. */
  pubkey?: Any;
  /**
   * !!! DEPRECATED !!! opted_out is deprecated because after the introduction of Partial Set Security (PSS)
   * we removed the soft opt-out feature.
   */
  /** @deprecated */
  optedOut: boolean;
}
/**
 * A record storing the state of a slash packet sent to the provider chain
 * which may bounce back and forth until handled by the provider.
 *
 * Note this type is only used internally to the consumer CCV module.
 */
export interface SlashRecord {
  waitingOnReply: boolean;
  sendTime: Timestamp;
}
function createBaseCrossChainValidator(): CrossChainValidator {
  return {
    address: new Uint8Array(),
    power: BigInt(0),
    pubkey: undefined,
    optedOut: false,
  };
}
export const CrossChainValidator = {
  typeUrl: "/interchain_security.ccv.consumer.v1.CrossChainValidator",
  encode(message: CrossChainValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(message.power);
    }
    if (message.pubkey !== undefined) {
      Any.encode(message.pubkey, writer.uint32(26).fork()).ldelim();
    }
    if (message.optedOut === true) {
      writer.uint32(32).bool(message.optedOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CrossChainValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrossChainValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.power = reader.int64();
          break;
        case 3:
          message.pubkey = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.optedOut = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CrossChainValidator {
    const obj = createBaseCrossChainValidator();
    if (isSet(object.address)) obj.address = bytesFromBase64(object.address);
    if (isSet(object.power)) obj.power = BigInt(object.power.toString());
    if (isSet(object.pubkey)) obj.pubkey = Any.fromJSON(object.pubkey);
    if (isSet(object.optedOut)) obj.optedOut = Boolean(object.optedOut);
    return obj;
  },
  toJSON(message: CrossChainValidator): JsonSafe<CrossChainValidator> {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
    message.pubkey !== undefined && (obj.pubkey = message.pubkey ? Any.toJSON(message.pubkey) : undefined);
    message.optedOut !== undefined && (obj.optedOut = message.optedOut);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CrossChainValidator>, I>>(object: I): CrossChainValidator {
    const message = createBaseCrossChainValidator();
    message.address = object.address ?? new Uint8Array();
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power.toString());
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = Any.fromPartial(object.pubkey);
    }
    message.optedOut = object.optedOut ?? false;
    return message;
  },
};
function createBaseSlashRecord(): SlashRecord {
  return {
    waitingOnReply: false,
    sendTime: Timestamp.fromPartial({}),
  };
}
export const SlashRecord = {
  typeUrl: "/interchain_security.ccv.consumer.v1.SlashRecord",
  encode(message: SlashRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.waitingOnReply === true) {
      writer.uint32(8).bool(message.waitingOnReply);
    }
    if (message.sendTime !== undefined) {
      Timestamp.encode(message.sendTime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SlashRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlashRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.waitingOnReply = reader.bool();
          break;
        case 2:
          message.sendTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SlashRecord {
    const obj = createBaseSlashRecord();
    if (isSet(object.waitingOnReply)) obj.waitingOnReply = Boolean(object.waitingOnReply);
    if (isSet(object.sendTime)) obj.sendTime = fromJsonTimestamp(object.sendTime);
    return obj;
  },
  toJSON(message: SlashRecord): JsonSafe<SlashRecord> {
    const obj: any = {};
    message.waitingOnReply !== undefined && (obj.waitingOnReply = message.waitingOnReply);
    message.sendTime !== undefined && (obj.sendTime = fromTimestamp(message.sendTime).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SlashRecord>, I>>(object: I): SlashRecord {
    const message = createBaseSlashRecord();
    message.waitingOnReply = object.waitingOnReply ?? false;
    if (object.sendTime !== undefined && object.sendTime !== null) {
      message.sendTime = Timestamp.fromPartial(object.sendTime);
    }
    return message;
  },
};
