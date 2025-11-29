//@ts-nocheck
/* eslint-disable */
import { buildTx } from "../../../helper-func-types.js";
import { MsgRegisterInterchainAccount, MsgSubmitTx, MsgUpdateParams } from "./tx.js";
/**
 * @name registerInterchainAccount
 * @package neutron.interchaintxs.v1
 * @see proto service: neutron.interchaintxs.v1.RegisterInterchainAccount
 */
export const registerInterchainAccount = buildTx<MsgRegisterInterchainAccount>({
  msg: MsgRegisterInterchainAccount,
});
/**
 * @name submitTx
 * @package neutron.interchaintxs.v1
 * @see proto service: neutron.interchaintxs.v1.SubmitTx
 */
export const submitTx = buildTx<MsgSubmitTx>({
  msg: MsgSubmitTx,
});
/**
 * @name updateParams
 * @package neutron.interchaintxs.v1
 * @see proto service: neutron.interchaintxs.v1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams,
});
