"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
        aminoType: "cosmos-sdk/MsgVerifyInvariant",
        toAmino: ({ sender, invariantModuleName, invariantRoute, }) => {
            return {
                sender,
                invariant_module_name: invariantModuleName,
                invariant_route: invariantRoute,
            };
        },
        fromAmino: ({ sender, invariant_module_name, invariant_route, }) => {
            return {
                sender,
                invariantModuleName: invariant_module_name,
                invariantRoute: invariant_route,
            };
        },
    },
    "/cosmos.crisis.v1beta1.MsgUpdateParams": {
        aminoType: "cosmos-sdk/x/crisis/MsgUpdateParams",
        toAmino: ({ authority, constantFee }) => {
            return {
                authority,
                constant_fee: {
                    denom: constantFee.denom,
                    amount: constantFee.amount,
                },
            };
        },
        fromAmino: ({ authority, constant_fee }) => {
            return {
                authority,
                constantFee: constant_fee == null
                    ? constant_fee
                    : {
                        denom: constant_fee.denom,
                        amount: constant_fee.amount,
                    },
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map