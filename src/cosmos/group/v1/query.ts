/* eslint-disable */
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupPolicyInfo, GroupMember, Proposal, Vote, TallyResult } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.group.v1";
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequest {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponse {
  /** info is the GroupInfo of the group. */
  info?: GroupInfo;
}
/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */
export interface QueryGroupPolicyInfoRequest {
  /** address is the account address of the group policy. */
  address: string;
}
/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */
export interface QueryGroupPolicyInfoResponse {
  /** info is the GroupPolicyInfo of the group policy. */
  info?: GroupPolicyInfo;
}
/** QueryGroupMembersRequest is the Query/GroupMembers request type. */
export interface QueryGroupMembersRequest {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponse {
  /** members are the members of the group with given group_id. */
  members: GroupMember[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */
export interface QueryGroupsByAdminRequest {
  /** admin is the account address of a group's admin. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponse {
  /** groups are the groups info with the provided admin. */
  groups: GroupInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */
export interface QueryGroupPoliciesByGroupRequest {
  /** group_id is the unique ID of the group policy's group. */
  groupId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */
export interface QueryGroupPoliciesByGroupResponse {
  /** group_policies are the group policies info associated with the provided group. */
  groupPolicies: GroupPolicyInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */
export interface QueryGroupPoliciesByAdminRequest {
  /** admin is the admin address of the group policy. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */
export interface QueryGroupPoliciesByAdminResponse {
  /** group_policies are the group policies info with provided admin. */
  groupPolicies: GroupPolicyInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposalId: bigint;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponse {
  /** proposal is the proposal info. */
  proposal?: Proposal;
}
/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */
export interface QueryProposalsByGroupPolicyRequest {
  /** address is the account address of the group policy related to proposals. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */
export interface QueryProposalsByGroupPolicyResponse {
  /** proposals are the proposals with given group policy. */
  proposals: Proposal[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */
export interface QueryVoteByProposalVoterRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposalId: bigint;
  /** voter is a proposal voter account address. */
  voter: string;
}
/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */
export interface QueryVoteByProposalVoterResponse {
  /** vote is the vote with given proposal_id and voter. */
  vote?: Vote;
}
/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposalId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponse {
  /** votes are the list of votes for given proposal_id. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequest {
  /** voter is a proposal voter account address. */
  voter: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponse {
  /** votes are the list of votes by given voter. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */
export interface QueryGroupsByMemberRequest {
  /** address is the group member address. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */
export interface QueryGroupsByMemberResponse {
  /** groups are the groups info with the provided group member. */
  groups: GroupInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryTallyResultRequest is the Query/TallyResult request type. */
export interface QueryTallyResultRequest {
  /** proposal_id is the unique id of a proposal. */
  proposalId: bigint;
}
/** QueryTallyResultResponse is the Query/TallyResult response type. */
export interface QueryTallyResultResponse {
  /** tally defines the requested tally. */
  tally: TallyResult;
}
/**
 * QueryGroupsRequest is the Query/Groups request type.
 *
 * Since: cosmos-sdk 0.47.1
 */
export interface QueryGroupsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryGroupsResponse is the Query/Groups response type.
 *
 * Since: cosmos-sdk 0.47.1
 */
export interface QueryGroupsResponse {
  /** `groups` is all the groups present in state. */
  groups: GroupInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
function createBaseQueryGroupInfoRequest(): QueryGroupInfoRequest {
  return {
    groupId: BigInt(0),
  };
}
export const QueryGroupInfoRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupInfoRequest",
  encode(message: QueryGroupInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupInfoRequest {
    const obj = createBaseQueryGroupInfoRequest();
    if (isSet(object.groupId)) obj.groupId = BigInt(object.groupId.toString());
    return obj;
  },
  toJSON(message: QueryGroupInfoRequest): JsonSafe<QueryGroupInfoRequest> {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupInfoRequest>, I>>(object: I): QueryGroupInfoRequest {
    const message = createBaseQueryGroupInfoRequest();
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    return message;
  },
};
function createBaseQueryGroupInfoResponse(): QueryGroupInfoResponse {
  return {
    info: undefined,
  };
}
export const QueryGroupInfoResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupInfoResponse",
  encode(message: QueryGroupInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.info !== undefined) {
      GroupInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = GroupInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupInfoResponse {
    const obj = createBaseQueryGroupInfoResponse();
    if (isSet(object.info)) obj.info = GroupInfo.fromJSON(object.info);
    return obj;
  },
  toJSON(message: QueryGroupInfoResponse): JsonSafe<QueryGroupInfoResponse> {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info ? GroupInfo.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupInfoResponse>, I>>(object: I): QueryGroupInfoResponse {
    const message = createBaseQueryGroupInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = GroupInfo.fromPartial(object.info);
    }
    return message;
  },
};
function createBaseQueryGroupPolicyInfoRequest(): QueryGroupPolicyInfoRequest {
  return {
    address: "",
  };
}
export const QueryGroupPolicyInfoRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoRequest",
  encode(message: QueryGroupPolicyInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupPolicyInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPolicyInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupPolicyInfoRequest {
    const obj = createBaseQueryGroupPolicyInfoRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: QueryGroupPolicyInfoRequest): JsonSafe<QueryGroupPolicyInfoRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupPolicyInfoRequest>, I>>(
    object: I,
  ): QueryGroupPolicyInfoRequest {
    const message = createBaseQueryGroupPolicyInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
};
function createBaseQueryGroupPolicyInfoResponse(): QueryGroupPolicyInfoResponse {
  return {
    info: undefined,
  };
}
export const QueryGroupPolicyInfoResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoResponse",
  encode(message: QueryGroupPolicyInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.info !== undefined) {
      GroupPolicyInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupPolicyInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPolicyInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = GroupPolicyInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupPolicyInfoResponse {
    const obj = createBaseQueryGroupPolicyInfoResponse();
    if (isSet(object.info)) obj.info = GroupPolicyInfo.fromJSON(object.info);
    return obj;
  },
  toJSON(message: QueryGroupPolicyInfoResponse): JsonSafe<QueryGroupPolicyInfoResponse> {
    const obj: any = {};
    message.info !== undefined &&
      (obj.info = message.info ? GroupPolicyInfo.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupPolicyInfoResponse>, I>>(
    object: I,
  ): QueryGroupPolicyInfoResponse {
    const message = createBaseQueryGroupPolicyInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = GroupPolicyInfo.fromPartial(object.info);
    }
    return message;
  },
};
function createBaseQueryGroupMembersRequest(): QueryGroupMembersRequest {
  return {
    groupId: BigInt(0),
    pagination: undefined,
  };
}
export const QueryGroupMembersRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupMembersRequest",
  encode(message: QueryGroupMembersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupMembersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupMembersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupMembersRequest {
    const obj = createBaseQueryGroupMembersRequest();
    if (isSet(object.groupId)) obj.groupId = BigInt(object.groupId.toString());
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGroupMembersRequest): JsonSafe<QueryGroupMembersRequest> {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupMembersRequest>, I>>(
    object: I,
  ): QueryGroupMembersRequest {
    const message = createBaseQueryGroupMembersRequest();
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryGroupMembersResponse(): QueryGroupMembersResponse {
  return {
    members: [],
    pagination: undefined,
  };
}
export const QueryGroupMembersResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupMembersResponse",
  encode(message: QueryGroupMembersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.members) {
      GroupMember.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupMembersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupMembersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members.push(GroupMember.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupMembersResponse {
    const obj = createBaseQueryGroupMembersResponse();
    if (Array.isArray(object?.members)) obj.members = object.members.map((e: any) => GroupMember.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGroupMembersResponse): JsonSafe<QueryGroupMembersResponse> {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map((e) => (e ? GroupMember.toJSON(e) : undefined));
    } else {
      obj.members = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupMembersResponse>, I>>(
    object: I,
  ): QueryGroupMembersResponse {
    const message = createBaseQueryGroupMembersResponse();
    message.members = object.members?.map((e) => GroupMember.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryGroupsByAdminRequest(): QueryGroupsByAdminRequest {
  return {
    admin: "",
    pagination: undefined,
  };
}
export const QueryGroupsByAdminRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupsByAdminRequest",
  encode(message: QueryGroupsByAdminRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupsByAdminRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByAdminRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupsByAdminRequest {
    const obj = createBaseQueryGroupsByAdminRequest();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGroupsByAdminRequest): JsonSafe<QueryGroupsByAdminRequest> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupsByAdminRequest>, I>>(
    object: I,
  ): QueryGroupsByAdminRequest {
    const message = createBaseQueryGroupsByAdminRequest();
    message.admin = object.admin ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryGroupsByAdminResponse(): QueryGroupsByAdminResponse {
  return {
    groups: [],
    pagination: undefined,
  };
}
export const QueryGroupsByAdminResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupsByAdminResponse",
  encode(message: QueryGroupsByAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupsByAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupsByAdminResponse {
    const obj = createBaseQueryGroupsByAdminResponse();
    if (Array.isArray(object?.groups)) obj.groups = object.groups.map((e: any) => GroupInfo.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGroupsByAdminResponse): JsonSafe<QueryGroupsByAdminResponse> {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map((e) => (e ? GroupInfo.toJSON(e) : undefined));
    } else {
      obj.groups = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupsByAdminResponse>, I>>(
    object: I,
  ): QueryGroupsByAdminResponse {
    const message = createBaseQueryGroupsByAdminResponse();
    message.groups = object.groups?.map((e) => GroupInfo.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryGroupPoliciesByGroupRequest(): QueryGroupPoliciesByGroupRequest {
  return {
    groupId: BigInt(0),
    pagination: undefined,
  };
}
export const QueryGroupPoliciesByGroupRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupRequest",
  encode(
    message: QueryGroupPoliciesByGroupRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupPoliciesByGroupRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupPoliciesByGroupRequest {
    const obj = createBaseQueryGroupPoliciesByGroupRequest();
    if (isSet(object.groupId)) obj.groupId = BigInt(object.groupId.toString());
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGroupPoliciesByGroupRequest): JsonSafe<QueryGroupPoliciesByGroupRequest> {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupPoliciesByGroupRequest>, I>>(
    object: I,
  ): QueryGroupPoliciesByGroupRequest {
    const message = createBaseQueryGroupPoliciesByGroupRequest();
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryGroupPoliciesByGroupResponse(): QueryGroupPoliciesByGroupResponse {
  return {
    groupPolicies: [],
    pagination: undefined,
  };
}
export const QueryGroupPoliciesByGroupResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupResponse",
  encode(
    message: QueryGroupPoliciesByGroupResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.groupPolicies) {
      GroupPolicyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupPoliciesByGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupPoliciesByGroupResponse {
    const obj = createBaseQueryGroupPoliciesByGroupResponse();
    if (Array.isArray(object?.groupPolicies))
      obj.groupPolicies = object.groupPolicies.map((e: any) => GroupPolicyInfo.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGroupPoliciesByGroupResponse): JsonSafe<QueryGroupPoliciesByGroupResponse> {
    const obj: any = {};
    if (message.groupPolicies) {
      obj.groupPolicies = message.groupPolicies.map((e) => (e ? GroupPolicyInfo.toJSON(e) : undefined));
    } else {
      obj.groupPolicies = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupPoliciesByGroupResponse>, I>>(
    object: I,
  ): QueryGroupPoliciesByGroupResponse {
    const message = createBaseQueryGroupPoliciesByGroupResponse();
    message.groupPolicies = object.groupPolicies?.map((e) => GroupPolicyInfo.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryGroupPoliciesByAdminRequest(): QueryGroupPoliciesByAdminRequest {
  return {
    admin: "",
    pagination: undefined,
  };
}
export const QueryGroupPoliciesByAdminRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminRequest",
  encode(
    message: QueryGroupPoliciesByAdminRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupPoliciesByAdminRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByAdminRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupPoliciesByAdminRequest {
    const obj = createBaseQueryGroupPoliciesByAdminRequest();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGroupPoliciesByAdminRequest): JsonSafe<QueryGroupPoliciesByAdminRequest> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupPoliciesByAdminRequest>, I>>(
    object: I,
  ): QueryGroupPoliciesByAdminRequest {
    const message = createBaseQueryGroupPoliciesByAdminRequest();
    message.admin = object.admin ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryGroupPoliciesByAdminResponse(): QueryGroupPoliciesByAdminResponse {
  return {
    groupPolicies: [],
    pagination: undefined,
  };
}
export const QueryGroupPoliciesByAdminResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminResponse",
  encode(
    message: QueryGroupPoliciesByAdminResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.groupPolicies) {
      GroupPolicyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupPoliciesByAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupPoliciesByAdminResponse {
    const obj = createBaseQueryGroupPoliciesByAdminResponse();
    if (Array.isArray(object?.groupPolicies))
      obj.groupPolicies = object.groupPolicies.map((e: any) => GroupPolicyInfo.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGroupPoliciesByAdminResponse): JsonSafe<QueryGroupPoliciesByAdminResponse> {
    const obj: any = {};
    if (message.groupPolicies) {
      obj.groupPolicies = message.groupPolicies.map((e) => (e ? GroupPolicyInfo.toJSON(e) : undefined));
    } else {
      obj.groupPolicies = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupPoliciesByAdminResponse>, I>>(
    object: I,
  ): QueryGroupPoliciesByAdminResponse {
    const message = createBaseQueryGroupPoliciesByAdminResponse();
    message.groupPolicies = object.groupPolicies?.map((e) => GroupPolicyInfo.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    proposalId: BigInt(0),
  };
}
export const QueryProposalRequest = {
  typeUrl: "/cosmos.group.v1.QueryProposalRequest",
  encode(message: QueryProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalRequest {
    const obj = createBaseQueryProposalRequest();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: QueryProposalRequest): JsonSafe<QueryProposalRequest> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProposalRequest>, I>>(object: I): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
};
function createBaseQueryProposalResponse(): QueryProposalResponse {
  return {
    proposal: undefined,
  };
}
export const QueryProposalResponse = {
  typeUrl: "/cosmos.group.v1.QueryProposalResponse",
  encode(message: QueryProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalResponse {
    const obj = createBaseQueryProposalResponse();
    if (isSet(object.proposal)) obj.proposal = Proposal.fromJSON(object.proposal);
    return obj;
  },
  toJSON(message: QueryProposalResponse): JsonSafe<QueryProposalResponse> {
    const obj: any = {};
    message.proposal !== undefined &&
      (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProposalResponse>, I>>(object: I): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromPartial(object.proposal);
    }
    return message;
  },
};
function createBaseQueryProposalsByGroupPolicyRequest(): QueryProposalsByGroupPolicyRequest {
  return {
    address: "",
    pagination: undefined,
  };
}
export const QueryProposalsByGroupPolicyRequest = {
  typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyRequest",
  encode(
    message: QueryProposalsByGroupPolicyRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsByGroupPolicyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsByGroupPolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalsByGroupPolicyRequest {
    const obj = createBaseQueryProposalsByGroupPolicyRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryProposalsByGroupPolicyRequest): JsonSafe<QueryProposalsByGroupPolicyRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProposalsByGroupPolicyRequest>, I>>(
    object: I,
  ): QueryProposalsByGroupPolicyRequest {
    const message = createBaseQueryProposalsByGroupPolicyRequest();
    message.address = object.address ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryProposalsByGroupPolicyResponse(): QueryProposalsByGroupPolicyResponse {
  return {
    proposals: [],
    pagination: undefined,
  };
}
export const QueryProposalsByGroupPolicyResponse = {
  typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyResponse",
  encode(
    message: QueryProposalsByGroupPolicyResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsByGroupPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsByGroupPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalsByGroupPolicyResponse {
    const obj = createBaseQueryProposalsByGroupPolicyResponse();
    if (Array.isArray(object?.proposals))
      obj.proposals = object.proposals.map((e: any) => Proposal.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryProposalsByGroupPolicyResponse): JsonSafe<QueryProposalsByGroupPolicyResponse> {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) => (e ? Proposal.toJSON(e) : undefined));
    } else {
      obj.proposals = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProposalsByGroupPolicyResponse>, I>>(
    object: I,
  ): QueryProposalsByGroupPolicyResponse {
    const message = createBaseQueryProposalsByGroupPolicyResponse();
    message.proposals = object.proposals?.map((e) => Proposal.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryVoteByProposalVoterRequest(): QueryVoteByProposalVoterRequest {
  return {
    proposalId: BigInt(0),
    voter: "",
  };
}
export const QueryVoteByProposalVoterRequest = {
  typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterRequest",
  encode(
    message: QueryVoteByProposalVoterRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteByProposalVoterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteByProposalVoterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVoteByProposalVoterRequest {
    const obj = createBaseQueryVoteByProposalVoterRequest();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.voter)) obj.voter = String(object.voter);
    return obj;
  },
  toJSON(message: QueryVoteByProposalVoterRequest): JsonSafe<QueryVoteByProposalVoterRequest> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVoteByProposalVoterRequest>, I>>(
    object: I,
  ): QueryVoteByProposalVoterRequest {
    const message = createBaseQueryVoteByProposalVoterRequest();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.voter = object.voter ?? "";
    return message;
  },
};
function createBaseQueryVoteByProposalVoterResponse(): QueryVoteByProposalVoterResponse {
  return {
    vote: undefined,
  };
}
export const QueryVoteByProposalVoterResponse = {
  typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterResponse",
  encode(
    message: QueryVoteByProposalVoterResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteByProposalVoterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteByProposalVoterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVoteByProposalVoterResponse {
    const obj = createBaseQueryVoteByProposalVoterResponse();
    if (isSet(object.vote)) obj.vote = Vote.fromJSON(object.vote);
    return obj;
  },
  toJSON(message: QueryVoteByProposalVoterResponse): JsonSafe<QueryVoteByProposalVoterResponse> {
    const obj: any = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVoteByProposalVoterResponse>, I>>(
    object: I,
  ): QueryVoteByProposalVoterResponse {
    const message = createBaseQueryVoteByProposalVoterResponse();
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromPartial(object.vote);
    }
    return message;
  },
};
function createBaseQueryVotesByProposalRequest(): QueryVotesByProposalRequest {
  return {
    proposalId: BigInt(0),
    pagination: undefined,
  };
}
export const QueryVotesByProposalRequest = {
  typeUrl: "/cosmos.group.v1.QueryVotesByProposalRequest",
  encode(message: QueryVotesByProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesByProposalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVotesByProposalRequest {
    const obj = createBaseQueryVotesByProposalRequest();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryVotesByProposalRequest): JsonSafe<QueryVotesByProposalRequest> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVotesByProposalRequest>, I>>(
    object: I,
  ): QueryVotesByProposalRequest {
    const message = createBaseQueryVotesByProposalRequest();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryVotesByProposalResponse(): QueryVotesByProposalResponse {
  return {
    votes: [],
    pagination: undefined,
  };
}
export const QueryVotesByProposalResponse = {
  typeUrl: "/cosmos.group.v1.QueryVotesByProposalResponse",
  encode(message: QueryVotesByProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesByProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVotesByProposalResponse {
    const obj = createBaseQueryVotesByProposalResponse();
    if (Array.isArray(object?.votes)) obj.votes = object.votes.map((e: any) => Vote.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryVotesByProposalResponse): JsonSafe<QueryVotesByProposalResponse> {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVotesByProposalResponse>, I>>(
    object: I,
  ): QueryVotesByProposalResponse {
    const message = createBaseQueryVotesByProposalResponse();
    message.votes = object.votes?.map((e) => Vote.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryVotesByVoterRequest(): QueryVotesByVoterRequest {
  return {
    voter: "",
    pagination: undefined,
  };
}
export const QueryVotesByVoterRequest = {
  typeUrl: "/cosmos.group.v1.QueryVotesByVoterRequest",
  encode(message: QueryVotesByVoterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesByVoterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByVoterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVotesByVoterRequest {
    const obj = createBaseQueryVotesByVoterRequest();
    if (isSet(object.voter)) obj.voter = String(object.voter);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryVotesByVoterRequest): JsonSafe<QueryVotesByVoterRequest> {
    const obj: any = {};
    message.voter !== undefined && (obj.voter = message.voter);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVotesByVoterRequest>, I>>(
    object: I,
  ): QueryVotesByVoterRequest {
    const message = createBaseQueryVotesByVoterRequest();
    message.voter = object.voter ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryVotesByVoterResponse(): QueryVotesByVoterResponse {
  return {
    votes: [],
    pagination: undefined,
  };
}
export const QueryVotesByVoterResponse = {
  typeUrl: "/cosmos.group.v1.QueryVotesByVoterResponse",
  encode(message: QueryVotesByVoterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesByVoterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByVoterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVotesByVoterResponse {
    const obj = createBaseQueryVotesByVoterResponse();
    if (Array.isArray(object?.votes)) obj.votes = object.votes.map((e: any) => Vote.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryVotesByVoterResponse): JsonSafe<QueryVotesByVoterResponse> {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVotesByVoterResponse>, I>>(
    object: I,
  ): QueryVotesByVoterResponse {
    const message = createBaseQueryVotesByVoterResponse();
    message.votes = object.votes?.map((e) => Vote.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryGroupsByMemberRequest(): QueryGroupsByMemberRequest {
  return {
    address: "",
    pagination: undefined,
  };
}
export const QueryGroupsByMemberRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupsByMemberRequest",
  encode(message: QueryGroupsByMemberRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupsByMemberRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupsByMemberRequest {
    const obj = createBaseQueryGroupsByMemberRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGroupsByMemberRequest): JsonSafe<QueryGroupsByMemberRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupsByMemberRequest>, I>>(
    object: I,
  ): QueryGroupsByMemberRequest {
    const message = createBaseQueryGroupsByMemberRequest();
    message.address = object.address ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryGroupsByMemberResponse(): QueryGroupsByMemberResponse {
  return {
    groups: [],
    pagination: undefined,
  };
}
export const QueryGroupsByMemberResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupsByMemberResponse",
  encode(message: QueryGroupsByMemberResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupsByMemberResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupsByMemberResponse {
    const obj = createBaseQueryGroupsByMemberResponse();
    if (Array.isArray(object?.groups)) obj.groups = object.groups.map((e: any) => GroupInfo.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGroupsByMemberResponse): JsonSafe<QueryGroupsByMemberResponse> {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map((e) => (e ? GroupInfo.toJSON(e) : undefined));
    } else {
      obj.groups = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupsByMemberResponse>, I>>(
    object: I,
  ): QueryGroupsByMemberResponse {
    const message = createBaseQueryGroupsByMemberResponse();
    message.groups = object.groups?.map((e) => GroupInfo.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryTallyResultRequest(): QueryTallyResultRequest {
  return {
    proposalId: BigInt(0),
  };
}
export const QueryTallyResultRequest = {
  typeUrl: "/cosmos.group.v1.QueryTallyResultRequest",
  encode(message: QueryTallyResultRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTallyResultRequest {
    const obj = createBaseQueryTallyResultRequest();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: QueryTallyResultRequest): JsonSafe<QueryTallyResultRequest> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTallyResultRequest>, I>>(object: I): QueryTallyResultRequest {
    const message = createBaseQueryTallyResultRequest();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
};
function createBaseQueryTallyResultResponse(): QueryTallyResultResponse {
  return {
    tally: TallyResult.fromPartial({}),
  };
}
export const QueryTallyResultResponse = {
  typeUrl: "/cosmos.group.v1.QueryTallyResultResponse",
  encode(message: QueryTallyResultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tally !== undefined) {
      TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tally = TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTallyResultResponse {
    const obj = createBaseQueryTallyResultResponse();
    if (isSet(object.tally)) obj.tally = TallyResult.fromJSON(object.tally);
    return obj;
  },
  toJSON(message: QueryTallyResultResponse): JsonSafe<QueryTallyResultResponse> {
    const obj: any = {};
    message.tally !== undefined &&
      (obj.tally = message.tally ? TallyResult.toJSON(message.tally) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTallyResultResponse>, I>>(
    object: I,
  ): QueryTallyResultResponse {
    const message = createBaseQueryTallyResultResponse();
    if (object.tally !== undefined && object.tally !== null) {
      message.tally = TallyResult.fromPartial(object.tally);
    }
    return message;
  },
};
function createBaseQueryGroupsRequest(): QueryGroupsRequest {
  return {
    pagination: undefined,
  };
}
export const QueryGroupsRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupsRequest",
  encode(message: QueryGroupsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupsRequest {
    const obj = createBaseQueryGroupsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGroupsRequest): JsonSafe<QueryGroupsRequest> {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupsRequest>, I>>(object: I): QueryGroupsRequest {
    const message = createBaseQueryGroupsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryGroupsResponse(): QueryGroupsResponse {
  return {
    groups: [],
    pagination: undefined,
  };
}
export const QueryGroupsResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupsResponse",
  encode(message: QueryGroupsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupsResponse {
    const obj = createBaseQueryGroupsResponse();
    if (Array.isArray(object?.groups)) obj.groups = object.groups.map((e: any) => GroupInfo.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGroupsResponse): JsonSafe<QueryGroupsResponse> {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map((e) => (e ? GroupInfo.toJSON(e) : undefined));
    } else {
      obj.groups = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupsResponse>, I>>(object: I): QueryGroupsResponse {
    const message = createBaseQueryGroupsResponse();
    message.groups = object.groups?.map((e) => GroupInfo.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
