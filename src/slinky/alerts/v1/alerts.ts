/* eslint-disable */
import { CurrencyPair } from "../../types/v1/currency_pair";
import { ExtendedCommitInfo } from "../../../tendermint/abci/types";
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "slinky.alerts.v1";
/**
 * Alert defines the basic meta-data necessary for the alerts module to resolve
 * a claim that the price of a CurrencyPair on-chain is deviating from the price
 * off-chain.
 */
export interface Alert {
  /** height represents the height for which the alert is filed. */
  height: bigint;
  /**
   * signer is the signer of this alert, this is the address that will receive
   * the reward in the case of a positive conclusion, or whose bond will get
   * slashed in the event of a negative conclusion.
   */
  signer: string;
  /**
   * currency_pair is the currency-pair that this claim asserts is deviating
   * from the price off-chain.
   */
  currencyPair: CurrencyPair;
}
/**
 * AlertStatus contains the module specific state for an alert: Has the alert
 * been concluded? What height was the alert submitted, what height should the
 * alert be purged?
 */
export interface AlertStatus {
  /** ConclusionStatus determines whether the alert has been concluded. */
  conclusionStatus: bigint;
  /** SubmissionHeight is the height that the alert was submitted in. */
  submissionHeight: bigint;
  /**
   * SubmissionTimestamp is the block-timestamp of the block that the alert was
   * submitted in (as a UTC value in Unix time).
   */
  submissionTimestamp: bigint;
  /** PurgeHeight is the height at which the alert should be purged. */
  purgeHeight: bigint;
}
/**
 * AlertWithStatus represents a wrapper around the Alert and AlertStatus
 * objects, this is so that the module specific information about Alerts can be
 * packaged together.
 */
export interface AlertWithStatus {
  /** alert is the alert that this status corresponds to. */
  alert: Alert;
  /** status is the status of the alert. */
  status: AlertStatus;
}
/** Signature is a container for a signer address mapped to a signature. */
export interface Signature {
  signer: string;
  signature: Uint8Array;
}
/**
 * MultiSigConcluson defines a conclusion that is accompanied by a set of
 * signatures. The signature is defined over the alert UID, status, OracleData,
 * and PriceBound. The signatures are used to verify that the conclusion is
 * valid.
 */
export interface MultiSigConclusion {
  /** alert is the alert that this conclusion corresponds to. */
  alert: Alert;
  /** oracle_data is the oracle data that this conclusion references. */
  extendedCommitInfo: ExtendedCommitInfo;
  /**
   * signatures is a map of signer -> signature. Where the signature is over
   * Alert.UID, PriceBound, the marshalled ExtendedCommitInfo, and status.
   */
  signatures: Signature[];
  /**
   * price-bound is the price bound of the currency-pair off-chain for the
   * designated time-range.
   */
  priceBound: PriceBound;
  /** status is the status of the conclusion. */
  status: boolean;
  /**
   * CurrencyPairID is the ID of the currency-pair that this conclusion
   * corresponds to.
   */
  currencyPairID: bigint;
}
/**
 * MultiSigConclusionVerificationParams defines the parameters necessary to
 * verify a MultiSigConclusion. It contains a map between signer and public key.
 * Notice, the public-key (value) are the base-64 encoded bytes of the public
 * key. And the signer (key) is the bech32 encoded address of the signer.
 * Notice, all public keys must be secp256 keys.
 */
export interface MultiSigConclusionVerificationParams {
  /** signers is a map of signer -> public key. */
  signers: Any[];
}
/**
 * PriceBound represents the bounds of the price of a currency-pair off chain
 * for a designated time-range
 */
export interface PriceBound {
  high: string;
  low: string;
}
function createBaseAlert(): Alert {
  return {
    height: BigInt(0),
    signer: "",
    currencyPair: CurrencyPair.fromPartial({}),
  };
}
export const Alert = {
  typeUrl: "/slinky.alerts.v1.Alert",
  encode(message: Alert, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    if (message.currencyPair !== undefined) {
      CurrencyPair.encode(message.currencyPair, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Alert {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.signer = reader.string();
          break;
        case 3:
          message.currencyPair = CurrencyPair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Alert {
    const obj = createBaseAlert();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.signer)) obj.signer = String(object.signer);
    if (isSet(object.currencyPair)) obj.currencyPair = CurrencyPair.fromJSON(object.currencyPair);
    return obj;
  },
  toJSON(message: Alert): JsonSafe<Alert> {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    message.currencyPair !== undefined &&
      (obj.currencyPair = message.currencyPair ? CurrencyPair.toJSON(message.currencyPair) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Alert>, I>>(object: I): Alert {
    const message = createBaseAlert();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.signer = object.signer ?? "";
    if (object.currencyPair !== undefined && object.currencyPair !== null) {
      message.currencyPair = CurrencyPair.fromPartial(object.currencyPair);
    }
    return message;
  },
};
function createBaseAlertStatus(): AlertStatus {
  return {
    conclusionStatus: BigInt(0),
    submissionHeight: BigInt(0),
    submissionTimestamp: BigInt(0),
    purgeHeight: BigInt(0),
  };
}
export const AlertStatus = {
  typeUrl: "/slinky.alerts.v1.AlertStatus",
  encode(message: AlertStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.conclusionStatus !== BigInt(0)) {
      writer.uint32(8).uint64(message.conclusionStatus);
    }
    if (message.submissionHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.submissionHeight);
    }
    if (message.submissionTimestamp !== BigInt(0)) {
      writer.uint32(24).uint64(message.submissionTimestamp);
    }
    if (message.purgeHeight !== BigInt(0)) {
      writer.uint32(32).uint64(message.purgeHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AlertStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAlertStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conclusionStatus = reader.uint64();
          break;
        case 2:
          message.submissionHeight = reader.uint64();
          break;
        case 3:
          message.submissionTimestamp = reader.uint64();
          break;
        case 4:
          message.purgeHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AlertStatus {
    const obj = createBaseAlertStatus();
    if (isSet(object.conclusionStatus)) obj.conclusionStatus = BigInt(object.conclusionStatus.toString());
    if (isSet(object.submissionHeight)) obj.submissionHeight = BigInt(object.submissionHeight.toString());
    if (isSet(object.submissionTimestamp))
      obj.submissionTimestamp = BigInt(object.submissionTimestamp.toString());
    if (isSet(object.purgeHeight)) obj.purgeHeight = BigInt(object.purgeHeight.toString());
    return obj;
  },
  toJSON(message: AlertStatus): JsonSafe<AlertStatus> {
    const obj: any = {};
    message.conclusionStatus !== undefined &&
      (obj.conclusionStatus = (message.conclusionStatus || BigInt(0)).toString());
    message.submissionHeight !== undefined &&
      (obj.submissionHeight = (message.submissionHeight || BigInt(0)).toString());
    message.submissionTimestamp !== undefined &&
      (obj.submissionTimestamp = (message.submissionTimestamp || BigInt(0)).toString());
    message.purgeHeight !== undefined && (obj.purgeHeight = (message.purgeHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AlertStatus>, I>>(object: I): AlertStatus {
    const message = createBaseAlertStatus();
    if (object.conclusionStatus !== undefined && object.conclusionStatus !== null) {
      message.conclusionStatus = BigInt(object.conclusionStatus.toString());
    }
    if (object.submissionHeight !== undefined && object.submissionHeight !== null) {
      message.submissionHeight = BigInt(object.submissionHeight.toString());
    }
    if (object.submissionTimestamp !== undefined && object.submissionTimestamp !== null) {
      message.submissionTimestamp = BigInt(object.submissionTimestamp.toString());
    }
    if (object.purgeHeight !== undefined && object.purgeHeight !== null) {
      message.purgeHeight = BigInt(object.purgeHeight.toString());
    }
    return message;
  },
};
function createBaseAlertWithStatus(): AlertWithStatus {
  return {
    alert: Alert.fromPartial({}),
    status: AlertStatus.fromPartial({}),
  };
}
export const AlertWithStatus = {
  typeUrl: "/slinky.alerts.v1.AlertWithStatus",
  encode(message: AlertWithStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.alert !== undefined) {
      Alert.encode(message.alert, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      AlertStatus.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AlertWithStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAlertWithStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alert = Alert.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = AlertStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AlertWithStatus {
    const obj = createBaseAlertWithStatus();
    if (isSet(object.alert)) obj.alert = Alert.fromJSON(object.alert);
    if (isSet(object.status)) obj.status = AlertStatus.fromJSON(object.status);
    return obj;
  },
  toJSON(message: AlertWithStatus): JsonSafe<AlertWithStatus> {
    const obj: any = {};
    message.alert !== undefined && (obj.alert = message.alert ? Alert.toJSON(message.alert) : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? AlertStatus.toJSON(message.status) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AlertWithStatus>, I>>(object: I): AlertWithStatus {
    const message = createBaseAlertWithStatus();
    if (object.alert !== undefined && object.alert !== null) {
      message.alert = Alert.fromPartial(object.alert);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = AlertStatus.fromPartial(object.status);
    }
    return message;
  },
};
function createBaseSignature(): Signature {
  return {
    signer: "",
    signature: new Uint8Array(),
  };
}
export const Signature = {
  typeUrl: "/slinky.alerts.v1.Signature",
  encode(message: Signature, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Signature {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Signature {
    const obj = createBaseSignature();
    if (isSet(object.signer)) obj.signer = String(object.signer);
    if (isSet(object.signature)) obj.signature = bytesFromBase64(object.signature);
    return obj;
  },
  toJSON(message: Signature): JsonSafe<Signature> {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Signature>, I>>(object: I): Signature {
    const message = createBaseSignature();
    message.signer = object.signer ?? "";
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};
function createBaseMultiSigConclusion(): MultiSigConclusion {
  return {
    alert: Alert.fromPartial({}),
    extendedCommitInfo: ExtendedCommitInfo.fromPartial({}),
    signatures: [],
    priceBound: PriceBound.fromPartial({}),
    status: false,
    currencyPairID: BigInt(0),
  };
}
export const MultiSigConclusion = {
  typeUrl: "/slinky.alerts.v1.MultiSigConclusion",
  encode(message: MultiSigConclusion, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.alert !== undefined) {
      Alert.encode(message.alert, writer.uint32(10).fork()).ldelim();
    }
    if (message.extendedCommitInfo !== undefined) {
      ExtendedCommitInfo.encode(message.extendedCommitInfo, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.signatures) {
      Signature.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.priceBound !== undefined) {
      PriceBound.encode(message.priceBound, writer.uint32(34).fork()).ldelim();
    }
    if (message.status === true) {
      writer.uint32(40).bool(message.status);
    }
    if (message.currencyPairID !== BigInt(0)) {
      writer.uint32(48).uint64(message.currencyPairID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MultiSigConclusion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiSigConclusion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alert = Alert.decode(reader, reader.uint32());
          break;
        case 2:
          message.extendedCommitInfo = ExtendedCommitInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.signatures.push(Signature.decode(reader, reader.uint32()));
          break;
        case 4:
          message.priceBound = PriceBound.decode(reader, reader.uint32());
          break;
        case 5:
          message.status = reader.bool();
          break;
        case 6:
          message.currencyPairID = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MultiSigConclusion {
    const obj = createBaseMultiSigConclusion();
    if (isSet(object.alert)) obj.alert = Alert.fromJSON(object.alert);
    if (isSet(object.extendedCommitInfo))
      obj.extendedCommitInfo = ExtendedCommitInfo.fromJSON(object.extendedCommitInfo);
    if (Array.isArray(object?.signatures))
      obj.signatures = object.signatures.map((e: any) => Signature.fromJSON(e));
    if (isSet(object.priceBound)) obj.priceBound = PriceBound.fromJSON(object.priceBound);
    if (isSet(object.status)) obj.status = Boolean(object.status);
    if (isSet(object.currencyPairID)) obj.currencyPairID = BigInt(object.currencyPairID.toString());
    return obj;
  },
  toJSON(message: MultiSigConclusion): JsonSafe<MultiSigConclusion> {
    const obj: any = {};
    message.alert !== undefined && (obj.alert = message.alert ? Alert.toJSON(message.alert) : undefined);
    message.extendedCommitInfo !== undefined &&
      (obj.extendedCommitInfo = message.extendedCommitInfo
        ? ExtendedCommitInfo.toJSON(message.extendedCommitInfo)
        : undefined);
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => (e ? Signature.toJSON(e) : undefined));
    } else {
      obj.signatures = [];
    }
    message.priceBound !== undefined &&
      (obj.priceBound = message.priceBound ? PriceBound.toJSON(message.priceBound) : undefined);
    message.status !== undefined && (obj.status = message.status);
    message.currencyPairID !== undefined &&
      (obj.currencyPairID = (message.currencyPairID || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MultiSigConclusion>, I>>(object: I): MultiSigConclusion {
    const message = createBaseMultiSigConclusion();
    if (object.alert !== undefined && object.alert !== null) {
      message.alert = Alert.fromPartial(object.alert);
    }
    if (object.extendedCommitInfo !== undefined && object.extendedCommitInfo !== null) {
      message.extendedCommitInfo = ExtendedCommitInfo.fromPartial(object.extendedCommitInfo);
    }
    message.signatures = object.signatures?.map((e) => Signature.fromPartial(e)) || [];
    if (object.priceBound !== undefined && object.priceBound !== null) {
      message.priceBound = PriceBound.fromPartial(object.priceBound);
    }
    message.status = object.status ?? false;
    if (object.currencyPairID !== undefined && object.currencyPairID !== null) {
      message.currencyPairID = BigInt(object.currencyPairID.toString());
    }
    return message;
  },
};
function createBaseMultiSigConclusionVerificationParams(): MultiSigConclusionVerificationParams {
  return {
    signers: [],
  };
}
export const MultiSigConclusionVerificationParams = {
  typeUrl: "/slinky.alerts.v1.MultiSigConclusionVerificationParams",
  encode(
    message: MultiSigConclusionVerificationParams,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.signers) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MultiSigConclusionVerificationParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiSigConclusionVerificationParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signers.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MultiSigConclusionVerificationParams {
    const obj = createBaseMultiSigConclusionVerificationParams();
    if (Array.isArray(object?.signers)) obj.signers = object.signers.map((e: any) => Any.fromJSON(e));
    return obj;
  },
  toJSON(message: MultiSigConclusionVerificationParams): JsonSafe<MultiSigConclusionVerificationParams> {
    const obj: any = {};
    if (message.signers) {
      obj.signers = message.signers.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.signers = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MultiSigConclusionVerificationParams>, I>>(
    object: I,
  ): MultiSigConclusionVerificationParams {
    const message = createBaseMultiSigConclusionVerificationParams();
    message.signers = object.signers?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
};
function createBasePriceBound(): PriceBound {
  return {
    high: "",
    low: "",
  };
}
export const PriceBound = {
  typeUrl: "/slinky.alerts.v1.PriceBound",
  encode(message: PriceBound, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.high !== "") {
      writer.uint32(10).string(message.high);
    }
    if (message.low !== "") {
      writer.uint32(18).string(message.low);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PriceBound {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceBound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.high = reader.string();
          break;
        case 2:
          message.low = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PriceBound {
    const obj = createBasePriceBound();
    if (isSet(object.high)) obj.high = String(object.high);
    if (isSet(object.low)) obj.low = String(object.low);
    return obj;
  },
  toJSON(message: PriceBound): JsonSafe<PriceBound> {
    const obj: any = {};
    message.high !== undefined && (obj.high = message.high);
    message.low !== undefined && (obj.low = message.low);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PriceBound>, I>>(object: I): PriceBound {
    const message = createBasePriceBound();
    message.high = object.high ?? "";
    message.low = object.low ?? "";
    return message;
  },
};
