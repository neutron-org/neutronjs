//@ts-nocheck
/* eslint-disable */
import { buildTx } from "../../../helper-func-types.js";
import { MsgUpdateParams } from "./tx.js";
/**
 * UpdateParams defines a (governance) operation for updating the x/auth module
 * parameters. The authority defaults to the x/gov module account.
 * @name updateParams
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams,
});
