/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "neutron.revenue";
/** Represents the type of payment schedule for validator compensation. */
export enum PaymentScheduleType {
  /**
   * PAYMENT_SCHEDULE_TYPE_UNSPECIFIED - Unspecified payment schedule type. With this payment schedule type, the module does not
   * distribute any revenue.
   */
  PAYMENT_SCHEDULE_TYPE_UNSPECIFIED = 0,
  /** PAYMENT_SCHEDULE_TYPE_MONTHLY - Monthly periods with payments made at the end of each month. */
  PAYMENT_SCHEDULE_TYPE_MONTHLY = 1,
  /**
   * PAYMENT_SCHEDULE_TYPE_BLOCK_BASED - Periods defined by a specific number of blocks, with payments made when the required block
   * count is reached.
   */
  PAYMENT_SCHEDULE_TYPE_BLOCK_BASED = 2,
  UNRECOGNIZED = -1,
}
export function paymentScheduleTypeFromJSON(object: any): PaymentScheduleType {
  switch (object) {
    case 0:
    case "PAYMENT_SCHEDULE_TYPE_UNSPECIFIED":
      return PaymentScheduleType.PAYMENT_SCHEDULE_TYPE_UNSPECIFIED;
    case 1:
    case "PAYMENT_SCHEDULE_TYPE_MONTHLY":
      return PaymentScheduleType.PAYMENT_SCHEDULE_TYPE_MONTHLY;
    case 2:
    case "PAYMENT_SCHEDULE_TYPE_BLOCK_BASED":
      return PaymentScheduleType.PAYMENT_SCHEDULE_TYPE_BLOCK_BASED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PaymentScheduleType.UNRECOGNIZED;
  }
}
export function paymentScheduleTypeToJSON(object: PaymentScheduleType): string {
  switch (object) {
    case PaymentScheduleType.PAYMENT_SCHEDULE_TYPE_UNSPECIFIED:
      return "PAYMENT_SCHEDULE_TYPE_UNSPECIFIED";
    case PaymentScheduleType.PAYMENT_SCHEDULE_TYPE_MONTHLY:
      return "PAYMENT_SCHEDULE_TYPE_MONTHLY";
    case PaymentScheduleType.PAYMENT_SCHEDULE_TYPE_BLOCK_BASED:
      return "PAYMENT_SCHEDULE_TYPE_BLOCK_BASED";
    case PaymentScheduleType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Defines the parameters for the module. */
export interface Params {
  /** The denom to be used for compensation. */
  denomCompensation: string;
  /** The compensation amount in USD. */
  baseCompensation: bigint;
  /**
   * Specifies performance requirements for validators in scope of blocks signing and creation. If
   * not met, the validator is not rewarded.
   */
  blocksPerformanceRequirement?: PerformanceRequirement;
  /**
   * Specifies performance requirements for validators in scope of the oracle price votes. If not
   * met, the validator is not rewarded.
   */
  oracleVotesPerformanceRequirement?: PerformanceRequirement;
  /** Indicates the currently active type of payment schedule. */
  paymentScheduleType: PaymentScheduleType;
  /** The window in seconds to calculate TWAP price of NTRN */
  tWAPWindow: bigint;
}
/** Specifies a performance criteria that validators must meet to qualify for network rewards. */
export interface PerformanceRequirement {
  /**
   * The fraction of the total performance a validator can miss without affecting their reward.
   * Represented as a decimal value in the range [0.0, 1.0], where 1.0 corresponds to 100%.
   */
  allowedToMiss: string;
  /**
   * The minimum fraction of the total performance a validator must achieve to be eligible for
   * network rewards. Validators falling below this threshold will not receive any rewards.
   * Represented as a decimal value in the range [0.0, 1.0], where 1.0 corresponds to 100%.
   */
  requiredAtLeast: string;
}
function createBaseParams(): Params {
  return {
    denomCompensation: "",
    baseCompensation: BigInt(0),
    blocksPerformanceRequirement: undefined,
    oracleVotesPerformanceRequirement: undefined,
    paymentScheduleType: 0,
    tWAPWindow: BigInt(0),
  };
}
export const Params = {
  typeUrl: "/neutron.revenue.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomCompensation !== "") {
      writer.uint32(10).string(message.denomCompensation);
    }
    if (message.baseCompensation !== BigInt(0)) {
      writer.uint32(16).uint64(message.baseCompensation);
    }
    if (message.blocksPerformanceRequirement !== undefined) {
      PerformanceRequirement.encode(message.blocksPerformanceRequirement, writer.uint32(26).fork()).ldelim();
    }
    if (message.oracleVotesPerformanceRequirement !== undefined) {
      PerformanceRequirement.encode(
        message.oracleVotesPerformanceRequirement,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.paymentScheduleType !== 0) {
      writer.uint32(40).int32(message.paymentScheduleType);
    }
    if (message.tWAPWindow !== BigInt(0)) {
      writer.uint32(48).uint64(message.tWAPWindow);
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
          message.denomCompensation = reader.string();
          break;
        case 2:
          message.baseCompensation = reader.uint64();
          break;
        case 3:
          message.blocksPerformanceRequirement = PerformanceRequirement.decode(reader, reader.uint32());
          break;
        case 4:
          message.oracleVotesPerformanceRequirement = PerformanceRequirement.decode(reader, reader.uint32());
          break;
        case 5:
          message.paymentScheduleType = reader.int32() as any;
          break;
        case 6:
          message.tWAPWindow = reader.uint64();
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
    if (isSet(object.denomCompensation)) obj.denomCompensation = String(object.denomCompensation);
    if (isSet(object.baseCompensation)) obj.baseCompensation = BigInt(object.baseCompensation.toString());
    if (isSet(object.blocksPerformanceRequirement))
      obj.blocksPerformanceRequirement = PerformanceRequirement.fromJSON(object.blocksPerformanceRequirement);
    if (isSet(object.oracleVotesPerformanceRequirement))
      obj.oracleVotesPerformanceRequirement = PerformanceRequirement.fromJSON(
        object.oracleVotesPerformanceRequirement,
      );
    if (isSet(object.paymentScheduleType))
      obj.paymentScheduleType = paymentScheduleTypeFromJSON(object.paymentScheduleType);
    if (isSet(object.tWAPWindow)) obj.tWAPWindow = BigInt(object.tWAPWindow.toString());
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.denomCompensation !== undefined && (obj.denomCompensation = message.denomCompensation);
    message.baseCompensation !== undefined &&
      (obj.baseCompensation = (message.baseCompensation || BigInt(0)).toString());
    message.blocksPerformanceRequirement !== undefined &&
      (obj.blocksPerformanceRequirement = message.blocksPerformanceRequirement
        ? PerformanceRequirement.toJSON(message.blocksPerformanceRequirement)
        : undefined);
    message.oracleVotesPerformanceRequirement !== undefined &&
      (obj.oracleVotesPerformanceRequirement = message.oracleVotesPerformanceRequirement
        ? PerformanceRequirement.toJSON(message.oracleVotesPerformanceRequirement)
        : undefined);
    message.paymentScheduleType !== undefined &&
      (obj.paymentScheduleType = paymentScheduleTypeToJSON(message.paymentScheduleType));
    message.tWAPWindow !== undefined && (obj.tWAPWindow = (message.tWAPWindow || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.denomCompensation = object.denomCompensation ?? "";
    if (object.baseCompensation !== undefined && object.baseCompensation !== null) {
      message.baseCompensation = BigInt(object.baseCompensation.toString());
    }
    if (object.blocksPerformanceRequirement !== undefined && object.blocksPerformanceRequirement !== null) {
      message.blocksPerformanceRequirement = PerformanceRequirement.fromPartial(
        object.blocksPerformanceRequirement,
      );
    }
    if (
      object.oracleVotesPerformanceRequirement !== undefined &&
      object.oracleVotesPerformanceRequirement !== null
    ) {
      message.oracleVotesPerformanceRequirement = PerformanceRequirement.fromPartial(
        object.oracleVotesPerformanceRequirement,
      );
    }
    message.paymentScheduleType = object.paymentScheduleType ?? 0;
    if (object.tWAPWindow !== undefined && object.tWAPWindow !== null) {
      message.tWAPWindow = BigInt(object.tWAPWindow.toString());
    }
    return message;
  },
};
function createBasePerformanceRequirement(): PerformanceRequirement {
  return {
    allowedToMiss: "",
    requiredAtLeast: "",
  };
}
export const PerformanceRequirement = {
  typeUrl: "/neutron.revenue.PerformanceRequirement",
  encode(message: PerformanceRequirement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allowedToMiss !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.allowedToMiss, 18).atomics);
    }
    if (message.requiredAtLeast !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.requiredAtLeast, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PerformanceRequirement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerformanceRequirement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedToMiss = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.requiredAtLeast = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PerformanceRequirement {
    const obj = createBasePerformanceRequirement();
    if (isSet(object.allowedToMiss)) obj.allowedToMiss = String(object.allowedToMiss);
    if (isSet(object.requiredAtLeast)) obj.requiredAtLeast = String(object.requiredAtLeast);
    return obj;
  },
  toJSON(message: PerformanceRequirement): JsonSafe<PerformanceRequirement> {
    const obj: any = {};
    message.allowedToMiss !== undefined && (obj.allowedToMiss = message.allowedToMiss);
    message.requiredAtLeast !== undefined && (obj.requiredAtLeast = message.requiredAtLeast);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PerformanceRequirement>, I>>(object: I): PerformanceRequirement {
    const message = createBasePerformanceRequirement();
    message.allowedToMiss = object.allowedToMiss ?? "";
    message.requiredAtLeast = object.requiredAtLeast ?? "";
    return message;
  },
};
