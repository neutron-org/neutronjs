"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/cosmos.gov.v1.MsgSubmitProposal", tx_js_1.MsgSubmitProposal],
    ["/cosmos.gov.v1.MsgExecLegacyContent", tx_js_1.MsgExecLegacyContent],
    ["/cosmos.gov.v1.MsgVote", tx_js_1.MsgVote],
    ["/cosmos.gov.v1.MsgVoteWeighted", tx_js_1.MsgVoteWeighted],
    ["/cosmos.gov.v1.MsgDeposit", tx_js_1.MsgDeposit],
    ["/cosmos.gov.v1.MsgUpdateParams", tx_js_1.MsgUpdateParams],
    ["/cosmos.gov.v1.MsgCancelProposal", tx_js_1.MsgCancelProposal],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
                value: tx_js_1.MsgSubmitProposal.encode(value).finish(),
            };
        },
        execLegacyContent(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
                value: tx_js_1.MsgExecLegacyContent.encode(value).finish(),
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVote",
                value: tx_js_1.MsgVote.encode(value).finish(),
            };
        },
        voteWeighted(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
                value: tx_js_1.MsgVoteWeighted.encode(value).finish(),
            };
        },
        deposit(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgDeposit",
                value: tx_js_1.MsgDeposit.encode(value).finish(),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.encode(value).finish(),
            };
        },
        cancelProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgCancelProposal",
                value: tx_js_1.MsgCancelProposal.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
                value,
            };
        },
        execLegacyContent(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
                value,
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVote",
                value,
            };
        },
        voteWeighted(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
                value,
            };
        },
        deposit(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgDeposit",
                value,
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
                value,
            };
        },
        cancelProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgCancelProposal",
                value,
            };
        },
    },
    toJSON: {
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
                value: tx_js_1.MsgSubmitProposal.toJSON(value),
            };
        },
        execLegacyContent(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
                value: tx_js_1.MsgExecLegacyContent.toJSON(value),
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVote",
                value: tx_js_1.MsgVote.toJSON(value),
            };
        },
        voteWeighted(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
                value: tx_js_1.MsgVoteWeighted.toJSON(value),
            };
        },
        deposit(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgDeposit",
                value: tx_js_1.MsgDeposit.toJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.toJSON(value),
            };
        },
        cancelProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgCancelProposal",
                value: tx_js_1.MsgCancelProposal.toJSON(value),
            };
        },
    },
    fromJSON: {
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
                value: tx_js_1.MsgSubmitProposal.fromJSON(value),
            };
        },
        execLegacyContent(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
                value: tx_js_1.MsgExecLegacyContent.fromJSON(value),
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVote",
                value: tx_js_1.MsgVote.fromJSON(value),
            };
        },
        voteWeighted(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
                value: tx_js_1.MsgVoteWeighted.fromJSON(value),
            };
        },
        deposit(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgDeposit",
                value: tx_js_1.MsgDeposit.fromJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromJSON(value),
            };
        },
        cancelProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgCancelProposal",
                value: tx_js_1.MsgCancelProposal.fromJSON(value),
            };
        },
    },
    fromPartial: {
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
                value: tx_js_1.MsgSubmitProposal.fromPartial(value),
            };
        },
        execLegacyContent(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
                value: tx_js_1.MsgExecLegacyContent.fromPartial(value),
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVote",
                value: tx_js_1.MsgVote.fromPartial(value),
            };
        },
        voteWeighted(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
                value: tx_js_1.MsgVoteWeighted.fromPartial(value),
            };
        },
        deposit(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgDeposit",
                value: tx_js_1.MsgDeposit.fromPartial(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromPartial(value),
            };
        },
        cancelProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgCancelProposal",
                value: tx_js_1.MsgCancelProposal.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map