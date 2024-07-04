/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "sdk.auction.v1";
/** GenesisState defines the genesis state of the x/auction module. */
export interface GenesisState {
  params: Params;
}
/** Params defines the parameters of the x/auction module. */
export interface Params {
  /**
   * max_bundle_size is the maximum number of transactions that can be bundled
   * in a single bundle.
   */
  maxBundleSize: number;
  /**
   * escrow_account_address is the address of the account that will receive a
   * portion of the bid proceeds.
   */
  escrowAccountAddress: Uint8Array;
  /** reserve_fee specifies the bid floor for the auction. */
  reserveFee: Coin;
  /**
   * min_bid_increment specifies the minimum amount that the next bid must be
   * greater than the previous bid.
   */
  minBidIncrement: Coin;
  /**
   * front_running_protection specifies whether front running and sandwich
   * attack protection is enabled.
   */
  frontRunningProtection: boolean;
  /**
   * proposer_fee defines the portion of the winning bid that goes to the block
   * proposer that proposed the block.
   */
  proposerFee: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
  };
}
export const GenesisState = {
  typeUrl: "/sdk.auction.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseParams(): Params {
  return {
    maxBundleSize: 0,
    escrowAccountAddress: new Uint8Array(),
    reserveFee: Coin.fromPartial({}),
    minBidIncrement: Coin.fromPartial({}),
    frontRunningProtection: false,
    proposerFee: "",
  };
}
export const Params = {
  typeUrl: "/sdk.auction.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxBundleSize !== 0) {
      writer.uint32(8).uint32(message.maxBundleSize);
    }
    if (message.escrowAccountAddress.length !== 0) {
      writer.uint32(18).bytes(message.escrowAccountAddress);
    }
    if (message.reserveFee !== undefined) {
      Coin.encode(message.reserveFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.minBidIncrement !== undefined) {
      Coin.encode(message.minBidIncrement, writer.uint32(34).fork()).ldelim();
    }
    if (message.frontRunningProtection === true) {
      writer.uint32(40).bool(message.frontRunningProtection);
    }
    if (message.proposerFee !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.proposerFee, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxBundleSize = reader.uint32();
          break;
        case 2:
          message.escrowAccountAddress = reader.bytes();
          break;
        case 3:
          message.reserveFee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.minBidIncrement = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.frontRunningProtection = reader.bool();
          break;
        case 6:
          message.proposerFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.maxBundleSize)) obj.maxBundleSize = Number(object.maxBundleSize);
    if (isSet(object.escrowAccountAddress))
      obj.escrowAccountAddress = bytesFromBase64(object.escrowAccountAddress);
    if (isSet(object.reserveFee)) obj.reserveFee = Coin.fromJSON(object.reserveFee);
    if (isSet(object.minBidIncrement)) obj.minBidIncrement = Coin.fromJSON(object.minBidIncrement);
    if (isSet(object.frontRunningProtection))
      obj.frontRunningProtection = Boolean(object.frontRunningProtection);
    if (isSet(object.proposerFee)) obj.proposerFee = String(object.proposerFee);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.maxBundleSize !== undefined && (obj.maxBundleSize = Math.round(message.maxBundleSize));
    message.escrowAccountAddress !== undefined &&
      (obj.escrowAccountAddress = base64FromBytes(
        message.escrowAccountAddress !== undefined ? message.escrowAccountAddress : new Uint8Array(),
      ));
    message.reserveFee !== undefined &&
      (obj.reserveFee = message.reserveFee ? Coin.toJSON(message.reserveFee) : undefined);
    message.minBidIncrement !== undefined &&
      (obj.minBidIncrement = message.minBidIncrement ? Coin.toJSON(message.minBidIncrement) : undefined);
    message.frontRunningProtection !== undefined &&
      (obj.frontRunningProtection = message.frontRunningProtection);
    message.proposerFee !== undefined && (obj.proposerFee = message.proposerFee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maxBundleSize = object.maxBundleSize ?? 0;
    message.escrowAccountAddress = object.escrowAccountAddress ?? new Uint8Array();
    if (object.reserveFee !== undefined && object.reserveFee !== null) {
      message.reserveFee = Coin.fromPartial(object.reserveFee);
    }
    if (object.minBidIncrement !== undefined && object.minBidIncrement !== null) {
      message.minBidIncrement = Coin.fromPartial(object.minBidIncrement);
    }
    message.frontRunningProtection = object.frontRunningProtection ?? false;
    message.proposerFee = object.proposerFee ?? "";
    return message;
  },
};
