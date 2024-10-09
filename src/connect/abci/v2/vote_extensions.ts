//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact, isObject } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "connect.abci.v2";
export interface OracleVoteExtension_PricesEntry {
  key: bigint;
  value: Uint8Array;
}
/** OracleVoteExtension defines the vote extension structure for oracle prices. */
export interface OracleVoteExtension {
  /**
   * Prices defines a map of id(CurrencyPair) -> price.Bytes() . i.e. 1 ->
   * 0x123.. (bytes). Notice the `id` function is determined by the
   * `CurrencyPairIDStrategy` used in the VoteExtensionHandler.
   */
  prices: {
    [key: bigint]: Uint8Array;
  };
}
function createBaseOracleVoteExtension_PricesEntry(): OracleVoteExtension_PricesEntry {
  return {
    key: BigInt(0),
    value: new Uint8Array(),
  };
}
export const OracleVoteExtension_PricesEntry = {
  encode(
    message: OracleVoteExtension_PricesEntry,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.key !== BigInt(0)) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OracleVoteExtension_PricesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleVoteExtension_PricesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint64();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OracleVoteExtension_PricesEntry {
    const obj = createBaseOracleVoteExtension_PricesEntry();
    if (isSet(object.key)) obj.key = BigInt(object.key.toString());
    if (isSet(object.value)) obj.value = bytesFromBase64(object.value);
    return obj;
  },
  toJSON(message: OracleVoteExtension_PricesEntry): JsonSafe<OracleVoteExtension_PricesEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = (message.key || BigInt(0)).toString());
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<OracleVoteExtension_PricesEntry>, I>>(
    object: I,
  ): OracleVoteExtension_PricesEntry {
    const message = createBaseOracleVoteExtension_PricesEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = BigInt(object.key.toString());
    }
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};
function createBaseOracleVoteExtension(): OracleVoteExtension {
  return {
    prices: {},
  };
}
export const OracleVoteExtension = {
  typeUrl: "/connect.abci.v2.OracleVoteExtension",
  encode(message: OracleVoteExtension, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.prices).forEach(([key, value]) => {
      OracleVoteExtension_PricesEntry.encode(
        {
          key: key as any,
          value,
        },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OracleVoteExtension {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleVoteExtension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = OracleVoteExtension_PricesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.prices[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OracleVoteExtension {
    const obj = createBaseOracleVoteExtension();
    if (isObject(object.prices))
      obj.prices = Object.entries(object.prices).reduce<{
        [key: bigint]: bytes;
      }>((acc, [key, value]) => {
        acc[Number(key)] = bytes.fromJSON(value);
        return acc;
      }, {});
    return obj;
  },
  toJSON(message: OracleVoteExtension): JsonSafe<OracleVoteExtension> {
    const obj: any = {};
    obj.prices = {};
    if (message.prices) {
      Object.entries(message.prices).forEach(([k, v]) => {
        obj.prices[k] = bytes.toJSON(v);
      });
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<OracleVoteExtension>, I>>(object: I): OracleVoteExtension {
    const message = createBaseOracleVoteExtension();
    message.prices = Object.entries(object.prices ?? {}).reduce<{
      [key: bigint]: bytes;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = bytes.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};
