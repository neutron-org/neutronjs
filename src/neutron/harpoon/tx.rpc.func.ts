//@ts-nocheck
/* eslint-disable */
import { buildTx } from "../../helper-func-types.js";
import { MsgManageHookSubscription } from "./tx.js";
/**
 * Updates hook subscriptions for a specific contract address.
 * To remove a subscription, pass an empty array to `hook_subscription.hooks`.
 * Can only be executed by the module's authority.
 * @name manageHookSubscription
 * @package neutron.harpoon
 * @see proto service: neutron.harpoon.ManageHookSubscription
 */
export const manageHookSubscription = buildTx<MsgManageHookSubscription>({
  msg: MsgManageHookSubscription,
});
