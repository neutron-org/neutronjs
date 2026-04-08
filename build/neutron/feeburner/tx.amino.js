"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/neutron.feeburner.MsgUpdateParams": {
        aminoType: "feeburner/MsgUpdateParams",
        toAmino: ({ authority, params }) => {
            return {
                authority,
                params: {
                    neutron_denom: params.neutronDenom,
                    reserve_address: params.reserveAddress,
                    treasury_address: params.treasuryAddress,
                },
            };
        },
        fromAmino: ({ authority, params }) => {
            return {
                authority,
                params: params == null
                    ? params
                    : {
                        neutronDenom: params.neutron_denom,
                        reserveAddress: params.reserve_address,
                        treasuryAddress: params.treasury_address,
                    },
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map