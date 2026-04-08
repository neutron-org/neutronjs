"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/sdk.auction.v1.MsgAuctionBid", tx_js_1.MsgAuctionBid],
    ["/sdk.auction.v1.MsgUpdateParams", tx_js_1.MsgUpdateParams],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        auctionBid(value) {
            return {
                typeUrl: "/sdk.auction.v1.MsgAuctionBid",
                value: tx_js_1.MsgAuctionBid.encode(value).finish(),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/sdk.auction.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        auctionBid(value) {
            return {
                typeUrl: "/sdk.auction.v1.MsgAuctionBid",
                value,
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/sdk.auction.v1.MsgUpdateParams",
                value,
            };
        },
    },
    toJSON: {
        auctionBid(value) {
            return {
                typeUrl: "/sdk.auction.v1.MsgAuctionBid",
                value: tx_js_1.MsgAuctionBid.toJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/sdk.auction.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.toJSON(value),
            };
        },
    },
    fromJSON: {
        auctionBid(value) {
            return {
                typeUrl: "/sdk.auction.v1.MsgAuctionBid",
                value: tx_js_1.MsgAuctionBid.fromJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/sdk.auction.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromJSON(value),
            };
        },
    },
    fromPartial: {
        auctionBid(value) {
            return {
                typeUrl: "/sdk.auction.v1.MsgAuctionBid",
                value: tx_js_1.MsgAuctionBid.fromPartial(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/sdk.auction.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map