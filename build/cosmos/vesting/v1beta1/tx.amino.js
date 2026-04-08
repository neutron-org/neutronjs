"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../../helpers.js");
exports.AminoConverter = {
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
        aminoType: "cosmos-sdk/MsgCreateVestingAccount",
        toAmino: ({ fromAddress, toAddress, amount, endTime, delayed, }) => {
            return {
                from_address: fromAddress,
                to_address: toAddress,
                amount: amount.map((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
                end_time: (0, helpers_js_1.omitDefault)(endTime)?.toString?.(),
                delayed: (0, helpers_js_1.omitDefault)(delayed),
            };
        },
        fromAmino: ({ from_address, to_address, amount, end_time, delayed, }) => {
            return {
                fromAddress: from_address,
                toAddress: to_address,
                amount: amount.map?.((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
                endTime: end_time == null ? end_time : BigInt(end_time),
                delayed,
            };
        },
    },
    "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
        aminoType: "cosmos-sdk/MsgCreatePermLockedAccount",
        toAmino: ({ fromAddress, toAddress, amount, }) => {
            return {
                from_address: fromAddress,
                to_address: toAddress,
                amount: amount.map((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
            };
        },
        fromAmino: ({ from_address, to_address, amount, }) => {
            return {
                fromAddress: from_address,
                toAddress: to_address,
                amount: amount.map?.((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
            };
        },
    },
    "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
        aminoType: "cosmos-sdk/MsgCreatePeriodVestAccount",
        toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods, }) => {
            return {
                from_address: fromAddress,
                to_address: toAddress,
                start_time: (0, helpers_js_1.omitDefault)(startTime)?.toString?.(),
                vesting_periods: vestingPeriods.map((el0) => ({
                    length: (0, helpers_js_1.omitDefault)(el0.length)?.toString?.(),
                    amount: el0.amount.map((el1) => ({
                        denom: el1.denom,
                        amount: el1.amount,
                    })),
                })),
            };
        },
        fromAmino: ({ from_address, to_address, start_time, vesting_periods, }) => {
            return {
                fromAddress: from_address,
                toAddress: to_address,
                startTime: start_time == null ? start_time : BigInt(start_time),
                vestingPeriods: vesting_periods.map?.((el0) => ({
                    length: el0.length == null ? el0.length : BigInt(el0.length),
                    amount: el0.amount.map?.((el1) => ({
                        denom: el1.denom,
                        amount: el1.amount,
                    })),
                })),
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map