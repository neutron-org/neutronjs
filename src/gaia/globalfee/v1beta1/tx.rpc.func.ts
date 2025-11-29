//@ts-nocheck
/* eslint-disable */
import { buildTx } from "../../../helper-func-types.js";
import { MsgUpdateParams } from "./tx.js";
/**
 * @name updateParams
 * @package gaia.globalfee.v1beta1
 * @see proto service: gaia.globalfee.v1beta1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams,
});
