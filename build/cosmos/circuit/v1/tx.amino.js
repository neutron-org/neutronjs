"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
/* eslint-disable */
const types_js_1 = require("./types.js");
exports.AminoConverter = {
    "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker": {
        aminoType: "cosmos-sdk/MsgAuthorizeCircuitBreaker",
        toAmino: ({ granter, grantee, permissions, }) => {
            return {
                granter,
                grantee,
                permissions: {
                    level: permissions.level,
                    limit_type_urls: permissions.limitTypeUrls,
                },
            };
        },
        fromAmino: ({ granter, grantee, permissions, }) => {
            return {
                granter,
                grantee,
                permissions: permissions == null
                    ? permissions
                    : {
                        level: permissions.level == null
                            ? permissions.level
                            : (0, types_js_1.permissions_LevelFromJSON)(permissions.level),
                        limitTypeUrls: permissions.limit_type_urls,
                    },
            };
        },
    },
    "/cosmos.circuit.v1.MsgTripCircuitBreaker": {
        aminoType: "cosmos-sdk/MsgTripCircuitBreaker",
        toAmino: ({ authority, msgTypeUrls }) => {
            return {
                authority,
                msg_type_urls: msgTypeUrls,
            };
        },
        fromAmino: ({ authority, msg_type_urls, }) => {
            return {
                authority,
                msgTypeUrls: msg_type_urls,
            };
        },
    },
    "/cosmos.circuit.v1.MsgResetCircuitBreaker": {
        aminoType: "cosmos-sdk/MsgResetCircuitBreaker",
        toAmino: ({ authority, msgTypeUrls, }) => {
            return {
                authority,
                msg_type_urls: msgTypeUrls,
            };
        },
        fromAmino: ({ authority, msg_type_urls, }) => {
            return {
                authority,
                msgTypeUrls: msg_type_urls,
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map