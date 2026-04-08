import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit, MsgUpdateParams, MsgCancelProposal } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        execLegacyContent(value: MsgExecLegacyContent): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        voteWeighted(value: MsgVoteWeighted): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        cancelProposal(value: MsgCancelProposal): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        execLegacyContent(value: MsgExecLegacyContent): {
            typeUrl: string;
            value: MsgExecLegacyContent;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: MsgVote;
        };
        voteWeighted(value: MsgVoteWeighted): {
            typeUrl: string;
            value: MsgVoteWeighted;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        cancelProposal(value: MsgCancelProposal): {
            typeUrl: string;
            value: MsgCancelProposal;
        };
    };
    toJSON: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: {
                messages: {
                    typeUrl: string;
                    value: string;
                }[];
                initialDeposit: {
                    denom: string;
                    amount: string;
                }[];
                proposer: string;
                metadata: string;
                title: string;
                summary: string;
                expedited: boolean;
            };
        };
        execLegacyContent(value: MsgExecLegacyContent): {
            typeUrl: string;
            value: {
                content?: {
                    typeUrl: string;
                    value: string;
                };
                authority: string;
            };
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: {
                proposalId: string;
                voter: string;
                option: import("./gov.js").VoteOption;
                metadata: string;
            };
        };
        voteWeighted(value: MsgVoteWeighted): {
            typeUrl: string;
            value: {
                proposalId: string;
                voter: string;
                options: {
                    option: import("./gov.js").VoteOption;
                    weight: string;
                }[];
                metadata: string;
            };
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: {
                proposalId: string;
                depositor: string;
                amount: {
                    denom: string;
                    amount: string;
                }[];
            };
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: {
                authority: string;
                params: {
                    minDeposit: {
                        denom: string;
                        amount: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds: string;
                        nanos: number;
                    };
                    votingPeriod?: {
                        seconds: string;
                        nanos: number;
                    };
                    quorum: string;
                    threshold: string;
                    vetoThreshold: string;
                    minInitialDepositRatio: string;
                    proposalCancelRatio: string;
                    proposalCancelDest: string;
                    expeditedVotingPeriod?: {
                        seconds: string;
                        nanos: number;
                    };
                    expeditedThreshold: string;
                    expeditedMinDeposit: {
                        denom: string;
                        amount: string;
                    }[];
                    burnVoteQuorum: boolean;
                    burnProposalDepositPrevote: boolean;
                    burnVoteVeto: boolean;
                };
            };
        };
        cancelProposal(value: MsgCancelProposal): {
            typeUrl: string;
            value: {
                proposalId: string;
                proposer: string;
            };
        };
    };
    fromJSON: {
        submitProposal(value: any): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        execLegacyContent(value: any): {
            typeUrl: string;
            value: MsgExecLegacyContent;
        };
        vote(value: any): {
            typeUrl: string;
            value: MsgVote;
        };
        voteWeighted(value: any): {
            typeUrl: string;
            value: MsgVoteWeighted;
        };
        deposit(value: any): {
            typeUrl: string;
            value: MsgDeposit;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        cancelProposal(value: any): {
            typeUrl: string;
            value: MsgCancelProposal;
        };
    };
    fromPartial: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        execLegacyContent(value: MsgExecLegacyContent): {
            typeUrl: string;
            value: MsgExecLegacyContent;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: MsgVote;
        };
        voteWeighted(value: MsgVoteWeighted): {
            typeUrl: string;
            value: MsgVoteWeighted;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        cancelProposal(value: MsgCancelProposal): {
            typeUrl: string;
            value: MsgCancelProposal;
        };
    };
};
