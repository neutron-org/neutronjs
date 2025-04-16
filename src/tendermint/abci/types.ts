//@ts-nocheck
/* eslint-disable */
import { Timestamp } from "../../google/protobuf/timestamp";
import { ConsensusParams } from "../types/params";
import { ProofOps } from "../crypto/proof";
import { PublicKey } from "../crypto/keys";
import { BlockIDFlag, blockIDFlagFromJSON, blockIDFlagToJSON } from "../types/validator";
import { BinaryReader, BinaryWriter } from "../../binary";
import {
  isSet,
  DeepPartial,
  Exact,
  fromJsonTimestamp,
  bytesFromBase64,
  fromTimestamp,
  base64FromBytes,
} from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "tendermint.abci";
export enum CheckTxType {
  NEW = 0,
  RECHECK = 1,
  UNRECOGNIZED = -1,
}
export function checkTxTypeFromJSON(object: any): CheckTxType {
  switch (object) {
    case 0:
    case "NEW":
      return CheckTxType.NEW;
    case 1:
    case "RECHECK":
      return CheckTxType.RECHECK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CheckTxType.UNRECOGNIZED;
  }
}
export function checkTxTypeToJSON(object: CheckTxType): string {
  switch (object) {
    case CheckTxType.NEW:
      return "NEW";
    case CheckTxType.RECHECK:
      return "RECHECK";
    case CheckTxType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ResponseOfferSnapshot_Result {
  /** UNKNOWN - Unknown result, abort all snapshot restoration */
  UNKNOWN = 0,
  /** ACCEPT - Snapshot accepted, apply chunks */
  ACCEPT = 1,
  /** ABORT - Abort all snapshot restoration */
  ABORT = 2,
  /** REJECT - Reject this specific snapshot, try others */
  REJECT = 3,
  /** REJECT_FORMAT - Reject all snapshots of this format, try others */
  REJECT_FORMAT = 4,
  /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
  REJECT_SENDER = 5,
  UNRECOGNIZED = -1,
}
export function responseOfferSnapshot_ResultFromJSON(object: any): ResponseOfferSnapshot_Result {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseOfferSnapshot_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseOfferSnapshot_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseOfferSnapshot_Result.ABORT;
    case 3:
    case "REJECT":
      return ResponseOfferSnapshot_Result.REJECT;
    case 4:
    case "REJECT_FORMAT":
      return ResponseOfferSnapshot_Result.REJECT_FORMAT;
    case 5:
    case "REJECT_SENDER":
      return ResponseOfferSnapshot_Result.REJECT_SENDER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseOfferSnapshot_Result.UNRECOGNIZED;
  }
}
export function responseOfferSnapshot_ResultToJSON(object: ResponseOfferSnapshot_Result): string {
  switch (object) {
    case ResponseOfferSnapshot_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseOfferSnapshot_Result.ACCEPT:
      return "ACCEPT";
    case ResponseOfferSnapshot_Result.ABORT:
      return "ABORT";
    case ResponseOfferSnapshot_Result.REJECT:
      return "REJECT";
    case ResponseOfferSnapshot_Result.REJECT_FORMAT:
      return "REJECT_FORMAT";
    case ResponseOfferSnapshot_Result.REJECT_SENDER:
      return "REJECT_SENDER";
    case ResponseOfferSnapshot_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ResponseApplySnapshotChunk_Result {
  /** UNKNOWN - Unknown result, abort all snapshot restoration */
  UNKNOWN = 0,
  /** ACCEPT - Chunk successfully accepted */
  ACCEPT = 1,
  /** ABORT - Abort all snapshot restoration */
  ABORT = 2,
  /** RETRY - Retry chunk (combine with refetch and reject) */
  RETRY = 3,
  /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
  RETRY_SNAPSHOT = 4,
  /** REJECT_SNAPSHOT - Reject this snapshot, try others */
  REJECT_SNAPSHOT = 5,
  UNRECOGNIZED = -1,
}
export function responseApplySnapshotChunk_ResultFromJSON(object: any): ResponseApplySnapshotChunk_Result {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseApplySnapshotChunk_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseApplySnapshotChunk_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseApplySnapshotChunk_Result.ABORT;
    case 3:
    case "RETRY":
      return ResponseApplySnapshotChunk_Result.RETRY;
    case 4:
    case "RETRY_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
    case 5:
    case "REJECT_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
  }
}
export function responseApplySnapshotChunk_ResultToJSON(object: ResponseApplySnapshotChunk_Result): string {
  switch (object) {
    case ResponseApplySnapshotChunk_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseApplySnapshotChunk_Result.ACCEPT:
      return "ACCEPT";
    case ResponseApplySnapshotChunk_Result.ABORT:
      return "ABORT";
    case ResponseApplySnapshotChunk_Result.RETRY:
      return "RETRY";
    case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
      return "RETRY_SNAPSHOT";
    case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
      return "REJECT_SNAPSHOT";
    case ResponseApplySnapshotChunk_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ResponseProcessProposal_ProposalStatus {
  UNKNOWN = 0,
  ACCEPT = 1,
  REJECT = 2,
  UNRECOGNIZED = -1,
}
export function responseProcessProposal_ProposalStatusFromJSON(
  object: any,
): ResponseProcessProposal_ProposalStatus {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseProcessProposal_ProposalStatus.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseProcessProposal_ProposalStatus.ACCEPT;
    case 2:
    case "REJECT":
      return ResponseProcessProposal_ProposalStatus.REJECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseProcessProposal_ProposalStatus.UNRECOGNIZED;
  }
}
export function responseProcessProposal_ProposalStatusToJSON(
  object: ResponseProcessProposal_ProposalStatus,
): string {
  switch (object) {
    case ResponseProcessProposal_ProposalStatus.UNKNOWN:
      return "UNKNOWN";
    case ResponseProcessProposal_ProposalStatus.ACCEPT:
      return "ACCEPT";
    case ResponseProcessProposal_ProposalStatus.REJECT:
      return "REJECT";
    case ResponseProcessProposal_ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ResponseVerifyVoteExtension_VerifyStatus {
  UNKNOWN = 0,
  ACCEPT = 1,
  /**
   * REJECT - Rejecting the vote extension will reject the entire precommit by the sender.
   * Incorrectly implementing this thus has liveness implications as it may affect
   * CometBFT's ability to receive 2/3+ valid votes to finalize the block.
   * Honest nodes should never be rejected.
   */
  REJECT = 2,
  UNRECOGNIZED = -1,
}
export function responseVerifyVoteExtension_VerifyStatusFromJSON(
  object: any,
): ResponseVerifyVoteExtension_VerifyStatus {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseVerifyVoteExtension_VerifyStatus.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseVerifyVoteExtension_VerifyStatus.ACCEPT;
    case 2:
    case "REJECT":
      return ResponseVerifyVoteExtension_VerifyStatus.REJECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseVerifyVoteExtension_VerifyStatus.UNRECOGNIZED;
  }
}
export function responseVerifyVoteExtension_VerifyStatusToJSON(
  object: ResponseVerifyVoteExtension_VerifyStatus,
): string {
  switch (object) {
    case ResponseVerifyVoteExtension_VerifyStatus.UNKNOWN:
      return "UNKNOWN";
    case ResponseVerifyVoteExtension_VerifyStatus.ACCEPT:
      return "ACCEPT";
    case ResponseVerifyVoteExtension_VerifyStatus.REJECT:
      return "REJECT";
    case ResponseVerifyVoteExtension_VerifyStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum MisbehaviorType {
  UNKNOWN = 0,
  DUPLICATE_VOTE = 1,
  LIGHT_CLIENT_ATTACK = 2,
  UNRECOGNIZED = -1,
}
export function misbehaviorTypeFromJSON(object: any): MisbehaviorType {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return MisbehaviorType.UNKNOWN;
    case 1:
    case "DUPLICATE_VOTE":
      return MisbehaviorType.DUPLICATE_VOTE;
    case 2:
    case "LIGHT_CLIENT_ATTACK":
      return MisbehaviorType.LIGHT_CLIENT_ATTACK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MisbehaviorType.UNRECOGNIZED;
  }
}
export function misbehaviorTypeToJSON(object: MisbehaviorType): string {
  switch (object) {
    case MisbehaviorType.UNKNOWN:
      return "UNKNOWN";
    case MisbehaviorType.DUPLICATE_VOTE:
      return "DUPLICATE_VOTE";
    case MisbehaviorType.LIGHT_CLIENT_ATTACK:
      return "LIGHT_CLIENT_ATTACK";
    case MisbehaviorType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Request {
  echo?: RequestEcho;
  flush?: RequestFlush;
  info?: RequestInfo;
  initChain?: RequestInitChain;
  query?: RequestQuery;
  checkTx?: RequestCheckTx;
  commit?: RequestCommit;
  listSnapshots?: RequestListSnapshots;
  offerSnapshot?: RequestOfferSnapshot;
  loadSnapshotChunk?: RequestLoadSnapshotChunk;
  applySnapshotChunk?: RequestApplySnapshotChunk;
  prepareProposal?: RequestPrepareProposal;
  processProposal?: RequestProcessProposal;
  extendVote?: RequestExtendVote;
  verifyVoteExtension?: RequestVerifyVoteExtension;
  finalizeBlock?: RequestFinalizeBlock;
}
export interface RequestEcho {
  message: string;
}
export interface RequestFlush {}
export interface RequestInfo {
  version: string;
  blockVersion: bigint;
  p2pVersion: bigint;
  abciVersion: string;
}
export interface RequestInitChain {
  time: Timestamp;
  chainId: string;
  consensusParams?: ConsensusParams;
  validators: ValidatorUpdate[];
  appStateBytes: Uint8Array;
  initialHeight: bigint;
}
export interface RequestQuery {
  data: Uint8Array;
  path: string;
  height: bigint;
  prove: boolean;
}
export interface RequestCheckTx {
  tx: Uint8Array;
  type: CheckTxType;
}
export interface RequestCommit {}
/** lists available snapshots */
export interface RequestListSnapshots {}
/** offers a snapshot to the application */
export interface RequestOfferSnapshot {
  /** snapshot offered by peers */
  snapshot?: Snapshot;
  /** light client-verified app hash for snapshot height */
  appHash: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunk {
  height: bigint;
  format: number;
  chunk: number;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunk {
  index: number;
  chunk: Uint8Array;
  sender: string;
}
export interface RequestPrepareProposal {
  /** the modified transactions cannot exceed this size. */
  maxTxBytes: bigint;
  /**
   * txs is an array of transactions that will be included in a block,
   * sent to the app for possible modifications.
   */
  txs: Uint8Array[];
  localLastCommit: ExtendedCommitInfo;
  misbehavior: Misbehavior[];
  height: bigint;
  time: Timestamp;
  nextValidatorsHash: Uint8Array;
  /** address of the public key of the validator proposing the block. */
  proposerAddress: Uint8Array;
}
export interface RequestProcessProposal {
  txs: Uint8Array[];
  proposedLastCommit: CommitInfo;
  misbehavior: Misbehavior[];
  /** hash is the merkle root hash of the fields of the proposed block. */
  hash: Uint8Array;
  height: bigint;
  time: Timestamp;
  nextValidatorsHash: Uint8Array;
  /** address of the public key of the original proposer of the block. */
  proposerAddress: Uint8Array;
}
/** Extends a vote with application-injected data */
export interface RequestExtendVote {
  /** the hash of the block that this vote may be referring to */
  hash: Uint8Array;
  /** the height of the extended vote */
  height: bigint;
  /** info of the block that this vote may be referring to */
  time: Timestamp;
  txs: Uint8Array[];
  proposedLastCommit: CommitInfo;
  misbehavior: Misbehavior[];
  nextValidatorsHash: Uint8Array;
  /** address of the public key of the original proposer of the block. */
  proposerAddress: Uint8Array;
}
/** Verify the vote extension */
export interface RequestVerifyVoteExtension {
  /** the hash of the block that this received vote corresponds to */
  hash: Uint8Array;
  /** the validator that signed the vote extension */
  validatorAddress: Uint8Array;
  height: bigint;
  voteExtension: Uint8Array;
}
export interface RequestFinalizeBlock {
  txs: Uint8Array[];
  decidedLastCommit: CommitInfo;
  misbehavior: Misbehavior[];
  /** hash is the merkle root hash of the fields of the decided block. */
  hash: Uint8Array;
  height: bigint;
  time: Timestamp;
  nextValidatorsHash: Uint8Array;
  /** proposer_address is the address of the public key of the original proposer of the block. */
  proposerAddress: Uint8Array;
}
export interface Response {
  exception?: ResponseException;
  echo?: ResponseEcho;
  flush?: ResponseFlush;
  info?: ResponseInfo;
  initChain?: ResponseInitChain;
  query?: ResponseQuery;
  checkTx?: ResponseCheckTx;
  commit?: ResponseCommit;
  listSnapshots?: ResponseListSnapshots;
  offerSnapshot?: ResponseOfferSnapshot;
  loadSnapshotChunk?: ResponseLoadSnapshotChunk;
  applySnapshotChunk?: ResponseApplySnapshotChunk;
  prepareProposal?: ResponsePrepareProposal;
  processProposal?: ResponseProcessProposal;
  extendVote?: ResponseExtendVote;
  verifyVoteExtension?: ResponseVerifyVoteExtension;
  finalizeBlock?: ResponseFinalizeBlock;
}
/** nondeterministic */
export interface ResponseException {
  error: string;
}
export interface ResponseEcho {
  message: string;
}
export interface ResponseFlush {}
export interface ResponseInfo {
  data: string;
  version: string;
  appVersion: bigint;
  lastBlockHeight: bigint;
  lastBlockAppHash: Uint8Array;
}
export interface ResponseInitChain {
  consensusParams?: ConsensusParams;
  validators: ValidatorUpdate[];
  appHash: Uint8Array;
}
export interface ResponseQuery {
  code: number;
  /** bytes data = 2; // use "value" instead. */
  log: string;
  /** nondeterministic */
  info: string;
  index: bigint;
  key: Uint8Array;
  value: Uint8Array;
  proofOps?: ProofOps;
  height: bigint;
  codespace: string;
}
export interface ResponseCheckTx {
  code: number;
  data: Uint8Array;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gasWanted: bigint;
  gasUsed: bigint;
  events: Event[];
  codespace: string;
}
export interface ResponseCommit {
  retainHeight: bigint;
}
export interface ResponseListSnapshots {
  snapshots: Snapshot[];
}
export interface ResponseOfferSnapshot {
  result: ResponseOfferSnapshot_Result;
}
export interface ResponseLoadSnapshotChunk {
  chunk: Uint8Array;
}
export interface ResponseApplySnapshotChunk {
  result: ResponseApplySnapshotChunk_Result;
  /** Chunks to refetch and reapply */
  refetchChunks: number[];
  /** Chunk senders to reject and ban */
  rejectSenders: string[];
}
export interface ResponsePrepareProposal {
  txs: Uint8Array[];
}
export interface ResponseProcessProposal {
  status: ResponseProcessProposal_ProposalStatus;
}
export interface ResponseExtendVote {
  voteExtension: Uint8Array;
}
export interface ResponseVerifyVoteExtension {
  status: ResponseVerifyVoteExtension_VerifyStatus;
}
export interface ResponseFinalizeBlock {
  /** set of block events emmitted as part of executing the block */
  events: Event[];
  /**
   * the result of executing each transaction including the events
   * the particular transction emitted. This should match the order
   * of the transactions delivered in the block itself
   */
  txResults: ExecTxResult[];
  /** a list of updates to the validator set. These will reflect the validator set at current height + 2. */
  validatorUpdates: ValidatorUpdate[];
  /** updates to the consensus params, if any. */
  consensusParamUpdates?: ConsensusParams;
  /**
   * app_hash is the hash of the applications' state which is used to confirm that execution of the transactions was
   * deterministic. It is up to the application to decide which algorithm to use.
   */
  appHash: Uint8Array;
}
export interface CommitInfo {
  round: number;
  votes: VoteInfo[];
}
/**
 * ExtendedCommitInfo is similar to CommitInfo except that it is only used in
 * the PrepareProposal request such that CometBFT can provide vote extensions
 * to the application.
 */
export interface ExtendedCommitInfo {
  /** The round at which the block proposer decided in the previous height. */
  round: number;
  /**
   * List of validators' addresses in the last validator set with their voting
   * information, including vote extensions.
   */
  votes: ExtendedVoteInfo[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseFinalizeBlock and ResponseCheckTx.
 * Later, transactions may be queried using these events.
 */
export interface Event {
  type: string;
  attributes: EventAttribute[];
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
  key: string;
  value: string;
  /** nondeterministic */
  index: boolean;
}
/**
 * ExecTxResult contains results of executing one individual transaction.
 *
 * * Its structure is equivalent to #ResponseDeliverTx which will be deprecated/deleted
 */
export interface ExecTxResult {
  code: number;
  data: Uint8Array;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gasWanted: bigint;
  gasUsed: bigint;
  events: Event[];
  codespace: string;
}
/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 */
export interface TxResult {
  height: bigint;
  index: number;
  tx: Uint8Array;
  result: ExecTxResult;
}
export interface Validator {
  /** The first 20 bytes of SHA256(public key) */
  address: Uint8Array;
  /** PubKey pub_key = 2 [(gogoproto.nullable)=false]; */
  power: bigint;
}
export interface ValidatorUpdate {
  pubKey: PublicKey;
  power: bigint;
}
export interface VoteInfo {
  validator: Validator;
  blockIdFlag: BlockIDFlag;
}
export interface ExtendedVoteInfo {
  /** The validator that sent the vote. */
  validator: Validator;
  /** Non-deterministic extension provided by the sending validator's application. */
  voteExtension: Uint8Array;
  /** Vote extension signature created by CometBFT */
  extensionSignature: Uint8Array;
  /** block_id_flag indicates whether the validator voted for a block, nil, or did not vote at all */
  blockIdFlag: BlockIDFlag;
}
export interface Misbehavior {
  type: MisbehaviorType;
  /** The offending validator */
  validator: Validator;
  /** The height when the offense occurred */
  height: bigint;
  /** The corresponding time where the offense occurred */
  time: Timestamp;
  /**
   * Total voting power of the validator set in case the ABCI application does
   * not store historical validators.
   * https://github.com/tendermint/tendermint/issues/4581
   */
  totalVotingPower: bigint;
}
export interface Snapshot {
  /** The height at which the snapshot was taken */
  height: bigint;
  /** The application-specific snapshot format */
  format: number;
  /** Number of chunks in the snapshot */
  chunks: number;
  /** Arbitrary snapshot hash, equal only if identical */
  hash: Uint8Array;
  /** Arbitrary application metadata */
  metadata: Uint8Array;
}
function createBaseRequest(): Request {
  return {
    echo: undefined,
    flush: undefined,
    info: undefined,
    initChain: undefined,
    query: undefined,
    checkTx: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined,
    prepareProposal: undefined,
    processProposal: undefined,
    extendVote: undefined,
    verifyVoteExtension: undefined,
    finalizeBlock: undefined,
  };
}
export const Request = {
  typeUrl: "/tendermint.abci.Request",
  encode(message: Request, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.echo !== undefined) {
      RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
    }
    if (message.info !== undefined) {
      RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    if (message.initChain !== undefined) {
      RequestInitChain.encode(message.initChain, writer.uint32(42).fork()).ldelim();
    }
    if (message.query !== undefined) {
      RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
    }
    if (message.checkTx !== undefined) {
      RequestCheckTx.encode(message.checkTx, writer.uint32(66).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      RequestListSnapshots.encode(message.listSnapshots, writer.uint32(98).fork()).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      RequestOfferSnapshot.encode(message.offerSnapshot, writer.uint32(106).fork()).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      RequestLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(114).fork()).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      RequestApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(122).fork()).ldelim();
    }
    if (message.prepareProposal !== undefined) {
      RequestPrepareProposal.encode(message.prepareProposal, writer.uint32(130).fork()).ldelim();
    }
    if (message.processProposal !== undefined) {
      RequestProcessProposal.encode(message.processProposal, writer.uint32(138).fork()).ldelim();
    }
    if (message.extendVote !== undefined) {
      RequestExtendVote.encode(message.extendVote, writer.uint32(146).fork()).ldelim();
    }
    if (message.verifyVoteExtension !== undefined) {
      RequestVerifyVoteExtension.encode(message.verifyVoteExtension, writer.uint32(154).fork()).ldelim();
    }
    if (message.finalizeBlock !== undefined) {
      RequestFinalizeBlock.encode(message.finalizeBlock, writer.uint32(162).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Request {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.echo = RequestEcho.decode(reader, reader.uint32());
          break;
        case 2:
          message.flush = RequestFlush.decode(reader, reader.uint32());
          break;
        case 3:
          message.info = RequestInfo.decode(reader, reader.uint32());
          break;
        case 5:
          message.initChain = RequestInitChain.decode(reader, reader.uint32());
          break;
        case 6:
          message.query = RequestQuery.decode(reader, reader.uint32());
          break;
        case 8:
          message.checkTx = RequestCheckTx.decode(reader, reader.uint32());
          break;
        case 11:
          message.commit = RequestCommit.decode(reader, reader.uint32());
          break;
        case 12:
          message.listSnapshots = RequestListSnapshots.decode(reader, reader.uint32());
          break;
        case 13:
          message.offerSnapshot = RequestOfferSnapshot.decode(reader, reader.uint32());
          break;
        case 14:
          message.loadSnapshotChunk = RequestLoadSnapshotChunk.decode(reader, reader.uint32());
          break;
        case 15:
          message.applySnapshotChunk = RequestApplySnapshotChunk.decode(reader, reader.uint32());
          break;
        case 16:
          message.prepareProposal = RequestPrepareProposal.decode(reader, reader.uint32());
          break;
        case 17:
          message.processProposal = RequestProcessProposal.decode(reader, reader.uint32());
          break;
        case 18:
          message.extendVote = RequestExtendVote.decode(reader, reader.uint32());
          break;
        case 19:
          message.verifyVoteExtension = RequestVerifyVoteExtension.decode(reader, reader.uint32());
          break;
        case 20:
          message.finalizeBlock = RequestFinalizeBlock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Request {
    const obj = createBaseRequest();
    if (isSet(object.echo)) obj.echo = RequestEcho.fromJSON(object.echo);
    if (isSet(object.flush)) obj.flush = RequestFlush.fromJSON(object.flush);
    if (isSet(object.info)) obj.info = RequestInfo.fromJSON(object.info);
    if (isSet(object.initChain)) obj.initChain = RequestInitChain.fromJSON(object.initChain);
    if (isSet(object.query)) obj.query = RequestQuery.fromJSON(object.query);
    if (isSet(object.checkTx)) obj.checkTx = RequestCheckTx.fromJSON(object.checkTx);
    if (isSet(object.commit)) obj.commit = RequestCommit.fromJSON(object.commit);
    if (isSet(object.listSnapshots)) obj.listSnapshots = RequestListSnapshots.fromJSON(object.listSnapshots);
    if (isSet(object.offerSnapshot)) obj.offerSnapshot = RequestOfferSnapshot.fromJSON(object.offerSnapshot);
    if (isSet(object.loadSnapshotChunk))
      obj.loadSnapshotChunk = RequestLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk);
    if (isSet(object.applySnapshotChunk))
      obj.applySnapshotChunk = RequestApplySnapshotChunk.fromJSON(object.applySnapshotChunk);
    if (isSet(object.prepareProposal))
      obj.prepareProposal = RequestPrepareProposal.fromJSON(object.prepareProposal);
    if (isSet(object.processProposal))
      obj.processProposal = RequestProcessProposal.fromJSON(object.processProposal);
    if (isSet(object.extendVote)) obj.extendVote = RequestExtendVote.fromJSON(object.extendVote);
    if (isSet(object.verifyVoteExtension))
      obj.verifyVoteExtension = RequestVerifyVoteExtension.fromJSON(object.verifyVoteExtension);
    if (isSet(object.finalizeBlock)) obj.finalizeBlock = RequestFinalizeBlock.fromJSON(object.finalizeBlock);
    return obj;
  },
  toJSON(message: Request): JsonSafe<Request> {
    const obj: any = {};
    message.echo !== undefined && (obj.echo = message.echo ? RequestEcho.toJSON(message.echo) : undefined);
    message.flush !== undefined &&
      (obj.flush = message.flush ? RequestFlush.toJSON(message.flush) : undefined);
    message.info !== undefined && (obj.info = message.info ? RequestInfo.toJSON(message.info) : undefined);
    message.initChain !== undefined &&
      (obj.initChain = message.initChain ? RequestInitChain.toJSON(message.initChain) : undefined);
    message.query !== undefined &&
      (obj.query = message.query ? RequestQuery.toJSON(message.query) : undefined);
    message.checkTx !== undefined &&
      (obj.checkTx = message.checkTx ? RequestCheckTx.toJSON(message.checkTx) : undefined);
    message.commit !== undefined &&
      (obj.commit = message.commit ? RequestCommit.toJSON(message.commit) : undefined);
    message.listSnapshots !== undefined &&
      (obj.listSnapshots = message.listSnapshots
        ? RequestListSnapshots.toJSON(message.listSnapshots)
        : undefined);
    message.offerSnapshot !== undefined &&
      (obj.offerSnapshot = message.offerSnapshot
        ? RequestOfferSnapshot.toJSON(message.offerSnapshot)
        : undefined);
    message.loadSnapshotChunk !== undefined &&
      (obj.loadSnapshotChunk = message.loadSnapshotChunk
        ? RequestLoadSnapshotChunk.toJSON(message.loadSnapshotChunk)
        : undefined);
    message.applySnapshotChunk !== undefined &&
      (obj.applySnapshotChunk = message.applySnapshotChunk
        ? RequestApplySnapshotChunk.toJSON(message.applySnapshotChunk)
        : undefined);
    message.prepareProposal !== undefined &&
      (obj.prepareProposal = message.prepareProposal
        ? RequestPrepareProposal.toJSON(message.prepareProposal)
        : undefined);
    message.processProposal !== undefined &&
      (obj.processProposal = message.processProposal
        ? RequestProcessProposal.toJSON(message.processProposal)
        : undefined);
    message.extendVote !== undefined &&
      (obj.extendVote = message.extendVote ? RequestExtendVote.toJSON(message.extendVote) : undefined);
    message.verifyVoteExtension !== undefined &&
      (obj.verifyVoteExtension = message.verifyVoteExtension
        ? RequestVerifyVoteExtension.toJSON(message.verifyVoteExtension)
        : undefined);
    message.finalizeBlock !== undefined &&
      (obj.finalizeBlock = message.finalizeBlock
        ? RequestFinalizeBlock.toJSON(message.finalizeBlock)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    if (object.echo !== undefined && object.echo !== null) {
      message.echo = RequestEcho.fromPartial(object.echo);
    }
    if (object.flush !== undefined && object.flush !== null) {
      message.flush = RequestFlush.fromPartial(object.flush);
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = RequestInfo.fromPartial(object.info);
    }
    if (object.initChain !== undefined && object.initChain !== null) {
      message.initChain = RequestInitChain.fromPartial(object.initChain);
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = RequestQuery.fromPartial(object.query);
    }
    if (object.checkTx !== undefined && object.checkTx !== null) {
      message.checkTx = RequestCheckTx.fromPartial(object.checkTx);
    }
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = RequestCommit.fromPartial(object.commit);
    }
    if (object.listSnapshots !== undefined && object.listSnapshots !== null) {
      message.listSnapshots = RequestListSnapshots.fromPartial(object.listSnapshots);
    }
    if (object.offerSnapshot !== undefined && object.offerSnapshot !== null) {
      message.offerSnapshot = RequestOfferSnapshot.fromPartial(object.offerSnapshot);
    }
    if (object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null) {
      message.loadSnapshotChunk = RequestLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk);
    }
    if (object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null) {
      message.applySnapshotChunk = RequestApplySnapshotChunk.fromPartial(object.applySnapshotChunk);
    }
    if (object.prepareProposal !== undefined && object.prepareProposal !== null) {
      message.prepareProposal = RequestPrepareProposal.fromPartial(object.prepareProposal);
    }
    if (object.processProposal !== undefined && object.processProposal !== null) {
      message.processProposal = RequestProcessProposal.fromPartial(object.processProposal);
    }
    if (object.extendVote !== undefined && object.extendVote !== null) {
      message.extendVote = RequestExtendVote.fromPartial(object.extendVote);
    }
    if (object.verifyVoteExtension !== undefined && object.verifyVoteExtension !== null) {
      message.verifyVoteExtension = RequestVerifyVoteExtension.fromPartial(object.verifyVoteExtension);
    }
    if (object.finalizeBlock !== undefined && object.finalizeBlock !== null) {
      message.finalizeBlock = RequestFinalizeBlock.fromPartial(object.finalizeBlock);
    }
    return message;
  },
  fromAmino(object: RequestAmino): Request {
    const message = createBaseRequest();
    if (object.echo !== undefined && object.echo !== null) {
      message.echo = RequestEcho.fromAmino(object.echo);
    }
    if (object.flush !== undefined && object.flush !== null) {
      message.flush = RequestFlush.fromAmino(object.flush);
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = RequestInfo.fromAmino(object.info);
    }
    if (object.init_chain !== undefined && object.init_chain !== null) {
      message.initChain = RequestInitChain.fromAmino(object.init_chain);
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = RequestQuery.fromAmino(object.query);
    }
    if (object.check_tx !== undefined && object.check_tx !== null) {
      message.checkTx = RequestCheckTx.fromAmino(object.check_tx);
    }
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = RequestCommit.fromAmino(object.commit);
    }
    if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
      message.listSnapshots = RequestListSnapshots.fromAmino(object.list_snapshots);
    }
    if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
      message.offerSnapshot = RequestOfferSnapshot.fromAmino(object.offer_snapshot);
    }
    if (object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null) {
      message.loadSnapshotChunk = RequestLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk);
    }
    if (object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null) {
      message.applySnapshotChunk = RequestApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk);
    }
    if (object.prepare_proposal !== undefined && object.prepare_proposal !== null) {
      message.prepareProposal = RequestPrepareProposal.fromAmino(object.prepare_proposal);
    }
    if (object.process_proposal !== undefined && object.process_proposal !== null) {
      message.processProposal = RequestProcessProposal.fromAmino(object.process_proposal);
    }
    if (object.extend_vote !== undefined && object.extend_vote !== null) {
      message.extendVote = RequestExtendVote.fromAmino(object.extend_vote);
    }
    if (object.verify_vote_extension !== undefined && object.verify_vote_extension !== null) {
      message.verifyVoteExtension = RequestVerifyVoteExtension.fromAmino(object.verify_vote_extension);
    }
    if (object.finalize_block !== undefined && object.finalize_block !== null) {
      message.finalizeBlock = RequestFinalizeBlock.fromAmino(object.finalize_block);
    }
    return message;
  },
  toAmino(message: Request): RequestAmino {
    const obj: any = {};
    obj.echo = message.echo ? RequestEcho.toAmino(message.echo) : undefined;
    obj.flush = message.flush ? RequestFlush.toAmino(message.flush) : undefined;
    obj.info = message.info ? RequestInfo.toAmino(message.info) : undefined;
    obj.init_chain = message.initChain ? RequestInitChain.toAmino(message.initChain) : undefined;
    obj.query = message.query ? RequestQuery.toAmino(message.query) : undefined;
    obj.check_tx = message.checkTx ? RequestCheckTx.toAmino(message.checkTx) : undefined;
    obj.commit = message.commit ? RequestCommit.toAmino(message.commit) : undefined;
    obj.list_snapshots = message.listSnapshots
      ? RequestListSnapshots.toAmino(message.listSnapshots)
      : undefined;
    obj.offer_snapshot = message.offerSnapshot
      ? RequestOfferSnapshot.toAmino(message.offerSnapshot)
      : undefined;
    obj.load_snapshot_chunk = message.loadSnapshotChunk
      ? RequestLoadSnapshotChunk.toAmino(message.loadSnapshotChunk)
      : undefined;
    obj.apply_snapshot_chunk = message.applySnapshotChunk
      ? RequestApplySnapshotChunk.toAmino(message.applySnapshotChunk)
      : undefined;
    obj.prepare_proposal = message.prepareProposal
      ? RequestPrepareProposal.toAmino(message.prepareProposal)
      : undefined;
    obj.process_proposal = message.processProposal
      ? RequestProcessProposal.toAmino(message.processProposal)
      : undefined;
    obj.extend_vote = message.extendVote ? RequestExtendVote.toAmino(message.extendVote) : undefined;
    obj.verify_vote_extension = message.verifyVoteExtension
      ? RequestVerifyVoteExtension.toAmino(message.verifyVoteExtension)
      : undefined;
    obj.finalize_block = message.finalizeBlock
      ? RequestFinalizeBlock.toAmino(message.finalizeBlock)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestAminoMsg): Request {
    return Request.fromAmino(object.value);
  },
};
function createBaseRequestEcho(): RequestEcho {
  return {
    message: "",
  };
}
export const RequestEcho = {
  typeUrl: "/tendermint.abci.RequestEcho",
  encode(message: RequestEcho, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestEcho {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestEcho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestEcho {
    const obj = createBaseRequestEcho();
    if (isSet(object.message)) obj.message = String(object.message);
    return obj;
  },
  toJSON(message: RequestEcho): JsonSafe<RequestEcho> {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RequestEcho>, I>>(object: I): RequestEcho {
    const message = createBaseRequestEcho();
    message.message = object.message ?? "";
    return message;
  },
  fromAmino(object: RequestEchoAmino): RequestEcho {
    const message = createBaseRequestEcho();
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toAmino(message: RequestEcho): RequestEchoAmino {
    const obj: any = {};
    obj.message = message.message === "" ? undefined : message.message;
    return obj;
  },
  fromAminoMsg(object: RequestEchoAminoMsg): RequestEcho {
    return RequestEcho.fromAmino(object.value);
  },
};
function createBaseRequestFlush(): RequestFlush {
  return {};
}
export const RequestFlush = {
  typeUrl: "/tendermint.abci.RequestFlush",
  encode(_: RequestFlush, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestFlush {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestFlush();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): RequestFlush {
    const obj = createBaseRequestFlush();
    return obj;
  },
  toJSON(_: RequestFlush): JsonSafe<RequestFlush> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RequestFlush>, I>>(_: I): RequestFlush {
    const message = createBaseRequestFlush();
    return message;
  },
  fromAmino(_: RequestFlushAmino): RequestFlush {
    const message = createBaseRequestFlush();
    return message;
  },
  toAmino(_: RequestFlush): RequestFlushAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RequestFlushAminoMsg): RequestFlush {
    return RequestFlush.fromAmino(object.value);
  },
};
function createBaseRequestInfo(): RequestInfo {
  return {
    version: "",
    blockVersion: BigInt(0),
    p2pVersion: BigInt(0),
    abciVersion: "",
  };
}
export const RequestInfo = {
  typeUrl: "/tendermint.abci.RequestInfo",
  encode(message: RequestInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.blockVersion !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockVersion);
    }
    if (message.p2pVersion !== BigInt(0)) {
      writer.uint32(24).uint64(message.p2pVersion);
    }
    if (message.abciVersion !== "") {
      writer.uint32(34).string(message.abciVersion);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.blockVersion = reader.uint64();
          break;
        case 3:
          message.p2pVersion = reader.uint64();
          break;
        case 4:
          message.abciVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestInfo {
    const obj = createBaseRequestInfo();
    if (isSet(object.version)) obj.version = String(object.version);
    if (isSet(object.blockVersion)) obj.blockVersion = BigInt(object.blockVersion.toString());
    if (isSet(object.p2pVersion)) obj.p2pVersion = BigInt(object.p2pVersion.toString());
    if (isSet(object.abciVersion)) obj.abciVersion = String(object.abciVersion);
    return obj;
  },
  toJSON(message: RequestInfo): JsonSafe<RequestInfo> {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.blockVersion !== undefined && (obj.blockVersion = (message.blockVersion || BigInt(0)).toString());
    message.p2pVersion !== undefined && (obj.p2pVersion = (message.p2pVersion || BigInt(0)).toString());
    message.abciVersion !== undefined && (obj.abciVersion = message.abciVersion);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RequestInfo>, I>>(object: I): RequestInfo {
    const message = createBaseRequestInfo();
    message.version = object.version ?? "";
    if (object.blockVersion !== undefined && object.blockVersion !== null) {
      message.blockVersion = BigInt(object.blockVersion.toString());
    }
    if (object.p2pVersion !== undefined && object.p2pVersion !== null) {
      message.p2pVersion = BigInt(object.p2pVersion.toString());
    }
    message.abciVersion = object.abciVersion ?? "";
    return message;
  },
  fromAmino(object: RequestInfoAmino): RequestInfo {
    const message = createBaseRequestInfo();
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.block_version !== undefined && object.block_version !== null) {
      message.blockVersion = BigInt(object.block_version);
    }
    if (object.p2p_version !== undefined && object.p2p_version !== null) {
      message.p2pVersion = BigInt(object.p2p_version);
    }
    if (object.abci_version !== undefined && object.abci_version !== null) {
      message.abciVersion = object.abci_version;
    }
    return message;
  },
  toAmino(message: RequestInfo): RequestInfoAmino {
    const obj: any = {};
    obj.version = message.version === "" ? undefined : message.version;
    obj.block_version = message.blockVersion !== BigInt(0) ? message.blockVersion?.toString() : undefined;
    obj.p2p_version = message.p2pVersion !== BigInt(0) ? message.p2pVersion?.toString() : undefined;
    obj.abci_version = message.abciVersion === "" ? undefined : message.abciVersion;
    return obj;
  },
  fromAminoMsg(object: RequestInfoAminoMsg): RequestInfo {
    return RequestInfo.fromAmino(object.value);
  },
};
function createBaseRequestInitChain(): RequestInitChain {
  return {
    time: Timestamp.fromPartial({}),
    chainId: "",
    consensusParams: undefined,
    validators: [],
    appStateBytes: new Uint8Array(),
    initialHeight: BigInt(0),
  };
}
export const RequestInitChain = {
  typeUrl: "/tendermint.abci.RequestInitChain",
  encode(message: RequestInitChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.appStateBytes.length !== 0) {
      writer.uint32(42).bytes(message.appStateBytes);
    }
    if (message.initialHeight !== BigInt(0)) {
      writer.uint32(48).int64(message.initialHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestInitChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInitChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 5:
          message.appStateBytes = reader.bytes();
          break;
        case 6:
          message.initialHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestInitChain {
    const obj = createBaseRequestInitChain();
    if (isSet(object.time)) obj.time = fromJsonTimestamp(object.time);
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.consensusParams)) obj.consensusParams = ConsensusParams.fromJSON(object.consensusParams);
    if (Array.isArray(object?.validators))
      obj.validators = object.validators.map((e: any) => ValidatorUpdate.fromJSON(e));
    if (isSet(object.appStateBytes)) obj.appStateBytes = bytesFromBase64(object.appStateBytes);
    if (isSet(object.initialHeight)) obj.initialHeight = BigInt(object.initialHeight.toString());
    return obj;
  },
  toJSON(message: RequestInitChain): JsonSafe<RequestInitChain> {
    const obj: any = {};
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.consensusParams !== undefined &&
      (obj.consensusParams = message.consensusParams
        ? ConsensusParams.toJSON(message.consensusParams)
        : undefined);
    if (message.validators) {
      obj.validators = message.validators.map((e) => (e ? ValidatorUpdate.toJSON(e) : undefined));
    } else {
      obj.validators = [];
    }
    message.appStateBytes !== undefined &&
      (obj.appStateBytes = base64FromBytes(
        message.appStateBytes !== undefined ? message.appStateBytes : new Uint8Array(),
      ));
    message.initialHeight !== undefined &&
      (obj.initialHeight = (message.initialHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RequestInitChain>, I>>(object: I): RequestInitChain {
    const message = createBaseRequestInitChain();
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromPartial(object.time);
    }
    message.chainId = object.chainId ?? "";
    if (object.consensusParams !== undefined && object.consensusParams !== null) {
      message.consensusParams = ConsensusParams.fromPartial(object.consensusParams);
    }
    message.validators = object.validators?.map((e) => ValidatorUpdate.fromPartial(e)) || [];
    message.appStateBytes = object.appStateBytes ?? new Uint8Array();
    if (object.initialHeight !== undefined && object.initialHeight !== null) {
      message.initialHeight = BigInt(object.initialHeight.toString());
    }
    return message;
  },
  fromAmino(object: RequestInitChainAmino): RequestInitChain {
    const message = createBaseRequestInitChain();
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.consensus_params !== undefined && object.consensus_params !== null) {
      message.consensusParams = ConsensusParams.fromAmino(object.consensus_params);
    }
    message.validators = object.validators?.map((e) => ValidatorUpdate.fromAmino(e)) || [];
    if (object.app_state_bytes !== undefined && object.app_state_bytes !== null) {
      message.appStateBytes = bytesFromBase64(object.app_state_bytes);
    }
    if (object.initial_height !== undefined && object.initial_height !== null) {
      message.initialHeight = BigInt(object.initial_height);
    }
    return message;
  },
  toAmino(message: RequestInitChain): RequestInitChainAmino {
    const obj: any = {};
    obj.time = message.time ? Timestamp.toAmino(message.time) : undefined;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.consensus_params = message.consensusParams
      ? ConsensusParams.toAmino(message.consensusParams)
      : undefined;
    if (message.validators) {
      obj.validators = message.validators.map((e) => (e ? ValidatorUpdate.toAmino(e) : undefined));
    } else {
      obj.validators = message.validators;
    }
    obj.app_state_bytes = message.appStateBytes ? base64FromBytes(message.appStateBytes) : undefined;
    obj.initial_height = message.initialHeight !== BigInt(0) ? message.initialHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestInitChainAminoMsg): RequestInitChain {
    return RequestInitChain.fromAmino(object.value);
  },
};
function createBaseRequestQuery(): RequestQuery {
  return {
    data: new Uint8Array(),
    path: "",
    height: BigInt(0),
    prove: false,
  };
}
export const RequestQuery = {
  typeUrl: "/tendermint.abci.RequestQuery",
  encode(message: RequestQuery, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestQuery {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.prove = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestQuery {
    const obj = createBaseRequestQuery();
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    if (isSet(object.path)) obj.path = String(object.path);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.prove)) obj.prove = Boolean(object.prove);
    return obj;
  },
  toJSON(message: RequestQuery): JsonSafe<RequestQuery> {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.path !== undefined && (obj.path = message.path);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.prove !== undefined && (obj.prove = message.prove);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RequestQuery>, I>>(object: I): RequestQuery {
    const message = createBaseRequestQuery();
    message.data = object.data ?? new Uint8Array();
    message.path = object.path ?? "";
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.prove = object.prove ?? false;
    return message;
  },
  fromAmino(object: RequestQueryAmino): RequestQuery {
    const message = createBaseRequestQuery();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.prove !== undefined && object.prove !== null) {
      message.prove = object.prove;
    }
    return message;
  },
  toAmino(message: RequestQuery): RequestQueryAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.path = message.path === "" ? undefined : message.path;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.prove = message.prove === false ? undefined : message.prove;
    return obj;
  },
  fromAminoMsg(object: RequestQueryAminoMsg): RequestQuery {
    return RequestQuery.fromAmino(object.value);
  },
};
function createBaseRequestCheckTx(): RequestCheckTx {
  return {
    tx: new Uint8Array(),
    type: 0,
  };
}
export const RequestCheckTx = {
  typeUrl: "/tendermint.abci.RequestCheckTx",
  encode(message: RequestCheckTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestCheckTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestCheckTx {
    const obj = createBaseRequestCheckTx();
    if (isSet(object.tx)) obj.tx = bytesFromBase64(object.tx);
    if (isSet(object.type)) obj.type = checkTxTypeFromJSON(object.type);
    return obj;
  },
  toJSON(message: RequestCheckTx): JsonSafe<RequestCheckTx> {
    const obj: any = {};
    message.tx !== undefined &&
      (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
    message.type !== undefined && (obj.type = checkTxTypeToJSON(message.type));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RequestCheckTx>, I>>(object: I): RequestCheckTx {
    const message = createBaseRequestCheckTx();
    message.tx = object.tx ?? new Uint8Array();
    message.type = object.type ?? 0;
    return message;
  },
  fromAmino(object: RequestCheckTxAmino): RequestCheckTx {
    const message = createBaseRequestCheckTx();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = bytesFromBase64(object.tx);
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    return message;
  },
  toAmino(message: RequestCheckTx): RequestCheckTxAmino {
    const obj: any = {};
    obj.tx = message.tx ? base64FromBytes(message.tx) : undefined;
    obj.type = message.type === 0 ? undefined : message.type;
    return obj;
  },
  fromAminoMsg(object: RequestCheckTxAminoMsg): RequestCheckTx {
    return RequestCheckTx.fromAmino(object.value);
  },
};
function createBaseRequestCommit(): RequestCommit {
  return {};
}
export const RequestCommit = {
  typeUrl: "/tendermint.abci.RequestCommit",
  encode(_: RequestCommit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestCommit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): RequestCommit {
    const obj = createBaseRequestCommit();
    return obj;
  },
  toJSON(_: RequestCommit): JsonSafe<RequestCommit> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RequestCommit>, I>>(_: I): RequestCommit {
    const message = createBaseRequestCommit();
    return message;
  },
  fromAmino(_: RequestCommitAmino): RequestCommit {
    const message = createBaseRequestCommit();
    return message;
  },
  toAmino(_: RequestCommit): RequestCommitAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RequestCommitAminoMsg): RequestCommit {
    return RequestCommit.fromAmino(object.value);
  },
};
function createBaseRequestListSnapshots(): RequestListSnapshots {
  return {};
}
export const RequestListSnapshots = {
  typeUrl: "/tendermint.abci.RequestListSnapshots",
  encode(_: RequestListSnapshots, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestListSnapshots {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestListSnapshots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): RequestListSnapshots {
    const obj = createBaseRequestListSnapshots();
    return obj;
  },
  toJSON(_: RequestListSnapshots): JsonSafe<RequestListSnapshots> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RequestListSnapshots>, I>>(_: I): RequestListSnapshots {
    const message = createBaseRequestListSnapshots();
    return message;
  },
  fromAmino(_: RequestListSnapshotsAmino): RequestListSnapshots {
    const message = createBaseRequestListSnapshots();
    return message;
  },
  toAmino(_: RequestListSnapshots): RequestListSnapshotsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RequestListSnapshotsAminoMsg): RequestListSnapshots {
    return RequestListSnapshots.fromAmino(object.value);
  },
};
function createBaseRequestOfferSnapshot(): RequestOfferSnapshot {
  return {
    snapshot: undefined,
    appHash: new Uint8Array(),
  };
}
export const RequestOfferSnapshot = {
  typeUrl: "/tendermint.abci.RequestOfferSnapshot",
  encode(message: RequestOfferSnapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.snapshot !== undefined) {
      Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(18).bytes(message.appHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestOfferSnapshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestOfferSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshot = Snapshot.decode(reader, reader.uint32());
          break;
        case 2:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestOfferSnapshot {
    const obj = createBaseRequestOfferSnapshot();
    if (isSet(object.snapshot)) obj.snapshot = Snapshot.fromJSON(object.snapshot);
    if (isSet(object.appHash)) obj.appHash = bytesFromBase64(object.appHash);
    return obj;
  },
  toJSON(message: RequestOfferSnapshot): JsonSafe<RequestOfferSnapshot> {
    const obj: any = {};
    message.snapshot !== undefined &&
      (obj.snapshot = message.snapshot ? Snapshot.toJSON(message.snapshot) : undefined);
    message.appHash !== undefined &&
      (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RequestOfferSnapshot>, I>>(object: I): RequestOfferSnapshot {
    const message = createBaseRequestOfferSnapshot();
    if (object.snapshot !== undefined && object.snapshot !== null) {
      message.snapshot = Snapshot.fromPartial(object.snapshot);
    }
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RequestOfferSnapshotAmino): RequestOfferSnapshot {
    const message = createBaseRequestOfferSnapshot();
    if (object.snapshot !== undefined && object.snapshot !== null) {
      message.snapshot = Snapshot.fromAmino(object.snapshot);
    }
    if (object.app_hash !== undefined && object.app_hash !== null) {
      message.appHash = bytesFromBase64(object.app_hash);
    }
    return message;
  },
  toAmino(message: RequestOfferSnapshot): RequestOfferSnapshotAmino {
    const obj: any = {};
    obj.snapshot = message.snapshot ? Snapshot.toAmino(message.snapshot) : undefined;
    obj.app_hash = message.appHash ? base64FromBytes(message.appHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestOfferSnapshotAminoMsg): RequestOfferSnapshot {
    return RequestOfferSnapshot.fromAmino(object.value);
  },
};
function createBaseRequestLoadSnapshotChunk(): RequestLoadSnapshotChunk {
  return {
    height: BigInt(0),
    format: 0,
    chunk: 0,
  };
}
export const RequestLoadSnapshotChunk = {
  typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
  encode(message: RequestLoadSnapshotChunk, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunk !== 0) {
      writer.uint32(24).uint32(message.chunk);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestLoadSnapshotChunk {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestLoadSnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunk = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestLoadSnapshotChunk {
    const obj = createBaseRequestLoadSnapshotChunk();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.format)) obj.format = Number(object.format);
    if (isSet(object.chunk)) obj.chunk = Number(object.chunk);
    return obj;
  },
  toJSON(message: RequestLoadSnapshotChunk): JsonSafe<RequestLoadSnapshotChunk> {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.format !== undefined && (obj.format = Math.round(message.format));
    message.chunk !== undefined && (obj.chunk = Math.round(message.chunk));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RequestLoadSnapshotChunk>, I>>(
    object: I,
  ): RequestLoadSnapshotChunk {
    const message = createBaseRequestLoadSnapshotChunk();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.format = object.format ?? 0;
    message.chunk = object.chunk ?? 0;
    return message;
  },
  fromAmino(object: RequestLoadSnapshotChunkAmino): RequestLoadSnapshotChunk {
    const message = createBaseRequestLoadSnapshotChunk();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    }
    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = object.chunk;
    }
    return message;
  },
  toAmino(message: RequestLoadSnapshotChunk): RequestLoadSnapshotChunkAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.format = message.format === 0 ? undefined : message.format;
    obj.chunk = message.chunk === 0 ? undefined : message.chunk;
    return obj;
  },
  fromAminoMsg(object: RequestLoadSnapshotChunkAminoMsg): RequestLoadSnapshotChunk {
    return RequestLoadSnapshotChunk.fromAmino(object.value);
  },
};
function createBaseRequestApplySnapshotChunk(): RequestApplySnapshotChunk {
  return {
    index: 0,
    chunk: new Uint8Array(),
    sender: "",
  };
}
export const RequestApplySnapshotChunk = {
  typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
  encode(message: RequestApplySnapshotChunk, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.chunk.length !== 0) {
      writer.uint32(18).bytes(message.chunk);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestApplySnapshotChunk {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestApplySnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.chunk = reader.bytes();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestApplySnapshotChunk {
    const obj = createBaseRequestApplySnapshotChunk();
    if (isSet(object.index)) obj.index = Number(object.index);
    if (isSet(object.chunk)) obj.chunk = bytesFromBase64(object.chunk);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(message: RequestApplySnapshotChunk): JsonSafe<RequestApplySnapshotChunk> {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.chunk !== undefined &&
      (obj.chunk = base64FromBytes(message.chunk !== undefined ? message.chunk : new Uint8Array()));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RequestApplySnapshotChunk>, I>>(
    object: I,
  ): RequestApplySnapshotChunk {
    const message = createBaseRequestApplySnapshotChunk();
    message.index = object.index ?? 0;
    message.chunk = object.chunk ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: RequestApplySnapshotChunkAmino): RequestApplySnapshotChunk {
    const message = createBaseRequestApplySnapshotChunk();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = bytesFromBase64(object.chunk);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: RequestApplySnapshotChunk): RequestApplySnapshotChunkAmino {
    const obj: any = {};
    obj.index = message.index === 0 ? undefined : message.index;
    obj.chunk = message.chunk ? base64FromBytes(message.chunk) : undefined;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: RequestApplySnapshotChunkAminoMsg): RequestApplySnapshotChunk {
    return RequestApplySnapshotChunk.fromAmino(object.value);
  },
};
function createBaseRequestPrepareProposal(): RequestPrepareProposal {
  return {
    maxTxBytes: BigInt(0),
    txs: [],
    localLastCommit: ExtendedCommitInfo.fromPartial({}),
    misbehavior: [],
    height: BigInt(0),
    time: Timestamp.fromPartial({}),
    nextValidatorsHash: new Uint8Array(),
    proposerAddress: new Uint8Array(),
  };
}
export const RequestPrepareProposal = {
  typeUrl: "/tendermint.abci.RequestPrepareProposal",
  encode(message: RequestPrepareProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxTxBytes !== BigInt(0)) {
      writer.uint32(8).int64(message.maxTxBytes);
    }
    for (const v of message.txs) {
      writer.uint32(18).bytes(v!);
    }
    if (message.localLastCommit !== undefined) {
      ExtendedCommitInfo.encode(message.localLastCommit, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(40).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(58).bytes(message.nextValidatorsHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestPrepareProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestPrepareProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxTxBytes = reader.int64();
          break;
        case 2:
          message.txs.push(reader.bytes());
          break;
        case 3:
          message.localLastCommit = ExtendedCommitInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 5:
          message.height = reader.int64();
          break;
        case 6:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestPrepareProposal {
    const obj = createBaseRequestPrepareProposal();
    if (isSet(object.maxTxBytes)) obj.maxTxBytes = BigInt(object.maxTxBytes.toString());
    if (Array.isArray(object?.txs)) obj.txs = object.txs.map((e: any) => bytesFromBase64(e));
    if (isSet(object.localLastCommit))
      obj.localLastCommit = ExtendedCommitInfo.fromJSON(object.localLastCommit);
    if (Array.isArray(object?.misbehavior))
      obj.misbehavior = object.misbehavior.map((e: any) => Misbehavior.fromJSON(e));
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.time)) obj.time = fromJsonTimestamp(object.time);
    if (isSet(object.nextValidatorsHash)) obj.nextValidatorsHash = bytesFromBase64(object.nextValidatorsHash);
    if (isSet(object.proposerAddress)) obj.proposerAddress = bytesFromBase64(object.proposerAddress);
    return obj;
  },
  toJSON(message: RequestPrepareProposal): JsonSafe<RequestPrepareProposal> {
    const obj: any = {};
    message.maxTxBytes !== undefined && (obj.maxTxBytes = (message.maxTxBytes || BigInt(0)).toString());
    if (message.txs) {
      obj.txs = message.txs.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.txs = [];
    }
    message.localLastCommit !== undefined &&
      (obj.localLastCommit = message.localLastCommit
        ? ExtendedCommitInfo.toJSON(message.localLastCommit)
        : undefined);
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map((e) => (e ? Misbehavior.toJSON(e) : undefined));
    } else {
      obj.misbehavior = [];
    }
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.nextValidatorsHash !== undefined &&
      (obj.nextValidatorsHash = base64FromBytes(
        message.nextValidatorsHash !== undefined ? message.nextValidatorsHash : new Uint8Array(),
      ));
    message.proposerAddress !== undefined &&
      (obj.proposerAddress = base64FromBytes(
        message.proposerAddress !== undefined ? message.proposerAddress : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RequestPrepareProposal>, I>>(object: I): RequestPrepareProposal {
    const message = createBaseRequestPrepareProposal();
    if (object.maxTxBytes !== undefined && object.maxTxBytes !== null) {
      message.maxTxBytes = BigInt(object.maxTxBytes.toString());
    }
    message.txs = object.txs?.map((e) => e) || [];
    if (object.localLastCommit !== undefined && object.localLastCommit !== null) {
      message.localLastCommit = ExtendedCommitInfo.fromPartial(object.localLastCommit);
    }
    message.misbehavior = object.misbehavior?.map((e) => Misbehavior.fromPartial(e)) || [];
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromPartial(object.time);
    }
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RequestPrepareProposalAmino): RequestPrepareProposal {
    const message = createBaseRequestPrepareProposal();
    if (object.max_tx_bytes !== undefined && object.max_tx_bytes !== null) {
      message.maxTxBytes = BigInt(object.max_tx_bytes);
    }
    message.txs = object.txs?.map((e) => bytesFromBase64(e)) || [];
    if (object.local_last_commit !== undefined && object.local_last_commit !== null) {
      message.localLastCommit = ExtendedCommitInfo.fromAmino(object.local_last_commit);
    }
    message.misbehavior = object.misbehavior?.map((e) => Misbehavior.fromAmino(e)) || [];
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
      message.nextValidatorsHash = bytesFromBase64(object.next_validators_hash);
    }
    if (object.proposer_address !== undefined && object.proposer_address !== null) {
      message.proposerAddress = bytesFromBase64(object.proposer_address);
    }
    return message;
  },
  toAmino(message: RequestPrepareProposal): RequestPrepareProposalAmino {
    const obj: any = {};
    obj.max_tx_bytes = message.maxTxBytes !== BigInt(0) ? message.maxTxBytes?.toString() : undefined;
    if (message.txs) {
      obj.txs = message.txs.map((e) => base64FromBytes(e));
    } else {
      obj.txs = message.txs;
    }
    obj.local_last_commit = message.localLastCommit
      ? ExtendedCommitInfo.toAmino(message.localLastCommit)
      : undefined;
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map((e) => (e ? Misbehavior.toAmino(e) : undefined));
    } else {
      obj.misbehavior = message.misbehavior;
    }
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(message.time) : undefined;
    obj.next_validators_hash = message.nextValidatorsHash
      ? base64FromBytes(message.nextValidatorsHash)
      : undefined;
    obj.proposer_address = message.proposerAddress ? base64FromBytes(message.proposerAddress) : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestPrepareProposalAminoMsg): RequestPrepareProposal {
    return RequestPrepareProposal.fromAmino(object.value);
  },
};
function createBaseRequestProcessProposal(): RequestProcessProposal {
  return {
    txs: [],
    proposedLastCommit: CommitInfo.fromPartial({}),
    misbehavior: [],
    hash: new Uint8Array(),
    height: BigInt(0),
    time: Timestamp.fromPartial({}),
    nextValidatorsHash: new Uint8Array(),
    proposerAddress: new Uint8Array(),
  };
}
export const RequestProcessProposal = {
  typeUrl: "/tendermint.abci.RequestProcessProposal",
  encode(message: RequestProcessProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    if (message.proposedLastCommit !== undefined) {
      CommitInfo.encode(message.proposedLastCommit, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(40).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(58).bytes(message.nextValidatorsHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestProcessProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestProcessProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        case 2:
          message.proposedLastCommit = CommitInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.height = reader.int64();
          break;
        case 6:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestProcessProposal {
    const obj = createBaseRequestProcessProposal();
    if (Array.isArray(object?.txs)) obj.txs = object.txs.map((e: any) => bytesFromBase64(e));
    if (isSet(object.proposedLastCommit))
      obj.proposedLastCommit = CommitInfo.fromJSON(object.proposedLastCommit);
    if (Array.isArray(object?.misbehavior))
      obj.misbehavior = object.misbehavior.map((e: any) => Misbehavior.fromJSON(e));
    if (isSet(object.hash)) obj.hash = bytesFromBase64(object.hash);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.time)) obj.time = fromJsonTimestamp(object.time);
    if (isSet(object.nextValidatorsHash)) obj.nextValidatorsHash = bytesFromBase64(object.nextValidatorsHash);
    if (isSet(object.proposerAddress)) obj.proposerAddress = bytesFromBase64(object.proposerAddress);
    return obj;
  },
  toJSON(message: RequestProcessProposal): JsonSafe<RequestProcessProposal> {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.txs = [];
    }
    message.proposedLastCommit !== undefined &&
      (obj.proposedLastCommit = message.proposedLastCommit
        ? CommitInfo.toJSON(message.proposedLastCommit)
        : undefined);
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map((e) => (e ? Misbehavior.toJSON(e) : undefined));
    } else {
      obj.misbehavior = [];
    }
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.nextValidatorsHash !== undefined &&
      (obj.nextValidatorsHash = base64FromBytes(
        message.nextValidatorsHash !== undefined ? message.nextValidatorsHash : new Uint8Array(),
      ));
    message.proposerAddress !== undefined &&
      (obj.proposerAddress = base64FromBytes(
        message.proposerAddress !== undefined ? message.proposerAddress : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RequestProcessProposal>, I>>(object: I): RequestProcessProposal {
    const message = createBaseRequestProcessProposal();
    message.txs = object.txs?.map((e) => e) || [];
    if (object.proposedLastCommit !== undefined && object.proposedLastCommit !== null) {
      message.proposedLastCommit = CommitInfo.fromPartial(object.proposedLastCommit);
    }
    message.misbehavior = object.misbehavior?.map((e) => Misbehavior.fromPartial(e)) || [];
    message.hash = object.hash ?? new Uint8Array();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromPartial(object.time);
    }
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RequestProcessProposalAmino): RequestProcessProposal {
    const message = createBaseRequestProcessProposal();
    message.txs = object.txs?.map((e) => bytesFromBase64(e)) || [];
    if (object.proposed_last_commit !== undefined && object.proposed_last_commit !== null) {
      message.proposedLastCommit = CommitInfo.fromAmino(object.proposed_last_commit);
    }
    message.misbehavior = object.misbehavior?.map((e) => Misbehavior.fromAmino(e)) || [];
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
      message.nextValidatorsHash = bytesFromBase64(object.next_validators_hash);
    }
    if (object.proposer_address !== undefined && object.proposer_address !== null) {
      message.proposerAddress = bytesFromBase64(object.proposer_address);
    }
    return message;
  },
  toAmino(message: RequestProcessProposal): RequestProcessProposalAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => base64FromBytes(e));
    } else {
      obj.txs = message.txs;
    }
    obj.proposed_last_commit = message.proposedLastCommit
      ? CommitInfo.toAmino(message.proposedLastCommit)
      : undefined;
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map((e) => (e ? Misbehavior.toAmino(e) : undefined));
    } else {
      obj.misbehavior = message.misbehavior;
    }
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(message.time) : undefined;
    obj.next_validators_hash = message.nextValidatorsHash
      ? base64FromBytes(message.nextValidatorsHash)
      : undefined;
    obj.proposer_address = message.proposerAddress ? base64FromBytes(message.proposerAddress) : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestProcessProposalAminoMsg): RequestProcessProposal {
    return RequestProcessProposal.fromAmino(object.value);
  },
};
function createBaseRequestExtendVote(): RequestExtendVote {
  return {
    hash: new Uint8Array(),
    height: BigInt(0),
    time: Timestamp.fromPartial({}),
    txs: [],
    proposedLastCommit: CommitInfo.fromPartial({}),
    misbehavior: [],
    nextValidatorsHash: new Uint8Array(),
    proposerAddress: new Uint8Array(),
  };
}
export const RequestExtendVote = {
  typeUrl: "/tendermint.abci.RequestExtendVote",
  encode(message: RequestExtendVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.txs) {
      writer.uint32(34).bytes(v!);
    }
    if (message.proposedLastCommit !== undefined) {
      CommitInfo.encode(message.proposedLastCommit, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(58).bytes(message.nextValidatorsHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestExtendVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestExtendVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.txs.push(reader.bytes());
          break;
        case 5:
          message.proposedLastCommit = CommitInfo.decode(reader, reader.uint32());
          break;
        case 6:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 7:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestExtendVote {
    const obj = createBaseRequestExtendVote();
    if (isSet(object.hash)) obj.hash = bytesFromBase64(object.hash);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.time)) obj.time = fromJsonTimestamp(object.time);
    if (Array.isArray(object?.txs)) obj.txs = object.txs.map((e: any) => bytesFromBase64(e));
    if (isSet(object.proposedLastCommit))
      obj.proposedLastCommit = CommitInfo.fromJSON(object.proposedLastCommit);
    if (Array.isArray(object?.misbehavior))
      obj.misbehavior = object.misbehavior.map((e: any) => Misbehavior.fromJSON(e));
    if (isSet(object.nextValidatorsHash)) obj.nextValidatorsHash = bytesFromBase64(object.nextValidatorsHash);
    if (isSet(object.proposerAddress)) obj.proposerAddress = bytesFromBase64(object.proposerAddress);
    return obj;
  },
  toJSON(message: RequestExtendVote): JsonSafe<RequestExtendVote> {
    const obj: any = {};
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    if (message.txs) {
      obj.txs = message.txs.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.txs = [];
    }
    message.proposedLastCommit !== undefined &&
      (obj.proposedLastCommit = message.proposedLastCommit
        ? CommitInfo.toJSON(message.proposedLastCommit)
        : undefined);
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map((e) => (e ? Misbehavior.toJSON(e) : undefined));
    } else {
      obj.misbehavior = [];
    }
    message.nextValidatorsHash !== undefined &&
      (obj.nextValidatorsHash = base64FromBytes(
        message.nextValidatorsHash !== undefined ? message.nextValidatorsHash : new Uint8Array(),
      ));
    message.proposerAddress !== undefined &&
      (obj.proposerAddress = base64FromBytes(
        message.proposerAddress !== undefined ? message.proposerAddress : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RequestExtendVote>, I>>(object: I): RequestExtendVote {
    const message = createBaseRequestExtendVote();
    message.hash = object.hash ?? new Uint8Array();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromPartial(object.time);
    }
    message.txs = object.txs?.map((e) => e) || [];
    if (object.proposedLastCommit !== undefined && object.proposedLastCommit !== null) {
      message.proposedLastCommit = CommitInfo.fromPartial(object.proposedLastCommit);
    }
    message.misbehavior = object.misbehavior?.map((e) => Misbehavior.fromPartial(e)) || [];
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RequestExtendVoteAmino): RequestExtendVote {
    const message = createBaseRequestExtendVote();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    message.txs = object.txs?.map((e) => bytesFromBase64(e)) || [];
    if (object.proposed_last_commit !== undefined && object.proposed_last_commit !== null) {
      message.proposedLastCommit = CommitInfo.fromAmino(object.proposed_last_commit);
    }
    message.misbehavior = object.misbehavior?.map((e) => Misbehavior.fromAmino(e)) || [];
    if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
      message.nextValidatorsHash = bytesFromBase64(object.next_validators_hash);
    }
    if (object.proposer_address !== undefined && object.proposer_address !== null) {
      message.proposerAddress = bytesFromBase64(object.proposer_address);
    }
    return message;
  },
  toAmino(message: RequestExtendVote): RequestExtendVoteAmino {
    const obj: any = {};
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(message.time) : undefined;
    if (message.txs) {
      obj.txs = message.txs.map((e) => base64FromBytes(e));
    } else {
      obj.txs = message.txs;
    }
    obj.proposed_last_commit = message.proposedLastCommit
      ? CommitInfo.toAmino(message.proposedLastCommit)
      : undefined;
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map((e) => (e ? Misbehavior.toAmino(e) : undefined));
    } else {
      obj.misbehavior = message.misbehavior;
    }
    obj.next_validators_hash = message.nextValidatorsHash
      ? base64FromBytes(message.nextValidatorsHash)
      : undefined;
    obj.proposer_address = message.proposerAddress ? base64FromBytes(message.proposerAddress) : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestExtendVoteAminoMsg): RequestExtendVote {
    return RequestExtendVote.fromAmino(object.value);
  },
};
function createBaseRequestVerifyVoteExtension(): RequestVerifyVoteExtension {
  return {
    hash: new Uint8Array(),
    validatorAddress: new Uint8Array(),
    height: BigInt(0),
    voteExtension: new Uint8Array(),
  };
}
export const RequestVerifyVoteExtension = {
  typeUrl: "/tendermint.abci.RequestVerifyVoteExtension",
  encode(message: RequestVerifyVoteExtension, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.validatorAddress.length !== 0) {
      writer.uint32(18).bytes(message.validatorAddress);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.voteExtension.length !== 0) {
      writer.uint32(34).bytes(message.voteExtension);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestVerifyVoteExtension {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestVerifyVoteExtension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.validatorAddress = reader.bytes();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.voteExtension = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestVerifyVoteExtension {
    const obj = createBaseRequestVerifyVoteExtension();
    if (isSet(object.hash)) obj.hash = bytesFromBase64(object.hash);
    if (isSet(object.validatorAddress)) obj.validatorAddress = bytesFromBase64(object.validatorAddress);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.voteExtension)) obj.voteExtension = bytesFromBase64(object.voteExtension);
    return obj;
  },
  toJSON(message: RequestVerifyVoteExtension): JsonSafe<RequestVerifyVoteExtension> {
    const obj: any = {};
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = base64FromBytes(
        message.validatorAddress !== undefined ? message.validatorAddress : new Uint8Array(),
      ));
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.voteExtension !== undefined &&
      (obj.voteExtension = base64FromBytes(
        message.voteExtension !== undefined ? message.voteExtension : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RequestVerifyVoteExtension>, I>>(
    object: I,
  ): RequestVerifyVoteExtension {
    const message = createBaseRequestVerifyVoteExtension();
    message.hash = object.hash ?? new Uint8Array();
    message.validatorAddress = object.validatorAddress ?? new Uint8Array();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.voteExtension = object.voteExtension ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RequestVerifyVoteExtensionAmino): RequestVerifyVoteExtension {
    const message = createBaseRequestVerifyVoteExtension();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = bytesFromBase64(object.validator_address);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.vote_extension !== undefined && object.vote_extension !== null) {
      message.voteExtension = bytesFromBase64(object.vote_extension);
    }
    return message;
  },
  toAmino(message: RequestVerifyVoteExtension): RequestVerifyVoteExtensionAmino {
    const obj: any = {};
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.validator_address = message.validatorAddress ? base64FromBytes(message.validatorAddress) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.vote_extension = message.voteExtension ? base64FromBytes(message.voteExtension) : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestVerifyVoteExtensionAminoMsg): RequestVerifyVoteExtension {
    return RequestVerifyVoteExtension.fromAmino(object.value);
  },
};
function createBaseRequestFinalizeBlock(): RequestFinalizeBlock {
  return {
    txs: [],
    decidedLastCommit: CommitInfo.fromPartial({}),
    misbehavior: [],
    hash: new Uint8Array(),
    height: BigInt(0),
    time: Timestamp.fromPartial({}),
    nextValidatorsHash: new Uint8Array(),
    proposerAddress: new Uint8Array(),
  };
}
export const RequestFinalizeBlock = {
  typeUrl: "/tendermint.abci.RequestFinalizeBlock",
  encode(message: RequestFinalizeBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    if (message.decidedLastCommit !== undefined) {
      CommitInfo.encode(message.decidedLastCommit, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(40).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(58).bytes(message.nextValidatorsHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestFinalizeBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestFinalizeBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        case 2:
          message.decidedLastCommit = CommitInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.height = reader.int64();
          break;
        case 6:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestFinalizeBlock {
    const obj = createBaseRequestFinalizeBlock();
    if (Array.isArray(object?.txs)) obj.txs = object.txs.map((e: any) => bytesFromBase64(e));
    if (isSet(object.decidedLastCommit))
      obj.decidedLastCommit = CommitInfo.fromJSON(object.decidedLastCommit);
    if (Array.isArray(object?.misbehavior))
      obj.misbehavior = object.misbehavior.map((e: any) => Misbehavior.fromJSON(e));
    if (isSet(object.hash)) obj.hash = bytesFromBase64(object.hash);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.time)) obj.time = fromJsonTimestamp(object.time);
    if (isSet(object.nextValidatorsHash)) obj.nextValidatorsHash = bytesFromBase64(object.nextValidatorsHash);
    if (isSet(object.proposerAddress)) obj.proposerAddress = bytesFromBase64(object.proposerAddress);
    return obj;
  },
  toJSON(message: RequestFinalizeBlock): JsonSafe<RequestFinalizeBlock> {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.txs = [];
    }
    message.decidedLastCommit !== undefined &&
      (obj.decidedLastCommit = message.decidedLastCommit
        ? CommitInfo.toJSON(message.decidedLastCommit)
        : undefined);
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map((e) => (e ? Misbehavior.toJSON(e) : undefined));
    } else {
      obj.misbehavior = [];
    }
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.nextValidatorsHash !== undefined &&
      (obj.nextValidatorsHash = base64FromBytes(
        message.nextValidatorsHash !== undefined ? message.nextValidatorsHash : new Uint8Array(),
      ));
    message.proposerAddress !== undefined &&
      (obj.proposerAddress = base64FromBytes(
        message.proposerAddress !== undefined ? message.proposerAddress : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RequestFinalizeBlock>, I>>(object: I): RequestFinalizeBlock {
    const message = createBaseRequestFinalizeBlock();
    message.txs = object.txs?.map((e) => e) || [];
    if (object.decidedLastCommit !== undefined && object.decidedLastCommit !== null) {
      message.decidedLastCommit = CommitInfo.fromPartial(object.decidedLastCommit);
    }
    message.misbehavior = object.misbehavior?.map((e) => Misbehavior.fromPartial(e)) || [];
    message.hash = object.hash ?? new Uint8Array();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromPartial(object.time);
    }
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RequestFinalizeBlockAmino): RequestFinalizeBlock {
    const message = createBaseRequestFinalizeBlock();
    message.txs = object.txs?.map((e) => bytesFromBase64(e)) || [];
    if (object.decided_last_commit !== undefined && object.decided_last_commit !== null) {
      message.decidedLastCommit = CommitInfo.fromAmino(object.decided_last_commit);
    }
    message.misbehavior = object.misbehavior?.map((e) => Misbehavior.fromAmino(e)) || [];
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
      message.nextValidatorsHash = bytesFromBase64(object.next_validators_hash);
    }
    if (object.proposer_address !== undefined && object.proposer_address !== null) {
      message.proposerAddress = bytesFromBase64(object.proposer_address);
    }
    return message;
  },
  toAmino(message: RequestFinalizeBlock): RequestFinalizeBlockAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => base64FromBytes(e));
    } else {
      obj.txs = message.txs;
    }
    obj.decided_last_commit = message.decidedLastCommit
      ? CommitInfo.toAmino(message.decidedLastCommit)
      : undefined;
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map((e) => (e ? Misbehavior.toAmino(e) : undefined));
    } else {
      obj.misbehavior = message.misbehavior;
    }
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(message.time) : undefined;
    obj.next_validators_hash = message.nextValidatorsHash
      ? base64FromBytes(message.nextValidatorsHash)
      : undefined;
    obj.proposer_address = message.proposerAddress ? base64FromBytes(message.proposerAddress) : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestFinalizeBlockAminoMsg): RequestFinalizeBlock {
    return RequestFinalizeBlock.fromAmino(object.value);
  },
};
function createBaseResponse(): Response {
  return {
    exception: undefined,
    echo: undefined,
    flush: undefined,
    info: undefined,
    initChain: undefined,
    query: undefined,
    checkTx: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined,
    prepareProposal: undefined,
    processProposal: undefined,
    extendVote: undefined,
    verifyVoteExtension: undefined,
    finalizeBlock: undefined,
  };
}
export const Response = {
  typeUrl: "/tendermint.abci.Response",
  encode(message: Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exception !== undefined) {
      ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
    }
    if (message.echo !== undefined) {
      ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    if (message.initChain !== undefined) {
      ResponseInitChain.encode(message.initChain, writer.uint32(50).fork()).ldelim();
    }
    if (message.query !== undefined) {
      ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
    }
    if (message.checkTx !== undefined) {
      ResponseCheckTx.encode(message.checkTx, writer.uint32(74).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      ResponseListSnapshots.encode(message.listSnapshots, writer.uint32(106).fork()).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      ResponseOfferSnapshot.encode(message.offerSnapshot, writer.uint32(114).fork()).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      ResponseLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(122).fork()).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      ResponseApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(130).fork()).ldelim();
    }
    if (message.prepareProposal !== undefined) {
      ResponsePrepareProposal.encode(message.prepareProposal, writer.uint32(138).fork()).ldelim();
    }
    if (message.processProposal !== undefined) {
      ResponseProcessProposal.encode(message.processProposal, writer.uint32(146).fork()).ldelim();
    }
    if (message.extendVote !== undefined) {
      ResponseExtendVote.encode(message.extendVote, writer.uint32(154).fork()).ldelim();
    }
    if (message.verifyVoteExtension !== undefined) {
      ResponseVerifyVoteExtension.encode(message.verifyVoteExtension, writer.uint32(162).fork()).ldelim();
    }
    if (message.finalizeBlock !== undefined) {
      ResponseFinalizeBlock.encode(message.finalizeBlock, writer.uint32(170).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Response {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exception = ResponseException.decode(reader, reader.uint32());
          break;
        case 2:
          message.echo = ResponseEcho.decode(reader, reader.uint32());
          break;
        case 3:
          message.flush = ResponseFlush.decode(reader, reader.uint32());
          break;
        case 4:
          message.info = ResponseInfo.decode(reader, reader.uint32());
          break;
        case 6:
          message.initChain = ResponseInitChain.decode(reader, reader.uint32());
          break;
        case 7:
          message.query = ResponseQuery.decode(reader, reader.uint32());
          break;
        case 9:
          message.checkTx = ResponseCheckTx.decode(reader, reader.uint32());
          break;
        case 12:
          message.commit = ResponseCommit.decode(reader, reader.uint32());
          break;
        case 13:
          message.listSnapshots = ResponseListSnapshots.decode(reader, reader.uint32());
          break;
        case 14:
          message.offerSnapshot = ResponseOfferSnapshot.decode(reader, reader.uint32());
          break;
        case 15:
          message.loadSnapshotChunk = ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
          break;
        case 16:
          message.applySnapshotChunk = ResponseApplySnapshotChunk.decode(reader, reader.uint32());
          break;
        case 17:
          message.prepareProposal = ResponsePrepareProposal.decode(reader, reader.uint32());
          break;
        case 18:
          message.processProposal = ResponseProcessProposal.decode(reader, reader.uint32());
          break;
        case 19:
          message.extendVote = ResponseExtendVote.decode(reader, reader.uint32());
          break;
        case 20:
          message.verifyVoteExtension = ResponseVerifyVoteExtension.decode(reader, reader.uint32());
          break;
        case 21:
          message.finalizeBlock = ResponseFinalizeBlock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Response {
    const obj = createBaseResponse();
    if (isSet(object.exception)) obj.exception = ResponseException.fromJSON(object.exception);
    if (isSet(object.echo)) obj.echo = ResponseEcho.fromJSON(object.echo);
    if (isSet(object.flush)) obj.flush = ResponseFlush.fromJSON(object.flush);
    if (isSet(object.info)) obj.info = ResponseInfo.fromJSON(object.info);
    if (isSet(object.initChain)) obj.initChain = ResponseInitChain.fromJSON(object.initChain);
    if (isSet(object.query)) obj.query = ResponseQuery.fromJSON(object.query);
    if (isSet(object.checkTx)) obj.checkTx = ResponseCheckTx.fromJSON(object.checkTx);
    if (isSet(object.commit)) obj.commit = ResponseCommit.fromJSON(object.commit);
    if (isSet(object.listSnapshots)) obj.listSnapshots = ResponseListSnapshots.fromJSON(object.listSnapshots);
    if (isSet(object.offerSnapshot)) obj.offerSnapshot = ResponseOfferSnapshot.fromJSON(object.offerSnapshot);
    if (isSet(object.loadSnapshotChunk))
      obj.loadSnapshotChunk = ResponseLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk);
    if (isSet(object.applySnapshotChunk))
      obj.applySnapshotChunk = ResponseApplySnapshotChunk.fromJSON(object.applySnapshotChunk);
    if (isSet(object.prepareProposal))
      obj.prepareProposal = ResponsePrepareProposal.fromJSON(object.prepareProposal);
    if (isSet(object.processProposal))
      obj.processProposal = ResponseProcessProposal.fromJSON(object.processProposal);
    if (isSet(object.extendVote)) obj.extendVote = ResponseExtendVote.fromJSON(object.extendVote);
    if (isSet(object.verifyVoteExtension))
      obj.verifyVoteExtension = ResponseVerifyVoteExtension.fromJSON(object.verifyVoteExtension);
    if (isSet(object.finalizeBlock)) obj.finalizeBlock = ResponseFinalizeBlock.fromJSON(object.finalizeBlock);
    return obj;
  },
  toJSON(message: Response): JsonSafe<Response> {
    const obj: any = {};
    message.exception !== undefined &&
      (obj.exception = message.exception ? ResponseException.toJSON(message.exception) : undefined);
    message.echo !== undefined && (obj.echo = message.echo ? ResponseEcho.toJSON(message.echo) : undefined);
    message.flush !== undefined &&
      (obj.flush = message.flush ? ResponseFlush.toJSON(message.flush) : undefined);
    message.info !== undefined && (obj.info = message.info ? ResponseInfo.toJSON(message.info) : undefined);
    message.initChain !== undefined &&
      (obj.initChain = message.initChain ? ResponseInitChain.toJSON(message.initChain) : undefined);
    message.query !== undefined &&
      (obj.query = message.query ? ResponseQuery.toJSON(message.query) : undefined);
    message.checkTx !== undefined &&
      (obj.checkTx = message.checkTx ? ResponseCheckTx.toJSON(message.checkTx) : undefined);
    message.commit !== undefined &&
      (obj.commit = message.commit ? ResponseCommit.toJSON(message.commit) : undefined);
    message.listSnapshots !== undefined &&
      (obj.listSnapshots = message.listSnapshots
        ? ResponseListSnapshots.toJSON(message.listSnapshots)
        : undefined);
    message.offerSnapshot !== undefined &&
      (obj.offerSnapshot = message.offerSnapshot
        ? ResponseOfferSnapshot.toJSON(message.offerSnapshot)
        : undefined);
    message.loadSnapshotChunk !== undefined &&
      (obj.loadSnapshotChunk = message.loadSnapshotChunk
        ? ResponseLoadSnapshotChunk.toJSON(message.loadSnapshotChunk)
        : undefined);
    message.applySnapshotChunk !== undefined &&
      (obj.applySnapshotChunk = message.applySnapshotChunk
        ? ResponseApplySnapshotChunk.toJSON(message.applySnapshotChunk)
        : undefined);
    message.prepareProposal !== undefined &&
      (obj.prepareProposal = message.prepareProposal
        ? ResponsePrepareProposal.toJSON(message.prepareProposal)
        : undefined);
    message.processProposal !== undefined &&
      (obj.processProposal = message.processProposal
        ? ResponseProcessProposal.toJSON(message.processProposal)
        : undefined);
    message.extendVote !== undefined &&
      (obj.extendVote = message.extendVote ? ResponseExtendVote.toJSON(message.extendVote) : undefined);
    message.verifyVoteExtension !== undefined &&
      (obj.verifyVoteExtension = message.verifyVoteExtension
        ? ResponseVerifyVoteExtension.toJSON(message.verifyVoteExtension)
        : undefined);
    message.finalizeBlock !== undefined &&
      (obj.finalizeBlock = message.finalizeBlock
        ? ResponseFinalizeBlock.toJSON(message.finalizeBlock)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    if (object.exception !== undefined && object.exception !== null) {
      message.exception = ResponseException.fromPartial(object.exception);
    }
    if (object.echo !== undefined && object.echo !== null) {
      message.echo = ResponseEcho.fromPartial(object.echo);
    }
    if (object.flush !== undefined && object.flush !== null) {
      message.flush = ResponseFlush.fromPartial(object.flush);
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = ResponseInfo.fromPartial(object.info);
    }
    if (object.initChain !== undefined && object.initChain !== null) {
      message.initChain = ResponseInitChain.fromPartial(object.initChain);
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = ResponseQuery.fromPartial(object.query);
    }
    if (object.checkTx !== undefined && object.checkTx !== null) {
      message.checkTx = ResponseCheckTx.fromPartial(object.checkTx);
    }
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = ResponseCommit.fromPartial(object.commit);
    }
    if (object.listSnapshots !== undefined && object.listSnapshots !== null) {
      message.listSnapshots = ResponseListSnapshots.fromPartial(object.listSnapshots);
    }
    if (object.offerSnapshot !== undefined && object.offerSnapshot !== null) {
      message.offerSnapshot = ResponseOfferSnapshot.fromPartial(object.offerSnapshot);
    }
    if (object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null) {
      message.loadSnapshotChunk = ResponseLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk);
    }
    if (object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null) {
      message.applySnapshotChunk = ResponseApplySnapshotChunk.fromPartial(object.applySnapshotChunk);
    }
    if (object.prepareProposal !== undefined && object.prepareProposal !== null) {
      message.prepareProposal = ResponsePrepareProposal.fromPartial(object.prepareProposal);
    }
    if (object.processProposal !== undefined && object.processProposal !== null) {
      message.processProposal = ResponseProcessProposal.fromPartial(object.processProposal);
    }
    if (object.extendVote !== undefined && object.extendVote !== null) {
      message.extendVote = ResponseExtendVote.fromPartial(object.extendVote);
    }
    if (object.verifyVoteExtension !== undefined && object.verifyVoteExtension !== null) {
      message.verifyVoteExtension = ResponseVerifyVoteExtension.fromPartial(object.verifyVoteExtension);
    }
    if (object.finalizeBlock !== undefined && object.finalizeBlock !== null) {
      message.finalizeBlock = ResponseFinalizeBlock.fromPartial(object.finalizeBlock);
    }
    return message;
  },
  fromAmino(object: ResponseAmino): Response {
    const message = createBaseResponse();
    if (object.exception !== undefined && object.exception !== null) {
      message.exception = ResponseException.fromAmino(object.exception);
    }
    if (object.echo !== undefined && object.echo !== null) {
      message.echo = ResponseEcho.fromAmino(object.echo);
    }
    if (object.flush !== undefined && object.flush !== null) {
      message.flush = ResponseFlush.fromAmino(object.flush);
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = ResponseInfo.fromAmino(object.info);
    }
    if (object.init_chain !== undefined && object.init_chain !== null) {
      message.initChain = ResponseInitChain.fromAmino(object.init_chain);
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = ResponseQuery.fromAmino(object.query);
    }
    if (object.check_tx !== undefined && object.check_tx !== null) {
      message.checkTx = ResponseCheckTx.fromAmino(object.check_tx);
    }
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = ResponseCommit.fromAmino(object.commit);
    }
    if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
      message.listSnapshots = ResponseListSnapshots.fromAmino(object.list_snapshots);
    }
    if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
      message.offerSnapshot = ResponseOfferSnapshot.fromAmino(object.offer_snapshot);
    }
    if (object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null) {
      message.loadSnapshotChunk = ResponseLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk);
    }
    if (object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null) {
      message.applySnapshotChunk = ResponseApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk);
    }
    if (object.prepare_proposal !== undefined && object.prepare_proposal !== null) {
      message.prepareProposal = ResponsePrepareProposal.fromAmino(object.prepare_proposal);
    }
    if (object.process_proposal !== undefined && object.process_proposal !== null) {
      message.processProposal = ResponseProcessProposal.fromAmino(object.process_proposal);
    }
    if (object.extend_vote !== undefined && object.extend_vote !== null) {
      message.extendVote = ResponseExtendVote.fromAmino(object.extend_vote);
    }
    if (object.verify_vote_extension !== undefined && object.verify_vote_extension !== null) {
      message.verifyVoteExtension = ResponseVerifyVoteExtension.fromAmino(object.verify_vote_extension);
    }
    if (object.finalize_block !== undefined && object.finalize_block !== null) {
      message.finalizeBlock = ResponseFinalizeBlock.fromAmino(object.finalize_block);
    }
    return message;
  },
  toAmino(message: Response): ResponseAmino {
    const obj: any = {};
    obj.exception = message.exception ? ResponseException.toAmino(message.exception) : undefined;
    obj.echo = message.echo ? ResponseEcho.toAmino(message.echo) : undefined;
    obj.flush = message.flush ? ResponseFlush.toAmino(message.flush) : undefined;
    obj.info = message.info ? ResponseInfo.toAmino(message.info) : undefined;
    obj.init_chain = message.initChain ? ResponseInitChain.toAmino(message.initChain) : undefined;
    obj.query = message.query ? ResponseQuery.toAmino(message.query) : undefined;
    obj.check_tx = message.checkTx ? ResponseCheckTx.toAmino(message.checkTx) : undefined;
    obj.commit = message.commit ? ResponseCommit.toAmino(message.commit) : undefined;
    obj.list_snapshots = message.listSnapshots
      ? ResponseListSnapshots.toAmino(message.listSnapshots)
      : undefined;
    obj.offer_snapshot = message.offerSnapshot
      ? ResponseOfferSnapshot.toAmino(message.offerSnapshot)
      : undefined;
    obj.load_snapshot_chunk = message.loadSnapshotChunk
      ? ResponseLoadSnapshotChunk.toAmino(message.loadSnapshotChunk)
      : undefined;
    obj.apply_snapshot_chunk = message.applySnapshotChunk
      ? ResponseApplySnapshotChunk.toAmino(message.applySnapshotChunk)
      : undefined;
    obj.prepare_proposal = message.prepareProposal
      ? ResponsePrepareProposal.toAmino(message.prepareProposal)
      : undefined;
    obj.process_proposal = message.processProposal
      ? ResponseProcessProposal.toAmino(message.processProposal)
      : undefined;
    obj.extend_vote = message.extendVote ? ResponseExtendVote.toAmino(message.extendVote) : undefined;
    obj.verify_vote_extension = message.verifyVoteExtension
      ? ResponseVerifyVoteExtension.toAmino(message.verifyVoteExtension)
      : undefined;
    obj.finalize_block = message.finalizeBlock
      ? ResponseFinalizeBlock.toAmino(message.finalizeBlock)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseAminoMsg): Response {
    return Response.fromAmino(object.value);
  },
};
function createBaseResponseException(): ResponseException {
  return {
    error: "",
  };
}
export const ResponseException = {
  typeUrl: "/tendermint.abci.ResponseException",
  encode(message: ResponseException, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseException {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseException();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseException {
    const obj = createBaseResponseException();
    if (isSet(object.error)) obj.error = String(object.error);
    return obj;
  },
  toJSON(message: ResponseException): JsonSafe<ResponseException> {
    const obj: any = {};
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResponseException>, I>>(object: I): ResponseException {
    const message = createBaseResponseException();
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: ResponseExceptionAmino): ResponseException {
    const message = createBaseResponseException();
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: ResponseException): ResponseExceptionAmino {
    const obj: any = {};
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: ResponseExceptionAminoMsg): ResponseException {
    return ResponseException.fromAmino(object.value);
  },
};
function createBaseResponseEcho(): ResponseEcho {
  return {
    message: "",
  };
}
export const ResponseEcho = {
  typeUrl: "/tendermint.abci.ResponseEcho",
  encode(message: ResponseEcho, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseEcho {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseEcho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseEcho {
    const obj = createBaseResponseEcho();
    if (isSet(object.message)) obj.message = String(object.message);
    return obj;
  },
  toJSON(message: ResponseEcho): JsonSafe<ResponseEcho> {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResponseEcho>, I>>(object: I): ResponseEcho {
    const message = createBaseResponseEcho();
    message.message = object.message ?? "";
    return message;
  },
  fromAmino(object: ResponseEchoAmino): ResponseEcho {
    const message = createBaseResponseEcho();
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toAmino(message: ResponseEcho): ResponseEchoAmino {
    const obj: any = {};
    obj.message = message.message === "" ? undefined : message.message;
    return obj;
  },
  fromAminoMsg(object: ResponseEchoAminoMsg): ResponseEcho {
    return ResponseEcho.fromAmino(object.value);
  },
};
function createBaseResponseFlush(): ResponseFlush {
  return {};
}
export const ResponseFlush = {
  typeUrl: "/tendermint.abci.ResponseFlush",
  encode(_: ResponseFlush, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseFlush {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseFlush();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): ResponseFlush {
    const obj = createBaseResponseFlush();
    return obj;
  },
  toJSON(_: ResponseFlush): JsonSafe<ResponseFlush> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResponseFlush>, I>>(_: I): ResponseFlush {
    const message = createBaseResponseFlush();
    return message;
  },
  fromAmino(_: ResponseFlushAmino): ResponseFlush {
    const message = createBaseResponseFlush();
    return message;
  },
  toAmino(_: ResponseFlush): ResponseFlushAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ResponseFlushAminoMsg): ResponseFlush {
    return ResponseFlush.fromAmino(object.value);
  },
};
function createBaseResponseInfo(): ResponseInfo {
  return {
    data: "",
    version: "",
    appVersion: BigInt(0),
    lastBlockHeight: BigInt(0),
    lastBlockAppHash: new Uint8Array(),
  };
}
export const ResponseInfo = {
  typeUrl: "/tendermint.abci.ResponseInfo",
  encode(message: ResponseInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.appVersion !== BigInt(0)) {
      writer.uint32(24).uint64(message.appVersion);
    }
    if (message.lastBlockHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.lastBlockHeight);
    }
    if (message.lastBlockAppHash.length !== 0) {
      writer.uint32(42).bytes(message.lastBlockAppHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.appVersion = reader.uint64();
          break;
        case 4:
          message.lastBlockHeight = reader.int64();
          break;
        case 5:
          message.lastBlockAppHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseInfo {
    const obj = createBaseResponseInfo();
    if (isSet(object.data)) obj.data = String(object.data);
    if (isSet(object.version)) obj.version = String(object.version);
    if (isSet(object.appVersion)) obj.appVersion = BigInt(object.appVersion.toString());
    if (isSet(object.lastBlockHeight)) obj.lastBlockHeight = BigInt(object.lastBlockHeight.toString());
    if (isSet(object.lastBlockAppHash)) obj.lastBlockAppHash = bytesFromBase64(object.lastBlockAppHash);
    return obj;
  },
  toJSON(message: ResponseInfo): JsonSafe<ResponseInfo> {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    message.version !== undefined && (obj.version = message.version);
    message.appVersion !== undefined && (obj.appVersion = (message.appVersion || BigInt(0)).toString());
    message.lastBlockHeight !== undefined &&
      (obj.lastBlockHeight = (message.lastBlockHeight || BigInt(0)).toString());
    message.lastBlockAppHash !== undefined &&
      (obj.lastBlockAppHash = base64FromBytes(
        message.lastBlockAppHash !== undefined ? message.lastBlockAppHash : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResponseInfo>, I>>(object: I): ResponseInfo {
    const message = createBaseResponseInfo();
    message.data = object.data ?? "";
    message.version = object.version ?? "";
    if (object.appVersion !== undefined && object.appVersion !== null) {
      message.appVersion = BigInt(object.appVersion.toString());
    }
    if (object.lastBlockHeight !== undefined && object.lastBlockHeight !== null) {
      message.lastBlockHeight = BigInt(object.lastBlockHeight.toString());
    }
    message.lastBlockAppHash = object.lastBlockAppHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ResponseInfoAmino): ResponseInfo {
    const message = createBaseResponseInfo();
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.app_version !== undefined && object.app_version !== null) {
      message.appVersion = BigInt(object.app_version);
    }
    if (object.last_block_height !== undefined && object.last_block_height !== null) {
      message.lastBlockHeight = BigInt(object.last_block_height);
    }
    if (object.last_block_app_hash !== undefined && object.last_block_app_hash !== null) {
      message.lastBlockAppHash = bytesFromBase64(object.last_block_app_hash);
    }
    return message;
  },
  toAmino(message: ResponseInfo): ResponseInfoAmino {
    const obj: any = {};
    obj.data = message.data === "" ? undefined : message.data;
    obj.version = message.version === "" ? undefined : message.version;
    obj.app_version = message.appVersion !== BigInt(0) ? message.appVersion?.toString() : undefined;
    obj.last_block_height =
      message.lastBlockHeight !== BigInt(0) ? message.lastBlockHeight?.toString() : undefined;
    obj.last_block_app_hash = message.lastBlockAppHash
      ? base64FromBytes(message.lastBlockAppHash)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseInfoAminoMsg): ResponseInfo {
    return ResponseInfo.fromAmino(object.value);
  },
};
function createBaseResponseInitChain(): ResponseInitChain {
  return {
    consensusParams: undefined,
    validators: [],
    appHash: new Uint8Array(),
  };
}
export const ResponseInitChain = {
  typeUrl: "/tendermint.abci.ResponseInitChain",
  encode(message: ResponseInitChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(26).bytes(message.appHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseInitChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseInitChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 3:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseInitChain {
    const obj = createBaseResponseInitChain();
    if (isSet(object.consensusParams)) obj.consensusParams = ConsensusParams.fromJSON(object.consensusParams);
    if (Array.isArray(object?.validators))
      obj.validators = object.validators.map((e: any) => ValidatorUpdate.fromJSON(e));
    if (isSet(object.appHash)) obj.appHash = bytesFromBase64(object.appHash);
    return obj;
  },
  toJSON(message: ResponseInitChain): JsonSafe<ResponseInitChain> {
    const obj: any = {};
    message.consensusParams !== undefined &&
      (obj.consensusParams = message.consensusParams
        ? ConsensusParams.toJSON(message.consensusParams)
        : undefined);
    if (message.validators) {
      obj.validators = message.validators.map((e) => (e ? ValidatorUpdate.toJSON(e) : undefined));
    } else {
      obj.validators = [];
    }
    message.appHash !== undefined &&
      (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResponseInitChain>, I>>(object: I): ResponseInitChain {
    const message = createBaseResponseInitChain();
    if (object.consensusParams !== undefined && object.consensusParams !== null) {
      message.consensusParams = ConsensusParams.fromPartial(object.consensusParams);
    }
    message.validators = object.validators?.map((e) => ValidatorUpdate.fromPartial(e)) || [];
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ResponseInitChainAmino): ResponseInitChain {
    const message = createBaseResponseInitChain();
    if (object.consensus_params !== undefined && object.consensus_params !== null) {
      message.consensusParams = ConsensusParams.fromAmino(object.consensus_params);
    }
    message.validators = object.validators?.map((e) => ValidatorUpdate.fromAmino(e)) || [];
    if (object.app_hash !== undefined && object.app_hash !== null) {
      message.appHash = bytesFromBase64(object.app_hash);
    }
    return message;
  },
  toAmino(message: ResponseInitChain): ResponseInitChainAmino {
    const obj: any = {};
    obj.consensus_params = message.consensusParams
      ? ConsensusParams.toAmino(message.consensusParams)
      : undefined;
    if (message.validators) {
      obj.validators = message.validators.map((e) => (e ? ValidatorUpdate.toAmino(e) : undefined));
    } else {
      obj.validators = message.validators;
    }
    obj.app_hash = message.appHash ? base64FromBytes(message.appHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseInitChainAminoMsg): ResponseInitChain {
    return ResponseInitChain.fromAmino(object.value);
  },
};
function createBaseResponseQuery(): ResponseQuery {
  return {
    code: 0,
    log: "",
    info: "",
    index: BigInt(0),
    key: new Uint8Array(),
    value: new Uint8Array(),
    proofOps: undefined,
    height: BigInt(0),
    codespace: "",
  };
}
export const ResponseQuery = {
  typeUrl: "/tendermint.abci.ResponseQuery",
  encode(message: ResponseQuery, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(40).int64(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proofOps !== undefined) {
      ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(72).int64(message.height);
    }
    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseQuery {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.index = reader.int64();
          break;
        case 6:
          message.key = reader.bytes();
          break;
        case 7:
          message.value = reader.bytes();
          break;
        case 8:
          message.proofOps = ProofOps.decode(reader, reader.uint32());
          break;
        case 9:
          message.height = reader.int64();
          break;
        case 10:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseQuery {
    const obj = createBaseResponseQuery();
    if (isSet(object.code)) obj.code = Number(object.code);
    if (isSet(object.log)) obj.log = String(object.log);
    if (isSet(object.info)) obj.info = String(object.info);
    if (isSet(object.index)) obj.index = BigInt(object.index.toString());
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    if (isSet(object.value)) obj.value = bytesFromBase64(object.value);
    if (isSet(object.proofOps)) obj.proofOps = ProofOps.fromJSON(object.proofOps);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.codespace)) obj.codespace = String(object.codespace);
    return obj;
  },
  toJSON(message: ResponseQuery): JsonSafe<ResponseQuery> {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
    message.key !== undefined &&
      (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    message.proofOps !== undefined &&
      (obj.proofOps = message.proofOps ? ProofOps.toJSON(message.proofOps) : undefined);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.codespace !== undefined && (obj.codespace = message.codespace);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResponseQuery>, I>>(object: I): ResponseQuery {
    const message = createBaseResponseQuery();
    message.code = object.code ?? 0;
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index.toString());
    }
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    if (object.proofOps !== undefined && object.proofOps !== null) {
      message.proofOps = ProofOps.fromPartial(object.proofOps);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromAmino(object: ResponseQueryAmino): ResponseQuery {
    const message = createBaseResponseQuery();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    if (object.proof_ops !== undefined && object.proof_ops !== null) {
      message.proofOps = ProofOps.fromAmino(object.proof_ops);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    return message;
  },
  toAmino(message: ResponseQuery): ResponseQueryAmino {
    const obj: any = {};
    obj.code = message.code === 0 ? undefined : message.code;
    obj.log = message.log === "" ? undefined : message.log;
    obj.info = message.info === "" ? undefined : message.info;
    obj.index = message.index !== BigInt(0) ? message.index?.toString() : undefined;
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    obj.proof_ops = message.proofOps ? ProofOps.toAmino(message.proofOps) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.codespace = message.codespace === "" ? undefined : message.codespace;
    return obj;
  },
  fromAminoMsg(object: ResponseQueryAminoMsg): ResponseQuery {
    return ResponseQuery.fromAmino(object.value);
  },
};
function createBaseResponseCheckTx(): ResponseCheckTx {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: BigInt(0),
    gasUsed: BigInt(0),
    events: [],
    codespace: "",
  };
}
export const ResponseCheckTx = {
  typeUrl: "/tendermint.abci.ResponseCheckTx",
  encode(message: ResponseCheckTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(48).int64(message.gasUsed);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseCheckTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = reader.int64();
          break;
        case 6:
          message.gasUsed = reader.int64();
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseCheckTx {
    const obj = createBaseResponseCheckTx();
    if (isSet(object.code)) obj.code = Number(object.code);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    if (isSet(object.log)) obj.log = String(object.log);
    if (isSet(object.info)) obj.info = String(object.info);
    if (isSet(object.gas_wanted)) obj.gasWanted = BigInt(object.gas_wanted.toString());
    if (isSet(object.gas_used)) obj.gasUsed = BigInt(object.gas_used.toString());
    if (Array.isArray(object?.events)) obj.events = object.events.map((e: any) => Event.fromJSON(e));
    if (isSet(object.codespace)) obj.codespace = String(object.codespace);
    return obj;
  },
  toJSON(message: ResponseCheckTx): JsonSafe<ResponseCheckTx> {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.gasWanted !== undefined && (obj.gas_wanted = (message.gasWanted || BigInt(0)).toString());
    message.gasUsed !== undefined && (obj.gas_used = (message.gasUsed || BigInt(0)).toString());
    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    message.codespace !== undefined && (obj.codespace = message.codespace);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResponseCheckTx>, I>>(object: I): ResponseCheckTx {
    const message = createBaseResponseCheckTx();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    if (object.gasWanted !== undefined && object.gasWanted !== null) {
      message.gasWanted = BigInt(object.gasWanted.toString());
    }
    if (object.gasUsed !== undefined && object.gasUsed !== null) {
      message.gasUsed = BigInt(object.gasUsed.toString());
    }
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromAmino(object: ResponseCheckTxAmino): ResponseCheckTx {
    const message = createBaseResponseCheckTx();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
      message.gasWanted = BigInt(object.gas_wanted);
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gasUsed = BigInt(object.gas_used);
    }
    message.events = object.events?.map((e) => Event.fromAmino(e)) || [];
    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    return message;
  },
  toAmino(message: ResponseCheckTx): ResponseCheckTxAmino {
    const obj: any = {};
    obj.code = message.code === 0 ? undefined : message.code;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.log = message.log === "" ? undefined : message.log;
    obj.info = message.info === "" ? undefined : message.info;
    obj.gas_wanted = message.gasWanted !== BigInt(0) ? message.gasWanted?.toString() : undefined;
    obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed?.toString() : undefined;
    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toAmino(e) : undefined));
    } else {
      obj.events = message.events;
    }
    obj.codespace = message.codespace === "" ? undefined : message.codespace;
    return obj;
  },
  fromAminoMsg(object: ResponseCheckTxAminoMsg): ResponseCheckTx {
    return ResponseCheckTx.fromAmino(object.value);
  },
};
function createBaseResponseCommit(): ResponseCommit {
  return {
    retainHeight: BigInt(0),
  };
}
export const ResponseCommit = {
  typeUrl: "/tendermint.abci.ResponseCommit",
  encode(message: ResponseCommit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.retainHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.retainHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseCommit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.retainHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseCommit {
    const obj = createBaseResponseCommit();
    if (isSet(object.retainHeight)) obj.retainHeight = BigInt(object.retainHeight.toString());
    return obj;
  },
  toJSON(message: ResponseCommit): JsonSafe<ResponseCommit> {
    const obj: any = {};
    message.retainHeight !== undefined && (obj.retainHeight = (message.retainHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResponseCommit>, I>>(object: I): ResponseCommit {
    const message = createBaseResponseCommit();
    if (object.retainHeight !== undefined && object.retainHeight !== null) {
      message.retainHeight = BigInt(object.retainHeight.toString());
    }
    return message;
  },
  fromAmino(object: ResponseCommitAmino): ResponseCommit {
    const message = createBaseResponseCommit();
    if (object.retain_height !== undefined && object.retain_height !== null) {
      message.retainHeight = BigInt(object.retain_height);
    }
    return message;
  },
  toAmino(message: ResponseCommit): ResponseCommitAmino {
    const obj: any = {};
    obj.retain_height = message.retainHeight !== BigInt(0) ? message.retainHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseCommitAminoMsg): ResponseCommit {
    return ResponseCommit.fromAmino(object.value);
  },
};
function createBaseResponseListSnapshots(): ResponseListSnapshots {
  return {
    snapshots: [],
  };
}
export const ResponseListSnapshots = {
  typeUrl: "/tendermint.abci.ResponseListSnapshots",
  encode(message: ResponseListSnapshots, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.snapshots) {
      Snapshot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseListSnapshots {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseListSnapshots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshots.push(Snapshot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseListSnapshots {
    const obj = createBaseResponseListSnapshots();
    if (Array.isArray(object?.snapshots))
      obj.snapshots = object.snapshots.map((e: any) => Snapshot.fromJSON(e));
    return obj;
  },
  toJSON(message: ResponseListSnapshots): JsonSafe<ResponseListSnapshots> {
    const obj: any = {};
    if (message.snapshots) {
      obj.snapshots = message.snapshots.map((e) => (e ? Snapshot.toJSON(e) : undefined));
    } else {
      obj.snapshots = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResponseListSnapshots>, I>>(object: I): ResponseListSnapshots {
    const message = createBaseResponseListSnapshots();
    message.snapshots = object.snapshots?.map((e) => Snapshot.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ResponseListSnapshotsAmino): ResponseListSnapshots {
    const message = createBaseResponseListSnapshots();
    message.snapshots = object.snapshots?.map((e) => Snapshot.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ResponseListSnapshots): ResponseListSnapshotsAmino {
    const obj: any = {};
    if (message.snapshots) {
      obj.snapshots = message.snapshots.map((e) => (e ? Snapshot.toAmino(e) : undefined));
    } else {
      obj.snapshots = message.snapshots;
    }
    return obj;
  },
  fromAminoMsg(object: ResponseListSnapshotsAminoMsg): ResponseListSnapshots {
    return ResponseListSnapshots.fromAmino(object.value);
  },
};
function createBaseResponseOfferSnapshot(): ResponseOfferSnapshot {
  return {
    result: 0,
  };
}
export const ResponseOfferSnapshot = {
  typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
  encode(message: ResponseOfferSnapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseOfferSnapshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseOfferSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseOfferSnapshot {
    const obj = createBaseResponseOfferSnapshot();
    if (isSet(object.result)) obj.result = responseOfferSnapshot_ResultFromJSON(object.result);
    return obj;
  },
  toJSON(message: ResponseOfferSnapshot): JsonSafe<ResponseOfferSnapshot> {
    const obj: any = {};
    message.result !== undefined && (obj.result = responseOfferSnapshot_ResultToJSON(message.result));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResponseOfferSnapshot>, I>>(object: I): ResponseOfferSnapshot {
    const message = createBaseResponseOfferSnapshot();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: ResponseOfferSnapshotAmino): ResponseOfferSnapshot {
    const message = createBaseResponseOfferSnapshot();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: ResponseOfferSnapshot): ResponseOfferSnapshotAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: ResponseOfferSnapshotAminoMsg): ResponseOfferSnapshot {
    return ResponseOfferSnapshot.fromAmino(object.value);
  },
};
function createBaseResponseLoadSnapshotChunk(): ResponseLoadSnapshotChunk {
  return {
    chunk: new Uint8Array(),
  };
}
export const ResponseLoadSnapshotChunk = {
  typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
  encode(message: ResponseLoadSnapshotChunk, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chunk.length !== 0) {
      writer.uint32(10).bytes(message.chunk);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseLoadSnapshotChunk {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseLoadSnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunk = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseLoadSnapshotChunk {
    const obj = createBaseResponseLoadSnapshotChunk();
    if (isSet(object.chunk)) obj.chunk = bytesFromBase64(object.chunk);
    return obj;
  },
  toJSON(message: ResponseLoadSnapshotChunk): JsonSafe<ResponseLoadSnapshotChunk> {
    const obj: any = {};
    message.chunk !== undefined &&
      (obj.chunk = base64FromBytes(message.chunk !== undefined ? message.chunk : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResponseLoadSnapshotChunk>, I>>(
    object: I,
  ): ResponseLoadSnapshotChunk {
    const message = createBaseResponseLoadSnapshotChunk();
    message.chunk = object.chunk ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ResponseLoadSnapshotChunkAmino): ResponseLoadSnapshotChunk {
    const message = createBaseResponseLoadSnapshotChunk();
    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = bytesFromBase64(object.chunk);
    }
    return message;
  },
  toAmino(message: ResponseLoadSnapshotChunk): ResponseLoadSnapshotChunkAmino {
    const obj: any = {};
    obj.chunk = message.chunk ? base64FromBytes(message.chunk) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseLoadSnapshotChunkAminoMsg): ResponseLoadSnapshotChunk {
    return ResponseLoadSnapshotChunk.fromAmino(object.value);
  },
};
function createBaseResponseApplySnapshotChunk(): ResponseApplySnapshotChunk {
  return {
    result: 0,
    refetchChunks: [],
    rejectSenders: [],
  };
}
export const ResponseApplySnapshotChunk = {
  typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
  encode(message: ResponseApplySnapshotChunk, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    writer.uint32(18).fork();
    for (const v of message.refetchChunks) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.rejectSenders) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseApplySnapshotChunk {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseApplySnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.refetchChunks.push(reader.uint32());
            }
          } else {
            message.refetchChunks.push(reader.uint32());
          }
          break;
        case 3:
          message.rejectSenders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseApplySnapshotChunk {
    const obj = createBaseResponseApplySnapshotChunk();
    if (isSet(object.result)) obj.result = responseApplySnapshotChunk_ResultFromJSON(object.result);
    if (Array.isArray(object?.refetchChunks))
      obj.refetchChunks = object.refetchChunks.map((e: any) => Number(e));
    if (Array.isArray(object?.rejectSenders))
      obj.rejectSenders = object.rejectSenders.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: ResponseApplySnapshotChunk): JsonSafe<ResponseApplySnapshotChunk> {
    const obj: any = {};
    message.result !== undefined && (obj.result = responseApplySnapshotChunk_ResultToJSON(message.result));
    if (message.refetchChunks) {
      obj.refetchChunks = message.refetchChunks.map((e) => Math.round(e));
    } else {
      obj.refetchChunks = [];
    }
    if (message.rejectSenders) {
      obj.rejectSenders = message.rejectSenders.map((e) => e);
    } else {
      obj.rejectSenders = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResponseApplySnapshotChunk>, I>>(
    object: I,
  ): ResponseApplySnapshotChunk {
    const message = createBaseResponseApplySnapshotChunk();
    message.result = object.result ?? 0;
    message.refetchChunks = object.refetchChunks?.map((e) => e) || [];
    message.rejectSenders = object.rejectSenders?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: ResponseApplySnapshotChunkAmino): ResponseApplySnapshotChunk {
    const message = createBaseResponseApplySnapshotChunk();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    message.refetchChunks = object.refetch_chunks?.map((e) => e) || [];
    message.rejectSenders = object.reject_senders?.map((e) => e) || [];
    return message;
  },
  toAmino(message: ResponseApplySnapshotChunk): ResponseApplySnapshotChunkAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    if (message.refetchChunks) {
      obj.refetch_chunks = message.refetchChunks.map((e) => e);
    } else {
      obj.refetch_chunks = message.refetchChunks;
    }
    if (message.rejectSenders) {
      obj.reject_senders = message.rejectSenders.map((e) => e);
    } else {
      obj.reject_senders = message.rejectSenders;
    }
    return obj;
  },
  fromAminoMsg(object: ResponseApplySnapshotChunkAminoMsg): ResponseApplySnapshotChunk {
    return ResponseApplySnapshotChunk.fromAmino(object.value);
  },
};
function createBaseResponsePrepareProposal(): ResponsePrepareProposal {
  return {
    txs: [],
  };
}
export const ResponsePrepareProposal = {
  typeUrl: "/tendermint.abci.ResponsePrepareProposal",
  encode(message: ResponsePrepareProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponsePrepareProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponsePrepareProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponsePrepareProposal {
    const obj = createBaseResponsePrepareProposal();
    if (Array.isArray(object?.txs)) obj.txs = object.txs.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  toJSON(message: ResponsePrepareProposal): JsonSafe<ResponsePrepareProposal> {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResponsePrepareProposal>, I>>(object: I): ResponsePrepareProposal {
    const message = createBaseResponsePrepareProposal();
    message.txs = object.txs?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: ResponsePrepareProposalAmino): ResponsePrepareProposal {
    const message = createBaseResponsePrepareProposal();
    message.txs = object.txs?.map((e) => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: ResponsePrepareProposal): ResponsePrepareProposalAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => base64FromBytes(e));
    } else {
      obj.txs = message.txs;
    }
    return obj;
  },
  fromAminoMsg(object: ResponsePrepareProposalAminoMsg): ResponsePrepareProposal {
    return ResponsePrepareProposal.fromAmino(object.value);
  },
};
function createBaseResponseProcessProposal(): ResponseProcessProposal {
  return {
    status: 0,
  };
}
export const ResponseProcessProposal = {
  typeUrl: "/tendermint.abci.ResponseProcessProposal",
  encode(message: ResponseProcessProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseProcessProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseProcessProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseProcessProposal {
    const obj = createBaseResponseProcessProposal();
    if (isSet(object.status)) obj.status = responseProcessProposal_ProposalStatusFromJSON(object.status);
    return obj;
  },
  toJSON(message: ResponseProcessProposal): JsonSafe<ResponseProcessProposal> {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = responseProcessProposal_ProposalStatusToJSON(message.status));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResponseProcessProposal>, I>>(object: I): ResponseProcessProposal {
    const message = createBaseResponseProcessProposal();
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: ResponseProcessProposalAmino): ResponseProcessProposal {
    const message = createBaseResponseProcessProposal();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: ResponseProcessProposal): ResponseProcessProposalAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: ResponseProcessProposalAminoMsg): ResponseProcessProposal {
    return ResponseProcessProposal.fromAmino(object.value);
  },
};
function createBaseResponseExtendVote(): ResponseExtendVote {
  return {
    voteExtension: new Uint8Array(),
  };
}
export const ResponseExtendVote = {
  typeUrl: "/tendermint.abci.ResponseExtendVote",
  encode(message: ResponseExtendVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voteExtension.length !== 0) {
      writer.uint32(10).bytes(message.voteExtension);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseExtendVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseExtendVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteExtension = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseExtendVote {
    const obj = createBaseResponseExtendVote();
    if (isSet(object.voteExtension)) obj.voteExtension = bytesFromBase64(object.voteExtension);
    return obj;
  },
  toJSON(message: ResponseExtendVote): JsonSafe<ResponseExtendVote> {
    const obj: any = {};
    message.voteExtension !== undefined &&
      (obj.voteExtension = base64FromBytes(
        message.voteExtension !== undefined ? message.voteExtension : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResponseExtendVote>, I>>(object: I): ResponseExtendVote {
    const message = createBaseResponseExtendVote();
    message.voteExtension = object.voteExtension ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ResponseExtendVoteAmino): ResponseExtendVote {
    const message = createBaseResponseExtendVote();
    if (object.vote_extension !== undefined && object.vote_extension !== null) {
      message.voteExtension = bytesFromBase64(object.vote_extension);
    }
    return message;
  },
  toAmino(message: ResponseExtendVote): ResponseExtendVoteAmino {
    const obj: any = {};
    obj.vote_extension = message.voteExtension ? base64FromBytes(message.voteExtension) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseExtendVoteAminoMsg): ResponseExtendVote {
    return ResponseExtendVote.fromAmino(object.value);
  },
};
function createBaseResponseVerifyVoteExtension(): ResponseVerifyVoteExtension {
  return {
    status: 0,
  };
}
export const ResponseVerifyVoteExtension = {
  typeUrl: "/tendermint.abci.ResponseVerifyVoteExtension",
  encode(message: ResponseVerifyVoteExtension, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseVerifyVoteExtension {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseVerifyVoteExtension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseVerifyVoteExtension {
    const obj = createBaseResponseVerifyVoteExtension();
    if (isSet(object.status)) obj.status = responseVerifyVoteExtension_VerifyStatusFromJSON(object.status);
    return obj;
  },
  toJSON(message: ResponseVerifyVoteExtension): JsonSafe<ResponseVerifyVoteExtension> {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = responseVerifyVoteExtension_VerifyStatusToJSON(message.status));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResponseVerifyVoteExtension>, I>>(
    object: I,
  ): ResponseVerifyVoteExtension {
    const message = createBaseResponseVerifyVoteExtension();
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: ResponseVerifyVoteExtensionAmino): ResponseVerifyVoteExtension {
    const message = createBaseResponseVerifyVoteExtension();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: ResponseVerifyVoteExtension): ResponseVerifyVoteExtensionAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: ResponseVerifyVoteExtensionAminoMsg): ResponseVerifyVoteExtension {
    return ResponseVerifyVoteExtension.fromAmino(object.value);
  },
};
function createBaseResponseFinalizeBlock(): ResponseFinalizeBlock {
  return {
    events: [],
    txResults: [],
    validatorUpdates: [],
    consensusParamUpdates: undefined,
    appHash: new Uint8Array(),
  };
}
export const ResponseFinalizeBlock = {
  typeUrl: "/tendermint.abci.ResponseFinalizeBlock",
  encode(message: ResponseFinalizeBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.txResults) {
      ExecTxResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.validatorUpdates) {
      ValidatorUpdate.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.consensusParamUpdates !== undefined) {
      ConsensusParams.encode(message.consensusParamUpdates, writer.uint32(34).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(42).bytes(message.appHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseFinalizeBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseFinalizeBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 2:
          message.txResults.push(ExecTxResult.decode(reader, reader.uint32()));
          break;
        case 3:
          message.validatorUpdates.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 4:
          message.consensusParamUpdates = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 5:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseFinalizeBlock {
    const obj = createBaseResponseFinalizeBlock();
    if (Array.isArray(object?.events)) obj.events = object.events.map((e: any) => Event.fromJSON(e));
    if (Array.isArray(object?.txResults))
      obj.txResults = object.txResults.map((e: any) => ExecTxResult.fromJSON(e));
    if (Array.isArray(object?.validatorUpdates))
      obj.validatorUpdates = object.validatorUpdates.map((e: any) => ValidatorUpdate.fromJSON(e));
    if (isSet(object.consensusParamUpdates))
      obj.consensusParamUpdates = ConsensusParams.fromJSON(object.consensusParamUpdates);
    if (isSet(object.appHash)) obj.appHash = bytesFromBase64(object.appHash);
    return obj;
  },
  toJSON(message: ResponseFinalizeBlock): JsonSafe<ResponseFinalizeBlock> {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    if (message.txResults) {
      obj.txResults = message.txResults.map((e) => (e ? ExecTxResult.toJSON(e) : undefined));
    } else {
      obj.txResults = [];
    }
    if (message.validatorUpdates) {
      obj.validatorUpdates = message.validatorUpdates.map((e) => (e ? ValidatorUpdate.toJSON(e) : undefined));
    } else {
      obj.validatorUpdates = [];
    }
    message.consensusParamUpdates !== undefined &&
      (obj.consensusParamUpdates = message.consensusParamUpdates
        ? ConsensusParams.toJSON(message.consensusParamUpdates)
        : undefined);
    message.appHash !== undefined &&
      (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResponseFinalizeBlock>, I>>(object: I): ResponseFinalizeBlock {
    const message = createBaseResponseFinalizeBlock();
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    message.txResults = object.txResults?.map((e) => ExecTxResult.fromPartial(e)) || [];
    message.validatorUpdates = object.validatorUpdates?.map((e) => ValidatorUpdate.fromPartial(e)) || [];
    if (object.consensusParamUpdates !== undefined && object.consensusParamUpdates !== null) {
      message.consensusParamUpdates = ConsensusParams.fromPartial(object.consensusParamUpdates);
    }
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ResponseFinalizeBlockAmino): ResponseFinalizeBlock {
    const message = createBaseResponseFinalizeBlock();
    message.events = object.events?.map((e) => Event.fromAmino(e)) || [];
    message.txResults = object.tx_results?.map((e) => ExecTxResult.fromAmino(e)) || [];
    message.validatorUpdates = object.validator_updates?.map((e) => ValidatorUpdate.fromAmino(e)) || [];
    if (object.consensus_param_updates !== undefined && object.consensus_param_updates !== null) {
      message.consensusParamUpdates = ConsensusParams.fromAmino(object.consensus_param_updates);
    }
    if (object.app_hash !== undefined && object.app_hash !== null) {
      message.appHash = bytesFromBase64(object.app_hash);
    }
    return message;
  },
  toAmino(message: ResponseFinalizeBlock): ResponseFinalizeBlockAmino {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toAmino(e) : undefined));
    } else {
      obj.events = message.events;
    }
    if (message.txResults) {
      obj.tx_results = message.txResults.map((e) => (e ? ExecTxResult.toAmino(e) : undefined));
    } else {
      obj.tx_results = message.txResults;
    }
    if (message.validatorUpdates) {
      obj.validator_updates = message.validatorUpdates.map((e) =>
        e ? ValidatorUpdate.toAmino(e) : undefined,
      );
    } else {
      obj.validator_updates = message.validatorUpdates;
    }
    obj.consensus_param_updates = message.consensusParamUpdates
      ? ConsensusParams.toAmino(message.consensusParamUpdates)
      : undefined;
    obj.app_hash = message.appHash ? base64FromBytes(message.appHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseFinalizeBlockAminoMsg): ResponseFinalizeBlock {
    return ResponseFinalizeBlock.fromAmino(object.value);
  },
};
function createBaseCommitInfo(): CommitInfo {
  return {
    round: 0,
    votes: [],
  };
}
export const CommitInfo = {
  typeUrl: "/tendermint.abci.CommitInfo",
  encode(message: CommitInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    for (const v of message.votes) {
      VoteInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CommitInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;
        case 2:
          message.votes.push(VoteInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommitInfo {
    const obj = createBaseCommitInfo();
    if (isSet(object.round)) obj.round = Number(object.round);
    if (Array.isArray(object?.votes)) obj.votes = object.votes.map((e: any) => VoteInfo.fromJSON(e));
    return obj;
  },
  toJSON(message: CommitInfo): JsonSafe<CommitInfo> {
    const obj: any = {};
    message.round !== undefined && (obj.round = Math.round(message.round));
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? VoteInfo.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CommitInfo>, I>>(object: I): CommitInfo {
    const message = createBaseCommitInfo();
    message.round = object.round ?? 0;
    message.votes = object.votes?.map((e) => VoteInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CommitInfoAmino): CommitInfo {
    const message = createBaseCommitInfo();
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    }
    message.votes = object.votes?.map((e) => VoteInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CommitInfo): CommitInfoAmino {
    const obj: any = {};
    obj.round = message.round === 0 ? undefined : message.round;
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? VoteInfo.toAmino(e) : undefined));
    } else {
      obj.votes = message.votes;
    }
    return obj;
  },
  fromAminoMsg(object: CommitInfoAminoMsg): CommitInfo {
    return CommitInfo.fromAmino(object.value);
  },
};
function createBaseExtendedCommitInfo(): ExtendedCommitInfo {
  return {
    round: 0,
    votes: [],
  };
}
export const ExtendedCommitInfo = {
  typeUrl: "/tendermint.abci.ExtendedCommitInfo",
  encode(message: ExtendedCommitInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    for (const v of message.votes) {
      ExtendedVoteInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExtendedCommitInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;
        case 2:
          message.votes.push(ExtendedVoteInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExtendedCommitInfo {
    const obj = createBaseExtendedCommitInfo();
    if (isSet(object.round)) obj.round = Number(object.round);
    if (Array.isArray(object?.votes)) obj.votes = object.votes.map((e: any) => ExtendedVoteInfo.fromJSON(e));
    return obj;
  },
  toJSON(message: ExtendedCommitInfo): JsonSafe<ExtendedCommitInfo> {
    const obj: any = {};
    message.round !== undefined && (obj.round = Math.round(message.round));
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? ExtendedVoteInfo.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ExtendedCommitInfo>, I>>(object: I): ExtendedCommitInfo {
    const message = createBaseExtendedCommitInfo();
    message.round = object.round ?? 0;
    message.votes = object.votes?.map((e) => ExtendedVoteInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ExtendedCommitInfoAmino): ExtendedCommitInfo {
    const message = createBaseExtendedCommitInfo();
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    }
    message.votes = object.votes?.map((e) => ExtendedVoteInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ExtendedCommitInfo): ExtendedCommitInfoAmino {
    const obj: any = {};
    obj.round = message.round === 0 ? undefined : message.round;
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? ExtendedVoteInfo.toAmino(e) : undefined));
    } else {
      obj.votes = message.votes;
    }
    return obj;
  },
  fromAminoMsg(object: ExtendedCommitInfoAminoMsg): ExtendedCommitInfo {
    return ExtendedCommitInfo.fromAmino(object.value);
  },
};
function createBaseEvent(): Event {
  return {
    type: "",
    attributes: [],
  };
}
export const Event = {
  typeUrl: "/tendermint.abci.Event",
  encode(message: Event, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      EventAttribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Event {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(EventAttribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Event {
    const obj = createBaseEvent();
    if (isSet(object.type)) obj.type = String(object.type);
    if (Array.isArray(object?.attributes))
      obj.attributes = object.attributes.map((e: any) => EventAttribute.fromJSON(e));
    return obj;
  },
  toJSON(message: Event): JsonSafe<Event> {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => (e ? EventAttribute.toJSON(e) : undefined));
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event {
    const message = createBaseEvent();
    message.type = object.type ?? "";
    message.attributes = object.attributes?.map((e) => EventAttribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventAmino): Event {
    const message = createBaseEvent();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    message.attributes = object.attributes?.map((e) => EventAttribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Event): EventAmino {
    const obj: any = {};
    obj.type = message.type === "" ? undefined : message.type;
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => (e ? EventAttribute.toAmino(e) : undefined));
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: EventAminoMsg): Event {
    return Event.fromAmino(object.value);
  },
};
function createBaseEventAttribute(): EventAttribute {
  return {
    key: "",
    value: "",
    index: false,
  };
}
export const EventAttribute = {
  typeUrl: "/tendermint.abci.EventAttribute",
  encode(message: EventAttribute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.index === true) {
      writer.uint32(24).bool(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAttribute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.index = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventAttribute {
    const obj = createBaseEventAttribute();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = String(object.value);
    if (isSet(object.index)) obj.index = Boolean(object.index);
    return obj;
  },
  toJSON(message: EventAttribute): JsonSafe<EventAttribute> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventAttribute>, I>>(object: I): EventAttribute {
    const message = createBaseEventAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    message.index = object.index ?? false;
    return message;
  },
  fromAmino(object: EventAttributeAmino): EventAttribute {
    const message = createBaseEventAttribute();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    return message;
  },
  toAmino(message: EventAttribute): EventAttributeAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    obj.index = message.index === false ? undefined : message.index;
    return obj;
  },
  fromAminoMsg(object: EventAttributeAminoMsg): EventAttribute {
    return EventAttribute.fromAmino(object.value);
  },
};
function createBaseExecTxResult(): ExecTxResult {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: BigInt(0),
    gasUsed: BigInt(0),
    events: [],
    codespace: "",
  };
}
export const ExecTxResult = {
  typeUrl: "/tendermint.abci.ExecTxResult",
  encode(message: ExecTxResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(48).int64(message.gasUsed);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExecTxResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecTxResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = reader.int64();
          break;
        case 6:
          message.gasUsed = reader.int64();
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExecTxResult {
    const obj = createBaseExecTxResult();
    if (isSet(object.code)) obj.code = Number(object.code);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    if (isSet(object.log)) obj.log = String(object.log);
    if (isSet(object.info)) obj.info = String(object.info);
    if (isSet(object.gas_wanted)) obj.gasWanted = BigInt(object.gas_wanted.toString());
    if (isSet(object.gas_used)) obj.gasUsed = BigInt(object.gas_used.toString());
    if (Array.isArray(object?.events)) obj.events = object.events.map((e: any) => Event.fromJSON(e));
    if (isSet(object.codespace)) obj.codespace = String(object.codespace);
    return obj;
  },
  toJSON(message: ExecTxResult): JsonSafe<ExecTxResult> {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.gasWanted !== undefined && (obj.gas_wanted = (message.gasWanted || BigInt(0)).toString());
    message.gasUsed !== undefined && (obj.gas_used = (message.gasUsed || BigInt(0)).toString());
    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    message.codespace !== undefined && (obj.codespace = message.codespace);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ExecTxResult>, I>>(object: I): ExecTxResult {
    const message = createBaseExecTxResult();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    if (object.gasWanted !== undefined && object.gasWanted !== null) {
      message.gasWanted = BigInt(object.gasWanted.toString());
    }
    if (object.gasUsed !== undefined && object.gasUsed !== null) {
      message.gasUsed = BigInt(object.gasUsed.toString());
    }
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromAmino(object: ExecTxResultAmino): ExecTxResult {
    const message = createBaseExecTxResult();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
      message.gasWanted = BigInt(object.gas_wanted);
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gasUsed = BigInt(object.gas_used);
    }
    message.events = object.events?.map((e) => Event.fromAmino(e)) || [];
    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    return message;
  },
  toAmino(message: ExecTxResult): ExecTxResultAmino {
    const obj: any = {};
    obj.code = message.code === 0 ? undefined : message.code;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.log = message.log === "" ? undefined : message.log;
    obj.info = message.info === "" ? undefined : message.info;
    obj.gas_wanted = message.gasWanted !== BigInt(0) ? message.gasWanted?.toString() : undefined;
    obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed?.toString() : undefined;
    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toAmino(e) : undefined));
    } else {
      obj.events = message.events;
    }
    obj.codespace = message.codespace === "" ? undefined : message.codespace;
    return obj;
  },
  fromAminoMsg(object: ExecTxResultAminoMsg): ExecTxResult {
    return ExecTxResult.fromAmino(object.value);
  },
};
function createBaseTxResult(): TxResult {
  return {
    height: BigInt(0),
    index: 0,
    tx: new Uint8Array(),
    result: ExecTxResult.fromPartial({}),
  };
}
export const TxResult = {
  typeUrl: "/tendermint.abci.TxResult",
  encode(message: TxResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    if (message.tx.length !== 0) {
      writer.uint32(26).bytes(message.tx);
    }
    if (message.result !== undefined) {
      ExecTxResult.encode(message.result, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.index = reader.uint32();
          break;
        case 3:
          message.tx = reader.bytes();
          break;
        case 4:
          message.result = ExecTxResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxResult {
    const obj = createBaseTxResult();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.index)) obj.index = Number(object.index);
    if (isSet(object.tx)) obj.tx = bytesFromBase64(object.tx);
    if (isSet(object.result)) obj.result = ExecTxResult.fromJSON(object.result);
    return obj;
  },
  toJSON(message: TxResult): JsonSafe<TxResult> {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.tx !== undefined &&
      (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
    message.result !== undefined &&
      (obj.result = message.result ? ExecTxResult.toJSON(message.result) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TxResult>, I>>(object: I): TxResult {
    const message = createBaseTxResult();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.index = object.index ?? 0;
    message.tx = object.tx ?? new Uint8Array();
    if (object.result !== undefined && object.result !== null) {
      message.result = ExecTxResult.fromPartial(object.result);
    }
    return message;
  },
  fromAmino(object: TxResultAmino): TxResult {
    const message = createBaseTxResult();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = bytesFromBase64(object.tx);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = ExecTxResult.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message: TxResult): TxResultAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.index = message.index === 0 ? undefined : message.index;
    obj.tx = message.tx ? base64FromBytes(message.tx) : undefined;
    obj.result = message.result ? ExecTxResult.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: TxResultAminoMsg): TxResult {
    return TxResult.fromAmino(object.value);
  },
};
function createBaseValidator(): Validator {
  return {
    address: new Uint8Array(),
    power: BigInt(0),
  };
}
export const Validator = {
  typeUrl: "/tendermint.abci.Validator",
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(24).int64(message.power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Validator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 3:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    const obj = createBaseValidator();
    if (isSet(object.address)) obj.address = bytesFromBase64(object.address);
    if (isSet(object.power)) obj.power = BigInt(object.power.toString());
    return obj;
  },
  toJSON(message: Validator): JsonSafe<Validator> {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Validator>, I>>(object: I): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? new Uint8Array();
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power.toString());
    }
    return message;
  },
  fromAmino(object: ValidatorAmino): Validator {
    const message = createBaseValidator();
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    return message;
  },
  toAmino(message: Validator): ValidatorAmino {
    const obj: any = {};
    obj.address = message.address ? base64FromBytes(message.address) : undefined;
    obj.power = message.power !== BigInt(0) ? message.power?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorAminoMsg): Validator {
    return Validator.fromAmino(object.value);
  },
};
function createBaseValidatorUpdate(): ValidatorUpdate {
  return {
    pubKey: PublicKey.fromPartial({}),
    power: BigInt(0),
  };
}
export const ValidatorUpdate = {
  typeUrl: "/tendermint.abci.ValidatorUpdate",
  encode(message: ValidatorUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorUpdate {
    const obj = createBaseValidatorUpdate();
    if (isSet(object.pubKey)) obj.pubKey = PublicKey.fromJSON(object.pubKey);
    if (isSet(object.power)) obj.power = BigInt(object.power.toString());
    return obj;
  },
  toJSON(message: ValidatorUpdate): JsonSafe<ValidatorUpdate> {
    const obj: any = {};
    message.pubKey !== undefined &&
      (obj.pubKey = message.pubKey ? PublicKey.toJSON(message.pubKey) : undefined);
    message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorUpdate>, I>>(object: I): ValidatorUpdate {
    const message = createBaseValidatorUpdate();
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = PublicKey.fromPartial(object.pubKey);
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power.toString());
    }
    return message;
  },
  fromAmino(object: ValidatorUpdateAmino): ValidatorUpdate {
    const message = createBaseValidatorUpdate();
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = PublicKey.fromAmino(object.pub_key);
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    return message;
  },
  toAmino(message: ValidatorUpdate): ValidatorUpdateAmino {
    const obj: any = {};
    obj.pub_key = message.pubKey ? PublicKey.toAmino(message.pubKey) : undefined;
    obj.power = message.power !== BigInt(0) ? message.power?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorUpdateAminoMsg): ValidatorUpdate {
    return ValidatorUpdate.fromAmino(object.value);
  },
};
function createBaseVoteInfo(): VoteInfo {
  return {
    validator: Validator.fromPartial({}),
    blockIdFlag: 0,
  };
}
export const VoteInfo = {
  typeUrl: "/tendermint.abci.VoteInfo",
  encode(message: VoteInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockIdFlag !== 0) {
      writer.uint32(24).int32(message.blockIdFlag);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VoteInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.blockIdFlag = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VoteInfo {
    const obj = createBaseVoteInfo();
    if (isSet(object.validator)) obj.validator = Validator.fromJSON(object.validator);
    if (isSet(object.blockIdFlag)) obj.blockIdFlag = blockIDFlagFromJSON(object.blockIdFlag);
    return obj;
  },
  toJSON(message: VoteInfo): JsonSafe<VoteInfo> {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    message.blockIdFlag !== undefined && (obj.blockIdFlag = blockIDFlagToJSON(message.blockIdFlag));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<VoteInfo>, I>>(object: I): VoteInfo {
    const message = createBaseVoteInfo();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator);
    }
    message.blockIdFlag = object.blockIdFlag ?? 0;
    return message;
  },
  fromAmino(object: VoteInfoAmino): VoteInfo {
    const message = createBaseVoteInfo();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromAmino(object.validator);
    }
    if (object.block_id_flag !== undefined && object.block_id_flag !== null) {
      message.blockIdFlag = object.block_id_flag;
    }
    return message;
  },
  toAmino(message: VoteInfo): VoteInfoAmino {
    const obj: any = {};
    obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
    obj.block_id_flag = message.blockIdFlag === 0 ? undefined : message.blockIdFlag;
    return obj;
  },
  fromAminoMsg(object: VoteInfoAminoMsg): VoteInfo {
    return VoteInfo.fromAmino(object.value);
  },
};
function createBaseExtendedVoteInfo(): ExtendedVoteInfo {
  return {
    validator: Validator.fromPartial({}),
    voteExtension: new Uint8Array(),
    extensionSignature: new Uint8Array(),
    blockIdFlag: 0,
  };
}
export const ExtendedVoteInfo = {
  typeUrl: "/tendermint.abci.ExtendedVoteInfo",
  encode(message: ExtendedVoteInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.voteExtension.length !== 0) {
      writer.uint32(26).bytes(message.voteExtension);
    }
    if (message.extensionSignature.length !== 0) {
      writer.uint32(34).bytes(message.extensionSignature);
    }
    if (message.blockIdFlag !== 0) {
      writer.uint32(40).int32(message.blockIdFlag);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExtendedVoteInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedVoteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.voteExtension = reader.bytes();
          break;
        case 4:
          message.extensionSignature = reader.bytes();
          break;
        case 5:
          message.blockIdFlag = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExtendedVoteInfo {
    const obj = createBaseExtendedVoteInfo();
    if (isSet(object.validator)) obj.validator = Validator.fromJSON(object.validator);
    if (isSet(object.voteExtension)) obj.voteExtension = bytesFromBase64(object.voteExtension);
    if (isSet(object.extensionSignature)) obj.extensionSignature = bytesFromBase64(object.extensionSignature);
    if (isSet(object.blockIdFlag)) obj.blockIdFlag = blockIDFlagFromJSON(object.blockIdFlag);
    return obj;
  },
  toJSON(message: ExtendedVoteInfo): JsonSafe<ExtendedVoteInfo> {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    message.voteExtension !== undefined &&
      (obj.voteExtension = base64FromBytes(
        message.voteExtension !== undefined ? message.voteExtension : new Uint8Array(),
      ));
    message.extensionSignature !== undefined &&
      (obj.extensionSignature = base64FromBytes(
        message.extensionSignature !== undefined ? message.extensionSignature : new Uint8Array(),
      ));
    message.blockIdFlag !== undefined && (obj.blockIdFlag = blockIDFlagToJSON(message.blockIdFlag));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ExtendedVoteInfo>, I>>(object: I): ExtendedVoteInfo {
    const message = createBaseExtendedVoteInfo();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator);
    }
    message.voteExtension = object.voteExtension ?? new Uint8Array();
    message.extensionSignature = object.extensionSignature ?? new Uint8Array();
    message.blockIdFlag = object.blockIdFlag ?? 0;
    return message;
  },
  fromAmino(object: ExtendedVoteInfoAmino): ExtendedVoteInfo {
    const message = createBaseExtendedVoteInfo();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromAmino(object.validator);
    }
    if (object.vote_extension !== undefined && object.vote_extension !== null) {
      message.voteExtension = bytesFromBase64(object.vote_extension);
    }
    if (object.extension_signature !== undefined && object.extension_signature !== null) {
      message.extensionSignature = bytesFromBase64(object.extension_signature);
    }
    if (object.block_id_flag !== undefined && object.block_id_flag !== null) {
      message.blockIdFlag = object.block_id_flag;
    }
    return message;
  },
  toAmino(message: ExtendedVoteInfo): ExtendedVoteInfoAmino {
    const obj: any = {};
    obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
    obj.vote_extension = message.voteExtension ? base64FromBytes(message.voteExtension) : undefined;
    obj.extension_signature = message.extensionSignature
      ? base64FromBytes(message.extensionSignature)
      : undefined;
    obj.block_id_flag = message.blockIdFlag === 0 ? undefined : message.blockIdFlag;
    return obj;
  },
  fromAminoMsg(object: ExtendedVoteInfoAminoMsg): ExtendedVoteInfo {
    return ExtendedVoteInfo.fromAmino(object.value);
  },
};
function createBaseMisbehavior(): Misbehavior {
  return {
    type: 0,
    validator: Validator.fromPartial({}),
    height: BigInt(0),
    time: Timestamp.fromPartial({}),
    totalVotingPower: BigInt(0),
  };
}
export const Misbehavior = {
  typeUrl: "/tendermint.abci.Misbehavior",
  encode(message: Misbehavior, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(40).int64(message.totalVotingPower);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Misbehavior {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisbehavior();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.totalVotingPower = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Misbehavior {
    const obj = createBaseMisbehavior();
    if (isSet(object.type)) obj.type = misbehaviorTypeFromJSON(object.type);
    if (isSet(object.validator)) obj.validator = Validator.fromJSON(object.validator);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.time)) obj.time = fromJsonTimestamp(object.time);
    if (isSet(object.totalVotingPower)) obj.totalVotingPower = BigInt(object.totalVotingPower.toString());
    return obj;
  },
  toJSON(message: Misbehavior): JsonSafe<Misbehavior> {
    const obj: any = {};
    message.type !== undefined && (obj.type = misbehaviorTypeToJSON(message.type));
    message.validator !== undefined &&
      (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.totalVotingPower !== undefined &&
      (obj.totalVotingPower = (message.totalVotingPower || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Misbehavior>, I>>(object: I): Misbehavior {
    const message = createBaseMisbehavior();
    message.type = object.type ?? 0;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromPartial(object.time);
    }
    if (object.totalVotingPower !== undefined && object.totalVotingPower !== null) {
      message.totalVotingPower = BigInt(object.totalVotingPower.toString());
    }
    return message;
  },
  fromAmino(object: MisbehaviorAmino): Misbehavior {
    const message = createBaseMisbehavior();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromAmino(object.validator);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    if (object.total_voting_power !== undefined && object.total_voting_power !== null) {
      message.totalVotingPower = BigInt(object.total_voting_power);
    }
    return message;
  },
  toAmino(message: Misbehavior): MisbehaviorAmino {
    const obj: any = {};
    obj.type = message.type === 0 ? undefined : message.type;
    obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(message.time) : undefined;
    obj.total_voting_power =
      message.totalVotingPower !== BigInt(0) ? message.totalVotingPower?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MisbehaviorAminoMsg): Misbehavior {
    return Misbehavior.fromAmino(object.value);
  },
};
function createBaseSnapshot(): Snapshot {
  return {
    height: BigInt(0),
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: new Uint8Array(),
  };
}
export const Snapshot = {
  typeUrl: "/tendermint.abci.Snapshot",
  encode(message: Snapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Snapshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunks = reader.uint32();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Snapshot {
    const obj = createBaseSnapshot();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.format)) obj.format = Number(object.format);
    if (isSet(object.chunks)) obj.chunks = Number(object.chunks);
    if (isSet(object.hash)) obj.hash = bytesFromBase64(object.hash);
    if (isSet(object.metadata)) obj.metadata = bytesFromBase64(object.metadata);
    return obj;
  },
  toJSON(message: Snapshot): JsonSafe<Snapshot> {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.format !== undefined && (obj.format = Math.round(message.format));
    message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Snapshot>, I>>(object: I): Snapshot {
    const message = createBaseSnapshot();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SnapshotAmino): Snapshot {
    const message = createBaseSnapshot();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    }
    if (object.chunks !== undefined && object.chunks !== null) {
      message.chunks = object.chunks;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },
  toAmino(message: Snapshot): SnapshotAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.format = message.format === 0 ? undefined : message.format;
    obj.chunks = message.chunks === 0 ? undefined : message.chunks;
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: SnapshotAminoMsg): Snapshot {
    return Snapshot.fromAmino(object.value);
  },
};
