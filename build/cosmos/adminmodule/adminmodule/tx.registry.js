"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/cosmos.adminmodule.adminmodule.MsgDeleteAdmin", tx_js_1.MsgDeleteAdmin],
    ["/cosmos.adminmodule.adminmodule.MsgAddAdmin", tx_js_1.MsgAddAdmin],
    ["/cosmos.adminmodule.adminmodule.MsgSubmitProposal", tx_js_1.MsgSubmitProposal],
    ["/cosmos.adminmodule.adminmodule.MsgSubmitProposalLegacy", tx_js_1.MsgSubmitProposalLegacy],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        deleteAdmin(value) {
            return {
                typeUrl: "/cosmos.adminmodule.adminmodule.MsgDeleteAdmin",
                value: tx_js_1.MsgDeleteAdmin.encode(value).finish(),
            };
        },
        addAdmin(value) {
            return {
                typeUrl: "/cosmos.adminmodule.adminmodule.MsgAddAdmin",
                value: tx_js_1.MsgAddAdmin.encode(value).finish(),
            };
        },
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposal",
                value: tx_js_1.MsgSubmitProposal.encode(value).finish(),
            };
        },
        submitProposalLegacy(value) {
            return {
                typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposalLegacy",
                value: tx_js_1.MsgSubmitProposalLegacy.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        deleteAdmin(value) {
            return {
                typeUrl: "/cosmos.adminmodule.adminmodule.MsgDeleteAdmin",
                value,
            };
        },
        addAdmin(value) {
            return {
                typeUrl: "/cosmos.adminmodule.adminmodule.MsgAddAdmin",
                value,
            };
        },
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposal",
                value,
            };
        },
        submitProposalLegacy(value) {
            return {
                typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposalLegacy",
                value,
            };
        },
    },
    toJSON: {
        deleteAdmin(value) {
            return {
                typeUrl: "/cosmos.adminmodule.adminmodule.MsgDeleteAdmin",
                value: tx_js_1.MsgDeleteAdmin.toJSON(value),
            };
        },
        addAdmin(value) {
            return {
                typeUrl: "/cosmos.adminmodule.adminmodule.MsgAddAdmin",
                value: tx_js_1.MsgAddAdmin.toJSON(value),
            };
        },
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposal",
                value: tx_js_1.MsgSubmitProposal.toJSON(value),
            };
        },
        submitProposalLegacy(value) {
            return {
                typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposalLegacy",
                value: tx_js_1.MsgSubmitProposalLegacy.toJSON(value),
            };
        },
    },
    fromJSON: {
        deleteAdmin(value) {
            return {
                typeUrl: "/cosmos.adminmodule.adminmodule.MsgDeleteAdmin",
                value: tx_js_1.MsgDeleteAdmin.fromJSON(value),
            };
        },
        addAdmin(value) {
            return {
                typeUrl: "/cosmos.adminmodule.adminmodule.MsgAddAdmin",
                value: tx_js_1.MsgAddAdmin.fromJSON(value),
            };
        },
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposal",
                value: tx_js_1.MsgSubmitProposal.fromJSON(value),
            };
        },
        submitProposalLegacy(value) {
            return {
                typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposalLegacy",
                value: tx_js_1.MsgSubmitProposalLegacy.fromJSON(value),
            };
        },
    },
    fromPartial: {
        deleteAdmin(value) {
            return {
                typeUrl: "/cosmos.adminmodule.adminmodule.MsgDeleteAdmin",
                value: tx_js_1.MsgDeleteAdmin.fromPartial(value),
            };
        },
        addAdmin(value) {
            return {
                typeUrl: "/cosmos.adminmodule.adminmodule.MsgAddAdmin",
                value: tx_js_1.MsgAddAdmin.fromPartial(value),
            };
        },
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposal",
                value: tx_js_1.MsgSubmitProposal.fromPartial(value),
            };
        },
        submitProposalLegacy(value) {
            return {
                typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposalLegacy",
                value: tx_js_1.MsgSubmitProposalLegacy.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map