"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../../helpers.js");
exports.AminoConverter = {
    "/cosmos.slashing.v1beta1.MsgUnjail": {
        aminoType: "cosmos-sdk/MsgUnjail",
        toAmino: ({ validatorAddr }) => {
            return {
                validator_addr: validatorAddr,
            };
        },
        fromAmino: ({ validator_addr }) => {
            return {
                validatorAddr: validator_addr,
            };
        },
    },
    "/cosmos.slashing.v1beta1.MsgUpdateParams": {
        aminoType: "cosmos-sdk/x/slashing/MsgUpdateParams",
        toAmino: ({ authority, params }) => {
            return {
                authority,
                params: {
                    signed_blocks_window: (0, helpers_js_1.omitDefault)(params.signedBlocksWindow)?.toString?.(),
                    min_signed_per_window: params.minSignedPerWindow,
                    downtime_jail_duration: (params.downtimeJailDuration * 1_000_000_000).toString(),
                    slash_fraction_double_sign: params.slashFractionDoubleSign,
                    slash_fraction_downtime: params.slashFractionDowntime,
                },
            };
        },
        fromAmino: ({ authority, params }) => {
            return {
                authority,
                params: params == null
                    ? params
                    : {
                        signedBlocksWindow: params.signed_blocks_window == null
                            ? params.signed_blocks_window
                            : BigInt(params.signed_blocks_window),
                        minSignedPerWindow: params.min_signed_per_window,
                        downtimeJailDuration: params.downtime_jail_duration == null
                            ? params.downtime_jail_duration
                            : {
                                seconds: BigInt(Math.floor(parseInt(params.downtime_jail_duration) / 1_000_000_000)),
                                nanos: parseInt(params.downtime_jail_duration) % 1_000_000_000,
                            },
                        slashFractionDoubleSign: params.slash_fraction_double_sign,
                        slashFractionDowntime: params.slash_fraction_downtime,
                    },
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map