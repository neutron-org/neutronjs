"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/cosmos.adminmodule.adminmodule.MsgDeleteAdmin": {
        aminoType: "adminmodule/MsgDeleteAdmin",
        toAmino: ({ creator, admin }) => {
            return {
                creator,
                admin,
            };
        },
        fromAmino: ({ creator, admin }) => {
            return {
                creator,
                admin,
            };
        },
    },
    "/cosmos.adminmodule.adminmodule.MsgAddAdmin": {
        aminoType: "adminmodule/MsgAddAdmin",
        toAmino: ({ creator, admin }) => {
            return {
                creator,
                admin,
            };
        },
        fromAmino: ({ creator, admin }) => {
            return {
                creator,
                admin,
            };
        },
    },
    "/cosmos.adminmodule.adminmodule.MsgSubmitProposal": {
        aminoType: "adminmodule/MsgSubmitProposal",
        toAmino: ({ messages, proposer }) => {
            return {
                messages: messages.map((el0) => ({
                    type_url: el0.typeUrl,
                    value: el0.value,
                })),
                proposer,
            };
        },
        fromAmino: ({ messages, proposer }) => {
            return {
                messages: messages.map?.((el0) => ({
                    typeUrl: el0.type_url,
                    value: el0.value,
                })),
                proposer,
            };
        },
    },
    "/cosmos.adminmodule.adminmodule.MsgSubmitProposalLegacy": {
        aminoType: "adminmodule/MsgSubmitProposalLegacy",
        toAmino: ({ content, proposer }) => {
            return {
                content: {
                    type_url: content.typeUrl,
                    value: content.value,
                },
                proposer,
            };
        },
        fromAmino: ({ content, proposer, }) => {
            return {
                content: content == null
                    ? content
                    : {
                        typeUrl: content.type_url,
                        value: content.value,
                    },
                proposer,
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map