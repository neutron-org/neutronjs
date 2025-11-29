//@ts-nocheck
/* eslint-disable */
import { buildTx } from "../../helper-func-types.js";
import { MsgUpdateParams } from "./tx.js";
/**
 * @name updateParams
 * @package neutron.feerefunder
 * @see proto service: neutron.feerefunder.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams,
});
