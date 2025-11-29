//@ts-nocheck
/* eslint-disable */
import { buildTx } from "../../../helper-func-types.js";
import { MsgUpdateParams } from "./tx.js";
/**
 * @name updateParams
 * @package neutron.dynamicfees.v1
 * @see proto service: neutron.dynamicfees.v1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams,
});
