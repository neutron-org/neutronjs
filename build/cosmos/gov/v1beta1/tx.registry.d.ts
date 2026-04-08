import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSubmitProposal, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        submitProposal(value: MsgSubmitProposal): {
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
    };
    withTypeUrl: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: MsgSubmitProposal;
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
    };
    toJSON: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: {
                content?: {
                    typeUrl: string;
                    value: string;
                };
                initialDeposit: {
                    denom: string;
                    amount: string;
                }[];
                proposer: string;
            };
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: {
                proposalId: string;
                voter: string;
                option: import("./gov.js").VoteOption;
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
    };
    fromJSON: {
        submitProposal(value: any): {
            typeUrl: string;
            value: MsgSubmitProposal;
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
    };
    fromPartial: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: MsgSubmitProposal;
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
    };
};
