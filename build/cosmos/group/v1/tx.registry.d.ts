import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createGroup(value: MsgCreateGroup): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateGroupMembers(value: MsgUpdateGroupMembers): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateGroupAdmin(value: MsgUpdateGroupAdmin): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateGroupMetadata(value: MsgUpdateGroupMetadata): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        createGroupPolicy(value: MsgCreateGroupPolicy): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        createGroupWithPolicy(value: MsgCreateGroupWithPolicy): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateGroupPolicyAdmin(value: MsgUpdateGroupPolicyAdmin): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateGroupPolicyDecisionPolicy(value: MsgUpdateGroupPolicyDecisionPolicy): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateGroupPolicyMetadata(value: MsgUpdateGroupPolicyMetadata): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        withdrawProposal(value: MsgWithdrawProposal): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        exec(value: MsgExec): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        leaveGroup(value: MsgLeaveGroup): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        createGroup(value: MsgCreateGroup): {
            typeUrl: string;
            value: MsgCreateGroup;
        };
        updateGroupMembers(value: MsgUpdateGroupMembers): {
            typeUrl: string;
            value: MsgUpdateGroupMembers;
        };
        updateGroupAdmin(value: MsgUpdateGroupAdmin): {
            typeUrl: string;
            value: MsgUpdateGroupAdmin;
        };
        updateGroupMetadata(value: MsgUpdateGroupMetadata): {
            typeUrl: string;
            value: MsgUpdateGroupMetadata;
        };
        createGroupPolicy(value: MsgCreateGroupPolicy): {
            typeUrl: string;
            value: MsgCreateGroupPolicy;
        };
        createGroupWithPolicy(value: MsgCreateGroupWithPolicy): {
            typeUrl: string;
            value: MsgCreateGroupWithPolicy;
        };
        updateGroupPolicyAdmin(value: MsgUpdateGroupPolicyAdmin): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyAdmin;
        };
        updateGroupPolicyDecisionPolicy(value: MsgUpdateGroupPolicyDecisionPolicy): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyDecisionPolicy;
        };
        updateGroupPolicyMetadata(value: MsgUpdateGroupPolicyMetadata): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyMetadata;
        };
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        withdrawProposal(value: MsgWithdrawProposal): {
            typeUrl: string;
            value: MsgWithdrawProposal;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: MsgVote;
        };
        exec(value: MsgExec): {
            typeUrl: string;
            value: MsgExec;
        };
        leaveGroup(value: MsgLeaveGroup): {
            typeUrl: string;
            value: MsgLeaveGroup;
        };
    };
    toJSON: {
        createGroup(value: MsgCreateGroup): {
            typeUrl: string;
            value: {
                admin: string;
                members: {
                    address: string;
                    weight: string;
                    metadata: string;
                }[];
                metadata: string;
            };
        };
        updateGroupMembers(value: MsgUpdateGroupMembers): {
            typeUrl: string;
            value: {
                admin: string;
                groupId: string;
                memberUpdates: {
                    address: string;
                    weight: string;
                    metadata: string;
                }[];
            };
        };
        updateGroupAdmin(value: MsgUpdateGroupAdmin): {
            typeUrl: string;
            value: {
                admin: string;
                groupId: string;
                newAdmin: string;
            };
        };
        updateGroupMetadata(value: MsgUpdateGroupMetadata): {
            typeUrl: string;
            value: {
                admin: string;
                groupId: string;
                metadata: string;
            };
        };
        createGroupPolicy(value: MsgCreateGroupPolicy): {
            typeUrl: string;
            value: {
                admin: string;
                groupId: string;
                metadata: string;
                decisionPolicy?: {
                    typeUrl: string;
                    value: string;
                };
            };
        };
        createGroupWithPolicy(value: MsgCreateGroupWithPolicy): {
            typeUrl: string;
            value: {
                admin: string;
                members: {
                    address: string;
                    weight: string;
                    metadata: string;
                }[];
                groupMetadata: string;
                groupPolicyMetadata: string;
                groupPolicyAsAdmin: boolean;
                decisionPolicy?: {
                    typeUrl: string;
                    value: string;
                };
            };
        };
        updateGroupPolicyAdmin(value: MsgUpdateGroupPolicyAdmin): {
            typeUrl: string;
            value: {
                admin: string;
                groupPolicyAddress: string;
                newAdmin: string;
            };
        };
        updateGroupPolicyDecisionPolicy(value: MsgUpdateGroupPolicyDecisionPolicy): {
            typeUrl: string;
            value: {
                admin: string;
                groupPolicyAddress: string;
                decisionPolicy?: {
                    typeUrl: string;
                    value: string;
                };
            };
        };
        updateGroupPolicyMetadata(value: MsgUpdateGroupPolicyMetadata): {
            typeUrl: string;
            value: {
                admin: string;
                groupPolicyAddress: string;
                metadata: string;
            };
        };
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: {
                groupPolicyAddress: string;
                proposers: string[];
                metadata: string;
                messages: {
                    typeUrl: string;
                    value: string;
                }[];
                exec: import("./tx.js").Exec;
                title: string;
                summary: string;
            };
        };
        withdrawProposal(value: MsgWithdrawProposal): {
            typeUrl: string;
            value: {
                proposalId: string;
                address: string;
            };
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: {
                proposalId: string;
                voter: string;
                option: import("./types.js").VoteOption;
                metadata: string;
                exec: import("./tx.js").Exec;
            };
        };
        exec(value: MsgExec): {
            typeUrl: string;
            value: {
                proposalId: string;
                executor: string;
            };
        };
        leaveGroup(value: MsgLeaveGroup): {
            typeUrl: string;
            value: {
                address: string;
                groupId: string;
            };
        };
    };
    fromJSON: {
        createGroup(value: any): {
            typeUrl: string;
            value: MsgCreateGroup;
        };
        updateGroupMembers(value: any): {
            typeUrl: string;
            value: MsgUpdateGroupMembers;
        };
        updateGroupAdmin(value: any): {
            typeUrl: string;
            value: MsgUpdateGroupAdmin;
        };
        updateGroupMetadata(value: any): {
            typeUrl: string;
            value: MsgUpdateGroupMetadata;
        };
        createGroupPolicy(value: any): {
            typeUrl: string;
            value: MsgCreateGroupPolicy;
        };
        createGroupWithPolicy(value: any): {
            typeUrl: string;
            value: MsgCreateGroupWithPolicy;
        };
        updateGroupPolicyAdmin(value: any): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyAdmin;
        };
        updateGroupPolicyDecisionPolicy(value: any): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyDecisionPolicy;
        };
        updateGroupPolicyMetadata(value: any): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyMetadata;
        };
        submitProposal(value: any): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        withdrawProposal(value: any): {
            typeUrl: string;
            value: MsgWithdrawProposal;
        };
        vote(value: any): {
            typeUrl: string;
            value: MsgVote;
        };
        exec(value: any): {
            typeUrl: string;
            value: MsgExec;
        };
        leaveGroup(value: any): {
            typeUrl: string;
            value: MsgLeaveGroup;
        };
    };
    fromPartial: {
        createGroup(value: MsgCreateGroup): {
            typeUrl: string;
            value: MsgCreateGroup;
        };
        updateGroupMembers(value: MsgUpdateGroupMembers): {
            typeUrl: string;
            value: MsgUpdateGroupMembers;
        };
        updateGroupAdmin(value: MsgUpdateGroupAdmin): {
            typeUrl: string;
            value: MsgUpdateGroupAdmin;
        };
        updateGroupMetadata(value: MsgUpdateGroupMetadata): {
            typeUrl: string;
            value: MsgUpdateGroupMetadata;
        };
        createGroupPolicy(value: MsgCreateGroupPolicy): {
            typeUrl: string;
            value: MsgCreateGroupPolicy;
        };
        createGroupWithPolicy(value: MsgCreateGroupWithPolicy): {
            typeUrl: string;
            value: MsgCreateGroupWithPolicy;
        };
        updateGroupPolicyAdmin(value: MsgUpdateGroupPolicyAdmin): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyAdmin;
        };
        updateGroupPolicyDecisionPolicy(value: MsgUpdateGroupPolicyDecisionPolicy): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyDecisionPolicy;
        };
        updateGroupPolicyMetadata(value: MsgUpdateGroupPolicyMetadata): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyMetadata;
        };
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        withdrawProposal(value: MsgWithdrawProposal): {
            typeUrl: string;
            value: MsgWithdrawProposal;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: MsgVote;
        };
        exec(value: MsgExec): {
            typeUrl: string;
            value: MsgExec;
        };
        leaveGroup(value: MsgLeaveGroup): {
            typeUrl: string;
            value: MsgLeaveGroup;
        };
    };
};
