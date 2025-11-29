//@ts-nocheck
/* eslint-disable */
import { buildTx } from "../../helper-func-types.js";
import { MsgUpdateParams, MsgFundTreasury } from "./tx.js";
/**
 * Updates the parameters of the revenue module. This action can only be performed by the
 * module's authority.
 * @name updateParams
 * @package neutron.revenue
 * @see proto service: neutron.revenue.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams,
});
/**
 * FundTreasury funds the revenue treasury module account with the specified amount.
 * @name fundTreasury
 * @package neutron.revenue
 * @see proto service: neutron.revenue.FundTreasury
 */
export const fundTreasury = buildTx<MsgFundTreasury>({
  msg: MsgFundTreasury,
});
