//@ts-nocheck
/* eslint-disable */
import { buildTx } from "../../helper-func-types.js";
import { MsgUpdateParams, MsgResubmitFailure } from "./tx.js";
/**
 * @name updateParams
 * @package neutron.contractmanager
 * @see proto service: neutron.contractmanager.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams,
});
/**
 * @name resubmitFailure
 * @package neutron.contractmanager
 * @see proto service: neutron.contractmanager.ResubmitFailure
 */
export const resubmitFailure = buildTx<MsgResubmitFailure>({
  msg: MsgResubmitFailure,
});
