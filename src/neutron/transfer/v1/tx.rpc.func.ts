//@ts-nocheck
/* eslint-disable */
import { buildTx } from "../../../helper-func-types.js";
import { MsgTransfer, MsgUpdateParams } from "./tx.js";
/**
 * Transfer defines a rpc handler method for MsgTransfer.
 * @name transfer
 * @package neutron.transfer
 * @see proto service: neutron.transfer.Transfer
 */
export const transfer = buildTx<MsgTransfer>({
  msg: MsgTransfer,
});
/**
 * UpdateParams defines a rpc handler for MsgUpdateParams.
 * @name updateParams
 * @package neutron.transfer
 * @see proto service: neutron.transfer.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams,
});
