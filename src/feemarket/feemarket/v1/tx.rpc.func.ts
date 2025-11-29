//@ts-nocheck
/* eslint-disable */
import { buildTx } from "../../../helper-func-types.js";
import { MsgParams } from "./tx.js";
/**
 * Params defines a method for updating the feemarket module parameters.
 * @name params
 * @package feemarket.feemarket.v1
 * @see proto service: feemarket.feemarket.v1.Params
 */
export const params = buildTx<MsgParams>({
  msg: MsgParams,
});
