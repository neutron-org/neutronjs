//@ts-nocheck
/* eslint-disable */
import { buildTx } from "../../helper-func-types.js";
import { MsgAddSchedule, MsgRemoveSchedule, MsgUpdateParams } from "./tx.js";
/**
 * Adds new schedule.
 * @name addSchedule
 * @package neutron.cron
 * @see proto service: neutron.cron.AddSchedule
 */
export const addSchedule = buildTx<MsgAddSchedule>({
  msg: MsgAddSchedule,
});
/**
 * Removes schedule.
 * @name removeSchedule
 * @package neutron.cron
 * @see proto service: neutron.cron.RemoveSchedule
 */
export const removeSchedule = buildTx<MsgRemoveSchedule>({
  msg: MsgRemoveSchedule,
});
/**
 * Updates the module parameters.
 * @name updateParams
 * @package neutron.cron
 * @see proto service: neutron.cron.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams,
});
