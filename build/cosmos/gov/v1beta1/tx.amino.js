"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
/* eslint-disable */
const gov_js_1 = require("./gov.js");
const helpers_js_1 = require("../../../helpers.js");
exports.AminoConverter = {
    "/cosmos.gov.v1beta1.MsgSubmitProposal": {
        aminoType: "cosmos-sdk/MsgSubmitProposal",
        toAmino: ({ content, initialDeposit, proposer, }) => {
            return {
                content: {
                    type_url: content.typeUrl,
                    value: content.value,
                },
                initial_deposit: initialDeposit.map((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
                proposer,
            };
        },
        fromAmino: ({ content, initial_deposit, proposer, }) => {
            return {
                content: content == null
                    ? content
                    : {
                        typeUrl: content.type_url,
                        value: content.value,
                    },
                initialDeposit: initial_deposit.map?.((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
                proposer,
            };
        },
    },
    "/cosmos.gov.v1beta1.MsgVote": {
        aminoType: "cosmos-sdk/MsgVote",
        toAmino: ({ proposalId, voter, option }) => {
            return {
                proposal_id: (0, helpers_js_1.omitDefault)(proposalId)?.toString?.(),
                voter,
                option,
            };
        },
        fromAmino: ({ proposal_id, voter, option }) => {
            return {
                proposalId: proposal_id == null ? proposal_id : BigInt(proposal_id),
                voter,
                option: option == null ? option : (0, gov_js_1.voteOptionFromJSON)(option),
            };
        },
    },
    "/cosmos.gov.v1beta1.MsgVoteWeighted": {
        aminoType: "cosmos-sdk/MsgVoteWeighted",
        toAmino: ({ proposalId, voter, options }) => {
            return {
                proposal_id: proposalId?.toString?.(),
                voter,
                options: options.map((el0) => ({
                    option: el0.option,
                    weight: el0.weight,
                })),
            };
        },
        fromAmino: ({ proposal_id, voter, options }) => {
            return {
                proposalId: proposal_id == null ? proposal_id : BigInt(proposal_id),
                voter,
                options: options.map?.((el0) => ({
                    option: el0.option == null ? el0.option : (0, gov_js_1.voteOptionFromJSON)(el0.option),
                    weight: el0.weight,
                })),
            };
        },
    },
    "/cosmos.gov.v1beta1.MsgDeposit": {
        aminoType: "cosmos-sdk/MsgDeposit",
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
};
//# sourceMappingURL=tx.amino.js.map