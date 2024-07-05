//@ts-nocheck
/* eslint-disable */
import { Validator } from "../../../tendermint/abci/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "slinky.alerts.v1";
/**
 * ValidatorAlertIncentive defines the incentive strategy to be executed for a
 * validator that has been confirmed to have at fault for an x/alerts alert.
 * This strategy is expected to slash half of the validator's stake.
 */
export interface ValidatorAlertIncentive {
  /** The validator that has been confirmed to have been at fault for an alert. */
  validator: Validator;
  /**
   * AlertSigner is the signer of the alert referenced by the conclusion that
   * created this incentive.
   */
  alertSigner: string;
  /** AlertHeight is the height at which the infraction occurred */
  alertHeight: bigint;
}
function createBaseValidatorAlertIncentive(): ValidatorAlertIncentive {
  return {
    validator: Validator.fromPartial({}),
    alertSigner: "",
    alertHeight: BigInt(0),
  };
}
export const ValidatorAlertIncentive = {
  typeUrl: "/slinky.alerts.v1.ValidatorAlertIncentive",
  encode(message: ValidatorAlertIncentive, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.alertSigner !== "") {
      writer.uint32(18).string(message.alertSigner);
    }
    if (message.alertHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.alertHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorAlertIncentive {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorAlertIncentive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 2:
          message.alertSigner = reader.string();
          break;
        case 3:
          message.alertHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorAlertIncentive {
    const obj = createBaseValidatorAlertIncentive();
    if (isSet(object.validator)) obj.validator = Validator.fromJSON(object.validator);
    if (isSet(object.alertSigner)) obj.alertSigner = String(object.alertSigner);
    if (isSet(object.alertHeight)) obj.alertHeight = BigInt(object.alertHeight.toString());
    return obj;
  },
  toJSON(message: ValidatorAlertIncentive): JsonSafe<ValidatorAlertIncentive> {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    message.alertSigner !== undefined && (obj.alertSigner = message.alertSigner);
    message.alertHeight !== undefined && (obj.alertHeight = (message.alertHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorAlertIncentive>, I>>(object: I): ValidatorAlertIncentive {
    const message = createBaseValidatorAlertIncentive();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator);
    }
    message.alertSigner = object.alertSigner ?? "";
    if (object.alertHeight !== undefined && object.alertHeight !== null) {
      message.alertHeight = BigInt(object.alertHeight.toString());
    }
    return message;
  },
};
