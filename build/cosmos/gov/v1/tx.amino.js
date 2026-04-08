"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
/* eslint-disable */
const gov_js_1 = require("./gov.js");
const helpers_js_1 = require("../../../helpers.js");
exports.AminoConverter = {
    "/cosmos.gov.v1.MsgSubmitProposal": {
        aminoType: "cosmos-sdk/v1/MsgSubmitProposal",
        toAmino: ({ messages, initialDeposit, proposer, metadata, title, summary, expedited, }) => {
            return {
                messages: messages.map((el0) => ({
                    type_url: el0.typeUrl,
                    value: el0.value,
                })),
                initial_deposit: initialDeposit.map((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
                proposer,
                metadata,
                title,
                summary,
                expedited: (0, helpers_js_1.omitDefault)(expedited),
            };
        },
        fromAmino: ({ messages, initial_deposit, proposer, metadata, title, summary, expedited, }) => {
            return {
                messages: messages.map?.((el0) => ({
                    typeUrl: el0.type_url,
                    value: el0.value,
                })),
                initialDeposit: initial_deposit.map?.((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
                proposer,
                metadata,
                title,
                summary,
                expedited,
            };
        },
    },
    "/cosmos.gov.v1.MsgExecLegacyContent": {
        aminoType: "cosmos-sdk/v1/MsgExecLegacyContent",
        toAmino: ({ content, authority }) => {
            return {
                content: {
                    type_url: content.typeUrl,
                    value: content.value,
                },
                authority,
            };
        },
        fromAmino: ({ content, authority }) => {
            return {
                content: content == null
                    ? content
                    : {
                        typeUrl: content.type_url,
                        value: content.value,
                    },
                authority,
            };
        },
    },
    "/cosmos.gov.v1.MsgVote": {
        aminoType: "cosmos-sdk/v1/MsgVote",
        toAmino: ({ proposalId, voter, option, metadata }) => {
            return {
                proposal_id: proposalId?.toString?.(),
                voter,
                option,
                metadata,
            };
        },
        fromAmino: ({ proposal_id, voter, option, metadata }) => {
            return {
                proposalId: proposal_id == null ? proposal_id : BigInt(proposal_id),
                voter,
                option: option == null ? option : (0, gov_js_1.voteOptionFromJSON)(option),
                metadata,
            };
        },
    },
    "/cosmos.gov.v1.MsgVoteWeighted": {
        aminoType: "cosmos-sdk/v1/MsgVoteWeighted",
        toAmino: ({ proposalId, voter, options, metadata, }) => {
            return {
                proposal_id: proposalId?.toString?.(),
                voter,
                options: options.map((el0) => ({
                    option: el0.option,
                    weight: el0.weight,
                })),
                metadata,
            };
        },
        fromAmino: ({ proposal_id, voter, options, metadata, }) => {
            return {
                proposalId: proposal_id == null ? proposal_id : BigInt(proposal_id),
                voter,
                options: options.map?.((el0) => ({
                    option: el0.option == null ? el0.option : (0, gov_js_1.voteOptionFromJSON)(el0.option),
                    weight: el0.weight,
                })),
                metadata,
            };
        },
    },
    "/cosmos.gov.v1.MsgDeposit": {
        aminoType: "cosmos-sdk/v1/MsgDeposit",
        toAmino: ({ proposalId, depositor, amount }) => {
            return {
                proposal_id: proposalId?.toString?.(),
                depositor,
                amount: amount.map((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
            };
        },
        fromAmino: ({ proposal_id, depositor, amount }) => {
            return {
                proposalId: proposal_id == null ? proposal_id : BigInt(proposal_id),
                depositor,
                amount: amount.map?.((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
            };
        },
    },
    "/cosmos.gov.v1.MsgUpdateParams": {
        aminoType: "cosmos-sdk/x/gov/v1/MsgUpdateParams",
        toAmino: ({ authority, params }) => {
            return {
                authority,
                params: {
                    min_deposit: params.minDeposit.map((el0) => ({
                        denom: el0.denom,
                        amount: el0.amount,
                    })),
                    max_deposit_period: (params.maxDepositPeriod * 1_000_000_000).toString(),
                    voting_period: (params.votingPeriod * 1_000_000_000).toString(),
                    quorum: params.quorum,
                    threshold: params.threshold,
                    veto_threshold: params.vetoThreshold,
                    min_initial_deposit_ratio: params.minInitialDepositRatio,
                    proposal_cancel_ratio: params.proposalCancelRatio,
                    proposal_cancel_dest: params.proposalCancelDest,
                    expedited_voting_period: (params.expeditedVotingPeriod * 1_000_000_000).toString(),
                    expedited_threshold: params.expeditedThreshold,
                    expedited_min_deposit: params.expeditedMinDeposit.map((el0) => ({
                        denom: el0.denom,
                        amount: el0.amount,
                    })),
                    burn_vote_quorum: (0, helpers_js_1.omitDefault)(params.burnVoteQuorum),
                    burn_proposal_deposit_prevote: (0, helpers_js_1.omitDefault)(params.burnProposalDepositPrevote),
                    burn_vote_veto: (0, helpers_js_1.omitDefault)(params.burnVoteVeto),
                },
            };
        },
        fromAmino: ({ authority, params }) => {
            return {
                authority,
                params: params == null
                    ? params
                    : {
                        minDeposit: params.min_deposit.map?.((el1) => ({
                            denom: el1.denom,
                            amount: el1.amount,
                        })),
                        maxDepositPeriod: params.max_deposit_period == null
                            ? params.max_deposit_period
                            : {
                                seconds: BigInt(Math.floor(parseInt(params.max_deposit_period) / 1_000_000_000)),
                                nanos: parseInt(params.max_deposit_period) % 1_000_000_000,
                            },
                        votingPeriod: params.voting_period == null
                            ? params.voting_period
                            : {
                                seconds: BigInt(Math.floor(parseInt(params.voting_period) / 1_000_000_000)),
                                nanos: parseInt(params.voting_period) % 1_000_000_000,
                            },
                        quorum: params.quorum,
                        threshold: params.threshold,
                        vetoThreshold: params.veto_threshold,
                        minInitialDepositRatio: params.min_initial_deposit_ratio,
                        proposalCancelRatio: params.proposal_cancel_ratio,
                        proposalCancelDest: params.proposal_cancel_dest,
                        expeditedVotingPeriod: params.expedited_voting_period == null
                            ? params.expedited_voting_period
                            : {
                                seconds: BigInt(Math.floor(parseInt(params.expedited_voting_period) / 1_000_000_000)),
                                nanos: parseInt(params.expedited_voting_period) % 1_000_000_000,
                            },
                        expeditedThreshold: params.expedited_threshold,
                        expeditedMinDeposit: params.expedited_min_deposit.map?.((el1) => ({
                            denom: el1.denom,
                            amount: el1.amount,
                        })),
                        burnVoteQuorum: params.burn_vote_quorum,
                        burnProposalDepositPrevote: params.burn_proposal_deposit_prevote,
                        burnVoteVeto: params.burn_vote_veto,
                    },
            };
        },
    },
    "/cosmos.gov.v1.MsgCancelProposal": {
        aminoType: "cosmos-sdk/v1/MsgCancelProposal",
        toAmino: ({ proposalId, proposer }) => {
            return {
                proposal_id: proposalId?.toString?.(),
                proposer,
            };
        },
        fromAmino: ({ proposal_id, proposer }) => {
            return {
                proposalId: proposal_id == null ? proposal_id : BigInt(proposal_id),
                proposer,
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map