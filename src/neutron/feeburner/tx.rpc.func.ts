//@ts-nocheck
/* eslint-disable */
import { buildTx } from "../../helper-func-types.js";
import { MsgUpdateParams } from "./tx.js";
/**
 * @name updateParams
 * @package neutron.feeburner
 * @see proto service: neutron.feeburner.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams,
});
