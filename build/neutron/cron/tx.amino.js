"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
/* eslint-disable */
const schedule_js_1 = require("./schedule.js");
const helpers_js_1 = require("../../helpers.js");
exports.AminoConverter = {
    "/neutron.cron.MsgAddSchedule": {
        aminoType: "cron/MsgAddSchedule",
        toAmino: ({ authority, name, period, msgs, executionStage, }) => {
            return {
                authority,
                name,
                period: (0, helpers_js_1.omitDefault)(period)?.toString?.(),
                msgs: msgs.map((el0) => ({
                    contract: el0.contract,
                    msg: el0.msg,
                })),
                execution_stage: executionStage,
            };
        },
        fromAmino: ({ authority, name, period, msgs, execution_stage, }) => {
            return {
                authority,
                name,
                period: period == null ? period : BigInt(period),
                msgs: msgs.map?.((el0) => ({
                    contract: el0.contract,
                    msg: el0.msg,
                })),
                executionStage: execution_stage == null ? execution_stage : (0, schedule_js_1.executionStageFromJSON)(execution_stage),
            };
        },
    },
    "/neutron.cron.MsgRemoveSchedule": {
        aminoType: "cron/MsgRemoveSchedule",
        toAmino: ({ authority, name }) => {
            return {
                authority,
                name,
            };
        },
        fromAmino: ({ authority, name }) => {
            return {
                authority,
                name,
            };
        },
    },
    "/neutron.cron.MsgUpdateParams": {
        aminoType: "cron/MsgUpdateParams",
        toAmino: ({ authority, params }) => {
            return {
                authority,
                params: {
                    security_address: params.securityAddress,
                    limit: (0, helpers_js_1.omitDefault)(params.limit)?.toString?.(),
                },
            };
        },
        fromAmino: ({ authority, params }) => {
            return {
                authority,
                params: params == null
                    ? params
                    : {
                        securityAddress: params.security_address,
                        limit: params.limit == null ? params.limit : BigInt(params.limit),
                    },
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map