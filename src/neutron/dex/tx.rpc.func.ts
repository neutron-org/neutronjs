//@ts-nocheck
/* eslint-disable */
import { buildTx } from "../../helper-func-types.js";
import {
  MsgDeposit,
  MsgWithdrawal,
  MsgPlaceLimitOrder,
  MsgWithdrawFilledLimitOrder,
  MsgCancelLimitOrder,
  MsgMultiHopSwap,
  MsgUpdateParams,
} from "./tx.js";
/**
 * @name deposit
 * @package neutron.dex
 * @see proto service: neutron.dex.Deposit
 */
export const deposit = buildTx<MsgDeposit>({
  msg: MsgDeposit,
});
/**
 * @name withdrawal
 * @package neutron.dex
 * @see proto service: neutron.dex.Withdrawal
 */
export const withdrawal = buildTx<MsgWithdrawal>({
  msg: MsgWithdrawal,
});
/**
 * @name placeLimitOrder
 * @package neutron.dex
 * @see proto service: neutron.dex.PlaceLimitOrder
 */
export const placeLimitOrder = buildTx<MsgPlaceLimitOrder>({
  msg: MsgPlaceLimitOrder,
});
/**
 * @name withdrawFilledLimitOrder
 * @package neutron.dex
 * @see proto service: neutron.dex.WithdrawFilledLimitOrder
 */
export const withdrawFilledLimitOrder = buildTx<MsgWithdrawFilledLimitOrder>({
  msg: MsgWithdrawFilledLimitOrder,
});
/**
 * @name cancelLimitOrder
 * @package neutron.dex
 * @see proto service: neutron.dex.CancelLimitOrder
 */
export const cancelLimitOrder = buildTx<MsgCancelLimitOrder>({
  msg: MsgCancelLimitOrder,
});
/**
 * @name multiHopSwap
 * @package neutron.dex
 * @see proto service: neutron.dex.MultiHopSwap
 */
export const multiHopSwap = buildTx<MsgMultiHopSwap>({
  msg: MsgMultiHopSwap,
});
/**
 * @name updateParams
 * @package neutron.dex
 * @see proto service: neutron.dex.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams,
});
